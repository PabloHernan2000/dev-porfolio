export type ProjectStoreUrls = {
    android?: string | null;
    ios?: string | null;
};

export type Project = {
    title: string;
    category: string;
    role: string;
    description: string;
    problemSolved?: string;
    responsibilities?: string[];
    stack: string[];
    repositoryUrl?: string | null;
    demoUrl?: string | null;
    caseStudyUrl?: string | null;
    storeUrls?: ProjectStoreUrls | null;
    confidentialityNote?: string;
    impact?: string | string[];
};

export type ProjectGroup = {
    company: string;
    period?: string;
    location?: string;
    description?: string;
    projects: Project[];
};