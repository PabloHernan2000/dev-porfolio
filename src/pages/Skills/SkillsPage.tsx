import { FaCode } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { skillIcons } from "../../utils/skillIcons";

export function SkillsPage() {
  const { t } = useLanguage();

  return (
    <section className="page">
      <p className="eyebrow">{t.skills.fileName}</p>

      <h1>{t.skills.title}</h1>

      <p className="page-description">{t.skills.description}</p>

      <div className="code-window skills-code-window">
        <div className="code-line">
          <span className="line-number">1</span>
          <span className="token-keyword">export const</span>{" "}
          <span className="token-variable">skills</span>{" "}
          <span>=</span> <span>{"{"}</span>
        </div>

        {t.skills.groups.map((group, index) => (
          <div className="code-line" key={group.title}>
            <span className="line-number">{index + 2}</span>
            <span className="token-property">
              {group.title.toLowerCase().replaceAll(" ", "_")}
            </span>
            :{" "}
            <span className="token-array">
              [{group.items.slice(0, 4).map((item) => `"${item}"`).join(", ")}]
            </span>
            ,
          </div>
        ))}

        <div className="code-line">
          <span className="line-number">{t.skills.groups.length + 2}</span>
          <span>{"}"}</span>;
        </div>
      </div>

      <div className="grid-2">
        {t.skills.groups.map((group) => (
          <article key={group.title} className="info-card">
            <h3>{group.title}</h3>

            <div className="tech-list">
              {group.items.map((skill) => (
                <span key={skill} className="tech-badge">
                  <span className="tech-icon">
                    {skillIcons[skill] ?? <FaCode />}
                  </span>

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