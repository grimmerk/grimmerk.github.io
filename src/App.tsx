import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div className="flex-shrink-0 order-first md:order-last md:ml-8">
              <img src="assets/profile.png" alt="Grimmer Kang"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Grimmer Kang</h1>
              <p className="text-xl text-gray-600 mb-2">Tech Lead at <a href="https://fireflies.ai" className="text-blue-600 hover:text-blue-800">Fireflies.ai</a></p>
              <p className="text-base text-gray-500 mb-6">Building agentic AI systems and LLM architecture for meeting intelligence at scale</p>
              <p className="text-gray-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                15+ years in software engineering, with a physics background (BS + MS). I've worked across AI, medical imaging,
                astronomy (<a href="https://cartavis.org/" className="text-blue-600 hover:text-blue-800">CARTA</a>, an international C++/JS open-source project at Academia Sinica),
                IoT, and streaming — primarily in TypeScript, Python, and C/C++.
                Beyond code, I've built and led mobile and full-stack engineering teams and introduced Agile practices across organizations.
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto md:mx-0 leading-relaxed mt-3">
                <span className="font-semibold text-gray-700">Currently into:</span> LLM agent architecture, RAG systems, context engineering, MCP tooling
                · Contributor to the <a href="https://github.com/modelcontextprotocol/typescript-sdk" className="text-blue-600 hover:text-blue-800">MCP TypeScript SDK</a>{' '}
                · Building open-source tools for Claude Code: <a href="https://memsaga.grimmer.io" className="text-blue-600 hover:text-blue-800">memsaga</a> and <a href="https://github.com/grimmerk/codev" className="text-blue-600 hover:text-blue-800">CodeV</a>
              </p>

              {/* Social Links */}
              <div className="mt-8 flex justify-center md:justify-start space-x-6">
                <a href="https://github.com/grimmerk"
                  className="text-gray-600 hover:text-gray-900 flex items-center">
                  <Github className="h-6 w-6" />
                  <span className="ml-2">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/grimmerk"
                  className="text-gray-600 hover:text-gray-900 flex items-center">
                  <Linkedin className="h-6 w-6" />
                  <span className="ml-2">LinkedIn</span>
                </a>
                <a href="mailto:k@grimmer.io"
                  className="text-gray-600 hover:text-gray-900 flex items-center">
                  <Mail className="h-6 w-6" />
                  <span className="ml-2">k@grimmer.io</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Open-source tools for Claude Code */}
      <div className="max-w-6xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Open-source tools for Claude Code</h2>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* memsaga */}
          <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
            <div className="relative aspect-video bg-white border-b border-gray-100">
              <img
                src="assets/memsaga-preview.png"
                alt="memsaga: Claude Code's memory and config kept as a git history you own"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">memsaga</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Version control and two-way sync for Claude Code's memory, skills and config.
                Every change is a commit named after the conversation that made it, in a git
                repository you own, and edits made on GitHub or another machine come back.
                It also keeps companion docs: notes and translations beside a repository you
                can't commit to.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Rust</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Claude Code</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Git</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">macOS / Linux</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <a href="https://memsaga.grimmer.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Website</a>
                <a href="https://github.com/grimmerk/memsaga" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">GitHub</a>
                <a href="https://crates.io/crates/memsaga" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">crates.io</a>
              </div>
            </div>
          </div>

          {/* CodeV */}
          <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
            <div className="relative aspect-video bg-gray-900">
              <img
                src="assets/codev-icon.png"
                alt="CodeV app icon"
                className="absolute inset-0 w-full h-full object-contain p-[12%]"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">CodeV</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                A macOS app for Claude Code sessions: list, search and resume every session, see
                which ones are working, idle or waiting for you, and jump to the terminal each one
                runs in (iTerm2, Terminal, Ghostty, cmux or VS Code). It also switches VS Code and
                Cursor projects and has a built-in terminal.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Electron</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Claude Code</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">macOS</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <a href="https://github.com/grimmerk/codev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">GitHub</a>
                <a href="https://github.com/grimmerk/codev/releases/latest" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Download</a>
                <a href="https://apps.apple.com/us/app/switchv/id1663612397" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Mac App Store <span className="text-gray-500">(without sessions)</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Earlier work */}
      <div className="max-w-6xl mx-auto pt-8 pb-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Earlier work</h2>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Developer Tools */}
          <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
            <div className="relative aspect-video bg-gray-900">
              <img
                src="assets/vscode-preview.png"
                alt="VS Code extension preview"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Developer Tools & Open Source</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Built a <a href="https://marketplace.visualstudio.com/items?itemName=grimmer.vscode-back-forward-button" className="text-blue-600 hover:text-blue-800">VS Code extension</a> (78,000+ installs),
                Chrome extensions, TypeScript libraries (<a href="https://www.npmjs.com/package/d4c-queue" className="text-blue-600 hover:text-blue-800">d4c-queue</a> 15K+, <a href="https://www.npmjs.com/package/@d4c/numjs" className="text-blue-600 hover:text-blue-800">@d4c/numjs</a> 20K+ downloads),
                and a <a href="https://chrome.google.com/webstore/detail/dicom-image-viewer/ehppmcooahfnlfhhcflpkcjmonkoindc" className="text-blue-600 hover:text-blue-800">Medical DICOM Viewer</a> (3,000+ users).
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">VS Code</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Chrome Extensions</span>
              </div>
            </div>
          </div>

          {/* CARTA */}
          <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
            <div className="relative aspect-video bg-gray-900">
              <img
                src="assets/carta-preview.png"
                alt="CARTA visualization"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Astronomy Software Development</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Led development of <a href="https://cartavis.org/" className="text-blue-600 hover:text-blue-800">CARTA</a> (Cube Analysis and Rendering Tool for Astronomy) at Academia Sinica,
                an international C++/JS open-source project collaborating with US (NRAO), Canada, and South Africa teams.
                Built a full-stack + algorithm team, designed the live collaborative share-screen architecture,
                and resolved critical issues through close collaboration with astronomers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">C++</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Talks Section */}
      <div className="max-w-6xl mx-auto pt-8 pb-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Talks</h2>
        <div className="grid gap-8 md:grid-cols-5 items-start">
        <figure className="md:col-span-2">
          <div className="bg-gray-900 rounded-lg shadow overflow-hidden">
            <img
              src="assets/pycon-outline.png"
              alt="Talk slide: Use Pyodide to run Python in browsers, at PyCon APAC 2021"
              className="w-full h-auto"
            />
          </div>
          <figcaption className="text-sm text-gray-500 mt-2">PyCon APAC 2021, Thailand</figcaption>
        </figure>
        <div className="md:col-span-3 bg-white rounded-lg shadow divide-y">
          <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="font-semibold text-gray-900">FOSSASIA Summit 2025 <span className="text-gray-500 font-normal">— Bangkok</span></h3>
              <p className="text-gray-600 text-sm mt-1">CodeV: Streamlining Developer Workflow with an Open Source VS Code Launcher</p>
            </div>
            <div className="flex gap-3 text-sm">
              <a href="https://slides.com/grimmer/fossasia-2025-switchv-streamlining-developer-workflow-with-an-open-source-vs-code-launcher" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">slide</a>
              <a href="https://www.youtube.com/watch?v=o5Y29yEV6BA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">video</a>
            </div>
          </div>
          <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="font-semibold text-gray-900">PyCon APAC 2021 <span className="text-gray-500 font-normal">— Thailand</span></h3>
              <p className="text-gray-600 text-sm mt-1">Use Pyodide to run Python in browsers — rendering medical DICOM files</p>
            </div>
            <div className="flex gap-3 text-sm">
              <a href="https://slides.com/grimmer/pyconapac_pyodide_dicom_viewer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">slide</a>
              <a href="https://youtu.be/kd4C6KNbHT4" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">video</a>
            </div>
          </div>
          <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="font-semibold text-gray-900">PyConTW 2021 <span className="text-gray-500 font-normal">— Taiwan</span></h3>
              <p className="text-gray-600 text-sm mt-1">Use Pyodide to run Python in browsers — rendering medical DICOM files</p>
            </div>
            <div className="flex gap-3 text-sm">
              <a href="https://slides.com/grimmer/intro_pyodide_medical_dicom_viewer/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">slide</a>
              <a href="https://www.youtube.com/watch?v=Wk6sePJb26o" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">video</a>
            </div>
          </div>
          <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="font-semibold text-gray-900">COSCUP 2021 <span className="text-gray-500 font-normal">— Taiwan</span></h3>
              <p className="text-gray-600 text-sm mt-1">Synchronization & concurrency in JavaScript — introducing d4c-queue</p>
            </div>
            <div className="flex gap-3 text-sm">
              <a href="https://slides.com/grimmer/intro_js_ts_task_queuelib_d4c/fullscreen" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">slide</a>
              <a href="https://www.youtube.com/watch?v=_wxSAEts35w" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">video</a>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Patents Section */}
      <div className="max-w-6xl mx-auto pt-2 pb-12 px-4 sm:px-6 lg:px-8">
       <h2 className="text-3xl font-bold text-gray-900 mb-8">Patent</h2>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gray-50 p-6 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500">US Patent</p>
                <p className="text-lg font-bold text-gray-800">US8493362</p>
                <a href="https://patents.google.com/patent/US8493362" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm inline-flex items-center mt-2">
                  <span>View on Google Patents</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="md:w-2/3 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Image-based coordinate input apparatus and method utilizing buffered images
              </h3>
              <p className="text-gray-600 mb-4">
                This invention provides an image-based coordinate input apparatus and method for detecting positions of objects on a coordinate input region. The system captures and buffers successive images from multiple viewpoints to accurately calculate object positions, enabling more precise touch and gesture recognition in interactive displays.
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Filed: January 4, 2010 • Granted: July 23, 2013
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Computer Vision</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Touch Technology</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Interactive Displays</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          © {new Date().getFullYear()} Grimmer Kang
        </div>
      </footer>
    </div>
  );
}

export default App;