import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Heart, ExternalLink } from 'lucide-react';

interface Achievement {
  title: string;
  link: string;
}

interface AnimationVariant {
  initial: { opacity: number; y?: number; x?: number };
  animate: { opacity: number; y?: number; x?: number };
  transition: { duration: number; delay?: number };
}

// 実績データ
const achievements: Achievement[] = [
  {
    title: '最新インフルエンサーコラボイベント',
    link: 'https://www.instagram.com/p/DKY-vciTQ9f/?img_index=1'
  },
  {
    title: 'インフルエンサー×経営者集客イベント',
    link: 'https://www.instagram.com/p/DIYCEyqTOb3/?igsh=MXYwdTM5OW1nemh4Nw=='
  },
  {
    title: '同い年会',
    link: 'https://www.instagram.com/p/DJz6MoMT2MT/?igsh=MTNtcmlpNmZ4MnpjZg=='
  },
  {
    title: 'スポーツイベント 1',
    link: 'https://www.instagram.com/p/C67uwGPSxbP/?igsh=MTloZW83Njd1cWxibA=='
  },
  {
    title: 'スポーツイベント 2',
    link: 'https://www.instagram.com/p/C9b3i7WyIA3/?igsh=MmFpZmM4bGFhZnRt'
  },
  {
    title: 'サバゲーイベント',
    link: 'https://www.instagram.com/p/C2j7RsPyZIH/?igsh=d3h5aXJsZXYwbWZ3'
  }
];

const fadeInUp: AnimationVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const fadeInLeft: AnimationVariant = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

const fadeInRight: AnimationVariant = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

const AchievementsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-900"
          {...fadeInUp}
        >
          実績
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div 
            className="bg-white p-8 rounded-3xl shadow-lg"
            {...fadeInLeft}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Trophy className="text-blue-600" size={28} />
              イベント実績
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement: Achievement, index: number) => (
                <a 
                  key={index}
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-gray-100 hover:to-gray-200 transition-all duration-300 group"
                >
                  <ExternalLink className="text-blue-700 group-hover:scale-110 transition-transform duration-300" size={20} />
                  <span className="text-gray-600 group-hover:text-blue-700 transition-colors duration-300">
                    {achievement.title}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-3xl shadow-lg"
            {...fadeInRight}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Heart className="text-blue-600" size={28} />
              その他の肩書き・趣味
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">肩書き</h4>
                <div className="space-y-2">
                  <p className="flex items-center gap-2 text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    おばんざいさくら 副代表
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">趣味</h4>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {(['筋トレ', 'MMA', 'サウナ', 'ダイビング', 'サバゲー', '格闘技', 'イベント企画', '散歩'] as const).map((hobby: string, index: number) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;