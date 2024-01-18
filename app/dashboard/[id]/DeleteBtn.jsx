'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// icons & UI
import { TiDelete } from 'react-icons/ti';

export default function DeleteBtn({ id }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    setIsLoading(true);

    //console.log('deleting id - ', id);
    const res = await fetch(`http://localhost:3000/api/walks/${id}`, {
      method: 'DELETE',
    });
    console.log('deleting id - ', id);
    const json = await res.json();

    if (json.error) {
      console.log(error);
      setIsLoading(false);
    }
    if (!json.error) {
      router.push('/dashboard');
      router.refresh();
    }
  };

  return (
    <button className="btn-primary" onClick={handleClick} disabled={isLoading}>
      {isLoading && (
        <>
          <TiDelete />
          Cancling....
        </>
      )}
      {!isLoading && <>Cancle My Booking</>}
    </button>
  );
}
