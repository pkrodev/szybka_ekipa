"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryImage } from "@/types";
import GalleryItem from "./GalleryItem";
import Modal from "@/components/ui/Modal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

interface BeforeAfterGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export default function BeforeAfterGallery({
  images,
  columns = 3,
}: BeforeAfterGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const selectedImage =
    selectedImageIndex !== null ? images[selectedImageIndex] : null;

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + images.length) % images.length
      );
    }
  };

  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid ${gridCols[columns]} gap-6`}>
        {images.map((image, index) => (
          <GalleryItem
            key={image.id}
            image={image}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <Modal isOpen={selectedImageIndex !== null} onClose={closeModal}>
          <div className="relative bg-white rounded-xl overflow-hidden max-w-5xl w-full pt-12">
            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                  aria-label="Poprzednie zdjęcie"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                  aria-label="Następne zdjęcie"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image container - Before and After side by side */}
            <div className="grid grid-cols-2 gap-1">
              <div className="relative aspect-video bg-muted">
                <Image
                  src={selectedImage.beforeImage}
                  alt={`${selectedImage.alt} - przed`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-red-500 text-white text-sm font-bold rounded-full shadow-lg">
                  PRZED
                </div>
              </div>
              <div className="relative aspect-video bg-muted">
                <Image
                  src={selectedImage.afterImage}
                  alt={`${selectedImage.alt} - po`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-green-500 text-white text-sm font-bold rounded-full shadow-lg">
                  PO
                </div>
              </div>
            </div>

            {/* Info section */}
            <div className="p-6 border-t border-border">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {selectedImage.title}
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="font-semibold">{selectedImage.location}</span>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Potrzebujesz podobnej usługi? Skontaktuj się z nami!
                </p>
                <div className="flex gap-3">
                  <Button asChild>
                    <a href="tel:+48733435319">Zadzwoń: 733 435 319</a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="/kontakt">Wyślij wiadomość</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
