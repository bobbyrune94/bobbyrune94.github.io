import ProjectCard from "../components/ProjectCard";
import projects from "../configs/projects.json";

const ProjectsPage = () => {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-4xl font-bold mb-4">Project and Skills</h1>
                <p className="text-lg">I've worked with a lot of different technologies and acquired many skills throughout my career and schooling.</p>
                <p className="text-lg">Here are some of the projects I've worked on and the skills I've gained along the way.</p>
                <p className="text-lg">If you're interested in learning more about my work or collaborating on a project, feel free to reach out!</p>
            </div>
            <div className="flex flex-col gap-4">
                {projects.projects.map((project, index) => (
                    <ProjectCard key={index} title={project.title} description={project.description} skills={project.skills} />
                ))}
            </div>
        </div>
    )
}

export default ProjectsPage