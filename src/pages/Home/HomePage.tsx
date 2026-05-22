import { Link } from "react-router";

export function HomePage() {
  return (
    <section className="page page-home">
      <div className="code-window">
        <div className="code-line">
          <span className="line-number">1</span>
          <span className="token-keyword">const</span>{" "}
          <span className="token-variable">developer</span>{" "}
          <span>=</span> <span>{"{"}</span>
        </div>

        <div className="code-line">
          <span className="line-number">2</span>
          <span className="token-property">name</span>:{" "}
          <span className="token-string">"Pablo Hernán Muñoz García"</span>,
        </div>

        <div className="code-line">
          <span className="line-number">3</span>
          <span className="token-property">role</span>:{" "}
          <span className="token-string">"Full-Stack Developer"</span>,
        </div>

        <div className="code-line">
          <span className="line-number">4</span>
          <span className="token-property">location</span>:{" "}
          <span className="token-string">"Pachuca de Soto, Mexico"</span>,
        </div>

        <div className="code-line">
          <span className="line-number">5</span>
          <span className="token-property">stack</span>:{" "}
          <span className="token-array">
            ["React", "React Native", "Node.js", "APIs REST", "TypeScript", "PostgreSQL"]
          </span>
        </div>

        <div className="code-line">
          <span className="line-number">6</span>
          <span>{"}"}</span>;
        </div>
      </div>

      <div className="hero-card">
        <p className="eyebrow">pablo.profile.ts</p>

        <h1>Pablo Hernán Muñoz García</h1>

        <h2>Full-Stack Developer</h2>

        <p className="hero-description">
          Building scalable web and mobile applications with React, React Native,
          Node.js, TypeScript, PostgreSQL, and Linux-based deployments.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="button button-primary">
            View Projects
          </Link>

          <a href="/pablo-munoz-cv.pdf" className="button button-secondary">
            Download Resume
          </a>

          <Link to="/contact" className="button button-ghost">
            Contact Me
          </Link>
        </div>

        <div className="tech-list">
          {[
            "React",
            "React Native",
            "Node.js",
            "TypeScript",
            "PostgreSQL",
            "SQL Server",
            "Linux",
            "Nginx",
            "PM2",
          ].map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}