import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Events', href: '#events' },
    { label: 'Testimonials', href: '#testimonials' }
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
      initial={{ y: -100 }}
      animate={{
        y: (isHidden && !isHovering) ? -100 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      role="navigation"
      aria-label="Main navigation"
    >
      <motion.div
        className={`max-w-7xl mx-auto backdrop-blur-2xl border-2 border-gold-400/40 rounded-full shadow-luxury transition-all duration-300 ${
          isScrolled
            ? 'bg-forest-950/80'
            : 'bg-ivory-50/10'
        }`}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between h-20 px-6 lg:px-8">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-[1.5rem] p-2"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <img src="/pkc.png" alt="PKC Krishna Caterers" className="w-12 h-12 object-contain" />
            <span className="text-xl sm:text-2xl font-display font-bold text-gold-400 tracking-wide">
              PKC Krishna Caterers
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-gold-400 hover:text-gold-300 transition-colors duration-300 relative group focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-[1rem] px-4 py-2.5 font-medium"
                whileHover={{ scale: 1.05 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            className="hidden md:block bg-ivory-50 text-forest-950 px-8 py-3 rounded-full font-semibold shadow-elegant transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gold-400/50 border-2 border-gold-400 hover:bg-gold-50"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('#contact')}
            aria-label="Book catering service now"
          >
            <span className="relative z-10 text-gold-400">Book Now</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-ivory-100 p-2 focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="py-8 space-y-4 bg-forest-950/90 backdrop-blur-2xl rounded-[2.5rem] border-2 border-gold-400/40 shadow-luxury">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="block text-gold-400 hover:text-gold-300 transition-colors duration-300 px-6 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-[1.5rem] mx-6 font-medium text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="px-4 pt-2">
                <button
                  className="w-full bg-ivory-50 text-forest-950 px-6 py-3 rounded-full font-semibold focus:outline-none focus:ring-4 focus:ring-gold-400/50 shadow-elegant border-2 border-gold-400 hover:bg-gold-50"
                  onClick={() => handleNavClick('#contact')}
                >
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;