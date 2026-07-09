import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Autonomous Work with Cowork & Scout",
  description:
    "Hands-on flights for building real AI skills with Microsoft 365 Copilot Cowork.",
  base: "/Cowork-Manager-Workshop/",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/Cowork-Manager-Workshop/CoworkIcon.png" }]],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Flights",
        items: [
          { text: "Flight 01 · Team Meeting Prep with Cowork", link: "/orientation/" },
          { text: "Flight 02 · One-on-One Prep with Cowork", link: "/weekly-update/" },
        ],
      },
      {
        text: "Resources",
        items: [
          { text: "Explore Microsoft Scout", link: "/make-it-your-own/" },
          { text: "Learn Cowork with Cowork", link: "/learn-cowork-with-cowork/" },
          { text: "More Resources", link: "/resources/" },
        ],
      },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "Flights",
        items: [
          { text: "Flight 01 · Team Meeting Prep with Cowork", link: "/orientation/" },
          { text: "Flight 02 · One-on-One Prep with Cowork", link: "/weekly-update/" },
        ],
      },
      {
        text: "Take it with you",
        items: [
          { text: "Explore Microsoft Scout", link: "/make-it-your-own/" },
          { text: "Learn Cowork with Cowork", link: "/learn-cowork-with-cowork/" },
          { text: "More Resources", link: "/resources/" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/MicrosoftLearning/Cowork-Manager-Workshop/",
      },
    ],
    footer: {
      copyright: "© 2025 Microsoft. All rights reserved.",
    },
  },
});
