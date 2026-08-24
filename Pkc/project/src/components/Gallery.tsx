import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: 'https://static.india.com/wp-content/uploads/2017/09/Onam-Sadhya.jpg',
      alt: 'Kerala Sadya Traditional Setup',
      category: 'Traditional'
    },
    {
      src: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Wedding Catering Service',
      category: 'Wedding'
    },
    {
      src: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Corporate Event Setup',
      category: 'Corporate'
    },
    {
      src: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Tandoori Specialties',
      category: 'Cuisine'
    },
    {
      src: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Traditional Feast',
      category: 'Traditional'
    },
    {
      src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Buffet Arrangement',
      category: 'Setup'
    },
    {
      src: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Birthday Celebration',
      category: 'Birthday'
    },
    {
      src: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Seafood Delicacies',
      category: 'Cuisine'
    },
    {
      src: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Desserts and Sweets',
      category: 'Desserts'
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      switch (e.key) {
        case 'Escape':
          setSelectedImage(null);
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gradient-to-b from-ivory-50 to-sage-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-transparent rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gold-200/20 to-transparent rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-ivory-100 mb-4 md:mb-6 tracking-wide">
            Visual Gallery
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
          <p className="text-base md:text-lg lg:text-xl text-ivory-100 max-w-3xl mx-auto font-light leading-relaxed px-4">
            Take a visual journey through our culinary creations, event setups,
            and the smiling faces of satisfied clients across Kerala.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="group relative aspect-video backdrop-blur-xl bg-ivory-50/60 rounded-xl md:rounded-2xl overflow-hidden shadow-elegant hover:shadow-luxury transition-all duration-500 cursor-pointer border border-gold-300/30"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              onClick={() => setSelectedImage(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedImage(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View ${image.alt} in full size`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Category Badge */}
              <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-gradient-to-r from-gold-400 to-gold-500 text-ivory-50 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold shadow-soft border border-gold-300/30">
                {image.category}
              </div>

              {/* Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div
                  className="backdrop-blur-xl bg-ivory-50/30 border border-gold-400/40 p-4 rounded-full shadow-elegant"
                  whileHover={{ scale: 1.1 }}
                >
                  <ZoomIn className="w-8 h-8 text-ivory-50" />
                </motion.div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 text-ivory-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold text-sm md:text-base">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 bg-forest-950/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Image gallery lightbox"
            >
              <motion.div
                className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
                
                <button
                  className="absolute top-2 right-2 md:top-4 md:right-4 backdrop-blur-xl bg-ivory-50/20 border border-gold-400/30 p-2 rounded-full text-ivory-50 hover:bg-ivory-50/30 transition-colors duration-300 shadow-elegant"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close image viewer"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Navigation Arrows */}
                <button
                  className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 backdrop-blur-xl bg-ivory-50/20 border border-gold-400/30 p-2 md:p-3 rounded-full text-ivory-50 hover:bg-ivory-50/30 transition-colors duration-300 shadow-elegant"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                <button
                  className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 backdrop-blur-xl bg-ivory-50/20 border border-gold-400/30 p-2 md:p-3 rounded-full text-ivory-50 hover:bg-ivory-50/30 transition-colors duration-300 shadow-elegant"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Image Caption */}
                <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 text-center">
                  <div className="backdrop-blur-xl bg-forest-950/60 border border-gold-400/30 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-luxury">
                    <p className="text-ivory-100 font-semibold text-sm md:text-lg">
                      {galleryImages[selectedImage].alt}
                    </p>
                    <p className="text-gold-400 text-xs md:text-sm mt-1 font-medium">
                      {galleryImages[selectedImage].category}
                    </p>
                    <p className="text-ivory-200 text-xs mt-1 md:mt-2 font-light">
                      {selectedImage + 1} of {galleryImages.length}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;