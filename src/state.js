import { ROLE, CATEGORY, LEVEL } from "./enum";
import TECHNO from "./techno";

const state = {
  projects: [
    {
      name: "Selling Platform Connect",
      company: "Amadeus",
      projectImg: "../product/seco.jpg",
      projectAlt: "Snapshot of the Selling Platform Connect login page",
      role: ROLE.FRONTEND,
      type: "Web Application",
      activity: "Travel & Tourism",
      logo: "../logo/amadeus.png",
      startDate: new Date(2016, 6, 1),
      endDate: new Date(2017, 12, 1),
      technologies: [
        TECHNO.HTML,
        TECHNO.CSS,
        TECHNO.ARIA_TEMPLATE,
        TECHNO.JAVASCRIPT,
        TECHNO.TYPESCRIPT,
        TECHNO.ANGULAR,
        TECHNO.JAVA,
        TECHNO.SPRING,
        TECHNO.GIT,
        TECHNO.CLEARCASE,
        TECHNO.SWAGGER,
        TECHNO.JENKINS,
        TECHNO.AGILE,
      ],
      simpleDescription: "Amadeus makes travels cheaper",
      description: `
      Amadeus est une entreprise spécialisée dans la conception de technologies pour l'industrie du voyage et du tourisme.
Son activité tourne autour de deux pôles majeurs:
	- Son Global Distribution System, un système reseau permettant de connecter les divers fournisseurs de l'industrie du voyage (hotels, compagnies aériennes, locations de véhicules,…) avec le marché des consommateurs (agences de voyage, particuliers,…).
	- Des solutions IT destinées aux entreprises de l'industrie, notamment des services autour des réservations, gestion d'inventaire, services aeroportuaires


L'une de ces solutions, Selling Platform Connect, propose aux agents de voyages une interface graphique    afin de gérer et d'automatiser les processus employés de la réservation jusqu'à la facturation.


En tant que développeur front-end, j'ai pris part à la maintenance du produit dans son ensemble, à son processus d' intégration 

J'ai travaillé en tant qu'intégrateur, focalisé sur l'intégration des nouveaux développements au sein du produit actuel, ainsi que l'amélioration des processus au sein d'une chaîne d'intégration complexe.

Enfin j'ai participé au développement de l'interface graphique du produit, sur la partie Customisation et Scripting, fonctionalité offrant la possibilité à l'utilisateur de créer ses propres scripts d'automatisation.`,
      links: {
        "Product link":
          "https://www.sellingplatformconnect.amadeus.com/LoginService/login.jsp?SITE=LOGINURL&LANGUAGE=GB",
        "Amadeus Homepage": "https://amadeus.com/en",
      },
    },
    {
      name: "ICSS",
      company: "Air France",
      role: ROLE.FULLSTACK,
      type: "Web Application",
      activity: "Travel & Tourism",
      logo: "../logo/airfrance.png",
      startDate: new Date(2018, 1, 1),
      endDate: new Date(2019, 1, 1),
      technologies: [
        TECHNO.HTML,
        TECHNO.CSS,
        TECHNO.SASS,
        TECHNO.ANGULAR,
        TECHNO.TYPESCRIPT,
        TECHNO.JAVA,
        TECHNO.SPRING,
        TECHNO.HIBERNATE,
        TECHNO.ORACLE,
        TECHNO.RABBIT_MQ,
        TECHNO.GIT,
        TECHNO.ROBOT_FRAMEWORK,
        TECHNO.AGILE,
      ],
      description: `
      Air France est la compagnie aérienne nationale francaise. Son activité principale se résoud au transport de passagers et de fret, ainsi que la maintenance et l'entretien d'avions.

Au sein des nombreux services IT d'Air France, le projet ICSS a pour but de rénover la plateforme de distribution des emplois du temps des avions cargo au sein de l'infrastructure IT d'Air France.

Au sein de cette équipe, j'ai pu mettre en place l'interface de suivi des emplois du temps en temps réel, ainsi que l'application de filtres, et autre règles de modification des messages entrants, ainsi que la re-transmission de ces messages à d'autres services du groupe AirFrance.
      `,
      links: [],
    },
    {
      name: "Pongo",
      company: "Pongo",
      role: ROLE.FRONTEND,
      type: "Micro Services",
      activity: "Marketing",
      logo: "../logo/pongo.png",
      startDate: new Date(2020, 3, 1),
      endDate: new Date(2020, 4, 1),
      technologies: [
        TECHNO.ANGULAR,
        TECHNO.SASS,
        TECHNO.TYPESCRIPT,

        TECHNO.CSS,
        TECHNO.HTML,
        TECHNO.FIREBASE,
        TECHNO.SWAGGER,
      ],
      description: `,
      Pongo est une société d'édition de logiciel proposant sa solution d'assistance marketing intelligent à destination des commercants cherchant à fidéliser leur clientèle.

J'ai intervenu sur une de leurs applications au stade MVP dans la migration de leur base de donnée firebase vers un backend priopriétaire.
Il était convenu de componentiser et d'appliquer les bonnes pratiques de développement à la base de code existante.
`,
      links: [],
    },
    {
      name: "The Newscene",
      company: "The Newscene",
      role: ROLE.FRONTEND,
      type: "Web Application",
      activity: "Mode & Presse",
      logo: "../logo/tns.png",
      startDate: new Date(2019, 11, 1),
      endDate: new Date(2020, 2, 1),
      technologies: [
        TECHNO.RAILS,
        TECHNO.RUBY,
        TECHNO.SLIM,
        TECHNO.HTML,
        TECHNO.CSS,
        TECHNO.SASS,
        TECHNO.GIT,
        TECHNO.POSTGRESQL,
      ],
      description: `
      The Newscene est une startup d'édition de logiciel qui propose des services de développement de plateformes web de blogging dans le milieu de la mode.

La mission consistait à appliquer un design particulier aux interfaces existantes de l'application.
      `,
      links: [],
    },
    {
      name: "DEXPA",
      company: "EOGILE",
      role: ROLE.FULLSTACK,
      type: "ERP",
      activity: "Import & Export",
      logo: "../logo/eogile.png",
      startDate: new Date(2019, 6, 1),
      endDate: new Date(2020, 2, 1),
      technologies: [
        TECHNO.SPRING,
        TECHNO.MICRONAUT,
        TECHNO.JAVA,
        TECHNO.HTML,
        TECHNO.CSS,
        TECHNO.SASS,
        TECHNO.GIT,
        TECHNO.REACT,
        TECHNO.REDUX,
        TECHNO.TYPESCRIPT,
        TECHNO.POSTGRESQL,
        TECHNO.DOCKER,
        TECHNO.JENKINS,
        TECHNO.AWS,
        TECHNO.CODA,
      ],
      description: `
      Eogile est une une société de services spécialisée dans la conception logiciel et la gestion de projets entourée des bonnes pratiques agiles. Ils travaillent avec plusieurs grands groupes tels que PMU, le Tour de France et GDF.

J'ai agi pour un de leur client, Dexpa, une entreprise d'import-export de produits laitiers. La mission nécessite le développement d'un ERP de gestion de leurs produits et factures, qui pourrait automatiser le procesus de communication avec leur service comptable, leur base clientèle et s'adapter à leurs besoins métier.
      `,
      links: [],
    },
    {
      name: "Formation",
      company: "The Hacking Project",
      role: ROLE.REDACTOR,
      type: "Bootcamp",
      activity: "Education",
      logo: "../logo/the_hacking_project.png",
      startDate: new Date(2019, 5, 1),
      endDate: new Date(2019, 5, 1),
      technologies: [
        TECHNO.SPRING,
        TECHNO.JAVA,
        TECHNO.JAVASCRIPT,
        TECHNO.TYPESCRIPT,
        TECHNO.ANGULAR,
        TECHNO.HTML,
        TECHNO.CSS,
        TECHNO.GIT,
      ],
      description: `
      The Hacking Project est une école de développement entièrement digitale qui se focalise sur l'apprentissage en peer-learning au sein de bootcamps.

J'ai été approché par THP afin de réaliser un cursus sur leur programme d'apprentissage du développement web en 12 semaines, focalisée sur la partie web.

      `,
      links: [],
    },
    {
      name: "Monaco Decision",
      company: "Monaco Decision",
      role: ROLE.FULLSTACK,
      type: "Web Application",
      activity: "Fintech",
      logo: "../logo/monaco_decision.png",
      startDate: new Date(2019, 3, 1),
      endDate: new Date(2020, 4, 1),
      technologies: [
        TECHNO.VAADIN,
        TECHNO.JAVA,
        TECHNO.SPRING,
        TECHNO.HIBERNATE,
        TECHNO.MYSQL,
        TECHNO.CSS,
        TECHNO.HTML,
        TECHNO.CLEARCASE,
      ],
      description: `
      Monaco Decision est une TPE monegasque dans le domaine de la fintech. Elle vise à concevoir des logiciels supportant les acteurs de la fintech dans la gestion de leurs assets.

Lors du développement de leur catalogue de produits, j'ai pu supporter l'effort de développement avec un accent notable sur les interfaces .
      `,
      links: [],
    },
  ],
  languages: [
    {
      name: "Francais",
      intro: "Bonjour!",
      level: LEVEL.EXPERT,
      flag: "../icon/french_flag.svg",
      degrees: [],
      articles: [],
    },
    {
      name: "Anglais",
      intro: "Hello!",
      level: LEVEL.EXPERT,
      flag: "../icon/uk_flag.svg",
      degrees: ["TOEIC: score of 960"],
      articles: [],
    },
    {
      name: "Espagnol",
      intro: "Hola!",
      flag: "../icon/spain_flag.svg",
      level: LEVEL.BEGINNER,
      degrees: [],
      articles: [],
    },
  ],
  education: [
    {
      logo: "../logo/stanislas.png",
      title: `Diplôme du BAC`,
      entity: "Stanislas",
      year: 2011,
    },
    {
      logo: "../logo/isep.svg",
      title: `Diplôme d'ingénieur spécialité Numérique & Santé`,
      entity: "ISEP",
      year: 2016,
      description: `Formation généraliste d'ingénieur avec une spécialisation dans le domaine de la biotechnologie.`,
    },
    {
      logo: "../logo/sherbrooke.png",
      title: `Module d'Intelligence Artificielle`,
      entity: "ISEP",
      year: 2015,
      description: `Formation généraliste d'ingénieur avec une spécialisation dans le domaine de la biotechnologie.`,
    },
  ],
  certifications: [
    {
      title: "Java - Oracle Certified Associed (OCA)",
      institution: "Oracle",
      logo: "../logo/oracle_db.webp",
      year: 2018,
      link:
        "https://www.youracclaim.com/badges/e8c24bad-edcc-4b8e-a227-6f4c6a4f5c4e/linked_in_profile",
    },
    {
      title: "Scrum Master - PSM",
      institution: "Scrum.org",
      logo: "../logo/scrumorg.svg",
      year: 2019,
      link:
        "https://www.scrum.org/user/certificate-download?assessmentResultId=689614",
    },
  ],
  hobbies: [
    {
      label: "Boxing",
      logo: "../icon/boxing.svg",
    },
    {
      label: "Chess",
      logo: "../icon/chess.svg",
    },
    {
      label: "Climbing",
      logo: "../icon/climb.svg",
    },
    {
      label: "Mixology",
      logo: "../icon/mixology.svg",
    },
    {
      label: "Badminton",
      logo: "../icon/badminton.svg",
    },
  ],
};

export default state;
