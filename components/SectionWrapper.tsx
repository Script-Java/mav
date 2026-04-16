import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: React.ReactNode;
}

export const SectionWrapper = ({ children, className = "", id, background }: SectionWrapperProps) => (
  <section id={id} className={`w-full py-20 px-6 relative ${className}`}>
    {background}
    <div className="max-w-7xl mx-auto w-full relative z-10"> 
      {children}
    </div>
  </section>
);
