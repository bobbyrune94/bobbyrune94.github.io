import { XMLParser } from 'fast-xml-parser';

import legoRecommendations from "../configs/legoRecommend.json"
import deleteKeywords from "../configs/legoDeleteKeywords.json"

const fastXmlParser = new XMLParser();

interface AffiliateLinks {
    [key: string]: LegoLink;
}

interface LegoLink {
    mids: number[];
    setNumber: string;
    theme: string;
    year: number;
    usdPrice: number;
    cadPrice: number;
    pieceCount: number;
    description: string;
    imageUrl: string;
    usProductLink: string;
    caProductLink: string;
    kennyHas?: boolean;
    kennyWants?: boolean;
}

const affiliateLinks: AffiliateLinks = {};

const RAKUTEN_CLIENT_ID = process.env.RAKUTEN_CLIENT_ID;
const RAKUTEN_CLIENT_SECRET = process.env.RAKUTEN_CLIENT_SECRET;
const RAKUTEN_SCOPE = process.env.RAKUTEN_SCOPE;


const shouldDeleteProduct = (item: any) => {
    for (const keyword of deleteKeywords.deleteKeyWords) {
        if (JSON.stringify(item).toLowerCase().includes(keyword)) {
            console.log("Deleting", item.productname, "for having", keyword);
            return true;
        }
    }
    return false;
}

const isKennyRecommend = (productName: string) => {
    if (legoRecommendations.kennyHas.includes(productName)) {
        return "has";
    } else if (legoRecommendations.kennyWants.includes(productName)) {
        return "wants";
    } else {
        return undefined;
    }
}

const fetchRakutenToken = async () => {
    const base64data = Buffer.from(`${RAKUTEN_CLIENT_ID}:${RAKUTEN_CLIENT_SECRET}`).toString('base64');
    const url = `https://api.linksynergy.com/token`;
    const response = await fetch(url,
        {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${base64data}`,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `scope=${RAKUTEN_SCOPE}`
        }
    );

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const tokenData = await response.json();

    console.log("Rakuten token response:", tokenData);

    return tokenData.access_token;
}

const fetchRakutenLinks = async (apiKey: string, pageNumber: number) => {
    const url = `https://api.linksynergy.com/productsearch/1.0?pagenumber=${pageNumber}&sort=productname&sorttype=asc&max=100`;
    const response = await fetch(url,
        {
            headers: {
                "Authorization": `Bearer ${apiKey}`
            },
        }
    );

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const links = fastXmlParser.parse(await response.text());
    return links;
}

const generateAffiliateLinkData = async () => {
    let pageNumber = 1;
    let totalPages = 1; // Placeholder, update this based on the API response of the first page
    let deletedCount = 0;
    let duplicateCount = 0;
    let doubleLinkCount = 0;
    try {
        const apiKey = await fetchRakutenToken();

        while (pageNumber <= totalPages) {
            console.log(`Fetching page ${pageNumber} of Rakuten links...`);
            const links = await fetchRakutenLinks(apiKey, pageNumber);

            if (pageNumber === 1) {
                console.log("Total Pages:", links.result.TotalPages);
                totalPages = links.result.TotalPages;
            }
            links.result.item.forEach((item: any) => {
                if (shouldDeleteProduct(item)) {
                    deletedCount++;
                    return;
                }
                if (affiliateLinks[item.productname]) {
                    if (affiliateLinks[item.productname].mids.includes(item.mid)) {
                        duplicateCount++;
                        return;
                    }
                    affiliateLinks[item.productname].mids.push(item.mid);
                    doubleLinkCount++;
                }
                const product: LegoLink = {
                    mids: [item.mid],
                    setNumber: "",
                    theme: "",
                    year: -1,
                    usdPrice: item.mid == 13923 ? item.price : affiliateLinks[item.productname]?.usdPrice || 0,
                    cadPrice: item.mid == 36166 ? item.price : affiliateLinks[item.productname]?.cadPrice || 0,
                    pieceCount: -1,
                    description: item.description.short,
                    imageUrl: item.imageurl,
                    usProductLink: item.mid == 13923 ? item.linkurl : affiliateLinks[item.productname]?.usProductLink || "",
                    caProductLink: item.mid == 36166 ? item.linkurl : affiliateLinks[item.productname]?.caProductLink || "",
                };

                const isRecommended = isKennyRecommend(item.productname);

                if (isRecommended === "has") {
                    product.kennyHas = true
                } else if (isRecommended === "wants") {
                    product.kennyWants = true
                }

                affiliateLinks[item.productname] = product
            });
            pageNumber++;
        }

        console.log("Number of Products Found", Object.keys(affiliateLinks).length);
        console.log("Number of Duplicates Found", duplicateCount);
        console.log("Number of Double Links Found", doubleLinkCount);
        console.log("Number of Products Deleted", deletedCount);

        return affiliateLinks;
    }
    catch (error) {
        console.error("Error fetching Rakuten links:", error);
        return affiliateLinks; // Return whatever links were fetched before the error occurred
    }
}

export {
    generateAffiliateLinkData
}