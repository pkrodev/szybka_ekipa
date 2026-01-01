import { siteConfig } from "@/config/site-config";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.location.coordinates.latitude,
      longitude: siteConfig.location.coordinates.longitude,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
      containedInPlace: {
        "@type": "State",
        name: "Lubelskie",
      },
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "06:00",
        closes: "22:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usługi opróżniania i wywozu",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Opróżnianie mieszkań",
            description: "Kompleksowe opróżnianie mieszkań i garaży",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wywóz śmieci",
            description: "Profesjonalny wywóz i utylizacja śmieci",
          },
        },
      ],
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
