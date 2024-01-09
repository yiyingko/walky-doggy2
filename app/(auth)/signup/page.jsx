'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import AuthForm from '../AuthForm';

export default function Signup() {
  const router = useRouter();
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    console.log(email, password);
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });
    if (error) {
      setFormError(error.message);
    }
    if (!error) {
      router.push('/verify');
    }
  };

  return (
    <main className="auth-wraper">
      <div className="auth-container">
        <h2>Login</h2>
        <AuthForm handleSubmit={handleSubmit} />
        {formError && <div>{formError}</div>}
      </div>
    </main>
  );
}
