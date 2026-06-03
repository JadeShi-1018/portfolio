import profile from "./profile.jpg"
import {
  faBrowser,
  faInternetExplorer,
  faGithub,
  faFigma,
  faGooglePlay,
  faAppStore,
} from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

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
    "A Full-Stack .NET Developer based in Melbourne. I build secure, production-grade backend APIs with ASP.NET Core and support them with React/Next.js frontends.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "/jade_general_resume.pdf", // Make sure Jade_Shi_FullStackDeveloper.pdf is in your /public directory. Access it at /Jade_Shi_FullStackDeveloper.pdf.
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I graduated from the University of Melbourne with a Master of Information Technology and hold an AWS Certified Cloud Practitioner credential. I'm a Full-Stack .NET Developer with production experience building secure, scalable APIs using C# .NET, ASP.NET Core, SQL Server, Azure, Docker, and GitHub Actions CI/CD. My focus is on the backend — payment processing, event-driven architecture, idempotency, JWT/RBAC security, and clean API design — with solid React/Next.js skills on the frontend.",
    "I enjoy solving real problems through practical engineering and working closely with stakeholders to turn operational constraints into technical decisions. Outside of work, I love coffee, fishing, and almost every kind of sport. I'm also planning to learn diving soon.",
  ],
}

export const work = {
  title: "What I can do",
  cards: [
    {
      title: "Back-End Developer (.NET Core / APIs)",
      description: [
        "Design and build production-grade REST APIs with ASP.NET Core WebAPI.",
        "Implement payment processing, idempotency, event-driven architecture, and JWT/RBAC security.",
        "Work with SQL Server, Azure, Docker, and GitHub Actions CI/CD for reliable, observable deployments.",
      ],
      icons: [],
    },
    {
      title: "Front-End Developer (React.js / Next.js)",
      description: [
        "Build modern, responsive UIs with React.js and Next.js.",
        "Integrate frontend with backend APIs including auth flows, forms, and payment UI.",
        "Deliver clean, maintainable components across full-stack projects.",
      ],
      icons: [],
    },
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "NDIS Food Ordering & Payment Platform",
      description:
        "A production-style platform for NDIS customers to schedule meal deliveries and for restaurants to manage menus, orders, and deliveries. Built with ASP.NET Core WebAPI, Next.js, SQL Server, Stripe, RabbitMQ/MassTransit, Docker, and Azure. Features multi-layer idempotency, JWT/RBAC security across 11 endpoints, event-driven order flow with Outbox Pattern, 36 unit and integration tests (89–90% coverage), and k6 load testing (0% error rate at p95 148ms).",
      icons: [
        {
          icon: faGithub, // This icon from @fortawesome/free-brands-svg-icons indicates a link to a website
          link: "https://github.com/JadeShi-1018/ndis-food-ordering-api",
        },
        {
          icon: faGlobe,
          link: "https://nice-glacier-0b761a000.7.azurestaticapps.net/",
          // download: true,
        },
      ],
    },
    {
      title: "Essendon Motel — Late Check-in System",
      description:
        "A live production system contracted by a Melbourne motel to replace an after-hours phone service, saving ~$1,200/year. Built with ASP.NET Core, Razor Pages, Stripe pre-authorisation, SMTP, PDF generation, and Azure. Features a token-based guest self-service workflow (details, photo ID upload, e-signature) and a JWT-secured staff admin portal with email notifications — delivered end-to-end as sole developer.",
      icons: [
        {
          // Place your .zip file in the `public/downloads` directory of your Next.js project.
          // The file will then be accessible at "/downloads/ndisau-figma-photos.zip" in the browser.
          icon: faGlobe, // This icon from @fortawesome/free-brands-svg-icons indicates a link to download the Figma photos zip
          link: "https://essendonmotel-latecheckin-app-bfdpavg6arcbgrb5.australiaeast-01.azurewebsites.net/Admin/Login?ReturnUrl=%2Fadmin%2FRegistrations", // Clicking this will download the Figma photos zip
          // download: true, // Optional: can be used in your component to trigger download
        },
      ],
    },

    {
      title: "RECAM",
      description:
        "A media management platform built for photography companies and property agencies. Photography teams upload and organise media files via Azure Blob Storage; property agency clients access a shared portal to browse and select the assets they need. Built with React, .NET Core, and Azure Blob Storage.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/JadeShi-1018/RECAM", // Replace with actual repo URL
        },
        {
          icon: faGlobe,
          link: "https://remp-react-prod-xi.vercel.app/preview",
        },
      ],
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description:
    "I'm currently open to mid-level .NET developer roles in Melbourne. Feel free to reach out directly by email at shiziqi022@gmail.com — always happy to chat.",
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
    "Full-Stack .NET Developer based in Melbourne. Production experience with ASP.NET Core, React/Next.js, Azure, Docker, Stripe, and GitHub Actions CI/CD. Open to mid-level .NET developer roles.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@jadeshi",
  description: ".NET Developer | Full-Stack | Melbourne",
  cards: [
    {
      title: "Resume",
      link: "/jade_general_resume.pdf",
    },
    {
      title: "GitHub",
      link: "https://github.com/JadeShi-1018",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/ziqishi",
    },
  ],
}
