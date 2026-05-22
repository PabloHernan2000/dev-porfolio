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

      <div className="grid-3">
        {t.projects.items.map((project, index) => {
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
              key={project.title}
              className={`project-card ${index === 0 ? "project-card--featured" : ""
                }`}
            >
              <span className="project-card__index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="project-card__header">
                <span className="project-card__category">
                  {project.category}
                </span>
                <br />
                <span className="project-card__role">{project.role}</span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              {project.problemSolved && (
                <div className="project-card__problem">
                  <strong>{t.common.problemSolved}:</strong>
                  <span>{project.problemSolved}</span>
                </div>
              )}

              {project.responsibilities &&
                project.responsibilities.length > 0 && (
                  <div className="project-card__responsibilities">
                    <strong>{t.common.responsibilities}:</strong>

                    <ul>
                      {project.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
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
                      className="button button-ghost"
                    >
                      Google Play
                    </a>
                  )}

                  {hasValidUrl(iosUrl) && (
                    <a
                      href={iosUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-ghost"
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
  );
}