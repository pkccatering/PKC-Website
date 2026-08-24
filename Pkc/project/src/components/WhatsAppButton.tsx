import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '919947761056';
  const message = 'Hello! I would like to inquire about your catering services.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-gradient-to-r from-gold-500 to-gold-600 text-white p-4 rounded-full shadow-luxury hover:shadow-elegant transition-all duration-500 z-40 group focus:outline-none focus:ring-4 focus:ring-gold-400/50 border border-gold-400/30"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Connect with Us
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>

      {/* Pulse Animation */}
      <div className="absolute inset-0 bg-gold-500 rounded-full animate-ping opacity-20"></div>
    </motion.a>
  );
};

export default WhatsAppButton;