import { useLanguage } from "../../context/LanguageContext";

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <section className="page">
      <p className="eyebrow">{t.about.fileName}</p>

      <h1>{t.about.title}</h1>

      <p className="page-description">{t.about.description}</p>

      <p className="page-description">{t.about.secondDescription}</p>

      <div className="grid-3">
        {t.about.cards.map((card) => (
          <article key={card.title} className="info-card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}