'use client';

import { useState } from 'react';
import { Send, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';

export const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: 'Diseño de Sonrisa',
    fecha: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Gracias ${formData.nombre}, nos pondremos en contacto muy pronto.`);
  };

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
          
          <div className="lg:col-span-5 p-8 sm:p-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-2 block">Contacto</span>
              <h2 className="text-3xl font-bold mb-6">Agenda tu cita de valoración</h2>
              <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                Da el primer paso hacia tu nueva sonrisa. Déjanos tus datos o escríbenos directamente por WhatsApp.
              </p>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Juárez 607, Salvatierra, Guanajuato</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                  <span className="text-slate-300">+52 (466) 663 33 72</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-teal-400 shrink-0" />
                  <span className="text-slate-300">Lun - Vie: 9:00 AM - 7:00 PM | Sáb: 9:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/+524662134317"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Agendar rápido por WhatsApp</span>
            </a>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-12 bg-white text-slate-900">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nombre Completo</label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Ana García"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Teléfono de Contacto</label>
                  <input
                    type="tel"
                    required
                    placeholder="466 123 45 67"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Servicio de Interés</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm bg-white"
                    value={formData.servicio}
                    onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                  >
                    <option>Diseño de Sonrisa</option>
                    <option>Ortodoncia Invisible</option>
                    <option>Blanqueamiento Dental</option>
                    <option>Implantes Dentales</option>
                    <option>Limpieza General</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Fecha Preferida</label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  value={formData.fecha}
                  onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-md shadow-teal-600/20"
              >
                <Send className="w-4 h-4" />
                <span>Confirmar Solicitud</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
