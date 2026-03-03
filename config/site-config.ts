export const siteConfig = {
  name: "Szybka Ekipa",
  description: "Profesjonalne opróżnianie mieszkań i wywóz śmieci w Lublinie. Szybko, tanio, 7 dni w tygodniu.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://szybka-ekipa.pl",

  contact: {
    email: "szybkaekipa24@gmail.com",
    hours: "7 dni w tygodniu, 6:00-22:00",
  },

  location: {
    city: "Lublin",
    region: "Lubelskie",
    country: "Polska",
    coordinates: {
      latitude: 51.2465,
      longitude: 22.5684,
    },
  },

  serviceAreas: [
    "Lublin",
    "Radzyń Podlaski",
    "Kock",
    "Lubartów",
  ],

  social: {
    facebook: "",
    instagram: "",
  },

  seo: {
    defaultTitle: "Opróżnianie Mieszkań Lublin | Wywóz Śmieci | Szybka Ekipa",
    titleTemplate: "%s | Szybka Ekipa Lublin",
    description: "Profesjonalne opróżnianie mieszkań i wywóz śmieci w Lublinie i okolicach. Szybko, tanio, 7 dni w tygodniu.",
    keywords: [
      "opróżnianie mieszkań Lublin",
      "wywóz śmieci Lublin",
      "opróżnianie garaży Lublin",
      "demontaż mebli Lublin",
      "wywóz gruzu Lublin",
      "sprzątanie po wyniesieniu",
      "opróżnianie mieszkań Radzyń Podlaski",
      "wywóz śmieci Kock",
      "opróżnianie garaży Lubartów",
      "utylizacja odpadów Lublin",
    ],
    ogImage: "/images/og-image.jpg",
  },
} as const;

export type SiteConfig = typeof siteConfig;
