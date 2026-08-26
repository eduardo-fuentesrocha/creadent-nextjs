'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Logo } from './Logo';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Entrada desordenada estilo GSAP.com
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

      // TRANSFORMACIÓN A SONRISA (Responsive)
      const smileChars = gsap.utils.toArray<HTMLElement>('.smile-char');
      const total = smileChars.length;
      const isMobile = window.innerWidth < 640;

      // Valores ajustados proporcionalmente según el viewport
      const yOffset = isMobile ? -14 : -32; 
      const yBase = isMobile ? 14 : 32;
      const rotationAmount = isMobile ? -10 : -22;

      tl.to(
        smileChars,
        {
          duration: 1.4,
          ease: 'back.out(1.8)',
          stagger: 0.03,
          y: (i) => {
            const x = (i / (total - 1)) * 2 - 1;
            return Math.pow(x, 2) * yOffset + yBase;
          },
          rotation: (i) => {
            const x = (i / (total - 1)) * 2 - 1;
            return x * rotationAmount;
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
        className={`hero-char ${isSmile ? 'smile-char' : ''} inline-block my-0.5`}
        style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100dvh] bg-[#4D12FF] text-white flex flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Fondo con Haces de Luz SVG */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-start">
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
      <div className="relative z-10 text-center select-none flex flex-col items-center justify-center -mt-6">
        
        {/* Línea 1: "Diseñamos tu mejor" */}
        <div className="text-2xl sm:text-5xl md:text-7xl font-light tracking-tight flex items-center justify-center gap-1.5 sm:gap-3 whitespace-nowrap">
          <span>{splitText('Diseñamos')}</span>
          
          <span className="hero-shape inline-flex items-center justify-center w-5 h-5 sm:w-10 sm:h-10 text-yellow-300 mx-0.5">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
              <path d="M50 0 C50 25 25 50 0 50 C25 50 50 75 50 100 C50 75 75 50 100 50 C75 50 50 25 50 0 Z" />
            </svg>
          </span>

          <span>{splitText('tu')}</span>
          <span>{splitText('mejor')}</span>
        </div>

        {/* Línea 2: "sonrisa" */}
        <div className="relative mt-1 sm:mt-3">
          <h1 className="text-5xl sm:text-8xl md:text-9xl font-semibold tracking-tight text-white flex justify-center items-center">
            {splitText('sonrisa', true)}
          </h1>
        </div>

      </div>

      {/* Menú Flotante Inferior */}
      <div className="floating-nav fixed bottom-6 sm:bottom-8 z-50">
        <nav className="flex items-center gap-4 sm:gap-6 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl text-xs sm:text-sm font-light text-white">
          <Link
            href="/"
            className="flex items-center justify-center hover:scale-105 transition-transform shrink-0"
          >
            <Logo className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
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