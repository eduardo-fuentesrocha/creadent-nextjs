import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creadent Clínica Dental",
  description: "Diseñamos tu mejor sonrisa",
  openGraph: {
  title: "Creadent Clínica Dental",
  description: "Diseñamos tu mejor sonrisa",
  images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Creadent Clínica Dental",
    },
  ],
  locale: "es_MX",
  type: "website",
},
twitter: {
  card: "summary_large_image",
  title: "Creadent Clínica Dental",
  description: "Diseñamos tu mejor sonrisa",
  images: ["/og-image.jpg"],
},
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