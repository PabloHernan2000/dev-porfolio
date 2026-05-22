import { NavLink, useLocation } from "react-router";
import { VscClose } from "react-icons/vsc";

import { navigationItems } from "../../data/navigation";

export function EditorTabs() {
    const location = useLocation();

    const activeItem =
        navigationItems.find((item) => {
            if (item.path === "/") {
                return location.pathname === "/";
            }

            return location.pathname.startsWith(item.path);
        }) ?? navigationItems[0];

    return (
        <header className="editor-tabs">
            <NavLink to={activeItem.path} className="editor-tab editor-tab--active">
                <activeItem.icon />
                <span>{activeItem.fileName}</span>
                <VscClose className="editor-tab__close" />
            </NavLink>
        </header>
    );
}