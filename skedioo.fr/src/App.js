import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Showcase from './Components/Showcase';
import Footer from './Components/Footer';
import ConfidentialitePage from './Components/ConfidentialitePage';
import MentionsLegalesPage from './Components/MentionsLegalesPage';
import slogo from './assets/img/Slogo.PNG';

const SITE_URL = 'https://www.skedioo.fr';
const PAGE_SEO = {
  '/': {
    title: 'Skedioo',
    description:
      'Skedioo, la plateforme digitale dediee au suivi et a la coordination de vos chantiers.',
  },
  '/confidentialite': {
    title: 'Confidentialite | Skedioo',
    description: 'Politique de confidentialite de Skedioo.',
  },
  '/mentions-legales': {
    title: 'Mentions legales | Skedioo',
    description: 'Mentions legales du site Skedioo.',
  },
};

function getPathname() {
  const pathname = window.location.pathname || '/';

  if (pathname !== '/' && pathname.endsWith('/')) {
    return pathname.replace(/\/+$/, '');
  }

  return pathname;
}

function setHeadTag(selector, createTag, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement(createTag);
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function syncSeo(pathname) {
  const seo = PAGE_SEO[pathname];
  const canonicalPath = seo ? pathname : '/';
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  document.title = seo?.title || 'Page introuvable | Skedioo';

  setHeadTag("meta[name='description']", 'meta', {
    name: 'description',
    content:
      seo?.description ||
      'Cette page n existe pas sur le site Skedioo.',
  });

  setHeadTag("link[rel='canonical']", 'link', {
    rel: 'canonical',
    href: canonicalUrl,
  });

  setHeadTag("meta[name='robots']", 'meta', {
    name: 'robots',
    content: seo ? 'index,follow' : 'noindex,follow',
  });
}

function App() {
  const [pathname, setPathname] = useState(getPathname());
  const isConfidentialitePage = pathname === '/confidentialite';
  const isMentionsPage = pathname === '/mentions-legales';
  const isHomePage = pathname === '/';
  const isKnownPage = isHomePage || isConfidentialitePage || isMentionsPage;
  const isLegalPage = isConfidentialitePage || isMentionsPage;

  useEffect(() => {
    let favicon = document.querySelector("link[rel='icon']");
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.setAttribute('rel', 'icon');
      document.head.appendChild(favicon);
    }
    favicon.setAttribute('href', slogo);

    const handleLocationChange = () => {
      const nextPathname = getPathname();
      if (window.location.pathname !== nextPathname) {
        window.history.replaceState(window.history.state, '', `${nextPathname}${window.location.search}${window.location.hash}`);
      }
      setPathname(nextPathname);
      window.scrollTo(0, 0);
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    syncSeo(pathname);
  }, [pathname]);

  return (
    <div className="site-shell">
      <Header isLegalPage={isLegalPage} />
      {isConfidentialitePage ? (
        <ConfidentialitePage />
      ) : isMentionsPage ? (
        <MentionsLegalesPage />
      ) : isHomePage ? (
        <main>
          <Hero />
          <Features />
          <Showcase />
        </main>
      ) : (
        <main className="container">
          <section className="legal-page">
            <div className="legal-shell">
              <div className="legal-card">
                <p className="legal-kicker">Erreur 404</p>
                <h1>Page introuvable</h1>
                <p>
                  Cette URL ne correspond a aucune page indexable du site
                  Skedioo.
                </p>
                <a className="cta-button" href="/">
                  Retour a l&apos;accueil
                </a>
              </div>
            </div>
          </section>
        </main>
      )}
      <Footer isLegalPage={isLegalPage || !isKnownPage} />
    </div>
  );
}

export default App;
