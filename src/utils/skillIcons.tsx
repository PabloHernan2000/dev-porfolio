import {
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiBootstrap,
    SiNodedotjs,
    SiExpress,
    SiPhp,
    SiPostgresql,
    SiMongodb,
    SiFirebase,
    SiGit,
    SiPostman,
    SiNginx,
} from "react-icons/si";

import {
    FaDatabase,
    FaServer,
    FaLock,
    FaCode,
} from "react-icons/fa";

import { TbApi, TbBrandReactNative } from "react-icons/tb";

export const skillIcons: Record<string, React.ReactNode> = {
    React: <SiReact />,
    "React Native": <TbBrandReactNative />,
    TypeScript: <SiTypescript />,
    "Tailwind CSS": <SiTailwindcss />,
    Bootstrap: <SiBootstrap />,

    "Node.js": <SiNodedotjs />,
    "Express.js": <SiExpress />,
    PHP: <SiPhp />,
    "APIs REST": <TbApi />,
    Autenticación: <FaLock />,
    WebSockets: <FaCode />,

    PostgreSQL: <SiPostgresql />,
    "SQL Server": <FaDatabase />,
    MongoDB: <SiMongodb />,

    "Linux": <FaServer />,
    Nginx: <SiNginx />,
    PM2: <FaServer />,
    Firebase: <SiFirebase />,
    Git: <SiGit />,
    Postman: <SiPostman />,
};