import React from 'react';
import { Highlight, ScribbleUnderline, FadeIn } from '../ui/Decorations';

const BackgroundGlow = () => (
  <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
    <div className="absolute top-[30%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[900px] h-[350px] md:h-[900px] bg-[#fdf2f4] rounded-full blur-[60px] md:blur-[100px] opacity-70 will-change-[filter,opacity]" />
  </div>
);

const Services = () => {
  const ANIM = {
    base: 0.2,
    step: 0.2,
  };

  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center py-24 px-4 md:px-12 lg:px-24 overflow-hidden" id="services">
      <BackgroundGlow />

      <div className="relative z-10 w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-28 items-center">

        <FadeIn direction="right" className="relative flex items-center justify-center order-2 md:order-1">
          <div className="absolute top-[5%] -left-8 md:left-[-20px] w-[110px] md:w-[200px] lg:w-[260px] aspect-square bg-brand-secondary -rotate-5 z-0 opacity-100" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
          <div className="relative w-[280px] md:w-[340px] lg:w-[480px] aspect-square rounded-full overflow-hidden z-10 transition-transform duration-500 hover:scale-[1.02] bg-gray-50 border-4 border-white shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional team collaborating in a bright workspace"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width="480"
              height="480"
            />
          </div>

          <div className="absolute -bottom-10 -right-4 md:bottom-[-15px] md:right-[-15px] w-[130px] md:w-[200px] lg:w-[260px] aspect-[1/0.8] bg-brand-secondary -rotate-2 z-20 opacity-100" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        </FadeIn>

        <div className="flex flex-col items-start text-left order-1 md:order-2 gap-6">
          <FadeIn direction="left" delay={ANIM.base}>
            <h2 className="font-gerbil text-[30px] md:text-[34px] lg:text-[40px] font-light leading-[1.3] text-black/90 tracking-[0.02em] antialiased">
              <span className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2">
                <Highlight colorClass="bg-accent-mint" className="px-4 py-1" delay={ANIM.base + 0.1}>
                  See
                </Highlight>
                <span>how we can</span>
              </span>

              <span className="flex flex-wrap items-center gap-x-4 gap-y-2 relative">
                <span>help you</span>
                <span className="relative inline-block">
                  progress
                  <ScribbleUnderline delay={ANIM.base + 0.3} />
                </span>
              </span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={ANIM.base + ANIM.step}>
            <p className="font-satoshi font-normal text-[18px] md:text-[20px] leading-[30px] tracking-normal text-black max-w-[65ch] opacity-80">
              We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={ANIM.base + ANIM.step * 2}>
            <a href="#services-detail" className="font-satoshi group relative flex items-center gap-4 text-[18px] text-black no-underline">
              <span className="relative">
                Read more
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>
              <div className="relative flex items-center w-[100px] md:w-[140px] group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true">
                <div className="w-full h-[1.5px] bg-black"></div>
                <div className="absolute right-0 w-[10px] h-[10px] border-t-[1.5px] border-r-[1.5px] border-black rotate-45"></div>
              </div>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Services;
