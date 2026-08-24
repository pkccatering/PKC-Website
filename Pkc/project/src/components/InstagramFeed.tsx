import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, ExternalLink } from 'lucide-react';

const InstagramFeed = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-emerald-50 to-ivory-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Instagram className="w-12 h-12 text-ivory-100 mr-4" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-ivory-100">
              Follow Our Journey
            </h2>
          </div>
          <p className="text-xl text-ivory-100 mb-8">
            Stay updated with our latest creations and behind-the-scenes moments
          </p>
          
          <motion.a
            href="https://www.instagram.com/pkc.cochin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-ivory-50 text-forest-950 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 group border-2 border-gold-400 hover:bg-gold-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="w-5 h-5 mr-2" />
            Follow @pkc.cochin
            <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default InstagramFeed;