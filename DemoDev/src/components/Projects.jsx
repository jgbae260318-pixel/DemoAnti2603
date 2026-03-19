import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive admin dashboard for an e-commerce platform featuring real-time analytics, inventory management, and a specialized dark mode.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Tailwind CSS', 'Recharts'],
    github: '#',
    live: '#'
  },
  {
    title: 'Task Management App',
    description: 'A Kanban-style task management application with drag-and-drop functionality, user authentication, and real-time database sync.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'TypeScript', 'Firebase'],
    github: '#',
    live: '#'
  },
  {
    title: 'AI Image Generator UI',
    description: 'A modern, sleek user interface for an AI image generation tool, focusing on prompt engineering workflows and gallery layouts.',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Vue.js', 'Framer Motion', 'Tailwind'],
    github: '#',
    live: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.github} className="p-2 bg-white rounded-full text-slate-900 hover:text-blue-600 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="p-2 bg-white rounded-full text-slate-900 hover:text-blue-600 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
