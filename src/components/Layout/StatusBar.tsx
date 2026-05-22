import {
  VscCloudUpload,
  VscCode,
  VscSourceControl,
} from "react-icons/vsc";

export function StatusBar() {
  return (
    <footer className="status-bar">
      <div className="status-bar__left">
        <span>
          <VscSourceControl />
          main
        </span>

        <span>
          <VscCloudUpload />
          Deployed
        </span>
      </div>

      <div className="status-bar__right">
        <span>TypeScript</span>
        <span>React</span>
        <span>Node.js</span>
        <span>PostgreSQL</span>

        <span>
          <VscCode />
          UTF-8
        </span>
      </div>
    </footer>
  );
}