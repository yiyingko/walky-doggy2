import './globals.css';
import { Archivo } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const archivo = Archivo({ subsets: ['latin'] });

export const metadata = {
  title: 'Walky Doggy',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
