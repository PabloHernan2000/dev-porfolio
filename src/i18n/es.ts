import type { Project } from "../types/project";

export const es = {
    navigation: {
        profile: "pablo.perfil.ts",
        about: "sobre-mi.md",
        skills: "habilidades.config.ts",
        experience: "experiencia.json",
        projects: "proyectos.md",
        education: "educacion.md",
        contact: "contacto.sh",
    },

    common: {
        viewProjects: "Ver proyectos",
        downloadResume: "Descargar CV",
        contactMe: "Contactarme",
        viewCaseStudy: "Ver caso de estudio",
        github: "GitHub",
        liveDemo: "Demo",
        sendEmail: "Enviar correo",
        copyEmail: "Copiar correo",
        linkedin: "LinkedIn",
        problemSolved: "Problema resuelto",
        responsibilities: "Responsabilidades",
    },

    home: {
        fileName: "pablo.perfil.ts",
        name: "Pablo Hernán Muñoz García",
        role: "Desarrollador Full-Stack",
        location: "Pachuca de Soto, México",
        subtitle:
            "Experiencia en el desarrollo de aplicaciones web y móviles escalables con React, React Native, Node.js, TypeScript, PostgreSQL y despliegues basados en Linux.",
        stack: [
            "React",
            "React Native",
            "Node.js",
            "TypeScript",
            "PostgreSQL",
            "SQL Server",
            "Linux",
            "Nginx",
            "PM2",
        ],
    },

    about: {
        fileName: "sobre-mi.md",
        title: "Sobre mí",
        description:
            "Soy Desarrollador Full-Stack enfocado en crear aplicaciones web y móviles, APIs REST, dashboards administrativos y servicios backend escalables. Trabajo con React para construir interfaces dinámicas, reutilizables y optimizadas, cuidando tanto la experiencia de usuario como la calidad del código.",
        secondDescription:
            "También desarrollo aplicaciones móviles con React Native, integro servicios backend con Node.js, Express y TypeScript, y realizo despliegues en producción sobre entornos Linux con Nginx y PM2.",
        cards: [
            {
                title: "Aplicaciones web con React",
                description:
                    "Interfaces modernas, dashboards administrativos, componentes reutilizables, consumo de APIs REST y experiencias optimizadas para el usuario.",
            },
            {
                title: "Aplicaciones móviles",
                description:
                    "Apps con React Native integrando geolocalización, autenticación biométrica, notificaciones push y conexión con servicios backend.",
            },
            {
                title: "Sistemas backend",
                description:
                    "APIs REST con Node.js, Express, TypeScript, autenticación, validación de datos y optimización de bases de datos.",
            },
            {
                title: "Despliegues en producción",
                description:
                    "Configuración de servidores Linux, Nginx, PM2, variables de entorno y procesos confiables para aplicaciones en producción.",
            },
        ],
    },

    skills: {
        fileName: "habilidades.config.ts",
        title: "Habilidades técnicas",
        description:
            "Tecnologías que uso para construir soluciones web, móviles, backend, bases de datos y despliegues.",
        groups: [
            {
                title: "Frontend",
                items: ["React", "React Native", "TypeScript", "Tailwind CSS", "Bootstrap"],
            },
            {
                title: "Backend",
                items: ["Node.js", "Express.js", "PHP", "APIs REST", "Autenticación", "WebSockets"],
            },
            {
                title: "Bases de datos",
                items: ["PostgreSQL", "SQL Server", "MongoDB"],
            },
            {
                title: "DevOps y herramientas",
                items: ["Linux", "Nginx", "PM2", "Firebase", "Git", "Postman"],
            },
        ],
    },

    experience: {
        fileName: "experiencia.json",
        title: "Experiencia profesional",
        description:
            "Experiencia construyendo aplicaciones móviles, APIs, dashboards, bases de datos y sistemas administrativos internos.",
        items: [
            {
                period: "Mar 2024 — Actualidad",
                company: "Gobierno del Estado de Hidalgo",
                role: "Desarrollador Full-Stack / Subdirector de Área",
                location: "Pachuca de Soto, México",
                highlights: [
                    "Aplicaciones móviles con React Native.",
                    "Geolocalización, autenticación biométrica y notificaciones push.",
                    "APIs REST con Node.js, Express y TypeScript.",
                    "Optimización de consultas en PostgreSQL.",
                    "Despliegues Linux usando Nginx y PM2.",
                    "Dashboards administrativos en React.",
                ],
                stack: ["React Native", "Node.js", "TypeScript", "PostgreSQL", "Nginx", "PM2"],
            },
            {
                period: "May 2023 — Mar 2024",
                company: "Presidencia Municipal de Pachuca de Soto",
                role: "Desarrollador Web y Soporte de Sistemas",
                location: "Pachuca de Soto, México",
                highlights: [
                    "Sistemas internos para inventarios, avalúos y control administrativo de multas.",
                    "Refactorización de interfaces con Bootstrap, jQuery y PHP.",
                    "Administración de bases de datos SQL Server.",
                    "Soporte preventivo y correctivo a sistemas.",
                ],
                stack: ["PHP", "Bootstrap", "jQuery", "SQL Server"],
            },
            {
                period: "Jul 2022 — Dic 2022",
                company: "UAEH - Centro de Cómputo Académico",
                role: "Desarrollador Full-Stack - Prácticas Profesionales",
                location: "Mineral de la Reforma, Hidalgo",
                highlights: [
                    "Sistema de encuestas académicas.",
                    "Automatización de recopilación y análisis de datos.",
                    "PHP, SQL Server, Bootstrap y jQuery.",
                ],
                stack: ["PHP", "SQL Server", "Bootstrap", "jQuery"],
            },
        ],
    },

    projects: {
        fileName: "proyectos.json",
        title: "Proyectos",
        description:
            "Algunos proyectos fueron desarrollados para instituciones públicas o clientes privados, por lo que los repositorios no pueden compartirse. En su lugar, presento una descripción general, mi rol, responsabilidades y tecnologías utilizadas.",
        items: [
            {
                title: "Aplicación móvil Tuzobús",
                category: "Gobierno",
                role: "Desarrollador Full-Stack",
                description:
                    "Aplicación móvil ",
                problemSolved:
                    "Digitalización de procesos internos que antes se gestionaban de forma manual, mejorando el control, la trazabilidad y el acceso a la información.",
                responsibilities: [
                    "Desarrollo de interfaces administrativas con React.",
                    "Integración con APIs REST.",
                    "Implementación de autenticación y control de acceso.",
                    "Optimización de consultas a base de datos.",
                    "Apoyo en despliegues sobre servidores Linux.",
                ],
                stack: [
                    "React Native",
                    "TypeScript",
                    "Node.js",
                    "Firebase",
                    "Maps"
                ],
                repositoryUrl: null,
                demoUrl: null,
                caseStudyUrl: null,
                storeUrls: {
                    android: "https://play.google.com/store/apps/details?id=com.tuzobus&pcampaignid=web_share",
                    ios: "https://apps.apple.com/mx/app/tuzob%C3%BAs/id1473326651?l=en-GBTuzobús"
                },
                confidentialityNote:
                    "Repositorio no disponible por restricciones de propiedad y confidencialidad institucional.",
            },
            /* {
                title: "Aplicación móvil de servicios ciudadanos",
                category: "Aplicación móvil",
                role: "Desarrollador Mobile",
                description:
                    "Aplicación móvil desarrollada para consulta de información, autenticación de usuarios, notificaciones push y conexión con servicios backend.",
                problemSolved:
                    "Facilitó el acceso de usuarios a servicios digitales desde dispositivos móviles.",
                responsibilities: [
                    "Desarrollo de pantallas con React Native.",
                    "Integración con servicios backend mediante APIs REST.",
                    "Configuración de notificaciones push.",
                    "Implementación de autenticación y manejo de sesión.",
                ],
                stack: [
                    "React Native",
                    "TypeScript",
                    "Firebase",
                    "APIs REST",
                    "Push Notifications",
                ],
                repositoryUrl: null,
                demoUrl: null,
                caseStudyUrl: null,
                storeUrls: {
                    android: "https://play.google.com/store/apps/details?id=tu.app",
                    ios: "https://apps.apple.com/app/tu-app/id000000000",
                },
                confidentialityNote:
                    "Repositorio privado. Se comparten únicamente enlaces públicos a tiendas oficiales.",
            },
            {
                title: "Dashboard administrativo",
                category: "Web",
                role: "Desarrollador Frontend",
                description:
                    "Dashboard web para visualización de datos, administración de registros, filtros avanzados y consumo de APIs.",
                problemSolved:
                    "Centralizó información operativa en una interfaz clara y fácil de usar.",
                responsibilities: [
                    "Construcción de componentes reutilizables con React.",
                    "Consumo de APIs REST.",
                    "Manejo de estados, filtros y formularios.",
                    "Mejoras de experiencia de usuario.",
                ],
                stack: ["React", "TypeScript", "Tailwind CSS", "APIs REST"],
                repositoryUrl: null,
                demoUrl: null,
                caseStudyUrl: null,
                storeUrls: null,
                confidentialityNote:
                    "Proyecto desarrollado para cliente privado. El código fuente no puede compartirse.",
            }, */
        ] satisfies Project[],
    },

    education: {
        fileName: "educacion.md",
        title: "Educación",
        description:
            "Formación académica en ciencias computacionales y especialización actual en ciberseguridad.",
        items: [
            {
                period: "Diciembre 2022",
                institution: "Universidad Autónoma del Estado de Hidalgo",
                degree: "Licenciatura en Ciencias Computacionales",
                location: "Hidalgo, México",
            },
            {
                period: "Febrero 2026 — Actualidad",
                institution: "UNIR México",
                degree: "Maestría en Ciberseguridad",
                location: "México",
            },
        ],
        note:
            "Actualmente ampliando conocimientos en ciberseguridad, sistemas seguros y gestión de riesgos.",
    },

    contact: {
        fileName: "contacto.sh",
        title: "Contacto",
        description:
            "Disponible para oportunidades profesionales, colaboraciones y proyectos de desarrollo full-stack.",
        whoami: "Pablo Hernán Muñoz García — Desarrollador Full-Stack",
        email: "phernanmg@gmail.com",
        phone: "+52 775 134 9756",
        whatsappUrl: "https://wa.me/527751349756",
        telegramUrl: "https://t.me/hernan_mg",
        linkedinUrl: "linkedin.com/in/phernanmg",
        location: "Pachuca de Soto, México",
        availability:
            "Disponible para oportunidades profesionales, colaboraciones y proyectos de desarrollo full-stack.",
    },

    terminal: {
        name: "portafolio",
        message: "Portafolio compilado correctamente.",
        status: "Disponible para oportunidades y proyectos full-stack."
    },
};