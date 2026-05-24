import { useState } from "react";
import type { ReactNode } from "react";

import { ActivityBar } from "./ActivityBar";
import { EditorTabs } from "./EditorTabs";
import { FileExplorer } from "./FileExplorer";
import { StatusBar } from "./StatusBar";
import { Terminal } from "./Terminal";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);

  const toggleExplorer = () => {
    setIsExplorerOpen((currentValue) => !currentValue);
  };

  const closeExplorer = () => {
    setIsExplorerOpen(false);
  };

  return (
    <div className="app-shell">
      <ActivityBar onToggleExplorer={toggleExplorer} />

      <FileExplorer isOpen={isExplorerOpen} onClose={closeExplorer} />

      {isExplorerOpen && (
        <button
          className="mobile-overlay"
          type="button"
          aria-label="Close file explorer"
          onClick={closeExplorer}
        />
      )}

      <section className="workspace">
        <EditorTabs />

        <main className="editor-content">{children}</main>

        <Terminal />
      </section>

      <StatusBar />
    </div>
  );
}