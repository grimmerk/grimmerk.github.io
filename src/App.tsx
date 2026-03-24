import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Grimmer Kang</h1>
              <p className="text-xl text-gray-600 mb-2">Tech Lead at <a href="https://fireflies.ai" className="text-blue-600 hover:text-blue-800">Fireflies.ai</a></p>
              <p className="text-base text-gray-500 mb-8">Building agentic AI systems and LLM architecture for meeting intelligence at scale</p>
            </div>
            <div className="flex-shrink-0 md:ml-8">
              <img src="assets/profile.png" alt="Grimmer Kang"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg object-cover"
              />
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            15+ years in software engineering, with a physics background (BS + MS). I've worked across AI, medical imaging,
            astronomy (<a href="https://cartavis.org/" className="text-blue-600 hover:text-blue-800">CARTA</a>, an international C++/JS open-source project at Academia Sinica),
            IoT, and streaming — primarily in TypeScript, Python, and C/C++.
            Beyond code, I've built and led mobile and full-stack engineering teams and introduced Agile practices across organizations.
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto md:mx-0 leading-relaxed mt-3">
            <span className="font-semibold text-gray-700">Currently into:</span> LLM agent architecture, RAG systems, context engineering, MCP tooling
            · Contributor to the <a href="https://github.com/modelcontextprotocol/typescript-sdk" className="text-blue-600 hover:text-blue-800">MCP TypeScript SDK</a>
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

      {/* Featured Work */}
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Work</h2>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* VS Code Card */}
          <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
            <div className="relative bg-gray-900">
              <img
                src="assets/vscode-preview.png"
                alt="VSCode Extension Preview"
                className="w-full h-full object-contain"
              />
              <div className="absolute -bottom-1.5 left-0 right-0 p-4">
                <h3 className="text-xl font-bold text-white">
                  Developer Tools & Open Source
                </h3>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <p className="text-gray-600">
                Creator of <a href="https://github.com/grimmerk/codev" className="text-blue-600 hover:text-blue-800 font-medium">CodeV</a> — a macOS app for VS Code/Cursor project switching, Claude Code session management, and AI assistant.
                Also built a <a href="https://marketplace.visualstudio.com/items?itemName=grimmer.vscode-back-forward-button" className="text-blue-600 hover:text-blue-800">VS Code extension</a> (78,000+ installs),
                Chrome extensions, TypeScript libraries (<a href="https://www.npmjs.com/package/d4c-queue" className="text-blue-600 hover:text-blue-800">d4c-queue</a> 15K+, <a href="https://www.npmjs.com/package/@d4c/numjs" className="text-blue-600 hover:text-blue-800">@d4c/numjs</a> 20K+ downloads),
                and a <a href="https://chrome.google.com/webstore/detail/dicom-image-viewer/ehppmcooahfnlfhhcflpkcjmonkoindc" className="text-blue-600 hover:text-blue-800">Medical DICOM Viewer</a> (3,000+ users).
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Electron</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">VS Code</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Claude AI</span>
              </div>
            </div>
          </div>

          {/* Conference Speaking Card */}
          <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
            <div className="relative h-[451px] md:h-[451px] bg-gray-900">
              <img
                src="assets/pycon-outline.png"
                alt="Conference Speaking"
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-bold text-white">
                  Technical Speaking
                </h3>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <p className="text-gray-600">
                Speaker at FOSSASIA Summit 2025 (Bangkok), PyCon APAC 2021 (Thailand), PyConTW 2021, and COSCUP 2021.
                Topics include open-source developer productivity tools, Python in browsers for medical imaging (Pyodide/WebAssembly),
                and TypeScript patterns for concurrent processing.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">FOSSASIA 2025</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">PyCon APAC</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">PyConTW</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">COSCUP</span>
              </div>
            </div>
          </div>
        </div>

        {/* CARTA Section */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
            <div className="relative bg-gray-900">
              <img
                src="assets/carta-preview.png"
                alt="CARTA Visualization"
                className="w-full object-contain"
                style={{ height: '490px' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-xl font-bold text-white">
                  Astronomy Software Development
                </h3>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <p className="text-gray-600">
                Led development of <a href="https://cartavis.org/" className="text-blue-600 hover:text-blue-800">CARTA</a> (Cube Analysis and Rendering Tool for Astronomy) at Academia Sinica,
                an international C++/JS open-source project collaborating with US (NRAO), Canada, and South Africa teams.
                Built a full-stack + algorithm team, designed the live collaborative share-screen architecture,
                and resolved critical issues through close collaboration with astronomers.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">C++</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Talks Section */}
      <div className="max-w-6xl mx-auto pt-2 pb-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Talks</h2>
        <div className="bg-white rounded-lg shadow divide-y">
          <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="font-semibold text-gray-900">FOSSASIA Summit 2025 <span className="text-gray-500 font-normal">— Bangkok</span></h3>
              <p className="text-gray-600 text-sm mt-1">CodeV: Streamlining Developer Workflow with an Open Source VS Code Launcher</p>
            </div>
            <a href="https://slides.com/grimmer/fossasia-2025-switchv-streamlining-developer-workflow-with-an-open-source-vs-code-launcher" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm whitespace-nowrap">slide</a>
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