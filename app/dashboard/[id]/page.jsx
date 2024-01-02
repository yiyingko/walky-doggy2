import { notFound } from 'next/navigation';
export const dynamicParams = true; // default val = true

async function getWalk(id) {
  const res = await fetch(`http://localhost:4000/walks/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function WalkDetails({ params }) {
  // const id = params.id
  const walk = await getWalk(params.id);

  return (
    <main>
      <nav>
        <h2>Walk Details</h2>
      </nav>
      <div>
        <h3>{walk.dog_name}</h3>
        <small>Created by {walk.user_email}</small>
      </div>
    </main>
  );
}
