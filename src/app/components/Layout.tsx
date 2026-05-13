import { Outlet, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { FloatingPageCorner } from './FloatingPageCorner';
import { Preloader } from './ui/Preloader';

export function Layout() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Preloader onLoadingComplete={() => setLoading(false)} />
      
      {!loading && (
        <>
          <Navbar />
          <main className="flex-1 pt-16">
            <Outlet />
          </main>
          <Footer />
          <FloatingPageCorner />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}
