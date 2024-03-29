import WalkList from '../dashboard/WalkList';
import PastList from '../dashboard/PastList';
import { Suspense } from 'react';
import Loading from '../loading';

export default function Admin() {
  return (
    <div className="dash-wrapper">
      <main className="dash-container">
        <div>
          <div className="dash-heading">
            <h2>Currently booked walks.</h2>
          </div>
          <div className="dash-list">
            <Suspense fallback={<Loading />}></Suspense>
            <WalkList />
          </div>
        </div>

        <div>
          <div className="dash-heading">
            <h2>Check Past walk record</h2>
          </div>
          <div className="dash-list">
            <Suspense fallback={<Loading />}></Suspense>
            <PastList />
          </div>
        </div>
      </main>
    </div>
  );
}
