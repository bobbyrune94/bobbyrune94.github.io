interface GameTierList {
    [key: string]: {
        description: string,
        "tailwind-color": string,
        games: string[]
    }
}

export type { GameTierList };