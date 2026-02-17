import { useTheme } from "../context/ThemeContext";

import codes from "../configs/friendCodes.json";
import FriendCodeCard from "../components/FriendCodeCard";

const FriendCodePage = () => {
    const { theme } = useTheme();

    return (
        <div>
            <div className="flex flex-col mb-8">
                <h1 className="text-4xl font-bold mb-4">Friend Codes Page</h1>
                <p className="text-lg">Add me on your favorite games! Click the copy button to grab my friend code and send me an invite</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {codes.friendCodes.map((code, index) => (
                    <FriendCodeCard
                        key={index}
                        title={code.title} 
                        username={code.username} 
                        code={code.code} 
                        description={code.description} 
                    />
                ))}
            </div>
        </div>
    )
}

export default FriendCodePage;