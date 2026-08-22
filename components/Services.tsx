'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TRABAJOS = [
  {
    num: '1',
    titulo: 'Diseño de Sonrisa',
    frase:
      'Planificación digital personalizada y carillas de alta precisión para lograr una sonrisa armónica, natural y proporcional a tus facciones.',
    imageSrc: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
    bgColor: '#4D12FF', // Azul / Violeta eléctrico saturado de fondo
    textColor: '#FFFFFF', // Texto blanco
    subtextColor: 'rgba(255, 255, 255, 0.7)',
    cardBg: 'rgba(255, 255, 255, 0.12)',
    cardBorder: 'rgba(255, 255, 255, 0.25)',
    cards: [
      'Simulación digital previa para visualizar los resultados antes de iniciar el tratamiento.',
      'Materiales cerámicos de última generación que protegen tu esmalte y aseguran alta durabilidad.',
    ],
  },
  {
    num: '2',
    titulo: 'Ortodoncia Invisible',
    frase:
      'Alineación dental mediante alineadores transparentes, diseñados a medida para corregir tu postura dental de forma discreta y cómoda.',
    imageSrc: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop',
    bgColor: '#C2B8FF', // Fondo Lavanda Claro
    textColor: '#3B00ED', // Texto Violeta Eléctrico (Mismo color del servicio 1)
    subtextColor: 'rgba(59, 0, 237, 0.7)',
    cardBg: 'rgba(255, 255, 255, 0.45)',
    cardBorder: 'rgba(59, 0, 237, 0.15)',
    cards: [
    'Tratamiento 100% estético sin brackets metálicos, totalmente extraíble para facilitar tu higiene diaria y alimentación.',
    'Planificación con escaneo 3D para predecir el movimiento exacto de tus dientes y reducir el tiempo en consulta.',
  ],
  },
  {
    num: '3',
    titulo: 'Blanqueamiento Dental',
    frase:
      'Aclarado clínico seguro y eficaz diseñado para devolver el brillo y tono natural a tus dientes sin comprometer la salud del esmalte.',
    imageSrc: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop',
    bgColor: '#4D12FF', // Fondo Azul / Violeta eléctrico
    textColor: '#FFFFFF', // Texto blanco
    subtextColor: 'rgba(255, 255, 255, 0.7)',
    cardBg: 'rgba(255, 255, 255, 0.12)',
    cardBorder: 'rgba(255, 255, 255, 0.25)',
    cards: [
      'Agentes blanqueadores de grado médico que eliminan manchas profundas reduciendo la sensibilidad al mínimo.',
      'Resultados visibles y uniformes desde la primera sesión con protocolos de mantenimiento guiados.',
    ],
  },
  {
    num: '4',
    titulo: 'Implantes',
    frase:
      'Reemplazo fijo de piezas dentales mediante fijaciones biocompatibles que devuelven la firmeza, funcionalidad y estética natural a tu boca.',
    imageSrc: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    bgColor: '#C2B8FF', // Fondo Lavanda Claro
    textColor: '#3B00ED', // Texto Violeta Eléctrico
    subtextColor: 'rgba(59, 0, 237, 0.7)',
    cardBg: 'rgba(255, 255, 255, 0.45)',
    cardBorder: 'rgba(59, 0, 237, 0.15)',
    cards: [
    'Materiales de titanio o zirconio altamente biocompatibles que garantizan una integración ósea estable y duradera.',
    'Planificación con cirugía guiada en 3D para una colocación precisa, minimizando las molestias posteriores.',
  ],
  },
];

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const blocks = gsap.utils.toArray<HTMLElement>('.trabajo-block');

    blocks.forEach((block, index) => {
      const data = TRABAJOS[index];
      const title = block.querySelector('.trabajo-title');
      const text = block.querySelector('.trabajo-text');
      const num = block.querySelector('.trabajo-num');
      const img = block.querySelector('.trabajo-img');
      const cards = block.querySelectorAll('.trabajo-card');

      const applyColorTransition = () => {
        // Transición de fondo
        gsap.to(containerRef.current, {
          backgroundColor: data.bgColor,
          duration: 0.7,
          ease: 'power2.out',
          overwrite: 'auto',
        });

        // Transición exact del color de la tipografía (#3B00ED o #FFFFFF)
        gsap.to([title, text], {
          color: data.textColor,
          duration: 0.7,
          ease: 'power2.out',
          overwrite: 'auto',
        });

        gsap.to(num, {
          color: data.subtextColor,
          duration: 0.7,
          ease: 'power2.out',
          overwrite: 'auto',
        });

        // Transición de las tarjetas translúcidas
        if (cards.length > 0) {
          gsap.to(cards, {
            color: data.textColor,
            backgroundColor: data.cardBg,
            borderColor: data.cardBorder,
            duration: 0.7,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }
      };

      ScrollTrigger.create({
        trigger: block,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: applyColorTransition,
        onEnterBack: applyColorTransition,
      });

      // Animaciones de revelado
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: block,
          start: 'top 75%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        [title, text],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
      );

      if (img) {
        tl.fromTo(
          img,
          { opacity: 0, y: 50, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' },
          '-=0.4'
        );
      }

      if (cards.length > 0) {
        tl.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.2, ease: 'power2.out' },
          '-=0.5'
        );
      }
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="trabajos"
      style={{ backgroundColor: '#3B00ED' }}
      className="w-full py-24 px-6 md:px-16 relative z-10"
    >
      <div className="max-w-7xl mx-auto space-y-44">
        {TRABAJOS.map((item) => (
          <div key={item.num} className="trabajo-block grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Columna Izquierda Sticky */}
            <div className="lg:col-span-4 sticky top-28 flex items-baseline gap-2 z-20">
              <span className="trabajo-num text-sm font-light">
                {item.num}
              </span>
              <h3 className="trabajo-title text-xl md:text-2xl font-light tracking-tight">
                {item.titulo}
              </h3>
            </div>

            {/* Columna Derecha - Tipografía unificada a Sans-serif */}
            <div className="lg:col-span-8 space-y-8">
              <p className="trabajo-text text-2xl md:text-4xl font-sans font-light leading-relaxed tracking-tight">
                {item.frase}
              </p>

              <div className="trabajo-img relative w-full h-[320px] sm:h-[450px] md:h-[520px] rounded-3xl overflow-hidden border border-black/10 shadow-2xl">
                <Image
                  src={item.imageSrc}
                  alt={item.titulo}
                  fill
                  className="object-cover"
                />
              </div>

              {item.cards.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  {item.cards.map((text, idx) => (
                    <div
                      key={idx}
                      className="trabajo-card p-6 md:p-8 rounded-3xl backdrop-blur-md border text-xs sm:text-sm font-light leading-relaxed shadow-lg"
                    >
                      {text}
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};