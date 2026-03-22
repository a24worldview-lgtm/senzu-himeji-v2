import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: '採用情報｜ドライヘッドスパ セラピスト募集',
  description: '仙豆のちから 姫路大手前通り店では、ドライヘッドスパのセラピストを募集しています。未経験OK・研修充実・指名料100%還元。姫路駅徒歩5分。',
  alternates: { canonical: '/recruit' },
}

const jobPostingJsonLd = {
  "@context": "https://schema.org/",
  "@type": "JobPosting",
  "title": "ドライヘッドスパ セラピスト（アルバイト・パート）",
  "description": "<p>ドライヘッドスパ専門店「仙豆のちから 姫路大手前通り店」にて、お客様への施術とサロン業務全般をお任せします。水やオイルを一切使わない独自の技術で、お客様に極上の睡眠体験を提供するやりがいのあるお仕事です。</p><p>【具体的な業務】カウンセリング、ドライヘッドスパ施術、受付・接客、予約管理</p><p>【ここがポイント】未経験OK・研修充実・指名料100%還元・ノルマなし・手荒れの心配なし・シフト自由</p>",
  "identifier": {
    "@type": "PropertyValue",
    "name": "SUNZfactory株式会社",
    "value": "senzu-himeji-therapist-2026"
  },
  "datePosted": "2026-03-22",
  "validThrough": "2026-12-31T23:59",
  "employmentType": "PART_TIME",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "SUNZfactory株式会社",
    "sameAs": "https://senzu-himeji.com",
    "logo": "https://senzu-himeji.com/images/logo.png"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "呉服町48番地 ハトヤビル1階 102",
      "addressLocality": "姫路市",
      "addressRegion": "兵庫県",
      "postalCode": "670-0923",
      "addressCountry": "JP"
    }
  },
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "JPY",
    "value": {
      "@type": "QuantitativeValue",
      "value": 1120,
      "minValue": 1120,
      "maxValue": 1200,
      "unitText": "HOUR"
    }
  },
  "workHours": "10:00-22:00の間で実働5〜8時間（シフト制）",
  "jobBenefits": "交通費支給、社会保険完備、指名手当100%還元、コース歩合、社員登用制度あり、研修制度充実",
  "qualifications": "学歴不問・資格不問・未経験OK",
  "experienceRequirements": "経験不問（未経験歓迎）",
  "skills": "接客が好きな方、向上心のある方、人柄重視",
  "industry": "リラクゼーション・美容・健康",
  "directApply": true,
  "applicationContact": {
    "@type": "ContactPoint",
    "telephone": "+81-79-263-7440",
    "email": "arimura@sunz-group.jp",
    "contactType": "応募受付"
  }
}

export default function RecruitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />
      <main>
        {/* ヒーロー — 施術写真を背景に */}
        <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 px-6 sm:px-10 text-center overflow-hidden">
          <Image
            src="/images/recruit-treatment.jpg"
            alt="施術風景"
            fill
            className="object-cover"
            style={{ opacity: 0.25 }}
            priority
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm tracking-[0.3em] mb-6" style={{ color: '#8bb88a' }}>RECRUIT</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: '#f0ebe3' }}>
              未経験から、手に職を。
            </h1>
            <p className="text-lg sm:text-xl font-light mb-8" style={{ color: 'rgba(240,235,227,0.75)' }}>
              "ありがとう"が、毎日届く仕事。
            </p>
            <p className="text-sm leading-[2] font-light max-w-md mx-auto" style={{ color: 'rgba(240,235,227,0.55)' }}>
              ドライヘッドスパ専門店「仙豆のちから」で、<br />
              一生モノの技術を身につけませんか？
            </p>
          </div>
        </section>

        {/* 店内の雰囲気 — 写真ギャラリー */}
        <section className="py-16 sm:py-24 px-6 sm:px-10">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-center mb-4" style={{ color: '#8bb88a' }}>Gallery</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12" style={{ color: '#f0ebe3' }}>働く環境</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="col-span-2 sm:col-span-2 relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image src="/images/recruit-interior.jpg" alt="店内の様子" fill className="object-cover" />
              </div>
              <div className="relative aspect-square sm:aspect-[3/4] rounded-xl overflow-hidden">
                <Image src="/images/recruit-chair.jpg" alt="リクライニングチェア" fill className="object-cover" />
              </div>
              <div className="col-span-2 sm:col-span-3 relative aspect-[21/9] rounded-xl overflow-hidden">
                <Image src="/images/recruit-team.jpg" alt="スタッフ集合写真" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* 募集要項 */}
        <section className="py-16 sm:py-24 px-6 sm:px-10" style={{ background: 'rgba(139,184,138,0.03)' }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-center mb-4" style={{ color: '#8bb88a' }}>Overview</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12" style={{ color: '#f0ebe3' }}>募集要項</h2>

            <div className="space-y-0 rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(139,184,138,0.15)' }}>
              {[
                ['募集職種', 'ドライヘッドスパ セラピスト'],
                ['雇用形態', 'アルバイト・パート（社員登用制度あり）'],
                ['給与', '時給 1,120円〜1,200円 ＋ 各種インセンティブ'],
                ['勤務時間', '10:00〜22:00の間でシフト制（実働5〜8時間）'],
                ['休日', '週休2日制（シフト制）/ 週3日休みも可能'],
                ['勤務地', '兵庫県姫路市呉服町48番地 ハトヤビル1階 102'],
                ['アクセス', 'JR姫路駅 北口より徒歩5分'],
                ['応募資格', '学歴不問・資格不問・未経験OK'],
                ['待遇', '交通費支給 / 社会保険完備 / 研修制度 / 有給休暇'],
              ].map(([label, value], i) => (
                <div key={i} className="flex flex-col sm:flex-row" style={{ borderBottom: i < 8 ? '1px solid rgba(139,184,138,0.1)' : 'none' }}>
                  <div className="sm:w-40 shrink-0 px-6 py-4 text-xs font-bold tracking-wider" style={{ color: '#8bb88a', background: 'rgba(139,184,138,0.05)' }}>{label}</div>
                  <div className="px-6 py-4 text-sm leading-relaxed" style={{ color: '#f0ebe3' }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 給与・月収例 */}
        <section className="py-16 sm:py-24 px-6 sm:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-center mb-4" style={{ color: '#8bb88a' }}>Salary</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4" style={{ color: '#f0ebe3' }}>がんばった分だけ、還元される。</h2>
            <p className="text-sm text-center mb-12 leading-relaxed" style={{ color: 'rgba(240,235,227,0.65)' }}>
              指名料100%還元＋コース歩合。<br />社歴ではなく、お客様に選ばれた分だけ収入が増える仕組みです。
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { pattern: '家庭と両立', days: '週3日 / 短時間', income: '約77,200円', detail: '時給1,120円×5h×月12日 ＋ インセンティブ', accent: false },
                { pattern: 'レギュラー勤務', days: '週4日 / 中時間', income: '約138,440円', detail: '時給1,120円×7h×月16日 ＋ インセンティブ', accent: false },
                { pattern: 'フルタイム', days: '週5日', income: '約237,120円', detail: '時給1,120円×8h×月22日 ＋ インセンティブ', accent: true },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl p-6 text-center" style={{ background: item.accent ? 'rgba(139,184,138,0.1)' : 'rgba(26,36,24,0.5)', border: item.accent ? '1px solid rgba(139,184,138,0.3)' : '1px solid rgba(139,184,138,0.1)' }}>
                  <p className="text-xs font-bold tracking-wider mb-1" style={{ color: '#8bb88a' }}>{item.pattern}</p>
                  <p className="text-xs mb-4" style={{ color: 'rgba(240,235,227,0.5)' }}>{item.days}</p>
                  <p className="text-2xl font-bold mb-2" style={{ color: '#f0ebe3' }}>月収 {item.income}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(240,235,227,0.5)' }}>＋ 交通費</p>
                  <p className="text-xs mt-3 leading-relaxed" style={{ color: 'rgba(240,235,227,0.45)' }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 選ばれる理由 */}
        <section className="py-16 sm:py-24 px-6 sm:px-10" style={{ background: 'rgba(139,184,138,0.03)' }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-center mb-4" style={{ color: '#8bb88a' }}>Why Choose Us</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12" style={{ color: '#f0ebe3' }}>仙豆のちからで働く理由</h2>

            <div className="grid gap-8 sm:grid-cols-2">
              {[
                { title: '指名料 100%還元', desc: '指名をいただいた分は全額スタッフに支給。頑張りがそのまま収入に反映されます。' },
                { title: '手荒れの心配なし', desc: '水やオイルを一切使わないドライ施術。力任せの施術もないので、身体への負担が少ない。' },
                { title: '未経験から一生モノの技術を', desc: 'ヘッドエキスパートがマンツーマンで指導。どこでも通用する専門技術を無料で習得できます。' },
                { title: 'ノルマなし', desc: '数字に追われるストレスなく、目の前のお客様に集中できる環境です。' },
                { title: 'シフト自由', desc: '家庭の事情や趣味の時間を大切にしながら、柔軟に働けます。週3日〜OK。' },
                { title: '社員登用あり', desc: 'アルバイトからスタートして、正社員を目指すことも可能です。' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(139,184,138,0.15)', color: '#8bb88a' }}>{i + 1}</div>
                  <div>
                    <h3 className="text-base font-bold mb-2" style={{ color: '#f0ebe3' }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,235,227,0.6)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 仕事内容 */}
        <section className="py-16 sm:py-24 px-6 sm:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-center mb-4" style={{ color: '#8bb88a' }}>Work</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12" style={{ color: '#f0ebe3' }}>お仕事内容</h2>

            <div className="space-y-6">
              {[
                { step: 'カウンセリング', desc: 'お客様のお悩み（疲れや睡眠の質など）をヒアリング。一人ひとりに合った施術プランをご提案します。' },
                { step: '施術', desc: '頭や首周りの筋肉をじっくりほぐす、独自のドライヘッドスパ。水やオイルを使わないオールハンドの技術です。' },
                { step: '受付・接客', desc: '予約管理やお会計、次回のご案内など。お客様に心地よく過ごしていただくためのサロンワーク全般。' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start rounded-xl p-6" style={{ background: 'rgba(26,36,24,0.5)', border: '1px solid rgba(139,184,138,0.1)' }}>
                  <div className="shrink-0 text-3xl font-bold" style={{ color: 'rgba(139,184,138,0.2)' }}>0{i + 1}</div>
                  <div>
                    <h3 className="text-base font-bold mb-2" style={{ color: '#f0ebe3' }}>{item.step}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,235,227,0.6)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* スタッフの声 */}
        <section className="py-16 sm:py-24 px-6 sm:px-10" style={{ background: 'rgba(139,184,138,0.03)' }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-center mb-4" style={{ color: '#8bb88a' }}>Voice</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12" style={{ color: '#f0ebe3' }}>スタッフの声</h2>

            <div className="space-y-6">
              <div className="rounded-2xl p-6 sm:p-8" style={{ background: 'rgba(26,36,24,0.5)', border: '1px solid rgba(139,184,138,0.1)' }}>
                <p className="text-sm leading-[2] mb-4" style={{ color: 'rgba(240,235,227,0.75)' }}>
                  「未経験で入社しましたが、研修で丁寧に教えてもらえたので安心でした。お客様が施術中に寝てしまうほどリラックスしてくれると、本当にやりがいを感じます。手荒れの心配がないのも、長く続けられる理由です。」
                </p>
                <p className="text-xs" style={{ color: '#8bb88a' }}>— 20代スタッフ・入社2年目</p>
              </div>
              <div className="rounded-2xl p-6 sm:p-8" style={{ background: 'rgba(26,36,24,0.5)', border: '1px solid rgba(139,184,138,0.1)' }}>
                <p className="text-sm leading-[2] mb-4" style={{ color: 'rgba(240,235,227,0.75)' }}>
                  「子どもの学校行事に合わせてシフトを調整できるので、家庭との両立がしやすいです。指名をいただけるようになると収入も上がるので、モチベーションになっています。」
                </p>
                <p className="text-xs" style={{ color: '#8bb88a' }}>— 30代スタッフ・入社3年目</p>
              </div>
            </div>
            <p className="text-xs text-center mt-6" style={{ color: 'rgba(240,235,227,0.3)' }}>※スタッフの声は実際の感想を元に構成しています</p>
          </div>
        </section>

        {/* 応募CTA */}
        <section className="py-20 sm:py-32 px-6 sm:px-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#f0ebe3' }}>
              まずは、見学からでも。
            </h2>
            <p className="text-sm leading-relaxed mb-10" style={{ color: 'rgba(240,235,227,0.6)' }}>
              「ちょっと話を聞いてみたい」「見学だけしたい」も大歓迎です。<br />
              お電話またはメールでお気軽にご連絡ください。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:079-263-7440"
                className="inline-flex items-center gap-3 font-bold px-10 py-4 rounded-full text-base transition-transform hover:scale-105"
                style={{ background: '#8bb88a', color: '#1a2418' }}
              >
                電話で応募する
              </a>
              <a
                href="mailto:arimura@sunz-group.jp?subject=仙豆のちから 求人への応募・お問い合わせ"
                className="inline-flex items-center gap-3 font-bold px-10 py-4 rounded-full text-base transition-transform hover:scale-105"
                style={{ background: 'transparent', color: '#8bb88a', border: '1px solid #8bb88a' }}
              >
                メールで応募する
              </a>
            </div>
            <p className="mt-6 text-xs" style={{ color: 'rgba(240,235,227,0.4)' }}>
              TEL: 079-263-7440（店舗直通）
            </p>
            <p className="mt-1 text-xs" style={{ color: 'rgba(240,235,227,0.4)' }}>
              MAIL: arimura@sunz-group.jp
            </p>
          </div>
        </section>

        {/* トップに戻る */}
        <div className="text-center pb-12">
          <Link href="/" className="text-xs transition-colors hover:opacity-70" style={{ color: 'rgba(240,235,227,0.4)' }}>
            ← トップページに戻る
          </Link>
        </div>
      </main>
    </>
  )
}
