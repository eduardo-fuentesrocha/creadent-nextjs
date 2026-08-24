import { Hero } from "@/components/Hero";
import { ValoresSection } from '@/components/ValoresSection';
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { AppointmentForm } from '@/components/AppointmentForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Hero />
      <Services />
      <div id="nosotros">
        <ValoresSection />
      </div>
      <About />
      <div id="contacto">
        <AppointmentForm />
      </div>
      <Footer />
    </main>
  );
}