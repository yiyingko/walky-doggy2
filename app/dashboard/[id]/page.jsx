import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

import DeleteBtn from './DeleteBtn';

export const dynamicParams = true; // default val = true

export async function generateMetadata({ params }) {
  const supabase = createServerComponentClient({ cookies });

  const { data: walk } = await supabase
    .from('walks')
    .select()
    .eq('id', params.id)
    .single();

  return {
    title: `Walky Doggy | ${walk?.dog_name || 'walk not Found'}`,
  };
}

async function getWalk(id) {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.from('walks').select().eq('id', id).single();

  if (!data) {
    notFound();
  }

  return data;
  // const res = await fetch(`http://localhost:4000/walks/${id}`, {
  //   next: {
  //     revalidate: 60,
  //   },
  // });
  // if (!res.ok) {
  //   notFound();
  // }
  // return res.json();
}

export default async function WalkDetails({ params }) {
  // const id = params.id
  const walk = await getWalk(params.id);

  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  return (
    <main>
      <nav>
        <h2>Walk Details</h2>
      </nav>
      <div>
        <h3>{walk.dog_name}</h3>
        <small>Created by {walk.user_email}</small>
      </div>
      <div>
        <div>
          <DeleteBtn id={walk.id} />
        </div>
      </div>
    </main>
  );
}
