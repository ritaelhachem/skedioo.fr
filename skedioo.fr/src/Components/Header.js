import logoWhite from '../assets/img/logowhite.svg';

function Header({ isLegalPage = false }) {
  const homeHref = isLegalPage ? '/#accueil' : '#accueil';
  const solutionHref = isLegalPage ? '/#solution' : '#solution';
  const fonctionnalitesHref = isLegalPage ? '/#fonctionnalites' : '#fonctionnalites';
  const loginHref = 'https://www.skedioo.fr/web';

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href={homeHref} aria-label="Skedioo">
          <img className="brand-logo" src={logoWhite} alt="Skedioo" />
        </a>

        <nav className="main-nav" aria-label="Navigation principale">
          <a href={homeHref}>Accueil</a>
          <a href={solutionHref}>Solution</a>
          <a href={fonctionnalitesHref}>Fonctionnalités</a>
        </nav>

        <a className="cta-button" href={loginHref}>
          Se connecter
        </a>
      </div>
    </header>
  );
}

export default Header;
