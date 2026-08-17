'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

const cases = [
  {
    name: 'María García',
    treatment: 'Diseño de Sonrisa & Carillas',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    comment: 'Increíble cambio, mi confianza mejoró muchísimo desde la primera cita.',
  },
  {
    name: 'Carlos Mendoza',
    treatment: 'Ortodoncia Invisible',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    comment: 'Un tratamiento súper discreto y los resultados fueron rapidísimos.',
  },
  {
    name: 'Ana Beltrán',
    treatment: 'Blanqueamiento Dental Premium',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    comment: 'El trato fue excepcional y el resultado superó mis expectativas.',
  },
];

export const Cases = () => {
  return (
    <section id="casos" className="py-24 px-6 md:px-12 bg-slate-100/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Casos de <span className="text-teal-600">Éxito</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Conoce los testimonios y las transformaciones de nuestros pacientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col items-center text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-teal-500">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex items-center gap-1 text-amber-400 mb-2">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 italic text-sm mb-4">"{item.comment}"</p>
              <h3 className="font-bold text-slate-900">{item.name}</h3>
              <p className="text-xs text-teal-600 font-medium">{item.treatment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};