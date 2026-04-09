import React from 'react';
import { motion } from 'framer-motion';
import { Highlight, ScribbleUnderline, FadeIn } from '../ui/Decorations';

const BackgroundGlow = () => (
  <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
    <div
      className="absolute top-[15%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-brand-secondary rounded-full blur-[60px] md:blur-[100px] opacity-20 md:opacity-30 will-change-[filter,opacity]"
    />
    <div
      className="absolute top-[50%] left-[40%] -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[700px] h-[250px] md:h-[700px] bg-brand-secondary rounded-full blur-[70px] md:blur-[110px] opacity-15 md:opacity-20 will-change-[filter,opacity]"
    />
  </div>
);

const Mission = () => {
  const ANIM = {
    base: 0.2,
    step: 0.2,
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-white"
      id="mission"
      aria-labelledby="mission-title"
    >
      <BackgroundGlow />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-28 items-center">

        <div className="flex flex-col items-start text-left gap-6 md:gap-8">
          <FadeIn direction="right" delay={ANIM.base}>
            <h2 id="mission-title" className="font-gerbil text-[30px] md:text-[36px] lg:text-[40px] font-light leading-[1.3] text-black/90 tracking-[0.02em] antialiased">
              <span className="flex flex-wrap items-center gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4">
                <span className="relative inline-block">
                  Tomorrow
                  <ScribbleUnderline delay={ANIM.base + 0.1} />
                </span>
                <span>should be</span>
                <span>better than</span>
                <Highlight colorClass="bg-accent-mint" className="px-4 py-1" delay={ANIM.base + 0.3}>
                  today
                </Highlight>
              </span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={ANIM.base + ANIM.step}>
            <p className="font-satoshi font-normal text-[16px] md:text-[20px] leading-[1.6] tracking-normal text-black max-w-[65ch] opacity-80">
              We are a team of strategists, designers, communicators, and researchers. Together, we believe that progress only happens when you refuse to play things safe. We challenge the status quo to build what's next.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={ANIM.base + ANIM.step * 2}>
            <a href="#about" className="font-satoshi group relative flex items-center gap-4 text-[18px] text-black no-underline">
              <span className="relative">
                Read more
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>
              <div className="relative flex items-center w-[80px] md:w-[140px] group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true">
                <div className="w-full h-[1.5px] bg-black"></div>
                <div className="absolute right-0 w-[10px] h-[10px] border-t-[1.5px] border-r-[1.5px] border-black rotate-45"></div>
              </div>
            </a>
          </FadeIn>
        </div>
        <FadeIn direction="left" delay={ANIM.base + 0.1} className="relative flex items-center justify-center mt-12 md:mt-0">
          <motion.div
            initial={{ y: 0 }}
            whileInView={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >

            <div
              className="absolute -top-6 -right-2 md:-top-8 md:-right-4 w-[180px] md:w-[260px] lg:w-[320px] aspect-square bg-brand-secondary rotate-15 -z-10"
              aria-hidden="true"
            ></div>

            <div className="relative w-[280px] md:w-[400px] lg:w-[480px] aspect-square rounded-full overflow-hidden z-10 transition-transform duration-500 hover:scale-[1.02] bg-gray-50 border-4 border-white shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team collaborating in a meeting"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="480"
                height="480"
              />
            </div>
          </motion.div>
        </FadeIn>
      </div>
      <div className="absolute left-[-10%] bottom-[-50px] md:bottom-[-100px] w-[120%] h-[200px] md:h-[300px] pointer-events-none z-0 overflow-visible" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 1400 300" fill="none" preserveAspectRatio="none">
          <path
            d="M0 150C200 50 400 250 700 150C1000 50 1200 250 1400 150"
            stroke="#f98fa0"
            strokeWidth="3"
            strokeLinecap="round"
            className="opacity-40"
          />
        </svg>
      </div>
    </section>
  );
};

export default Mission;
