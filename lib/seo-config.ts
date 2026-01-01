import { Metadata } from "next";
import { siteConfig } from "@/config/site-config";

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  path?: string;
}

export function generateSEO({
  title,
  description,
  keywords = [],
  image = siteConfig.seo.ogImage,
  path = "",
}: SEOConfig): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.seo.keywords, ...keywords],
    openGraph: {
      type: "website",
      locale: "pl_PL",
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateServiceSEO(
  serviceName: string,
  description: string,
  keywords: string[] = []
): Metadata {
  return generateSEO({
    title: `${serviceName} Lublin`,
    description: `${description} Profesjonalne usługi w Lublinie i okolicach. Zadzwoń: ${siteConfig.contact.phone}`,
    keywords: [
      `${serviceName.toLowerCase()} lublin`,
      `${serviceName.toLowerCase()} radzyń podlaski`,
      `${serviceName.toLowerCase()} kock`,
      `${serviceName.toLowerCase()} lubartów`,
      ...keywords,
    ],
  });
}
