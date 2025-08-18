import profile from "./profile.jpg"
import {
  faBrowser,
  faInternetExplorer,
  faGithub,
  faFigma,
  faGooglePlay,
  faAppStore,
} from "@fortawesome/free-brands-svg-icons"
import {} from "@fortawesome/free-solid-svg-icons"

export const navigation = {
  name: "Jade",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
    // {
    //   title: "Blog",
    //   link: "https://medium.com/@hashirshoaeb",
    // },
  ],
}
export const intro = {
  title: "Hey, I'm Jade",
  description:
    " A full stack developer with real experience building websites and online services.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "/Jade_Shi_FullStackDeveloper.pdf", // Make sure Jade_Shi_FullStackDeveloper.pdf is in your /public directory. Access it at /Jade_Shi_FullStackDeveloper.pdf.
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I finished my studies at the University of Melbourne, where I majored in Information Technology, and I live in Melbourne now. I am a Full-Stack Developer with real experience building websites and online services. I work with JavaScript (React.js, Next.js), .NET Core APIs, and databases (both SQL and NoSQL). I also use Docker and CI/CD, and I am learning Kubernetes now.",
    "I enjoy learning new things and working with others. Outside of work, I love coffee, fishing, and almost every kind of sport. I am also planning to learn diving soon.",
  ],
}

export const work = {
  title: "What I can do",
  cards: [
    {
      title: "Front-End Developer (React.js / Next.js)",
      description: [
        "Build modern websites using React.js and Next.js.",
        "Design user-friendly pages, forms, and shopping carts.",
        "Ensure fast performance and responsive design on all devices.",
      ],
      icons: [],
    },
    {
      title: "Back-End Developer (.NET Core / Databases)",
      description: [
        "Build the “engine” of apps with .NET Core APIs.",

        "Work with both SQL and NoSQL databases to keep and find data.",

        "Make apps secure, fast, and always available.",
      ],
      icons: [],
    },
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "RECAM",
      description:
        "A platform for photography companies to manage their media files and clients(property agency), and also for property agency have access to the media files and pick the ones they need.",
      icons: [
        {
          icon: faInternetExplorer, // This icon from @fortawesome/free-brands-svg-icons indicates a link to a website
          link: "https://remp-react-prod-xi.vercel.app/preview",
        },
      ],
    },
    {
      title: "NDISAU",
      description:
        "An platform for NDIS customers schedule their meals and get delivered to their home, also for restaurant to manage their menus, orders and deliveries. ",
      icons: [
        {
          // Place your .zip file in the `public/downloads` directory of your Next.js project.
          // The file will then be accessible at "/downloads/ndisau-figma-photos.zip" in the browser.
          icon: faFigma, // This icon from @fortawesome/free-brands-svg-icons indicates a link to download the Figma photos zip
          link: "/downloads/ndisau-figma-photos.zip", // Clicking this will download the Figma photos zip
          download: true, // Optional: can be used in your component to trigger download
        },
      ],
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description:
    "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at shiziqi022@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:shiziqi022@gmail.com",
      isPrimary: true,
    },
    // {
    //   title: "Schedule Meeting",
    //   link: "https://topmate.io/hashirshoaeb",
    //   isPrimary: false,
    // },
  ],
}

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: "Jade SHI | Software Engineer | .Net developer | Reactjs developer",
  description:
    "I am a Full-Stack Developer with real experience building websites and online services. I work with JavaScript (React.js, Next.js), .NET Core APIs, and databases (both SQL and NoSQL). I also use Docker and CI/CD, and I am learning Kubernetes now.",

  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@jadeshi",
  description: "Software Engineer | .NET Developer | React.js Developer",
  cards: [
    {
      title: "My Portfolio",
      link: "/Jade_Shi_FullStackDeveloper.pdf",
    },
    {
      title: "My GitHub",
      link: "https://github.com/JadeShi-1018",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/ziqi-shi-183863236",
    },
  ],
}
