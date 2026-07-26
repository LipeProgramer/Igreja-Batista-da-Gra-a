import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Igreja Batista da Graça — Maringá, PR',
  description:
    'A Igreja Batista da Graça é uma comunidade aberta a quem busca, questiona e quer crescer. Cultos aos domingos às 18h30 em Maringá, Paraná.',
  keywords: ['Igreja Batista', 'Maringá', 'Paraná', 'Culto', 'Igreja Evangélica', 'IBG'],
  openGraph: {
    title: 'Igreja Batista da Graça — Maringá, PR',
    description: 'Uma comunidade aberta a quem busca, questiona e quer crescer.',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
