import React from 'react';
import { siteConfig } from '../config';
import { ProjectCollection } from '../components/ProjectCollection';

export const HomePage: React.FC = () => {
  const featuredProjects = siteConfig.projects.filter((project) => project.showOnHome !== false);

  return (
    <ProjectCollection
      projects={featuredProjects}
      title=""
      intro=""
      headingId="featured-projects-heading"
    />
  );
};
