import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shanket Kumar - Software Engineer & Frontend Developer',
  description: 'Passionate Software Engineer specializing in React, Next.js, and modern web development. Building exceptional digital experiences.',
  keywords: 'Software Engineer, Frontend Developer, React, Next.js, JavaScript, Python, Django',
  authors: [{ name: 'Shanket Kumar' }],
  openGraph: {
    title: 'Shanket Kumar - Software Engineer & Frontend Developer',
    description: 'Passionate Software Engineer specializing in React, Next.js, and modern web development.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shanket Kumar - Software Engineer & Frontend Developer',
    description: 'Passionate Software Engineer specializing in React, Next.js, and modern web development.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}