import WalkList from './WalkList';
import PastList from './PastList';

export default function Walks() {
  return (
    <div className="dash-wrapper">
      <main className="dash-container">
        <div>
          <div className="dash-heading">
            <h2>Currently booked walks.</h2>
          </div>
          <WalkList />
        </div>

        <div>
          <div className="dash-heading">
            <h2>Check Past walk record</h2>
          </div>
          <PastList />
        </div>
      </main>
    </div>
  );
}
