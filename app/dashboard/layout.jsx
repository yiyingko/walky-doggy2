import Navbar from '@/app/components/Navbar-user';

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
