import Image from 'next/image';
import Load from './load.png';

export default function Loading() {
  return (
    <main className="loading">
      <Image
        className="loading"
        src={Load}
        alt="loading picture"
        width={150}
        height={150}
        quality={100}
      />
    </main>
  );
}
