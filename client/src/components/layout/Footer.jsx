import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-(--text-primary) py-20 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-24">
        
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="flex items-center">
            <span className="text-3xl font-bold tracking-tight">Elementum</span>
          </div>
          <p className="text-sm text-(--text-secondary) opacity-80 leading-relaxed font-light">
            Empowering the thinkers and doers of tomorrow with cutting-edge digital experiences and human-centric design. We bridge the gap between abstract ideas and impactful implementation.
          </p>
          <div className="flex items-center gap-6 mt-4">
            {['Twitter', 'Instagram', 'LinkedIn', 'Behance'].map((social) => (
              <a 
                key={social} 
                href={`#${social.toLowerCase()}`} 
                className="text-xs font-semibold uppercase tracking-widest hover:text-(--accent-coral) transition-colors"
                aria-label={social}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-16 md:gap-32 w-full md:w-auto">
          <div className="flex flex-col gap-8">
            <h3 className="text-lg font-bold tracking-tight">Company</h3>
            <ul className="flex flex-col gap-4">
              {['About', 'Studio', 'Services', 'Work'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-(--accent-coral) transition-colors opacity-70 hover:opacity-100">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col gap-8">
            <h3 className="text-lg font-bold tracking-tight">Support</h3>
            <ul className="flex flex-col gap-4">
              {['Contact', 'FAQs', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-(--accent-coral) transition-colors opacity-70 hover:opacity-100">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-gray-100/50 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold opacity-30">
        <div>© 2026 Elementum Studio. All Rights Reserved.</div>
        <div className="mt-4 md:mt-0 flex gap-12">
          <span>MADE WITH LOVE FOR THINKERS</span>
          <span>CURATED BY AI AGENTS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
