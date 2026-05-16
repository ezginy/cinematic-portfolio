function Projects() {

    const projects = [
        "Focusly",
        "Cinematic Portfolio",
        "MindCare App"
    ]

    return (
        <section>

            <h2>Projects</h2>
            
            {projects.map((project) => (
                <p>{project}</p>
            ))}

        </section>
    )
}

export default Projects