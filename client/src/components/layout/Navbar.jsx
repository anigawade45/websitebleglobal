import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Home', 'Studio', 'Services', 'Contact', "FAQ's"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full transition-all duration-300 z-20000 px-6 py-4 border-b ${isMenuOpen ? 'bg-white border-transparent' : 'bg-white/95 backdrop-blur-md border-black/5'}`}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-3 items-center min-h-[50px]">
          <div className="flex justify-start">
            <a href="/" className="text-[22px] md:text-[24px] font-light leading-tight font-gerbil text-black select-none cursor-pointer no-underline">
              Elementum
            </a>
          </div>

          <nav className={`hidden md:flex items-center justify-center gap-8 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace("'", "")}`}
                className="text-[14px] font-satoshi font-normal text-black/70 hover:text-black transition-all whitespace-nowrap relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex justify-end">
            <button
              onClick={toggleMenu}
              className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer z-20001 outline-none group"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isMenuOpen}
            >
              <span className={`w-8 h-[1.3px] bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`}></span>
              <span className={`w-8 h-[1.3px] bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-white z-10000 flex flex-col items-center justify-center pt-24 pb-12 px-8 overflow-y-auto"
          >
            <nav className="flex flex-col items-center gap-8 w-full">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace("'", "")}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-gerbil text-[32px] md:text-[42px] font-light text-black hover:text-black/60 transition-colors py-2"
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-auto flex flex-col items-center gap-4 text-center"
            >
              <div className="w-12 h-px bg-black/10"></div>
              <p className="font-satoshi text-[14px] text-black/40">info@elementum.com</p>
              <p className="font-satoshi text-[14px] text-black/40">© 2024 Elementum Studio</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
