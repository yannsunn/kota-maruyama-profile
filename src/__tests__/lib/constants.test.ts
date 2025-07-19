import { 
  ACHIEVEMENTS, 
  EXPERIENCES, 
  BUSINESS_ITEMS, 
  ADVISORY_ITEMS, 
  HOBBIES, 
  PERSONAL_INFO,
  STORE_INFO,
  SOCIAL_MEDIA,
  SEO,
  URLS
} from '@/lib/constants'

describe('Constants', () => {
  describe('ACHIEVEMENTS', () => {
    it('should have correct structure', () => {
      expect(ACHIEVEMENTS).toHaveLength(6)
      
      ACHIEVEMENTS.forEach(achievement => {
        expect(achievement).toHaveProperty('title')
        expect(achievement).toHaveProperty('link')
        expect(typeof achievement.title).toBe('string')
        expect(typeof achievement.link).toBe('string')
        expect(achievement.link).toMatch(/^https:\/\//)
      })
    })

    it('should contain expected achievements', () => {
      const titles = ACHIEVEMENTS.map(a => a.title)
      expect(titles).toContain('最新インフルエンサーコラボイベント')
      expect(titles).toContain('インフルエンサー×経営者集客イベント')
      expect(titles).toContain('同い年会')
    })
  })

  describe('EXPERIENCES', () => {
    it('should have correct structure', () => {
      expect(EXPERIENCES).toHaveLength(3)
      
      EXPERIENCES.forEach(experience => {
        expect(experience).toHaveProperty('period')
        expect(experience).toHaveProperty('title')
        expect(experience).toHaveProperty('description')
        expect(experience).toHaveProperty('icon')
        expect(['briefcase', 'trophy', 'calendar']).toContain(experience.icon)
      })
    })

    it('should be in reverse chronological order', () => {
      expect(EXPERIENCES[0].period).toContain('2024年11月 - 現在')
      expect(EXPERIENCES[1].period).toContain('2022年 - 2024年')
      expect(EXPERIENCES[2].period).toContain('2018年 - 2022年')
    })
  })

  describe('BUSINESS_ITEMS', () => {
    it('should have correct structure', () => {
      expect(BUSINESS_ITEMS).toHaveLength(3)
      
      BUSINESS_ITEMS.forEach(item => {
        expect(item).toHaveProperty('title')
        expect(item).toHaveProperty('description')
        expect(item).toHaveProperty('colorClass')
        expect(item.title).toMatch(/^① |^② |^③ /)
      })
    })

    it('should have proper color classes', () => {
      BUSINESS_ITEMS.forEach(item => {
        expect(item.colorClass).toMatch(/^from-\w+-\d+\s+to-\w+-\d+$/)
      })
    })
  })

  describe('ADVISORY_ITEMS', () => {
    it('should have correct structure', () => {
      expect(ADVISORY_ITEMS).toHaveLength(4)
      
      ADVISORY_ITEMS.forEach(item => {
        expect(item).toHaveProperty('title')
        expect(item).toHaveProperty('colorClass')
        expect(item).toHaveProperty('icon')
        expect(['trophy', 'heart', 'instagram', 'briefcase']).toContain(item.icon)
      })
    })

    it('should contain expected items', () => {
      const titles = ADVISORY_ITEMS.map(a => a.title)
      expect(titles).toContain('チルモングミ')
      expect(titles).toContain('animal dentist')
      expect(titles).toContain('エランマリール')
      expect(titles).toContain('リンクストレッチ')
    })
  })

  describe('HOBBIES', () => {
    it('should contain expected hobbies', () => {
      expect(HOBBIES).toHaveLength(8)
      expect(HOBBIES).toContain('筋トレ')
      expect(HOBBIES).toContain('MMA')
      expect(HOBBIES).toContain('サウナ')
      expect(HOBBIES).toContain('ダイビング')
      expect(HOBBIES).toContain('サバゲー')
      expect(HOBBIES).toContain('格闘技')
      expect(HOBBIES).toContain('イベント企画')
      expect(HOBBIES).toContain('散歩')
    })
  })

  describe('PERSONAL_INFO', () => {
    it('should have correct personal information', () => {
      expect(PERSONAL_INFO.name).toBe('丸山康太')
      expect(PERSONAL_INFO.nameKana).toBe('まるやまこうた')
      expect(PERSONAL_INFO.age).toBe(25)
      expect(PERSONAL_INFO.birthYear).toBe(1999)
      expect(PERSONAL_INFO.company).toBe('株式会社Wolf')
      expect(PERSONAL_INFO.position).toBe('CEO')
      expect(PERSONAL_INFO.catchphrase).toBe('伸び代')
    })

    it('should have achievements object', () => {
      expect(PERSONAL_INFO.achievements).toHaveProperty('events')
      expect(PERSONAL_INFO.achievements).toHaveProperty('reach')
      expect(PERSONAL_INFO.achievements).toHaveProperty('tokyoTowerEvent')
      expect(PERSONAL_INFO.achievements).toHaveProperty('followers')
      expect(PERSONAL_INFO.achievements).toHaveProperty('monthlyAttendees')
    })
  })

  describe('STORE_INFO', () => {
    it('should have correct store information', () => {
      expect(STORE_INFO.name).toBe('おばんざいさくら')
      expect(STORE_INFO.phone).toBe('03-5925-8182')
      expect(STORE_INFO.address).toContain('東京都新宿区')
      expect(STORE_INFO.mapEmbedUrl).toMatch(/^https:\/\/www\.google\.com\/maps\/embed/)
    })

    it('should have operating hours', () => {
      expect(STORE_INFO.hours).toHaveProperty('weekdays')
      expect(STORE_INFO.hours).toHaveProperty('closed')
      expect(STORE_INFO.hours.weekdays).toContain('17:00〜24:00')
      expect(STORE_INFO.hours.closed).toContain('日・祝')
    })

    it('should have access information', () => {
      expect(STORE_INFO.access).toHaveLength(2)
      expect(STORE_INFO.access[0]).toContain('JR新宿駅')
      expect(STORE_INFO.access[1]).toContain('新宿三丁目駅')
    })
  })

  describe('SOCIAL_MEDIA', () => {
    it('should have Instagram information', () => {
      expect(SOCIAL_MEDIA.instagram.url).toBe(URLS.instagram)
      expect(SOCIAL_MEDIA.instagram.handle).toBe('@marukou0722')
    })
  })

  describe('SEO', () => {
    it('should have proper SEO configuration', () => {
      expect(SEO.siteName).toContain('丸山康太')
      expect(SEO.description).toContain('元警察特殊部隊')
      expect(SEO.keywords).toContain('丸山康太')
      expect(SEO.keywords).toContain('株式会社Wolf')
      expect(SEO.ogImage).toBe('/kota-profile.jpg')
    })
  })

  describe('URLS', () => {
    it('should have valid URLs', () => {
      Object.values(URLS).forEach(url => {
        if (url.startsWith('tel:')) {
          expect(url).toMatch(/^tel:\d{10,11}$/)
        } else {
          expect(url).toMatch(/^https:\/\//)
        }
      })
    })

    it('should have expected URLs', () => {
      expect(URLS.instagram).toContain('instagram.com')
      expect(URLS.googleMaps).toContain('maps.app.goo.gl')
      expect(URLS.serviceDocument).toContain('docs.google.com')
    })
  })
})