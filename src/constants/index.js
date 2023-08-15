import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  spotify,
  landing,
  native,
  nike,
  apple,
  pulse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Projects",
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Front-end Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Think. Make. Solve.",
    description:
      "In this project, the goal was to develop a striking Landing page that serves as the flagship introduction to their premier web design services. Focused on attracting discerning clients who appreciate sophistication and modern aesthetics.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: landing,
    source_code_link: "https://github.com/ernestarreola",
    live_web_link: "projects/landingpagedemo.html",
  },
  {
    name: "Oscar De La Renta (Mobile Shop)",
    description:
      "I'll be developing a cutting-edge React Native mobile ecommerce app exclusively for showcasing and selling Oscar de la Renta's luxury products. The app will capture the brand's sophistication, delivering a seamless shopping experience that blends high fashion with digital convenience.",
    tags: [
      {
        name: "reactNative",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: native,
    source_code_link: "https://github.com/ErnestArreola/Native-Commerce",
    live_web_link: "",
  },
  {
    name: "Nike Newsletter",
    description:
      "This project centers on developing captivating promotional newsletter emails that establish engaging communication with our audience. These emails strategically deliver valuable content, promotions, and updates, fostering meaningful connections with subscribers while following best practices for deliverability and user engagement.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "litmus",
        color: "pink-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/ErnestArreola/nike_email",
    live_web_link: "projects/nike_email_demo.html",
  },
  {
    name: "Apple Transactional",
    description:
      "Creating a dependable system for transactional emails, enabling seamless communication between our platform and users. These emails are crucial for conveying critical information and updates, ensuring a smooth user experience with strong deliverability and personalization.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "litmus",
        color: "pink-text-gradient",
      },
    ],
    image: apple,
    source_code_link: "https://github.com/ErnestArreola/Apple_Receipt",
    live_web_link: "projects/receipt_email_demo.html",
  },
  {
    name: "Spotify Clone",
    description:
      "A React Spotify clone, we'll integrate a public API to replicate the core functions of the music streaming platform. This dynamic and responsive web app will allow users to search, play, and organize music seamlessly, enhancing their experience while maintaining familiarity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://github.com/ErnestArreola/spotify-clone",
    live_web_link: "https://624e09e72da83c11ce65dcd4--sparkly-sable-792ac6.netlify.app",
  },
  {
    name: "City Pulse, Long Beach",
    description:
      "A full stack app for Long Beach City, California, we use data analysis, including linear regression, on public data to predict potential business delinquency by zip code and category. This predictive tool offers proactive aid to at-risk businesses, fostering growth and sustainability for Long Beach enterprises.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
      {
        name: "restAPI",
        color: "white-text-gradient",
      },
    ],
    image: pulse,
    source_code_link: "https://github.com/ErnestArreola/CityPulse",
    live_web_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
