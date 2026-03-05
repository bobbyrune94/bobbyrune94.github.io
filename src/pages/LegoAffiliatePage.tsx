import { useEffect, useState } from 'react';
import LegoLinks from '../configs/legoAffiliateLinks.json';

import { LegoLink, LegoLinkList } from '../types/Lego';
import LegoProductCard from '../components/LegoProductCard';

const normalizeString = (str: string) => {
    return str.toLowerCase()
    .normalize("NFD") // Decompose combined graphemes into base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, ""); // Remove the diacritical marks (Unicode range U+0300 to U+036F);
}

const isSearchInProduct = (productName: string, productInfo: LegoLink, searchString: string, region: string, isKennyRecommended: boolean) => {
    const hasRegionLink = region === "" ? true :
        region === "USA" ? productInfo.usProductLink :
            productInfo.caProductLink;
    const isKennyMatch = !isKennyRecommended || (productInfo.kennyHas || productInfo.kennyWants);
    const normalizedSearchString = normalizeString(searchString);
    return hasRegionLink && isKennyMatch && (
        normalizeString(productName).includes(normalizedSearchString) ||
        normalizeString(productInfo.description).includes(normalizedSearchString) ||
        normalizeString(productInfo.theme).includes(normalizedSearchString)
    );
}

const LegoAffiliatePage = () => {
    const masterLinkList: LegoLinkList = LegoLinks;
    const [searchString, setSearchString] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(18);
    const [legoLinks, setLegoLinks] = useState<LegoLinkList>(LegoLinks);
    const [region, setRegion] = useState("USA");
    const [isKennyRecommended, setIsKennyRecommended] = useState(false);
    const [totalResults, setTotalResults] = useState(Object.keys(LegoLinks).length);

    const updateSearchString = (newSearchString: string) => {
        setSearchString(newSearchString);
        setPageNumber(1); // Reset to first page whenever search string changes
    }

    const changePageNumber = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
        window.scrollTo(0, 0); // Scroll to top whenever page number changes
    }

    useEffect(() => {
        const pageLinks: LegoLinkList = {};
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const filteredKeys = Object.keys(masterLinkList).filter(key => isSearchInProduct(key, masterLinkList[key], searchString, region, isKennyRecommended));
        for (let i = startIndex; i < Math.min(endIndex, filteredKeys.length); i++) {
            pageLinks[filteredKeys[i]] = masterLinkList[filteredKeys[i]];
        }
        setTotalResults(filteredKeys.length);
        setLegoLinks(pageLinks);
    }, [searchString, pageNumber, pageSize, region, isKennyRecommended]);

    return (
        <div>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div>
                    <a href="https://click.linksynergy.com/fs-bin/click?id=q6G0yoAN6jI&offerid=1606623.10001551&subid=0&type=4">
                        <img alt="LEGO Brand Retail" src="https://ad.linksynergy.com/fs-bin/show?id=q6G0yoAN6jI&bids=1606623.10001551&subid=0&type=4&gridnum=0" />
                    </a>
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-4">Lego Affiliate Links</h1>
                    <p className="text-lg">I am a Lego Affiliate! If you're looking to buy LEGO sets, please use the links below to support me.</p>
                    <p>How It Works: You pay full price from Lego.com and I get a small commission. No extra cost to you!</p>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">LEGO Products</h2>
                        <p>Search for sets you're interested in (themes, set names):</p>
                        <input className="border border-gray-300 rounded-md p-2 w-full max-w-md" placeholder="Search for LEGO products..." value={searchString} onChange={(e) => updateSearchString(e.target.value)} />
                    </div>
                    <div className="flex flex-row items-start gap-10 mt-4">
                        <div>
                            <form>
                                <label>
                                    <input type="checkbox" id="USA" name="color" value="red" 
                                        onClick={() => setIsKennyRecommended(!isKennyRecommended)} className="mr-2" />
                                    Kenny Recommended
                                </label>
                            </form>
                        </div>
                        <form>
                            <p>Where are you from?</p>
                            <label>
                                <input type="radio" id="USA" name="color" value="red" onChange={() => setRegion("USA")} className="mr-2"  checked={region === "USA"} />
                                USA
                            </label>
                            <br />
                            <label>
                                <input type="radio" id="Canada" name="color" value="blue" onChange={() => setRegion("Canada")} className="mr-2"  checked={region === "Canada"} />
                                Canada
                            </label>
                        </form>
                    </div>
                </div>
                <div className="mt-8">
                    <p>{totalResults} products found</p>
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                        {legoLinks && Object.keys(legoLinks).map((key, index) => {
                            return (
                                <div key={index}>
                                    {LegoProductCard({ productName: key, productInfo: legoLinks[key], linkRegion: region })}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-4 mt-8">
                    <button
                        disabled={pageNumber === 1}
                        onClick={() => changePageNumber(Math.max(pageNumber - 1, 1))} className="px-4 py-2 bg-gray-500 rounded-md mr-2">
                        Previous
                    </button>
                    <p>Page {pageNumber} of {Math.ceil(totalResults / pageSize)}</p>
                    <button
                        disabled={pageNumber === Math.ceil(totalResults / pageSize)}
                        onClick={() => changePageNumber(pageNumber + 1)}
                        className="px-4 py-2 bg-gray-500 rounded-md"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LegoAffiliatePage;