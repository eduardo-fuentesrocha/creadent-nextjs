'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VALORES = [
  {
    titulo: 'Innovación',
    frase: 'Siempre buscamos mejorar, por ello nos apoyamos en la vanguardia tecnológica',
    descripcion: 'Garantizamos la entrega puntual de nuestras prótesis y ofrecemos un servicio al cliente excepcional.',
    type: 'cards',
  },
  {
    titulo: 'Precisión',
    frase: 'Cada detalle importa. Nuestra dedicación se refleja en el cuidado con el que abordamos cada pieza dental',
    descripcion: 'Apostamos por la tecnología más avanzada para garantizar soluciones innovadoras en prótesis dentales.',
    type: 'cross',
  },
  {
    titulo: 'Solvencia',
    frase: 'La confianza se construye en el día a día, con cada entrega de proyecto',
    descripcion: 'Cada prótesis se somete a estrictos controles de calidad para asegurar un ajuste perfecto y funcionalidad óptima.',
    type: 'arches',
  },
];

export const ValoresSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const slides = gsap.utils.toArray<HTMLElement>('.valor-slide');

    gsap.set(slides[0], { opacity: 1, y: 0 });
    gsap.set(slides.slice(1), { opacity: 0, y: 30 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        start: 'top top',
        end: `+=${slides.length * 150}%`,
        scrub: 1,
      },
    });

    slides.forEach((slide, i) => {
      const currentShapes = slide.querySelectorAll('.svg-shape');

      tl.fromTo(
        currentShapes,
        { opacity: 0, x: -20, scale: 0.85, transformOrigin: 'left center' },
        {
          opacity: 0.8,
          x: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power2.out',
        },
        i === 0 ? 0 : '<'
      );

      if (slides[i + 1]) {
        tl.to(
          slide,
          { opacity: 0, y: -40, duration: 1, ease: 'power1.inOut' },
          '+=1'
        );

        tl.to(
          slides[i + 1],
          { opacity: 1, y: 0, duration: 1, ease: 'power1.inOut' },
          '<'
        );
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-[#4D12FF] text-white overflow-hidden z-10">
      <span className="absolute top-6 left-6 md:top-8 md:left-8 text-xs md:text-sm font-light text-white/80 z-20">
        Nuestros valores
      </span>

      {VALORES.map((val, index) => (
        <div
          key={index}
          className="valor-slide absolute inset-0 w-full h-full flex flex-col justify-between p-6 md:p-16"
        >
          {/* Frase Principal - Tamaño responsivo ajustado */}
          <div className="max-w-3xl ml-auto pt-12 md:pt-16 z-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-light leading-tight tracking-tight">
              {val.frase}
            </h2>
          </div>

          {/* SVG Animado - Posicionamiento adaptativo y dimensiones responsivas */}
          <div className="absolute left-6 md:left-20 top-1/2 -translate-y-1/2 w-[260px] sm:w-[350px] md:w-[500px] h-48 md:h-72 pointer-events-none z-0 opacity-90">
            {val.type === 'cards' && (
              <svg viewBox="0 0 500 300" className="w-full h-full fill-white/5 stroke-white/40 stroke-[1.5]">
                <rect className="svg-shape" x="30" y="30" width="140" height="220" rx="36" />
                <rect className="svg-shape" x="80" y="30" width="140" height="220" rx="36" />
                <rect className="svg-shape" x="130" y="30" width="140" height="220" rx="36" />
                <rect className="svg-shape" x="180" y="30" width="140" height="220" rx="36" />
              </svg>
            )}

            {val.type === 'cross' && (
              <svg viewBox="0 0 500 300" className="w-full h-full fill-none stroke-white/50 stroke-[1.5]">
                <path className="svg-shape" d="M 40 150 Q 140 40 240 150 Q 140 260 40 150 Z" />
                <path className="svg-shape" d="M 120 150 Q 220 40 320 150 Q 220 260 120 150 Z" />
                <path className="svg-shape" d="M 200 150 Q 300 40 400 150 Q 300 260 200 150 Z" />
              </svg>
            )}

            {val.type === 'arches' && (
              <svg viewBox="0 0 500 300" className="w-full h-full fill-none stroke-white/50 stroke-[1.5]">
                <path className="svg-shape" d="M 30 250 C 30 100, 150 100, 150 250" />
                <path className="svg-shape" d="M 110 250 C 110 100, 230 100, 230 250" />
                <path className="svg-shape" d="M 190 250 C 190 100, 310 100, 310 250" />
                <path className="svg-shape" d="M 270 250 C 270 100, 390 100, 390 250" />
              </svg>
            )}
          </div>

          {/* Título e Información Inferior */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-end w-full pb-2 md:pb-4 z-10 gap-2">
            <h3 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight">
              {val.titulo}
            </h3>
            <p className="text-[11px] sm:text-xs md:text-sm text-white/80 max-w-sm md:ml-auto leading-relaxed">
              {val.descripcion}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};