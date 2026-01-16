import { Award } from 'lucide-react'
import useIntersectionObserver from './useIntersectionObserver'
import { Code } from 'lucide-react'
import { Palette } from 'lucide-react'
import { Zap } from 'lucide-react'

export default function About() {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <section id="about" ref={ref} className="py-32 px-6 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-white">
            About <span className="text-orange-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about creating elegant solutions to complex problems
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
  icon: Code, 
  title: "Clean & Scalable Code", 
  desc: "Writing clean, maintainable, and scalable React code using modern JavaScript, reusable components, and best practices.", 
  delay: "100" 
},
{ 
  icon: Palette, 
  title: "UI/UX Focused Development", 
  desc: "Building intuitive, responsive user interfaces with strong attention to user experience, accessibility, and design consistency.", 
  delay: "300" 
},
{ 
  icon: Zap, 
  title: "Performance Optimization", 
  desc: "Optimizing React applications for fast load times and smooth interactions using efficient rendering, code splitting, and modern tooling.", 
  delay: "500" 
}

          ].map((item, idx) => (
            <div
              key={idx}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${item.delay}ms` }}
            >
              <div className="group p-8 rounded-xl bg-slate-900 hover:bg-slate-800 border-2 border-slate-800 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-20 h-20 rounded-xl bg-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-orange-500/50">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-500 transition-colors duration-500">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
