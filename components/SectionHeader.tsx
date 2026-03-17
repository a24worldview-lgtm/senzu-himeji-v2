export default function SectionHeader({
  labelEn,
  heading,
  id,
}: {
  labelEn: string
  heading: React.ReactNode
  id?: string
}) {
  return (
    <div className="text-center mb-20">
      <span className="label-sm">{labelEn}</span>
      <div className="botanical-line mt-5 mb-8" />
      <h2 id={id} className="font-display font-bold text-2xl sm:text-3xl md:text-[2.75rem] leading-snug">
        {heading}
      </h2>
    </div>
  )
}
