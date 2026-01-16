import useIntersectionObserver from './useIntersectionObserver'
import { Mail } from 'lucide-react'
import { Github } from 'lucide-react'
import { Linkedin } from 'lucide-react'

export default function Contact() {
const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <section id="contact" ref={ref} className="py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white">
            Let's Work <span className="text-orange-500">Together</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something extraordinary together.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <button className="cursor-pointer group px-10 py-5 bg-orange-500 text-white text-lg font-bold rounded hover:bg-orange-600 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 flex items-center gap-3">
              <a href="mailto:yousif29@gmail.com" target='_blank' className='flex gap-3 items-center'>
                <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Send Message
              </a>
            </button>
          </div>
          
          <div className="flex gap-6 justify-center">
            {[
              { icon: Github, label: "GitHub", link: "https://github.com/yousif447"},
              { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/yousif-adel/" },
              { icon: Mail, label: "Email", link: "mailto:yousif29@gmail.com" }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target='_blank'
                className="group p-5 rounded-xl bg-slate-900 border-2 border-slate-800 hover:border-orange-500 shadow-lg hover:shadow-orange-500/50 hover:scale-110 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-gray-400 group-hover:text-orange-500 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
