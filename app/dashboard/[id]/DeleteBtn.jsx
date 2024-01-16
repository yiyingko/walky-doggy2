'use client';
import { useState } from 'react';

// icons & UI
import { TiDelete } from 'react-icons/ti';

export default function DeleteBtn({ id }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    console.log('deleting id - ', id);
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
