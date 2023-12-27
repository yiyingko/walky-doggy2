import Image from 'next/image';
import Logo from '../components/logo.svg';

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
      <button className="nav-btn">Log Out</button>
    </nav>
  );
}
