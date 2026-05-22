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
                title: "Institutional Administrative System",
                category: "Government",
                role: "Full-Stack Developer",
                description:
                    "Web platform for administrative management, user control, reports, and internal processes for a public institution.",
                problemSolved:
                    "Digitized internal processes that were previously managed manually, improving control, traceability, and access to information.",
                responsibilities: [
                    "Developed administrative interfaces with React.",
                    "Integrated REST APIs.",
                    "Implemented authentication and access control.",
                    "Optimized database queries.",
                    "Supported Linux-based production deployments.",
                ],
                stack: [
                    "React",
                    "TypeScript",
                    "Node.js",
                    "Express.js",
                    "SQL Server",
                    "Nginx",
                    "PM2",
                ],
                repositoryUrl: null,
                demoUrl: null,
                caseStudyUrl: null,
                storeUrls: null,
                confidentialityNote:
                    "Repository not available due to institutional ownership and confidentiality restrictions.",
            },
            {
                title: "Citizen Services Mobile App",
                category: "Mobile App",
                role: "Mobile Developer",
                description:
                    "Mobile application developed for information access, user authentication, push notifications, and backend service integration.",
                problemSolved:
                    "Improved user access to digital services from mobile devices.",
                responsibilities: [
                    "Developed screens with React Native.",
                    "Integrated backend services through REST APIs.",
                    "Configured push notifications.",
                    "Implemented authentication and session handling.",
                ],
                stack: [
                    "React Native",
                    "TypeScript",
                    "Firebase",
                    "REST APIs",
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
                    "Private repository. Only public links to official stores are shared.",
            },
            {
                title: "Administrative Dashboard",
                category: "Web",
                role: "Frontend Developer",
                description:
                    "Web dashboard for data visualization, record management, advanced filters, and API consumption.",
                problemSolved:
                    "Centralized operational information in a clear and easy-to-use interface.",
                responsibilities: [
                    "Built reusable components with React.",
                    "Consumed REST APIs.",
                    "Managed state, filters, and forms.",
                    "Improved user experience.",
                ],
                stack: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
                repositoryUrl: null,
                demoUrl: null,
                caseStudyUrl: null,
                storeUrls: null,
                confidentialityNote:
                    "Project developed for a private client. Source code cannot be shared.",
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