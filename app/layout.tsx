import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creadent | Clínica Dental & Estética Avanzada",
  description: "Diseñamos la sonrisa que siempre soñaste con odontología de alta precisión y tecnología de vanguardia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={jakarta.className}>{children}</body>
    </html>
  );
}
