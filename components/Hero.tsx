'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight, Instagram, ShieldCheck } from 'lucide-react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      '.hero-text-animate',
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        clearProps: 'all',
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="inicio" className="relative pt-32 pb-20 px-6 md:px-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Lado Izquierdo - Texto */}
        <div className="flex flex-col items-start">
          <div className="hero-text-animate inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 text-teal-700 text-xs font-semibold mb-6">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>ODONTOLOGÍA DE ALTA PRECISIÓN</span>
          </div>

          <h1 className="hero-text-animate text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            Diseñamos la sonrisa <br className="hidden sm:inline" />
            <span className="text-teal-600">que siempre soñaste.</span>
          </h1>

          <p className="hero-text-animate text-slate-600 text-lg leading-relaxed mb-8 max-w-xl">
            En Creadent combinamos tecnología de vanguardia y estética dental personalizada para brindarte una salud bucal impecable y libre de estrés.
          </p>

          <div className="hero-text-animate flex flex-wrap items-center gap-4">
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors shadow-md shadow-teal-600/20"
            >
              <span>Agenda tu Valoración</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-700 font-medium border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              <span>Ver Resultados (@creadentmx)</span>
            </a>
          </div>
        </div>

        {/* Lado Derecho - Video en bucle */}
        <div className="w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 bg-slate-200">
          <video
            src="/origami_tooth.mp4"
            className="w-full h-full object-cover block"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

      </div>
    </section>
  );
};