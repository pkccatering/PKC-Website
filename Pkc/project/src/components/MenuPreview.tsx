import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChefHat, Flame, Leaf, Star } from 'lucide-react';

const MenuPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cuisines = [
    {
      name: 'Kerala Sadya',
      description: 'Traditional feast served on banana leaves',
      icon: Leaf,
      image: 'https://static.india.com/wp-content/uploads/2017/09/Onam-Sadhya.jpg',
      speciality: 'Traditional Authentic'
    },
    {
      name: 'Kuttanadan Cuisine',
      description: 'Fresh backwater delicacies and fish specialties',
      icon: Star,
      image: 'https://mozismenu.com/wp-content/uploads/2017/09/Meen-pollichathu-0-750x545.jpg',
      speciality: 'Signature'
    },
    {
      name: 'South Indian',
      description: 'Dosas, idlis, and authentic regional flavors',
      icon: ChefHat,
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      speciality: 'Traditional'
    },
    {
      name: 'Chinese Delights',
      description: 'Indo-Chinese fusion with local twists',
      icon: Flame,
      image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      speciality: 'Fusion'
    },
    {
      name: 'Thattukada',
      description: 'Street food favorites and local snacks',
      icon: Star,
      image: 'https://github.com/ealiyasshaji/WebAssets/blob/main/Thattukada.png?raw=true',
      speciality: 'Street Food'
    },
    {
      name: 'Tandoori',
      description: 'Clay oven grilled meats and vegetables',
      icon: Flame,
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      speciality: 'Grilled'
    },
    {
      name: 'Desserts & Sweets',
      description: 'Traditional Kerala sweets and modern desserts',
      icon: Star,
      image: 'https://partyslate.imgix.net/companies-cover-image/30180/image-8e588cf3-efaa-45e2-8f64-91556d5868dd.jpeg?ixlib=js-3.8.0&auto=compress%2Cformat&bg=fff',
      speciality: 'Sweet Treats'
    },
  ];

  return (
    <section id="menu" className="py-16 md:py-24 bg-gradient-to-b from-sage-50 to-emerald-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-gold-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-emerald-200/20 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-ivory-100 mb-4 md:mb-6 tracking-wide">
            Culinary Artistry
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
          <p className="text-base md:text-lg lg:text-xl text-ivory-100 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Discover our exquisite collection of cuisines, each meticulously crafted with premium ingredients
            and culinary expertise to create extraordinary gastronomic experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cuisines.map((cuisine, index) => (
            <motion.div
              key={index}
              className="group relative backdrop-blur-xl bg-ivory-50/70 rounded-2xl overflow-hidden shadow-elegant hover:shadow-luxury transition-all duration-700 border border-gold-300/40"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={cuisine.image}
                  alt={cuisine.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Speciality Badge */}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-gold-400 to-gold-500 text-ivory-50 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold shadow-elegant border border-gold-300/30">
                  {cuisine.speciality}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <div className="flex items-center mb-2">
                  <cuisine.icon className="w-5 h-5 md:w-6 md:h-6 text-ivory-100 mr-3" />
                  <h3 className="text-lg md:text-xl font-display font-bold text-ivory-100 tracking-wide">
                    {cuisine.name}
                  </h3>
                </div>

                <p className="text-ivory-100 leading-relaxed text-sm md:text-base">
                  {cuisine.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;