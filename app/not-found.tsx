import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="label-sm mb-4">404</p>
        <h1 className="font-display font-bold text-2xl mb-6">ページが見つかりません</h1>
        <Link href="/" className="text-senzu text-sm hover:underline underline-offset-4">
          トップページへ戻る →
        </Link>
      </div>
    </main>
  )
}
