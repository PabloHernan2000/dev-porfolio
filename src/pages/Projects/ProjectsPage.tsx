import { useLanguage } from "../../context/LanguageContext";

function hasValidUrl(url?: string | null): url is string {
  if (typeof url !== "string") return false;

  const normalizedUrl = url.trim().toLowerCase();

  return (
    normalizedUrl !== "" &&
    normalizedUrl !== "#" &&
    normalizedUrl !== "null" &&
    normalizedUrl !== "undefined"
  );
}

function getStoreUrl(
  storeUrls:
    | null
    | undefined
    | {
      android?: string | null;
      ios?: string | null;
    },
  store: "android" | "ios"
) {
  if (!storeUrls) return null;

  return storeUrls[store] ?? null;
}

export function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <section className="page">
      <p className="eyebrow">{t.projects.fileName}</p>

      <h1>{t.projects.title}</h1>

      <p className="page-description">{t.projects.description}</p>

      <div className="project-groups">
        {t.projects.groups.map((group) => (
          <section key={group.company} className="project-group">
            <header className="project-group__header">
              <div>
                <p className="project-group__eyebrow">institution</p>

                <h2>{group.company}</h2>

                {group.description && (
                  <p className="project-group__description">
                    {group.description}
                  </p>
                )}
              </div>

              <div className="project-group__meta">
                {group.period && <span>{group.period}</span>}
                {group.location && <span>{group.location}</span>}
              </div>
            </header>

            <div className="grid-3">
              {group.projects.map((project, index) => {
                const caseStudyUrl = project.caseStudyUrl;
                const demoUrl = project.demoUrl;
                const repositoryUrl = project.repositoryUrl;
                const androidUrl = getStoreUrl(project.storeUrls, "android");
                const iosUrl = getStoreUrl(project.storeUrls, "ios");

                const hasActions =
                  hasValidUrl(caseStudyUrl) ||
                  hasValidUrl(demoUrl) ||
                  hasValidUrl(repositoryUrl) ||
                  hasValidUrl(androidUrl) ||
                  hasValidUrl(iosUrl);

                return (
                  <article
                    key={`${group.company}-${project.title}`}
                    className={`project-card ${index === 0 ? "project-card--featured" : ""
                      }`}
                  >
                    <header className="project-card__header">
                      <span className="project-card__index">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="project-card__category">
                        {project.category}
                      </span>
                    </header>

                    <h3>{project.title}</h3>

                    <p className="project-card__role">{project.role}</p>

                    <p>{project.description}</p>

                    {project.problemSolved && (
                      <div className="project-card__problem">
                        <strong>{t.common.problemSolved}:</strong>
                        <span>{project.problemSolved}</span>
                      </div>
                    )}

                    {project.impact && (
                      <div className="project-card__impact">
                        <strong>{t.common.impact}:</strong>

                        {Array.isArray(project.impact) ? (
                          <ul>
                            {project.impact.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <span>{project.impact}</span>
                        )}
                      </div>
                    )}

                    {project.responsibilities &&
                      project.responsibilities.length > 0 && (
                        <details className="project-card__details">
                          <summary>{t.common.responsibilities}</summary>

                          <ul>
                            {project.responsibilities.map((responsibility) => (
                              <li key={responsibility}>{responsibility}</li>
                            ))}
                          </ul>
                        </details>
                      )}

                    <div className="tech-list">
                      {project.stack.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.confidentialityNote && (
                      <p className="project-card__note">
                        {project.confidentialityNote}
                      </p>
                    )}

                    {hasActions && (
                      <div className="project-card__actions">
                        {hasValidUrl(caseStudyUrl) && (
                          <a
                            href={caseStudyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="button button-secondary"
                          >
                            {t.common.viewCaseStudy}
                          </a>
                        )}

                        {hasValidUrl(demoUrl) && (
                          <a
                            href={demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="button button-secondary"
                          >
                            {t.common.liveDemo}
                          </a>
                        )}

                        {hasValidUrl(repositoryUrl) && (
                          <a
                            href={repositoryUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="button button-ghost"
                          >
                            {t.common.github}
                          </a>
                        )}

                        {hasValidUrl(androidUrl) && (
                          <a
                            href={androidUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="button button-store"
                          >
                            Google Play
                          </a>
                        )}

                        {hasValidUrl(iosUrl) && (
                          <a
                            href={iosUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="button button-store"
                          >
                            App Store
                          </a>
                        )}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}