'use client';

import AuthForm from '../AuthForm';

export default function Login() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <main className="auth-wraper">
      <div className="auth-container">
        <h2>Login</h2>
        <AuthForm handleSubmit={handleSubmit} />
      </div>
    </main>
  );
}
