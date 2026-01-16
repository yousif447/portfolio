import useIntersectionObserver from './useIntersectionObserver'
import { Terminal } from 'lucide-react'
import { Database } from 'lucide-react'
import { Cpu } from 'lucide-react'

export default function Skills() {
const [ref, isVisible] = useIntersectionObserver();
  
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "TailwindCSS", "Bootstrap", "Material UI", "Next.js", "Context API", "Redux Toolkit"],
      icon: Terminal
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "REST"],
      icon: Database
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Figma", "Postman"],
      icon: Cpu
    }
  ];
  
  return (
    <section id="skills" ref={ref} className="py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-white">
            Tech <span className="text-orange-500">Stack</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400">
            Technologies I work with daily
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="bg-slate-900 p-8 rounded-xl border-2 border-slate-800 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-orange-500 shadow-lg shadow-orange-500/50">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded bg-slate-800 text-gray-300 font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer border border-slate-700 hover:border-orange-500 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50"
                    >
                      {skill}
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
