import { Route, Routes } from "react-router";

import { AboutPage } from "../pages/About/AboutPage";
import { SkillsPage } from "../pages/Skills/SkillsPage";
import { ExperiencePage } from "../pages/Experience/ExperiencePage";
import { ProjectsPage } from "../pages/Projects/ProjectsPage";
import ProjectDetailPage from "../pages/ProjectDetail/ProjectDetailPage";
import { EducationPage } from "../pages/Education/EducationPage";
import { ContactPage } from "../pages/Contact/ContactPage";
import { HomePage } from "../pages/Home/HomePage";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    );
}