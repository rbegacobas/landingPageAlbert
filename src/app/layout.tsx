import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppFloatButton from '../components/WhatsAppFloatButton';

import '../styles/globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Albert&Yudy - Envío de Remesas y Servicios Financieros',
  description: 'Servicios de envío de remesas, recarga de celular y compra de pasajes. Soluciones financieras simples y confiables.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
