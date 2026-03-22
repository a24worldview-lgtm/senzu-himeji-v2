import { SITE } from './site'
import type { ConcernData } from './concerns'

// ===== LocalBusiness (トップページ用) =====
export function generateLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    alternateName: 'センズノチカラ ヒメジオオテマエドオリテン',
    description: SITE.description,
    url: SITE.url,
    telephone: '079-263-7440',
    image: ['https://senzu-himeji.com/images/ogp.jpg'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: SITE.hours.open,
      closes: SITE.hours.close,
    },
    priceRange: '¥¥',
    currenciesAccepted: 'JPY',
    areaServed: { '@type': 'City', name: SITE.address.city },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: '半個室（カーテン仕切り）', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'リクライニングチェア4席', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'ペア利用可', value: true },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '100',
      bestRating: '5',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'ドライヘッドスパメニュー',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '60分ドライヘッドスパ（睡眠改善コース）',
            description: '人気No.1。頭部を中心に脳疲労を徹底的にほぐし、睡眠の質改善に特化した60分コース。',
            serviceType: 'ドライヘッドスパ',
            provider: { '@id': `${SITE.url}/#business` },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '75分ドライヘッドスパ（首肩脚のお疲れ解消コース）',
            description: '店舗イチ押し。ヘッドスパに加え首・肩・脚も同時ケアする75分コース。',
            serviceType: 'ドライヘッドスパ',
            provider: { '@id': `${SITE.url}/#business` },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '90分ドライヘッドスパ（フルコース）',
            description: 'ヘッド・デコルテ・肩甲骨・腕・脚をフルでケアする贅沢な90分コース。',
            serviceType: 'ドライヘッドスパ',
            provider: { '@id': `${SITE.url}/#business` },
          },
        },
      ],
    },
    knowsAbout: ['ドライヘッドスパ','脳疲労','睡眠改善','自律神経','眼精疲労','リフトアップ','ヘッドマッサージ'],
  }
}

// ===== FAQPage =====
export function generateFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }
}

// ===== Article (症状ページ用) =====
export function generateConcernArticleJsonLd(concern: ConcernData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `ドライヘッドスパと${concern.title}｜${SITE.nameShort}`,
    description: concern.metaDescription,
    author: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
    },
    mainEntityOfPage: `${SITE.url}/concerns/${concern.slug}`,
  }
}
