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
              <p className="text-xl text-gray-600 mb-2">Tech Lead / Engineering Manager</p>
              <p className="text-base text-gray-500 mb-8">Passionate about building impactful solutions for people</p>
            </div>
            <div className="flex-shrink-0 md:ml-8">
              <img src="assets/profile.png" alt="Grimmer Kang"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg object-cover"
              />
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Technology leader with physics background, progressing from mobile and full-stack development to
            AI systems and scalable architectures. Currently leading distributed AI engineering teams at
            Fireflies.ai. Previously contributed to CARTA, an international astronomy software project at Academia Sinica,
            collaborating with US National Radio Astronomy Observatory and global partners. Extensive experience in IoT and streaming technologies. Proven track record in
            building high-performance engineering teams and driving innovation through critical thinking and
            agile methodologies.
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
                Creator of developer tools including VS Code, Chrome extensions, macOS utilities, and
                an open-source pet healthcare tracking app (previously published on iOS/Android).
                Author of TypeScript libraries for task queues and numerical computing.
                Implemented AlphaGo Zero algorithm for tic-tac-toe in TypeScript,
                demonstrating advanced AI concepts in browser environments.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">VS Code</span>
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
                Speaker at PyCon APAC, COSCUP 2021, and FOSSASIA Summit 2025, sharing expertise on Python in browsers for
                medical imaging applications and TypeScript patterns for concurrent processing, and open source developer 
                productivity tools. Focused on practical implementations and real-world applications.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">PyCon APAC</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">COSCUP</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">FOSSASIA</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Medical Imaging</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Electron</span>
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
                Led development efforts for CARTA (Cube Analysis and Rendering Tool for Astronomy) at Academia Sinica,
                an open-source project collaborating with international teams to revitalize its development.
                Improved core performance and resolved critical issues through close collaboration with astronomers across Taiwan, US, and Canada.
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