import Link from 'next/link';
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
      <div className="nav-links">
        <div className="nav-link">
          <Link
            className="link-text"
            href="/"
            // style={{ textDecoration: 'none' }}
          >
            Home
          </Link>
        </div>
        <div className="nav-link">
          <Link className="link-text" href="/user/walks">
            Walks
          </Link>
        </div>
      </div>
      <button className="nav-btn">Log In</button>
    </nav>
  );
}
