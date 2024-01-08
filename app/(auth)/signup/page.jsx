'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

// components
import AuthForm from '../AuthForm';

export default function Signup() {
  const router = useRouter();
  // const [error, setError] = useState('');

  // const handleSubmit = async (e, email, password) => {
  //   e.preventDefault();
  //   setError('');

  //   const supabase = createClientComponentClient();

  //   const { error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       emailRedirectTo: `${location.origin}/api/auth/callback`,
  //     },
  //   });
  //   if (error) {
  //     setError(error.message);
  //   }
  //   if (!error) {
  //     router.push('/verify');
  //   }
  // };

  const supabase = createClientComponentClient();

  const handleSubmit = async () => {
    await supabase.auth.signUp({
      email: 'c5170182@gmail.com',
      password: '12345',
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    //router.refresh();
    router.push('/verify');
  };

  return (
    <main className="auth-wraper">
      <div className="auth-container">
        <h2>Sign up</h2>
        <AuthForm handleSubmit={handleSubmit} />
        {/* {error && <div>{error}</div>} */}
      </div>
    </main>
  );
}
