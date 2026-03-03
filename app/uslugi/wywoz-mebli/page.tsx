import { Metadata } from "next";
import Link from "next/link";
import { Sofa, CheckCircle, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { generateServiceSEO } from "@/lib/seo-config";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = generateServiceSEO(
  "Wywóz Mebli",
  "Profesjonalny wywóz starych mebli w Lublinie: szafy, kanapy, łóżka, meblościanki. Wyniesienie z każdego piętra, transport i utylizacja. Od 350 zł.",
  [],
  "/uslugi/wywoz-mebli"
);

export default function WywozMebliPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Wywóz Mebli Lublin"
        description="Profesjonalny wywóz starych mebli w Lublinie. Szafy, kanapy, łóżka - wywozimy wszystko z każdego piętra."
        priceRange="$$"
        priceDescription="Od 350 zł - wyniesienie, transport i utylizacja"
      />
      <div className="min-h-screen bg-gradient-to-br from-muted/30 to-white">
        <div className="bg-gradient-to-br from-primary/20 to-secondary/10 py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold mb-6">
              <Sofa className="w-4 h-4 text-primary" />
              Wywóz mebli
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Wywóz Mebli Lublin
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Profesjonalny wywóz starych i niechcianych mebli. Szafy, kanapy,
              łóżka, meblościanki - wywozimy wszystko!
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
            <h2 className="text-3xl font-bold mb-6">Wywóz mebli - szybko i profesjonalnie</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Potrzebujesz pozbyć się starych mebli? <strong className="text-foreground">Szybka Ekipa</strong>{" "}
              zajmie się tym za Ciebie! Wywozimy wszystkie rodzaje mebli - od
              pojedynczych krzeseł, po całe zestawy wypoczynkowe. Wynosimy meble z
              każdego piętra (nawet bez windy), załadowujemy na samochód i
              legalnie utylizujemy.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-center">Jakie meble wywozimy?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {[
              "Szafy i meblościanki",
              "Kanapy i fotele",
              "Łóżka i materace",
              "Stoły i krzesła",
              "Komody i kredensy",
              "Biurka i regały",
              "Szafy kuchenne",
              "Inne meble na wymiar",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-5 bg-white rounded-xl border hover:border-primary/40 hover:shadow-md transition-all">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="not-prose bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 my-12 border border-primary/20">
            <div className="text-center mb-6">
              <p className="text-muted-foreground mb-2">Cena od</p>
              <p className="text-5xl font-bold text-primary">350 zł</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between p-3 bg-white rounded-lg">
                <span className="text-muted-foreground">Dojazd:</span>
                <span className="font-semibold">2 zł/km</span>
              </div>
              <div className="flex justify-between p-3 bg-white rounded-lg">
                <span className="text-muted-foreground">Brak windy:</span>
                <span className="font-semibold">20 zł/piętro</span>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">Jak wygląda wywóz mebli?</h3>
          <div className="bg-white rounded-2xl p-8 mb-12 border">
            <div className="space-y-4">
              {[
                { step: "1", title: "Zadzwoń lub napisz", desc: "Opisz jakie meble chcesz wywieźć i z którego piętra" },
                { step: "2", title: "Otrzymasz wycenę", desc: "Podamy orientacyjną cenę od razu przez telefon" },
                { step: "3", title: "Ustalenie terminu", desc: "Często możemy przyjechać tego samego lub następnego dnia" },
                { step: "4", title: "Wyniesienie i załadunek", desc: "Nasze ekipy wyniosą meble z każdego piętra" },
                { step: "5", title: "Transport i utylizacja", desc: "Legalnie utylizujemy w PSZOK" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-primary/5 to-white p-6 rounded-xl border border-primary/20">
              <h4 className="font-bold text-lg mb-2">⚡ Szybka realizacja</h4>
              <p className="text-muted-foreground text-sm">Często tego samego dnia</p>
            </div>
            <div className="bg-gradient-to-br from-secondary/5 to-white p-6 rounded-xl border border-secondary/20">
              <h4 className="font-bold text-lg mb-2">🏢 Każde piętro</h4>
              <p className="text-muted-foreground text-sm">Wyniesienie nawet bez windy</p>
            </div>
            <div className="bg-gradient-to-br from-accent/5 to-white p-6 rounded-xl border border-accent/20">
              <h4 className="font-bold text-lg mb-2">💰 Bez ukrytych kosztów</h4>
              <p className="text-muted-foreground text-sm">Podajemy cenę z góry</p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-white p-6 rounded-xl border border-primary/20">
              <h4 className="font-bold text-lg mb-2">🔧 Demontaż w cenie</h4>
              <p className="text-muted-foreground text-sm">Rozbieramy większe meble jeśli trzeba</p>
            </div>
            <div className="bg-gradient-to-br from-secondary/5 to-white p-6 rounded-xl border border-secondary/20">
              <h4 className="font-bold text-lg mb-2">♻️ Legalna utylizacja</h4>
              <p className="text-muted-foreground text-sm">Wszystko trafia do PSZOK</p>
            </div>
            <div className="bg-gradient-to-br from-accent/5 to-white p-6 rounded-xl border border-accent/20">
              <h4 className="font-bold text-lg mb-2">🛡️ Ubezpieczenie</h4>
              <p className="text-muted-foreground text-sm">Pełne OC firmy</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border">
              <h4 className="font-bold mb-3">📍 Obszar działania</h4>
              <p className="text-sm text-muted-foreground">
                Lublin i okolice w promieniu 50 km: Radzyń Podlaski, Kock, Lubartów i wszystkie gminy powiatu
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border">
              <h4 className="font-bold mb-3">🏗️ Każde piętro</h4>
              <p className="text-sm text-muted-foreground">
                Profesjonalny sprzęt do transportu ciężkich mebli. Dbamy o klatki schodowe i ściany.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border">
              <h4 className="font-bold mb-3">♻️ Recykling</h4>
              <p className="text-sm text-muted-foreground">
                Drewno, metal i tkaniny segregowane zgodnie z przepisami środowiskowymi
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">Najczęściej zadawane pytania</h3>
          <div className="space-y-3 mb-12">
            <details className="bg-white rounded-xl border p-5 hover:border-primary/40 hover:shadow-md transition-all group">
              <summary className="font-semibold cursor-pointer flex items-center gap-2">
                <span className="text-primary group-open:rotate-90 transition-transform">▶</span>
                Ile kosztuje wywóz starej kanapy?
              </summary>
              <p className="mt-4 text-muted-foreground pl-6">
                Wywóz standardowej kanapy kosztuje <strong className="text-foreground">od 350 zł</strong> + dojazd.
                Dla Lublina łączny koszt to około 360-380 zł. Cena zależy od rozmiaru
                i piętra, z którego wynosimy.
              </p>
            </details>
            <details className="bg-white rounded-xl border p-5 hover:border-primary/40 hover:shadow-md transition-all group">
              <summary className="font-semibold cursor-pointer flex items-center gap-2">
                <span className="text-primary group-open:rotate-90 transition-transform">▶</span>
                Czy demontujecie meble?
              </summary>
              <p className="mt-4 text-muted-foreground pl-6">
                Tak, demontujemy większe meble, jeśli jest to potrzebne do
                wyniesienia (np. szafy, meblościanki). <strong className="text-foreground">Usługa w cenie podstawowej.</strong>
              </p>
            </details>
            <details className="bg-white rounded-xl border p-5 hover:border-primary/40 hover:shadow-md transition-all group">
              <summary className="font-semibold cursor-pointer flex items-center gap-2">
                <span className="text-primary group-open:rotate-90 transition-transform">▶</span>
                Jak szybko możecie przyjechać?
              </summary>
              <p className="mt-4 text-muted-foreground pl-6">
                W większości przypadków <strong className="text-foreground">tego samego lub następnego dnia</strong>. Pracujemy
                7 dni w tygodniu, 6:00-22:00.
              </p>
            </details>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Masz meble do wywozu?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Zadzwoń i umów się - często realizujemy tego samego dnia!
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
