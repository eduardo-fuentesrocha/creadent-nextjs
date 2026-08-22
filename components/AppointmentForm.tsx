'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AppointmentForm = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const badge = containerRef.current?.querySelector('.contact-badge');
    const title = containerRef.current?.querySelector('.contact-title');
    const desc = containerRef.current?.querySelector('.contact-desc');
    const info = containerRef.current?.querySelector('.contact-info');
    const formInputs = containerRef.current?.querySelectorAll('.contact-input');
    const button = containerRef.current?.querySelector('.contact-button');

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
      badge,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );

    // Animación suave de entrada del título principal (sin splitText)
    if (title) {
      tl.fromTo(
        title,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.3'
      );
    }

    // Descripción y datos de contacto
    if (desc || info) {
      tl.fromTo(
        [desc, info],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' },
        '-=0.4'
      );
    }

    // Entradas del formulario
    if (formInputs) {
      tl.fromTo(
        formInputs,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
        '-=0.4'
      );
    }

    // Botón de envío
    if (button) {
      tl.fromTo(
        button,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
        '-=0.2'
      );
    }
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="contacto"
      className="w-full py-24 px-6 md:px-16 bg-[#4D12FF] text-white relative z-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Columna Izquierda: Información */}
        <div className="lg:col-span-5 space-y-8 sticky top-28">
          <div className="contact-badge flex items-center gap-2">
            <span className="text-xs md:text-sm font-light uppercase tracking-wider text-white/70">
              03 / Contacto
            </span>
          </div>

          <h2 className="contact-title text-3xl md:text-6xl font-light leading-tight tracking-tight text-white">
            Iniciemos un proyecto juntos.
          </h2>

          <p className="contact-desc text-xs sm:text-sm font-light text-white/80 leading-relaxed max-w-md">
            Cuéntanos sobre tus requerimientos clínicos o consultas técnicas. Nuestro equipo responderá a la brevedad.
          </p>

          <div className="contact-info space-y-2 pt-4 text-xs md:text-sm font-light text-white/80">
            <p>contacto@creadent.com</p>
            <p>+52 (442) 000-0000</p>
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <div className="lg:col-span-7 backdrop-blur-md bg-white/10 border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl space-y-6">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            <div className="contact-input space-y-2">
              <label className="text-xs uppercase tracking-wider font-light text-white/80 block">
                Nombre Completo
              </label>
              <input
                type="text"
                placeholder="Dr. Alejandro Morales"
                className="w-full bg-white/5 border border-white/20 rounded-2xl px-5 py-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div className="contact-input space-y-2">
              <label className="text-xs uppercase tracking-wider font-light text-white/80 block">
                Correo Electrónico
              </label>
              <input
                type="email"
                placeholder="contacto@tuclinica.com"
                className="w-full bg-white/5 border border-white/20 rounded-2xl px-5 py-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div className="contact-input space-y-2">
              <label className="text-xs uppercase tracking-wider font-light text-white/80 block">
                Mensaje o Consulta
              </label>
              <textarea
                rows={4}
                placeholder="Detalla tu requerimiento o tipo de prótesis..."
                className="w-full bg-white/5 border border-white/20 rounded-2xl px-5 py-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="contact-button w-full py-4 px-8 rounded-full bg-white text-[#4D12FF] font-medium text-sm hover:bg-[#C2B8FF] transition-colors duration-300 shadow-lg"
            >
              Enviar Mensaje
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default AppointmentForm;