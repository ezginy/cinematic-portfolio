import "./Projects.css"

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
        <section className="projects">

            <h2 className="projects-title">Projects</h2>

            {projects.map((project) => (
                <div className="project-card" key={project.id}>

                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                </div>
            ))}

        </section>
    )
}

export default Projects