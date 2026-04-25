import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/site'
import { concerns } from '@/lib/concerns'
import { generateLocalBusinessJsonLd, generateFaqJsonLd } from '@/lib/jsonld'
import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import Accordion from '@/components/Accordion'
import CtaBanner from '@/components/CtaBanner'
import FeatureIcon from '@/components/decor/FeatureIcon'
import DecorSymbol from '@/components/decor/DecorSymbol'

const topFaqs = [
  { question: 'ドライヘッドスパとは何ですか？', answer: '水やオイルを一切使わず、オールハンドで頭皮・頭の筋肉・筋膜をほぐす施術です。髪が濡れないのでメイクや髪型を気にせず、お仕事帰りやお買い物ついでにも気軽にご利用いただけます。' },
  { question: '不眠・睡眠の悩みに効果がありますか？', answer: '頭部の筋膜をほぐすことで自律神経のバランスが整い、副交感神経が優位になりやすくなります。施術中に深い眠りに入られるお客様が多く、睡眠の質の改善を実感される方が多数いらっしゃいます。ただし効果には個人差があります。' },
  { question: '施術中に寝てしまっても大丈夫ですか？', answer: 'もちろん大丈夫です。むしろ眠ってしまうほどリラックスしていただけるのが理想です。当店のお客様の多くが施術中に深い眠りに入られます。' },
  { question: '予約なしでも利用できますか？', answer: '空きがあれば当日のご来店も可能ですが、事前のご予約をおすすめしております。ホットペッパービューティーからのネット予約が便利です。' },
  { question: '男性でも利用できますか？', answer: 'はい、性別を問わずどなたでもご利用いただけます。男性のお客様も多く、デスクワークによる脳疲労や眼精疲労のケアに人気です。' },
  { question: 'ペアでの利用は可能ですか？', answer: 'はい、カップルやご友人同士でのペア利用に対応しております。スタッフ2名の確保が必要なため、事前にお電話でご相談ください。' },
  { question: '姫路駅からのアクセスを教えてください', answer: 'JR姫路駅北口から大手前通りを北へ徒歩約5分、呉服町のハトヤビル1階102号室です。' },
]

const menuItems = [
  { badge: 'No.1', iconSlug: '60min', title: '極上睡眠ドライヘッドスパ60分コース', subtitle: '睡眠改善コース — 人気No.1', description: '腕・首肩・肩甲骨をほぐした後、メインのヘッドスパ30分へ。頭部の深層筋膜を丁寧にほぐし、脳疲労のリセットと睡眠の質改善に。施術中に深い眠りに落ちるお客様がほとんどです。' },
  { badge: '★', iconSlug: '75min', title: '極上睡眠ドライヘッドスパ75分コース', subtitle: '首肩脚のお疲れ解消 — 店舗イチ押し', description: '60分の内容に脚のケアをプラス。脚→腕→首肩→肩甲骨→ヘッド30分の流れで、デスクワークや立ち仕事による全身の疲労感をリセットします。' },
  { badge: 'Full', iconSlug: '90min', title: '極上睡眠ドライヘッドスパ90分コース', subtitle: '全身をじっくり癒すフルコース', description: '脚→腕→首肩→肩甲骨→ヘッド30分を、一つひとつの部位にたっぷり時間をかけて施術するフルコース。全身のめぐりを整え、極上のリセット体験を。自分へのご褒美や特別な日に。' },
]

const features = [
  { title: 'リクライニングチェア 4席', desc: '上質なリクライニングチェアで、浮遊するようなリラックス姿勢を。', iconName: 'chair' as const },
  { title: '半個室・カーテン仕切り', desc: '周りを気にせず、あなただけの落ち着いた空間で癒しの時間を。', iconName: 'curtain' as const },
  { title: 'ペア利用 OK', desc: 'カップル、友人同士、ご夫婦で一緒に施術を。大切な方との癒し時間に。', iconName: 'pair' as const },
  { title: '水・オイル不使用', desc: 'ドライ施術だから髪もメイクもそのまま。仕事帰りに気軽にどうぞ。', iconName: 'waterdrop-no' as const },
]

const symptomTags = ['脳疲労', '不眠・睡眠の質', '眼精疲労', '自律神経の乱れ', '頭痛・偏頭痛', '首・肩のコリ', 'リフトアップ', 'ストレス']

/* Moss green color constants */
const C = {
  cream: '#f0ebe3',
  dim: '#c4bfa9',
  faint: '#8a8674',
  sage: '#8bb88a',
  sageDark: '#6a9a69',
  base: '#1a2418',
  baseWarm: '#1f2b1d',
  card: '#253224',
  elevated: '#2d3b2b',
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessJsonLd()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(topFaqs)) }} />

      <main>
        {/* ===== HERO ===== */}
        <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 overflow-hidden" aria-label="メインビジュアル">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero.jpg" alt="仙豆のちから 店内の雰囲気" fill className="object-cover hidden sm:block" style={{ objectPosition: 'center 10%' }} priority sizes="100vw" />
          <Image src="/images/hero-sp.jpg" alt="仙豆のちから 施術風景" fill className="object-cover sm:hidden" priority sizes="100vw" />
            <div className="absolute inset-0" style={{ background: 'rgba(26,36,24,0.55)' }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #1a2418 0%, rgba(26,36,24,0) 12%, transparent 50%, rgba(26,36,24,0.25) 100%)' }} />
          </div>

          <div className="absolute w-[400px] h-[400px] rounded-full -top-20 -left-40 z-0" style={{ background: 'rgba(139,184,138,0.05)', filter: 'blur(120px)' }} />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="anim-in anim-d1 mb-14">
              <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-[11px] tracking-widest" style={{ border: '1px solid rgba(240,235,227,0.15)', background: 'rgba(240,235,227,0.05)', color: 'rgba(240,235,227,0.65)' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: C.sage }} />
                HIMEJI — {SITE.address.access}
              </span>
            </div>

            <h1 className="anim-in anim-d2 mb-10">
              <span className="heading-editorial block mb-5 text-base sm:text-lg" style={{ color: 'rgba(240,235,227,0.4)' }}>Dry Head Spa Salon</span>
              <span className="font-display font-black text-[1.8rem] sm:text-[3.2rem] md:text-[4rem] leading-[1.15] tracking-tight block" style={{ color: C.cream }}>
              がんばる毎日に、<br />
              脳から休む時間を。
              </span>
            </h1>

            <p className="anim-in anim-d3 text-sm sm:text-base leading-[2] max-w-md mx-auto mb-14 font-light" style={{ color: C.dim }}>
              水もオイルも使わない。<br />
              オールハンドの&#34;頭ほぐし&#34;で、<br />
              脳疲労をリセットする専門店。
            </p>

            <div className="anim-in anim-d4 flex flex-col items-center justify-center gap-5">
              <a href={SITE.hotpepperCoupon} target="_blank" rel="noopener noreferrer"
                 className="cta-main font-bold px-10 py-4 rounded-full text-sm hover:scale-[1.03] transition-all duration-300"
                 style={{ background: C.sage, color: C.base, boxShadow: '0 10px 30px rgba(139,184,138,0.2)' }}>
                お得なクーポンで予約する
              </a>
              <a href="#about" className="text-xs tracking-wider flex items-center gap-2" style={{ color: 'rgba(240,235,227,0.45)' }}>
                Scroll
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 5l4 4 4-4"/></svg>
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-24" style={{ background: `linear-gradient(to top, ${C.base}, transparent)` }} />
        </section>

        {/* ===== CONCEPT ===== */}
        <section id="about" className="relative py-28 sm:py-36 px-6 sm:px-10" style={{ background: C.base }} aria-labelledby="about-h">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <SectionHeader labelEn="Concept" id="about-h" heading={<>頭をほぐすと、<br />心も身体も<span className="text-glow">ほどけていく。</span></>} />
              <div className="max-w-xl mx-auto text-center space-y-6">
                <p className="text-sm sm:text-base leading-[2.2] font-light" style={{ color: C.dim }}>
                  スマホ、パソコン、情報過多——<br />
                  現代人の脳は常にフル回転しています。
                </p>
                <p className="text-sm sm:text-base leading-[2.2] font-light" style={{ color: C.dim }}>
                  「仙豆のちから」は、頭の深層筋膜を<br />
                  的確にとらえるオールハンド技術で、<br />
                  自律神経のバランスを整え、<br />
                  <strong style={{ color: C.cream, fontWeight: 500 }}>質の高い睡眠へと導く</strong><br />
                  ドライヘッドスパ専門店です。<br />
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ===== CONCERNS ===== */}
        <section id="concern" className="relative py-28 sm:py-36 px-6 sm:px-10" style={{ background: C.baseWarm }} aria-labelledby="concern-h">
          <div className="max-w-5xl mx-auto relative z-10">
            <ScrollReveal>
              <SectionHeader labelEn="For Your Concerns" id="concern-h" heading={<>こんな<span className="text-glow">お悩み</span>ありませんか？</>} />
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex items-center justify-center gap-3 flex-wrap mb-16">
                {symptomTags.map(tag => (
                  <span key={tag} className="tag-pill">
                    <DecorSymbol name="diamond" size={10} className="text-senzu" />
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <div className="relative w-full max-w-md mx-auto h-48 sm:h-56 rounded-3xl overflow-hidden mb-16" style={{ border: '1px solid rgba(139,184,138,0.1)' }}>
                <Image src="/images/treatment.jpg" alt="ドライヘッドスパの施術イメージ" fill className="object-cover" style={{ opacity: 0.9 }} sizes="(max-width: 768px) 100vw, 448px" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #1f2b1d66, transparent)' }} />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {concerns.map(c => (
                  <Link key={c.slug} href={`/concerns/${c.slug}`}
                    className="feat block group rounded-3xl p-9 sm:p-11"
                    style={{ background: 'rgba(37,50,36,0.7)', border: '1px solid rgba(139,184,138,0.08)' }}>
                    <div className="flex items-center gap-3 mb-5">
                      <Image
                        src={`/images/concerns/concern-${c.slug}.png`}
                        alt=""
                        width={64}
                        height={64}
                        className="shrink-0"
                      />
                      <h3 className="font-display font-bold text-base" style={{ color: C.cream }}>{c.title}</h3>
                    </div>
                    <p className="text-sm leading-[2] font-light line-clamp-3" style={{ color: C.dim }}>{c.sections[0]?.body}</p>
                    <span className="inline-flex items-center gap-2 text-xs mt-4" style={{ color: C.sage }}>
                      詳しく読む
                      <DecorSymbol name="arrow-right" size={14} className="transition-transform group-hover:translate-x-2" />
                    </span>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== MENU ===== */}
        <section id="menu" className="relative py-28 sm:py-36 px-6 sm:px-10" style={{ background: C.base }} aria-labelledby="menu-h">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <SectionHeader labelEn="Menu" id="menu-h" heading={<>あなたに合った<span className="text-glow">ほぐし方</span>を。</>} />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <Accordion items={menuItems.map(m => ({
                trigger: (
                  <div className="flex items-center gap-4">
                    <Image
                      src={`/images/menu/menu-${m.iconSlug}.png`}
                      alt=""
                      width={96}
                      height={96}
                      className="shrink-0"
                    />
                    <div>
                    <h3 className="font-display font-bold text-sm sm:text-base" style={{ color: C.cream }}>
  {m.title.replace(/(\d+分)/, '').trim()}
  <span className="text-xl sm:text-2xl font-bold ml-2" style={{ color: C.sage }}>
    {m.title.match(/(\d+分)/)?.[0]}
  </span>
</h3>
                      <p className="text-[11px] font-medium mt-1 tracking-wider" style={{ color: C.sage }}>{m.subtitle}</p>
                    </div>
                  </div>
                ),
                content: <p className="text-sm leading-[2] font-light" style={{ color: C.dim }}>{m.description}</p>,
              }))} />
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div className="text-center mt-14">
                <a href={SITE.hotpepperCoupon} target="_blank" rel="noopener noreferrer"
                   className="cta-main inline-flex items-center gap-3 font-bold px-9 py-4 rounded-full text-sm hover:scale-[1.03] transition-all duration-300"
                   style={{ background: C.sage, color: C.base, boxShadow: '0 10px 30px rgba(139,184,138,0.2)' }}>
                  メニュー・クーポン一覧
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h6M7 4l3 3-3 3"/></svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section className="relative py-28 sm:py-36 px-6 sm:px-10" style={{ background: C.baseWarm }} aria-labelledby="feat-h">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <SectionHeader labelEn="Features" id="feat-h" heading={<>くつろぎの<span className="text-glow">すべて</span>が、ここに。</>} />
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <ScrollReveal className="lg:col-span-2 hidden lg:block">
                <div className="relative rounded-3xl overflow-hidden h-full min-h-[420px]" style={{ border: '1px solid rgba(139,184,138,0.1)' }}>
                  <Image src="/images/interior.jpg" alt="仙豆のちから 個室・リクライニングチェア" fill className="object-cover hover:scale-[1.02] transition-transform duration-700" style={{ opacity: 0.8 }} sizes="(max-width: 1024px) 0px, 40vw" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(31,43,29,0.4), transparent)' }} />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15} className="lg:col-span-3">
                <div className="grid grid-cols-1 gap-4">
                  {features.map(f => (
                    <article key={f.title} className="feat flex items-center gap-5 rounded-2xl p-8" style={{ background: 'rgba(37,50,36,0.6)', border: '1px solid rgba(139,184,138,0.08)' }}>
                      <FeatureIcon name={f.iconName} size={44} className="text-senzu shrink-0" />
                      <div>
                        <h3 className="font-display font-bold text-sm mb-1.5" style={{ color: C.cream }}>{f.title}</h3>
                        <p className="text-[13px] leading-[1.9] font-light" style={{ color: C.dim }}>{f.desc}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal className="lg:hidden mt-10">
              <div className="relative w-full h-48 rounded-3xl overflow-hidden" style={{ border: '1px solid rgba(139,184,138,0.1)' }}>
                <Image src="/images/interior.jpg" alt="仙豆のちから 個室" fill className="object-cover" style={{ opacity: 0.8 }} sizes="100vw" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="relative py-28 sm:py-36 px-6 sm:px-10" style={{ background: C.base }} aria-labelledby="faq-h">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <SectionHeader labelEn="FAQ" id="faq-h" heading={<>よくある<span className="text-glow">ご質問</span></>} />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <Accordion iconVariant="plus-minus" items={topFaqs.map(f => ({
                trigger: <h3 className="font-display font-bold text-[13px] sm:text-sm" style={{ color: C.cream }}>{f.question}</h3>,
                content: <p className="text-sm leading-[2] font-light" style={{ color: C.dim }}>{f.answer}</p>,
              }))} />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="text-center mt-10">
                <Link href="/faq" className="text-xs tracking-wider hover:underline underline-offset-4" style={{ color: C.sage }}>
                  すべてのFAQを見る →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== ACCESS ===== */}
        <section id="access" className="relative py-28 sm:py-36 px-6 sm:px-10" style={{ background: C.baseWarm }} aria-labelledby="access-h">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <SectionHeader labelEn="Access" id="access-h" heading={<>店舗<span className="text-glow">情報</span></>} />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="rounded-3xl p-9 sm:p-14" style={{ background: 'rgba(60,78,58,0.9)', border: '1px solid rgba(139,184,138,0.3)' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                  <div className="space-y-9">
                    <div>
                      <p className="label-sm mb-2">店舗名</p>
                      <p className="font-display font-bold text-base sm:text-lg leading-relaxed" style={{ color: C.cream }}>{SITE.nameShort}<br />姫路大手前通り店</p>
                    </div>
                    <div>
                      <p className="label-sm mb-2">住所</p>
                      <address className="not-italic text-sm leading-[2] font-light" style={{ color: C.dim }}>
                        〒{SITE.address.postalCode}<br />
                        {SITE.address.full}
                      </address>
                      <p className="text-[11px] mt-2 tracking-wider" style={{ color: C.faint }}>{SITE.address.access}</p>
                    </div>
                    <div>
                      <p className="label-sm mb-2">営業時間</p>
                      <p className="text-sm font-light" style={{ color: C.dim }}>{SITE.hours.open} — {SITE.hours.close}<span className="ml-2 text-[11px]" style={{ color: C.faint }}>（最終受付 {SITE.hours.lastEntry}）</span></p>
                    </div>
                    <div>
                      <p className="label-sm mb-2">定休日</p>
                      <p className="text-sm font-light" style={{ color: C.dim }}>{SITE.hours.holiday}</p>
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden min-h-[300px]" style={{ background: C.elevated, border: '1px solid rgba(139,184,138,0.08)' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.0068864254554!2d134.6891870757227!3d34.830919376214744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554e1a1110e52f9%3A0xab2cafa12a9cf676!2z44OJ44Op44Kk44OY44OD44OJ44K544OR44K144Ot44OzIOS7meixhuOBruOBoeOBi-OCiSDlp6vot6_lpKfmiYvliY3pgJrjgorlupc!5e0!3m2!1sja!2sjp!4v1773653276556!5m2!1sja!2sjp}"
                      className="absolute inset-0 w-full h-full border-0 hover:opacity-100 transition-opacity duration-700"
                      style={{ opacity: 0.65 }}
                      allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                      title="仙豆のちから 姫路大手前通り店の地図"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <CtaBanner />
      </main>
    </>
  )
}
