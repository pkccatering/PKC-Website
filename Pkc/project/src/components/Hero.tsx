import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-950/95 via-emerald-900/90 to-forest-950/95 z-10 w-full left-1/2 transform -translate-x-1/2"></div>

      {/* Background Image (Placeholder for video) */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        role="img"
        aria-label="Traditional Kerala feast background"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      ></div>

      {/* Glassmorphic Content Container */}
      <motion.div
        className="relative z-20 text-center max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16 backdrop-blur-lg bg-forest-950/10 rounded-2xl md:rounded-3xl border border-gold-400/40 shadow-luxury"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-beige-100 mb-6 md:mb-8 leading-tight tracking-wide">
            Crafting Culinary
            <br />
            <span className="relative">
              Excellence
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-beige-200 mb-8 md:mb-10 font-light tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Since 2000
        </motion.p>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-beige-200 mb-10 md:mb-16 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Bringing fresh, healthy, and delicious flavors to every occasion. With innovation and
          sustainability at our core, we create environmentally-friendly culinary experiences that
          reflect the best of global cuisine.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <motion.button
            onClick={scrollToMenu}
            className="group bg-ivory-50 text-forest-950 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-semibold text-base sm:text-lg md:text-xl flex items-center space-x-2 md:space-x-3 hover:shadow-luxury transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-gold-400/50 border-2 border-gold-400 w-full sm:w-auto justify-center hover:bg-gold-50"
            aria-label="View our menu section"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 25px 50px -12px rgba(251, 191, 36, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-gold-400">View Our Menu</span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gold-400 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          <motion.button
            onClick={scrollToContact}
            className="group border-2 border-gold-400 text-gold-400 backdrop-blur-sm bg-ivory-50/10 px-5 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg flex items-center space-x-2 hover:bg-ivory-50 hover:text-forest-950 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gold-400/50 w-full sm:w-auto justify-center"
            aria-label="Book your event"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="w-4 h-4 md:w-5 md:h-5" />
            <span>Book Your Event</span>
          </motion.button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;