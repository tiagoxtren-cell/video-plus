import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "VÍDEO+ — Seu próximo play",
  description: "Filmes, séries e vídeos em um só lugar."
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}