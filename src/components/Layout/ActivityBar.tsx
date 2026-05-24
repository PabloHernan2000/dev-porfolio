import { NavLink } from "react-router";

import { navigationItems } from "../../data/navigation";

type ActivityBarProps = {
  onToggleExplorer: () => void;
};

export function ActivityBar({ onToggleExplorer }: ActivityBarProps) {
  return (
    <aside className="activity-bar" aria-label="Main activity bar">
      <div className="activity-bar__top">
        <button
          className="activity-bar__button activity-bar__button--active"
          type="button"
          title="Explorer"
          onClick={onToggleExplorer}
        >
          {(() => {
            const Icon = navigationItems[0].icon;
            return <Icon />;
          })()}
        </button>

        {navigationItems.slice(1).map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive
                  ? "activity-bar__button activity-bar__button--active"
                  : "activity-bar__button"
              }
              title={item.labelKey}
            >
              <Icon />
            </NavLink>
          );
        })}
      </div>

      <div className="activity-bar__bottom">
        <div className="activity-bar__avatar">PM</div>
      </div>
    </aside>
  );
}