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
}

export default function Accordion({ items, iconVariant = 'chevron' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <article key={i} className="rounded-2xl overflow-hidden" style={{ background: 'rgba(37,50,36,0.6)', border: '1px solid rgba(139,184,138,0.08)' }}>
            <button
              className="w-full flex items-center justify-between px-7 sm:px-9 py-6 text-left"
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
              <div className="px-7 sm:px-9 pb-7 pt-1">
                <div className="pt-5" style={{ borderTop: '1px solid rgba(139,184,138,0.08)' }}>
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
