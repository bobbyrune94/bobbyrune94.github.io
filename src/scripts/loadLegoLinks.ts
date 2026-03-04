import * as fs from 'fs';
import { stringSimilarity } from "string-similarity-js";

import { generateAffiliateLinkData } from './rakutenApi';
import { fetchAllLegoSets, fetchLegoThemeIds, getSpecificTheme } from './rebrickableApi';

const PRICE_PER_PIECE = 0.1;

const trimSetName = (name: string) => {
    return name.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();
}

interface SimilarityResult {
    setNumber: string;
    name: string;
    pieceCount?: number;
    score: number;
}

const getClosestMatchingSet = (productName: string, legoSetList: Record<string, any>) => {
    const trimmedProductName = trimSetName(productName);
    let bestSimilarities: SimilarityResult[] = [];
    Object.keys(legoSetList).forEach(key => {
        const similarity = stringSimilarity(trimSetName(legoSetList[key].name), trimmedProductName);
        if (bestSimilarities.length === 0 || similarity > bestSimilarities[0].score) {
            bestSimilarities = [{ setNumber: key, name: legoSetList[key].name, pieceCount: legoSetList[key].num_parts, score: similarity }];
        } else if (similarity === bestSimilarities[0].score) {
            bestSimilarities.push({ setNumber: key, name: legoSetList[key].name, pieceCount: legoSetList[key].num_parts, score: similarity });
        }
    });
    return bestSimilarities;
}

const main = async () => {
    const [rakutenLinkData, legoThemeIds, legoSetList] = await Promise.all([
        generateAffiliateLinkData(),
        fetchLegoThemeIds(),
        fetchAllLegoSets()
    ]);

    fs.writeFileSync('src/configs/legoThemeIds.json', JSON.stringify(legoThemeIds, null, 2));
    fs.writeFileSync('src/configs/legoSetList.json', JSON.stringify(legoSetList, null, 2));

    console.log("Enriching Rakuten link data with Rebrickable set information...");

    let missingSetCount = 0;
    let multipleMatchCount = 0;
    Object.keys(rakutenLinkData).forEach(productName => {
        const bestSimilarities = getClosestMatchingSet(productName, legoSetList);
        const bestSimilarity = bestSimilarities[0]; // Get the first one (or one of the best matches)

        if (bestSimilarity.score >= 0.79 && bestSimilarities.length === 1) { // Only consider it a match if the score is above 0.79 and it's the only best match
            const bestMatchSetData = legoSetList[bestSimilarity.setNumber];
            rakutenLinkData[productName].setNumber = bestMatchSetData.set_num;
            rakutenLinkData[productName].theme = getSpecificTheme(bestMatchSetData.theme_id);
            rakutenLinkData[productName].year = bestMatchSetData.year;
            rakutenLinkData[productName].pieceCount = bestMatchSetData.num_parts;
        } else if (bestSimilarities.length > 1 && bestSimilarity.score >= 0.79) { // If there are multiple best matches with the same score above 0.79, log it for manual review
            console.log(`Multiple sets found for product: ${productName} - Best matches: ${bestSimilarities.map(sim => sim.setNumber).join(", ")} with similarity score of ${bestSimilarity.score}`);
            multipleMatchCount++;
        } else {
            console.log(`No matching Lego set found for product: ${productName} - Best matches: ${bestSimilarities.map(sim => sim.setNumber).join(", ")} with similarity score of ${bestSimilarity.score}`);
            missingSetCount++;
        }
    });

    console.log("Number of Products with Multiple Matches:", multipleMatchCount);
    console.log("Number of Missing Sets:", missingSetCount);

    fs.writeFileSync('src/configs/legoAffiliateLinks.json', JSON.stringify(rakutenLinkData, null, 2));
}

main();