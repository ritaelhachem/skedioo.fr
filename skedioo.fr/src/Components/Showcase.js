import dashboardImage from '../assets/img/ordi v2.jpg';

const points = [
  'Plan interactif',
  'Navigation par niveaux',
  'Visualisation par zones',
  'Indicateurs d avancement',
  'Acces rapide aux informations',
];

function Showcase() {
  return (
    <section className="showcase-section" id="fonctionnalites">
      <div className="container showcase-grid">
        <div className="showcase-media">
          <img src={dashboardImage} alt="Dashboard Skedioo sur ordinateur" />
        </div>

        <div className="showcase-copy">
          <h2>Une lecture claire de vos donnees chantier</h2>
          <p>
            Grace a une visualisation intuitive des plans et des informations
            terrain, Skedioo facilite la prise de decision et ameliore le suivi
            des operations.
          </p>

          <ul className="check-list">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
