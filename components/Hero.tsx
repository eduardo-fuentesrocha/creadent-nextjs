'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // 1. Animación de revelado del título central
    tl.fromTo(
      '.hero-title',
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2 }
    );

    // 2. Animación de los haces de luz SVG en el fondo
    tl.fromTo(
      '.light-beam',
      { opacity: 0, scaleY: 0, transformOrigin: 'top center' },
      { opacity: 0.25, scaleY: 1, duration: 1.4, stagger: 0.2 },
      '-=0.8'
    );

    // 3. Entrada suave del menú flotante inferior
    tl.fromTo(
      '.floating-nav',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.6'
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-[#4D12FF] text-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Fondo con Haces de Luz SVG */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-start pt-10">
        <svg
          viewBox="0 0 1000 800"
          fill="none"
          className="w-full max-w-5xl h-full opacity-30"
        >
          {/* Luz Izquierda */}
          <path
            className="light-beam"
            d="M 450 0 L 250 800 L 380 800 Z"
            fill="url(#lightGradient)"
          />
          {/* Luz Derecha */}
          <path
            className="light-beam"
            d="M 550 0 L 620 800 L 750 800 Z"
            fill="url(#lightGradient)"
          />

          <defs>
            <linearGradient id="lightGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Contenido Principal / Título */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="hero-title text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.15]">
          Diseñamos tu <br />
          mejor sonrisa
        </h1>
      </div>

      {/* Menú Flotante Inferior (Floating Nav) */}
      <div className="floating-nav fixed bottom-8 z-50">
        <nav className="flex items-center gap-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl text-xs sm:text-sm font-light text-white">
          <Link
            href="/"
            className="w-7 h-7 rounded-full bg-white text-[#4D12FF] flex items-center justify-center font-bold text-base hover:scale-105 transition-transform"
          >
            T
          </Link>
          <Link href="#servicios" className="hover:text-white/70 transition-colors">
            Servicios
          </Link>
          <Link href="#nosotros" className="hover:text-white/70 transition-colors">
            Nosotros
          </Link>
          <Link href="#contacto" className="hover:text-white/70 transition-colors">
            Contacto
          </Link>
        </nav>
      </div>
    </section>
  );
};