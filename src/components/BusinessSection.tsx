import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { fadeInUp, stagger } from '@/lib/animations';

const BusinessSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-900"
          {...fadeInUp}
        >
          事業内容
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="group relative p-8 lg:p-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            variants={fadeInUp}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-t-3xl"></div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
              ① BPO事業
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              営業・SNS・建築の3領域で業務最適化を実現
            </p>
            <div className="mt-auto pt-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm font-semibold text-gray-800 mb-2">節約マーケ君</p>
                <p className="text-xs text-gray-600 mb-2">by 株式会社Perfact</p>
                <a 
                  href="https://docs.google.com/presentation/d/1bbNZD6bPcGXMabY6nve-OdkFeVjy9aUM/edit?slide=id.g34206fbfd05_0_698#slide=id.g34206fbfd05_0_698" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-700 hover:text-blue-900 hover:underline inline-flex items-center gap-1"
                >
                  サービス資料はこちら
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="group relative p-8 lg:p-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            variants={fadeInUp}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-t-3xl"></div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
              ② イベントプロデュース
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              累計100本超の実績。インフルエンサー×経営者の架け橋
            </p>
            <div className="space-y-3 mt-auto pt-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-sm font-semibold text-blue-900">250名規模イベント</p>
                <p className="text-xs text-blue-700 mt-1">東京タワー / トランポランド</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs font-semibold text-gray-800">経営者 150名</p>
                  <p className="text-xs text-gray-600 mt-1">総フォロワー3,000万リーチ</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs font-semibold text-gray-800">インフルエンサー 100名</p>
                  <p className="text-xs text-gray-600 mt-1">ビジネスマッチング実績多数</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="group relative p-8 lg:p-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            variants={fadeInUp}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-500 to-gray-700 rounded-t-3xl"></div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
              ③ 飲食マーケティング・コンサル
            </h3>
            <p className="text-gray-600 leading-relaxed">
              0→1立ち上げから売上最大化まで。4,000名の独自ネットワーク活用
            </p>
            <div className="mt-auto pt-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm font-semibold text-gray-800">おばんざいさくら</p>
                <p className="text-xs text-gray-600 mt-1">新宿で展開中</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSection;