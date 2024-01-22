import { 
  user,
  add,
  collab,
  upload,
  facebook,
  instagram,
  linkedin,
  twitter,
 } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "Events",
    title: "Events",
  },

];

export const features = [
  {
    id: "feature-1",
    icon: upload,
    title: "Upload",
    content:
      "Upload your project GitHub link to our Database",
  },
  {
    id: "feature-2",
    icon: add,
    title: "Add Descriptions",
    content:
      "Add some tags and descriptions to your procject",
  },
  {
    id: "feature-3",
    icon: collab,
    title: "Find Teammates",
    content:
      "Find peers to tackle the project together as a team",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Join the club. I dare you.",
    name: "Omar",
    title: "Former Leader",
    img: user,
  },
  {
    id: "feedback-2",
    content:
      "It's alright I guess.",
    name: "Blake",
    title: "Former Member",
    img: user,
  },
  {
    id: "feedback-3",
    content:
      "We still have not spent any of our club budget.",
    name: "Dan",
    title: "Member & Treasurer",
    img: user,
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.rhit.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.rhit.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.rhit.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.rhit.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.rhit.com/newsletters/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];
