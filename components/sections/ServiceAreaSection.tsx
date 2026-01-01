import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { serviceAreas } from "@/data/service-areas";

export default function ServiceAreaSection() {
  // Sort by distance
  const sortedAreas = [...serviceAreas].sort((a, b) => a.distance - b.distance);

  // Split into groups
  const nearbyAreas = sortedAreas.filter((area) => area.distance <= 30);
  const furtherAreas = sortedAreas.filter((area) => area.distance > 30);

  return (
    <section className="w-full py-20 bg-white">
      <Container size="xl">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" />
            Obszar działania
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Gdzie Działamy?
          </h2>
          <p className="text-lg text-muted-foreground">
            Obsługujemy Lublin i szeroki obszar okolic. Nie widzisz swojej
            miejscowości? Skontaktuj się z nami - często jesteśmy elastyczni!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Nearby areas */}
          <div className="bg-gradient-to-br from-primary/5 to-white rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Najbliższy obszar
                </h3>
                <p className="text-sm text-muted-foreground">
                  Do 30 km od Lublina
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {nearbyAreas.map((area) => (
                <div
                  key={area.name}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {area.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {area.distance} km
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Further areas */}
          <div className="bg-gradient-to-br from-secondary/5 to-white rounded-2xl p-8 border border-secondary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Dalsze okolice
                </h3>
                <p className="text-sm text-muted-foreground">
                  Powyżej 30 km od Lublina
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {furtherAreas.map((area) => (
                <div
                  key={area.name}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg border border-border hover:border-secondary hover:bg-secondary/5 transition-colors"
                >
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {area.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {area.distance} km
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="bg-muted/30 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-3">
              Nie znalazłeś swojej miejscowości?
            </h3>
            <p className="text-muted-foreground mb-6">
              Często obsługujemy również inne lokalizacje. Zadzwoń lub wyślij
              wiadomość, a sprawdzimy możliwości dojazdu.
            </p>
            <div className="flex justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Skontaktuj się z nami
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
