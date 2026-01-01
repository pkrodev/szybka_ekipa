import { siteConfig } from "@/config/site-config";

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  priceRange?: string;
  priceDescription?: string;
}

export default function ServiceSchema({
  serviceName,
  description,
  priceRange = "$$",
  priceDescription,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@type": "MovingCompany",
      name: siteConfig.name,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.city,
        addressRegion: siteConfig.location.region,
        addressCountry: siteConfig.location.country,
      },
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
      containedInPlace: {
        "@type": "State",
        name: "Lubelskie",
      },
    })),
    serviceType: serviceName,
    offers: {
      "@type": "Offer",
      priceRange: priceRange,
      priceCurrency: "PLN",
      ...(priceDescription && { description: priceDescription }),
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
