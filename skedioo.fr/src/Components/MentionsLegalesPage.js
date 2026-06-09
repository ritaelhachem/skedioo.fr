const mentionsSections = [
  {
    title: '1. Editeur du service',
    content: [
      'Skedioo est une application professionnelle dediee au suivi et a la gestion des projets de construction.',
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
      'Responsable de la publication : Skedioo.',
      'Pour toute question relative au contenu du site ou de l application, vous pouvez contacter : contact@skedioo.fr.',
    ],
  },
  {
    title: '3. Hebergement',
    content: [
      'Les informations techniques detaillees relatives a l hebergement du service peuvent etre communiquees sur demande a l adresse contact@skedioo.fr.',
    ],
  },
  {
    title: '4. Propriete intellectuelle',
    content: [
      'L ensemble des contenus presents sur ce site et au sein de l application Skedioo (textes, elements graphiques, logos, illustrations, interfaces, documents et contenus associes) est protege par les regles applicables en matiere de propriete intellectuelle.',
      'Toute reproduction, representation, diffusion, modification ou exploitation, totale ou partielle, sans autorisation prealable ecrite est interdite.',
    ],
  },
  {
    title: '5. Responsabilite',
    content: [
      'Skedioo met tout en oeuvre pour fournir des informations fiables et maintenir un service de qualite. Toutefois, aucune garantie absolue ne peut etre apportee quant a l absence d erreurs, d interruptions ou d indisponibilites temporaires.',
      'L utilisateur reste responsable de l usage qu il fait du site, de l application et des informations accessibles par leur intermediaire.',
    ],
  },
  {
    title: '6. Donnees personnelles',
    content: [
      'Le traitement des donnees personnelles est encadre par la politique de confidentialite accessible sur la page dediee.',
      'Pour toute demande liee a vos donnees personnelles, vous pouvez ecrire a : contact@skedioo.fr.',
    ],
  },
  {
    title: '7. Contact',
    content: [
      'Pour toute demande d information, support ou exercice de droits :',
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
          <h1>Mentions legales</h1>
          <p className="legal-intro">
            Informations relatives a l editeur, a la publication, a
            l hebergement et a l utilisation du site et de l application
            Skedioo.
          </p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container legal-content-inner">
          {mentionsSections.map((section) => (
            <article className="legal-block" key={section.title}>
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
