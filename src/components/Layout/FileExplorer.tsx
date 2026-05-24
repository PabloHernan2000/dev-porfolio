import { NavLink } from "react-router";
import { VscChevronDown, VscClose, VscFolderOpened } from "react-icons/vsc";

import { useLanguage } from "../../context/LanguageContext";
import { navigationItems } from "../../data/navigation";

type FileExplorerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function FileExplorer({ isOpen, onClose }: FileExplorerProps) {
  const { t } = useLanguage();

  return (
    <aside
      className={`file-explorer ${isOpen ? "file-explorer--open" : ""}`}
    >
      <header className="file-explorer__header">
        <span>EXPLORER</span>

        <button
          className="file-explorer__close"
          type="button"
          aria-label="Close file explorer"
          onClick={onClose}
        >
          <VscClose />
        </button>
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
                onClick={onClose}
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