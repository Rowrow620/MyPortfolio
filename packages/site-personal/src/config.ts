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
        { label: 'PixelBuddy (Pixel Art Editor)', path: '/project/pixelbuddy' }
      ]
    },
    {
      label: 'Mods / Game Tools',
      path: '/category/mods',
      children: [
        { label: 'Unlimited LOB Points & Agents', path: '/project/unlimited-lob' },
        { label: 'FastForwardSpeed (Game Multipliers)', path: '/project/fastforwardspeed' },
        { label: 'KH Save Editor - Keyblade', path: '/project/kh-save-editor-keyblade' }
      ]
    },
    {
      label: 'Web Development',
      path: '/category/web',
      children: [
        { label: 'Art Portfolio Monorepo', path: '/project/art-portfolio' }
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
      image: 'https://raw.githubusercontent.com/Rowrow620/Framestepp/main/assets/framestepp-demo.gif',
      gradient: 'linear-gradient(135deg, #1b263b 0%, #2b3a4a 50%, #415a77 100%)',
      path: '/project/framestepp',
      summary: 'Statically typed programming language & stack-based bytecode virtual machine built from scratch in C++20.',
      tags: ['C++20', 'Compilers', 'Virtual Machine', 'Bytecode', 'CMake', 'Ninja'],
      githubUrl: 'https://github.com/Rowrow620/Framestepp',
      stats: [
        { label: 'Automated Tests', value: '122 Passing' },
        { label: 'Standard', value: 'C++20' },
        { label: 'Execution Engine', value: 'Stack VM' },
        { label: 'Sanitizers', value: 'ASan & UBSan' }
      ],
      highlights: [
        'Built full compiler pipeline from scratch: Lexer, recursive-descent Parser, Type Checker, and Bytecode Compiler.',
        'Engineered custom stack-based Bytecode Virtual Machine with a verified bytecode runtime and diagnostics system.',
        'Maintained rigorous test suite of 122 automated tests verified across MSVC, GCC, Clang, AddressSanitizer, and UBSan.'
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
      id: 'anvilmesh',
      title: 'AnvilMesh',
      category: 'systems',
      size: 'medium',
      image: 'https://placehold.co/1200x600/1f1c2c/ffffff?text=Add+AnvilMesh+Benchmark+Graph+Here',
      gradient: 'linear-gradient(135deg, #1f1c2c 0%, #302b63 50%, #0f0c20 100%)',
      path: '/project/anvilmesh',
      summary: 'Durable multi-tenant distributed compute service coordinating CPU and CUDA GPU workloads across Go and C++20 workers.',
      tags: ['Go', 'C++20', 'CUDA', 'PostgreSQL', 'Distributed Systems', 'MinIO / S3', 'Docker'],
      githubUrl: 'https://github.com/Rowrow620/AnvilMesh',
      stats: [
        { label: 'GPU Speedup', value: '20.47× @ 4K' },
        { label: 'State Model', value: 'PostgreSQL Leases' },
        { label: 'Worker Stack', value: 'C++20 & CUDA' },
        { label: 'Chaos Testing', value: '100% Pass' }
      ],
      highlights: [
        'Architected durable distributed compute engine coordinating async job execution across Go coordinators and native C++20/CUDA workers.',
        'Engineered custom CUDA image processing kernels (Gaussian blur, Sobel, grayscale) delivering 20.47× speedup at 4K UHD vs deterministic CPU reference.',
        'Implemented lease-based state machine in PostgreSQL with row-level locking (SKIP LOCKED), monotonic tokens, and strict stale zombie worker rejection.',
        'Built versioned binary TCP wire protocol with length prefixes, CRC32 checksums, and MinIO/S3 content-addressed SHA-256 object storage.'
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
      image: 'https://placehold.co/1200x600/2b0938/ffffff?text=Add+TraceForge+Perfetto+Timeline+Here',
      gradient: 'linear-gradient(135deg, #2b0938 0%, #511845 50%, #8b263e 100%)',
      path: '/project/traceforge',
      summary: 'High-performance C++ tracing system with wait-free shared memory IPC queue and fast Rust CLI analysis.',
      tags: ['C++20', 'Rust', 'Shared Memory IPC', 'Lock-Free', 'Perfetto Export', 'Windows API'],
      githubUrl: 'https://github.com/Rowrow620/TraceForge',
      stats: [
        { label: 'IPC Model', value: 'Wait-Free Ring' },
        { label: 'Timeline Export', value: 'Perfetto / Chrome' },
        { label: 'Core Stack', value: 'C++20 & Rust' }
      ],
      highlights: [
        'Zero-slowdown runtime instrumentation streaming profiling events directly into background daemon via named shared memory IPC.',
        'Lock-free, wait-free ring buffer for thread-local event capture with configurable drop and backpressure policies.',
        'Fast Rust CLI analysis parser providing instant category breakdowns and Perfetto timeline exports for Chrome Tracing.'
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
        'Developing interactive visualizations for a 150-problem roadmap across 18 algorithmic topic domains, with implementation and correctness validation still in progress.',
        'Deterministic state snapshot model enabling bidirectional timeline scrubbing, variable speed playback (0.25x - 4.00x), and source line tracing.',
        'Specialized typed renderers for arrays, linked lists, binary trees, graphs, heaps, and dynamic programming tables.',
        'Instant web browser execution via WebAssembly without installation, alongside cross-platform native binaries.'
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
      summary: 'Pixel art software tool for creating, editing, and managing sprites and animation frames in Rust and WebAssembly.',
      tags: ['Rust', 'WebAssembly', 'Pixel Art', 'Graphics', 'Desktop UI'],
      githubUrl: 'https://github.com/Rowrow620/pixelbuddy',
      liveUrl: 'https://rowrow620.github.io/PixelBuddy/',
      role: 'Creator & Developer',
      stats: [
        { label: 'Engine', value: 'Rust 2021' },
        { label: 'Target', value: 'Native & WASM' }
      ],
      highlights: [
        'Intuitive pixel art creation tool with multi-frame timeline animation management and real-time canvas previews.',
        'Dual deployment model: standalone native desktop app or zero-install browser WebAssembly client.'
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
      summary: 'C++20 dependency-aware native task runner with strict TOML schema validation and deterministic execution plans.',
      tags: ['C++20', 'Build Systems', 'DAG Graph', 'TOML', 'CLI', 'Native GUI'],
      githubUrl: 'https://github.com/Rowrow620/forge',
      stats: [
        { label: 'Standard', value: 'C++20' },
        { label: 'Configuration', value: 'forge.toml' },
        { label: 'Interface', value: 'Native GUI' }
      ],
      highlights: [
        'Parses strict forge.toml target definitions and validates task dependency directed acyclic graphs (DAGs).',
        'Deterministic execution planner with native Windows and POSIX process management, live stream forwarding, and fail-fast guarantees.',
        'Native Forge Studio GUI displays dependency graphs, task status, worker activity, and execution logs.'
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
      summary: 'A Harmony-based mod for Lobotomy Corporation that gives you unlimited LOB points (used to purchase agents) and infinite agent hiring slots in-game.',
      tags: ['C#', '.NET', 'Harmony Hooks', 'Game Modding', 'Lobotomy Corp'],
      githubUrl: 'https://github.com/Rowrow620/UnlimitedLOBPointsAndAgents',
      stats: [
        { label: 'Platform', value: 'NexusMods' },
        { label: 'Framework', value: 'Harmony Hooks' }
      ],
      highlights: [
        'Overrides in-game limits during runtime to provide unlimited LOB points and infinite agent recruitment slots.',
        'Utilizes Harmony execution priority hooks (First/Last) to maintain compatibility with complex mod ecosystems.'
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
      summary: 'Harmony-based runtime speed multiplier mod for Lobotomy Corporation unlocking customizable 4x, 8x, and 16x game loops.',
      tags: ['C#', '.NET', 'Harmony Hooks', 'Unity Engine', 'Game Modding', 'Tutorials'],
      githubUrl: 'https://github.com/Rowrow620/FastForwardSpeed',
      stats: [
        { label: 'Platform', value: 'NexusMods' },
        { label: 'Multipliers', value: 'Up to 16x' },
        { label: 'Compatibility', value: 'BaseMod 5.0+' },
        { label: 'Tutorial', value: 'CustomSpeed Guide' }
      ],
      highlights: [
        'Engineered dynamic game loop speed modifiers synchronizing Time.timeScale and Time.fixedDeltaTime for smooth high-speed gameplay without physics or UI desync.',
        'Provided dual variants: FastForwardSpeed (1x, 4x, 8x) and EvenFasterForwardSpeed (1x, 8x, 16x) published to NexusMods.',
        'Authored and published the Custom Speed Tutorial (CustomSpeedTutorial.md) guiding developers on decompiling, customizing multipliers, and recompiling C# Harmony patches.'
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
      summary: 'A browser-based save editor and transfer tool for the PC versions of the Kingdom Hearts Final Mix collection.',
      tags: ['Browser Tool', 'Save Editor', 'Data Parsing', 'Game Modding', 'Kingdom Hearts'],
      githubUrl: 'https://github.com/Rowrow620/kh-save-editor-keyblade',
      liveUrl: 'https://rowrow620.github.io/kh-save-editor-keyblade/',
      status: 'Active Development',
      statusNote: 'Planned features include verified Birth by Sleep Final Mix editing for Terra, Ventus, and Aqua, expanding safe editable fields without exposing softlock-prone data, and improving slot summaries, backup guidance, and overall interface polish.',
      stats: [
        { label: 'Platform', value: 'Browser' },
        { label: 'Supported Games', value: '3 Titles' }
      ],
      highlights: [
        'Edit and transfer Steam and Epic Games Store save archives entirely in the browser.',
        'Synchronize KH1 and KH2 levels with EXP, stats, party progression, and level-earned abilities.',
        'Edit Munny, farmable items, Re:Chain Moogle Points, and non-story cards.',
        'Create a new save file without modifying the uploaded original.'
      ]
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
      summary: 'A scalable, responsive art portfolio built for a freelance client using React, TypeScript, and a monorepo architecture.',
      tags: ['React', 'TypeScript', 'Vite', 'Monorepo', 'CSS Modules'],
      githubUrl: 'https://github.com/ssuhshinji/art-portfolio',
      liveUrl: 'https://ssuhshinji.github.io/art-portfolio/',
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
    }
  ]
};
