import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <h1>Walky Doggy</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/walks">Walks</Link>
    </nav>
  );
}
