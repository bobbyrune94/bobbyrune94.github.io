import { useTheme } from "../context/ThemeContext";

interface FriendCodeCardProps {
    title: string;
    username: string;
    code: string;
    description?: string;
}

const FriendCodeCard = (props: FriendCodeCardProps) => {
    const { theme } = useTheme();

    const copyCodeToClipboard = () => {
        navigator.clipboard.writeText(props.code);
    }

    return (
        <div className="border border-gray-300 rounded-lg p-4 shadow-md mr-4 w-64">
            <h2 className="text-xl font-bold mb-4">{props.title}</h2>
            
            <p className="mb-8">@{props.username}</p>
            <div className="flex flex-row items-center justify-between mb-4 gap-4">
                <p className={`${theme === "light" ? "bg-gray-200" : "bg-gray-700"} p-4 rounded-lg`}>{props.code}</p>
                <div onClick={copyCodeToClipboard} className="cursor-pointer hover:bg-gray-300 p-2 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 11c0-2.828 0-4.243.879-5.121C7.757 5 9.172 5 12 5h3c2.828 0 4.243 0 5.121.879C21 6.757 21 8.172 21 11v5c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-3c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16z"/><path d="M6 19a3 3 0 0 1-3-3v-6c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h4a3 3 0 0 1 3 3"/></g></svg>
                </div>
            </div>
            {props.description && <p className="mt-2">{props.description}</p>}
        </div>
    )
}

export default FriendCodeCard;