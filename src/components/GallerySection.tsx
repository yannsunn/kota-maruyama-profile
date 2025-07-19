import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface AnimationVariant {
  initial: { opacity: number; y?: number; x?: number };
  animate: { opacity: number; y?: number; x?: number };
  transition: { duration: number; delay?: number };
}

interface StaggerVariant {
  animate: {
    transition: {
      staggerChildren: number;
    };
  };
}

const fadeInUp: AnimationVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger: StaggerVariant = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const GallerySection: React.FC = () => {
  const photos: string[] = [
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

  return (
    <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-900"
          {...fadeInUp}
        >
          ギャラリー
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {photos.map((photo: string, index: number) => (
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
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;