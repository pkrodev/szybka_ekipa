import Link from "next/link";
import { Truck, Home, Trash2, Wrench, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

const iconMap = {
  Truck,
  Home,
  Trash2,
  Wrench,
};

export default function ServicesSection() {
  return (
    <section className="w-full py-20 bg-white">
      <Container size="xl">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nasze Usługi
          </h2>
          <p className="text-lg text-muted-foreground">
            Kompleksowe usługi transportowe i wywozowe w Lublinie i okolicach.
            Profesjonalnie, szybko i w przystępnych cenach.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service) => {
            const IconComponent =
              iconMap[service.icon as keyof typeof iconMap] || Truck;

            return (
              <Card
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="inline-flex p-4 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground">
                    {service.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-sm text-muted-foreground line-clamp-3 whitespace-pre-line">
                    {service.shortDescription}
                  </p>

                  {/* Price */}
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Cena od:
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {service.priceInfo}
                    </p>
                  </div>

                  {/* CTA Link */}
                  <Link
                    href={`/uslugi/${service.slug}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Dowiedz się więcej
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA to all services */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/uslugi">
              Zobacz wszystkie usługi
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
