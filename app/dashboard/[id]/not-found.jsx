import Link from 'next/link';
import Image from 'next/image';
import Notfound from '../[id]/404.jpg';

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="404-img">
        <Image
          className="dog"
          src={Notfound}
          alt="dog picture"
          width={400}
          height={400}
          quality={100}
        />
      </div>
      <div className="not-found-text">
        <h1>
          <strong>404 Not Found</strong>: Could not find the walk you were
          looking for.
        </h1>
        <p>
          Go back to <Link href="/dashboard">dashboard</Link>.
        </p>
      </div>
    </main>
  );
}
