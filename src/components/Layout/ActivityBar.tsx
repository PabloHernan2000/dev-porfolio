import { activityItems } from "../../data/navigation";

export function ActivityBar() {
  return (
    <aside className="activity-bar" aria-label="Main activity bar">
      <div className="activity-bar__top">
        {activityItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`activity-bar__button ${
                index === 0 ? "activity-bar__button--active" : ""
              }`}
              title={item.label}
              type="button"
            >
              <Icon />
            </button>
          );
        })}
      </div>

      <div className="activity-bar__bottom">
        <div className="activity-bar__avatar">PM</div>
      </div>
    </aside>
  );
}