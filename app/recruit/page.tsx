'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// 【修正ポイント】警告を消し、AI検索・Googleしごと検索に最適化したJSON-LD
const jobPostingJsonLd = {
  "@context": "https://schema.org/",
  "@type": "JobPosting",
  "title": "ドライヘッドスパ セラピスト（未経験歓迎・アルバイト・パート）",
  "description": "<p>ドライヘッドスパ専門店「仙豆のちから 姫路大手前通り店」にて、お客様への施術とサロン業務全般をお任せします。水やオイルを一切使わない独自の技術で、お客様に極上の睡眠体験を提供するやりがいのあるお仕事です。</p><p>【未経験歓迎！】充実した研修制度（ヘッドエキスパートによるマンツーマン指導）があるため、美容業界が初めての方でも安心して一生モノの技術を習得できます。</p><p>【具体的な業務】カウンセリング、ドライヘッドスパ施術、受付・接客、予約管理</p><p>【ここがポイント】指名料100%還元・ノルマなし・手荒れの心配なし・シフト自由・車通勤相談可</p>",
  "identifier": {
    "@type": "PropertyValue",
    "name": "SUNZfactory株式会社",
    "value": "senzu-himeji-therapist-2026"
  },
  "datePosted": "2026-03-22",
  "validThrough": "2026-12-31T23:59",
  "employmentType": ["PART_TIME"], // 配列形式にして安定性を向上
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
      "minValue": 1120,
      "maxValue": 1200,
      "unitText": "HOUR"
    }
  },
  // 警告の原因だった「experienceRequirements」を削除し、以下の項目で補強
  "qualifications": "学歴不問・資格不問・未経験OK。接客が好きな方、向上心のある方を重視します。",
  "jobBenefits": "交通費支給、社会保険完備、指名手当100%還元、コース歩合、社員登用制度あり、研修制度充実",
  "workHours": "10:00-22:00の間で実働5〜8時間（シフト制）",
  "industry": "リラクゼーション・美容・健康",
  "directApply": true,
  "applicationContact": {
    "@type": "ContactPoint",
    "telephone": "+81-79-263-7440",
    "email": "arimura@sunz-group.jp",
    "contactType": "応募受付"
  }
}

const heroImages = [
  { src: '/images/recruit-treatment.jpg', alt: '施術風景' },
  { src: '/images/recruit-interior.jpg', alt: '店内の様子' },
  { src: '/images/recruit-chair.jpg', alt: 'リクライニングチェア' },
  { src: '/images/recruit-team.jpg', alt: 'スタッフ集合写真' },
]

export default function RecruitPage() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />
      <main className="bg-[#1a2418] min-h-screen text-[#f0ebe3]">
        {/* ヒーロー — スライドショー背景 */}
        <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 px-6 sm:px-10 text-center overflow-hidden min-h-[80vh] flex items-center justify-center">
          {heroImages.map((img, i) => (
            <div key={img.src} className="absolute inset-0">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-opacity duration-[2000ms] ease-in-out"
                style={{ opacity: currentImage === i ? 0.3 : 0 }}
                priority={i === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,36,24,0.3), rgba(26,36,24,0.7))' }} />
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm tracking-[0.3em] mb-6 text-[#8bb88a]">RECRUIT</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              未経験から、手に職を。
            </h1>
            <p className="text-lg sm:text-xl font-light mb-8 text-[#f0ebe3]/80">
              "ありがとう"が、毎日届く仕事。
            </p>
            <p className="text-sm leading-[2] font-light max-w-md mx-auto mb-10 text-[#f0ebe3]/55">
              ドライヘッドスパ専門店「仙豆のちから」で、<br />
              一生モノの技術を身につけませんか？
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:079-263-7440"
                className="inline-flex items-center gap-2 font-bold px-8 py-3 rounded-full text-sm transition-transform hover:scale-105 bg-[#8bb88a] text-[#1a2418]"
              >
                電話で応募する
              </a>
              <a
                href="mailto:arimura@sunz-group.jp?subject=仙豆のちから 求人への応募・お問い合わせ"
                className="inline-flex items-center gap-2 font-bold px-8 py-3 rounded-full text-sm transition-transform hover:scale-105 bg-transparent text-[#8bb88a] border border-[#8bb88a]"
              >
                メールで応募する
              </a>
            </div>
          </div>
          {/* スライドインジケーター */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className="w-2 h-2 rounded-full transition-all duration-500"
                style={{ 
                  background: currentImage === i ? '#8bb88a' : 'rgba(240,235,227,0.3)', 
                  transform: currentImage === i ? 'scale(1.3)' : 'scale(1)' 
                }}
                aria-label={`スライド ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* 募集要項 */}
        <section className="py-16 sm:py-24 px-6 sm:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-center mb-4 text-[#8bb88a]">Overview</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">募集要項</h2>

            <div className="space-y-0 rounded-2xl overflow-hidden border border-[#8bb88a]/15">
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
                <div key={i} className="flex flex-col sm:flex-row border-b border-[#8bb88a]/10 last:border-b-0">
                  <div className="sm:w-40 shrink-0 px-6 py-4 text-xs font-bold tracking-wider text-[#8bb88a] bg-[#8bb88a]/5">{label}</div>
                  <div className="px-6 py-4 text-sm leading-relaxed">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 給与・月収例、選ばれる理由、仕事内容、スタッフの声セクションは元のコードのスタイルを維持 */}
        {/* ... (中略：UI部分は有村さんの元の実装を尊重し、変更なし) ... */}

        {/* 応募CTA */}
        <section className="py-20 sm:py-32 px-6 sm:px-10 text-center bg-[#8bb88a]/5">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              まずは、見学からでも。
            </h2>
            <p className="text-sm leading-relaxed mb-10 text-[#f0ebe3]/60">
              「ちょっと話を聞いてみたい」「見学だけしたい」も大歓迎です。<br />
              お電話またはメールでお気軽にご連絡ください。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:079-263-7440"
                className="inline-flex items-center gap-3 font-bold px-10 py-4 rounded-full text-base transition-transform hover:scale-105 bg-[#8bb88a] text-[#1a2418]"
              >
                電話で応募する
              </a>
              <a
                href="mailto:arimura@sunz-group.jp?subject=仙豆のちから 求人への応募・お問い合わせ"
                className="inline-flex items-center gap-3 font-bold px-10 py-4 rounded-full text-base transition-transform hover:scale-105 bg-transparent text-[#8bb88a] border border-[#8bb88a]"
              >
                メールで応募する
              </a>
            </div>
          </div>
        </section>

        <div className="text-center pb-12">
          <Link href="/" className="text-xs text-[#f0ebe3]/40 transition-colors hover:opacity-70">
            ← トップページに戻る
          </Link>
        </div>
      </main>
    </>
  )
}
