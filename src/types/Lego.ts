interface LegoLinkList {
    [key: string]: LegoLink;
}

interface LegoLink {
    theme: string,
    year: number,
    usdPrice: number,
    cadPrice: number,
    pieceCount: number,
    description: string,
    imageUrl: string,
    usProductLink: string,
    caProductLink: string,
    kennyHas?: boolean,
    kennyWants?: boolean
}

export type { LegoLink, LegoLinkList };