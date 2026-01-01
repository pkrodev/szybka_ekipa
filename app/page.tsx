import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PriceCalculatorSection from "@/components/sections/PriceCalculatorSection";
import ServiceAreaSection from "@/components/sections/ServiceAreaSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import { generateSEO } from "@/lib/seo-config";
import { siteConfig } from "@/config/site-config";

export const metadata: Metadata = generateSEO({
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.description,
  keywords: [
    // Główne frazy
    "wywóz mebli Lublin",
    "opróżnianie mieszkań Lublin",
    "wywóz śmieci Lublin",
    "opróżnianie garaży Lublin",
    "demontaż mebli Lublin",
    "wywóz gruzu Lublin",
    "utylizacja odpadów Lublin",

    // Lokalne long-tail
    "opróżnianie mieszkania po zmarłym Lublin",
    "likwidacja gospodarstwa Lublin",
    "wywóz mebli Radzyń Podlaski",
    "wywóz śmieci Kock",
    "opróżnianie garaży Lubartów",
    "wywóz śmieci po remoncie Lublin",
    "rozbiórka pieca kaflowego Lublin",

    // Dodatkowe usługi
    "transport mebli Lublin",
    "przeprowadzki Lublin",
    "sprzątanie po wyniesieniu Lublin",
    "segregacja odpadów Lublin",
    "legalna utylizacja Lublin",

    // Cenowe
    "tani wywóz mebli Lublin",
    "tanie opróżnianie mieszkań Lublin",
    "ile kosztuje wywóz mebli Lublin",

    // Pilne
    "szybki wywóz mebli Lublin",
    "wywóz mebli tego samego dnia Lublin",
    "pilny wywóz śmieci Lublin",
  ],
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PriceCalculatorSection />
      <ServiceAreaSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
