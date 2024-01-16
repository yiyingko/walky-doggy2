import Link from 'next/link';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

async function getWalks() {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.from('walks').select();

  if (error) {
    console.log(error.message);
  }

  return data;
}

//   const res = await fetch('http://localhost:4000/walks', {
//     next: {
//       revalidate: 0, // use 0 to opt out of using cache
//     },
//   });

//   return res.json();
// }

export default async function WalkList() {
  const walks = await getWalks();
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  return (
    <>
      {walks.map((walk) =>
        walk.date > new Date(Date.now()).toISOString().slice(0, 10) ? (
          <Link
            href={`/dashboard/${walk.id}`}
            className="list-container"
            key={walk.id}
          >
            <div className="list-grid1">
              <h3>{walk.date}</h3>
            </div>
            <div className="list-grid2">
              <h2>{walk.dog_name}</h2>
              <h3>{walk.pick_up_at.slice(0, 20)}...</h3>
              <h3>{walk.post_code}</h3>
            </div>
          </Link>
        ) : (
          ''
        )
      )}
      {walks.length === 0 && <p>There are no booked walks.</p>}
    </>
  );
}
