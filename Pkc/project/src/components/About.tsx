import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-ivory-50 to-sage-50 relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-transparent rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gold-200/20 to-transparent rounded-full translate-x-48 translate-y-48 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-ivory-100 mb-4 md:mb-6 tracking-wide">Our Story</h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
          <p className="text-base md:text-lg lg:text-xl text-ivory-100 max-w-4xl mx-auto leading-relaxed font-light px-4">
            A professional, full-service catering and event company bringing fresh, healthy, and delicious flavors to every occasion.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-ivory-100 mb-4 md:mb-6 tracking-wide">Our Journey</h3>
              <p className="text-ivory-100 mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
                Since 2000, PKC has been dedicated to creating environmentally-friendly culinary experiences
                that reflect the best of the global food landscape. With a strong commitment to innovation and
                sustainability, we bring fresh, healthy, and delicious flavors to every occasion.
              </p>
              <p className="text-ivory-100 mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
                Our team boasts over 20 years of combined experience in the kitchen and catering industry,
                bringing skill, passion, and creativity to each event we serve. From intimate gatherings to
                large-scale celebrations, we're devoted to making every moment memorable.
              </p>
              <p className="text-ivory-100 text-base md:text-lg leading-relaxed">
                We pride ourselves on preparing authentic, traditional recipes infused with a creative flair,
                offering a unique culinary experience that keeps clients coming back. Our friendly and professional
                staff are dedicated to providing warm, attentive service that enhances every event.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="backdrop-blur-xl bg-ivory-50/60 p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-luxury border border-gold-300/40 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02, boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.3)' }}
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-bl from-gold-300/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-tr from-emerald-300/30 to-transparent"></div>

            <h3 className="text-2xl md:text-3xl font-display font-semibold text-ivory-100 mb-6 md:mb-8 tracking-wide">Core Competencies</h3>
            <div className="space-y-5 md:space-y-6">
              <div className="flex items-start group">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                <div>
                  <h4 className="font-semibold text-ivory-100 text-base md:text-lg mb-1 md:mb-2">Exceptional Service</h4>
                  <p className="text-sage-700 leading-relaxed text-sm md:text-base">Consistently delivering outstanding cuisine with distinguished presentation that exceeds expectations.</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                <div>
                  <h4 className="font-semibold text-ivory-100 text-base md:text-lg mb-1 md:mb-2">Authentic Recipes</h4>
                  <p className="text-sage-700 leading-relaxed text-sm md:text-base">Traditional recipes infused with creative flair, offering unique culinary experiences that inspire loyalty.</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-gradient-to-r from-sage-400 to-sage-500 rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                <div>
                  <h4 className="font-semibold text-ivory-100 text-base md:text-lg mb-1 md:mb-2">Professional Staff</h4>
                  <p className="text-sage-700 leading-relaxed text-sm md:text-base">Friendly, attentive service that makes every event memorable with warm hospitality.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}