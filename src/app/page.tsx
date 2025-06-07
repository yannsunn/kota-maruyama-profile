'use client';

import { motion } from 'framer-motion';
import { Instagram, MapPin, ExternalLink, Calendar, Briefcase, Heart, Trophy } from 'lucide-react';
import Image from 'next/image';

// 写真データ
const photos = [
  'S__8241403.jpg',
  'S__8241389_0.jpg',
  'S__8241391_0.jpg',
  'S__8241392_0.jpg',
  'S__8241393_0.jpg',
  'S__8241394_0.jpg',
  'S__8241395_0.jpg',
  'S__8241396.jpg',
  'S__8241397.jpg',
  'S__8241399.jpg',
  'S__8241400.jpg',
  'S__8241402.jpg'
];

// 実績データ
const achievements = [
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

// アニメーション設定
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <motion.div 
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            {...fadeInUp}
          >
            丸山 康太
            <span className="block text-2xl md:text-3xl font-light mt-2 opacity-90">
              （こうた）
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-4 font-medium"
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            イベント × マーケティング事業
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl opacity-90 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            (株)wolf 代表取締役
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a 
              href="https://www.instagram.com/uratoku_gourmet" 
              target="_blank"
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <Instagram size={20} />
              グルメアカウント
            </a>
            <a 
              href="https://maps.app.goo.gl/wx3xBtgNCd27grwz9?g_st=ic" 
              target="_blank"
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <MapPin size={20} />
              おばんざいさくら
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-1 h-16 bg-white/50 rounded-full"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
            {...fadeInUp}
          >
            About
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInLeft}>
              <div className="relative w-full max-w-md mx-auto">
                <Image
                  src="/S__8241403.jpg"
                  alt="丸山康太"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl"></div>
              </div>
            </motion.div>
            
            <motion.div {...fadeInRight} className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                神奈川県出身、東京・新宿在住。1999年生まれ、25歳。
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                元 神奈川県警察第一機動隊（18～22歳）を経て、(株)Neptuneにて営業部長として、SNSマーケ・映像スクールの商材販売を担当。
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                2024年11月に独立・起業し、(株)wolf代表取締役として、飲食マーケティング・コンサル、イベントプロデュース、SaaS事業の3領域を主軸に活動中。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
            {...fadeInUp}
          >
            経歴
          </motion.h2>
          
          <motion.div className="space-y-8" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
            {[
              {
                period: '2024年11月 - 現在',
                title: '(株)wolf 代表取締役',
                description: '独立・起業。飲食マーケティング・コンサル、イベントプロデュース、SaaS事業を展開',
                icon: <Briefcase className="text-blue-600" size={24} />
              },
              {
                period: '2022年 - 2024年',
                title: '(株)Neptune 営業部長',
                description: 'SNSマーケ・映像スクールの商材販売を担当',
                icon: <Trophy className="text-purple-600" size={24} />
              },
              {
                period: '2018年 - 2022年',
                title: '神奈川県警察第一機動隊',
                description: '18～22歳の4年間、警察官として勤務',
                icon: <Calendar className="text-green-600" size={24} />
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex gap-6 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-600 mb-1">{item.period}</p>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Business Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
            {...fadeInUp}
          >
            事業内容
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: '① 飲食マーケティング・コンサル',
                description: '飲食店の「0→1」立ち上げから、「1→100」の売上最大化までを支援。4,000名規模の人脈リストを活用したリアル集客に加え、SNS・MEO・グルメインフルエンサーを巻き込む戦略で認知を拡大。',
                gradient: 'from-orange-400 to-red-500'
              },
              {
                title: '② イベントプロデュース',
                description: '東京タワー、トランポランドなどの貸切イベントを通じ、インフルエンサー×経営者の交流機会を創出。累計100本以上のイベント実績、総フォロワー3,000万規模にリーチ。',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                title: '③ SaaS事業（開発中）',
                description: 'マネージャー向けのマネジメント領域に特化したSaaSサービスを展開。',
                gradient: 'from-blue-400 to-cyan-500'
              }
            ].map((business, index) => (
              <motion.div 
                key={index}
                className="group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                variants={fadeInUp}
              >
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${business.gradient} rounded-t-3xl`}></div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                  {business.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {business.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
            {...fadeInUp}
          >
            ギャラリー
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {photos.map((photo, index) => (
              <motion.div 
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={`/${photo}`}
                  alt={`イベント風景 ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
            {...fadeInUp}
          >
            実績
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-3xl shadow-lg"
              {...fadeInLeft}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Trophy className="text-yellow-500" size={28} />
                イベント実績
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <a 
                    key={index}
                    href={achievement.link}
                    target="_blank"
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 group"
                  >
                    <ExternalLink className="text-blue-600 group-hover:scale-110 transition-transform duration-300" size={20} />
                    <span className="text-gray-700 group-hover:text-blue-700 transition-colors duration-300">
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
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Heart className="text-red-500" size={28} />
                その他の肩書き・趣味
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">肩書き</h4>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      おばんざいさくら 副代表
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      グルメインフルエンサー
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">趣味</h4>
                  <div className="flex flex-wrap gap-2">
                    {['筋トレ', 'サバゲー', 'ダイビング', 'サウナ', '格闘技', 'イベント企画', '散歩'].map((hobby, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium"
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

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
            {...fadeInUp}
          >
            お問い合わせ
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/90 mb-12"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            ビジネスのご相談やイベントの企画など、お気軽にお声がけください
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.a 
              href="https://www.instagram.com/uratoku_gourmet"
              target="_blank"
              className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/30 transition-all duration-300 group"
              variants={fadeInUp}
            >
              <Instagram className="text-white group-hover:scale-110 transition-transform duration-300" size={24} />
              <div className="text-left">
                <p className="text-white font-semibold">Instagram</p>
                <p className="text-white/80 text-sm">@uratoku_gourmet</p>
              </div>
            </motion.a>
            
            <motion.a 
              href="https://maps.app.goo.gl/wx3xBtgNCd27grwz9?g_st=ic"
              target="_blank"
              className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/30 transition-all duration-300 group"
              variants={fadeInUp}
            >
              <MapPin className="text-white group-hover:scale-110 transition-transform duration-300" size={24} />
              <div className="text-left">
                <p className="text-white font-semibold">おばんざいさくら</p>
                <p className="text-white/80 text-sm">店舗にて直接ご相談</p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-center">
        <p className="text-gray-400">
          &copy; 2024 丸山康太. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
