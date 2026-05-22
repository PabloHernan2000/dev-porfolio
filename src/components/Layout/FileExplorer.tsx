import { NavLink } from "react-router";
import { VscChevronDown, VscFolderOpened } from "react-icons/vsc";

import { useLanguage } from "../../context/LanguageContext";
import { navigationItems } from "../../data/navigation";

export function FileExplorer() {
  const { t } = useLanguage();

  return (
    <aside className="file-explorer">
      <header className="file-explorer__header">
        <span>EXPLORER</span>
      </header>

      <section className="file-explorer__workspace">
        <div className="file-explorer__folder">
          <VscChevronDown />
          <VscFolderOpened />
          <span>pablo-portfolio</span>
        </div>

        <nav className="file-explorer__nav" aria-label="Portfolio files">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const fileName = t.navigation[item.labelKey];

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "file-explorer__link file-explorer__link--active"
                    : "file-explorer__link"
                }
              >
                <Icon />
                <span>{fileName}</span>
              </NavLink>
            );
          })}
        </nav>
      </section>
    </aside>
  );
}