import { describe, it, expect } from 'vitest';
import { siteConfig } from '../config';

describe('siteConfig Regression Tests', () => {
  it('has valid profile and contact information', () => {
    expect(siteConfig.name).toBe('JUAN F. SANCHEZ');
    expect(siteConfig.tagline).toContain('CSU Chico');
    expect(siteConfig.socialLinks?.github).toBe('https://github.com/Rowrow620');
    expect(siteConfig.socialLinks?.email).toBe('juan.sanchez620@outlook.com');
    expect(siteConfig.socialLinks?.linkedin).toBe('https://www.linkedin.com/in/juan-sanchez-b7b276348/');
  });

  it('contains valid navigation hierarchy', () => {
    expect(siteConfig.navItems.length).toBeGreaterThanOrEqual(4);
    const homeNav = siteConfig.navItems.find((n) => n.path === '/');
    expect(homeNav).toBeDefined();

    siteConfig.navItems.forEach((item) => {
      expect(item.label).toBeTruthy();
      expect(item.path).toBeTruthy();
      if (item.children) {
        item.children.forEach((child) => {
          expect(child.label).toBeTruthy();
          expect(child.path).toBeTruthy();
        });
      }
    });
  });

  it('contains valid project definitions with unique IDs', () => {
    expect(siteConfig.projects.length).toBeGreaterThanOrEqual(6);
    const idSet = new Set<string>();

    siteConfig.projects.forEach((proj) => {
      // Unique ID
      expect(idSet.has(proj.id)).toBe(false);
      idSet.add(proj.id);

      // Required fields
      expect(proj.title).toBeTruthy();
      expect(proj.category).toBeTruthy();
      expect(['hero', 'medium', 'small']).toContain(proj.size);
      expect(proj.path).toBe(`/project/${proj.id}`);
      expect(proj.summary).toBeTruthy();

      // Tags
      expect(Array.isArray(proj.tags)).toBe(true);
      expect(proj.tags!.length).toBeGreaterThan(0);

      // Links
      const hasUrl = Boolean(proj.githubUrl || proj.liveUrl);
      expect(hasUrl || proj.status === 'Work in progress').toBe(true);

      // Highlights
      if (proj.highlights) {
        expect(proj.highlights.length).toBeGreaterThan(0);
      }

      // Stats
      if (proj.stats) {
        proj.stats.forEach((stat) => {
          expect(stat.label).toBeTruthy();
          expect(stat.value).toBeTruthy();
        });
      }
    });
  });

  it('includes core repositories (FrameStep++, TraceForge, AlgoBuddy, PixelBuddy, Forge, Unlimited LOB)', () => {
    const ids = siteConfig.projects.map((p) => p.id);
    expect(ids).toContain('anvilmesh');
    expect(ids).toContain('framestepp');
    expect(ids).toContain('traceforge');
    expect(ids).toContain('algobuddy');
    expect(ids).toContain('pixelbuddy');
    expect(ids).toContain('forge');
    expect(ids).toContain('unlimited-lob');
    expect(ids).toContain('fastforwardspeed');
  });

  it('uses the finalized FrameStep++ playground recording', () => {
    const framestepp = siteConfig.projects.find((project) => project.id === 'framestepp');
    expect(framestepp?.image).toBe('/images/framestepp.gif');
    expect(framestepp?.imagePresentation).toBe('demo');
    expect(framestepp?.imageAlt).toContain('FrameStep++ playground');
    expect(framestepp?.liveUrl).toBe('https://rowrow620.github.io/Framestepp/');
    expect(framestepp?.additionalMedia).toContainEqual({
      image: '/images/framestepp-code.gif',
      imageAlt: 'FrameStep++ running directly in a terminal without the web playground',
      imageCaption: 'Original demo: the FrameStep++ code running directly in the terminal, without the themed playground.',
      aspectRatio: '720 / 510'
    });
  });

  it('lists WordKupo in Web Development without adding it to the homepage', () => {
    const wordkupo = siteConfig.projects.find((project) => project.id === 'wordkupo');
    expect(wordkupo?.category).toBe('web');
    expect(wordkupo?.image).toBe('/images/wordkupo.png');
    expect(wordkupo?.showOnHome).toBe(false);
    expect(wordkupo?.summary).toContain('Final Fantasy I');
    expect(wordkupo?.statusNote).toContain('Evolved mode is a playable prototype');
    expect(wordkupo?.stats).toContainEqual({ label: 'Game Modes', value: 'Classic + Evolved' });

    const webNav = siteConfig.navItems.find((item) => item.path === '/category/web');
    expect(webNav?.children?.map((item) => item.path)).toContain('/project/wordkupo');
  });

  it('uses the AnvilMesh application capture and communicates its development status', () => {
    const anvilmesh = siteConfig.projects.find((project) => project.id === 'anvilmesh');
    expect(anvilmesh?.image).toBe('/images/anvilmesh-studio.png');
    expect(anvilmesh?.imagePresentation).toBe('demo');
    expect(anvilmesh?.status).toBe('Work in progress');
    expect(anvilmesh?.statusNote).toContain('core distributed compute pipeline is functional');
  });

  it('uses the finalized TraceForge Studio capture', () => {
    const traceforge = siteConfig.projects.find((project) => project.id === 'traceforge');
    expect(traceforge?.image).toBe('/images/traceforge-studio.png');
    expect(traceforge?.imagePresentation).toBe('demo');
    expect(traceforge?.imageAlt).toContain('TraceForge Studio');
  });

  it('uses the local AlgoBuddy GIF and accurately labels its development status', () => {
    const algobuddy = siteConfig.projects.find((project) => project.id === 'algobuddy');
    expect(algobuddy?.image).toBe('/images/algobuddy.gif');
    expect(algobuddy?.objectFit).toBe('contain');
    expect(algobuddy?.status).toBe('Work in progress');
    expect(algobuddy?.statusNote).toContain('may produce incorrect results');
    expect(algobuddy?.stats).toContainEqual({ label: 'Roadmap Scope', value: '150 Problems' });
    expect(algobuddy?.highlights?.join(' ')).not.toContain('Complete interactive visualizer');
  });

  it('keeps mods in the catalog and navigation but opts them out of the homepage', () => {
    const mods = siteConfig.projects.filter((project) => project.category === 'mods');
    expect(mods.length).toBeGreaterThan(0);
    mods.forEach((project) => expect(project.showOnHome).toBe(false));

    const modsNav = siteConfig.navItems.find((item) => item.path === '/category/mods');
    expect(modsNav?.children?.map((item) => item.path)).toEqual(mods.map((project) => project.path));
  });

  it('identifies AlgoBuddy ownership and links its documented open-source practices', () => {
    const algobuddy = siteConfig.projects.find((project) => project.id === 'algobuddy');
    expect(algobuddy?.role).toBe('Creator & Lead Maintainer');
    expect(algobuddy?.openSource?.summary).toContain('I created AlgoBuddy');
    expect(algobuddy?.openSource?.summary).toContain('primary maintainer');
    expect(algobuddy?.openSource?.links).toContainEqual({
      label: 'MIT License',
      url: 'https://github.com/Rowrow620/AlgoBuddy/blob/main/LICENSE'
    });
    expect(algobuddy?.openSource?.practices.join(' ')).toContain('pull-request-based');
    expect(algobuddy?.status).toBe('Work in progress');
  });

  it('uses the local PixelBuddy GIF as an uncropped application demo', () => {
    const pixelbuddy = siteConfig.projects.find((project) => project.id === 'pixelbuddy');
    expect(pixelbuddy?.image).toBe('/images/pixelbuddy.gif');
    expect(pixelbuddy?.imagePresentation).toBe('demo');
    expect(pixelbuddy?.objectFit).toBe('contain');
    expect(pixelbuddy?.aspectRatio).toBe('1371 / 905');
    expect(pixelbuddy?.imageAlt).toContain('PixelBuddy pixel-art editor');
  });

  it('uses the local Forge Studio GIF as an uncropped application demo', () => {
    const forge = siteConfig.projects.find((project) => project.id === 'forge');
    expect(forge?.image).toBe('/images/forgestudio.gif');
    expect(forge?.imagePresentation).toBe('demo');
    expect(forge?.objectFit).toBe('contain');
    expect(forge?.aspectRatio).toBe('1289 / 843');
    expect(forge?.imageAlt).toContain('Forge Studio demonstrating');
  });

  it('describes Forge as a native application without the retired portfolio simulator', () => {
    const forge = siteConfig.projects.find((project) => project.id === 'forge');
    expect(forge?.tags).toContain('Native GUI');
    expect(forge?.stats).toContainEqual({ label: 'Interface', value: 'Native GUI' });
    expect(forge?.highlights?.join(' ')).toContain('Native Forge Studio GUI');
    expect(JSON.stringify(forge)).not.toMatch(/simulat|embedded Interactive DAG Studio/i);
  });
});
