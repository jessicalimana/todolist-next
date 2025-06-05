import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner"

export const metadata = {
  title: 'ToDo List',
  description: 'Minha lista de tarefas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Toaster /> {/* ✅ Aqui renderiza o Sonner, uma vez só, no root */}
      </body>
    </html>
  )
}
