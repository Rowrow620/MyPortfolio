import re

# 1. Update ProjectCollection.tsx
with open('packages/site-personal/src/components/ProjectCollection.tsx', 'r', encoding='utf-8') as f:
    pc = f.read()
pc = pc.replace(\"'file-editors': 'File editing tool'\", \"'file-editors': 'File editing tool',\n  web: 'Web development'\")
with open('packages/site-personal/src/components/ProjectCollection.tsx', 'w', encoding='utf-8') as f:
    f.write(pc)

# 2. Update CategoryPage.tsx
with open('packages/site-personal/src/pages/CategoryPage.tsx', 'r', encoding='utf-8') as f:
    cp = f.read()
cp = cp.replace(\"  mods: {\", \"  web: {\n    title: 'Web Development',\n    intro: 'Frontend architectures, monorepos, and production web applications.'\n  },\n  mods: {\")
with open('packages/site-personal/src/pages/CategoryPage.tsx', 'w', encoding='utf-8') as f:
    f.write(cp)

# 3. Update config.ts
with open('packages/site-personal/src/config.ts', 'r', encoding='utf-8') as f:
    cfg = f.read()

nav_item = '''    {
      label: 'Web Development',
      path: '/category/web',
      children: [
        { label: 'Art Portfolio Monorepo', path: '/project/art-portfolio' }
      ]
    },
    { label: 'About & Skills', path: '/about' },'''
cfg = cfg.replace(\"    { label: 'About & Skills', path: '/about' },\", nav_item)

project = '''    {
      id: 'art-portfolio',
      title: 'Art Portfolio Monorepo',
      category: 'web',
      showOnHome: true,
      size: 'medium',
      gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      path: '/project/art-portfolio',
      summary: 'A scalable, responsive art portfolio built for a freelance client using React, TypeScript, and a monorepo architecture.',
      tags: ['React', 'TypeScript', 'Vite', 'Monorepo', 'CSS Modules'],
      githubUrl: 'https://github.com/ssuhshinji/art-portfolio',
      role: 'Lead Developer & Architect',
      stats: [
        { label: 'Architecture', value: 'Monorepo' },
        { label: 'Framework', value: 'React + Vite' }
      ],
      highlights: [
        'Architected a scalable monorepo workspace to share core UI components across multiple distinct portfolio sites.',
        'Engineered a highly responsive, masonry-style image grid for optimized artwork viewing across desktop and mobile.',
        'Implemented strict TypeScript interfaces for content management, allowing the client to easily update their gallery via structured configuration files.'
      ]
    }'''

idx = cfg.rfind('  ]\n};')
if idx != -1:
    cfg = cfg[:idx] + ',\n' + project + '\n' + cfg[idx:]
    with open('packages/site-personal/src/config.ts', 'w', encoding='utf-8') as f:
        f.write(cfg)
    print('Updated successfully')
else:
    print('Failed to find projects array')
