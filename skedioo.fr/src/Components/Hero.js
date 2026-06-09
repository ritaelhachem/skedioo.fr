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
        </div>

        <div className="hero-media">
          <img src={heroImage} alt="Presentation mobile et chantier Skedioo" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
