import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute top-1/2 left-20 w-32 h-32 border-4 border-orange-500/20 transform rotate-45"></div>
      <div className="absolute bottom-1/3 right-20 w-40 h-40 border-4 border-orange-500/20 transform -rotate-12"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-orange-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4 animate-slide-up">
            <h1 className="text-6xl md:text-7xl font-bold text-white">
              Hello<span className="text-orange-500">.</span>
            </h1>
            <div className="flex items-center gap-4">
              <div className="h-1 w-20 bg-orange-500"></div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-300">
                I'm Yousif
              </h2>
            </div>
          </div>
          
          <h3 className="text-5xl md:text-6xl font-bold text-white animate-slide-up-delay-1">
            Frontend Developer
          </h3>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-xl animate-slide-up-delay-2">
            Passionate about creating elegant, powerful digital solutions. 
            I specialize in building scalable web applications and beautiful user interfaces.
          </p>
          
          <div className="flex gap-6 animate-slide-up-delay-3">
            <a 
              href="#contact"
              className="px-8 py-4 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 inline-block"
            >
              Got a project?
            </a>
            <a 
              href="Yousif_Adel_CV.pdf" 
              download="Yousif_Adel_CV.pdf"
              className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded hover:bg-orange-500 hover:text-white hover:scale-105 transition-all duration-300 inline-block"
            >
              Download My CV
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative z-10">
            <div className="animate-float w-96 h-96 mx-auto rounded-full border-8 border-orange-500 shadow-2xl shadow-orange-500/30 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700">
              {/* <div className="w-full h-full flex items-center justify-center text-9xl font-bold text-orange-500">
                YA
              </div> */}
              <img src="me5-blank2.png" alt="Yousif Adel" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="absolute -top-10 -left-10 text-orange-500/30 text-9xl font-bold">&lt;</div>
          <div className="absolute -bottom-10 -right-10 text-orange-500/30 text-9xl font-bold">&gt;</div>
        </div>
      </div>
    </section>
  )
}
