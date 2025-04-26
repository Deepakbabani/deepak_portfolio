import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  itt,
  sequence,
  konstant,
  carrent,
  jobit,
  tripguide,
  backend,
  creator,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJs",
    icon: mobile,
  },
  {
    title: "JavaScript",
    icon: backend,
  },
  {
    title: "TypeScript",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "In Time Tec",
    icon: itt,
    iconBg: "#F0F0F0",
    date: "Jul 2024 - Present",
    points: [
      "Developing responsive and accessible web applications using React.js and TypeScript.",
      "Collaborating with cross-functional teams to deliver AI-driven, user-centric solutions aligned with business objectives.",
      "Contributing to the creation and maintenance of company-wide design systems and reusable component libraries.",
      "Optimizing application performance and code quality using modern build tools like Vite and enforcing CI/CD best practices.",
      "Actively participating in improving developer experience, performance standards, and operational excellence.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Konstant InfoSolutions",
    icon: konstant,
    iconBg: "#383E56",
    date: "Jan 2021 - Jul 2024",
    points: [
      "Developed and maintained scalable web applications using React.js and other related technologies.",
      "Collaborated with cross-functional teams including designers, backend developers, and product managers to deliver high-quality products.",
      "Implemented responsive design principles and ensured cross-browser compatibility for various web applications.",
      "Provided technical guidance and mentorship to junior developers, improving team onboarding and development efficiency.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Sequence Technology",
    icon: sequence,
    iconBg: "#E6DEDD",
    date: "July 2021 - Dec 2021",
    points: [
      "Contributed as a developer in Flutter and Node.js environments",
      "Collaborated with back-end developers, designers, and team members to ensure seamless integration and meet design and functionality requirements.",
      "Conducted troubleshooting and debugging to resolve compatibility issues across different platforms",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
