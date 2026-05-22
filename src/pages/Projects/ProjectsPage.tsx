const projects = [
  {
    title: "Government Mobile App",
    description:
      "Mobile application with geolocation, biometric authentication, and push notifications.",
    stack: ["React Native", "Firebase", "REST APIs", "TypeScript"],
  },
  {
    title: "Scalable REST API",
    description:
      "Backend services built with Node.js, Express, TypeScript, and PostgreSQL.",
    stack: ["Node.js", "Express", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Administrative Dashboard",
    description:
      "React dashboard for operational monitoring and administrative tracking.",
    stack: ["React", "TypeScript", "REST APIs", "PostgreSQL"],
  },
];

export function ProjectsPage() {
  return (
    <section className="page">
      <p className="eyebrow">projects.md</p>

      <h1>Projects</h1>

      <div className="grid-3">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-list">
              {project.stack.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <button className="button button-secondary" type="button">
              View Case Study
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}