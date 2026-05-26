import { useState } from "react";
import { Link } from "react-router";
import { useLanguage } from "../../context/LanguageContext";

export function HomePage() {
  const { t } = useLanguage();
  const [showCvOptions, setShowCvOptions] = useState(false);

  const toggleCvOptions = () => {
    setShowCvOptions((currentValue) => !currentValue);
  };

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
          <span className="token-string">"{t.home.name}"</span>,
        </div>

        <div className="code-line">
          <span className="line-number">3</span>
          <span className="token-property">role</span>:{" "}
          <span className="token-string">"{t.home.role}"</span>,
        </div>

        <div className="code-line">
          <span className="line-number">4</span>
          <span className="token-property">location</span>:{" "}
          <span className="token-string">"{t.home.location}"</span>,
        </div>

        <div className="code-line">
          <span className="line-number">6</span>
          <span className="token-property">stack</span>:{" "}
          <span className="token-array">
            [{t.home.stack.slice(0, 5).map((item) => `"${item}"`).join(", ")}]
          </span>
        </div>

        <div className="code-line">
          <span className="line-number">7</span>
          <span>{"}"}</span>;
        </div>
      </div>

      <div className="hero-card">
        <p className="eyebrow">{t.home.fileName}</p>

        <h1>{t.home.name}</h1>

        <h2>{t.home.role}</h2>

        <p className="hero-description">{t.home.subtitle}</p>

        <div className="hero-actions">
          <Link to="/projects" className="button button-primary">
            {t.common.viewProjects}
          </Link>

          <div className="cv-dropdown">
            <button
              type="button"
              className="button button-secondary"
              onClick={toggleCvOptions}
              aria-expanded={showCvOptions}
              aria-haspopup="true"
            >
              {t.common.downloadResume}
            </button>

            {showCvOptions && (
              <div className="cv-dropdown-menu">
                <a
                  href="/dev-porfolio/documents/PabloHernanMunozGarcia_cv_2026_es.pdf"
                  download="PabloHernanMunozGarcia_cv_2026_es.pdf"
                  className="cv-dropdown-item"
                >
                  CV Español
                </a>

                <a
                  href="/dev-porfolio/documents/PabloHernanMunozGarcia_cv_2026_en.pdf"
                  download="PabloHernanMunozGarcia_cv_2026_en.pdf"
                  className="cv-dropdown-item"
                >
                  CV English
                </a>
              </div>
            )}
          </div>

          <Link to="/contact" className="button button-ghost">
            {t.common.contactMe}
          </Link>
        </div>

        <div className="tech-list">
          {t.home.stack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}