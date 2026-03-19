const skills = [
  { name: 'HTML5', level: 95 },
  { name: 'CSS3 / SCSS', level: 90 },
  { name: 'JavaScript (ES6+)', level: 85 },
  { name: 'React.js', level: 90 },
  { name: 'Next.js', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Git & GitHub', level: 85 }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Tech Stack</h2>
          <div className="w-20 h-1 bg-purple-600 rounded-full mx-auto"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive list of my technical skills and proficiency levels in building modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
                <span className="text-slate-500 font-mono text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
