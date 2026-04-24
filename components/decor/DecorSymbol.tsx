type DecorSymbolName = 'arrow-down' | 'arrow-right' | 'diamond'

interface DecorSymbolProps {
  name: DecorSymbolName
  size?: number
  className?: string
}

export default function DecorSymbol({ name, size = 20, className }: DecorSymbolProps) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: '0 0 40 40',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.25,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    className,
  }

  if (name === 'arrow-down') {
    return (
      <svg {...commonProps}>
        <line x1="20" y1="8" x2="20" y2="32" />
        <polyline points="13,24 20,32 27,24" />
      </svg>
    )
  }

  if (name === 'arrow-right') {
    return (
      <svg {...commonProps}>
        <line x1="8" y1="20" x2="32" y2="20" />
        <polyline points="24,13 32,20 24,27" />
      </svg>
    )
  }

  if (name === 'diamond') {
    return (
      <svg {...commonProps}>
        <path d="M20 8 L32 20 L20 32 L8 20 Z" />
      </svg>
    )
  }

  return null
}
