import GameTier from "../components/GameTier"

import gamesList from "../configs/gamesTierList.json"

interface GameTierList {
    [key: string]: {
        description: string,
        "tailwind-color": string,
        games: string[]
    }
}

const GamesPage = () => {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-4xl font-bold mb-4">Games</h1>
                <p className="text-lg">I love playing video games in my free time, with friends, and on stream! Here is my personal tier list of most of the games I've played.</p>
            </div>
            <div className="flex flex-col gap-4">
                {Object.keys(gamesList as GameTierList).map((tier) => {
                    const tierData = (gamesList as GameTierList)[tier];
                    return (
                        <GameTier
                            key={tier}
                            title={tier}
                            description={tierData.description}
                            color={tierData["tailwind-color"]}
                            games={tierData.games}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default GamesPage