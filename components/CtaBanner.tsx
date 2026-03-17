import { SITE } from '@/lib/site'

export default function CtaBanner() {
  return (
    <section className="relative py-28 sm:py-36 px-6 sm:px-10 text-center overflow-hidden" style={{ background: '#faf7f2' }} aria-label="予約セクション">
      <div className="absolute w-[450px] h-[450px] rounded-full top-[15%] left-[25%] z-0" style={{ background: 'rgba(107,154,106,0.06)', filter: 'blur(120px)' }}></div>
      <div className="relative z-10 max-w-2xl mx-auto">
        <span className="label-sm">Reservation</span>
        <div className="botanical-line mt-5 mb-10"></div>
        <h2 className="font-display font-bold text-xl sm:text-2xl md:text-3xl leading-snug mb-4" style={{ color: '#8a8274' }}>最後にぐっすり眠れたのは、いつですか？</h2>
        <p className="font-display font-bold text-2xl sm:text-3xl md:text-[2.75rem] leading-snug mb-10" style={{ color: '#2a2520' }}>あなたの<span className="text-glow">「眠れた」</span>を、<br />ここから。</p>
        <p className="text-sm leading-[2] font-light mb-14 max-w-md mx-auto" style={{ color: '#5c554b' }}>初めての方にも安心のクーポンをご用意しています。<br />まずは60分、頭のほぐし体験を。</p>
        <a href={SITE.hotpepperCoupon} target="_blank" rel="noopener noreferrer" className="cta-main inline-flex items-center gap-3 font-bold px-12 py-5 rounded-full text-base hover:scale-[1.03] transition-all duration-300" style={{ background: '#6b9a6a', color: '#fff', boxShadow: '0 14px 40px rgba(107,154,106,0.25)' }}>お得なクーポンで予約する</a>
      </div>
    </section>
  )
}
