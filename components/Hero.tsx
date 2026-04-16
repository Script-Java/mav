"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  title: string;
  subtitle: string;
  backgroundImageSrc: string;
}

interface HeroProps {
  slides: Slide[];
}

const bgVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

const textVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir < 0 ? 60 : -60, opacity: 0 }),
};

export default function Hero({ slides }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const next = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goTo = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const current = slides[currentSlide];

  return (
    <section className="relative w-full h-screen min-h-[640px] max-h-[960px] overflow-hidden bg-neutral-950 flex items-center justify-center">

      {/* ── Background crossfade ── */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={`bg-${currentSlide}`}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={current.backgroundImageSrc}
            alt="Mavericks Collision background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* gradient: dark top → semi → full dark at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-[#050505]" />
          {/* subtle vignette edges */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(0,0,0,0.6)_100%)]" />
        </motion.div>
      </AnimatePresence>

      {/* ── Left arrow ── */}
      <button
        onClick={prev}
        aria-label="Slide anterior"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full
                   bg-black/25 border border-white/15 text-white
                   hover:bg-white/15 hover:border-white/30
                   backdrop-blur-md transition-all duration-200 group"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      {/* ── Right arrow ── */}
      <button
        onClick={next}
        aria-label="Próximo slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full
                   bg-black/25 border border-white/15 text-white
                   hover:bg-white/15 hover:border-white/30
                   backdrop-blur-md transition-all duration-200 group"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* ── Centre content ── */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 sm:px-12 md:px-20 flex flex-col items-center text-center">

        {/* pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff4500] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.22em] text-zinc-300 font-medium">
            Mavericks Collision
          </span>
        </div>

        {/* animated text block — fixed min-height stops layout shift */}
        <div className="relative w-full min-h-[200px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[320px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={`text-${currentSlide}`}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 280, damping: 28 },
                opacity: { duration: 0.25 },
              }}
              className="absolute inset-0 flex flex-col items-center justify-center px-2"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-white leading-[1.05] mb-5">
                {current.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed">
                {current.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
          <Link href="/contato" className="px-8 py-4 bg-[#ff4500] text-white text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#e03e00] shadow-lg shadow-[#ff4500]/20 transition-all duration-200">
            Agendar Avaliação
          </Link>
          <Link href="/contato" className="px-8 py-4 text-white text-sm font-semibold tracking-wider uppercase rounded-full border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-200">
            Conheça o Studio
          </Link>
        </div>
      </div>

      {/* ── Dot pagination ── */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-2.5 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`transition-all duration-400 rounded-full ${
              currentSlide === i
                ? "bg-[#ff4500] w-7 h-2"
                : "bg-white/30 hover:bg-white/55 w-2 h-2"
            }`}
          />
        ))}
      </div>

      {/* ── Slide counter ── */}
      <div className="absolute bottom-8 right-6 md:right-10 z-30 text-xs text-white/30 font-mono tabular-nums">
        {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}
