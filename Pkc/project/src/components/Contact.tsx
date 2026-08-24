import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const contactDetails = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 9947761056', '+91 9207761056'],
      gradient: 'from-gold-400 to-gold-600',
      link: 'tel:+919947761056',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Us',
      details: ['+91 9947761056'],
      gradient: 'from-gold-400 to-gold-600',
      link: 'https://wa.me/919947761056',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['krishnacateing.upr@gmail.com'],
      gradient: 'from-gold-400 to-gold-600',
      link: 'mailto:krishnacateing.upr@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Chemmanadu, B.K. Puram P.O.', 'Ernakulam - 602 300'],
      gradient: 'from-gold-400 to-gold-600',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-ivory-50 to-sage-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-gold-200/30 to-transparent rounded-full -translate-x-64 -translate-y-64 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-emerald-200/30 to-transparent rounded-full translate-x-64 translate-y-64 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-ivory-100 mb-6 md:mb-8 tracking-wide">
            Get in Touch
          </h2>
          <div className="w-24 md:w-28 lg:w-32 h-1 md:h-1.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 mx-auto mb-6 md:mb-8 lg:mb-10 rounded-full"></div>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-ivory-100 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Ready to create an unforgettable culinary experience? Contact PKC Krishna Caterers today
            and let us bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6 mb-12 md:mb-16 lg:mb-20">
          {contactDetails.map((item, index) => (
            <motion.a
              key={index}
              href={item.link || '#'}
              target={item.link?.startsWith('http') ? '_blank' : undefined}
              rel={item.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="relative backdrop-blur-2xl bg-ivory-50/70 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-luxury border-2 border-gold-400/40 hover:border-gold-500/60 transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Icon */}
              <motion.div
                className={`bg-gradient-to-br ${item.gradient} p-4 md:p-6 rounded-xl md:rounded-2xl shadow-elegant inline-block mb-5 md:mb-6`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-ivory-50" strokeWidth={2.5} />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-display font-bold text-ivory-100 mb-3 md:mb-4 tracking-wide">
                {item.title}
              </h3>
              <div className="space-y-2">
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-sm md:text-base text-ivory-100 leading-relaxed font-medium">
                    {detail}
                  </p>
                ))}
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl md:rounded-3xl"></div>
            </motion.a>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          className="backdrop-blur-2xl bg-gradient-to-br from-forest-950/90 to-emerald-900/90 rounded-2xl md:rounded-3xl lg:rounded-[3rem] p-8 md:p-12 lg:p-16 xl:p-20 border-2 border-gold-400/40 shadow-luxury relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold-400/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-400/20 to-transparent rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-ivory-50 mb-4 md:mb-6 tracking-wide">
              Experience Culinary Excellence
            </h3>
            <p className="text-base md:text-lg lg:text-xl text-ivory-200 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              Over 20 years of combined experience in creating extraordinary events. From intimate
              gatherings to grand celebrations, we make every moment unforgettable.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-stretch sm:items-center flex-wrap"
            >
              <motion.a
                href="tel:+919947761056"
                className="bg-ivory-50 text-forest-950 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-elegant hover:shadow-luxury transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gold-400/50 inline-flex items-center gap-2 justify-center flex-1 sm:flex-none border-2 border-gold-400 hover:bg-gold-50"
                whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(212, 175, 55, 0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </motion.a>
              <motion.a
                href="https://wa.me/919947761056"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ivory-50 text-forest-950 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-elegant hover:shadow-luxury transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gold-400/50 inline-flex items-center gap-2 justify-center flex-1 sm:flex-none border-2 border-gold-400 hover:bg-gold-50"
                whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(212, 175, 55, 0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </motion.a>
              <motion.a
                href="mailto:krishnacateing.upr@gmail.com"
                className="bg-ivory-50 text-forest-950 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-elegant hover:shadow-luxury transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gold-400/50 inline-flex items-center gap-2 justify-center flex-1 sm:flex-none border-2 border-gold-400 hover:bg-gold-50"
                whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(212, 175, 55, 0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
