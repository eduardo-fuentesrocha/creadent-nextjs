'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    // Entrada del badge superior
    tl.fromTo(
      '.about-badge',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );

    // Animación de entrada del título principal
    tl.fromTo(
      '.about-title',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.3'
    );

    // Imagen principal
    tl.fromTo(
      '.about-image',
      { opacity: 0, y: 50, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    );

    // Tarjetas informativas
    tl.fromTo(
      '.about-card',
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out' },
      '-=0.4'
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="nosotros"
      className="w-full py-24 px-6 md:px-16 bg-[#C2B8FF] text-[#4D12FF] relative z-10 transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Badge superior */}
        <div className="about-badge flex items-center gap-2">
          <span className="text-xs md:text-sm font-light uppercase tracking-wider text-[#4D12FF]/70">
            Nosotros
          </span>
        </div>

        {/* Encabezado principal */}
        <div className="max-w-4xl space-y-6">
          <h2 className="about-title text-3xl md:text-6xl font-light leading-tight tracking-tight text-[#4D12FF]">
            Fusionamos la tecnología dental de vanguardia con un enfoque artesanal dedicado a perfeccionar cada sonrisa.
          </h2>
        </div>

        {/* Imagen representativa */}
        <div className="about-image relative w-full h-[320px] sm:h-[450px] md:h-[550px] rounded-3xl overflow-hidden border border-[#4D12FF]/15 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1200&auto=format&fit=crop"
            alt="Laboratorio Dental Creadent"
            fill
            className="object-cover"
          />
        </div>

        {/* Tarjetas de pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="about-card p-6 md:p-8 rounded-3xl backdrop-blur-md bg-white/40 border border-[#4D12FF]/15 shadow-lg space-y-3">
            <h3 className="text-xl md:text-2xl font-light tracking-tight">Experiencia</h3>
            <p className="text-xs md:text-sm font-light text-[#4D12FF]/80 leading-relaxed">
              Más de una década diseñando piezas dentales con los estándares de precisión más exigentes del sector.
            </p>
          </div>

          <div className="about-card p-6 md:p-8 rounded-3xl backdrop-blur-md bg-white/40 border border-[#4D12FF]/15 shadow-lg space-y-3">
            <h3 className="text-xl md:text-2xl font-light tracking-tight">Tecnología 3D</h3>
            <p className="text-xs md:text-sm font-light text-[#4D12FF]/80 leading-relaxed">
              Escaneo, modelado e impresión tridimensional para un ajuste milimétrico y naturalidad impecable.
            </p>
          </div>

          <div className="about-card p-6 md:p-8 rounded-3xl backdrop-blur-md bg-white/40 border border-[#4D12FF]/15 shadow-lg space-y-3">
            <h3 className="text-xl md:text-2xl font-light tracking-tight">Compromiso</h3>
            <p className="text-xs md:text-sm font-light text-[#4D12FF]/80 leading-relaxed">
              Acompañamiento continuo a clínicas y odontólogos para garantizar tiempos de entrega idóneos.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;