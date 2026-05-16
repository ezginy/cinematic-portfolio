// Reusable project card component
function ProjectCard(props) {
    return (
        <div className="project-card">

            <div className="project-image">
                project preview
            </div>

            <h3 className="project-card-title">
                {props.title}
            </h3>

            <p className="project-card-description">
                {props.description}
            </p>

            <div className="project-technologies">
                {props.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="technology-tag"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <button className="project-button">
                view project
            </button>

        </div>
    )
}

export default ProjectCard