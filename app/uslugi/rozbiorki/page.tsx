import { Metadata } from "next";
import Link from "next/link";
import { Hammer, CheckCircle, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { generateServiceSEO } from "@/lib/seo-config";
import { CONTACT } from "@/lib/constants";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = generateServiceSEO(
  "Rozbiórki",
  "Profesjonalne rozbiórki w Lublinie: piece kaflowe, meblościanki, altany, komórki lokatorskie. Z wywozem gruzu. Wycena indywidualna."
);

export default function RozbiorkiPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Rozbiórki Lublin"
        description="Profesjonalne rozbiórki: piece kaflowe, meblościanki, altany, komórki. Z wywozem gruzu."
        priceRange="$$"
        priceDescription="Wycena indywidualna - zależy od zakresu prac"
      />
      <div className="min-h-screen bg-gradient-to-br from-muted/30 to-white">
        <div className="bg-gradient-to-br from-primary/20 to-secondary/10 py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold mb-6">
              <Hammer className="w-4 h-4 text-primary" />
              Rozbiórki
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rozbiórki Lublin
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Profesjonalne rozbiórki: piece kaflowe, meblościanki, altany,
              komórki. Z wywozem gruzu i posprzątaniem.
            </p>
            <Button asChild size="lg">
              <a href={CONTACT.PHONE_HREF}>
                <Phone className="w-5 h-5 mr-2" />
                Zadzwoń: {CONTACT.PHONE}
              </a>
            </Button>
          </div>
        </Container>
        </div>

        <Container>
        <div className="py-16 max-w-5xl mx-auto">
          {/* Intro section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border mb-12">
            <h2 className="text-3xl font-bold mb-6">Rozbiórki - szybko i bezpiecznie</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Specjalizujemy się w <strong className="text-foreground">rozbiórkach</strong> różnego rodzaju
              konstrukcji w Lublinie i okolicach. Dysponujemy odpowiednim sprzętem
              i doświadczeniem, aby bezpiecznie rozebrać piece kaflowe,
              meblościanki, altany, komórki lokatorskie i inne budynki
              gospodarcze. Po rozbiórce wywozimy gruz i zostawiamy po sobie
              porządek.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-center">Co rozbieramy?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {[
              "Piece kaflowe i ceglane",
              "Meblościanki wbudowane",
              "Altany ogrodowe",
              "Komórki lokatorskie",
              "Szopy i garaże",
              "Stare budynki gospodarcze",
              "Ogrodzenia i płoty",
              "Tarasy i konstrukcje drewniane",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-5 bg-white rounded-xl border hover:border-secondary/40 hover:shadow-md transition-all">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-6">Rodzaje rozbiórek</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-secondary/5 to-white p-6 rounded-xl border border-secondary/20">
              <h4 className="font-bold text-lg mb-2">Rozbiórka pieców kaflowych</h4>
              <p className="text-muted-foreground">
                Skomplikowana usługa wymagająca doświadczenia. Rozbieramy stopniowo, aby nie uszkodzić stropu lub podłogi
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-white p-6 rounded-xl border border-primary/20">
              <h4 className="font-bold text-lg mb-2">Rozbiórka meblościanek</h4>
              <p className="text-muted-foreground">
                Demontaż meblościanek wbudowanych, wyniesienie elementów i wywóz. Przydatne przy remontach mieszkań
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/5 to-white p-6 rounded-xl border border-accent/20">
              <h4 className="font-bold text-lg mb-2">Rozbiórka altan i komórek</h4>
              <p className="text-muted-foreground">
                Rozbieramy altany ogrodowe, komórki lokatorskie, szopy. Wywóz elementów drewnianych i gruzu
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary/5 to-white p-6 rounded-xl border border-secondary/20">
              <h4 className="font-bold text-lg mb-2">Budynki gospodarcze</h4>
              <p className="text-muted-foreground">
                Rozbieramy stare budynki gospodarcze, garaże, ogrodzenia. Zostawiamy działkę czystą i gotową do zagospodarowania
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 my-12 border border-primary/20">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">Cennik</p>
              <p className="text-4xl font-bold text-primary mb-4">
                Wycena indywidualna
              </p>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Cena zależy od rodzaju i rozmiaru konstrukcji. Skontaktuj się z
                nami po bezpłatną wycenę.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">Jak przebiega rozbiórka?</h3>
          <div className="bg-white rounded-2xl p-8 mb-12 border">
            <div className="space-y-4">
              {[
                { step: "1", title: "Kontakt i opis zlecenia", desc: "Opisz co chcesz rozebrać, najlepiej prześlij zdjęcia" },
                { step: "2", title: "Oględziny (opcjonalnie)", desc: "Możemy przyjechać zobaczyć konstrukcję" },
                { step: "3", title: "Wycena", desc: "Przedstawiamy ofertę z dokładną ceną" },
                { step: "4", title: "Ustalenie terminu", desc: "Planujemy prace w dogodnym dla Ciebie czasie" },
                { step: "5", title: "Rozbiórka", desc: "Rozbieramy konstrukcję bezpiecznie i sprawnie" },
                { step: "6", title: "Wywóz i posprzątanie", desc: "Wywozimy gruz i zostawiamy po sobie porządek" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-bold mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">Dlaczego warto nam zaufać?</h3>
          <div className="bg-white rounded-2xl p-8 mb-12 border">
            <div className="space-y-4">
              {[
                { title: "Doświadczenie", desc: "Rozbieraliśmy setki pieców, komórek i altan" },
                { title: "Bezpieczeństwo", desc: "Pracujemy zgodnie z przepisami BHP" },
                { title: "Kompleksowa obsługa", desc: "Rozbiórka + wywóz gruzu + sprzątanie" },
                { title: "Odpowiedni sprzęt", desc: "Dysponujemy narzędziami do każdej rozbiórki" },
                { title: "Uczciwe ceny", desc: "Wycena przed rozpoczęciem prac" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start pb-4 border-b last:border-b-0 last:pb-0">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border">
              <h4 className="font-bold mb-3">📍 Obszar działania</h4>
              <p className="text-sm text-muted-foreground">
                Lublin oraz okolice w promieniu 50 km
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border">
              <h4 className="font-bold mb-3">🔨 Profesjonalny sprzęt</h4>
              <p className="text-sm text-muted-foreground">
                Dysponujemy pełnym wyposażeniem do każdego typu rozbiórki
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Potrzebujesz rozbiórki?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Opisz nam co chcesz rozebrać, a przygotujemy wycenę!
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
        </div>
        </Container>
      </div>
    </>
  );
}
