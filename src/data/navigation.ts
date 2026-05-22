import {
  VscAccount,
  VscCode,
  VscFiles,
  VscFolderLibrary,
  VscJson,
  VscMail,
  VscMortarBoard,
  VscSourceControl,
} from "react-icons/vsc";

export const navigationItems = [
  {
    labelKey: "profile",
    path: "/",
    icon: VscAccount,
  },
  {
    labelKey: "about",
    path: "/about",
    icon: VscFiles,
  },
  {
    labelKey: "skills",
    path: "/skills",
    icon: VscCode,
  },
  {
    labelKey: "experience",
    path: "/experience",
    icon: VscJson,
  },
  {
    labelKey: "projects",
    path: "/projects",
    icon: VscFolderLibrary,
  },
  {
    labelKey: "education",
    path: "/education",
    icon: VscMortarBoard,
  },
  {
    labelKey: "contact",
    path: "/contact",
    icon: VscMail,
  },
] as const;

export const activityItems = [
  {
    label: "Explorer",
    icon: VscFiles,
  },
  {
    label: "Source Control",
    icon: VscSourceControl,
  },
  {
    label: "Code",
    icon: VscCode,
  },
  {
    label: "Account",
    icon: VscAccount,
  },
] as const;