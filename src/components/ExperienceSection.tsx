import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Trophy } from 'lucide-react';
import { fadeInUp, stagger } from '@/lib/animations';

interface ExperienceItem {
  period: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ExperienceSection: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      period: '2024年11月 - 現在',
      title: '株式会社Wolf CEO',
      description: '創業。BPO事業（Sales/SNS/建築）、イベントプロデュース、SaaS事業を展開',
      icon: <Briefcase className="text-blue-700" size={24} />
    },
    {
      period: '2022年 - 2024年',
      title: '(株)Neptune 営業部長',
      description: 'SNSマーケ・映像スクールの商材販売を担当',
      icon: <Trophy className="text-blue-600" size={24} />
    },
    {
      period: '2018年 - 2022年',
      title: '元警察 特殊部隊',
      description: '18～22歳の4年間、特殊部隊として勤務',
      icon: <Calendar className="text-gray-600" size={24} />
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-900"
          {...fadeInUp}
        >
          経歴
        </motion.h2>
        
        <motion.div 
          className="space-y-8" 
          variants={stagger} 
          initial="initial" 
          whileInView="animate" 
          viewport={{ once: true }}
        >
          {experiences.map((item: ExperienceItem, index: number) => (
            <motion.div 
              key={index}
              className="flex gap-6 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-700 mb-1">{item.period}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;