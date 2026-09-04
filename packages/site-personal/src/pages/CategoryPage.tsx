import React from 'react';
import { useParams } from 'react-router-dom';
import { siteConfig } from '../config';
import { ProjectCollection } from '../components/ProjectCollection';

const categoryDetails: Record<string, { title: string; intro: string }> = {
  systems: {
    title: 'Systems & Compilers',
    intro: 'Compilers, runtimes, and infrastructure built close to the machine.'
  },
  tools: {
    title: 'Tools & Visualizers',
    intro: 'Native and browser-based tools for learning, creating, and exploring.'
  },
  web: {
    title: 'Web Development',
    intro: 'Frontend architectures, monorepos, and production web applications.'
  },
  mods: {
    title: 'Mods & Game Tools',
    intro: 'Runtime extensions, game file editors, and custom game mechanics.'
  }
};

export const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const filteredProjects = siteConfig.projects.filter(
    (p) => {
      const cat = p.category.toLowerCase();
      const targetSlug = slug?.toLowerCase();
      if (targetSlug === 'mods') {
        return cat === 'mods' || cat === 'file-editors';
      }
      return cat === targetSlug;
    }
  );

  const details = categoryDetails[slug?.toLowerCase() || ''] || {
    title: 'Projects',
    intro: 'Explore languages, systems, tools, and game mods.'
  };

  return (
    <ProjectCollection
      projects={filteredProjects.length > 0 ? filteredProjects : siteConfig.projects}
      title={details.title}
      intro={details.intro}
      headingId="category-heading"
    />
  );
};
