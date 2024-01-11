import Link from 'next/link';
import Navbar from '@/app/components/Navbar-auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

export default async function AuthLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    redirect('/dashboard');
  }
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
