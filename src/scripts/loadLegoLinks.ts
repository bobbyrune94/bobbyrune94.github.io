import * as fs from 'fs';
import { stringSimilarity } from "string-similarity-js";

import { generateAffiliateLinkData } from './rakutenApi';

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
    const rakutenLinkData = await generateAffiliateLinkData();
    fs.writeFileSync('src/configs/legoAffiliateLinks.json', JSON.stringify(rakutenLinkData, null, 2));
}

main();