import Image from 'next/image';
import Logo from '../components/logo.svg';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Image
        className="logo"
        src={Logo}
        alt="Walky Doggy logo"
        width={200}
        height={100}
        quality={100}
      />

      <Link href="/login">
        <button className="nav-btn">Log In</button>
      </Link>
    </nav>
  );
}
