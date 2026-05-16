// Reusable project card component
function ProjectCard(props) {
    return (
        <div className="project-card">

            <h3 className="project-card-title">
                {props.title}
            </h3>

            <p className="project-card-description">
                {props.description}
            </p>

        </div>
    )
}

export default ProjectCard