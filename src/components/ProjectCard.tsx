import { useTheme } from "../context/ThemeContext";

interface ProjectCardProps {
    title: string;
    description: string;
    skills: string[];
}

const ProjectCard = (props: ProjectCardProps) => {
    const { theme } = useTheme();

    return (
        <div className="group border border-gray-300 rounded-lg p-4 shadow-md mr-4 hover:border-red-500">
            <h2 className="text-xl font-bold mb-4 group-hover:text-red-500">{props.title}</h2>
            <p className="mb-4">{props.description}</p>
            <div className="flex flex-wrap gap-2">
                {props.skills.map((skill, index) => (
                    <span key={index} className={`${theme === "light" ? "bg-gray-200" : "bg-gray-700"} text-sm px-2 py-1 rounded`}>{skill}</span>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard;