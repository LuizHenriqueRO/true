"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/banner-1.png", alt: "Sonho da casa própria" },
  { src: "/banner-2.png", alt: "Conquista do novo carro" },
  { src: "/banner-3.png", alt: "Alavancagem de negócios" },
];

export function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-slate-900 mt-20">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            unoptimized
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay to ensure contrast if we place text over it, and to give a cinematic feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-sky-900/20 mix-blend-multiply pointer-events-none" />

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
