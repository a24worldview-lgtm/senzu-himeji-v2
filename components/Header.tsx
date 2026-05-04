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
    <>
      {/* ヘッダーバー */}
      <header
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(26,36,24,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.15)' : 'none',
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between" aria-label="メインナビゲーション">
          <Link href="/" className="block" aria-label="仙豆のちから トップ" onClick={() => setMobileOpen(false)}>
            <Image src="/images/logo.png" alt="仙豆のちから" width={240} height={60} className="h-14 w-auto" style={{ filter: scrolled ? 'brightness(1.3)' : 'brightness(1.1)' }} />
          </Link>
          <ul className="hidden md:flex items-center gap-9 text-xs font-medium tracking-wider">
            {navLinks.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:opacity-70" style={{ color: dimColor }}>{l.label}</Link>
              </li>
            ))}
            <li>
              <a href={SITE.hotpepperCoupon} target="_blank" rel="noopener noreferrer" className="cta-main inline-flex items-center gap-2 font-bold px-6 py-2.5 rounded-full text-xs" style={{ background: '#8bb88a', color: '#1a2418' }}>空き状況を確認する</a>
            </li>
          </ul>
          {/* ハンバーガーボタン（開く用） */}
          <button
            className="md:hidden p-2 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen(true)}
            aria-label="メニューを開く"
          >
            <span className="block w-5 h-px" style={{ background: textColor }} />
            <span className="block w-5 h-px" style={{ background: textColor }} />
            <span className="block w-3 h-px ml-auto" style={{ background: textColor }} />
          </button>
        </nav>
      </header>

      {/* モバイルメニューオーバーレイ — headerの外、独立したstacking context */}
      <div
        className={`md:hidden fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
          mobileOpen
            ? 'opacity-100 visible pointer-events-auto'
            : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{
          background: 'rgba(26,36,24,0.97)',
          backdropFilter: 'blur(20px)',
        }}
        aria-hidden={!mobileOpen}
      >
        {/* ✕ 閉じるボタン — ハンバーガーと同じ位置に配置 */}
        <button
          className="absolute top-4 right-6 sm:right-10 p-2 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMobileOpen(false)}
          aria-label="メニューを閉じる"
        >
          <span className="block w-5 h-px rotate-45 translate-y-[3px]" style={{ background: '#f0ebe3' }} />
          <span className="block w-5 h-px -rotate-45 -translate-y-[3px]" style={{ background: '#f0ebe3' }} />
        </button>

        {navLinks.map(l => (
          <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-xl font-display font-bold" style={{ color: '#f0ebe3' }} tabIndex={mobileOpen ? 0 : -1}>{l.label}</Link>
        ))}
        <a href={SITE.hotpepperCoupon} target="_blank" rel="noopener noreferrer" className="cta-main mt-4 font-bold px-10 py-4 rounded-full text-base" style={{ background: '#8bb88a', color: '#1a2418' }} tabIndex={mobileOpen ? 0 : -1}>空き状況を確認する</a>
      </div>
    </>
  )
}
