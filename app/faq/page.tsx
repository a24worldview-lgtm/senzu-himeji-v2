import type { Metadata } from 'next'
import { concerns } from '@/lib/concerns'
import { generateFaqJsonLd } from '@/lib/jsonld'
import { SITE } from '@/lib/site'
import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import Accordion from '@/components/Accordion'
import CtaBanner from '@/components/CtaBanner'

export const metadata: Metadata = {
  title: 'よくある質問（FAQ）',
  description: `${SITE.name}のよくある質問。ドライヘッドスパの効果、不眠・眼精疲労・自律神経への効果、予約方法、男性利用、ペア利用、アクセス情報などを網羅。`,
  alternates: { canonical: '/faq' },
}

// 全FAQ集約
const generalFaqs = [
  { question: 'ドライヘッドスパとは何ですか？', answer: '水やオイルを一切使わず、オールハンドで頭皮・頭の筋肉・筋膜をほぐす施術です。髪が濡れないのでメイクや髪型を気にせず、お仕事帰りやお買い物ついでにも気軽にご利用いただけます。' },
  { question: '予約なしでも利用できますか？', answer: '空きがあれば当日のご来店も可能ですが、事前のご予約をおすすめしております。ホットペッパービューティーからのネット予約が便利です。' },
  { question: '施術中に寝てしまっても大丈夫ですか？', answer: 'もちろん大丈夫です。むしろ眠ってしまうほどリラックスしていただけるのが理想です。当店のお客様の多くが施術中に深い眠りに入られます。' },
  { question: '男性でも利用できますか？', answer: 'はい、性別を問わずどなたでもご利用いただけます。男性のお客様も多く、デスクワークによる脳疲労や眼精疲労のケアに人気です。' },
  { question: 'ペアでの利用は可能ですか？', answer: 'はい、カップルやご友人同士でのペア利用に対応しております。スタッフ2名の確保が必要なため、事前にお電話でご相談ください。' },
  { question: '姫路駅からのアクセスを教えてください', answer: 'JR姫路駅北口から大手前通りを北へ徒歩約5分、呉服町のハトヤビル1階102号室です。' },
  { question: '施術時間はどれくらいですか？', answer: '60分・75分・90分の3コースからお選びいただけます。初めての方には60分の睡眠改善コースが人気です。' },
  { question: 'どのくらいの頻度で通うのがおすすめですか？', answer: '月に1〜2回のペースで通われる方が多いです。慢性的なお疲れの場合は、最初の1ヶ月は週1回ペースで通われると変化を実感しやすくなります。' },
]

// 症状別FAQを集約
const concernFaqs = concerns.flatMap(c =>
  c.faq.map(f => ({ ...f, category: c.title }))
)

const allFaqs = [...generalFaqs, ...concernFaqs.map(({ category, ...f }) => f)]

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(allFaqs)) }} />

      <main>
        {/* HERO */}
        <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-28 px-6 sm:px-10 text-center">
          <div className="ambient w-[400px] h-[400px] bg-senzu/[.05] -top-20 left-[20%]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <SectionHeader labelEn="FAQ" heading={<>よくある<span className="text-glow">ご質問</span></>} />
          </div>
        </section>

        {/* General FAQ */}
        <section className="py-16 sm:py-24 px-6 sm:px-10" aria-labelledby="general-faq">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 id="general-faq" className="font-display font-bold text-lg mb-8">ご利用について</h2>
              <Accordion items={generalFaqs.map(f => ({
                trigger: <h3 className="font-display font-bold text-[13px] sm:text-sm">{f.question}</h3>,
                content: <p className="text-cream-dim text-sm leading-[2] font-light">{f.answer}</p>,
              }))} />
            </ScrollReveal>
          </div>
        </section>

        {/* Concern-specific FAQs */}
        {concerns.map(c => (
          <section key={c.slug} className="py-16 sm:py-24 px-6 sm:px-10" aria-labelledby={`faq-${c.slug}`}>
            <div className="max-w-3xl mx-auto">
              <ScrollReveal>
                <h2 id={`faq-${c.slug}`} className="font-display font-bold text-lg mb-8">
                  {c.title}について
                </h2>
                <Accordion items={c.faq.map(f => ({
                  trigger: <h3 className="font-display font-bold text-[13px] sm:text-sm">{f.question}</h3>,
                  content: <p className="text-cream-dim text-sm leading-[2] font-light">{f.answer}</p>,
                }))} />
              </ScrollReveal>
            </div>
          </section>
        ))}

        <CtaBanner />
      </main>
    </>
  )
}
