import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Showcase from './Components/Showcase';
import Footer from './Components/Footer';
import ConfidentialitePage from './Components/ConfidentialitePage';
import MentionsLegalesPage from './Components/MentionsLegalesPage';

function getPathname() {
  return window.location.pathname;
}

function App() {
  const [pathname, setPathname] = useState(getPathname());

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(getPathname());
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const isConfidentialitePage = pathname === '/confidentialite';
  const isMentionsPage = pathname === '/mentions-legales';
  const isLegalPage = isConfidentialitePage || isMentionsPage;

  return (
    <div className="site-shell">
      <Header isLegalPage={isLegalPage} />
      {isConfidentialitePage ? (
        <ConfidentialitePage />
      ) : isMentionsPage ? (
        <MentionsLegalesPage />
      ) : (
        <main>
          <Hero />
          <Features />
          <Showcase />
        </main>
      )}
      <Footer isLegalPage={isLegalPage} />
    </div>
  );
}

export default App;
