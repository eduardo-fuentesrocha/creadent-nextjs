'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { LogoCompleto } from './LogoCompleto';

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      });

      // 1. Animación de las luces de fondo
      tl.fromTo(
        '.footer-light-beam',
        { opacity: 0, scaleY: 0, transformOrigin: 'top center' },
        {
          opacity: 0.2,
          scaleY: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );

      // 2. Animación del Logo Completo (Escala + Opacidad)
      tl.fromTo(
        '.footer-logo-full',
        { scale: 0.9, opacity: 0, y: 15 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.8'
      );
    },
    { scope: containerRef }
  );

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 items-center">
          
          {/* Lado Izquierdo - Logo Completo Centrado */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-center">
            <LogoCompleto className="footer-logo-full w-48 sm:w-64 md:w-72 h-auto text-white" />
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
                Correo Electrónico
              </span>
              <a href="mailto:creadent@gmail.com" className="hover:underline">
                creadent@gmail.com
              </a>
            </div>

            <div>
              <span className="block text-[10px] tracking-widest text-white/50 uppercase mb-2">
                Laboratorio
              </span>
              <a
                href="https://maps.app.goo.gl/LfVn1UBQNz8jQAxW7"
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed hover:underline block"
              >
                Benito Juárez 607, Centro, 38900<br />
                Salvatierra, Guanajuato (México)
              </a>
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
            ©{new Date().getFullYear()} Creadent Clínica Dental. Todos los derechos reservados.
          </div>

          {/* Menú Redes Sociales */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/creadentmx/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/creadentclinica"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://wa.me/524662134317"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              WhatsApp
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};