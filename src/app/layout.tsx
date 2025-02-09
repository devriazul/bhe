import type { Metadata } from 'next';
import { Montserrat, Poppins } from 'next/font/google';
import '@/styles/globals.scss';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const montserrat = Montserrat({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BHE UNI - Unlock Your Potential',
  description: 'Your gateway to quality education and global opportunities',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${poppins.className}`}>
        <Navbar />
        <main className="min-vh-100 pt-5 mt-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}