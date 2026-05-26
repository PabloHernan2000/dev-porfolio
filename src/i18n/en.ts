import type { ProjectGroup } from "../types/project";

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
        viewProjects: "View projects",
        downloadResume: "Download resume",
        contactMe: "Contact me",
        viewCaseStudy: "View case study",
        github: "GitHub",
        liveDemo: "Live demo",
        sendEmail: "Send email",
        copyEmail: "Copy email",
        linkedin: "LinkedIn",
        problemSolved: "Problem solved",
        responsibilities: "Responsibilities",
        impact: "Impact",
        institutions: "institutions"
    },

    home: {
        fileName: "pablo.profile.ts",
        name: "Pablo Hernán Muñoz García",
        role: "Full-Stack Developer",
        location: "Pachuca de Soto, Mexico",
        subtitle:
            "Experience building scalable web and mobile applications with React, React Native, Node.js, TypeScript, PostgreSQL, and Linux-based deployments.",
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
        title: "About me",
        description:
            "I am a Full-Stack Developer focused on building web and mobile applications, REST APIs, administrative dashboards, and scalable backend services. I work with React to build dynamic, reusable, and optimized interfaces while taking care of both user experience and code quality.",
        secondDescription:
            "I also develop mobile applications with React Native, integrate backend services with Node.js, Express, and TypeScript, and deploy production applications on Linux environments using Nginx and PM2.",
        cards: [
            {
                title: "Web applications with React",
                description:
                    "Modern interfaces, administrative dashboards, reusable components, REST API consumption, and optimized user experiences.",
            },
            {
                title: "Mobile applications",
                description:
                    "React Native apps integrating geolocation, biometric authentication, push notifications, and backend service connections.",
            },
            {
                title: "Backend systems",
                description:
                    "REST APIs with Node.js, Express, TypeScript, authentication, data validation, and database optimization.",
            },
            {
                title: "Production deployments",
                description:
                    "Linux server configuration, Nginx, PM2, environment variables, and reliable processes for production applications.",
            },
        ],
    },

    skills: {
        fileName: "skills.config.ts",
        title: "Technical skills",
        description:
            "Technologies I use to build web, mobile, backend, database, and deployment solutions.",
        groups: [
            {
                title: "Frontend",
                items: ["React", "React Native", "TypeScript", "Tailwind CSS", "Bootstrap"],
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
                items: ["Linux", "Nginx", "PM2", "Firebase", "Git", "Postman"],
            },
        ],
    },

    experience: {
        fileName: "experience.json",
        title: "Professional experience",
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
                    "Interface refactoring with Bootstrap, jQuery, and PHP.",
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
                    "Data collection automation.",
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
            "Some projects were developed for public institutions or private clients, so repositories cannot be shared. Instead, I present a general description, my role, responsibilities, and technologies used.",

        groups: [
            {
                company: "Government of the State of Hidalgo",
                period: "Mar 2024 — Present",
                location: "Pachuca de Soto, Mexico",
                description:
                    "Mobile, backend, and administrative projects developed to improve digital services, mobility, reservations, and institutional operations.",
                projects: [
                    {
                        title: "Tuzobús Mobile App",
                        category: "Government / Mobility",
                        role: "Full-Stack Developer",
                        description:
                            "Modernization and relaunch of the Tuzobús mobile app, including a new institutional design, feature fixes, REST API integration, database implementation, and new mobile capabilities.",
                        problemSolved:
                            "The app had not been updated for years, did not have its own database, had outdated features, and had been removed from Google Play and the App Store.",
                        impact:
                            "The app was restored to app stores, the mobile experience was improved, and support was provided for approximately 77,000 registered users.",
                        responsibilities: [
                            "Built mobile interfaces with React Native.",
                            "Implemented a new institutional visual design.",
                            "Developed and integrated REST APIs.",
                            "Designed and implemented the database.",
                            "Fixed existing features.",
                            "Implemented new features.",
                            "Integrated maps and geolocation services.",
                            "Configured Firebase services for mobile features.",
                            "Supported the publishing process for Google Play and the App Store.",
                        ],
                        stack: [
                            "React Native",
                            "TypeScript",
                            "Node.js",
                            "PostgreSQL",
                            "Firebase",
                            "Maps",
                            "Geolocation",
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
                            "Repository not available due to institutional ownership and confidentiality restrictions.",
                    },
                    {
                        title: "Parque Cultural Hidalguense App",
                        category: "Government / Reservations",
                        role: "Full-Stack Developer",
                        description:
                            "Mobile application for checking availability, requesting reservations, canceling bookings, and rating services for Parque Cultural Hidalguense spaces.",
                        problemSolved:
                            "The park had a web-based reservation system, but it did not offer a dedicated mobile experience for users.",
                        impact:
                            "Mobile access to the reservation system was improved, making it easier to manage activities such as soccer, chess, go-karts, basketball, and padel.",
                        responsibilities: [
                            "Built mobile interfaces with React Native.",
                            "Integrated the app with the existing web system and backend services.",
                            "Implemented biometric authentication.",
                            "Developed the reservation request flow.",
                            "Implemented availability checks for spaces and activities.",
                            "Implemented reservation cancellation.",
                            "Implemented service rating functionality.",
                            "Integrated REST APIs.",
                            "Validated user flows and improved the mobile experience.",
                        ],
                        stack: [
                            "React Native",
                            "TypeScript",
                            "REST APIs",
                            "PostgreSQL",
                            "Biometric Authentication",
                            "Reservations",
                            "Mobile UX",
                        ],
                        repositoryUrl: null,
                        demoUrl: null,
                        caseStudyUrl: null,
                        storeUrls: {
                            android: null,
                            ios: null,
                        },
                        confidentialityNote:
                            "Repository not available due to institutional ownership and confidentiality restrictions.",
                    },
                    {
                        title: "Internal Systems Development",
                        category: "Government / Internal Systems",
                        role: "Full-Stack Developer",
                        description:
                            "Development and maintenance of internal systems to support administrative, operational, and institutional tracking processes within the Government of the State of Hidalgo.",
                        problemSolved:
                            "Several departments required internal digital tools to improve information control, reduce manual processes, and centralize administrative service operations.",
                        impact:
                            "Supported the digitalization of internal processes through private web systems and backend services, improving the organization, consultation, and tracking of institutional information.",
                        responsibilities: [
                            "Built administrative web interfaces.",
                            "Developed and integrated REST APIs.",
                            "Designed and maintained databases.",
                            "Implemented internal modules for data entry, consultation, and information management.",
                            "Optimized backend queries and processes.",
                            "Deployed and managed services in Linux environments.",
                            "Performed corrective and evolutionary maintenance for internal systems.",
                            "Collaborated with internal departments to gather requirements and validate features.",
                        ],
                        stack: [
                            "React",
                            "TypeScript",
                            "Node.js",
                            "Express",
                            "PostgreSQL",
                            "SQL Server",
                            "Linux",
                            "Nginx",
                            "PM2",
                            "REST APIs",
                        ],
                        repositoryUrl: null,
                        demoUrl: null,
                        caseStudyUrl: null,
                        storeUrls: null,
                        confidentialityNote:
                            "Private internal project. Source code, technical documentation, screenshots, and system access cannot be shared due to institutional confidentiality restrictions.",
                    },
                ],
            },
            {
                company: "Municipal Government of Pachuca de Soto",
                period: "May 2023 — Mar 2024",
                location: "Pachuca de Soto, Mexico",
                description:
                    "Internal systems focused on administrative control, inventory, appraisals, fines, and operational support.",
                projects: [
                    {
                        title: "Internal Municipal Systems",
                        category: "Government / Administration",
                        role: "Web Developer and Systems Support",
                        description:
                            "Development and maintenance of internal systems for inventory management, appraisals, and administrative fine control.",
                        problemSolved:
                            "Several administrative processes depended on manual workflows or systems with inefficient interfaces.",
                        impact:
                            "Internal operations were improved through administrative web systems, database maintenance, and user support.",
                        responsibilities: [
                            "Developed and maintained internal systems.",
                            "Refactored interfaces with Bootstrap, jQuery, and PHP.",
                            "Administered SQL Server databases.",
                            "Performed preventive and corrective system maintenance.",
                            "Provided technical support to internal users.",
                        ],
                        stack: ["PHP", "Bootstrap", "jQuery", "SQL Server"],
                        repositoryUrl: null,
                        demoUrl: null,
                        caseStudyUrl: null,
                        storeUrls: null,
                        confidentialityNote:
                            "Internal institutional project. Source code and system access cannot be shared.",
                    },
                ],
            },
            {
                company: "UAEH - Academic Computing Center",
                period: "Jul 2022 — Dec 2022",
                location: "Mineral de la Reforma, Hidalgo",
                description:
                    "Academic project focused on survey automation, data collection, and data analysis.",
                projects: [
                    {
                        title: "Academic Survey System",
                        category: "Education / Web System",
                        role: "Full-Stack Developer Intern",
                        description:
                            "Web system for collecting, managing, and analyzing academic surveys, developed to automate previously manual processes.",
                        problemSolved:
                            "Academic survey collection and analysis were handled manually, causing long processing times and a higher risk of errors.",
                        impact:
                            "Data collection and academic information analysis were automated, improving process efficiency.",
                        responsibilities: [
                            "Built web interfaces with Bootstrap and jQuery.",
                            "Developed backend logic with PHP.",
                            "Integrated the system with a SQL Server database.",
                            "Automated data collection and analysis processes.",
                        ],
                        stack: ["PHP", "SQL Server", "Bootstrap", "jQuery"],
                        repositoryUrl: null,
                        demoUrl: null,
                        caseStudyUrl: null,
                        storeUrls: null,
                        confidentialityNote:
                            "Academic/institutional project. Source code is not publicly available.",
                    },
                ],
            },
        ] as ProjectGroup[],
    },

    education: {
        fileName: "education.md",
        title: "Education",
        description:
            "Academic background in computer science and current specialization in cybersecurity.",
        items: [
            {
                period: "December 2022",
                institution: "Universidad Autónoma del Estado de Hidalgo",
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
            "Currently expanding my knowledge in cybersecurity, secure systems, and risk management.",
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
        status: "Available for opportunities and full-stack projects.",
    },
};