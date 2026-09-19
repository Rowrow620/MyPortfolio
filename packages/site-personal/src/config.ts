import type { SiteConfig } from '@portfolio/shared';

export const siteConfig: SiteConfig = {
  name: 'JUAN F. SANCHEZ',
  tagline: 'Computer Science M.S. Student @ CSU Chico | Systems & Tools Developer',
  socialLinks: {
    github: 'https://github.com/Rowrow620',
    linkedin: 'https://www.linkedin.com/in/juan-sanchez-b7b276348/',
    email: 'juan.sanchez620@outlook.com'
  },
  navItems: [
    { label: 'Home', path: '/' },
    {
      label: 'Systems & Compilers',
      path: '/category/systems',
      children: [
        { label: 'AnvilMesh (Distributed Compute)', path: '/project/anvilmesh' },
        { label: 'FrameStep++ (C++20 Bytecode VM)', path: '/project/framestepp' },
        { label: 'TraceForge (Wait-Free Tracing)', path: '/project/traceforge' },
        { label: 'Forge (Task Runner & DAG)', path: '/project/forge' }
      ]
    },
    {
      label: 'Tools & Visualizers',
      path: '/category/tools',
      children: [
        { label: 'AlgoBuddy (NeetCode 150 Visualizer)', path: '/project/algobuddy' },
        { label: 'PixelBuddy (Pixel Art Editor)', path: '/project/pixelbuddy' },
        { label: 'wsl-cam-bridge (Webcam Bridge)', path: '/project/wsl-cam-bridge' }
      ]
    },
    {
      label: 'Mods / Game Tools',
      path: '/category/mods',
      children: [
        { label: 'Unlimited LOB Points & Agents', path: '/project/unlimited-lob' },
        { label: 'FastForwardSpeed (Game Multipliers)', path: '/project/fastforwardspeed' },
        { label: 'KH Save Editor - Keyblade', path: '/project/kh-save-editor-keyblade' },
        { label: 'EzSlides (In-Game Slide Viewer)', path: '/project/ezslides' },
        { label: 'XIVLibra (FFXIV Combat Meter)', path: '/project/xivlibra' }
      ]
    },
    {
      label: 'Web Development',
      path: '/category/web',
      children: [
        { label: 'WordKupo (Final Fantasy Word Game)', path: '/project/wordkupo' },
        { label: 'Art Portfolio Monorepo', path: '/project/art-portfolio' },
        { label: 'Personal Developer Portfolio', path: '/project/personal-portfolio' }
      ]
    },
    { label: 'About & Skills', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ],
  projects: [
{
      id: 'framestepp',
      title: 'FrameStep++',
      category: 'systems',
      size: 'hero',
      image: '/images/framestepp.gif',
      imageAlt: 'FrameStep++ playground demonstrating the Connection program with source editing, compiler controls, expected output, and an animated terminal',
      imageCaption: 'Demo note: FrameStep++ produces the printed output immediately. The character-by-character transmission is a decorative web-playground effect designed to match the game-inspired interface.',
      additionalMedia: [
        {
          image: '/images/framestepp-code.gif',
          imageAlt: 'FrameStep++ running directly in a terminal without the web playground',
          imageCaption: 'Original demo: the FrameStep++ code running directly in the terminal, without the themed playground.',
          aspectRatio: '720 / 510'
        }
      ],
      imagePresentation: 'demo',
      aspectRatio: '1147 / 685',
      objectFit: 'contain',
      gradient: 'linear-gradient(135deg, #1b263b 0%, #2b3a4a 50%, #415a77 100%)',
      path: '/project/framestepp',
      summary: 'Statically typed programming language and stack-based bytecode virtual machine implemented in C++20.',
      tags: ['C++20', 'Compilers', 'Virtual Machine', 'Bytecode', 'CMake', 'Ninja'],
      githubUrl: 'https://github.com/Rowrow620/Framestepp',
      liveUrl: 'https://rowrow620.github.io/Framestepp/',
      stats: [
        { label: 'Automated Tests', value: '122 Passing' },
        { label: 'Standard', value: 'C++20' },
        { label: 'Execution Engine', value: 'Stack VM' },
        { label: 'Sanitizers', value: 'ASan & UBSan' }
      ],
      highlights: [
        'Compiler pipeline comprising a Lexer, recursive-descent Parser, Type Checker, and Bytecode Compiler.',
        'Stack-based Bytecode Virtual Machine with a bytecode verifier, runtime execution engine, and diagnostics system.',
        'Automated test suite of 122 test cases passing across MSVC, GCC, Clang, AddressSanitizer (ASan), and UndefinedBehaviorSanitizer (UBSan).'
      ],
      architecture: 'Source -> Lexer -> Parser -> Type Checker -> Bytecode Compiler -> Bytecode Verifier -> Virtual Machine -> Execution Output.',
      codeSnippet: {
        language: 'framestepp',
        filename: 'examples/damage.frame',
        code: `fn damage(base: Int, critical: Bool) -> Int {
    if critical {
        base * 2
    } else {
        base
    }
}

frameout(damage(35, true)); // Outputs: 70`
      }

    },
    {

      id: 'algobuddy',
      title: 'AlgoBuddy',
      category: 'tools',
      size: 'medium',
      image: '/images/algobuddy.gif',
      imageAlt: 'AlgoBuddy demonstrating Contains Duplicate with a live state inspector and step-by-step code tracing',
      imagePresentation: 'demo',
      aspectRatio: '1515 / 905',
      objectFit: 'contain',
      status: 'Work in progress',
      statusNote: 'Some algorithm visualizations are incomplete or may produce incorrect results. Implementation and correctness validation are ongoing; the 150-problem roadmap is the project scope, not a count of verified implementations.',
      gradient: 'linear-gradient(135deg, #09203f 0%, #1b4965 50%, #3a86ff 100%)',
      path: '/project/algobuddy',
      summary: 'Open-source, work-in-progress algorithm visualizer built in Rust for native desktop and WebAssembly, organized around the NeetCode 150 roadmap.',
      tags: ['Rust', 'eframe / egui', 'WebAssembly', 'Algorithms', 'Interactive UI', 'WASM'],
      githubUrl: 'https://github.com/Rowrow620/AlgoBuddy',
      liveUrl: 'https://rowrow620.github.io/AlgoBuddy',
      role: 'Creator & Lead Maintainer',
      openSource: {
        summary: 'I created AlgoBuddy and released it under the MIT License. As its primary maintainer, I lead development, architecture, documentation, and ongoing correctness improvements.',
        practices: [
          'Published contribution guidelines, issue and pull-request templates, a code of conduct, and private security-reporting instructions to support community contributions.',
          'Documented a pull-request-based development and release workflow, supported by automated Rust formatting checks, Clippy linting, tests, and CodeQL scanning.',
          'Maintain a versioned changelog and release checklist, including native and WebAssembly validation.'
        ],
        links: [
          { label: 'MIT License', url: 'https://github.com/Rowrow620/AlgoBuddy/blob/main/LICENSE' },
          { label: 'Contribution Guidelines', url: 'https://github.com/Rowrow620/AlgoBuddy/blob/main/CONTRIBUTING.md' },
          { label: 'Release Process', url: 'https://github.com/Rowrow620/AlgoBuddy/blob/main/RELEASING.md' }
        ]
      },
      stats: [
        { label: 'Roadmap Scope', value: '150 Problems' },
        { label: 'Topic Categories', value: '18 Categories' },
        { label: 'Deployments', value: 'Native + WASM' },
        { label: 'Framework', value: 'egui / eframe' }
      ],
      highlights: [
        'Interactive visualization roadmap covering 150 algorithm problems across 18 topic domains, with implementation and correctness validation in active development.',
        'Deterministic state snapshot model supporting bidirectional timeline stepping, variable-rate playback (0.25x to 4.00x), and source line execution tracing.',
        'Typed canvas renderers for arrays, linked lists, binary trees, graphs, heaps, and dynamic programming state tables.',
        'WebAssembly compilation for browser-based execution alongside native desktop binaries.'
      ],
      architecture: 'Deterministic generator functions emit Vec<Step> snapshots -> Engine manages timeline scrubbing & step playback -> Custom egui canvas components render typed visual states.',
      codeSnippet: {
        language: 'rust',
        filename: 'src/engine.rs',
        code: `pub fn step_forward(&mut self) {
    if self.current_step < self.total_steps() - 1 {
        self.current_step += 1;
        self.sync_active_snapshot();
    }
}`
      }

    },
    {

      id: 'pixelbuddy',
      title: 'PixelBuddy',
      category: 'tools',
      size: 'small',
      image: '/images/pixelbuddy.gif',
      imageAlt: 'PixelBuddy pixel-art editor demonstrating image import with canvas, layer, and palette controls',
      imagePresentation: 'demo',
      aspectRatio: '1371 / 905',
      objectFit: 'contain',
      gradient: 'linear-gradient(135deg, #370617 0%, #6a040f 50%, #9d0208 100%)',
      path: '/project/pixelbuddy',
      summary: 'Pixel art sprite and animation editor implemented in Rust and compiled for native desktop and WebAssembly.',
      tags: ['Rust', 'WebAssembly', 'Pixel Art', 'Graphics', 'Desktop UI'],
      githubUrl: 'https://github.com/Rowrow620/pixelbuddy',
      liveUrl: 'https://rowrow620.github.io/PixelBuddy/',
      role: 'Creator & Developer',
      stats: [
        { label: 'Engine', value: 'Rust 2021' },
        { label: 'Target', value: 'Native & WASM' }
      ],
      highlights: [
        'Sprite editing interface with multi-frame timeline management, layer compositing, and canvas previews.',
        'Deployment targets supporting native desktop binaries and client-side WebAssembly execution in the browser.'
      ]

        },
    {
      id: 'wsl-cam-bridge',
      title: 'wsl-cam-bridge',
      category: 'tools',
      size: 'medium',
      image: '/images/wsl-cam-bridge-dashboard.png',
      imageAlt: 'wsl-cam-bridge browser dashboard showing webcam stream and device controls',
      imagePresentation: 'demo',
      aspectRatio: '1024 / 801',
      objectFit: 'contain',
      additionalMedia: [
        {
          image: '/images/wsl-cam-bridge-tray.png',
          imageAlt: 'wsl-cam-bridge Windows system tray context menu with camera and resolution selection',
          aspectRatio: '602 / 207'
        }
      ],
      gradient: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)',
      path: '/project/wsl-cam-bridge',
      summary: 'Windows system tray application built in Rust that bridges host webcam video into WSL2 via local HTTP and V4L2 loopback, resolving hardware forwarding limits on PCIe and MIPI cameras.',
      tags: ['Rust', 'WSL2', 'Windows Media Foundation', 'V4L2', 'MJPEG', 'OpenCV'],
      githubUrl: 'https://github.com/Rowrow620/wsl-cam-bridge',
      openSource: {
        summary: 'wsl-cam-bridge is an open-source project released under the GNU General Public License v3.0.',
        practices: [
          'Source code, release binaries, and setup scripts are fully documented and hosted on GitHub.',
          'Includes setup scripts for automated Linux v4l2loopback virtual device creation in WSL2.'
        ],
        links: [
          { label: 'GitHub Repository', url: 'https://github.com/Rowrow620/wsl-cam-bridge' },
          { label: 'GPLv3 License', url: 'https://github.com/Rowrow620/wsl-cam-bridge/blob/main/LICENSE' }
        ]
      },
      stats: [
        { label: 'Language', value: 'Rust 2024' },
        { label: 'Capture API', value: 'Media Foundation' },
        { label: 'Target', value: 'WSL2 / Linux' },
        { label: 'Protocol', value: 'MJPEG / HTTP' }
      ],
      highlights: [
        'Captures host video via Windows Media Foundation and streams MJPEG frames over local HTTP (localhost:8080).',
        'Bypasses usbipd-win USB forwarding limitations for integrated laptop webcams connected over PCIe or MIPI buses.',
        'Enables stream consumption inside WSL2 via OpenCV HTTP streams or kernel loopback mapping to /dev/video0 through v4l2loopback.',
        'Windows system tray interface for runtime device selection, resolution configuration, and stream pausing.'
      ]
    },
    {

      id: 'forge',
      title: 'Forge',
      category: 'systems',
      size: 'small',
      image: '/images/forgestudio.gif',
      imageAlt: 'Forge Studio demonstrating a dependency graph with parallel native task execution and worker activity',
      imagePresentation: 'demo',
      aspectRatio: '1289 / 843',
      objectFit: 'contain',
      gradient: 'linear-gradient(135deg, #132a13 0%, #31572c 50%, #4f772d 100%)',
      path: '/project/forge',
      summary: 'C++20 dependency-aware task runner with TOML configuration parsing and deterministic execution graphs.',
      tags: ['C++20', 'Build Systems', 'DAG Graph', 'TOML', 'CLI', 'Native GUI'],
      githubUrl: 'https://github.com/Rowrow620/forge',
      stats: [
        { label: 'Standard', value: 'C++20' },
        { label: 'Configuration', value: 'forge.toml' },
        { label: 'Interface', value: 'Native GUI' }
      ],
      highlights: [
        'Parses forge.toml target configurations and validates dependency directed acyclic graphs (DAGs) for cycle detection.',
        'Execution planner supporting Windows and POSIX child process spawning, pipe multiplexing, and fail-fast termination.',
        'Native Forge Studio GUI displaying topological dependency graphs, task execution states, worker thread utilization, and log output.'
      ]

    },
    {

      id: 'unlimited-lob',
      title: 'Unlimited LOB Points & Agents',
      category: 'mods',
      image: '/images/unlimited-lob.png',
      imageAlt: 'LOB POINT and HIRE (∞) buttons displaying unlimited resources mod in Lobotomy Corporation',
      showOnHome: false,
      size: 'medium',
      gradient: 'linear-gradient(135deg, #240046 0%, #3c096c 50%, #5a189a 100%)',
      path: '/project/unlimited-lob',
      summary: 'Harmony runtime modification for Lobotomy Corporation that overrides resource caps on LOB points and agent recruitment limits.',
      tags: ['C#', '.NET', 'Harmony Hooks', 'Game Modding', 'Lobotomy Corp'],
      githubUrl: 'https://github.com/Rowrow620/UnlimitedLOBPointsAndAgents',
      liveUrl: 'https://www.nexusmods.com/lobotomycorporation/mods/1282',
      stats: [
        { label: 'Platform', value: 'NexusMods' },
        { label: 'Framework', value: 'Harmony Hooks' }
      ],
      highlights: [
        'Hooks game assembly routines at runtime to remove integer ceilings on LOB currency and eliminate max agent recruitment limits.',
        'Configures Harmony execution priority attributes (Priority.First and Priority.Last) to prevent patch conflicts across modded assemblies.'
      ]

    },
    {

      id: 'fastforwardspeed',
      title: 'FastForwardSpeed',
      category: 'mods',
      showOnHome: false,
      size: 'medium',
      aspectRatio: '16/9',
      objectFit: 'contain',
      image: '/images/forwardfastspeed.webp',
      gradient: 'linear-gradient(135deg, #3d0066 0%, #5c0099 50%, #8f00ff 100%)',
      path: '/project/fastforwardspeed',
      summary: 'Harmony runtime speed modification for Lobotomy Corporation implementing 4x, 8x, and 16x game loop multipliers with synchronized fixed physics timesteps.',
      tags: ['C#', '.NET', 'Harmony Hooks', 'Unity Engine', 'Game Modding', 'Tutorials'],
      githubUrl: 'https://github.com/Rowrow620/FastForwardSpeed',
      liveUrl: 'https://www.nexusmods.com/lobotomycorporation/mods/1281',
      stats: [
        { label: 'Platform', value: 'NexusMods' },
        { label: 'Multipliers', value: 'Up to 16x' },
        { label: 'Compatibility', value: 'BaseMod 5.0+' },
        { label: 'Tutorial', value: 'CustomSpeed Guide' }
      ],
      highlights: [
        'Modifies GameManager speed levels by synchronizing Time.timeScale with proportional Time.fixedDeltaTime scaling to prevent physics desynchronization.',
        'Packaged into two patch configurations: standard multipliers (1x, 4x, 8x) and extended multipliers (1x, 8x, 16x).',
        'Documentation covering Unity game assembly decompilation with dnSpy, IL bytecode inspection, multiplier modification, and Harmony patch recompilation.'
      ],
      architecture: 'Harmony Postfix Hook -> Intercept GameManager.UpdateGameSpeed -> Recalculate Time.timeScale & synchronized Time.fixedDeltaTime.',
      codeSnippet: {
        language: 'csharp',
        filename: 'FastForwardSpeed.cs',
        code: `public static void UpdateGameSpeed_Postfix(GameManager __instance)
{
    if (__instance.state != GameState.PLAYING) return;

    if (__instance.gameSpeedLevel == 2)
    {
        Time.timeScale = 4f;         // 4x speed multiplier
        Time.fixedDeltaTime = 0.08f; // Synchronize fixed physics step
    }
}`
      }
    }
,
    {
      id: 'kh-save-editor-keyblade',
      title: 'KH Save Editor - Keyblade',
      category: 'file-editors',
      image: '/images/kh-save-editor.png',
      imageAlt: 'Screenshot of the Kingdom Hearts Save Editor interface',
      showOnHome: false,
      size: 'medium',
      gradient: 'linear-gradient(135deg, #1f005c 0%, #5b0060 50%, #870160 100%)',
      path: '/project/kh-save-editor-keyblade',
      summary: 'Client-side binary save file editor and slot transfer utility for PC versions of the Kingdom Hearts Final Mix collection.',
      tags: ['Browser Tool', 'Save Editor', 'Data Parsing', 'Game Modding', 'Kingdom Hearts'],
      githubUrl: 'https://github.com/Rowrow620/kh-save-editor-keyblade',
      liveUrl: 'https://rowrow620.github.io/kh-save-editor-keyblade/',
      stats: [
        { label: 'Platform', value: 'Browser' },
        { label: 'Supported Games', value: '3 Titles' }
      ],
      highlights: [
        'Parses, modifies, and transfers binary save data across Kingdom Hearts Final Mix, Re:Chain of Memories, and Kingdom Hearts II Final Mix.',
        'Edits binary data offsets including character levels, experience points, equipped abilities, currencies, and item inventory tables.',
        'Calculates and updates party progression offsets and stat data purely client-side without external backend dependencies.'
      ]

    },
    {
      id: 'ezslides',
      title: 'EzSlides',
      category: 'mods',
      image: 'https://placehold.co/1200x600/181824/ffffff?text=EzSlides+In-Game+Viewer',
      imageAlt: 'EzSlides in-game FFXIV slide and raid diagram viewer interface',
      showOnHome: false,
      size: 'medium',
      gradient: 'linear-gradient(135deg, #181824 0%, #2a2a3c 50%, #3e3e54 100%)',
      path: '/project/ezslides',
      summary: 'In-game image and slide presentation plugin for Final Fantasy XIV built on the Dalamud framework using C# and Dear ImGui.',
      tags: ['C#', '.NET', 'Dalamud', 'FFXIV', 'ImGui', 'Game UI'],
      githubUrl: 'https://github.com/Rowrow620/ezSlidesXIV',
      highlights: [
        'Renders local image collections and strategy diagrams directly into the DirectX 11 game viewport via Dalamud and Dear ImGui.',
        'Provides an in-engine overlay window to view multi-slide diagrams during encounters without switching active OS windows.',
        'Slide navigation controls including previous/next buttons, direct index jumping, configurable keybindings, and automated looping.',
        'Supports borderless display modes, window collapsing to a minimal title tab, and automated directory polling for local image files.'
      ]
    },
    {
      id: 'xivlibra',
      title: 'XIVLibra',
      category: 'mods',
      image: '/images/xivlibra.gif',
      imageAlt: 'XIVLibra real-time combat and DPS meter overlay recording in Final Fantasy XIV',
      imagePresentation: 'demo',
      aspectRatio: '501 / 179',
      objectFit: 'contain',
      showOnHome: false,
      size: 'medium',
      gradient: 'linear-gradient(135deg, #121826 0%, #1e293b 50%, #334155 100%)',
      path: '/project/xivlibra',
      summary: 'Real-time combat telemetry and damage meter plugin for Final Fantasy XIV built on Dalamud, FFXIVClientStructs, and Dear ImGui.',
      tags: ['C#', '.NET', 'Dalamud', 'FFXIV', 'FFXIVClientStructs', 'Memory Hooking', 'ImGui'],
      githubUrl: 'https://github.com/Rowrow620/XIVLibra',
      highlights: [
        'Intercepts combat network packets by hooking ActionEffectHandler::Receive via Dalamud IGameInteropProvider and FFXIVClientStructs function detours.',
        'Aggregates damage dealt, effective healing, and damage taken with entity ownership attribution for pets and summoned entities.',
        'Renders combat metrics via Dear ImGui with party role filtering (Tank, Healer, DPS), collapsible player views, and configurable window opacity.',
        'Indexes encounter segmentation by combat state, supporting boss-pull history inspection and export to CSV, JSON, and standard log formats.'
      ]
    },
    {
      id: 'wordkupo',
      title: 'WordKupo',
      category: 'web',
      image: '/images/wordkupo.png',
      imageAlt: 'WordKupo Final Fantasy word game showing a six-row daily puzzle grid and on-screen keyboard',
      imagePresentation: 'demo',
      aspectRatio: '560 / 750',
      objectFit: 'contain',
      showOnHome: false,
      size: 'medium',
      status: 'Active Development',
      statusNote: 'Classic mode is fully playable with daily seeded puzzles, lore hints, and streak tracking. Evolved mode is a fully playable turn-based RPG battle encounter that connects Wordle guess accuracy to combat formulas, party stats, and enemy AI, with persistent multi-area progression in development.',
      gradient: 'linear-gradient(135deg, #08112d 0%, #19346f 50%, #d6b65f 100%)',
      path: '/project/wordkupo',
      summary: 'Final Fantasy-inspired word game and turn-based RPG battle engine built with React and TypeScript, integrating dictionary-validated word guessing with combat calculation mechanics.',
      tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Game UI', 'RPG Systems'],
      stats: [
        { label: 'Platform', value: 'Browser (Desktop & Mobile)' },
        { label: 'Visual Inspiration', value: 'FF1 (GBA) & NES Classics' },
        { label: 'Game Modes', value: 'Classic + Evolved' },
        { label: 'Puzzle Length', value: '5 or 6 Letters (Daily Seeded)' },
        { label: 'Save State', value: 'LocalStorage' }
      ],
      highlights: [
        'Classic Mode: Seeded daily 5- and 6-letter puzzles with 6 guess attempts, positional letter feedback (correct, present, absent), domain-specific dictionary filtering, streak calculation, and clipboard result export.',
        'Companion System: Dialogue engine implementing character-by-character typewriter rendering, Web Audio API sound synthesis, contextual hints, and a toggleable hint-free mode.',
        'Evolved Mode: Turn-based RPG encounter system featuring a 4-character party composed from 6 selectable job classes (Warrior, Thief, Monk, Red Mage, White Mage, Black Mage) with distinct stat baselines.',
        'Combat Evaluation Pipeline: Translates guess evaluation arrays into combat inputs; correct letter placements calculate damage multipliers, word solutions trigger critical hit multipliers, and invalid letters trigger enemy attack turns.',
        'Battle Command Interface: Action selection supporting physical attacks, job-specific magic spells with MP consumption pools, defense damage reduction modifiers, and item consumption.',
        '2.5D Battle Coordinate Engine: Origin-anchored positioning system (translate(-50%, -100%)) within a fixed 3:2 viewport, normalizing ground-plane alignment across heterogeneous sprite dimensions.',
        'Typography and Asset Scaling: Custom TrueType font rendered with disabled font antialiasing and 1px text borders, alongside background and sprite assets scaled 4x via nearest-neighbor interpolation.',
        'Audio and Theme Architecture: Synthesizer and SFX management for menu navigation, combat cues, and background audio loops, paired with CSS custom-property theme swapping.'
      ],
      architecture: `React / Vite UI Layer
  ├── Title Menu & Party Naming Flow (Job selection & stat baselines)
  ├── Dual Game Modes:
  │    ├── Classic Mode: Board state → Mogbert dialogue engine → Streak/Record store
  │    └── Evolved Mode: Wordle letter evaluation → Damage & Spell calculation engine →
  │                      2.5D Battle Arena + Enemy AI Turn Loop
  ├── Shared Core:
  │    ├── Dictionary validator & daily word generator (seeded by calendar date)
  │    └── Audio synthesizer & SFX manager
  └── Persistence Layer (LocalStorage): Game progress, party composition, audio settings, and records`
    },
    {

      id: 'art-portfolio',
      title: 'Art Portfolio Monorepo',
      category: 'web',
      image: '/images/art-portfolio.jpg',
      imageAlt: 'Screenshot of the Art Portfolio website',
      showOnHome: true,
      size: 'medium',
      gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      path: '/project/art-portfolio',
      summary: 'Client art portfolio and gallery application built with React, TypeScript, and Vite within an npm workspaces monorepo.',
      tags: ['React', 'TypeScript', 'Vite', 'Monorepo', 'CSS Modules'],
      githubUrl: 'https://github.com/ssuhshinji/art-portfolio',
      liveUrl: 'https://ssuhshinji.github.io/art-portfolio/',
      role: 'Lead Developer & Architect',
      stats: [
        { label: 'Architecture', value: 'Monorepo' },
        { label: 'Framework', value: 'React + Vite' }
      ],
      highlights: [
        'Configured npm workspaces monorepo structure to share UI design tokens and components across distinct site packages.',
        'CSS grid and column-based masonry gallery layout adapting dynamically across responsive viewport breakpoints.',
        'Structured TypeScript interfaces for portfolio metadata and gallery item schemas, enabling static data updates without modifying rendering logic.'
      ]
    },
    {
      id: 'personal-portfolio',
      title: 'Personal Developer Portfolio',
      category: 'web',
      image: '/images/personal-portfolio.png',
      imageAlt: 'Screenshot of the personal developer portfolio homepage',
      showOnHome: true,
      size: 'medium',
      gradient: 'linear-gradient(135deg, #1e1e2f 0%, #2a2a40 50%, #3f3f5a 100%)',
      path: '/project/personal-portfolio',
      summary: 'Personal portfolio web application and project catalog built with React, TypeScript, and Vite within a monorepo workspace.',
      tags: ['React', 'TypeScript', 'Vite', 'CSS Modules', 'React Router'],
      githubUrl: 'https://github.com/Rowrow620/MyPortfolio',
      liveUrl: 'https://rowrow620.github.io/MyPortfolio/',
      stats: [
        { label: 'Framework', value: 'React + Vite' },
        { label: 'Styling', value: 'CSS Modules' }
      ],
      highlights: [
        'Centralized TypeScript data configuration defining project metadata, categorization, deep links, and navigation hierarchy.',
        'Scoped styling implementation using CSS Modules, CSS custom properties for theming, and responsive layout grids.',
        'Static build generation via Vite with automated asset optimization and deployment workflows for GitHub Pages.'
      ]
    },
    {
      id: 'anvilmesh',
      title: 'AnvilMesh',
      category: 'systems',
      size: 'medium',
      image: '/images/anvilmesh-studio.png',
      imageAlt: 'AnvilMesh desktop application showing the compute playground, distributed processing stages, and image-operation controls',
      imagePresentation: 'demo',
      aspectRatio: '1245 / 795',
      objectFit: 'contain',
      status: 'Work in progress',
      statusNote: 'The core distributed compute pipeline is functional. Desktop interface polish and additional end-to-end workflow validation are still in progress.',
      gradient: 'linear-gradient(135deg, #1f1c2c 0%, #302b63 50%, #0f0c20 100%)',
      path: '/project/anvilmesh',
      summary: 'Distributed compute service coordinating CPU and CUDA GPU workloads across Go coordinators and C++20 workers.',
      tags: ['Go', 'C++20', 'CUDA', 'PostgreSQL', 'Distributed Systems', 'MinIO / S3', 'Docker'],
      githubUrl: 'https://github.com/Rowrow620/AnvilMesh',
      stats: [
        { label: 'GPU Speedup', value: '20.47× @ 4K' },
        { label: 'State Model', value: 'PostgreSQL Leases' },
        { label: 'Worker Stack', value: 'C++20 & CUDA' },
        { label: 'Chaos Testing', value: '100% Pass' }
      ],
      highlights: [
        'Distributed compute engine coordinating asynchronous job execution between Go orchestrators and native C++20/CUDA worker processes.',
        'CUDA image processing kernels (Gaussian blur, Sobel edge detection, grayscale conversion) achieving 20.47x speedup on 4K images relative to single-threaded CPU execution.',
        'Lease-based job state machine in PostgreSQL utilizing row-level locking (FOR UPDATE SKIP LOCKED), monotonic fencing tokens, and heartbeat-based worker timeout expiration.',
        'Binary TCP wire protocol implementing frame length prefixing and CRC32 payload checksums, integrated with S3-compatible content-addressed SHA-256 artifact storage.'
      ],
      architecture: 'Client / CLI -> REST API (:8080) -> PostgreSQL 16+ (ACID Leases) -> Binary TCP Coordinator -> C++20 / CUDA Workers -> MinIO/S3 (SHA-256 Storage).',
      codeSnippet: {
        language: 'cpp',
        filename: 'worker-cpp/kernels/gaussian_blur.cu',
        code: `__global__ void gaussian_blur_kernel(
    const uint8_t* __restrict__ input,
    uint8_t* __restrict__ output,
    int width, int height, int pitch)
{
    int x = blockIdx.x * blockDim.x + threadIdx.x;
    int y = blockIdx.y * blockDim.y + threadIdx.y;
    if (x >= width || y >= height) return;
    
    // 2D separable Gaussian convolution with shared memory caching
    apply_separable_filter(input, output, x, y, width, height, pitch);
}`
      }

    },
    {

      id: 'traceforge',
      title: 'TraceForge',
      category: 'systems',
      size: 'medium',
      image: '/images/traceforge-studio.png',
      imageAlt: 'TraceForge Studio displaying a multithreaded trace timeline, performance metrics, hotspots, and span inspection',
      imagePresentation: 'demo',
      aspectRatio: '16 / 9',
      objectFit: 'contain',
      gradient: 'linear-gradient(135deg, #2b0938 0%, #511845 50%, #8b263e 100%)',
      path: '/project/traceforge',
      summary: 'C++ runtime event tracing system with wait-free shared-memory IPC and Rust CLI analysis tools.',
      tags: ['C++20', 'Rust', 'Shared Memory IPC', 'Lock-Free', 'Perfetto Export', 'Windows API'],
      githubUrl: 'https://github.com/Rowrow620/TraceForge',
      stats: [
        { label: 'IPC Model', value: 'Wait-Free Ring' },
        { label: 'Timeline Export', value: 'Perfetto / Chrome' },
        { label: 'Core Stack', value: 'C++20 & Rust' }
      ],
      highlights: [
        'Thread-local instrumentation macros streaming structured event payloads directly to a background collection daemon via named shared memory.',
        'Wait-free circular ring buffer implementing atomic sequence counters for thread-local event enqueueing with configurable overflow policies.',
        'Rust CLI analysis parser supporting binary trace decoding, statistical aggregation by category, and Perfetto/Chrome Tracing JSON export.'
      ],
      architecture: 'C++ Target App (Wait-Free IPC Queue) -> Shared Memory -> Background Daemon (traceforged.exe) -> .tftrace file -> Rust CLI Analyzer / Perfetto Viewer.',
      codeSnippet: {
        language: 'cpp',
        filename: 'examples/main.cpp',
        code: `#include <traceforge/trace.hpp>

int main() {
    traceforge::SessionOptions opts;
    traceforge::Session session(opts);
    session.set_process_name("game-engine");
    
    TF_SCOPE("engine", "frame_update");
    TF_COUNTER("memory", "allocations", 42);
    return 0;
}`
      }

    }
  ]
};
