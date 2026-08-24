import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Priya & Rajesh',
      event: 'Wedding Reception',
      rating: 5,
      comment: 'PKC made our wedding day absolutely perfect! The Kerala Sadya was authentic and delicious. Every guest complimented the food quality and presentation. Highly recommended!',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Suresh Kumar',
      event: 'Corporate Event',
      rating: 5,
      comment: 'Outstanding service for our company annual day. The team was professional, food was excellent, and everything was perfectly organized. Will definitely book again!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Meera Nair',
      event: 'Birthday Party',
      rating: 5,
      comment: 'Amazing experience! The Kuttanadan fish curry was absolutely divine. The decoration and food presentation exceeded our expectations. Thank you PKC team!',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Anand & Family',
      event: 'Anniversary Celebration',
      rating: 5,
      comment: 'Perfect catering for our 25th anniversary. The multi-cuisine buffet was a hit with all age groups. Professional service and reasonable pricing. Highly satisfied!',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-emerald-50 to-ivory-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-bl from-gold-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-emerald-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-ivory-100 mb-6 tracking-wide">
            Treasured Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-ivory-100 font-light">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className="backdrop-blur-xl bg-ivory-50/60 rounded-3xl p-8 md:p-12 shadow-luxury border border-gold-300/40 relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-gold-400 opacity-30">
                <Quote className="w-12 h-12" />
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <Star className="w-6 h-6 text-gold-400 fill-gold-400" />
                  </motion.div>
                ))}
              </div>

              {/* Comment */}
              <blockquote className="text-lg md:text-xl text-ivory-100 text-center leading-relaxed mb-8 italic font-light">
                "{testimonials[currentTestimonial].comment}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-gold-400 shadow-elegant"
                />
                <div className="text-center">
                  <div className="font-semibold text-ivory-100 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sage-600">
                    {testimonials[currentTestimonial].event}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 backdrop-blur-xl bg-ivory-50/60 border border-gold-300/40 p-3 rounded-full shadow-elegant hover:bg-ivory-50/80 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-gold-400"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-ivory-100 group-hover:scale-110 transition-transform duration-300" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 backdrop-blur-xl bg-ivory-50/60 border border-gold-300/40 p-3 rounded-full shadow-elegant hover:bg-ivory-50/80 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-gold-400"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-ivory-100 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentTestimonial === index
                  ? 'bg-gold-400 scale-125 shadow-soft'
                  : 'bg-sage-300 hover:bg-sage-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;