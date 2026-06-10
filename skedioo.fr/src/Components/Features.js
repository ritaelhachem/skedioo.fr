import authIcon from '../assets/img/auth.jpg';
import clockIcon from '../assets/img/clock.jpg';
import usersIcon from '../assets/img/users.jpg';
import lockIcon from '../assets/img/lock.jpg';

const features = [
  {
    icon: authIcon,
    title: '100%',
    description: 'Traçabilité des données.',
  },
  {
    icon: clockIcon,
    title: 'Temps réel',
    description: 'Suivi des operations.',
  },
  {
    icon: usersIcon,
    title: 'Multi-acteurs',
    description: 'Collaboration simplifiée.',
  },
  {
    icon: lockIcon,
    title: 'Sécurisé',
    description: 'Gestion avancee des accès.',
  },
];

function Features() {
  return (
    <section className="features-section" id="solution">
      <div className="container">
        <div className="section-heading">
          <h2>Une solution pensée pour les professionnels du bâtiment</h2>
          <p>
            Skedioo accompagne les maîtres d&apos;ouvrage, bureaux d&apos;études,
            entreprises et sous-traitants dans le suivi <br/>et la coordination de
            leurs projets.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-item" key={feature.title}>
              <img src={feature.icon} alt="" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
