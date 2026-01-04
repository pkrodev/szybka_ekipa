import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, CheckCircle, Phone, Truck, Clock, DollarSign } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { locations, getLocationBySlug, getAllLocationSlugs } from "@/data/locations";
import { generateSEO } from "@/lib/seo-config";
import { CONTACT } from "@/lib/constants";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: "Strona nie znaleziona",
    };
  }

  return generateSEO({
    title: location.seo.title,
    description: location.seo.description,
    keywords: location.seo.keywords,
    path: `/miejscowosci/${location.slug}`,
  });
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema items={location.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", path: "/" },
          { name: "Miejscowości", path: "/miejscowosci" },
          { name: location.name, path: `/miejscowosci/${location.slug}` },
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-muted/30 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/20 to-secondary/10 py-16">
          <Container>
            <Breadcrumbs
              items={[
                { name: "Strona główna", path: "/" },
                { name: "Miejscowości", path: "/" },
                { name: location.name, path: `/miejscowosci/${location.slug}` },
              ]}
            />
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                {location.name} • {location.distance} km od Lublina
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {location.content.hero.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {location.content.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href={CONTACT.PHONE_HREF}>
                    <Phone className="w-5 h-5 mr-2" />
                    {CONTACT.PHONE}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={CONTACT.PHONE_2_HREF}>
                    <Phone className="w-5 h-5 mr-2" />
                    {CONTACT.PHONE_2}
                  </a>
                </Button>
              </div>
            </div>
          </Container>
        </div>

        <Container>
          <div className="py-16 max-w-5xl mx-auto">
            {/* Intro section */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border mb-12">
              <h2 className="text-3xl font-bold mb-6">
                {location.content.whyUs.title}
              </h2>
              <div className="space-y-4">
                {location.content.whyUs.points.map((point, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service highlights */}
            <h3 className="text-2xl font-bold mb-6 text-center">
              Co oferujemy w {location.name}?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
              {location.content.serviceHighlights.map((service, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-5 bg-white rounded-xl border hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-sm">{service}</span>
                </div>
              ))}
            </div>

            {/* Price info - tylko jeśli showTravelCost !== false */}
            {location.showTravelCost !== false && (
              <div className="not-prose bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 my-12 border border-primary/20">
                <div className="text-center mb-6">
                  <p className="text-muted-foreground mb-2">Koszt dojazdu</p>
                  <p className="text-5xl font-bold text-primary">
                    {location.distance * 2} zł
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    ({location.distance} km × 2 zł/km)
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                    <Truck className="w-6 h-6 text-primary mb-2" />
                    <span className="font-semibold">Dojazd</span>
                    <span className="text-muted-foreground">{location.distance * 2} zł</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                    <Clock className="w-6 h-6 text-secondary mb-2" />
                    <span className="font-semibold">Czas dojazdu</span>
                    <span className="text-muted-foreground">
                      ~{Math.ceil(location.distance / 30 * 60)} min
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                    <DollarSign className="w-6 h-6 text-accent mb-2" />
                    <span className="font-semibold">Wycena</span>
                    <span className="text-muted-foreground">Bezpłatna</span>
                  </div>
                </div>
              </div>
            )}

            {/* Benefits */}
            <h3 className="text-2xl font-bold mb-6 text-center">
              Korzyści z wyboru Szybkiej Ekipy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-primary/5 to-white p-6 rounded-xl border border-primary/20">
                <h4 className="font-bold text-lg mb-2">⚡ Szybka realizacja</h4>
                <p className="text-muted-foreground text-sm">
                  Często tego samego lub następnego dnia
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary/5 to-white p-6 rounded-xl border border-secondary/20">
                <h4 className="font-bold text-lg mb-2">💰 Uczciwe ceny</h4>
                <p className="text-muted-foreground text-sm">
                  Bez ukrytych kosztów, wycena przed realizacją
                </p>
              </div>
              <div className="bg-gradient-to-br from-accent/5 to-white p-6 rounded-xl border border-accent/20">
                <h4 className="font-bold text-lg mb-2">🏢 Każde piętro</h4>
                <p className="text-muted-foreground text-sm">
                  Wyniesienie nawet bez windy
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-white p-6 rounded-xl border border-primary/20">
                <h4 className="font-bold text-lg mb-2">♻️ Legalna utylizacja</h4>
                <p className="text-muted-foreground text-sm">
                  Zgodnie z przepisami gminy
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary/5 to-white p-6 rounded-xl border border-secondary/20">
                <h4 className="font-bold text-lg mb-2">🛡️ Ubezpieczenie</h4>
                <p className="text-muted-foreground text-sm">
                  Pełne OC firmy
                </p>
              </div>
              <div className="bg-gradient-to-br from-accent/5 to-white p-6 rounded-xl border border-accent/20">
                <h4 className="font-bold text-lg mb-2">📞 Kontakt 7 dni</h4>
                <p className="text-muted-foreground text-sm">
                  Pracujemy 7 dni w tygodniu, 6:00-22:00
                </p>
              </div>
            </div>

            {/* FAQ */}
            <h3 className="text-2xl font-bold mb-6">
              Najczęściej zadawane pytania - {location.name}
            </h3>
            <div className="space-y-3 mb-12">
              {location.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl border p-5 hover:border-primary/40 hover:shadow-md transition-all group"
                >
                  <summary className="font-semibold cursor-pointer flex items-center gap-2">
                    <span className="text-primary group-open:rotate-90 transition-transform">
                      ▶
                    </span>
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-muted-foreground pl-6">{faq.answer}</p>
                </details>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Potrzebujesz naszych usług w {location.name}?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Zadzwoń i umów się - często realizujemy tego samego dnia!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href={CONTACT.PHONE_HREF}>Zadzwoń: {CONTACT.PHONE}</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/kontakt">Formularz kontaktowy</Link>
                </Button>
              </div>
            </div>

            {/* Related locations - internal linking */}
            <div className="mt-12 bg-gradient-to-br from-muted/30 to-white rounded-xl p-8 border">
              <h3 className="text-xl font-bold mb-4 text-center">
                Zobacz również nasze usługi w:
              </h3>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {locations
                  .filter((loc) => loc.slug !== location.slug)
                  .sort((a, b) => a.distance - b.distance)
                  .map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/miejscowosci/${loc.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border hover:border-primary hover:shadow-md transition-all text-sm font-medium"
                    >
                      <MapPin className="w-4 h-4 text-primary" />
                      {loc.name}
                    </Link>
                  ))}
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-bold mb-4 text-center">
                  Nasze usługi:
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <Link
                    href="/uslugi/oprozniane-mieszkan"
                    className="p-4 bg-white rounded-lg border hover:border-primary hover:shadow-md transition-all text-center"
                  >
                    <p className="font-semibold text-sm">Opróżnianie mieszkań</p>
                  </Link>
                  <Link
                    href="/uslugi/wywoz-mebli"
                    className="p-4 bg-white rounded-lg border hover:border-primary hover:shadow-md transition-all text-center"
                  >
                    <p className="font-semibold text-sm">Wywóz mebli</p>
                  </Link>
                  <Link
                    href="/uslugi/wywoz-smieci"
                    className="p-4 bg-white rounded-lg border hover:border-primary hover:shadow-md transition-all text-center"
                  >
                    <p className="font-semibold text-sm">Wywóz śmieci</p>
                  </Link>
                  <Link
                    href="/uslugi/po-spadkach"
                    className="p-4 bg-white rounded-lg border hover:border-primary hover:shadow-md transition-all text-center"
                  >
                    <p className="font-semibold text-sm">Opróżnianie po spadkach</p>
                  </Link>
                  <Link
                    href="/uslugi/wywoz-po-remoncie"
                    className="p-4 bg-white rounded-lg border hover:border-primary hover:shadow-md transition-all text-center"
                  >
                    <p className="font-semibold text-sm">Wywóz po remoncie</p>
                  </Link>
                  <Link
                    href="/uslugi/rozbiorki"
                    className="p-4 bg-white rounded-lg border hover:border-primary hover:shadow-md transition-all text-center"
                  >
                    <p className="font-semibold text-sm">Rozbiórki</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
