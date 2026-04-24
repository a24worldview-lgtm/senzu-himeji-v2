interface DecorSymbolProps {
  name: 'arrow-down'
  size?: number
  className?: string
}

export default function DecorSymbol({ name, size = 20, className }: DecorSymbolProps) {
  if (name !== 'arrow-down') return null

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <line x1="20" y1="8" x2="20" y2="32" />
      <polyline points="13,24 20,32 27,24" />
    </svg>
  )
}
