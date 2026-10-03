"use client";

import Image from "next/image";
import { useState } from "react";

/** next/image wrapper. On load failure it hides itself so the colour panel behind it shows. */
export function SafeImage({
  src,
  alt,
  sizes,
  priority = false,
  objectPosition,
  onFallback,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  objectPosition?: string;
  onFallback?: () => void;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes={sizes}
      {...(priority ? { priority: true } : { loading: "lazy" as const })}
      onError={() => {
        setFailed(true);
        onFallback?.();
      }}
      style={objectPosition ? { objectPosition } : undefined}
    />
  );
}
