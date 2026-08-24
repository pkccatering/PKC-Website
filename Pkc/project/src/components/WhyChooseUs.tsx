import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Award, Star, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Clock,
      title: 'Reliable and Timely Service',
      description: 'Count on us to deliver seamless service, right on schedule.',
      gradient: 'from-gold-400 to-gold-600',
    },
    {
      icon: Award,
      title: 'Professional Expertise',
      description: 'Our experienced team ensures every event runs smoothly and tastefully.',
      gradient: 'from-gold-400 to-gold-500',
    },
    {
      icon: Star,
      title: 'Years of Excellence',
      description: 'With a proven track record we bring quality and commitment to every occasion.',
      gradient: 'from-gold-400 to-gold-600',
    },
    {
      icon: Sparkles,
      title: 'Memorable Experiences',
      description: 'From the food to the ambiance, we make each event unforgettable.',
      gradient: 'from-gold-400 to-gold-600',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-sage-50 to-emerald-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold-200/20 to-transparent rounded-full translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-200/20 to-transparent rounded-full -translate-x-48 translate-y-48 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-ivory-100 mb-4 md:mb-6 tracking-wide">
            Why We Stand Out
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
          <p className="text-base md:text-lg lg:text-xl text-ivory-100 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Exceptional food and unforgettable events are our promise. Discover what sets PKC apart
            from the rest and makes us Kerala's premier choice for catering excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative backdrop-blur-xl bg-ivory-50/60 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-elegant border border-gold-300/40 group hover:shadow-luxury transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Icon Container */}
              <motion.div
                className={`bg-gradient-to-br ${feature.gradient} p-4 md:p-5 rounded-xl md:rounded-2xl shadow-elegant inline-block mb-5 md:mb-6`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-ivory-100" />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-display font-bold text-ivory-100 mb-3 md:mb-4 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-ivory-100 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl md:rounded-3xl"></div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-bl from-gold-300/20 to-transparent rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-12 md:mt-16 lg:mt-20 text-center backdrop-blur-xl bg-gradient-to-r from-forest-950/80 to-emerald-900/80 rounded-2xl md:rounded-3xl p-8 md:p-10 lg:p-12 border border-gold-400/30 shadow-luxury relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gold-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-ivory-50 mb-3 md:mb-4 tracking-wide">
              Exceptional Food, Unforgettable Events
            </h3>
            <p className="text-ivory-200 text-base md:text-lg mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Our commitment to consistently delivering exceptional service and outstanding cuisine
              with distinguished presentation is what makes every PKC event truly extraordinary.
            </p>
            <motion.button
              className="bg-ivory-50 text-forest-950 px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg lg:text-xl shadow-elegant transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gold-400/50 border-2 border-gold-400 hover:bg-gold-50 w-full sm:w-auto"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Experience PKC Excellence</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
