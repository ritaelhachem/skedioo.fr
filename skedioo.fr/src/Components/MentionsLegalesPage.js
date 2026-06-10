const mentionsSections = [
  {
    title: '1. Editeur du service',
    content: [
      'Skedioo est une application professionnelle dédiée au suivi et à la gestion de projets de construction.',
      'Editeur:',
      'Skedioo',
      '36 rue Erlanger',
      '75016 Paris - France',
      'Email : contact@skedioo.fr',
      'Site web : https://www.skedioo.fr',
    ],
  },
  {
    title: '2. Responsable de la publication',
    content: [
      'Le responsable de la publication est : Skedioo',
      "Pour toute question relative au contenu du site ou de l'application, vous pouvez contacter : contact@skedioo.fr.",
    ],
  },
  {
    title: '3. Hébergement',
    content: [
      "Les informations relatives à l'hébergement du service peuvent être communiquées sur demande à l'adresse suivante :",
      'contact@skedioo.fr',
    ],
  },
  {
    title: '4. Propriété intellectuelle',
    content: [
      "L'ensemble des contenus présents sur le site et au sein de l'application Skedioo (textes, éléments graphiques, logos, illustrations, interfaces,documents et contenus associés) est protégé par les lois applicables en matière de propriété intellectuelle.",
      'Toute reproduction, représentation,diffusion,modification ou exploitation, totale ou partielle,sans autorisation préalable écrite est strictement interdite.',
    ],
  },
  {
    title: '5. Responsabilité',
    content: [
      "Skedioo met tout en œuvre pour fournir des informations fiables et assurer un service de qualité.Toutefois, aucune garantie absolue ne peut être apportée quant à l'absence d'erreurs,d'interruptions ou d'indisponibilités temporaires",
      "L'utilisateur reste responsable de l'usage qu'il fait du site, de l'application et des informations accessibles par leur intermédiaires.",
    ],
  },
  {
    title: '6. Données personnelles',
    content: [
      'Le traitement des données personnelles est encadré par la politique de confidentialité accessible sur la page dédiée.',
      'Pour toute demande liée à vos données personnelles, vous pouvez écrire à :',
      'contact@skedioo.fr',
    ],
  },
  {
    title: '7. Contact',
    content: [
      "Pour toute demande d'information, de support ou d'exercice de droits :",
      'contact@skedioo.fr',
      'https://www.skedioo.fr',
    ],
  },
];

function MentionsLegalesPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="container legal-hero-inner">
          <p className="legal-kicker">Informations juridiques</p>
          <h1>Mentions légales</h1>
          <p className="legal-intro">
            Informations relatives à l&apos;éditeur, à la publication, à l&apos;hébergement et à l&apos;utilisation du site et de l&apos;application Skedioo
          </p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container legal-content-inner">
          {mentionsSections.map((section) => (
            <article className="legal-block legal-card" key={section.title}>
              <h2>{section.title}</h2>
              {section.content.map((paragraph) => (
                <p key={paragraph}>
                  {paragraph === 'contact@skedioo.fr' ? (
                    <a href="mailto:contact@skedioo.fr">contact@skedioo.fr</a>
                  ) : paragraph === 'https://www.skedioo.fr' ? (
                    <a href="https://www.skedioo.fr">https://www.skedioo.fr</a>
                  ) : paragraph === 'Email : contact@skedioo.fr' ? (
                    <>
                      Email : <a href="mailto:contact@skedioo.fr">contact@skedioo.fr</a>
                    </>
                  ) : paragraph === 'Site web : https://www.skedioo.fr' ? (
                    <>
                      Site web : <a href="https://www.skedioo.fr">https://www.skedioo.fr</a>
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default MentionsLegalesPage;
