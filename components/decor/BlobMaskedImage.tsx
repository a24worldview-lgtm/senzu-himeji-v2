import Image from 'next/image'

type BlobVariant = '01' | '03'

const BLOB_ASPECT: Record<BlobVariant, string> = {
  '01': '385 / 606',
  '03': '488 / 504',
}

interface BlobMaskedImageProps {
  src: string
  alt: string
  blob: BlobVariant
  sizes?: string
  priority?: boolean
  className?: string
  objectPosition?: string
}

export default function BlobMaskedImage({
  src,
  alt,
  blob,
  sizes,
  priority,
  className,
  objectPosition,
}: BlobMaskedImageProps) {
  const maskUrl = `url(/assets/svg/blobs/blob-${blob}.svg)`

  return (
    <div
      className={`relative ${className ?? ''}`}
      style={{
        aspectRatio: BLOB_ASPECT[blob],
        maskImage: maskUrl,
        WebkitMaskImage: maskUrl,
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={objectPosition ? { objectPosition } : undefined}
      />
    </div>
  )
}
