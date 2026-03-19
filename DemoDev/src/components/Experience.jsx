import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Senior Front-end Engineer',
    organization: 'TechFlow Inc.',
    date: '2021 - Present',
    description: 'Lead the front-end team in architecture and UI/UX implementation. Spearheaded the migration of legacy apps to Next.js, improving load times by 40%.'
  },
  {
    type: 'work',
    title: 'Web Developer',
    organization: 'Digital Solutions LLC',
    date: '2018 - 2021',
    description: 'Developed responsive web applications for various enterprise clients using React and Redux. Collaborated tightly with design teams.'
  },
  {
    type: 'education',
    title: 'B.S. in Computer Science',
    organization: 'University of Technology',
    date: '2014 - 2018',
    description: 'Focused on software engineering, UI/UX design, and database architectures. Graduated with honors.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-green-600 rounded-full mx-auto"></div>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
          {experiences.map((item, index) => (
            <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-800 bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                {item.type === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row justify-between mb-2 sm:items-center">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">{item.title}</h3>
                  <div className="flex items-center text-sm font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                    <Calendar size={14} className="mr-1" />
                    {item.date}
                  </div>
                </div>
                <div className="font-medium text-blue-600 dark:text-blue-400 mb-3">{item.organization}</div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
