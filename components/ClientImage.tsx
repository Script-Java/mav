"use client";

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

export default function SafeImage(props: ImageProps) {
  const [error, setError] = useState(false);

  return (
    <Image
      {...props}
      src={error ? '/fallback-car.jpg' : props.src}
      onError={() => setError(true)}
      className={`${props.className} transition-opacity duration-500 ${error ? 'opacity-50' : 'opacity-100'}`}
    />
  );
}
