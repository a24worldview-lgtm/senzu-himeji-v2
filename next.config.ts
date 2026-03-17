import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // 写真は public/images/ に配置するのでリモートパターンは不要
    // 将来的に外部画像を使う場合はここに remotePatterns を追加
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
