'use client';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

export default function BookingForm() {
  const router = useRouter();

  const [dog_name, setDogName] = useState('');
  const [pick_up_at, setPickUpAt] = useState('');
  const [post_code, setPostCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(new Date());

  const regex = /^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$/;

  const validate = (field, regex) => {
    if (regex.test(field.value)) {
      field.className = 'valid';
    } else {
      field.className = 'invalid';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newWalk = {
      dog_name,
      pick_up_at,
      post_code,
      date,
      // user_email: 'tota@learnnextjs.dev',
    };

    const res = await fetch('http://localhost:3000/api/walks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newWalk),
    });

    // if (res.status === 201) {
    //   router.push('/dashboard');
    //   router.refresh();
    // }

    const json = await res.json();

    if (json.error) {
      console.log(error.message);
    }
    if (json.data) {
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
          onChange={(e) =>
            validate(e.target, regex) || setPostCode(e.target.value)
          }
          value={post_code}
        />
        <p className="validation-text">Must be UK valid !</p>
      </label>
      <label className="day-picker">
        <span>Date:</span>
        <DatePicker
          className="bookfrom-input"
          showTimeSelect
          minTime={new Date(0, 0, 0, 9, 30)}
          maxTime={new Date(0, 0, 0, 19, 0)}
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="MMMM d, yyyy h:mmaa"
          value={date}
        />
      </label>

      <button className="form-btn" disabled={isLoading}>
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Book a Walk</span>}
      </button>
    </form>
  );
}
