'use client';

import { useRef, useState, FormEvent } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const AppointmentForm = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const WHATSAPP_NUMBER = '524662134317';

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        '.contact-badge',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      )
        .fromTo(
          '.contact-title',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo(
          ['.contact-desc', '.contact-info'],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(
          '.contact-input',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(
          '.contact-button',
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
          '-=0.2'
        );
    },
    { scope: containerRef }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Construcción del mensaje prellenado
    const text = `Hola Creadent, mi nombre es *${formData.name}*.\n` +
      `Correo: ${formData.email}\n` +
      `Consulta: ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    
    // Abre WhatsApp Web o la App directamente
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, '_blank');
  };

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
              Contacto
            </span>
          </div>

          <h2 className="contact-title text-3xl md:text-6xl font-light leading-tight tracking-tight text-white">
            No dejes tu salud bucal para después.
          </h2>

          <p className="contact-desc text-xs sm:text-sm font-light text-white/80 leading-relaxed max-w-md">
            Agenda tu cita esta semana y luce una sonrisa perfecta.
          </p>
        </div>

        {/* Columna Derecha: Formulario */}
        <div className="lg:col-span-7 backdrop-blur-md bg-white/10 border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl space-y-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            <div className="contact-input space-y-2">
              <label className="text-xs uppercase tracking-wider font-light text-white/80 block">
                Nombre Completo
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Alejandra Morales"
                className="w-full bg-white/5 border border-white/20 rounded-2xl px-5 py-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div className="contact-input space-y-2">
              <label className="text-xs uppercase tracking-wider font-light text-white/80 block">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="alemorales@gmail.com"
                className="w-full bg-white/5 border border-white/20 rounded-2xl px-5 py-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div className="contact-input space-y-2">
              <label className="text-xs uppercase tracking-wider font-light text-white/80 block">
                Mensaje o Consulta
              </label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Detalla tu requerimiento o tipo de consulta..."
                className="w-full bg-white/5 border border-white/20 rounded-2xl px-5 py-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="contact-button w-full py-4 px-8 rounded-full bg-white text-[#4D12FF] font-medium text-sm hover:bg-[#C2B8FF] transition-colors duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enviar mensaje por WhatsApp</span>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default AppointmentForm;