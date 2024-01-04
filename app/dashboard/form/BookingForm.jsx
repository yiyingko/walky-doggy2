'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function BookingForm() {
  const router = useRouter();

  const [dog_name, setDogName] = useState('');
  const [pick_up_at, setPickUpAt] = useState('');
  const [post_code, setPostCode] = useState('');
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newWalk = {
      dog_name,
      pick_up_at,
      post_code,
      date,
      user_email: 'tota@learnnextjs.dev',
    };

    const res = await fetch('http://localhost:4000/walks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newWalk),
    });

    if (res.status === 201) {
      router.push('/dashboard');
      router.refresh();
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>
        <span>Dog Name:</span>
        <input
          className="bookfrom-input"
          required
          type="text"
          onChange={(e) => setDogName(e.target.value)}
          value={dog_name}
        />
      </label>
      <label>
        <span>Pick Up Address:</span>
        <input
          className="bookfrom-input"
          required
          onChange={(e) => setPickUpAt(e.target.value)}
          value={pick_up_at}
        />
      </label>
      <label>
        <span>Post Code:</span>
        <input
          className="bookfrom-input"
          required
          onChange={(e) => setPostCode(e.target.value)}
          value={post_code}
        />
      </label>
      <label>
        <span>Date:</span>
        <input
          className="bookfrom-input"
          required
          onChange={(e) => setDate(e.target.value)}
          value={date}
          placeholder="yyyy-mm-dd"
        />
      </label>
      <button className="form-btn" disabled={isLoading}>
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Book a Walk</span>}
      </button>
    </form>
  );
}
