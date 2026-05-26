import {
  VscBriefcase,
  VscGlobe,
  VscLock,
  VscRocket,
} from "react-icons/vsc";

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
    <section className="page projects-page">
      <p className="eyebrow">{t.projects.fileName}</p>

      <div className="projects-hero">
        <div>
          <h1>{t.projects.title}</h1>
          <p className="page-description">{t.projects.description}</p>
        </div>

        <div className="projects-hero__badge">
          <VscRocket />
          <span>
            {t.projects.groups.length} {t.common.institutions}
          </span>
        </div>
      </div>

      <div className="project-groups">
        {t.projects.groups.map((group) => (
          <section key={group.company} className="project-group">
            <header className="project-group__header">
              <div className="project-group__title">
                <span className="project-group__icon">
                  <VscBriefcase />
                </span>

                <div>
                  <p className="project-group__eyebrow">institution</p>

                  <h2>{group.company}</h2>

                  {group.description && (
                    <p className="project-group__description">
                      {group.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="project-group__meta">
                {group.period && <span>{group.period}</span>}
                {group.location && <span>{group.location}</span>}
              </div>
            </header>

            <div className="project-grid">
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
                    className="project-card"
                  >
                    <div className="project-card__top">
                      <div className="project-card__file">
                        <span className="project-card__dot" />
                        <span>
                          project-{String(index + 1).padStart(2, "0")}.json
                        </span>
                      </div>

                      <span className="project-card__category">
                        {project.category}
                      </span>
                    </div>

                    <div className="project-card__body">
                      <h3>{project.title}</h3>

                      <p className="project-card__role">{project.role}</p>

                      <p className="project-card__description">
                        {project.description}
                      </p>

                      {project.problemSolved && (
                        <div className="project-info project-info--problem">
                          <strong>{t.common.problemSolved}</strong>
                          <p>{project.problemSolved}</p>
                        </div>
                      )}

                      {project.impact && (
                        <div className="project-info project-info--impact">
                          <strong>{t.common.impact}</strong>

                          {Array.isArray(project.impact) ? (
                            <ul>
                              {project.impact.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>{project.impact}</p>
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

                      <div className="tech-list project-card__stack">
                        {project.stack.map((tech) => (
                          <span key={tech} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <footer className="project-card__footer">
                      {project.confidentialityNote && (
                        <p className="project-card__note">
                          <VscLock />
                          <span>{project.confidentialityNote}</span>
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
                              <VscGlobe />
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
                              <VscGlobe />
                              App Store
                            </a>
                          )}
                        </div>
                      )}
                    </footer>
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