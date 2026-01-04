import { GalleryImage } from "@/types";

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "Opróżnianie mieszkania 3-pokojowego - Lublin Czuby",
    beforeImage: "/images/gallery/before-1.jpg",
    afterImage: "/images/gallery/after-1.jpg",
    location: "Lublin - Czuby",
    category: "clearing",
    alt: "Opróżnianie mieszkania w Lublinie - przed i po",
  },
  {
    id: "2",
    title: "Transport mebli - przeprowadzka w Lublinie",
    beforeImage: "/images/gallery/before-2.jpg",
    afterImage: "/images/gallery/after-2.jpg",
    location: "Lublin - Śródmieście",
    category: "transport",
    alt: "Transport mebli Lublin - załadunek i rozładunek",
  },
  {
    id: "3",
    title: "Wywóz gruzu po remoncie - Radzyń Podlaski",
    beforeImage: "/images/gallery/before-3.jpg",
    afterImage: "/images/gallery/after-3.jpg",
    location: "Radzyń Podlaski",
    category: "waste-disposal",
    alt: "Wywóz gruzu Radzyń Podlaski - przed i po",
  },
  {
    id: "4",
    title: "Opróżnianie garażu - Lubartów",
    beforeImage: "/images/gallery/before-4.jpg",
    afterImage: "/images/gallery/after-4.jpg",
    location: "Lubartów",
    category: "clearing",
    alt: "Opróżnianie garażu Lubartów - przed i po",
  },
  {
    id: "5",
    title: "Transport mebli biurowych - Kock",
    beforeImage: "/images/gallery/before-5.jpg",
    afterImage: "/images/gallery/after-5.jpg",
    location: "Kock",
    category: "transport",
    alt: "Transport mebli biurowych Kock",
  },
  {
    id: "6",
    title: "Wywóz śmieci wielkogabarytowych - Lublin Sławin",
    beforeImage: "/images/gallery/before-6.jpg",
    afterImage: "/images/gallery/after-6.jpg",
    location: "Lublin - Sławin",
    category: "waste-disposal",
    alt: "Wywóz śmieci wielkogabarytowych Lublin",
  },
  {
    id: "8",
    title: "Transport mebli z piętra bez windy - Lublin Wieniawa",
    beforeImage: "/images/gallery/before-8.jpg",
    afterImage: "/images/gallery/after-8.jpg",
    location: "Lublin - Wieniawa",
    category: "transport",
    alt: "Transport mebli bez windy Lublin",
  },
  {
    id: "9",
    title: "Wywóz mebli i utylizacja - Świdnik",
    beforeImage: "/images/gallery/before-9.jpg",
    afterImage: "/images/gallery/after-9.jpg",
    location: "Świdnik",
    category: "waste-disposal",
    alt: "Wywóz mebli Świdnik - utylizacja",
  },
];

export function getGalleryImagesByCategory(
  category: "transport" | "clearing" | "waste-disposal"
): GalleryImage[] {
  return galleryImages.filter((image) => image.category === category);
}

export function getGalleryImageById(id: string): GalleryImage | undefined {
  return galleryImages.find((image) => image.id === id);
}

export function getRecentGalleryImages(limit: number = 6): GalleryImage[] {
  return galleryImages.slice(0, limit);
}
