'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Navbar = () => {
  const navRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      start: 'top -20',
      end: 99999,
      toggleClass: {
        // Pass class names as an array or object instead of a single string
        className: 'glass-panel',
        targets: navRef.current,
      },
    });
  }, { scope: navRef });

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-sky-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            Crea<span className="text-teal-600">dent</span>
          </span>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#inicio" className="hover:text-teal-600 transition-colors">Inicio</Link>
          <Link href="#servicios" className="hover:text-teal-600 transition-colors">Servicios</Link>
          <Link href="#casos" className="hover:text-teal-600 transition-colors">Casos de Éxito</Link>
          <Link href="#nosotros" className="hover:text-teal-600 transition-colors">Nosotros</Link>
        </nav>

        {/* CTA Navbar */}
        <Link
          href="#contacto"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-teal-600 transition-colors shadow-sm hover:shadow-md"
        >
          <Calendar className="w-4 h-4" />
          <span>Agendar Cita</span>
        </Link>
      </div>
    </header>
  );
};