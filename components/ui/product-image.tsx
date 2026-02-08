"use client"

import * as React from "react"
import Image from "next/image"

export interface ProductImageProps
  extends Omit<React.ComponentProps<typeof Image>, "src" | "alt"> {
  src?: string
  alt: string
  fallbackSrc?: string
}

export function ProductImage({
  fallbackSrc = "/placeholder.svg",
  src,
  alt,
  onError,
  width,
  height,
  sizes,
  ...props
}: ProductImageProps) {
  const [currentSrc, setCurrentSrc] = React.useState(src || fallbackSrc)

  React.useEffect(() => {
    setCurrentSrc(src || fallbackSrc)
  }, [src, fallbackSrc])

  const handleError = React.useCallback(
    (event: React.SyntheticEvent<HTMLImageElement>) => {
      onError?.(event)
      if (currentSrc === fallbackSrc) return
      setCurrentSrc(fallbackSrc)
    },
    [currentSrc, fallbackSrc, onError]
  )

  const useFill = !width && !height
  const imageSizingProps = useFill
    ? { fill: true as const, sizes: sizes ?? "100vw" }
    : { width: width ?? 1200, height: height ?? 800, sizes }

  return (
    <Image
      {...props}
      {...imageSizingProps}
      src={currentSrc}
      alt={alt}
      onError={handleError}
    />
  )
}
