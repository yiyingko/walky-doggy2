async function getWalks() {
  const res = await fetch('http://localhost:4000/walks', {
    next: {
      revalidate: 0, // use 0 to opt out of using cache
    },
  });

  return res.json();
}

export default async function WalkList() {
  const walks = await getWalks();

  return (
    <>
      {walks.map((walk) => (
        <div key={walk.id}>
          <h2>{walk.dog_name}</h2>
          <h3>{walk.pick_up_at}</h3>
          <h3>{walk.post_code}</h3>
          <h3>{walk.date}</h3>
        </div>
      ))}
      {walks.length === 0 && <p>There are no booked walks.</p>}
    </>
  );
}
