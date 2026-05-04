'use client'

import { useState } from 'react'
import DecorSymbol from '@/components/decor/DecorSymbol'

interface AccordionItem {
  trigger: React.ReactNode
  content: React.ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  iconVariant?: 'chevron' | 'plus-minus'
  variant?: 'card' | 'minimal'
}

export default function Accordion({ items, iconVariant = 'chevron', variant = 'card' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const isMinimal = variant === 'minimal'

  return (
    <div
      className={isMinimal ? 'space-y-0 rounded-2xl overflow-hidden' : 'space-y-3'}
      style={isMinimal ? { background: 'rgba(240,235,227,0.03)', border: '1px solid rgba(139,184,138,0.14)' } : undefined}
    >
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <article
            key={i}
            className={isMinimal ? 'overflow-hidden' : 'rounded-2xl overflow-hidden'}
            style={isMinimal
              ? {
                  background: 'transparent',
                  borderBottom: i < items.length - 1 ? '1px solid rgba(139,184,138,0.12)' : undefined,
                }
              : { background: 'rgba(37,50,36,0.6)', border: '1px solid rgba(139,184,138,0.08)' }}
          >
            <button
              className={`w-full flex items-center justify-between text-left ${isMinimal ? 'px-5 sm:px-7 py-5 gap-5 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-senzu/40' : 'px-7 sm:px-9 py-6'}`}
              style={isMinimal && isOpen ? { background: 'rgba(240,235,227,0.025)' } : undefined}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <div className="pr-4">{item.trigger}</div>
              {iconVariant === 'plus-minus' ? (
                <DecorSymbol name={isOpen ? 'minus' : 'plus'} size={16} className="text-senzu shrink-0" />
              ) : (
                <svg
                  className={`w-4 h-4 shrink-0 transition-transform duration-400 ${isOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="#8bb88a" strokeWidth="2"
                >
                  <path d="M2 5l5 5 5-5"/>
                </svg>
              )}
            </button>
            <div className={`acc-body ${isOpen ? 'open' : ''}`}>
              <div className={isMinimal ? 'px-5 sm:px-7 pb-6 pt-0' : 'px-7 sm:px-9 pb-7 pt-1'}>
                <div className={isMinimal ? 'pt-4' : 'pt-5'} style={{ borderTop: isMinimal ? '1px solid rgba(139,184,138,0.10)' : '1px solid rgba(139,184,138,0.08)' }}>
                  {item.content}
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
