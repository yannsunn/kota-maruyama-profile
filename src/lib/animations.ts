// 共通のアニメーション設定
import { Variants } from 'framer-motion';

// フェードインアニメーション
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  }
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  }
};

// スタガーアニメーション
export const stagger: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerFast: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

// カスタムアニメーション関数
export const createFadeInUp = (delay: number = 0): Variants => ({
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, delay }
  }
});

export const createFadeInLeft = (delay: number = 0): Variants => ({
  initial: { opacity: 0, x: -20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, delay }
  }
});

export const createFadeInRight = (delay: number = 0): Variants => ({
  initial: { opacity: 0, x: 20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, delay }
  }
});

// スケールアニメーション
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

// 回転アニメーション用の設定
export const infiniteRotate: Variants = {
  animate: { 
    rotate: 360,
    transition: { 
      duration: 20, 
      repeat: Infinity, 
      ease: "linear"
    }
  }
};

// フローティングアニメーション
export const floatingAnimation: Variants = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// スクロールインジケーター用アニメーション
export const scrollIndicator: Variants = {
  animate: { 
    y: [0, 8, 0],
    transition: { 
      repeat: Infinity, 
      duration: 2, 
      ease: "easeInOut"
    }
  }
};

// ホバーアニメーション設定
export const hoverScale: Variants = {
  whileHover: { 
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

export const hoverScaleSmall: Variants = {
  whileHover: { 
    scale: 1.02,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

// 背景アニメーション
export const backgroundShapeAnimation: Variants = {
  animate: {
    x: [0, 50, 0],
    y: [0, -30, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const backgroundShapeAnimationSlow: Variants = {
  animate: {
    x: [0, -30, 0],
    y: [0, 40, 0],
    scale: [1, 0.9, 1],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2
    }
  }
};