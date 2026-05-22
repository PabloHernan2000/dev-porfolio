export function ContactPage() {
  return (
    <section className="page">
      <p className="eyebrow">contact.sh</p>

      <h1>Contact</h1>

      <div className="contact-terminal">
        <p>
          <span>$ whoami</span>
          <br />
          Pablo Hernán Muñoz García — Full-Stack Developer
        </p>

        <p>
          <span>$ contact --email</span>
          <br />
          phernanmg@gmail.com
        </p>

        <p>
          <span>$ open linkedin</span>
          <br />
          linkedin.com/in/phernanmg
        </p>

        <p>
          <span>$ location</span>
          <br />
          Pachuca de Soto, Mexico
        </p>
      </div>

      <div className="hero-actions">
        <a href="mailto:phernanmg@gmail.com" className="button button-primary">
          Send Email
        </a>

        <a
          href="https://linkedin.com/in/phernanmg"
          target="_blank"
          rel="noreferrer"
          className="button button-secondary"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}