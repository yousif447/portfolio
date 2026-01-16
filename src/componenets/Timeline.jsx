import { Link } from 'react-router-dom';
import useIntersectionObserver from './useIntersectionObserver'
import { ExternalLink } from 'lucide-react'

export default function Timeline() {
const [ref, isVisible] = useIntersectionObserver();
  
  const projects = [
    {
      title: "Quick Management System",
      description: "Developed a queue management system using Next.js to streamline user flow and reduce wait times, featuring real-time queue updates, responsive UI, and optimized performance for smooth user experience.",
      tech: ["React", "Next.js", "Node.js", "MongoDB", "Stripe", "OAuth", "TailwindCSS"],
      year: "2025",
      icon: "⏳",
      link: "https://queue-management-system-beta.vercel.app/"
    },
    {
      title: "Book Store App",
      description: "Built a React-based book store application with dynamic product listings, search and filtering functionality, and seamless user interactions, focusing on component reusability and efficient state management.",
      tech: ["React", "Bootstrap", "Node.js", "MongoDB", "REST API"],
      year: "2025",
      icon: "📚",
      link: "https://github.com/yousif447/React.js-Book-Store-App.git"
    },
    {
      title: "E-Commerce App",
      description: "Created a full-featured e-commerce application using Next.js, including product browsing, cart management, and checkout flows, with an emphasis on performance optimization, responsive design, and API integration.",
      tech: ["React", "Next.js", "Node.js", "MongoDB", "Stripe", "OAuth", "TailwindCSS", "REST API"],
      year: "2025",
      icon: "🛍️",
      link: "https://github.com/yousif447/Next.js-E-Commerce-App.git"
    }
  ];
  
  return (
    <section id="projects" ref={ref} className="py-32 px-6 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-white">
            Project <span className="text-orange-500">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400">
            A timeline of my recent work and achievements
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 via-orange-600 to-orange-700 hidden md:block"></div>
          
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`relative mb-24 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${idx % 2 === 0 ? '-translate-x-20' : 'translate-x-20'}`
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className={`md:flex ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                <div className="md:w-5/12">
                  <div className="group bg-slate-900 p-8 rounded-xl border-2 border-slate-800 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl">{project.icon}</span>
                        <div className="px-4 py-2 rounded bg-orange-500 text-white text-sm font-bold shadow-lg shadow-orange-500/50">
                          {project.year}
                        </div>
                      </div>
                      
                      <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-orange-500 transition-colors duration-500">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t, i) => (
                          <span key={i} className="px-3 py-1 rounded bg-slate-800 text-gray-300 text-sm font-medium border border-slate-700">
                            {t}
                          </span>
                        ))}
                      </div>
                      
                      <a href={project.link} target='_blank'>
                        <button className="cursor-pointer flex items-center gap-2 text-orange-500 font-bold hover:scale-110 transition-all duration-300">
                          View Project 
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full bg-orange-500 shadow-lg shadow-orange-500/50 animate-pulse border-4 border-slate-950"></div>
                </div>
                
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
