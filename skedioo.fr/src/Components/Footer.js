import logoWhite from '../assets/img/logowhite.svg';

function Footer({ isLegalPage = false }) {
  const homeHref = isLegalPage ? '/#accueil' : '#accueil';
  const solutionHref = isLegalPage ? '/#solution' : '#solution';
  const fonctionnalitesHref = isLegalPage ? '/#fonctionnalités' : '#fonctionnalités';

  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="brand" href={homeHref} aria-label="Skedioo">
            <img className="brand-logo" src={logoWhite} alt="Skedioo" />
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
          <a href={fonctionnalitesHref}>Fonctionnalités</a>
        </div>

        <div>
          <h3>Ressources</h3>
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/confidentialite">Confidentialité</a>
        </div>

        <div>
          <h3>Contact</h3>
          <a href="mailto:contact@skedioo.fr">contact@skedioo.fr</a>
          <a href="https://www.skedioo.fr">www.skedioo.fr</a>
          <a href="mailto:contact@skedioo.fr?subject=Demande%20de%20demo">
            Demander une demo
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>(c) 2026 Skedioo - Tous droits reserves.</p>
      </div>
    </footer>
  );
}

export default Footer;
