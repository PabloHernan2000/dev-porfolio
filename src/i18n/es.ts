import type { ProjectGroup } from "../types/project";

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
        impact: "Impacto",
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

        groups: [
            {
                company: "Gobierno del Estado de Hidalgo",
                period: "Mar 2024 — Actualidad",
                location: "Pachuca de Soto, México",
                description:
                    "Proyectos móviles, backend y administrativos desarrollados para mejorar servicios digitales, movilidad, reservaciones y operación institucional.",
                projects: [
                    {
                        title: "Aplicación móvil Tuzobús",
                        category: "Gobierno / Movilidad",
                        role: "Desarrollador Full-Stack",
                        description:
                            "Modernización y relanzamiento de la app móvil Tuzobús, incluyendo nuevo diseño institucional, corrección de funcionalidades, integración de APIs REST, base de datos y nuevas características móviles.",
                        problemSolved:
                            "La app llevaba años sin actualizarse, no contaba con base de datos propia, tenía funcionalidades obsoletas y había sido retirada de Google Play y App Store.",
                        impact:
                            "Se recuperó su disponibilidad en tiendas, se mejoró la experiencia móvil y se dio soporte a aproximadamente 77 mil usuarios registrados.",
                        responsibilities: [
                            "Desarrollo de interfaces móviles con React Native.",
                            "Rediseño visual alineado a la nueva imagen institucional.",
                            "Desarrollo e integración de APIs REST.",
                            "Diseño e implementación de base de datos.",
                            "Corrección de funcionalidades existentes.",
                            "Implementación de nuevas funcionalidades.",
                            "Integración de mapas y servicios de geolocalización.",
                            "Configuración de servicios Firebase para funcionalidades móviles.",
                            "Soporte al proceso de publicación en Google Play y App Store.",
                        ],
                        stack: [
                            "React Native",
                            "TypeScript",
                            "Node.js",
                            "PostgreSQL",
                            "Firebase",
                            "Maps",
                            "Geolocalización",
                        ],
                        repositoryUrl: null,
                        demoUrl: null,
                        caseStudyUrl: null,
                        storeUrls: {
                            android:
                                "https://play.google.com/store/apps/details?id=com.tuzobus&pcampaignid=web_share",
                            ios: "https://apps.apple.com/mx/app/tuzob%C3%BAs/id1473326651?l=en-GB",
                        },
                        confidentialityNote:
                            "Repositorio no disponible por restricciones de propiedad y confidencialidad institucional.",
                    },
                    {
                        title: "App Parque Cultural Hidalguense",
                        category: "Gobierno / Reservaciones",
                        role: "Desarrollador Full-Stack",
                        description:
                            "Aplicación móvil para consultar disponibilidad, solicitar reservaciones, cancelar reservas y calificar servicios en los espacios del Parque Cultural Hidalguense.",
                        problemSolved:
                            "El parque contaba con un sistema web de reservaciones, pero no tenía una experiencia móvil dedicada para los usuarios.",
                        impact:
                            "Se mejoró el acceso móvil al sistema de reservaciones y la gestión de actividades como fútbol, ajedrez, go karts, basketball y pádel.",
                        responsibilities: [
                            "Desarrollo de interfaces móviles con React Native.",
                            "Integración con sistema web y servicios backend existentes.",
                            "Implementación de autenticación biométrica.",
                            "Desarrollo del flujo de solicitud de reservaciones.",
                            "Consulta de disponibilidad de espacios y actividades.",
                            "Implementación de cancelación de reservaciones.",
                            "Implementación de calificación del servicio.",
                            "Integración con APIs REST.",
                            "Validación de flujos de usuario y mejora de experiencia móvil.",
                        ],
                        stack: [
                            "React Native",
                            "TypeScript",
                            "APIs REST",
                            "PostgreSQL",
                            "Autenticación biométrica",
                            "Reservaciones",
                            "UX móvil",
                        ],
                        repositoryUrl: null,
                        demoUrl: null,
                        caseStudyUrl: null,
                        storeUrls: {
                            android: null,
                            ios: null,
                        },
                        confidentialityNote:
                            "Repositorio no disponible por restricciones de propiedad y confidencialidad institucional.",
                    },
                ],
            },
            {
                company: "Presidencia Municipal de Pachuca de Soto",
                period: "May 2023 — Mar 2024",
                location: "Pachuca de Soto, México",
                description:
                    "Sistemas internos enfocados en control administrativo, inventarios, avalúos, multas y soporte operativo.",
                projects: [
                    {
                        title: "Sistemas internos municipales",
                        category: "Gobierno / Administración",
                        role: "Desarrollador Web y Soporte de Sistemas",
                        description:
                            "Desarrollo y mantenimiento de sistemas internos para gestión de inventarios, avalúos y control administrativo de multas.",
                        problemSolved:
                            "Diversos procesos administrativos dependían de flujos manuales o sistemas con interfaces poco eficientes.",
                        impact:
                            "Se mejoró la operación interna mediante sistemas web administrativos, mantenimiento de bases de datos y soporte a usuarios.",
                        responsibilities: [
                            "Desarrollo y mantenimiento de sistemas internos.",
                            "Refactorización de interfaces con Bootstrap, jQuery y PHP.",
                            "Administración de bases de datos SQL Server.",
                            "Mantenimiento preventivo y correctivo de sistemas.",
                            "Soporte técnico a usuarios internos.",
                        ],
                        stack: ["PHP", "Bootstrap", "jQuery", "SQL Server"],
                        repositoryUrl: null,
                        demoUrl: null,
                        caseStudyUrl: null,
                        storeUrls: null,
                        confidentialityNote:
                            "Proyecto institucional interno. El código fuente y el acceso al sistema no pueden compartirse.",
                    },
                ],
            },
            {
                company: "UAEH - Centro de Cómputo Académico",
                period: "Jul 2022 — Dic 2022",
                location: "Mineral de la Reforma, Hidalgo",
                description:
                    "Proyecto académico enfocado en automatización de encuestas, captura de información y análisis de datos.",
                projects: [
                    {
                        title: "Sistema de encuestas académicas",
                        category: "Educación / Sistema Web",
                        role: "Desarrollador Full-Stack - Prácticas Profesionales",
                        description:
                            "Sistema web para recopilación, gestión y análisis de encuestas académicas, desarrollado para automatizar procesos previamente manuales.",
                        problemSolved:
                            "La recopilación y análisis de encuestas académicas se realizaba de forma manual, generando tiempos largos y mayor probabilidad de errores.",
                        impact:
                            "Se automatizó la captura y análisis de información académica, mejorando la eficiencia del proceso.",
                        responsibilities: [
                            "Desarrollo de interfaces web con Bootstrap y jQuery.",
                            "Desarrollo de lógica backend con PHP.",
                            "Integración con base de datos SQL Server.",
                            "Automatización de procesos de recopilación y análisis de datos.",
                        ],
                        stack: ["PHP", "SQL Server", "Bootstrap", "jQuery"],
                        repositoryUrl: null,
                        demoUrl: null,
                        caseStudyUrl: null,
                        storeUrls: null,
                        confidentialityNote:
                            "Proyecto académico/institucional. El código fuente no está disponible públicamente.",
                    },
                ],
            },
        ] as ProjectGroup[],
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