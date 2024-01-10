'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import AuthForm from '../AuthForm';

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    setError('');

    const supabase = createClientComponentClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    }
    if (!error) {
      router.push('/dashboard');
    }
  };

  return (
    <main className="auth-wraper">
      <div className="auth-container">
        <h2>Login</h2>
        <AuthForm handleSubmit={handleSubmit} />
      </div>
      {error && <div className="error">{error}</div>}
    </main>
  );
}
