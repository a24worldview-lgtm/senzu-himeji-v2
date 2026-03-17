import type { Metadata } from 'next'
import { SITE } from '@/lib/site'
import SectionHeader from '@/components/SectionHeader'
import CtaBanner from '@/components/CtaBanner'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'コラム・お役立ち記事',
  description: `${SITE.nameShort}のスタッフが書く、ドライヘッドスパ・脳疲労・睡眠・自律神経に関するコラム記事一覧。`,
  alternates: { canonical: '/notes' },
}

const topics = [
  '睡眠の質を上げるコツ',
  '脳疲労のセルフチェック',
  '眼精疲労とヘッドスパ',
  '自律神経の整え方',
  'ドライヘッドスパの効果',
  '姫路のサロン情報',
]

export default function NotesPage() {
  return (
    <main>
      <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-28 px-6 sm:px-10 text-center">
        <div className="ambient w-[400px] h-[400px] bg-senzu/[.05] -top-20 right-[10%]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <SectionHeader
            labelEn="Column"
            heading={<>お役立ち<span className="text-glow">コラム</span></>}
          />
          <p className="text-sm leading-[2] font-light max-w-md mx-auto" style={{ color: 'rgba(181,173,158,1)' }}>
            ドライヘッドスパ・脳疲労・睡眠・自律神経について、<br />
            スタッフがnoteで発信しています。
          </p>
        </div>
      </section>

      <section className="pb-28 sm:pb-36 px-6 sm:px-10">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'rgba(45,59,43,0.5)', border: '1px solid rgba(139,184,138,0.1)' }}>
              <p className="text-sm leading-[2] font-light mb-8" style={{ color: 'rgba(240,235,227,0.7)' }}>
                こんなテーマで記事を書いています
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {topics.map(topic => (
                  <span key={topic} className="tag-pill text-xs">
                    {topic}
                  </span>
                ))}
              </div>
              <a
                href={SITE.noteAccount}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-bold px-10 py-4 rounded-full text-sm transition-all duration-300 hover:scale-[1.03]"
                style={{ background: 'rgba(139,184,138,0.2)', color: '#8bb88a', border: '1px solid rgba(139,184,138,0.3)' }}
              >
                noteで記事を読む →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaBanner />
    </main>
  )
}
