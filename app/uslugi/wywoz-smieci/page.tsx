import { Metadata } from "next";
import Link from "next/link";
import { Trash2, CheckCircle, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { generateServiceSEO } from "@/lib/seo-config";
import { CONTACT } from "@/lib/constants";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = generateServiceSEO(
  "Wywóz Śmieci",
  "Wywóz śmieci, gruzu i odpadów wielkogabarytowych w Lublinie. Legalna utylizacja w PSZOK. Wywóz mebli, AGD, gruzu budowlanego. Od 200 zł.",
  [],
  "/uslugi/wywoz-smieci"
);

export default function WywozSmieciPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Wywóz Śmieci i Utylizacja Lublin"
        description="Profesjonalny wywóz śmieci, gruzu i odpadów wielkogabarytowych w Lublinie. Legalna utylizacja w PSZOK."
        priceRange="$$"
        priceDescription="Od 200 zł - dojazd 2 zł/km"
      />
      <div className="min-h-screen bg-gradient-to-br from-muted/30 to-white">
        <div className="bg-gradient-to-br from-accent/20 to-primary/10 py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold mb-6">
              <Trash2 className="w-4 h-4 text-accent" />
              Wywóz śmieci
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Wywóz Śmieci i Utylizacja Lublin
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Profesjonalny wywóz śmieci, gruzu budowlanego i odpadów
              wielkogabarytowych. Legalna utylizacja zgodnie z przepisami.
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
            <h2 className="text-3xl font-bold mb-6">Wywóz śmieci - co oferujemy?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Zajmujemy się <strong className="text-foreground">kompleksowym wywozem śmieci</strong> i
              odpadów w Lublinie i okolicach. Dysponujemy odpowiednim transportem
              i współpracujemy z PSZOK (Punkt Selektywnej Zbiórki Odpadów
              Komunalnych), co gwarantuje legalną utylizację wszystkich odpadów.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-center">Jakie śmieci wywozimy?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {[
              "Meble i wyposażenie",
              "Sprzęt AGD i RTV",
              "Gruz budowlany",
              "Odpady remontowe",
              "Odpady zielone",
              "Opony i części samochodowe",
              "Złom i metal",
              "Inne odpady wielkogabarytowe",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-5 bg-white rounded-xl border hover:border-secondary/40 hover:shadow-md transition-all">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-8 my-12 border border-accent/20">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">Cena od</p>
              <p className="text-6xl font-bold text-accent mb-2">200 zł</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">Rodzaje odpadów</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-secondary/5 to-white p-6 rounded-xl border border-secondary/20">
              <h4 className="font-bold text-lg mb-2">Wywóz mebli i AGD</h4>
              <p className="text-muted-foreground">
                Stara kanapa, lodówka, pralka czy telewizor? Wynosimy, zabezpieczamy i wywozimy do odpowiedniego punktu utylizacji
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-white p-6 rounded-xl border border-primary/20">
              <h4 className="font-bold text-lg mb-2">Gruz budowlany</h4>
              <p className="text-muted-foreground">
                Płytki, tynk, cegły, stare okna, drzwi. Transport na składowisko odpadów budowlanych w cenie usługi
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/5 to-white p-6 rounded-xl border border-accent/20">
              <h4 className="font-bold text-lg mb-2">Odpady zielone</h4>
              <p className="text-muted-foreground">
                Gałęzie, liście, trawa po koszeniu. Obsługujemy działki i ogrody przydomowe
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary/5 to-white p-6 rounded-xl border border-secondary/20">
              <h4 className="font-bold text-lg mb-2">Transport do PSZOK</h4>
              <p className="text-muted-foreground">
                Współpracujemy z Punktami Selektywnej Zbiórki Odpadów Komunalnych. Legalna utylizacja gwarantowana
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-primary/5 p-8 rounded-2xl mb-12 border border-accent/20">
            <h3 className="text-xl font-bold mb-4">♻️ Legalna utylizacja</h3>
            <p className="text-muted-foreground leading-relaxed">
              Wszystkie odpady trafiają do <strong className="text-foreground">legalnej utylizacji</strong>.
              Segregujemy je i przekazujemy do odpowiednich punktów - PSZOK,
              składowiska odpadów budowlanych lub punktów skupu surowców
              wtórnych. Dbamy o środowisko i przestrzegamy wszystkich przepisów.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-6">Dlaczego warto nam zaufać?</h3>
          <div className="bg-white rounded-2xl p-8 mb-12 border">
            <div className="space-y-4">
              {[
                { title: "100% legalność", desc: "Wszystkie odpady trafiają do autoryzowanych punktów" },
                { title: "Szybka realizacja", desc: "Często tego samego dnia" },
                { title: "Kompleksowa obsługa", desc: "Załadunek, transport, utylizacja" },
                { title: "Konkurencyjne ceny", desc: "Bez ukrytych kosztów" },
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
                Lublin oraz okolice w promieniu 50 km: Radzyń Podlaski, Kock, Lubartów, Świdnik
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border">
              <h4 className="font-bold mb-3">🚚 Koszt dojazdu</h4>
              <p className="text-sm text-muted-foreground">
                Tylko 2 zł/km w obie strony. Dojazd po Lublinie to zazwyczaj 10-20 zł
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">Najczęściej zadawane pytania</h3>
          <div className="space-y-3 mb-12">
            <details className="bg-white rounded-xl border p-5 hover:border-secondary/40 hover:shadow-md transition-all group">
              <summary className="font-semibold cursor-pointer flex items-center gap-2">
                <span className="text-secondary group-open:rotate-90 transition-transform">▶</span>
                Czy mogę wyrzucić wszystko razem?
              </summary>
              <p className="mt-4 text-muted-foreground pl-6">
                Tak! Nie musisz segregować - my zajmujemy się tym
                profesjonalnie. Odpady trafiają do odpowiednich punktów
                utylizacji zgodnie z przepisami.
              </p>
            </details>
            <details className="bg-white rounded-xl border p-5 hover:border-secondary/40 hover:shadow-md transition-all group">
              <summary className="font-semibold cursor-pointer flex items-center gap-2">
                <span className="text-secondary group-open:rotate-90 transition-transform">▶</span>
                Ile kosztuje wywóz starej kanapy?
              </summary>
              <p className="mt-4 text-muted-foreground pl-6">
                Wywóz standardowej kanapy kosztuje <strong className="text-foreground">od 350 zł</strong>. Cena zależy od rozmiaru i piętra, z którego wynosimy.
              </p>
            </details>
            <details className="bg-white rounded-xl border p-5 hover:border-secondary/40 hover:shadow-md transition-all group">
              <summary className="font-semibold cursor-pointer flex items-center gap-2">
                <span className="text-secondary group-open:rotate-90 transition-transform">▶</span>
                Czy wynosiście z piętra?
              </summary>
              <p className="mt-4 text-muted-foreground pl-6">
                Tak, wynosimy z każdego piętra.
              </p>
            </details>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Masz śmieci do wywozu?
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
        </div>
      </Container>
      </div>
    </>
  );
}
