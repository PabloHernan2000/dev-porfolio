export function ExperiencePage() {
  return (
    <section className="page">
      <p className="eyebrow">experience.json</p>

      <h1>Professional Experience</h1>

      <div className="timeline">
        <article className="timeline-card">
          <span className="timeline-date">Mar 2024 — Present</span>
          <h3>Government of the State of Hidalgo</h3>
          <p>Full-Stack Developer / Area Deputy Director</p>
          <ul>
            <li>React Native mobile applications.</li>
            <li>REST APIs with Node.js, Express, and TypeScript.</li>
            <li>PostgreSQL optimization and Linux deployments.</li>
          </ul>
        </article>

        <article className="timeline-card">
          <span className="timeline-date">May 2023 — Mar 2024</span>
          <h3>Municipal Government of Pachuca de Soto</h3>
          <p>Web Developer and Systems Support</p>
          <ul>
            <li>Internal administrative systems.</li>
            <li>PHP, Bootstrap, jQuery, and SQL Server.</li>
            <li>Database administration and system support.</li>
          </ul>
        </article>

        <article className="timeline-card">
          <span className="timeline-date">Jul 2022 — Dec 2022</span>
          <h3>UAEH - Academic Computing Center</h3>
          <p>Full-Stack Developer Intern</p>
          <ul>
            <li>Academic survey system.</li>
            <li>Automation of manual processes.</li>
            <li>PHP, SQL Server, Bootstrap, and jQuery.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}