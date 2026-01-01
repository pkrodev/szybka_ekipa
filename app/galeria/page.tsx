import { Metadata } from "next";
import { Image as ImageIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import BeforeAfterGallery from "@/components/gallery/BeforeAfterGallery";
import { galleryImages, getGalleryImagesByCategory } from "@/data/gallery";
import { generateSEO } from "@/lib/seo-config";

export const metadata: Metadata = generateSEO({
  title: "Galeria Realizacji",
  description:
    "Zobacz efekty naszych prac - galeria zdjęć przed i po. Transport mebli, opróżnianie mieszkań i wywóz śmieci w Lublinie i okolicach.",
  keywords: [
    "galeria transport mebli",
    "zdjęcia przed i po",
    "realizacje Lublin",
    "efekty prac",
  ],
  path: "/galeria",
});

export default function GaleriaPage() {
  const clearingImages = getGalleryImagesByCategory("clearing");
  const wasteDisposalImages = getGalleryImagesByCategory("waste-disposal");

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 to-white">
      <Container>
        {/* Page header */}
        <div className="py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            <ImageIcon className="w-4 h-4" />
            Galeria
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nasze Realizacje
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Zobacz efekty naszych prac. Każde zdjęcie to zadowolony klient i
            profesjonalnie wykonana usługa. Najedź myszką na zdjęcie, aby
            zobaczyć efekt przed i po.
          </p>
        </div>

        {/* All images gallery */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Wszystkie Realizacje
            </h2>
            <p className="text-muted-foreground">
              {galleryImages.length} zdjęć z naszych najnowszych realizacji
            </p>
          </div>
          <BeforeAfterGallery images={galleryImages} columns={3} />
        </section>

        {/* Clearing category */}
        {clearingImages.length > 0 && (
          <section className="mb-20">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-3">
                Opróżnianie
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Opróżnianie Mieszkań i Garaży
              </h2>
              <p className="text-muted-foreground">
                Kompleksowe opróżnianie z wywozem i utylizacją
              </p>
            </div>
            <BeforeAfterGallery images={clearingImages} columns={3} />
          </section>
        )}

        {/* Waste disposal category */}
        {wasteDisposalImages.length > 0 && (
          <section className="mb-20">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-3">
                Wywóz śmieci
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Wywóz Śmieci i Gruzu
              </h2>
              <p className="text-muted-foreground">
                Wywóz i legalna utylizacja odpadów
              </p>
            </div>
            <BeforeAfterGallery images={wasteDisposalImages} columns={3} />
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 mb-20">
          <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Potrzebujesz podobnej usługi?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami, a przeprowadzimy Twoją usługę równie
              profesjonalnie. Zadzwoń lub wyślij wiadomość!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+48733435319"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-lg"
              >
                Zadzwoń: 733 435 319
              </a>
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors text-lg"
              >
                Formularz kontaktowy
              </a>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
