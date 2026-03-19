import { Code2, Layout, Smartphone } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto md:mx-0"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
              I am a passionate Front-end Engineer with a strong foundation in modern web technologies. 
              My journey in software development started with a curiosity for building interactive user interfaces, 
              which quickly blossomed into a professional career.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
              I thrive in collaborative environments and love tackling complex problems to deliver seamless, 
              accessible, and high-performance digital experiences. When I'm not coding, you can find me 
              exploring new design trends or contributing to open-source projects.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                <Layout className="text-blue-500 mb-3" size={32} />
                <h3 className="font-semibold mb-1">UI/UX Design</h3>
                <p className="text-sm text-slate-500">Crafting intuitive experiences</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                <Code2 className="text-purple-500 mb-3" size={32} />
                <h3 className="font-semibold mb-1">Web Dev</h3>
                <p className="text-sm text-slate-500">Robust frontend architectures</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                <Smartphone className="text-green-500 mb-3" size={32} />
                <h3 className="font-semibold mb-1">Responsive</h3>
                <p className="text-sm text-slate-500">Mobile-first approach</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Developer workspace" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-blue-600 rounded-3xl z-0 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
