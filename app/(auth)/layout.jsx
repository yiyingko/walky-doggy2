import Link from 'next/link';
import Navbar from '@/app/components/Navbar-auth';

export default function AuthLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
