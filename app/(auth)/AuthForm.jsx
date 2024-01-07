'use client';

import { useState } from 'react';

export default function AuthForm({ handleSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      className="authform"
      onSubmit={(e) => handleSubmit(e, email, password)}
    >
      <label className="authform-label">
        <span className="authform-span">Email:</span>
        <input
          className="authform-input"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </label>
      <label className="authform-label">
        <span className="authform-span">Password:</span>
        <input
          className="authform-input"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </label>
      <button className="authform-btn">Submit</button>
    </form>
  );
}
