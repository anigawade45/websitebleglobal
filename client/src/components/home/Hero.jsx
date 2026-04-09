import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import sideWavyLines from "../../assets/image.png";
import { AvatarCluster } from "./AvatarCluster";
import { Highlight, ScribbleUnderline, FadeIn } from "../ui/Decorations";

const HeroHeading = () => (
  <h1
    id="hero-title"
    className="font-gerbil text-[32px] md:text-[56px] lg:text-[80px] leading-[1.1] font-light tracking-tight text-black flex flex-wrap justify-center items-center gap-x-2 md:gap-x-4 gap-y-1 md:gap-y-2 antialiased"
  >
    <span className="sr-only">The thinkers and doers were changing the status quo with</span>
    <span className="flex items-center gap-x-2 md:gap-x-4" aria-hidden="true">
      <span>The</span>
      <span className="relative inline-block px-1">
        thinkers
        <ScribbleUnderline delay={0.3} />
      </span>
      <span>and</span>
    </span>

    <FadeIn direction="none" delay={0.4} className="flex items-center flex-wrap justify-center" aria-hidden="true">
      <span>doers were</span>
      <span className="inline-flex items-center ml-2 md:ml-4">
        <span>ch</span>
        <Highlight colorClass="bg-accent-pink" className="pl-0 pr-4 md:pr-6" delay={0.6}>
          anging
        </Highlight>
      </span>
    </FadeIn>

    <FadeIn direction="none" delay={0.6} className="flex items-center flex-wrap justify-center" aria-hidden="true">
      <span>the</span>
      <Highlight colorClass="bg-accent-mint" className="px-2 md:px-4 mx-2" delay={0.8}>
        status
      </Highlight>
      <span>Quo with</span>
    </FadeIn>
  </h1>
);

export function Hero() {
  return (
    <section
      className={clsx(
        "relative min-h-fit md:min-h-[90vh] flex flex-col items-center justify-center",
        "px-4 pt-24 md:pt-32 lg:pt-40 pb-4 md:pb-8 bg-white overflow-hidden"
      )}
      aria-labelledby="hero-title"
    >

      <FadeIn direction="right" delay={0.2} className="absolute left-0 top-[40%] w-[10vw] max-w-[130px] pointer-events-none z-0 hidden lg:block">
        <img
          src={sideWavyLines}
          alt=""
          className="w-full h-auto"
          loading="lazy"
          decoding="async"
        />
      </FadeIn>

      <FadeIn direction="left" delay={0.4} className="absolute right-[7%] lg:right-[5%] top-[40%] w-[8vw] max-w-[120px] h-[60px] bg-brand-primary rounded-t-full z-0 hidden lg:block rotate-120"></FadeIn>

      <div className="relative z-10 max-w-[1300px] w-full flex flex-col items-center text-center">

        <FadeIn className="mb-6 md:mb-10 w-full flex flex-col items-center">
          <HeroHeading />
        </FadeIn>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-satoshi text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] text-black max-w-[900px] mx-auto mb-16 px-4 text-center"
        >
          We are a team of strategists, designers, communicators, and researchers. Together,<br className="hidden md:block" />
          we believe that progress only happens when you refuse to play things safe.
        </motion.p>
        <div className="w-full">
          <AvatarCluster />
        </div>
      </div>
    </section>
  );
}