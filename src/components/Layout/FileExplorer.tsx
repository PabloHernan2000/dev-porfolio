import { NavLink } from "react-router";
import { VscChevronDown, VscFolderOpened } from "react-icons/vsc";

import { navigationItems } from "../../data/navigation";

export function FileExplorer() {
  return (
    <aside className="file-explorer">
      <header className="file-explorer__header">
        <span>EXPLORER</span>
      </header>

      <section className="file-explorer__workspace">
        <div className="file-explorer__folder">
          <VscChevronDown />
          <VscFolderOpened />
          <span>Pablo</span>
        </div>

        <nav className="file-explorer__nav" aria-label="Portfolio files">
          {navigationItems.map((item) => {
            const Icon = item.icon;

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
                <span>{item.fileName}</span>
              </NavLink>
            );
          })}
        </nav>
      </section>
    </aside>
  );
}