import { Metadata } from "next";
import Link from "next/link";
import { Heart, CheckCircle, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { generateServiceSEO } from "@/lib/seo-config";
import { CONTACT } from "@/lib/constants";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = generateServiceSEO(
  "Opróżnianie Mieszkań po Spadkach",
  "Delikatna i profesjonalna pomoc po stracie bliskiej osoby. Opróżnianie mieszkań po zmarłych w Lublinie z szacunkiem i dyskrecją. Od 1900 zł."
);

export default function PoSpadkachPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Opróżnianie Mieszkań po Spadkach Lublin"
        description="Delikatna i profesjonalna pomoc po stracie bliskiej osoby. Opróżnianie mieszkań po zmarłych z szacunkiem i dyskrecją."
        priceRange="$$"
        priceDescription="Od 1900 zł - możliwość skupu wartościowych przedmiotów"
      />
      <div className="min-h-screen bg-gradient-to-br from-muted/30 to-white">
        <div className="bg-gradient-to-br from-secondary/20 to-primary/10 py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold mb-6">
              <Heart className="w-4 h-4 text-secondary" />
              Po spadkach
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Opróżnianie Mieszkań po Spadkach Lublin
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Delikatna i profesjonalna pomoc w trudnych sytuacjach życiowych.
              Opróżniamy mieszkania po zmarłych z szacunkiem i dyskrecją.
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
            <h2 className="text-3xl font-bold mb-6">Z szacunkiem i zrozumieniem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rozumiemy, jak trudna i emocjonalna jest sytuacja po stracie
              bliskiej osoby. <strong className="text-foreground">Opróżnianie mieszkania po zmarłym</strong>{" "}
              to często konieczność, która przychodzi w najmniej odpowiednim
              momencie. Dlatego oferujemy{" "}
              <strong className="text-foreground">delikatne i profesjonalne podejście</strong>, które pozwoli
              Ci skupić się na tym, co najważniejsze.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-center">Co obejmuje usługa?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {[
              "Delikatne i dyskretne podejście",
              "Pomoc w segregacji rzeczy",
              "Wyniesienie wszystkich przedmiotów",
              "Możliwość odkupu wartościowych rzeczy",
              "Przygotowanie mieszkania do sprzedaży",
              "Kompleksowa obsługa sprawy",
              "Szybka realizacja w uzgodnionym terminie",
              "Pełna dyskrecja",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-5 bg-white rounded-xl border hover:border-secondary/40 hover:shadow-md transition-all">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-6">Jak wyglądają nasze usługi?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-secondary/5 to-white p-6 rounded-xl border border-secondary/20">
              <h4 className="font-bold text-lg mb-2">Pomoc w segregacji rzeczy</h4>
              <p className="text-muted-foreground">
                Wspólnie z Tobą przejrzymy rzeczy i oddzielimy to, co chcesz zachować
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-white p-6 rounded-xl border border-primary/20">
              <h4 className="font-bold text-lg mb-2">Odkup wartościowych przedmiotów</h4>
              <p className="text-muted-foreground">
                Antyki, meble, książki, biżuteria - wszystko co ma wartość
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/5 to-white p-6 rounded-xl border border-accent/20">
              <h4 className="font-bold text-lg mb-2">Wyniesienie i wywóz</h4>
              <p className="text-muted-foreground">
                Zajmiemy się tym szybko i profesjonalnie
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary/5 to-white p-6 rounded-xl border border-secondary/20">
              <h4 className="font-bold text-lg mb-2">Przygotowanie mieszkania</h4>
              <p className="text-muted-foreground">
                Do sprzedaży, wynajmu lub oddania
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-8 my-12 border border-secondary/20">
            <div className="text-center mb-6">
              <p className="text-muted-foreground mb-2">Cena od</p>
              <p className="text-6xl font-bold text-secondary mb-2">1900 zł</p>
              <p className="text-lg text-muted-foreground">za mieszkanie</p>
            </div>
            <p className="text-sm text-center text-muted-foreground max-w-md mx-auto">
              Ostateczna cena zależy od powierzchni, stopnia zaśmiecenia i ilości rzeczy do wyniesienia. Bezpłatna wycena przez telefon!
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-6">Dlaczego warto nam zaufać?</h3>
          <div className="bg-white rounded-2xl p-8 mb-12 border">
            <div className="space-y-4">
              {[
                { title: "Doświadczenie", desc: "Pomagamy rodzinom od lat, wiemy jak podejść do tego zadania" },
                { title: "Dyskrecja", desc: "Szanujemy Twoją prywatność i pamięć bliskiej osoby" },
                { title: "Kompleksowa obsługa", desc: "Zajmiemy się wszystkim od A do Z" },
                { title: "Elastyczność", desc: "Dostosujemy się do Twojego harmonogramu" },
                { title: "Uczciwe ceny", desc: "Bez ukrytych kosztów, wycena z góry" },
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
                Lublin i okolice w promieniu 50 km. Rozumiemy, że sprawy spadkowe często wymagają szybkiej reakcji
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border">
              <h4 className="font-bold mb-3">⚡ Szybka realizacja</h4>
              <p className="text-sm text-muted-foreground">
                W większości przypadków możemy rozpocząć pracę w ciągu 1-2 dni od kontaktu
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">Najczęściej zadawane pytania</h3>
          <div className="space-y-3 mb-12">
            <details className="bg-white rounded-xl border p-5 hover:border-secondary/40 hover:shadow-md transition-all group">
              <summary className="font-semibold cursor-pointer flex items-center gap-2">
                <span className="text-secondary group-open:rotate-90 transition-transform">▶</span>
                Jak szybko możecie rozpocząć opróżnianie?
              </summary>
              <p className="mt-4 text-muted-foreground pl-6">
                Rozumiemy, że często jest to pilne. W większości przypadków możemy
                rozpocząć pracę w ciągu <strong className="text-foreground">1-2 dni od kontaktu</strong>.
              </p>
            </details>
            <details className="bg-white rounded-xl border p-5 hover:border-secondary/40 hover:shadow-md transition-all group">
              <summary className="font-semibold cursor-pointer flex items-center gap-2">
                <span className="text-secondary group-open:rotate-90 transition-transform">▶</span>
                Czy muszę być obecny podczas opróżniania?
              </summary>
              <p className="mt-4 text-muted-foreground pl-6">
                To zależy od Ciebie. Możemy pracować samodzielnie (jeśli wcześniej
                ustalimy co zachować) lub wspólnie z Tobą, jeśli wolisz być obecny.
              </p>
            </details>
            <details className="bg-white rounded-xl border p-5 hover:border-secondary/40 hover:shadow-md transition-all group">
              <summary className="font-semibold cursor-pointer flex items-center gap-2">
                <span className="text-secondary group-open:rotate-90 transition-transform">▶</span>
                Czy pomagacie w segregacji dokumentów?
              </summary>
              <p className="mt-4 text-muted-foreground pl-6">
                Tak, możemy pomóc w segregacji dokumentów. Wszystkie dokumenty
                przekazujemy Tobie lub osobie przez Ciebie wskazanej.
              </p>
            </details>
            <details className="bg-white rounded-xl border p-5 hover:border-secondary/40 hover:shadow-md transition-all group">
              <summary className="font-semibold cursor-pointer flex items-center gap-2">
                <span className="text-secondary group-open:rotate-90 transition-transform">▶</span>
                Czy musicie widzieć mieszkanie przed wyceną?
              </summary>
              <p className="mt-4 text-muted-foreground pl-6">
                Nie zawsze. Często wystarczy rozmowa telefoniczna i zdjęcia. Jeśli
                wolisz, możemy umówić się na oględziny.
              </p>
            </details>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Potrzebujesz pomocy?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Zadzwoń do nas - porozmawiamy o Twojej sytuacji i ustalimy szczegóły.
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
