import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://carreaders.ai'),
  title: 'Car Bronze — AI Vehicle Health Reports',
  description:
    'Transform vehicle photos into instant health reports with AI-powered detection, condition scoring, and repair recommendations.',
  openGraph: {
    title: 'Car Bronze — AI Vehicle Health Reports',
    description:
      'Fast, intelligent vehicle diagnostics from image uploads to delivered maintenance guidance.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased font-sans" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}