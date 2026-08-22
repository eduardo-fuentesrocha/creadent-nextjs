'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // 1. Entrada desordenada estilo GSAP.com
      tl.fromTo(
        '.hero-char',
        {
          opacity: 0,
          scale: 0.2,
          y: () => gsap.utils.random(-100, 100),
          x: () => gsap.utils.random(-60, 60),
          rotation: () => gsap.utils.random(-45, 45),
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          x: 0,
          rotation: 0,
          filter: 'blur(0px)',
          duration: 1.4,
          stagger: { amount: 0.8, from: 'random' },
        }
      );

      // Entrada de figuras decorativas
      tl.fromTo(
        '.hero-shape',
        { opacity: 0, scale: 0, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: 'back.out(2)',
          stagger: { amount: 0.4, from: 'center' },
          onComplete: () => {
            // Flotación continua
            gsap.to('.hero-shape', {
              y: '+=12',
              rotation: '+=15',
              duration: 2.5,
              repeat: -1,
              yoyo: true,
              ease: 'sine.easeInOut',
              stagger: 0.3,
            });
          },
        },
        '-=1.0'
      );

      // 2. TRANSFORMACIÓN A SONRISA
      // Deformación parabólica para formar el arco de sonrisa en la palabra objetivo
      const smileChars = gsap.utils.toArray<HTMLElement>('.smile-char');
      const total = smileChars.length;

      tl.to(
        smileChars,
        {
          duration: 1.4,
          ease: 'back.out(1.8)',
          stagger: 0.03,
          y: (i) => {
            // Distancia normalizada desde el centro (-1 a 1)
            const x = (i / (total - 1)) * 2 - 1;
            // Curva parabólica suave que arquea las letras hacia abajo en los extremos
            return Math.pow(x, 2) * -32 + 32;
          },
          rotation: (i) => {
            const x = (i / (total - 1)) * 2 - 1;
            // Ángulo tangencial para seguir la curvatura
            return x * -22;
          },
        },
        '+=0.2'
      );

      // Haces de luz y menú flotante
      tl.fromTo(
        '.light-beam',
        { opacity: 0, scaleY: 0, transformOrigin: 'top center' },
        { opacity: 0.25, scaleY: 1, duration: 1.2, stagger: 0.2 },
        '0.5'
      );

      tl.fromTo(
        '.floating-nav',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.8'
      );
    },
    { scope: containerRef }
  );

  const splitText = (text: string, isSmile = false) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className={`hero-char ${isSmile ? 'smile-char' : ''} inline-block my-1`}
        style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-[#4D12FF] text-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Fondo con Haces de Luz SVG */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-start pt-10">
        <svg viewBox="0 0 1000 800" fill="none" className="w-full max-w-5xl h-full opacity-30">
          <path className="light-beam" d="M 450 0 L 250 800 L 380 800 Z" fill="url(#lightGradient)" />
          <path className="light-beam" d="M 550 0 L 620 800 L 750 800 Z" fill="url(#lightGradient)" />
          <defs>
            <linearGradient id="lightGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 text-center px-6 max-w-5xl select-none flex flex-col items-center">
        
        {/* Línea 1: Diseñamos tu mejor */}
        <div className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight flex items-center justify-center gap-3 flex-wrap">
          <span>{splitText('Diseñamos')}</span>
          
          <span className="hero-shape inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 text-yellow-300">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
              <path d="M50 0 C50 25 25 50 0 50 C25 50 50 75 50 100 C50 75 75 50 100 50 C75 50 50 25 50 0 Z" />
            </svg>
          </span>

          <span>{splitText('tu')}</span>
          <span>{splitText('mejor')}</span>
        </div>

        {/* Línea 2: "sonrisa" (Blanca, más gruesa) */}
        <div className="relative mt-2">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-semibold tracking-tight text-white flex justify-center items-center">
            {splitText('sonrisa', true)}
          </h1>
        </div>

      </div>

      {/* Menú Flotante Inferior */}
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