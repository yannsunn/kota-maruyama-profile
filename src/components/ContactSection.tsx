import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MapPin } from 'lucide-react';
import { fadeInUp, stagger } from '@/lib/animations';

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white"
          {...fadeInUp}
        >
          お問い合わせ
        </motion.h2>
        
        <motion.p 
          className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 px-4"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          ビジネスのご相談やイベントの企画など、<br />
          お気軽にお声がけください
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.a 
            href="https://www.instagram.com/marukou0722/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm p-6 lg:p-8 rounded-2xl hover:bg-white/30 transition-all duration-300 group w-full hover:scale-105"
            variants={fadeInUp}
          >
            <Instagram className="text-white group-hover:scale-110 transition-transform duration-300 w-6 h-6 lg:w-8 lg:h-8" />
            <div className="text-left">
              <p className="text-white font-semibold lg:text-lg">Instagram</p>
              <p className="text-white/80 text-sm lg:text-base">@marukou0722</p>
            </div>
          </motion.a>
          
          <motion.a 
            href="https://maps.app.goo.gl/wx3xBtgNCd27grwz9?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm p-6 lg:p-8 rounded-2xl hover:bg-white/30 transition-all duration-300 group w-full hover:scale-105"
            variants={fadeInUp}
          >
            <MapPin className="text-white group-hover:scale-110 transition-transform duration-300 w-6 h-6 lg:w-8 lg:h-8" />
            <div className="text-left">
              <p className="text-white font-semibold lg:text-lg">おばんざいさくら</p>
              <p className="text-white/80 text-sm lg:text-base">店舗にて直接ご相談</p>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;