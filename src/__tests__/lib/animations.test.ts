import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  stagger, 
  staggerFast,
  createFadeInUp,
  createFadeInLeft,
  createFadeInRight,
  scaleIn,
  infiniteRotate,
  floatingAnimation,
  scrollIndicator,
  hoverScale,
  hoverScaleSmall,
  backgroundShapeAnimation,
  backgroundShapeAnimationSlow
} from '@/lib/animations'

describe('Animations', () => {
  describe('Basic fade animations', () => {
    it('should have correct fadeInUp animation', () => {
      expect(fadeInUp).toEqual({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
      })
    })

    it('should have correct fadeInLeft animation', () => {
      expect(fadeInLeft).toEqual({
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6 }
      })
    })

    it('should have correct fadeInRight animation', () => {
      expect(fadeInRight).toEqual({
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6 }
      })
    })
  })

  describe('Stagger animations', () => {
    it('should have correct stagger animation', () => {
      expect(stagger).toEqual({
        animate: {
          transition: {
            staggerChildren: 0.1
          }
        }
      })
    })

    it('should have correct staggerFast animation', () => {
      expect(staggerFast).toEqual({
        animate: {
          transition: {
            staggerChildren: 0.05
          }
        }
      })
    })
  })

  describe('Animation factories', () => {
    it('should create fadeInUp with custom delay', () => {
      const animation = createFadeInUp(0.5)
      expect(animation).toEqual({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.5 }
      })
    })

    it('should create fadeInUp with default delay', () => {
      const animation = createFadeInUp()
      expect(animation).toEqual({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0 }
      })
    })

    it('should create fadeInLeft with custom delay', () => {
      const animation = createFadeInLeft(0.3)
      expect(animation).toEqual({
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, delay: 0.3 }
      })
    })

    it('should create fadeInRight with custom delay', () => {
      const animation = createFadeInRight(0.2)
      expect(animation).toEqual({
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, delay: 0.2 }
      })
    })
  })

  describe('Special animations', () => {
    it('should have correct scaleIn animation', () => {
      expect(scaleIn).toEqual({
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5 }
      })
    })

    it('should have correct infiniteRotate animation', () => {
      expect(infiniteRotate).toEqual({
        animate: { rotate: 360 },
        transition: { 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear"
        }
      })
    })

    it('should have correct floatingAnimation', () => {
      expect(floatingAnimation).toEqual({
        animate: {
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        },
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      })
    })

    it('should have correct scrollIndicator animation', () => {
      expect(scrollIndicator).toEqual({
        animate: { y: [0, 8, 0] },
        transition: { 
          repeat: Infinity, 
          duration: 2, 
          ease: "easeInOut"
        }
      })
    })
  })

  describe('Hover animations', () => {
    it('should have correct hoverScale animation', () => {
      expect(hoverScale).toEqual({
        whileHover: { scale: 1.05 },
        transition: { type: "spring", stiffness: 300, damping: 20 }
      })
    })

    it('should have correct hoverScaleSmall animation', () => {
      expect(hoverScaleSmall).toEqual({
        whileHover: { scale: 1.02 },
        transition: { type: "spring", stiffness: 300, damping: 20 }
      })
    })
  })

  describe('Background animations', () => {
    it('should have correct backgroundShapeAnimation', () => {
      expect(backgroundShapeAnimation).toEqual({
        animate: {
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        },
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }
      })
    })

    it('should have correct backgroundShapeAnimationSlow', () => {
      expect(backgroundShapeAnimationSlow).toEqual({
        animate: {
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 0.9, 1]
        },
        transition: {
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }
      })
    })
  })
})