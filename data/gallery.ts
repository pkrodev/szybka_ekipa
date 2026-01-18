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
    title: "Opróżnianie piwnicy - Świdnik",
    beforeImage: "/images/gallery/before-2.jpg",
    afterImage: "/images/gallery/after-2.jpg",
    location: "Świdnik",
    category: "clearing",
    alt: "Opróżnianie piwnicy Świdnik - przed i po",
  },
  {
    id: "3",
    title: "Wywóz starych mebli i sprzętów z garażu - Lubartów",
    beforeImage: "/images/gallery/before-3.jpg",
    afterImage: "/images/gallery/after-3.jpg",
    location: "Lubartów",
    category: "clearing",
    alt: "Opróżnianie garażu Lubartów - przed i po",
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
