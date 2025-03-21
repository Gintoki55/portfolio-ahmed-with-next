import React from 'react'
import ProjectsJsx from '../../components/projects';
import { useTranslations } from 'next-intl';

export const metadata = {
  title: "Projects | Ahmed Portfolio",
  description: "A collection of Ahmed's front-end development projects showcasing skills in React, Next.js, Tailwind CSS, and more.",
  keywords: ["Ahmed", "Projects", "React", "Next.js", "Portfolio", "Tailwind", "JavaScript"],
  robots: "index, follow",
};

function Projectspage() {
   const t = useTranslations('projectsSection');
  return (
    <main className="px-4 sm:px-6 lg:px-16 py-10 min-h-screen">
      <header className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 mb-5">
          {t('title')}
        </h1>
        <h2 className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto">
          {t('subtitle')}
        </h2>
      </header>

      <section aria-label="projects">
        <ProjectsJsx />
      </section>
    </main>
  );
}

export default Projectspage;
