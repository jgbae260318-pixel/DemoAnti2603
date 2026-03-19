import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl tracking-tighter">
            <a href="#">Dev<span className="text-blue-500">Profile</span></a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="hover:text-blue-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#skills" className="hover:text-blue-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Skills</a>
              <a href="#projects" className="hover:text-blue-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Projects</a>
              <a href="#experience" className="hover:text-blue-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Experience</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Contact Me
            </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-nav">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-slate-800">About</a>
            <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-slate-800">Skills</a>
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-slate-800">Projects</a>
            <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-slate-800">Experience</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-slate-800">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
