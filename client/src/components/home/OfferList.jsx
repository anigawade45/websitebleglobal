import React from 'react';
import { Highlight, ScribbleUnderline, FadeIn } from '../ui/Decorations';

const OfferList = () => {
  const offers = [
    {
      subtitle: "Office of multiple interest content",
      title: "Colaborative & partnership",
    },
    {
      subtitle: "The hanger US Air force digital experimental",
      title: "We talk about our weight",
    },
    {
      subtitle: "Delta faucet content, social, digital",
      title: "Piloting digital confidence",
      hasBadge: true
    }
  ];

  const ANIM = {
    base: 0.2,
    step: 0.1,
  };

  return (
    <section className="relative w-full bg-white py-24 px-4 md:px-12 lg:px-24 overflow-hidden" id="offers">

      <FadeIn direction="left" className="absolute top-[5%] right-0 w-[30vw] max-w-[400px] h-auto pointer-events-none z-0 overflow-visible">
        <svg
          viewBox="0 0 500 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <path
            d="M 0,250 C 50,250 100,20 250,120 C 400,220 450,50 500,80"
            stroke="#f98fa0"
            strokeWidth="4"
            strokeLinecap="round"
            className="opacity-80"
          />
        </svg>
      </FadeIn>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col gap-12">

        <FadeIn direction="up" delay={ANIM.base}>
          <h2 className="font-gerbil text-[30px] md:text-[50px] lg:text-[75px] font-light leading-[1.10] text-black/90 tracking-[0.02em] antialiased">
            <span className="flex items-center gap-2 md:gap-4 mb-2">
              <span>What we</span>
              <Highlight colorClass="bg-accent-mint" className="px-4 py-1" delay={ANIM.base + 0.2}>
                can
              </Highlight>
            </span>

            <span className="flex items-center gap-4 whitespace-nowrap">
              <span className="relative inline-block">
                offer
                <ScribbleUnderline delay={ANIM.base + 0.4} />
              </span>
              <span>you!</span>
            </span>
          </h2>
        </FadeIn>

        <div className="border-t border-black/10 mt-8">
          {offers.map((offer, index) => (
            <FadeIn key={index} direction="up" delay={ANIM.base + (ANIM.step * (index + 2))}>
              <div className="group relative border-b border-black/10 py-4 md:py-6 grid grid-cols-1 md:grid-cols-[1fr_2.5fr_0.5fr] gap-6 md:gap-8 items-center px-1 transition-all duration-300 hover:bg-gray-50/50 cursor-pointer">
                <div className="font-satoshi font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[1.3] text-black/70 md:text-black max-w-[180px] antialiased">
                  {offer.subtitle}
                </div>

                <div className="relative flex items-center justify-start">
                  <h3 className="relative z-20 font-gerbil text-[22px] md:text-[32px] lg:text-[42px] font-light leading-tight text-black/95 tracking-[0.01em] group-hover:translate-x-2 transition-transform duration-500 antialiased">
                    {offer.title}
                  </h3>

                  {offer.hasBadge && (
                    <div className="absolute left-[75%] md:left-[65%] lg:left-[58%] top-1/2 -translate-y-1/2 w-[50px] md:w-[75px] lg:w-[90px] aspect-square rounded-full overflow-hidden border-4 border-white shadow-2xl z-10 group-hover:scale-110 transition-transform duration-500 pointer-events-none bg-gray-100">
                      <img 
                        src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=200" 
                        alt="Project showcase thumbnail" 
                        loading="lazy"
                        className="w-full h-full object-cover" 
                        width="90"
                        height="90"
                      />
                    </div>
                  )}
                </div>

                <div className="flex justify-start md:justify-end items-center">
                  <div className="relative flex items-center w-[40px] md:w-[60px] group-hover:w-[75px] transition-all duration-500">
                    <div className="w-full h-[1.3px] bg-black"></div>
                    <div className="absolute right-0 w-[7px] h-[7px] border-t-[1.3px] border-r-[1.3px] border-black rotate-45"></div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferList;
