export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  priceInfo: string;
  image?: string;
}

export interface ServiceArea {
  name: string;
  distance: number; // km from Lublin
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  location: string;
  category: "transport" | "clearing" | "waste-disposal";
  alt: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
}

export interface Metadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}
