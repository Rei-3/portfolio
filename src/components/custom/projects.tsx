export default function Projects() {

    const projects = [
        {
            title: "Project One",
            description: "Description for project one.",
            link: "https://example.com/project-one"
        },
        {
            title: "Project Two",
            description: "Description for project two.",
            link: "https://example.com/project-two"
        },
        {
            title: "Project Three",
            description: "Description for project three.",
            link: "https://example.com/project-three"
        }
    ];
    return (
        <div>
            <h2>Projects</h2>
            {projects.map((project, index)=>(
                <div key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            ))}
        </div>
    );

}