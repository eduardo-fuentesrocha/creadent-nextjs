import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Cases } from "@/components/Cases";
import { About } from "@/components/About";
import { AppointmentForm } from "@/components/AppointmentForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Cases />
      <About />
      <div id="contacto">
        <AppointmentForm />
      </div>

      <footer className="py-8 bg-slate-900 border-t border-slate-800 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Creadent Clínica Dental. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}