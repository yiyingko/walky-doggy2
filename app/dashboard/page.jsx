import WalkList from './WalkList';
import PastList from './PastList';
import { Suspense } from 'react';
import Loading from '../loading';

export default function Walks() {
  return (
    <div className="dash-wrapper">
      <main className="dash-container">
        <div className="dash-list">
          <div className="dash-heading">
            <h2>Currently booked walks.</h2>
          </div>
          <Suspense fallback={<Loading />}></Suspense>
          <WalkList />
        </div>

        <div className="dash-list">
          <div className="dash-heading">
            <h2>Check Past walk record</h2>
          </div>
          <Suspense fallback={<Loading />}></Suspense>
          <PastList />
        </div>
      </main>
    </div>
  );
}
