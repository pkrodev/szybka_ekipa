import Link from "next/link";
import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site-config";
import { Home, Phone, Search, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Strona nie znaleziona - 404",
  description: "Przepraszamy, nie możemy znaleźć strony, której szukasz. Wróć do strony głównej lub skontaktuj się z nami.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  const popularLinks = [
    { href: "/", label: "Strona główna", icon: Home },
    { href: "/uslugi", label: "Nasze usługi", icon: Search },
    { href: "/uslugi/oprozniane-mieszkan", label: "Opróżnianie mieszkań" },
    { href: "/uslugi/wywoz-smieci", label: "Wywóz śmieci" },
    { href: "/uslugi/rozbiorki", label: "Rozbiórki" },
    { href: "/kontakt", label: "Kontakt", icon: Phone },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary/20 select-none">
              404
            </h1>
          </div>

          {/* Main Message */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strona nie została znaleziona
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Przepraszamy, ale strona, której szukasz, nie istnieje lub została przeniesiona.
            </p>
            <p className="text-base text-gray-500">
              Sprawdź adres URL lub wróć do strony głównej.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild variant="primary" size="lg">
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Strona główna
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`tel:${siteConfig.contact.phoneRaw}`}>
                <Phone className="w-5 h-5 mr-2" />
                Zadzwoń: {siteConfig.contact.phone}
              </Link>
            </Button>
          </div>

          {/* Popular Links */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center justify-center gap-2">
              <Search className="w-5 h-5 text-primary" />
              Popularne strony
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {popularLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all group text-left"
                  >
                    {Icon && (
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" />
                    )}
                    {!Icon && (
                      <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" />
                    )}
                    <span className="text-gray-700 group-hover:text-primary font-medium transition-colors">
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Potrzebujesz pomocy? Jesteśmy dostępni {siteConfig.contact.hours.toLowerCase()}
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-sm text-primary hover:underline font-medium mt-2 inline-block"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
