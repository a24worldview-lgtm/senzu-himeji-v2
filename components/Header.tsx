'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/site'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#concern', label: 'お悩み' },
    { href: '/#menu', label: 'Menu' },
    { href: '/faq', label: 'FAQ' },
    { href: '/#access', label: 'Access' },
    { href: '/notes', label: 'Note' },
  ]

  const textColor = '#f0ebe3'
  const dimColor = scrolled ? '#c4bfa9' : 'rgba(240,235,227,0.65)'

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500" style={{ background: scrolled ? 'rgba(26,36,24,0.92)' : 'transparent', backdropFilter: scrolled ? 'blur(20px)' : 'none', boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.15)' : 'none' }}>
      <nav className="max-w-6xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between" aria-label="メインナビゲーション">
        <Link href="/" className="block" aria-label="仙豆のちから トップ">
          <Image src="/images/logo.png" alt="仙豆のちから" width={240} height={60} className="h-17 w-auto" style={{ filter: scrolled ? 'brightness(1.3)' : 'brightness(1.1)' }} />
        </Link>
        <ul className="hidden md:flex items-center gap-9 text-xs font-medium tracking-wider">
          {navLinks.map(l => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:opacity-70" style={{ color: dimColor }}>{l.label}</Link>
            </li>
          ))}
          <li>
            <a href={SITE.hotpepperCoupon} target="_blank" rel="noopener noreferrer" className="cta-main inline-flex items-center gap-2 font-bold px-6 py-2.5 rounded-full text-xs" style={{ background: '#8bb88a', color: '#1a2418' }}>予約する</a>
          </li>
        </ul>
        <button className="md:hidden p-2 relative w-10 h-10 flex flex-col items-center justify-center gap-1.5" onClick={() => setMobileOpen(!mobileOpen)} aria-label="メニュー" aria-expanded={mobileOpen}>
          <span className={`block w-5 h-px transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[4px]' : ''}`} style={{ background: textColor }} />
          <span className={`block w-5 h-px transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} style={{ background: textColor }} />
          <span className={`block h-px transition-all duration-300 ml-auto ${mobileOpen ? 'w-5 -rotate-45 -translate-y-[4px]' : 'w-3'}`} style={{ background: textColor }} />
        </button>
      </nav>
      <div className={`md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 transition-opacity duration-500 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} style={{ background: 'rgba(26,36,24,0.97)', backdropFilter: 'blur(20px)' }}>
        {navLinks.map(l => (
          <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-xl font-display font-bold" style={{ color: '#f0ebe3' }}>{l.label}</Link>
        ))}
        <a href={SITE.hotpepperCoupon} target="_blank" rel="noopener noreferrer" className="cta-main mt-4 font-bold px-10 py-4 rounded-full text-base" style={{ background: '#8bb88a', color: '#1a2418' }}>予約する</a>
      </div>
    </header>
  )
}