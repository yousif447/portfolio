import { Github, Phone } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';

export default function Footer() {
return (
    <footer className="py-12 px-6 bg-slate-950 border-t-2 border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Yousif <span className="text-orange-500">Adel</span>
            </h3>
            <p className="text-gray-400">
              Creating digital experiences that make a difference.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-gray-400 hover:text-orange-500 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, label: "GitHub", link: "https://github.com/yousif447"},
                { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/yousif-adel/" },
                { icon: Mail, label: "Email", link: "mailto:yousif29@gmail.com" }
              ].map((item, idx) => (
                <a key={idx} href={item.link} target='_blank' className="p-3 rounded-lg bg-slate-900 border-2 border-slate-800 hover:border-orange-500 hover:text-orange-500 text-gray-400 transition-all duration-300">
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
              <a href="tel:+201032137392" target='_blank' className="flex items-center gap-2 font-bold p-3 rounded-lg bg-slate-900 border-2 border-slate-800 hover:border-orange-500 hover:text-orange-500 text-gray-400 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                  +201032137392
                </a>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t-2 border-slate-800">
          <p className="text-gray-500">
            © 2026 Yousif Adel. Built with <span className="text-orange-500">React</span> & <span className="text-orange-500">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
