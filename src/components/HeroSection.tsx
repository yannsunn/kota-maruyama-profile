import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MapPin, Briefcase, Trophy } from 'lucide-react';
import Image from 'next/image';
import { fadeInUp } from '@/lib/animations';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic gradient background with mesh pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-gray-800/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800/20 via-transparent to-transparent"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/10 to-gray-600/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-700/10 to-gray-500/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, -30, 0], 
            y: [0, 40, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gray-600/5 via-transparent to-blue-800/5 rounded-full blur-3xl"
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear"
          }}
        />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 py-12 sm:py-8 md:py-0 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Profile Image Section */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] mx-auto">
              {/* Glowing ring */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-400 via-blue-600 to-gray-600 p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-sm"></div>
              </motion.div>
              
              {/* Profile Image */}
              <motion.div 
                className="absolute inset-2 rounded-full overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src="/kota-profile.jpg"
                  alt="丸山康太"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <Trophy className="text-white w-5 h-5 md:w-6 md:h-6" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Briefcase className="text-white w-4 h-4 md:w-5 md:h-5" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content Section */}
          <motion.div 
            className="order-1 lg:order-2 text-center lg:text-left"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-white"
              {...fadeInUp}
              transition={{ delay: 0.1 }}
            >
              丸山康太
              <motion.span 
                className="block text-xl sm:text-2xl md:text-2xl lg:text-3xl font-light mt-2 opacity-90"
                {...fadeInUp}
                transition={{ delay: 0.2 }}
              >
                (まるやまこうた)
              </motion.span>
            </motion.h1>
            
            <motion.div 
              className="space-y-3 sm:space-y-3 mb-8 sm:mb-8"
              {...fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <p className="text-xl sm:text-xl md:text-2xl font-semibold">
                イベント × マーケティング事業
              </p>
              <p className="text-lg sm:text-lg md:text-xl opacity-90">
                株式会社Wolf CEO
              </p>
              <p className="text-base sm:text-base md:text-lg opacity-80 max-w-lg mx-auto lg:mx-0">
                元警察特殊部隊から起業家へ。<br />
                イベント実績100本超<br />
                総リーチ3,000万フォロワー
              </p>
              <p className="text-sm sm:text-sm md:text-base opacity-70">
                口癖は「伸び代」
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 justify-center lg:justify-start"
              {...fadeInUp}
              transition={{ delay: 0.5 }}
            >
              <a 
                href="https://www.instagram.com/marukou0722/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center lg:justify-start gap-3 bg-white/10 backdrop-blur-sm px-6 sm:px-6 py-4 sm:py-4 lg:px-8 lg:py-5 rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 w-full sm:w-auto"
              >
                <Instagram className="group-hover:scale-110 transition-transform duration-300 w-5 h-5 lg:w-6 lg:h-6" />
                <div className="text-left">
                  <p className="font-semibold text-sm lg:text-base">Instagram</p>
                  <p className="text-xs lg:text-sm opacity-80">@marukou0722</p>
                </div>
              </a>
              <a 
                href="https://maps.app.goo.gl/wx3xBtgNCd27grwz9?g_st=ic" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center lg:justify-start gap-3 bg-white/10 backdrop-blur-sm px-6 sm:px-6 py-4 sm:py-4 lg:px-8 lg:py-5 rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 w-full sm:w-auto"
              >
                <MapPin className="group-hover:scale-110 transition-transform duration-300 w-5 h-5 lg:w-6 lg:h-6" />
                <div className="text-left">
                  <p className="font-semibold text-sm lg:text-base">Store</p>
                  <p className="text-xs lg:text-sm opacity-80">おばんざいさくら</p>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-white/60 text-xs font-medium">Scroll Down</span>
        <motion.div 
          className="w-1 h-12 bg-gradient-to-b from-white/80 to-transparent rounded-full"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;