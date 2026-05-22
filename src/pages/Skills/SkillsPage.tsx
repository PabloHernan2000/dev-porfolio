const skills = {
  Frontend: ["React", "React Native", "TypeScript", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node.js", "Express.js", "PHP", "REST APIs", "Authentication"],
  Databases: ["PostgreSQL", "SQL Server", "MongoDB"],
  DevOps: ["Rocky Linux", "Nginx", "PM2", "Firebase", "Git", "Postman"],
};

export function SkillsPage() {
  return (
    <section className="page">
      <p className="eyebrow">skills.config.ts</p>

      <h1>Technical Skills</h1>

      <div className="grid-2">
        {Object.entries(skills).map(([category, items]) => (
          <article key={category} className="info-card">
            <h3>{category}</h3>

            <div className="tech-list">
              {items.map((skill) => (
                <span key={skill} className="tech-badge">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}