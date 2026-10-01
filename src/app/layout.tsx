import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ezequiel Rodrigues — Engenharia de Software",
  description:
    "Portfólio de Ezequiel Rodrigues: desenvolvimento, automação, processos e soluções digitais.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
