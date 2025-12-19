const config = {
  title: "Navinder Dinesh-Ram | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Navinder, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Navinder, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Navinder",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Navinder Dinesh-Ram",
  email: "navinder.tech@gmail.com",
  site: "https://navinder.tech",

  // for github stars button
  githubUsername: "NeoV55",


   get ogImg() {
    return this.site + "/ticketbase1.png";
  },
  social: {
    twitter: "https://x.com/",
    linkedin: "https://my.linkedin.com/in/navinder-tech-b2600538a",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com//",
    medium : "https://medium.com/@",
    substack : "https://navindertech.substack.com/",
    devdotto : "https://dev.to/navindertech",
    github: "https://github.com/NeoV55",
  },
};
export { config };
