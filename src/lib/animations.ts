// 共通のアニメーション設定

export interface AnimationVariant {
  initial: { opacity: number; y?: number; x?: number };
  animate: { opacity: number; y?: number; x?: number };
  transition: { duration: number; delay?: number };
}

export interface StaggerVariant {
  animate: {
    transition: {
      staggerChildren: number;
    };
  };
}

// フェードインアニメーション
export const fadeInUp: AnimationVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const fadeInLeft: AnimationVariant = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

export const fadeInRight: AnimationVariant = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

// スタガーアニメーション
export const stagger: StaggerVariant = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerFast: StaggerVariant = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

// カスタムアニメーション関数
export const createFadeInUp = (delay: number = 0): AnimationVariant => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay }
});

export const createFadeInLeft = (delay: number = 0): AnimationVariant => ({
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay }
});

export const createFadeInRight = (delay: number = 0): AnimationVariant => ({
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay }
});

// スケールアニメーション
export const scaleIn: AnimationVariant = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

// 回転アニメーション用の設定
export const infiniteRotate = {
  animate: { rotate: 360 },
  transition: { 
    duration: 20, 
    repeat: Infinity, 
    ease: "linear" as const
  }
};

// フローティングアニメーション
export const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 5, 0]
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

// スクロールインジケーター用アニメーション
export const scrollIndicator = {
  animate: { y: [0, 8, 0] },
  transition: { 
    repeat: Infinity, 
    duration: 2, 
    ease: "easeInOut" as const 
  }
};

// ホバーアニメーション設定
export const hoverScale = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 300, damping: 20 }
};

export const hoverScaleSmall = {
  whileHover: { scale: 1.02 },
  transition: { type: "spring", stiffness: 300, damping: 20 }
};

// 背景アニメーション
export const backgroundShapeAnimation = {
  animate: {
    x: [0, 50, 0],
    y: [0, -30, 0],
    scale: [1, 1.1, 1]
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

export const backgroundShapeAnimationSlow = {
  animate: {
    x: [0, -30, 0],
    y: [0, 40, 0],
    scale: [1, 0.9, 1]
  },
  transition: {
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: 2
  }
};