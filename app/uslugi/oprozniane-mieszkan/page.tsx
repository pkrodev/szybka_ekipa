import { Metadata } from "next";
import Link from "next/link";
import { Home, CheckCircle, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { generateServiceSEO } from "@/lib/seo-config";
import { CONTACT } from "@/lib/constants";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = generateServiceSEO(
  "Opróżnianie Mieszkań",
  "Kompleksowe opróżnianie mieszkań, domów, garaży i piwnic w Lublinie. Wyniesienie, segregacja i utylizacja. Opróżnianie po zmarłych. Od 1900 zł."
);

export default function OproznianieMieszkanPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Opróżnianie Mieszkań Lublin"
        description="Kompleksowe opróżnianie mieszkań, domów, garaży i piwnic w Lublinie i okolicach. Profesjonalna usługa z wywozem i utylizacją."
        priceRange="$$"
        priceDescription="Od 1900 zł - cena uzależniona od stopnia zaśmiecenia i powierzchni"
      />
      <div className="min-h-screen bg-gradient-to-br from-muted/30 to-white">
        <div className="bg-gradient-to-br from-secondary/20 to-primary/10 py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold mb-6">
              <Home className="w-4 h-4 text-secondary" />
              Opróżnianie mieszkań
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Opróżnianie Mieszkań i Garaży Lublin
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Profesjonalne opróżnianie mieszkań, domów, garaży, piwnic i
              strychów. Kompleksowa usługa z wywozem i utylizacją.
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
            <h2 className="text-3xl font-bold mb-6">Czym jest opróżnianie mieszkań?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Opróżnianie mieszkań</strong> to kompleksowa usługa
              polegająca na wyniesieniu wszystkich rzeczy z mieszkania, domu,
              garażu lub innego pomieszczenia. W Szybkiej Ekipie zajmujemy się nie
              tylko wynoszeniem, ale także segregacją odpadów oraz ich legalną
              utylizacją.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-center">Co obejmuje usługa?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {[
              "Wyniesienie wszystkich rzeczy",
              "Segregacja odpadów",
              "Załadunek na samochód",
              "Transport do PSZOK lub skupu",
              "Legalna utylizacja",
              "Pozostawienie czystego miejsca",
              "Opróżnianie po zmarłych",
              "Możliwość wykupu wartościowych przedmiotów",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-5 bg-white rounded-xl border hover:border-secondary/40 hover:shadow-md transition-all">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-6">Kiedy warto skorzystać?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-secondary/5 to-white p-6 rounded-xl border border-secondary/20">
              <h4 className="font-bold text-lg mb-2">Opróżnianie mieszkania po zmarłym</h4>
              <p className="text-muted-foreground">
                Delikatnie i z szacunkiem zajmiemy się wyniesieniem rzeczy
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-white p-6 rounded-xl border border-primary/20">
              <h4 className="font-bold text-lg mb-2">Likwidacja gospodarstwa</h4>
              <p className="text-muted-foreground">
                Kompleksowe opróżnienie domu lub mieszkania
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/5 to-white p-6 rounded-xl border border-accent/20">
              <h4 className="font-bold text-lg mb-2">Sprzedaż nieruchomości</h4>
              <p className="text-muted-foreground">
                Przygotowanie mieszkania do sprzedaży lub wynajmu
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary/5 to-white p-6 rounded-xl border border-secondary/20">
              <h4 className="font-bold text-lg mb-2">Opróżnianie garażu lub piwnicy</h4>
              <p className="text-muted-foreground">
                Porządki w pomieszczeniach gospodarczych
              </p>
            </div>
          </div>

          <div className="not-prose bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-8 my-12 border border-secondary/20">
            <div className="text-center mb-6">
              <p className="text-muted-foreground mb-2">Cena od</p>
              <p className="text-6xl font-bold text-secondary mb-2">1900 zł</p>
              <p className="text-lg text-muted-foreground">za mieszkanie</p>
            </div>
            <p className="text-sm text-center text-muted-foreground max-w-md mx-auto">
              Ostateczna cena zależy od powierzchni, stopnia zaśmiecenia i ilości rzeczy do wyniesienia. Bezpłatna wycena przez telefon!
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-6">Jak wygląda proces?</h3>
          <div className="bg-white rounded-2xl p-8 mb-12 border">
            <div className="space-y-4">
              {[
                { step: "1", title: "Kontakt i wstępna wycena", desc: "Opiszesz nam zakres prac, my oszacujemy koszt" },
                { step: "2", title: "Oględziny (opcjonalnie)", desc: "Możemy przyjechać i zobaczyć mieszkanie" },
                { step: "3", title: "Ustalenie terminu", desc: "Często tego samego lub następnego dnia" },
                { step: "4", title: "Realizacja", desc: "Wynosimy wszystko, segregujemy, wywożymy" },
                { step: "5", title: "Rozliczenie", desc: "Płatność po wykonanej usłudze" },
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border">
              <h4 className="font-bold mb-3">📍 Obszar działania</h4>
              <p className="text-sm text-muted-foreground">
                Lublin i okolice: Radzyń Podlaski, Kock, Lubartów oraz wszystkie gminy w promieniu 50 km
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border">
              <h4 className="font-bold mb-3">💎 Przedmioty wartościowe</h4>
              <p className="text-sm text-muted-foreground">
                Wykupujemy antyki, meble i elektronikę w dobrym stanie - odliczamy od kosztów usługi!
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border">
              <h4 className="font-bold mb-3">🛡️ Ubezpieczenie OC</h4>
              <p className="text-sm text-muted-foreground">
                Pełne ubezpieczenie firmy - Twoje rzeczy i nieruchomość są bezpieczne
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary/10 to-primary/5 p-8 rounded-2xl mb-12 border border-secondary/20">
            <h3 className="text-xl font-bold mb-4">❤️ Opróżnianie mieszkań po zmarłych</h3>
            <p className="text-muted-foreground leading-relaxed">
              Rozumiemy, jak trudna może być sytuacja związana z opróżnianiem mieszkania po zmarłym.
              Działamy z szacunkiem, delikatnością i dyskrecją. Pomożemy w segregacji rzeczy,
              wydzieleniu pamiątek rodzinnych i profesjonalnym uporządkowaniu całej przestrzeni.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-6">Najczęściej zadawane pytania</h3>
          <div className="space-y-3 mb-12">
            <details className="bg-white rounded-xl border p-5 hover:border-secondary/40 hover:shadow-md transition-all group">
              <summary className="font-semibold cursor-pointer flex items-center gap-2">
                <span className="text-secondary group-open:rotate-90 transition-transform">▶</span>
                Ile kosztuje opróżnienie mieszkania 50m²?
              </summary>
              <p className="mt-4 text-muted-foreground pl-6">
                Dla mieszkania 50m² cena wynosi średnio <strong className="text-foreground">od 3800 zł</strong>. Ostateczna kwota
                zależy od ilości rzeczy, piętra i stopnia zaśmiecenia. Zadzwoń po
                bezpłatną wycenę - podaj powierzchnię, a od razu podamy orientacyjną cenę!
              </p>
            </details>
            <details className="bg-white rounded-xl border p-5 hover:border-secondary/40 hover:shadow-md transition-all group">
              <summary className="font-semibold cursor-pointer flex items-center gap-2">
                <span className="text-secondary group-open:rotate-90 transition-transform">▶</span>
                Czy wynosimy rzeczy z wyższych pięter?
              </summary>
              <p className="mt-4 text-muted-foreground pl-6">
                Tak, wynosimy z każdego piętra. Jeśli nie ma windy, doliczamy
                niewielką opłatę za każde piętro powyżej parteru.
              </p>
            </details>
            <details className="bg-white rounded-xl border p-5 hover:border-secondary/40 hover:shadow-md transition-all group">
              <summary className="font-semibold cursor-pointer flex items-center gap-2">
                <span className="text-secondary group-open:rotate-90 transition-transform">▶</span>
                Jak szybko możecie przyjechać?
              </summary>
              <p className="mt-4 text-muted-foreground pl-6">
                W większości przypadków jesteśmy w stanie przyjechać <strong className="text-foreground">tego samego
                lub następnego dnia</strong>. Pracujemy 7 dni w tygodniu, 6:00-22:00.
              </p>
            </details>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Potrzebujesz opróżnić mieszkanie?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Zadzwoń i umów się na bezpłatną wycenę!
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
