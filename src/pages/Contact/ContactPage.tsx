import { useLanguage } from "../../context/LanguageContext";

export function ContactPage() {
  const { t } = useLanguage();

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(t.contact.email);
  };

  return (
    <section className="page">
      <p className="eyebrow">{t.contact.fileName}</p>

      <h1>{t.contact.title}</h1>

      <p className="page-description">{t.contact.description}</p>

      <div className="contact-terminal">
        <p>
          <span>$ whoami</span>
          <br />
          {t.contact.whoami}
        </p>

        <p>
          <span>$ contact --email</span>
          <br />
          {t.contact.email}
        </p>

        <p>
          <span>$ contact --whatsapp</span>
          <br />
          <a
            href={t.contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.contact.phone}
          </a>
        </p>

        <p>
          <span>$ contact --telegram</span>
          <br />
          <a
            href={t.contact.telegramUrl}
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
        </p>

        <p>
          <span>$ open linkedin</span>
          <br />
          {t.contact.linkedinUrl}
        </p>

        <p>
          <span>$ location</span>
          <br />
          {t.contact.location}
        </p>

        <p>
          <span>$ availability</span>
          <br />
          {t.contact.availability}
        </p>
      </div>

      <div className="hero-actions">
        <a href={`mailto:${t.contact.email}`} className="button button-primary">
          {t.common.sendEmail}
        </a>

        <a
          href={t.contact.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="button button-secondary"
        >
          WhatsApp
        </a>

        <a
          href={t.contact.telegramUrl}
          target="_blank"
          rel="noreferrer"
          className="button button-secondary"
        >
          Telegram
        </a>

        <a
          href={t.contact.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="button button-secondary"
        >
          {t.common.linkedin}
        </a>

        <button
          type="button"
          className="button button-ghost"
          onClick={handleCopyEmail}
        >
          {t.common.copyEmail}
        </button>
      </div>
    </section>
  );
}