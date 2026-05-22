import {
  VscAccount,
  VscCode,
  VscFiles,
  VscFolderLibrary,
  VscJson,
  VscMail,
  VscMortarBoard,
  VscServerProcess,
} from "react-icons/vsc";

export const navigationItems = [
  {
    label: "Profile",
    fileName: "pablo.profile.ts",
    path: "/",
    icon: VscAccount,
  },
  {
    label: "About",
    fileName: "about.md",
    path: "/about",
    icon: VscFiles,
  },
  {
    label: "Skills",
    fileName: "skills.config.ts",
    path: "/skills",
    icon: VscCode,
  },
  {
    label: "Experience",
    fileName: "experience.json",
    path: "/experience",
    icon: VscJson,
  },
  {
    label: "Projects",
    fileName: "projects.md",
    path: "/projects",
    icon: VscFolderLibrary,
  },
  {
    label: "Education",
    fileName: "education.md",
    path: "/education",
    icon: VscMortarBoard,
  },
  {
    label: "Contact",
    fileName: "contact.sh",
    path: "/contact",
    icon: VscMail,
  },
];

export const activityItems = [
  {
    label: "Explorer",
    icon: VscFiles,
  },
  {
    label: "Source Control",
    icon: VscServerProcess,
  },
  {
    label: "Code",
    icon: VscCode,
  },
  {
    label: "Account",
    icon: VscAccount,
  },
];