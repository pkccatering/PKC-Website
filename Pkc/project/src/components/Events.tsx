import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Gift, Building, Users, PartyPopper, Plus, X } from 'lucide-react';

const Events = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const events = [
    {
      name: 'Weddings',
      icon: Heart,
      description: 'Elegant and memorable catering for your special day',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      packages: [
        'Traditional Kerala Sadya for 100-1000 guests',
        'Multi-cuisine buffet setup',
        'Professional service staff',
        'Elegant table arrangements',
        'Complimentary decoration consultation'
      ]
    },
    {
      name: 'Corporate Events',
      icon: Building,
      description: 'Professional catering for meetings, conferences, and business gatherings',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      packages: [
        'Business lunch packages',
        'Conference break refreshments',
        'Executive dinner setups',
        'On-site cooking demonstrations',
        'Branded service coordination'
      ]
    },
    {
      name: 'Birthday Parties',
      icon: Gift,
      description: 'Celebrate with delicious, personalized menus',
      image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      packages: [
        'Customized birthday cakes',
        'Kids-friendly menu options',
        'Themed decoration support',
        'Entertainment coordination',
        'Party favor arrangements'
      ]
    },
    {
      name: 'Reunions',
      icon: Users,
      description: 'Bring everyone together with outstanding food and service',
      image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      packages: [
        'Customizable menu options',
        'Flexible venue setups',
        'Family-style dining arrangements',
        'Nostalgic recipe requests',
        'Photo-friendly presentation'
      ]
    },
    {
      name: 'Bridal Showers',
      icon: Heart,
      description: 'Sophisticated and delightful dining for pre-wedding celebrations',
      image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      packages: [
        'Elegant tea party setups',
        'Gourmet finger foods',
        'Custom dessert tables',
        'Floral arrangements',
        'Champagne service'
      ]
    },
    {
      name: 'Family Dinners',
      icon: Users,
      description: 'Enjoy intimate gatherings with beautifully prepared meals',
      image: 'https://images.pexels.com/photos/3184195/pexels-photo-3184195.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      packages: [
        'Home-style comfort food',
        'Personalized menu planning',
        'Small group service',
        'Table setting included',
        'Flexible scheduling'
      ]
    },
    {
      name: 'Retirement Parties',
      icon: PartyPopper,
      description: 'Honor milestones with exceptional cuisine and presentation',
      image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      packages: [
        'Tribute-themed menus',
        'Elegant buffet presentations',
        'Professional service team',
        'Toast coordination',
        'Memorable keepsakes'
      ]
    },
    {
      name: 'Engagements',
      icon: Heart,
      description: 'Celebrate love with exquisite, tailored catering',
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      packages: [
        'Romantic ambiance setup',
        'Personalized menu creation',
        'Champagne toast service',
        'Live cooking stations',
        'Photography coordination'
      ]
    },
  ];

  return (
    <section id="events" className="py-16 md:py-24 bg-gradient-to-b from-emerald-50 to-ivory-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold-200/20 to-transparent rounded-full translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-emerald-200/20 to-transparent rounded-full -translate-x-40 translate-y-40 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-ivory-100 mb-4 md:mb-6 tracking-wide">
            Signature Celebrations
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
          <p className="text-base md:text-lg lg:text-xl text-ivory-100 max-w-4xl mx-auto leading-relaxed font-light px-4">
            From intimate soirées to grand celebrations, we orchestrate culinary masterpieces
            that transform your special moments into extraordinary memories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="group relative backdrop-blur-xl bg-ivory-50/70 rounded-2xl overflow-hidden shadow-elegant hover:shadow-luxury transition-all duration-700 cursor-pointer border border-gold-300/40"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedEvent(index)}
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-900/40 to-transparent"></div>

                {/* Icon */}
                <div className="absolute top-3 left-3 bg-gradient-to-br from-gold-400 to-gold-500 p-3 rounded-full shadow-elegant border border-gold-300/30">
                  <event.icon className="w-5 h-5 md:w-6 md:h-6 text-ivory-100" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-display font-bold text-ivory-100 mb-3 tracking-wide">
                  {event.name}
                </h3>
                <p className="text-ivory-100 mb-5 leading-relaxed text-sm md:text-base">
                  {event.description}
                </p>

                <motion.button
                  className="w-full bg-ivory-50 text-forest-950 py-2.5 md:py-3 px-4 rounded-full hover:shadow-elegant transition-all duration-300 border-2 border-gold-400 font-semibold text-sm md:text-base flex items-center justify-center gap-2 hover:bg-gold-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label={`View details for ${event.name}`}
                >
                  <span>Learn More</span>
                  <Plus className="w-4 h-4 md:w-5 md:h-5" />
                </motion.button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Event Details Modal */}
        <AnimatePresence>
          {selectedEvent !== null && (
            <motion.div
              className="fixed inset-0 bg-forest-950/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="event-modal-title"
            >
              <motion.div
                className="backdrop-blur-xl bg-ivory-50/90 rounded-2xl md:rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-luxury border border-gold-300/40 mx-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-48 md:h-72">
                  <img
                    src={events[selectedEvent].image}
                    alt={events[selectedEvent].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-900/50 to-transparent"></div>

                  <button
                    className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full text-white hover:bg-white/30 transition-colors duration-300 border border-white/20"
                    onClick={() => setSelectedEvent(null)}
                    aria-label="Close event details"
                  >
                    <X className="w-5 h-5 md:w-7 md:h-7" />
                  </button>

                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                    <h3 id="event-modal-title" className="text-2xl md:text-4xl font-display font-bold text-ivory-50 tracking-wide">
                      {events[selectedEvent].name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-10">
                  <p className="text-ivory-100 text-base md:text-xl mb-6 md:mb-8 leading-relaxed">
                    {events[selectedEvent].description}
                  </p>

                  <h4 className="text-xl md:text-2xl font-display font-bold text-ivory-100 mb-4 md:mb-6 tracking-wide">
                    Exclusive Package Includes:
                  </h4>

                  <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                    {events[selectedEvent].packages.map((item, i) => (
                      <li key={i} className="flex items-center text-ivory-100 text-sm md:text-lg">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full mr-3 md:mr-4 flex-shrink-0 shadow-soft"></div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    className="w-full bg-ivory-50 text-forest-950 py-3 md:py-4 rounded-full font-semibold text-base md:text-xl hover:shadow-elegant transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-gold-400/50 border-2 border-gold-400 hover:bg-gold-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedEvent(null)}
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Events;