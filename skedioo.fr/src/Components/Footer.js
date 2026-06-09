function Footer({ isLegalPage = false }) {
  const homeHref = isLegalPage ? '/#accueil' : '#accueil';
  const solutionHref = isLegalPage ? '/#solution' : '#solution';
  const fonctionnalitesHref = isLegalPage ? '/#fonctionnalites' : '#fonctionnalites';

  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="brand" href={homeHref} aria-label="Skedioo">
            <span className="brand-accent">S</span>kedioo
          </a>
          <p>
            La plateforme digitale dediee au suivi et a la coordination de vos
            chantiers.
          </p>
        </div>

        <div>
          <h3>Navigation</h3>
          <a href={homeHref}>Accueil</a>
          <a href={solutionHref}>Solution</a>
          <a href={fonctionnalitesHref}>Fonctionnalites</a>
        </div>

        <div>
          <h3>Ressources</h3>
          <a href="/mentions-legales">Mentions legales</a>
          <a href="/confidentialite">Confidentialite</a>
        </div>

        <div>
          <h3>Contact</h3>
          <a href="mailto:contact@skedioo.fr">contact@skedioo.fr</a>
          <a href="https://www.skedioo.fr">www.skedioo.fr</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>(c) 2026 Skedioo - Tous droits reserves.</p>
      </div>
    </footer>
  );
}

export default Footer;
