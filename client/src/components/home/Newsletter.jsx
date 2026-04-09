import React from 'react';
import { Highlight, ScribbleUnderline, FadeIn } from '../ui/Decorations';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: ['Home', 'Studio', 'Service', 'Blog']
    },
    {
      title: 'Terms & Policies',
      links: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility']
    },
    {
      title: 'Follow Us',
      links: ['Instagram', 'LinkedIn', 'Youtube', 'Twitter']
    }
  ];

  const contactInfo = {
    title: 'Terms & Policies',
    address: '1498w Fluton ste, STE\n2C Chicago, IL 63867.',
    phone: '(123) 456789000',
    email: 'info@elementum.com'
  };

  return (
    <section className="relative w-full bg-accent-mint flex flex-col items-center pt-16 md:pt-24 pb-12 px-6 md:px-12 overflow-hidden overflow-x-hidden" id="newsletter">
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-[15%] right-[2%] md:right-[7%] w-[140px] md:w-[130px] h-[280px] md:h-[250px] bg-brand-primary rounded-l-full z-0 opacity-100 select-none pointer-events-none rotate-25"
        aria-hidden="true"
      ></motion.div>
      <FadeIn direction="down" delay={0.3} className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[100px] md:w-[220px] md:h-[150px] z-20 pointer-events-none opacity-80">
        <svg viewBox="0 0 200 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M 120,-10 C 100,40 150,30 80,90" stroke="#f98fa0" strokeWidth="2" strokeLinecap="round" />
          <path d="M 80,78 L 80,90 L 91,91" stroke="#f98fa0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 155,0 C 140,43 175,70 125,100" stroke="#f98fa0" strokeWidth="2" strokeLinecap="round" />
          <path d="M 130,88 L 125,100 L 135,100" stroke="#f98fa0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </FadeIn>

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center text-center gap-6 mt-10 md:mt-20 lg:mt-24 mb-12 md:mb-20 lg:mb-28">
        <FadeIn direction="up">
          <h2 className="font-gerbil text-[38px] md:text-[64px] lg:text-[85px] font-light leading-[0.95] text-black tracking-tight antialiased">
            Subscribe to<br />our newsletter
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <p className="font-satoshi text-[15px] md:text-[18px] text-black/60 max-w-[65ch] font-normal tracking-tight antialiased">
            To make your stay special and even more memorable
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <button className="mt-2 px-10 py-4 md:px-14 md:py-5 bg-black text-white rounded-full font-satoshi font-medium text-[15px] md:text-[17px] transition-all duration-300 hover:scale-105 hover:bg-black/90 active:scale-95 shadow-lg shadow-black/10">
            Subscribe Now
          </button>
        </FadeIn>
      </div>

      <div className="w-full max-w-[1300px] h-[1.5px] bg-black/10 mb-12 md:mb-16"></div>

      <div className="w-full max-w-[1300px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-8 mb-24 items-start px-2">
        {footerLinks.map((group, i) => (
          <FadeIn key={i} direction="up" delay={0.1 * i}>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="font-gerbil text-[18px] md:text-[22px] font-light text-black tracking-wide">{group.title}</h4>
              <ul className="flex flex-col gap-4 md:gap-5">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <a href={`#${link.toLowerCase()}`} className="font-satoshi text-[16px] md:text-[18px] text-black/70 hover:text-black transition-colors duration-300 relative group">
                      {link}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}

        <FadeIn direction="up" delay={0.4}>
          <div className="flex flex-col gap-4 md:gap-6">
            <h4 className="font-gerbil text-[18px] md:text-[22px] font-light text-black tracking-wide">{contactInfo.title}</h4>
            <div className="flex flex-col gap-4 md:gap-6">
              <p className="font-satoshi text-[16px] md:text-[18px] text-black leading-relaxed whitespace-pre-line">
                {contactInfo.address}
              </p>
              <div className="flex flex-col gap-4">
                <p className="font-satoshi text-[16px] md:text-[18px] text-black">{contactInfo.phone}</p>
                <p className="font-satoshi text-[16px] md:text-[18px] text-black">{contactInfo.email}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="w-full py-12 text-center max-w-[1300px] mt-auto border-t border-black/5">
        <p className="font-satoshi text-[12px] text-black font-normal tracking-wider">
          ©2023 Elementum. All rights reserved
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
