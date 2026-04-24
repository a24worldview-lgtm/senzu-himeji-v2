import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // 写真は public/images/ に配置するのでリモートパターンは不要
    // 将来的に外部画像を使う場合はここに remotePatterns を追加
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    // Vercel の Domains 設定（非www を Primary）が一次防衛線。
    // ここは二重化の保険。何らかの理由で www が素通りした場合も 308 で正規化する。
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.senzu-himeji.com' }],
        destination: 'https://senzu-himeji.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
