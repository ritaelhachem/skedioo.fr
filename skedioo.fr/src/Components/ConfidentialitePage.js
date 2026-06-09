const legalSections = [
  {
    title: '1. Introduction',
    content: [
      'Skedioo est une application professionnelle dediee au suivi et a la gestion des projets de construction.',
      'La presente politique de confidentialite explique comment les donnees sont collectees, utilisees, stockees et protegees lors de l utilisation de l application Skedioo.',
    ],
  },
  {
    title: '2. Responsable du traitement',
    content: [
      'Le responsable du traitement des donnees est :',
      'Skedioo',
      '36 rue Erlanger',
      '75016 Paris - France',
      'Email : contact@skedioo.fr',
      'Site web : https://www.skedioo.fr',
    ],
  },
  {
    title: '3. Donnees collectees',
    content: [
      'Dans le cadre de l utilisation de l application, Skedioo peut collecter les donnees suivantes :',
    ],
    groups: [
      {
        title: 'Donnees fournies par l utilisateur',
        items: [
          'Adresse email',
          'Identifiant utilisateur',
          'Informations liees aux projets geres dans l application',
          'Contenus saisis ou generes dans le cadre de l utilisation du service',
        ],
      },
      {
        title: 'Donnees techniques',
        items: [
          'Logs techniques',
          'Donnees de diagnostic',
          'Informations liees a l utilisation de l application',
          'Informations de connexion et de securite',
        ],
      },
    ],
    footer:
      'Skedioo ne collecte aucune donnee personnelle sensible sans le consentement explicite de l utilisateur.',
  },
  {
    title: '4. Finalites du traitement',
    content: ['Les donnees collectees sont utilisees uniquement pour :'],
    items: [
      'Permettre le fonctionnement et la securite de l application',
      'Assurer le suivi et la gestion des projets de construction',
      'Ameliorer l experience utilisateur',
      'Maintenir et ameliorer les performances techniques',
      'Fournir un support technique',
    ],
    footer:
      'Les donnees ne sont ni vendues ni utilisees a des fins commerciales ou publicitaires.',
  },
  {
    title: '5. Base legale du traitement',
    content: ['Les donnees sont traitees sur la base :'],
    items: [
      'De l execution du service fourni par l application',
      'Du consentement de l utilisateur lorsque requis',
      'Du respect des obligations legales applicables',
    ],
  },
  {
    title: '6. Partage des donnees',
    content: [
      'Les donnees peuvent etre hebergees ou traitees par des prestataires techniques necessaires au fonctionnement du service, notamment pour :',
    ],
    items: [
      'L hebergement des serveurs',
      'La maintenance technique',
      'La securite des infrastructures',
    ],
    footer:
      'Ces prestataires sont soumis a des obligations strictes de confidentialite et de protection des donnees. Skedioo ne vend ni ne partage les donnees personnelles avec des tiers a des fins commerciales.',
  },
  {
    title: '7. Hebergement et transfert des donnees',
    content: [
      'Les donnees sont hebergees sur des serveurs securises.',
      'Lorsque cela est possible, les donnees sont hebergees au sein de l Union Europeenne.',
      'Si un transfert hors Union Europeenne devait etre necessaire, celui-ci serait realise conformement aux reglementations applicables en matiere de protection des donnees.',
    ],
  },
  {
    title: '8. Securite des donnees',
    content: [
      'Skedioo met en oeuvre des mesures techniques et organisationnelles afin de proteger les donnees contre :',
    ],
    items: [
      'L acces non autorise',
      'La perte ou destruction des donnees',
      'La modification ou divulgation non autorisee',
    ],
    trailingTitle: 'Ces mesures incluent notamment :',
    trailingItems: [
      'Chiffrement des communications',
      'Authentification securisee',
      'Controle d acces aux donnees',
    ],
  },
  {
    title: '9. Duree de conservation des donnees',
    content: [
      'Les donnees sont conservees uniquement pendant la duree necessaire a l utilisation du service ou conformement aux obligations legales applicables.',
    ],
  },
  {
    title: '10. Suppression du compte',
    content: [
      'L utilisateur peut demander a tout moment la suppression de son compte ainsi que des donnees associees en envoyant une demande a :',
      'contact@skedioo.fr',
    ],
  },
  {
    title: '11. Droits des utilisateurs',
    content: [
      'Conformement au Reglement General sur la Protection des Donnees (RGPD), les utilisateurs disposent des droits suivants :',
    ],
    items: [
      'Droit d acces aux donnees',
      'Droit de rectification',
      'Droit d effacement',
      'Droit d opposition',
      'Droit a la limitation du traitement',
      'Droit a la portabilite des donnees',
    ],
    footer:
      'Toute demande peut etre adressee a contact@skedioo.fr. Les utilisateurs disposent egalement du droit d introduire une reclamation aupres de la CNIL (Commission Nationale de l Informatique et des Libertes).',
  },
  {
    title: '12. Donnees des mineurs',
    content: [
      'L application Skedioo est destinee a un usage professionnel et n est pas concue pour etre utilisee par des personnes agees de moins de 18 ans.',
    ],
  },
  {
    title: '13. Cookies et suivi',
    content: [
      'L application Skedioo n utilise pas de cookies ni de systemes de suivi publicitaire.',
      'L application ne realise aucun profilage marketing.',
    ],
  },
  {
    title: '14. Modification de la politique de confidentialite',
    content: [
      'Skedioo se reserve le droit de modifier la presente politique de confidentialite a tout moment afin de refleter les evolutions legales, techniques ou fonctionnelles du service.',
      'En cas de modification importante, les utilisateurs seront informes dans l application ou par email lorsque cela est requis.',
      'La date de derniere mise a jour est indiquee en haut du document.',
    ],
  },
];

function ConfidentialitePage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="container legal-hero-inner">
          <p className="legal-kicker">Protection des donnees</p>
          <h1>Politique de confidentialite</h1>
          <p className="legal-intro">
            Informations relatives a la collecte, l utilisation, la conservation
            et la protection des donnees dans l application Skedioo.
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
