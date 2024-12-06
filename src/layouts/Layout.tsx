import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 