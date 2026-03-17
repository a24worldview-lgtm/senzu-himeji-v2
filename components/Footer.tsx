import Image from 'next/image'
import { SITE } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="py-14 px-6 sm:px-10" style={{ borderTop: '1px solid rgba(139,184,138,0.08)', background: '#1a2418', position: 'relative', zIndex: 1 }}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <Image src="/images/logo.png" alt={SITE.name} width={120} height={30} className="h-14 w-auto" style={{ filter: 'brightness(1.5)' }} />
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/senzu.himejiotemaedori/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8bb88a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="#8bb88a" stroke="none" />
            </svg>
          </a>
          <p className="text-[10px] tracking-wider" style={{ color: 'rgba(240,235,227,0.25)' }}>&copy; 2026 Senzu no Chikara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
