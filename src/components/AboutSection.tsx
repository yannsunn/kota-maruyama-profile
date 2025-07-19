import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface AnimationVariant {
  initial: { opacity: number; y?: number; x?: number };
  animate: { opacity: number; y?: number; x?: number };
  transition: { duration: number; delay?: number };
}

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

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-900"
          {...fadeInUp}
        >
          About
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInLeft}>
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/S__8241389_0.jpg"
                alt="丸山康太"
                width={400}
                height={500}
                className="rounded-2xl shadow-2xl object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </motion.div>
          
          <motion.div {...fadeInRight} className="space-y-6 text-center md:text-left">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              神奈川県出身、東京・新宿在住。1999年生まれ、25歳。
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              元警察特殊部隊（18～22歳）を経て、<br />
              (株)Neptuneにて営業部長として、<br />
              SNSマーケ・映像スクールの商材販売を担当。
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              2024年11月に創業。<br />
              株式会社Wolf CEOとして、<br />
              BPO事業（Sales/SNS/建築）、<br />
              イベントプロデュース、SaaS事業を主軸に活動中。
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              東京タワーイベント主催（6月8日）<br />
              30万フォロワー連携・<br />
              月間100名集客達成
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;