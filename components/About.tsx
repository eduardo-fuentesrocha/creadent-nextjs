'use client';

import { Award, Heart, ShieldCheck, Users } from 'lucide-react';

const stats = [
  { icon: Users, title: '+5,000', label: 'Pacientes Atendidos' },
  { icon: Award, title: '12+ Años', label: 'De Experiencia' },
  { icon: ShieldCheck, title: '100%', label: 'Garantía Quirúrgica' },
  { icon: Heart, title: '4.9 / 5', label: 'Satisfacción General' },
];

export const About = () => {
  return (
    <section id="nosotros" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
              Sobre <span className="text-teal-600">Creadent</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Somos una clínica dental enfocada en la innovación tecnológica y la atención personalizada. Nuestro objetivo es devolverte una sonrisa funcional y estética en un ambiente cómodo y seguro.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Contamos con especialistas en cada rama de la odontología para brindarte un diagnóstico integral desde la primera visita.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-bold text-slate-900">{stat.title}</span>
                  <span className="text-xs text-slate-500 mt-1">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};