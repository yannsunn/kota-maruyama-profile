import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Heart, Instagram, Briefcase, ExternalLink } from 'lucide-react';
import { fadeInUp, stagger } from '@/lib/animations';

const AdvisorySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-900"
          {...fadeInUp}
        >
          顧問業
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            variants={fadeInUp}
          >
            <div className="mb-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
              <Trophy size={20} className="text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">チルモングミ</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">1年間で1万2,000個販売</p>
              <p className="text-sm font-semibold text-blue-700">Amazonグミランキング5位</p>
            </div>
          </motion.div>

          <motion.div 
            className="p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            variants={fadeInUp}
          >
            <div className="mb-4 w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
              <Heart size={20} className="text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">animal dentist</h3>
            <p className="text-sm text-gray-600">犬用歯磨き粉事業</p>
          </motion.div>

          <motion.div 
            className="p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            variants={fadeInUp}
          >
            <div className="mb-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
              <Instagram size={20} className="text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">エランマリール</h3>
            <div className="space-y-2">
              <a 
                href="https://www.instagram.com/elan_marire/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-700 hover:text-blue-900 hover:underline inline-flex items-center gap-1"
              >
                Instagram
                <ExternalLink size={12} />
              </a>
              <p className="text-xs text-gray-600">エステ2万円券無料招待</p>
            </div>
          </motion.div>

          <motion.div 
            className="p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            variants={fadeInUp}
          >
            <div className="mb-4 w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
              <Briefcase size={20} className="text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">リンクストレッチ</h3>
            <a 
              href="https://www.instagram.com/link_stretch/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-700 hover:text-blue-900 hover:underline inline-flex items-center gap-1"
            >
              Instagram
              <ExternalLink size={12} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvisorySection;