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
  return (
    <div className="app-shell">
      <ActivityBar />

      <FileExplorer />

      <section className="workspace">
        <EditorTabs />

        <main className="editor-content">{children}</main>

        <Terminal />
      </section>

      <StatusBar />
    </div>
  );
}