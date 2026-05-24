import type { Project } from "../types/project";

export const en = {
    navigation: {
        profile: "pablo.profile.ts",
        about: "about.md",
        skills: "skills.config.ts",
        experience: "experience.json",
        projects: "projects.md",
        education: "education.md",
        contact: "contact.sh",
    },

    common: {
        viewProjects: "View Projects",
        downloadResume: "Download Resume",
        contactMe: "Contact Me",
        viewCaseStudy: "View Case Study",
        github: "GitHub",
        liveDemo: "Live Demo",
        sendEmail: "Send Email",
        copyEmail: "Copy Email",
        linkedin: "LinkedIn",
        problemSolved: "Problem solved",
        responsibilities: "Responsibilities",
        impact: "Impact",
    },

    home: {
        fileName: "pablo.profile.ts",
        name: "Pablo Hernán Muñoz García",
        role: "Full-Stack Developer",
        location: "Pachuca de Soto, Mexico",
        subtitle:
            "Building scalable web and mobile applications with React, React Native, Node.js, TypeScript, PostgreSQL, and Linux-based deployments.",
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
        fileName: "about.md",
        title: "About Me",
        description:
            "I am a Full-Stack Developer focused on building scalable web and mobile applications, REST APIs, administrative dashboards, and reliable backend services.",
        secondDescription:
            "",
        cards: [
            {
                title: "Mobile Applications",
                description:
                    "React Native apps with geolocation, biometric authentication, and push notifications.",
            },
            {
                title: "Backend Systems",
                description:
                    "REST APIs with Node.js, Express, TypeScript, authentication, and database optimization.",
            },
            {
                title: "Production Deployments",
                description:
                    "Linux-based deployments with Nginx, PM2, and reliable server environments.",
            },
        ],
    },

    skills: {
        fileName: "skills.config.ts",
        title: "Technical Skills",
        description:
            "Technologies I use to build web, mobile, backend, database, and deployment solutions.",
        groups: [
            {
                title: "Frontend",
                items: ["React", "React Native", "TypeScript", "Tailwind CSS", "Bootstrap", "jQuery"],
            },
            {
                title: "Backend",
                items: ["Node.js", "Express.js", "PHP", "REST APIs", "Authentication", "WebSockets"],
            },
            {
                title: "Databases",
                items: ["PostgreSQL", "SQL Server", "MongoDB"],
            },
            {
                title: "DevOps & Tools",
                items: ["Rocky Linux", "Nginx", "PM2", "Firebase", "Git", "Postman"],
            },
        ],
    },

    experience: {
        fileName: "experience.json",
        title: "Professional Experience",
        description:
            "Experience building mobile applications, APIs, dashboards, databases, and internal administrative systems.",
        items: [
            {
                period: "Mar 2024 — Present",
                company: "Government of the State of Hidalgo",
                role: "Full-Stack Developer / Area Deputy Director",
                location: "Pachuca de Soto, Mexico",
                highlights: [
                    "Mobile applications with React Native.",
                    "Geolocation, biometric authentication, and push notifications.",
                    "REST APIs with Node.js, Express, and TypeScript.",
                    "PostgreSQL query optimization.",
                    "Linux deployments using Nginx and PM2.",
                    "Administrative dashboards in React.",
                ],
                stack: ["React Native", "Node.js", "TypeScript", "PostgreSQL", "Nginx", "PM2"],
            },
            {
                period: "May 2023 — Mar 2024",
                company: "Municipal Government of Pachuca de Soto",
                role: "Web Developer and Systems Support",
                location: "Pachuca de Soto, Mexico",
                highlights: [
                    "Internal systems for inventory, appraisals, and administrative fine control.",
                    "UI refactoring with Bootstrap, jQuery, and PHP.",
                    "SQL Server database administration.",
                    "Preventive and corrective system support.",
                ],
                stack: ["PHP", "Bootstrap", "jQuery", "SQL Server"],
            },
            {
                period: "Jul 2022 — Dec 2022",
                company: "UAEH - Academic Computing Center",
                role: "Full-Stack Developer Intern",
                location: "Mineral de la Reforma, Hidalgo",
                highlights: [
                    "Academic survey system.",
                    "Automation of manual data collection and analysis.",
                    "PHP, SQL Server, Bootstrap, and jQuery.",
                ],
                stack: ["PHP", "SQL Server", "Bootstrap", "jQuery"],
            },
        ],
    },

    projects: {
        fileName: "projects.json",
        title: "Projects",
        description:
            "Some projects were developed for public institutions or private clients, so repositories cannot be shared. Instead, I provide a general description, my role, responsibilities, and the technologies used.",
        items: [
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
                ],
                repositoryUrl: null,
                demoUrl: null,
                caseStudyUrl: null,
                storeUrls: {
                    android: "https://play.google.com/store/apps/details?id=com.reservacionesbengurion&pcampaignid=web_share",
                    ios: "https://apps.apple.com/mx/app/parque-cultural-hidalguense/id6746427833",
                },
                confidentialityNote:
                    "Repositorio no disponible por restricciones de propiedad y confidencialidad institucional.",
            },
        ] satisfies Project[],
    },

    education: {
        fileName: "education.md",
        title: "Education",
        description:
            "Academic background in computer science and current specialization in cybersecurity.",
        items: [
            {
                period: "December 2022",
                institution: "Autonomous University of the State of Hidalgo",
                degree: "Bachelor's Degree in Computer Science",
                location: "Hidalgo, Mexico",
            },
            {
                period: "February 2026 — Present",
                institution: "UNIR México",
                degree: "Master's Degree in Cybersecurity",
                location: "Mexico",
            },
        ],
        note:
            "Currently expanding knowledge in cybersecurity, secure systems, and risk management.",
    },

    contact: {
        fileName: "contact.sh",
        title: "Contact",
        description:
            "Available for professional opportunities, collaborations, and full-stack development projects.",
        whoami: "Pablo Hernán Muñoz García — Full-Stack Developer",
        email: "phernanmg@gmail.com",
        phone: "+52 775 134 9756",
        whatsappUrl: "https://wa.me/527751349756",
        telegramUrl: "https://t.me/hernan_mg",
        linkedinUrl: "linkedin.com/in/phernanmg",
        location: "Pachuca de Soto, Mexico",
        availability:
            "Available for professional opportunities, collaborations, and full-stack development projects.",
    },

    terminal: {
        name: "portfolio",
        message: "Portfolio compiled successfully.",
        status: "Available for opportunities and full-stack projects."
    },
};