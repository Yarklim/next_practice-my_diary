import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'My Diary App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} flex flex-col items-center bg-neutral-900`}
      >
        <Image
          src={'/images/img.jpg'}
          alt="diary"
          width={1920}
          height={682}
          priority={true}
        />
        {children}
      </body>
    </html>
  );
}