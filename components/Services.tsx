'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Smile, Shield, Layers, RefreshCw } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Sparkles,
    title: 'Diseño de Sonrisa',
    description: 'Carillas y valoración estética digital para una sonrisa armónica y natural ajustada a tus facciones.',
  },
  {
    icon: Smile,
    title: 'Ortodoncia Invisible',
    description: 'Alineadores transparentes cómodos y estéticos para corregir la posición de tus dientes sin brackets tradicionales.',
  },
  {
    icon: RefreshCw,
    title: 'Blanqueamiento Dental',
    description: 'Tratamientos de aclarado clínico seguro que devuelven el brillo natural a tus dientes sin dañar el esmalte.',
  },
  {
    icon: Layers,
    title: 'Implantes Dentales',
    description: 'Rehabilitación definitiva con tecnología titanio/cerámica para recuperar la funcionalidad y estética completa.',
  },
  {
    icon: Shield,
    title: 'Limpieza y Prevención',
    description: 'Profilaxis ultrasónica profunda para mantener tus encías saludables y prevenir afecciones futuras.',
  },
];

export const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      '.service-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="servicios" className="py-24 bg-slate-100/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-3">Nuestras Especialidades</h2>
          <p className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Tratamientos diseñados para tu salud y confianza
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card group relative bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <span className="text-xs font-semibold text-teal-600 group-hover:text-teal-700 inline-flex items-center gap-1">
                  Saber más &rarr;
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};