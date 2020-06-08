import { ROLES } from "./enum";

export const TECHNO = {
  JAVASCRIPT: {
    label: "Javascript",
    logo: "../logo/javascript.png",
  },
  TYPESCRIPT: {
    label: "Typescript",
    logo: "../logo/typescript.svg",
  },
  ANGULAR: {
    label: "Angular",
    logo: "../logo/angular.svg",
  },
  REACT: {
    label: "React.JS",
    logo: "../logo/sass.png",
  },
  HTML: {
    label: "CSS",
    logo: "../logo/sass.png",
  },
  CSS: {
    label: "CSS",
    logo: "../logo/sass.png",
  },
  SASS: {
    label: "Sass",
    logo: "../logo/sass.png",
  },
  RAILS: {
    label: "Ruby On Rails",
    logo: "../logo/sass.png",
  },
  RUBY: {
    label: "Ruby",
    logo: "../logo/sass.png",
  },
  SLIM: {
    label: "Slim",
    logo: "../logo/sass.png",
  },
  GIT: {
    label: "Git",
    logo: "../logo/sass.png",
  },
  SPRING: {
    label: "Spring",
    logo: "../logo/sass.png",
  },
  MICRONAUT: {
    label: "Micronaut",
    logo: "../logo/sass.png",
  },
  VAADIN: {
    label: "Vaadin",
    logo: "../logo/sass.png",
  },
  HIBERNATE: {
    label: "Hibernate",
    logo: "../logo/sass.png",
  },
  JAVA: {
    label: "Java",
    logo: "../logo/sass.png",
  },
  MYSQL: {
    label: "MySQL",
    logo: "../logo/sass.png",
  },
};

const state = {
  projects: [
    {
      name: "Selling Platform Connect",
      company: "Amadeus",
      role: ROLES.FRONTEND,
      logo: "../logo/akka.png",
      startDate: "Juin 2016",
      endDate: "Decembre 2017",
      technologies: [TECHNO.JAVASCRIPT],
      description: "",
      links: [],
    },
    {
      name: "Selling Platform Connect",
      company: "Amadeus",
      role: ROLES.FRONTEND,
      logo: "../logo/akka.png",
      startDate: "Janvier 2018",
      endDate: "Decembre 2017",
      technologies: [TECHNO.JAVASCRIPT],
      description: "",
      links: [],
    },
    {
      name: "Pongo",
      company: "Pongo",
      role: ROLES.FRONTEND,
      logo: "../logo/akka.png",
      startDate: "Mars 2020",
      endDate: "Avril 2020",
      technologies: [TECHNO.ANGULAR, TECHNO.SASS, TECHNO.TYPESCRIPT],
      description: `
      Support de développement sur une application Angular pré-existante:
- Mise à jour due à un changement de backend
- Componentisation de l'application existante`,
      links: [],
    },
    {
      name: "The Newscene",
      company: "The Newscene",
      role: ROLES.FRONTEND,
      logo: "../logo/akka.png",
      startDate: "Novembre 2019",
      endDate: "Février 2020",
      technologies: [
        TECHNO.RAILS,
        TECHNO.RUBY,
        TECHNO.SLIM,
        TECHNO.SASS,
        TECHNO.GIT,
      ],
      description: `Application et amélioration d'un design pré-défini (wireframes en partie définies) à un CMS dans le milieu médiatique.`,
      links: [],
    },
    {
      name: "DEXPA",
      company: "EOGILE",
      role: ROLES.FULLSTACK,
      logo: "../logo/akka.png",
      startDate: "Juin 2019",
      endDate: "Février 2020",
      technologies: [
        TECHNO.SPRING,
        TECHNO.MICRONAUT,
        TECHNO.JAVA,
        TECHNO.CSS,
        TECHNO.GIT,
        TECHNO.REACT,
      ],
      description: `Développement ReactJS / Java pour ERP de gestion d'export`,
      links: [],
    },
    {
      name: "Formation",
      company: "The Hacking Project",
      role: ROLES.REDACTOR,
      logo: "../logo/akka.png",
      startDate: "Mai 2019",
      endDate: "Mai 2019",
      technologies: [
        TECHNO.SPRING,
        TECHNO.JAVA,
        TECHNO.JAVASCRIPT,
        TECHNO.ANGULAR,
        TECHNO.HTML,
        TECHNO.CSS,
        TECHNO.GIT,
      ],
      description: `Mise en place de la partie client (apprentissage du web, des technologies de base, et d'un framework plus avancé) pour un cursus de bootcamp.`,
      links: [],
    },
    {
      name: "Monaco Decision",
      company: "Monaco Decision",
      role: ROLES.FULLSTACK,
      logo: "../logo/akka.png",
      startDate: "Mars 2019",
      endDate: "Avril 2019",
      technologies: [
        TECHNO.VAADIN,
        TECHNO.JAVA,
        TECHNO.SPRING,
        TECHNO.HIBERNATE,
        TECHNO.MYSQL,
        TECHNO.CSS,
        TECHNO.HTML,
      ],
      description: `Mise en place de la partie client (apprentissage du web, des technologies de base, et d'un framework plus avancé) pour un cursus de bootcamp.`,
      links: [],
    },
  ],
};

export default state;
