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
  },
  {
    titulo: 'Precisión',
    frase: 'Cada detalle importa. Nuestra dedicación se refleja en el cuidado con el que abordamos cada pieza dental',
    descripcion: 'Apostamos por la tecnología más avanzada para garantizar soluciones innovadoras en prótesis dentales.',
  },
  {
    titulo: 'Solvencia',
    frase: 'La confianza se construye en el día a día, con cada entrega de proyecto',
    descripcion: 'Cada prótesis se somete a estrictos controles de calidad para asegurar un ajuste perfecto y funcionalidad óptima.',
  },
];

export const ValoresSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const slides = gsap.utils.toArray<HTMLElement>('.valor-slide');

    // Estado inicial de los slides
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
      // Transición progresiva al siguiente slide
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
    <section ref={containerRef} className="relative w-full h-[100dvh] bg-[#4D12FF] text-white overflow-hidden z-10">
      <span className="absolute top-6 left-6 md:top-8 md:left-8 text-xs md:text-sm font-light text-white/80 z-20">
        Nuestros valores
      </span>

      {VALORES.map((val, index) => (
        <div
          key={index}
          className="valor-slide absolute inset-0 w-full h-full flex flex-col justify-between p-6 md:p-16 pb-28 sm:pb-24 md:pb-16"
        >
          {/* Frase Principal */}
          <div className="max-w-3xl ml-auto pt-10 sm:pt-12 md:pt-16 z-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-light leading-tight tracking-tight">
              {val.frase}
            </h2>
          </div>

          {/* Título e Información Inferior */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-end w-full z-10 gap-3">
            <h3 className="text-3xl sm:text-5xl md:text-7xl font-light tracking-tight leading-none">
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