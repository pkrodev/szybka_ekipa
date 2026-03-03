import { Metadata } from "next";
import Link from "next/link";
import { HardHat, CheckCircle, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { generateServiceSEO } from "@/lib/seo-config";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = generateServiceSEO(
  "Wywóz Śmieci po Remoncie",
  "Profesjonalny wywóz gruzu i odpadów po remoncie w Lublinie. Worki, gruz, stare podłogi, materiały budowlane. Szybka realizacja. Od 250 zł.",
  [],
  "/uslugi/wywoz-po-remoncie"
);

export default function WywozPoRemoncePage() {
  return (
    <>
      <ServiceSchema
        serviceName="Wywóz Śmieci po Remoncie Lublin"
        description="Profesjonalny wywóz gruzu i odpadów po remoncie w Lublinie. Szybko, tanio, bez bałaganu."
        priceRange="$$"
        priceDescription="Od 250 zł - wywóz gruzu i odpadów remontowych"
      />
      <div className="min-h-screen bg-gradient-to-br from-muted/30 to-white">
        <div className="bg-gradient-to-br from-accent/20 to-primary/10 py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold mb-6">
              <HardHat className="w-4 h-4 text-accent" />
              Wywóz po remoncie
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Wywóz Śmieci po Remoncie Lublin
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Kompleksowy wywóz gruzu i odpadów budowlanych. Worki, gruz, stare
              podłogi, resztki materiałów - wszystko w jednym miejscu!
            </p>
            <Button asChild size="lg">
              <a href="/kontakt">
                <Phone className="w-5 h-5 mr-2" />
                Skontaktuj się
              </a>
            </Button>
          </div>
        </Container>
        </div>

        <Container>
        <div className="py-16 max-w-5xl mx-auto">
          {/* Intro section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border mb-12">
            <h2 className="text-3xl font-bold mb-6">Skończyłeś remont? Pomożemy posprzątać!</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Po remoncie zawsze zostaje mnóstwo śmieci i odpadów budowlanych.{" "}
              <strong className="text-foreground">Szybka Ekipa</strong> zajmie się ich wywozem szybko i
              profesjonalnie! Wywozimy gruz, worki ze śmieciami, stare podłogi,
              płytki, tynki oraz wszelkie inne materiały budowlane. Zapewniamy
              legalną utylizację na składowisku.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-center">Co wywozimy?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {[
              "Gruz ceglany i betonowy",
              "Worki ze śmieciami budowlanymi",
              "Stare podłogi (panele, parkiet, płytki)",
              "Płytki ceramiczne i terakota",
              "Tynki i gips",
              "Resztki materiałów budowlanych",
              "Stare drzwi i okna",
              "Elementy wyposażenia łazienki i kuchni",
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
              <p className="text-6xl font-bold text-accent mb-2">250 zł</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">Jak przebiega wywóz?</h3>
          <div className="bg-white rounded-2xl p-8 mb-12 border">
            <div className="space-y-4">
              {[
                { step: "1", title: "Kontakt telefoniczny", desc: "Opisz rodzaj i ilość odpadów" },
                { step: "2", title: "Wycena", desc: "Podamy orientacyjną cenę" },
                { step: "3", title: "Ustalenie terminu", desc: "Dostosujemy się do Twojego harmonogramu" },
                { step: "4", title: "Wyniesienie i załadunek", desc: "Wynosimy wszystko z każdego piętra" },
                { step: "5", title: "Wywóz i utylizacja", desc: "Legalnie utylizujemy na składowisku" },
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

          <h3 className="text-2xl font-bold mb-6">Dodatkowe usługi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-secondary/5 to-white p-6 rounded-xl border border-secondary/20">
              <h4 className="font-bold text-lg mb-2">Podstawienie kontenera</h4>
              <p className="text-muted-foreground">
                Dla większych remontów możemy podstawić kontener. Sam napełniasz go w swoim tempie, a my odbierzemy kiedy będzie pełny
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-white p-6 rounded-xl border border-primary/20">
              <h4 className="font-bold text-lg mb-2">Legalna utylizacja</h4>
              <p className="text-muted-foreground">
                Wszystkie odpady przekazujemy do legalnych punktów utylizacji. Otrzymasz potwierdzenie jeśli będzie potrzebne
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">Dlaczego warto nam zaufać?</h3>
          <div className="bg-white rounded-2xl p-8 mb-12 border">
            <div className="space-y-4">
              {[
                { title: "Szybka realizacja", desc: "Często tego samego dnia" },
                { title: "Wyniesienie z każdego piętra", desc: "Nawet bez windy" },
                { title: "100% legalność", desc: "Utylizacja zgodnie z przepisami" },
                { title: "Konkurencyjne ceny", desc: "Bez ukrytych kosztów" },
                { title: "Kompleksowa obsługa", desc: "Od wyniesienia po utylizację" },
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
              <h4 className="font-bold mb-3">🚚 Kontener na gruz</h4>
              <p className="text-sm text-muted-foreground">
                Możliwość podstawienia kontenera przy większych remontach
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Masz gruz do wywozu?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Zadzwoń i umów się - szybko się tym zajmiemy!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="/kontakt">Skontaktuj się</a>
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
