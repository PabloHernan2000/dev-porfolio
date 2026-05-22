import { VscTerminalCmd } from "react-icons/vsc";
import { useLanguage } from "../../context/LanguageContext";

export function Terminal() {

  const { t } = useLanguage();

  return (
    <section className="terminal">
      <header className="terminal__header">
        <div className="terminal__tabs">
          <button className="terminal__tab terminal__tab--active" type="button">
            PROBLEMS
          </button>
          <button className="terminal__tab" type="button">
            OUTPUT
          </button>
          <button className="terminal__tab terminal__tab--active" type="button">
            TERMINAL
          </button>
        </div>

        <div className="terminal__title">
          <VscTerminalCmd />
          <span>{t.terminal.name}</span>
        </div>
      </header>

      <div className="terminal__body">
        <p>
          <span className="terminal__prompt">pablo@{t.terminal.name}</span>
          <span className="terminal__path"> ~/workspace </span>
          <span className="terminal__command">$ npm run dev</span>
        </p>

        <p className="terminal__success">
          {t.terminal.message}
        </p>

        <p>
          <span className="terminal__prompt">status</span>
          <span className="terminal__path"> → </span>
          <span>{t.terminal.status}</span>
          <span className="terminal__cursor" />
        </p>
      </div>
    </section>
  );
}