import "./Projects.css"
import ProjectCard from "./ProjectCard"

function Projects() {

    const projects = [
        {
            id: 1,
            title: "Focusly",
            description: "productivity dashboard built with javascript"
        },
        {
            id: 2,
            title: "Cinematic Portfolio",
            description: "interactive portfolio project built with react"
        },
        {
            id: 3,
            title: "MindCare App",
            description: "mental wellness concept application"
        }
    ]

    return (
        <section className="projects" id="projects">

            <h2 className="projects-title">Projects</h2>

            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                />
            ))}

        </section>
    )
}

export default Projects