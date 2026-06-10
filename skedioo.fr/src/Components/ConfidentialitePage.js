const legalSections = [
  {
    title: '1. Introduction',
    content: [
      'Skedioo est une application professionnelle dédiée au suivi et à la gestion des projets de construction.',
      'La présente politique de confidentialité explique comment les données sont collectées, utilisées, stockées et protégées lors de l\'utilisation de l\'application Skedioo.',
    ],
  },
  {
    title: '2. Responsable du traitement',
    content: [
      'Le responsable du traitement des données est :',
      'Skedioo',
      '36 rue Erlanger',
      '75016 Paris - France',
      'Email : contact@skedioo.fr',
      'Site web : https://www.skedioo.fr',
    ],
  },
  {
    title: '3. Données collectées',
    content: [
      'Dans le cadre de l\'utilisation de l\'application, Skedioo peut collecter les données suivantes :',
    ],
    groups: [
      {
        title: 'Données fournies par l\'utilisateur',
        items: [
          'Adresse email',
          'Identifiant utilisateur',
          'Informations liées aux projets gérés dans l\'application',
          'Contenus saisis ou générés dans le cadre de l\'utilisation du service',
        ],
      },
      {
        title: 'Données techniques',
        items: [
          'Logs techniques',
          'Données de diagnostic',
          'Informations liées à l\'utilisation de l\'application',
          'Informations de connexion et de sécurité',
        ],
      },
    ],
    footer:
      'Skedioo ne collecte aucune donnée personnelle sensible sans le consentement explicite de l\'utilisateur.',
  },
  {
    title: '4. Finalités du traitement',
    content: ['Les données collectées sont utilisées uniquement pour :'],
    items: [
      'Permettre le fonctionnement et la sécurité de l\'application',
      'Assurer le suivi et la gestion des projets de construction',
      'Améliorer l\'expérience utilisateur',
      'Maintenir et améliorer les performances techniques',
      'Fournir un support technique',
    ],
    footer:
      'Les données ne sont ni vendues ni utilisées à des fins commerciales ou publicitaires.',
  },
  {
    title: '5. Base légale du traitement',
    content: ['Les données sont traitées sur la base :'],
    items: [
      'De l\'exécution du service fourni par l\'application',
      'Du consentement de l\'utilisateur lorsque requis',
      'Du respect des obligations légales applicables',
    ],
  },
  {
    title: '6. Partage des données',
    content: [
      'Les données peuvent être hébergées ou traitées par des prestataires techniques nécessaires au fonctionnement du service, notamment pour :',
    ],
    items: [
      'L\'hébergement des serveurs',
      'La maintenance technique',
      'La sécurité des infrastructures',
    ],
    footer:
      'Ces prestataires sont soumis à des obligations strictes de confidentialité et de protection des données. Skedioo ne vend ni ne partage les données personnelles avec des tiers à des fins commerciales.',
  },
  {
    title: '7. Hébergement et transfert des données',
    content: [
      'Les données sont hébergées sur des serveurs sécurisés.',
      'Dans la mesure du possible, les données sont hébergées au sein de l\'Union européenne.',
      'En cas de transfert hors Union européenne, celui-ci sera réalisé conformément aux réglementations applicables en matière de protection des données.',
    ],
  },
  {
    title: '8. Sécurité des données',
    content: [
      'Skedioo met en œuvre des mesures techniques et organisationnelles afin de protéger les données contre :',
    ],
    items: [
      'L\'accès non autorisé',
      'La perte ou destruction des données',
      'La modification ou divulgation non autorisée',
    ],
    trailingTitle: 'Ces mesures incluent notamment :',
    trailingItems: [
      'Le chiffrement des communications',
      'Une authentification sécurisée',
      'Un contrôle d\'accès aux données',
    ],
  },
  {
    title: '9. Durée de conservation des données',
    content: [
      'Les données sont conservées uniquement pendant la durée nécessaire à l\'utilisation du service ou conformément aux obligations légales applicables.',
    ],
  },
  {
    title: '10. Suppression du compte',
    content: [
      'L\'utilisateur peut demander à tout moment la suppression de son compte ainsi que des données associées en envoyant une demande à :',
      'contact@skedioo.fr',
    ],
  },
  {
    title: '11. Droits des utilisateurs',
    content: [
      'Conformément au Règlement Général sur la Protection des Données (RGPD), les utilisateurs disposent des droits suivants :',
    ],
    items: [
      'Droit d\'accès aux données',
      'Droit de rectification',
      'Droit à l\'effacement',
      'Droit d\'opposition',
      'Droit à la limitation du traitement',
      'Droit à la portabilité des données',
    ],
    footer:[
      'Toute demande peut être adressée à contact@skedioo.fr.',
      'Les utilisateurs disposent également du droit d\'introduire une réclamation auprès de la CNIL (Commission Nationale de l\'Informatique et des Libertés).',

    ]
      
  },
  {
    title: '12. Données des mineurs',
    content: [
      'L\'application Skedioo est destinée à un usage professionnel et n\'est pas conçue pour être utilisée par des personnes âgées de moins de 18 ans.',
    ],
  },
  {
    title: '13. Cookies et suivi',
    content: [
      'L\'application Skedioo n\'utilise pas de cookies ni de systèmes de suivi publicitaire.',
      'Aucun profilage marketing n\'est effectué.',
    ],
  },
  {
    title: '14. Modification de la politique de confidentialité',
    content: [
      'Skedioo se réserve le droit de modifier la présente politique de confidentialité à tout moment afin de refléter les évolutions légales, techniques ou fonctionnelles du service.',
      'En cas de modification importante, les utilisateurs seront informés dans l\'application ou par email lorsque cela est requis',
      'La date de dernière mise à jour: Mercredi 10 Juin 2026',
    ],
  },
];

function ConfidentialitePage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="container legal-hero-inner">
          <p className="legal-kicker">Protection des donnees</p>
          <h1>Politique de confidentialité</h1>
          <p className="legal-intro">
            Informations relatives à la collecte, l&apos;utilisation, la conservation
            et la protection des données dans l&apos;application Skedioo.
          </p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container legal-content-inner">
          {legalSections.map((section) => (
            <article className="legal-block" key={section.title}>
              <h2>{section.title}</h2>

              {section.content?.map((paragraph) => (
                <p key={paragraph}>
                  {paragraph === 'contact@skedioo.fr' ? (
                    <a href="mailto:contact@skedioo.fr">contact@skedioo.fr</a>
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

              {section.groups?.map((group) => (
                <div className="legal-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {section.items ? (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}

              {section.trailingTitle ? <p>{section.trailingTitle}</p> : null}

              {section.trailingItems ? (
                <ul>
                  {section.trailingItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}

              {section.footer ? <p>{section.footer}</p> : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ConfidentialitePage;
