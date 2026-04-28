"use client";

import { useState, useEffect } from "react";
import SafeImage from "./ClientImage";
import { AnimatePresence, motion } from "framer-motion";
import { ImageProps } from "next/image";

interface ZoomableImageProps extends Omit<ImageProps, 'src'> {
  src: string;
}

export function ZoomableImage({ src, alt, ...props }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div 
        className="relative w-full h-full cursor-zoom-in"
        onClick={() => setIsOpen(true)}
      >
        <SafeImage src={src} alt={alt || "Zoomable image"} {...props} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 cursor-zoom-out p-4 md:p-12"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full"
            >
              <SafeImage 
                src={src} 
                alt={alt || "Zoomed image"} 
                fill 
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
