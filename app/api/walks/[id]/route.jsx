import { NextResponse } from 'next/server';

export async function GET(_, { params }) {
  const id = params.id;

  const res = await fetch(`http://localhost:4000/walks/${id}`);
  const walk = await res.json();

  if (!res.ok) {
    return NextResponse.json(
      { error: 'Cannot find walk' },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(walk, {
    status: 200,
  });
}
