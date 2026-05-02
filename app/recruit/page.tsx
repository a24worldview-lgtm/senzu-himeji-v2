import type { Metadata } from 'next'
import { SITE } from '@/lib/site'
import RecruitClient from './RecruitClient'

export const metadata: Metadata = {
  title: '採用情報｜ドライヘッドスパ セラピスト募集',
  description: `${SITE.name}のセラピスト求人。未経験OK・指名料100%還元・手荒れなし・シフト自由。時給1,120円〜＋インセンティブ。姫路駅徒歩5分。`,
  alternates: { canonical: '/recruit' },
  openGraph: {
    title: `採用情報｜ドライヘッドスパ セラピスト募集｜${SITE.nameShort}`,
    description: '未経験OK・指名料100%還元・手荒れなし・シフト自由。時給1,120円〜＋インセンティブ。',
    url: `${SITE.url}/recruit`,
    type: 'website',
  },
}

const jobPostingJsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'JobPosting',
  title: 'ドライヘッドスパ セラピスト（アルバイト・パート）',
  description:
    '<p>【5月】新生活の疲れがたまるこの時期、「ぐっすり眠れない」「首や肩がずっと重い」と感じている方が増えています。そんなお客様の不調に寄り添えるのが、ドライヘッドスパの技術です。未経験から始められる環境で、一生モノのスキルを身につけませんか？</p><p>ドライヘッドスパ専門店「仙豆のちから 姫路大手前通り店」にて、お客様への施術とサロン業務全般をお任せします。水やオイルを一切使わない独自の技術で、お客様に極上の睡眠体験を提供するやりがいのあるお仕事です。</p><p>【具体的な業務】カウンセリング、ドライヘッドスパ施術、受付・接客、予約管理</p><p>【ここがポイント】未経験OK・研修充実・指名料100%還元・ノルマなし・手荒れの心配なし・シフト自由</p>',
  identifier: {
    '@type': 'PropertyValue',
    name: 'SUNZfactory株式会社',
    value: 'senzu-himeji-therapist-2026',
  },
  datePosted: '2026-05-02',
  validThrough: '2026-12-31T23:59',
  employmentType: 'PART_TIME',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'SUNZfactory株式会社',
    sameAs: SITE.url,
    logo: `${SITE.url}/images/logo.png`,
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '呉服町48番地 ハトヤビル1階 102',
      addressLocality: '姫路市',
      addressRegion: '兵庫県',
      postalCode: '670-0923',
      addressCountry: 'JP',
    },
  },
  baseSalary: {
    '@type': 'MonetaryAmount',
    currency: 'JPY',
    value: {
      '@type': 'QuantitativeValue',
      value: 1120,
      minValue: 1120,
      maxValue: 1200,
      unitText: 'HOUR',
    },
  },
  workHours: '10:00-22:00の間で実働5〜8時間（シフト制）',
  jobBenefits: '交通費支給、社会保険完備、指名手当100%還元、コース歩合、社員登用制度あり、研修制度充実',
  qualifications: '学歴不問・資格不問・未経験OK',
  skills: '接客が好きな方、向上心のある方、人柄重視',
  industry: 'リラクゼーション・美容・健康',
  directApply: true,
  applicationContact: {
    '@type': 'ContactPoint',
    telephone: '+81-79-263-7440',
    email: 'arimura@sunz-group.jp',
    contactType: '応募受付',
  },
}

export default function RecruitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />
      <RecruitClient />
    </>
  )
}
