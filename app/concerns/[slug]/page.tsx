import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { concerns, getConcernBySlug, getAllConcernSlugs } from '@/lib/concerns'
import { generateConcernArticleJsonLd, generateFaqJsonLd } from '@/lib/jsonld'
import { SITE } from '@/lib/site'
import ScrollReveal from '@/components/ScrollReveal'
import Accordion from '@/components/Accordion'
import CtaBanner from '@/components/CtaBanner'

// 静的生成：全症状ページを事前ビルド
export function generateStaticParams() {
  return getAllConcernSlugs().map(slug => ({ slug }))
}

// 動的メタデータ
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const concern = getConcernBySlug(slug)
  if (!concern) return {}
  return {
    title: `ドライヘッドスパと${concern.title}`,
    description: concern.metaDescription,
    alternates: { canonical: `/concerns/${concern.slug}` },
    openGraph: {
      title: `ドライヘッドスパと${concern.title}｜${SITE.nameShort}`,
      description: concern.metaDescription,
    },
  }
}

export default async function ConcernPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const concern = getConcernBySlug(slug)
  if (!concern) notFound()

  const related = concern.relatedSlugs
    .map(s => concerns.find(c => c.slug === s))
    .filter(Boolean)

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateConcernArticleJsonLd(concern)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(concern.faq)) }} />

      <main>
        {/* ===== HERO ===== */}
        <section className="relative pt-40 pb-28 sm:pt-48 sm:pb-36 px-6 sm:px-10 overflow-hidden" aria-label="ヒーロー">
          <div className="ambient w-[400px] h-[400px] bg-senzu/[.06] -top-20 -left-32" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <span className="label-sm">{concern.titleEn}</span>
            <div className="botanical-line mt-5 mb-10" />
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-[2.75rem] leading-snug mb-8">
              <span className="text-glow">{concern.title}</span>でお悩みの方へ
            </h1>
            <p className="text-cream-dim text-sm sm:text-base leading-[2] font-light max-w-lg mx-auto whitespace-pre-line">
              {concern.heroDescription}
            </p>
          </div>
        </section>

        {/* ===== ARTICLE SECTIONS ===== */}
        <section className="py-24 sm:py-32 px-6 sm:px-10 bg-base-warm/50" aria-label="詳細解説">
          <div className="max-w-3xl mx-auto space-y-20">
            {concern.sections.map((sec, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <article>
                  <h2 className="font-display font-bold text-lg sm:text-xl mb-6 leading-snug">
                    {sec.heading}
                  </h2>
                  <p className="text-cream-dim text-sm leading-[2.2] font-light">
                    {sec.body}
                  </p>
                </article>
              </ScrollReveal>
            ))}

            {/* 店舗誘導 */}
            <ScrollReveal delay={0.3}>
              <div className="bg-base-card/60 border border-white/[.04] rounded-2xl p-8 sm:p-10 text-center">
                <p className="text-cream-dim text-sm leading-[2] font-light mb-6">
                  <strong className="text-cream font-medium">{concern.title}</strong>でお悩みの方は、<br />
                  姫路駅徒歩5分の「仙豆のちから」で<br />
                  まずは60分の頭ほぐし体験をお試しください。
                </p>
                <a href={SITE.hotpepperCoupon} target="_blank" rel="noopener noreferrer"
                   className="cta-main inline-flex items-center gap-3 bg-senzu text-base font-bold px-9 py-4 rounded-full text-sm hover:bg-senzu-glow hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-senzu/15">
                  空き状況を確認する
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h6M7 4l3 3-3 3"/></svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-24 sm:py-32 px-6 sm:px-10" aria-labelledby="concern-faq">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="label-sm">FAQ</span>
                <div className="botanical-line mt-5 mb-8" />
                <h2 id="concern-faq" className="font-display font-bold text-xl sm:text-2xl leading-snug">
                  {concern.title}に関する<span className="text-glow">よくある質問</span>
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <Accordion items={concern.faq.map(f => ({
                trigger: <h3 className="font-display font-bold text-[13px] sm:text-sm">{f.question}</h3>,
                content: <p className="text-cream-dim text-sm leading-[2] font-light">{f.answer}</p>,
              }))} />
            </ScrollReveal>
          </div>
        </section>

        {/* ===== RELATED ===== */}
        {related.length > 0 && (
          <section className="py-24 sm:py-32 px-6 sm:px-10 bg-base-warm/50" aria-label="関連するお悩み">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-center font-display font-bold text-lg mb-10">
                  関連する<span className="text-glow">お悩み</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map(r => r && (
                    <Link key={r.slug} href={`/concerns/${r.slug}`}
                          className="feat bg-base-card/60 border border-white/[.04] rounded-2xl p-7 text-center block group">
                      <h3 className="font-display font-bold text-sm group-hover:text-senzu transition-colors">{r.title}</h3>
                      <span className="text-cream-faint text-[11px] tracking-wider">{r.titleEn}</span>
                    </Link>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* ===== CTA ===== */}
        <CtaBanner />
      </main>
    </>
  )
}
