import { Inter } from 'next/font/google';

import Navbar from './components/navbar/Navbar';
import './globals.css';
import Head from './head';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
      <body>
        <Navbar />
        <div className="pt-[78px] tracking-wide">{children}</div>
      </body>
    </html>
  );
}
