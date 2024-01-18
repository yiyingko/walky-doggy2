import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function DELETE(_, { params }) {
  const id = params.id;

  const supabase = createRouteHandlerClient({ cookies });
  console.log({ id });
  const { error } = await supabase.from('walks').delete().eq('id', id);

  return NextResponse.json({ error });
}

// export async function GET(_, { params }) {
//   const id = params.id;

//   const res = await fetch(`http://localhost:4000/walks/${id}`);
//   const walk = await res.json();

//   if (!res.ok) {
//     return NextResponse.json(
//       { error: 'Cannot find walk' },
//       {
//         status: 404,
//       }
//     );
//   }

//   return NextResponse.json(walk, {
//     status: 200,
//   });
// }
