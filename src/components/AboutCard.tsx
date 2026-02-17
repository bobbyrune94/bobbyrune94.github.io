interface AboutCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

const AboutCard = (props: AboutCardProps) => {
    return (
        <div className="group border-2 border-gray-300 rounded-lg p-4 space-y-2 hover:border-red-500 flex flex-row items-start">
            {props.icon && <div className="mr-4">{props.icon}</div>}
            <div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-red-500">{props.title}</h3>
                <p className="text-lg mb-4">{props.description}</p>
            </div>

        </div>
    )
}

export default AboutCard;