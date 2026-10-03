"use client";

import { useState } from "react";
import { ImageCredit } from "@/components/ImageCredit";
import { SafeImage } from "@/components/SafeImage";
import type { LicensedImage } from "@/data/types";

/** 색 배경 위에 자유 이용 사진을 얹고, 아래에 저작자·라이선스·출처를 적습니다. */
export function CreditedMedia({
  image,
  tone,
  alt,
  aspectClass = "aspect-video",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  compactCredit = true,
  priority = false,
}: {
  image?: LicensedImage;
  tone: string;
  alt: string;
  aspectClass?: string;
  sizes?: string;
  compactCredit?: boolean;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <figure>
      <div className={`relative overflow-hidden rounded-md ${aspectClass}`}>
        <div className="absolute inset-0" style={{ background: tone }} />
        {image ? (
          <SafeImage
            src={image.src}
            alt={alt}
            sizes={sizes}
            priority={priority}
            objectPosition={image.objectPosition}
            onFallback={() => setFailed(true)}
          />
        ) : null}
      </div>
      {image && !failed ? <ImageCredit image={image} compact={compactCredit} /> : null}
    </figure>
  );
}
