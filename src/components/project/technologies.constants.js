import { SiAngular, SiPython, SiMariadb, SiSpringboot, SiPostgresql, SiReact, SiVite } from "react-icons/si";
export const TECHNOLOGIES = {
  ANGULAR: { name: "Angular", icon: SiAngular },
  PYTHON: { name: "Python", icon: SiPython },
  MARIADB: { name: "MariaDB", icon: SiMariadb },
  SPRING_BOOT: { name: "SpringBoot", icon: SiSpringboot },
  POSTGRESQL: { name: "PostgreSQL", icon: SiPostgresql },
  REACT: { name: "React", icon: SiReact },
  VITE: { name: "React", icon: SiVite }
};

export const projectMeta = [
  {
    image: "/gastromanager.jpg",
    tags: [TECHNOLOGIES.ANGULAR, TECHNOLOGIES.PYTHON, TECHNOLOGIES.MARIADB],
    link: "#",
    github: "https://github.com/LauraAlbertDev/restaurante-tfg",
  },
  {
    image: "/kreitify-app.jpg",
    tags: [TECHNOLOGIES.SPRING_BOOT, TECHNOLOGIES.ANGULAR, TECHNOLOGIES.POSTGRESQL],
    link: "#",
    github: "https://github.com/LauraAlbertDev/kreitefy-app",
  },
  {
    image: "/portfolio.jpg",
    tags: [TECHNOLOGIES.REACT, TECHNOLOGIES.VITE, TECHNOLOGIES.POSTGRESQL],
    link: "#",
    github: "https://github.com/LauraAlbertDev/portfolio",
  },
];