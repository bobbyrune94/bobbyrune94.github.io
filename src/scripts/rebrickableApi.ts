interface LegoTheme {
    id: number;
    name: string;
    parent_id: number | null;
}

interface LegoSet {
    set_num: string;
    name: string;
    year: number;
    theme_id: number;
    num_parts: number;
    set_img_url: string;
    set_url: string;
}

const themeIds: { [key: number]: LegoTheme } = {};

const REBRICKABLE_API_KEY = "7c96f3e9d7251f9b75e3c74ba046f3d7";

const fetchLegoThemeIds = async () => {
    try {
        const response = await fetch("https://rebrickable.com/api/v3/lego/themes?page_size=1000",
            {
                headers: {
                    "Authorization": `key ${REBRICKABLE_API_KEY}`
                }
            }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const themes = await response.json();

        themes.results.forEach((theme: LegoTheme) => {
            themeIds[theme.id] = theme;
        });

        console.log("Number of Themes Found", Object.keys(themeIds).length);
        return themeIds;
    } catch (error) {
        console.error("Error fetching Lego theme IDs:", error);
        return themeIds; // Return whatever themes were fetched before the error occurred
    }
}

const getSpecificTheme = (themeId: number) => {
    let themeName = themeIds[themeId].name;

    let subTheme = themeIds[themeId];
    while (subTheme.parent_id) {
        themeName += ` > ${themeIds[subTheme.parent_id].name}`;
        subTheme = themeIds[subTheme.parent_id];
    }

    return themeName;
}

const fetchLegoSetsPage = async (pageNumber: number, pageSize: number) => {
    try {
        const currentYear = new Date().getFullYear();
        const response = await fetch(`https://rebrickable.com/api/v3/lego/sets?page=${pageNumber}&page_size=${pageSize}&min_year=${currentYear - 5}`,
            {
                headers: {
                    "Authorization": `key ${REBRICKABLE_API_KEY}`
                }
            }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const setList = await response.json();
        return setList;
    } catch (error) {
        console.error(`Error fetching Lego sets on page ${pageNumber}:`, error);
    }
}

const fetchAllLegoSets = async () => {
    let pageNumber = 1;
    let pageSize = 1000;
    let totalSets = -1; // Placeholder, update this based on the API response of the first page
    const allSets: { [key: string]: LegoSet } = {};
    try {
        while (true) {
            console.log(`Fetching page ${pageNumber} of Lego sets...`);
            const setList = await fetchLegoSetsPage(pageNumber, pageSize);

            if (totalSets === -1) {
                totalSets = setList.count;
                console.log("Total Sets to Fetch:", totalSets);
            }

            setList.results.forEach((set: LegoSet) => {
                allSets[set.set_num] = set;
            });

            if (setList.results.length < pageSize) {
                // We've reached the last page
                break;
            }

            pageNumber++;
        }

        console.log("Number of Sets Found", Object.keys(allSets).length);
        return allSets;
    } catch (error) {
        console.error("Error fetching Lego sets:", error);
        return {}; // Return an empty object in case of error
    }
}

export {
    fetchLegoThemeIds,
    getSpecificTheme,
    fetchAllLegoSets
}