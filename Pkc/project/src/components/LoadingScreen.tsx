import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-forest-950 via-forest-900 to-emerald-950 flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gold-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="text-center relative z-10">
        {/* Glassmorphic container */}
        <motion.div
          className="bg-stone-100 backdrop-blur-2xl border-2 border-gold-400/30 rounded-[3rem] p-16 shadow-luxury"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Animated icon */}
          <motion.div
            className="relative mb-8"
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 rounded-[2.5rem] blur-xl opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative bg-gradient-to-br from-gold-400 to-gold-600 p-4 rounded-[2.5rem] shadow-elegant">
              <img src="/pkc.png" alt="PKC Krishna Caterers" className="w-24 h-24 object-contain" />
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl font-display font-bold bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            PKC Krishna Caterers
          </motion.h1>

          <motion.p
            className="text-ivory-200 text-lg font-light tracking-wide mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Crafting Culinary Excellence Since 2000
          </motion.p>

          {/* Elegant loading dots */}
          <motion.div
            className="flex justify-center space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2.5 h-2.5 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;