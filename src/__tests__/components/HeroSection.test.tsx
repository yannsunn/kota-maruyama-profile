import { render, screen } from '@testing-library/react'
import HeroSection from '@/components/HeroSection'

describe('HeroSection', () => {
  it('renders hero section with main heading', () => {
    render(<HeroSection />)
    
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText('丸山康太')).toBeInTheDocument()
    expect(screen.getByText('(まるやまこうた)')).toBeInTheDocument()
  })

  it('renders company information', () => {
    render(<HeroSection />)
    
    expect(screen.getByText('イベント × マーケティング事業')).toBeInTheDocument()
    expect(screen.getByText('株式会社Wolf CEO')).toBeInTheDocument()
  })

  it('renders achievement information', () => {
    render(<HeroSection />)
    
    expect(screen.getByText(/元警察特殊部隊から起業家へ/)).toBeInTheDocument()
    expect(screen.getByText(/イベント実績100本超/)).toBeInTheDocument()
    expect(screen.getByText(/総リーチ3,000万フォロワー/)).toBeInTheDocument()
  })

  it('renders catchphrase', () => {
    render(<HeroSection />)
    
    expect(screen.getByText('口癖は「伸び代」')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<HeroSection />)
    
    const instagramLink = screen.getByRole('link', { name: /instagram/i })
    const storeLink = screen.getByRole('link', { name: /store/i })
    
    expect(instagramLink).toBeInTheDocument()
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/marukou0722/')
    expect(instagramLink).toHaveAttribute('target', '_blank')
    expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer')
    
    expect(storeLink).toBeInTheDocument()
    expect(storeLink).toHaveAttribute('href', 'https://maps.app.goo.gl/wx3xBtgNCd27grwz9?g_st=ic')
    expect(storeLink).toHaveAttribute('target', '_blank')
    expect(storeLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders profile image', () => {
    render(<HeroSection />)
    
    const profileImage = screen.getByAltText('丸山康太')
    expect(profileImage).toBeInTheDocument()
    expect(profileImage).toHaveAttribute('src', '/kota-profile.jpg')
  })

  it('renders scroll indicator', () => {
    render(<HeroSection />)
    
    expect(screen.getByText('Scroll Down')).toBeInTheDocument()
  })

  it('has proper semantic structure', () => {
    const { container } = render(<HeroSection />)
    
    const section = container.querySelector('section')
    expect(section).toHaveClass('relative', 'min-h-screen')
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass('text-4xl', 'font-bold')
  })
})