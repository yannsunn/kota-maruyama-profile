import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, MapPin } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

const MapSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-gray-800"
          {...fadeInUp}
        >
          アクセス
        </motion.h2>
        
        <motion.div 
          className="text-center mb-8 sm:mb-12 space-y-4"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">おばんざいさくら</h3>
          <div className="space-y-2 text-gray-600">
            <p className="text-sm sm:text-base">〒160-0022<br /> 東京都新宿区新宿３丁目８−２<br /> クロスビル B1階</p>
            <p className="text-sm sm:text-base">TEL: <a href="tel:0359258182" className="text-blue-700 hover:underline">03-5925-8182</a></p>
          </div>
        </motion.div>

        <motion.div 
          className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          {...fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.557028838397!2d139.70190681525644!3d35.687900080192264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd5d6b6aa8d%3A0x6c63d989f4d8a4a2!2z44CSMTY2LTAwMjIg5p2x5Lqs6YO95paw5a6_5Yy65paw5a6_77yT5LiB55uu77yY4oiS77ySIOOCr-ODreOCueODk-ODqyBCMQ!5e0!3m2!1sja!2sjp!4v1639999999999!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
            title="おばんざいさくら地図"
          ></iframe>
        </motion.div>

        <motion.div 
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto"
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-gray-50 p-6 rounded-2xl">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Calendar size={20} className="text-blue-700" />
              営業時間
            </h4>
            <div className="space-y-2 text-gray-600">
              <p>月〜土: 17:00〜24:00</p>
              <p>日・祝: 定休日</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-2xl">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Briefcase size={20} className="text-blue-700" />
              アクセス
            </h4>
            <div className="space-y-2 text-gray-600">
              <p>JR新宿駅 東口・南口 徒歩3分</p>
              <p>新宿三丁目駅 徒歩1分</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-6 text-center"
          {...fadeInUp}
          transition={{ delay: 0.5 }}
        >
          <a 
            href="https://maps.app.goo.gl/wx3xBtgNCd27grwz9?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 group w-full sm:w-auto lg:text-lg"
          >
            <MapPin size={20} className="group-hover:scale-110 transition-transform duration-300" />
            <span>Google マップで開く</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;