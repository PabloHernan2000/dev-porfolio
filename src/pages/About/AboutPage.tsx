export function AboutPage() {
  return (
    <section className="page">
      <p className="eyebrow">about.md</p>

      <h1>About Me</h1>

      <p className="page-description">
        I am a Full-Stack Developer focused on building scalable web and mobile
        applications, REST APIs, administrative dashboards, and reliable backend
        services.
      </p>

      <div className="grid-3">
        <article className="info-card">
          <h3>Mobile Applications</h3>
          <p>
            React Native apps with geolocation, biometric authentication, and
            push notifications.
          </p>
        </article>

        <article className="info-card">
          <h3>Backend Systems</h3>
          <p>
            REST APIs with Node.js, Express, TypeScript, authentication, and
            database optimization.
          </p>
        </article>

        <article className="info-card">
          <h3>Production Deployments</h3>
          <p>
            Linux-based deployments with Nginx, PM2, and reliable server
            environments.
          </p>
        </article>
      </div>
    </section>
  );
}