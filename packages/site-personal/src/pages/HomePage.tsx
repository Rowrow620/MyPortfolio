import React from 'react';
import type { ProjectData } from '@portfolio/shared';
import { siteConfig } from '../config';
import { ProjectCollection } from '../components/ProjectCollection';

const gameToolsCollection: ProjectData = {
  id: 'game-tools-collection',
  title: 'Game Tools & Modding',
  category: 'mods',
  size: 'medium',
  image: '/images/kh-save-editor.png',
  imageAlt: 'Kingdom Hearts save editor interface',
  path: '/category/mods',
  summary: 'Runtime mods, Harmony patches, and browser-based save tooling built around real game systems.',
  tags: ['C#', 'Harmony', 'Save Data']
};

export const HomePage: React.FC = () => {
  const featuredProjects = [
    ...siteConfig.projects.filter((project) => project.showOnHome !== false),
    gameToolsCollection
  ];

  return (
    <ProjectCollection
      projects={featuredProjects}
      title=""
      intro=""
      headingId="featured-projects-heading"
    />
  );
};
