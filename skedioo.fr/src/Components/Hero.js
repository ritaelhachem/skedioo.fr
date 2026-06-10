import heroImage from '../assets/img/Presentation copie.jpg';

function Hero() {
  return (
    <section className="hero-section" id="accueil">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>
            <span className="hero-line">La plateforme digitale</span>
            <br />
            <span className="hero-line">
              qui <span className="hero-highlight">simplifie</span> le pilotage
            </span>
            <br />
            <span className="hero-line">de vos chantiers</span>
          </h1>

          <p>
            Skedioo centralise le suivi de chantier, la visualisation des plans,
            la gestion des acces et la coordination des intervenants dans une
            interface claire, moderne et pensee pour le terrain.
          </p>

          <div className="hero-actions">
            <a className="hero-primary-action" href="https://www.skedioo.fr/web">
              Se connecter
            </a>
            <a className="hero-secondary-action" href="#fonctionnalites">
              Voir les fonctionnalites
            </a>
          </div>
        </div>

        <div className="hero-media">
          <img src={heroImage} alt="Apercu de la plateforme Skedioo" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
