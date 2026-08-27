// src/data/site.js
// Single source of truth. Change it here, it changes everywhere.

export const site = {
  name: "Swaim Engineering and Surveying",
  shortName: "Swaim",

  phone: "940-872-5075",
  phoneHref: "tel:+19408725075",
  email: "info@swaimengineering.com",
  emailHref: "mailto:info@swaimengineering.com",

  street: "506 North Mason",
  cityStateZip: "Bowie, TX 76230",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=506+N+Mason+St,+Bowie,+TX+76230",

  hours: "Monday–Friday, 8:00–5:00",
  founded: 2003,

  // TODO: replace with Swaim's real Facebook page when it exists.
  facebookHref: "https://www.facebook.com/",
  linkedinHref:
    "https://www.linkedin.com/company/swaim-engineering-&-surveying/",

  nav: [
    { label: "Company", href: "/about" },
    { label: "Surveying", href: "/surveying" },
    { label: "Engineering", href: "/engineering" },
  ],

  footerCols: [
    {
      label: "Surveying",
      links: [
        { text: "Boundary", href: "/surveying" },
        { text: "Platting", href: "/surveying" },
        { text: "Staking", href: "/surveying" },
        { text: "Oil & gas", href: "/surveying" },
      ],
    },
    {
      label: "Engineering",
      links: [
        { text: "Site development", href: "/engineering" },
        { text: "Roadway", href: "/engineering" },
        { text: "Drainage", href: "/engineering" },
        { text: "Water & sewer", href: "/engineering" },
      ],
    },
  ],
};

export const seals = {
  pe: {
    src: "/assets/swaim-texas-professional-engineer-seal.webp",
    caption: "Texas Professional Engineer",
    alt: "Texas Professional Engineer seal",
  },
  rpls: {
    src: "/assets/swaim-texas-land-surveyor-seal.webp",
    caption: "Texas Registered Professional Land Surveyor",
    alt: "Texas Registered Professional Land Surveyor seal",
  },
};

export const counties = [
  "Montague", "Wise", "Parker", "Jack", "Denton",
  "Tarrant", "Cooke", "Dallas", "Young", "Wichita", "Clay",
];

export default site;
