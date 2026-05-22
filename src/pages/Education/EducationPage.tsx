import { useLanguage } from "../../context/LanguageContext";

export function EducationPage() {
  const { t, language } = useLanguage();

  return (
    <section className="page">
      <p className="eyebrow">{t.education.fileName}</p>

      <h1>{t.education.title}</h1>

      <p className="page-description">{t.education.description}</p>

      <div className="timeline">
        {t.education.items.map((item) => (
          <article key={item.institution} className="timeline-card">
            <span className="timeline-date">{item.period}</span>

            <h3>{item.institution}</h3>

            <p className="timeline-role">{item.degree}</p>

            <p className="timeline-location">{item.location}</p>
          </article>
        ))}
      </div>

      <div className="info-card education-note">
        <h3>{language === 'en' ? 'Cybersecurity focus' : 'Enfoque en la ciberseguridad'}</h3>
        <p>{t.education.note}</p>
      </div>
    </section>
  );
}