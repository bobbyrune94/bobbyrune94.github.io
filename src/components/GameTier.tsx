import { useTheme } from "../context/ThemeContext";

interface GameTierProps {
    title: string;
    description: string;
    color: string;
    games: string[];
}

const GameTier = (props: GameTierProps) => {
    const { theme } = useTheme();

    return (
        <div className={`flex flex-row group border rounded-lg shadow-md mr-4`}>
            <div className={`${props.color} p-4 w-1/5 flex flex-col items-center justify-center rounded-l-lg shrink-0`}>
                <h2 className="text-xl font-bold mb-4">{props.title}</h2>
                <p className="">{props.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 p-4">
                {props.games.map((game, index) => (
                    <span key={index} className={`${theme === "light" ? "bg-gray-200" : "bg-gray-700"} text-sm px-2 py-1 rounded`}>{game}</span>
                ))}
            </div>
        </div>
    )
}

export default GameTier;