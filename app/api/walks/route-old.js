import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const res = await fetch('http://localhost:4000/walks');

  const tickets = await res.json();

  return NextResponse.json(tickets, {
    status: 200,
  });
}

export async function POST(request) {
  const walk = await request.json();

  const res = await fetch('http://localhost:4000/walks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(walk),
  });

  const newWalk = await res.json();

  return NextResponse.json(newWalk, {
    status: 201,
  });
}
