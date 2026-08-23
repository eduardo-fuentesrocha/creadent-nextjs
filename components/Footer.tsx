'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUp, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Animación de aparición de las luces al llegar al Footer
    gsap.fromTo(
      '.footer-light-beam',
      { opacity: 0, scaleY: 0, transformOrigin: 'top center' },
      {
        opacity: 0.2,
        scaleY: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, { scope: containerRef });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={containerRef}
      className="relative w-full bg-[#4D12FF] text-white pt-20 pb-12 px-8 md:px-16 overflow-hidden z-10"
    >
      {/* Luces SVG de Fondo */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-start pt-10">
        <svg
          viewBox="0 0 1000 600"
          fill="none"
          className="w-full max-w-5xl h-full opacity-20"
        >
          <path
            className="footer-light-beam"
            d="M 450 0 L 200 600 L 380 600 Z"
            fill="url(#footerLight)"
          />
          <path
            className="footer-light-beam"
            d="M 550 0 L 620 600 L 800 600 Z"
            fill="url(#footerLight)"
          />
          <defs>
            <linearGradient id="footerLight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Fila Principal / Grid de Información */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 items-start">
          
          {/* Lado Izquierdo - Logo y Marca */}
          <div className="lg:col-span-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white text-[#4D12FF] flex items-center justify-center font-bold text-2xl shrink-0">
              CD
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-light font-normal tracking-tight">
                Creadent
              </h2>
              <p className="text-sm text-white/70 mt-1 font-light">
                Clínica Dental
              </p>
            </div>
          </div>

          {/* Lado Derecho - Datos de Contacto y Ubicaciones */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs sm:text-sm font-light text-white/90">
            <div>
              <span className="block text-[10px] tracking-widest text-white/50 uppercase mb-2">
                Teléfono
              </span>
              <a href="tel:+524666633372" className="hover:underline text-base font-normal">
                466 663 33 72
              </a>

              <span className="block text-[10px] tracking-widest text-white/50 uppercase mb-2 mt-6">
                Email
              </span>
              <a href="mailto:contacto@taravillalab.com" className="hover:underline">
                creadent@gmail.com
              </a>
            </div>

            <div>
              <span className="block text-[10px] tracking-widest text-white/50 uppercase mb-2">
                Laboratorio
              </span>
              <p className="leading-relaxed">
                Benito Juárez 607, Centro, 38900<br />
                Salvatierra, Guanajuato (México)
              </p>
            </div>
          </div>

        </div>

        {/* Fila Inferior / Copyright, Links Legales y Botón Volver Arriba */}
        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-white/60 font-light">
          
          {/* Botón Volver Arriba */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Copyright */}
          <div>
            ©2026 Creadent Clínica Dental. Todos los derechos reservados.
          </div>

          {/* Menú Legal & Redes */}
          <div className="flex items-center gap-6">
            <Link href="#servicios" className="hover:text-white transition-colors">
              Servicios
            </Link>
            <Link href="#nosotros" className="hover:text-white transition-colors">
              Nosotros
            </Link>
            <Link href="#contacto" className="hover:text-white transition-colors">
              Contacto
            </Link>
            <a
                href="https://wa.me/524662134317"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors ml-2"
            >
            <MessageCircle className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};