"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SafeImage from "./ClientImage";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageSrc?: string;
}

export default function ServiceCard({ title, description, icon, imageSrc }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group overflow-hidden rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg h-full flex flex-col"
    >
      {/* Subtle top glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      <div className="relative z-10 flex flex-col h-full">
        {imageSrc && (
          <div className="relative w-full h-64 mb-6 rounded-2xl overflow-hidden align-top border border-white/10 shrink-0">
            <SafeImage
              src={imageSrc}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover ${title.includes("Funilaria") ? "object-bottom" : "object-center"}`}
            />
          </div>
        )}
        {icon && (
          <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-white shadow-inner">
            {icon}
          </div>
        )}
        <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">{title}</h3>
        <p className="text-zinc-400 font-light leading-relaxed flex-grow text-base md:text-lg">
          {description}
        </p>

        <Link href="/contato" className="mt-8 flex items-center text-sm font-medium tracking-wider uppercase text-zinc-400 group-hover:text-white transition-colors cursor-pointer w-max">
          <span className="mr-3">Explorar</span>
          <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

      {/* Subtle hover background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </motion.div>
  );
}
