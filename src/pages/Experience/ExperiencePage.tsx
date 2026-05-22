import { useLanguage } from "../../context/LanguageContext";

export function ExperiencePage() {
  const { t } = useLanguage();

  return (
    <section className="page">
      <p className="eyebrow">{t.experience.fileName}</p>

      <h1>{t.experience.title}</h1>

      <p className="page-description">{t.experience.description}</p>

      <div className="timeline">
        {t.experience.items.map((experience) => (
          <article key={experience.company} className="timeline-card">
            <span className="timeline-date">{experience.period}</span>

            <h3>{experience.company}</h3>

            <p className="timeline-role">{experience.role}</p>

            <p className="timeline-location">{experience.location}</p>

            <ul>
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <div className="tech-list">
              {experience.stack.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}