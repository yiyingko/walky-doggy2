import WalkList from './WalkList';

export default function Walks() {
  return (
    <main>
      <nav>
        <div>
          <h2>Walks</h2>
          <p>
            <small>Currently booked walks.</small>
          </p>
        </div>
      </nav>
      <WalkList />
    </main>
  );
}
