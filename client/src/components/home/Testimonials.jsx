import React from 'react';
import { Highlight, ScribbleUnderline, FadeIn } from '../ui/Decorations';

const AvatarItem = React.memo(({ src, className, delay }) => (
  <FadeIn 
    direction="none" 
    delay={delay} 
    className={`absolute rounded-full overflow-hidden border-2 md:border-4 border-white shadow-lg md:shadow-xl transition-all duration-700 hover:scale-110 hover:z-50 aspect-square bg-gray-100 transform-gpu ${className}`}
  >
    <img 
      src={src} 
      alt="Satisfied Elementum Customer" 
      className="w-full h-full object-cover" 
      loading="lazy" 
      width="260"
      height="260"
    />
  </FadeIn>
));

AvatarItem.displayName = "AvatarItem";

const Testimonials = () => {
  const avatars = [
    { src: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg', className: 'hidden md:block top-[15%] left-[5%] w-[100px] md:w-[130px] lg:w-[160px]' },
    { src: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg', className: 'top-[35%] left-[5%] w-[60px] md:left-[20%] md:w-[70px] lg:w-[80px]' },
    { src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg', className: 'hidden md:block top-[50%] left-[15%] w-[80px] md:w-[90px] lg:w-[100px]' },
    { src: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg', className: 'bottom-[5%] left-[2%] w-[180px] md:w-[220px] lg:w-[260px] z-10' },
    { src: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg', className: 'hidden md:block top-[15%] right-[5%] w-[100px] md:w-[130px] lg:w-[160px]' },
    { src: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg', className: 'top-[35%] right-[5%] w-[60px] md:right-[20%] md:w-[70px] lg:w-[80px]' },
    { src: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg', className: 'hidden md:block top-[50%] right-[15%] w-[80px] md:w-[90px] lg:w-[100px]' },
    { src: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg', className: 'bottom-[5%] right-[2%] w-[180px] md:w-[220px] lg:w-[260px] z-10' },
  ];

  const ANIM = {
    base: 0.2,
    step: 0.1,
  };

  return (
    <section className="relative w-full bg-white flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 px-4 overflow-hidden" id="testimonials">

      <div className="absolute inset-0 pointer-events-none z-0">
        {avatars.map((avatar, idx) => (
          <AvatarItem key={idx} {...avatar} delay={ANIM.base + (idx * 0.05)} />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[1400px] flex flex-col items-center gap-8 md:gap-12">
        <div className="flex flex-col items-center text-center px-2">
          <FadeIn direction="up">
            <h2 className="font-gerbil text-[26px] md:text-[40px] lg:text-[50px] font-light leading-tight text-black/90 tracking-[0.02em] antialiased">
              <span className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mb-1 md:mb-2 text-center">
                <Highlight colorClass="bg-accent-mint" className="px-4 py-1" delay={ANIM.base + 0.1}>
                  What
                </Highlight>
                <span>our customer</span>
              </span>

              <span className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 relative">
                <span>says</span>
                <span className="relative inline-block px-1">
                  About Us
                  <ScribbleUnderline delay={ANIM.base + 0.3} />
                </span>
              </span>
            </h2>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={ANIM.base + 0.5} className="relative max-w-[850px] w-full bg-accent-mint/20 rounded-[40px] md:rounded-[70px] p-8 md:p-16 lg:p-16 flex flex-col items-center justify-center text-center backdrop-blur-sm">
          <div className="absolute top-4 left-4 md:top-10 md:left-14 text-[60px] md:text-[150px] leading-none text-gray-300/80 font-serif translate-y-2 select-none" aria-hidden="true">“</div>
          <p className="font-satoshi font-normal text-[16px] md:text-[24px] lg:text-[25px] leading-[1.6] text-black tracking-tight max-w-[65ch] antialiased z-10">
            Elementum delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable
          </p>
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-16 text-[60px] md:text-[150px] leading-none text-gray-300/80 font-serif select-none translate-y-6 md:translate-y-20" aria-hidden="true">”</div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Testimonials;
