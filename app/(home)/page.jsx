import { Literata } from 'next/font/google';
import Image from 'next/image';
import Dog from '../(home)/dog-2.jpg';

const literata = Literata({
  subsets: ['latin'],
  weight: '800',
  variable: '--font-literata',
});

export const metadata = {
  title: 'Walky Doggy | Home',
};

export default function Home() {
  return (
    <main className="hero-container">
      <div className="hero-grid">
        <div className="hero-1">
          <p className={literata.className}>
            Your daily dog walk with our professional dog walkers make easy.
          </p>
          <button className="nav-btn">Join Us</button>
        </div>
        <div className="hero-2">
          <div className="hero-3">
            <Image
              className="dog"
              src={Dog}
              alt="dog picture"
              width={400}
              height={400}
              quality={100}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
