function Header({ isLegalPage = false }) {
  const homeHref = isLegalPage ? '/#accueil' : '#accueil';
  const solutionHref = isLegalPage ? '/#solution' : '#solution';
  const fonctionnalitesHref = isLegalPage ? '/#fonctionnalites' : '#fonctionnalites';
  const contactHref = isLegalPage ? '/#contact' : '#contact';

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href={homeHref} aria-label="Skedioo">
          <span className="brand-accent">S</span>kedioo
        </a>

        <nav className="main-nav" aria-label="Navigation principale">
          <a href={homeHref}>Accueil</a>
          <a href={solutionHref}>Solution</a>
          <a href={fonctionnalitesHref}>Fonctionnalites</a>
        </nav>

        <a className="cta-button" href={contactHref}>
          Se connecter
        </a>
      </div>
    </header>
  );
}

export default Header;
