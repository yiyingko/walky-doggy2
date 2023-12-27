import Navbar from '@/app/components/Navbar-admin';

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
