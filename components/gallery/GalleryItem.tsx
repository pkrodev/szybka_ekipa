"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryImage } from "@/types";
import { MapPin, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryItemProps {
  image: GalleryImage;
  onClick: () => void;
}

export default function GalleryItem({ image, onClick }: GalleryItemProps) {
  const [showAfter, setShowAfter] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-white shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Image Container with Before/After Slider */}
      <div
        className="relative aspect-[4/3] cursor-pointer overflow-hidden"
        onClick={onClick}
        onMouseMove={handleSliderChange}
        onMouseEnter={() => setShowAfter(true)}
        onMouseLeave={() => {
          setShowAfter(false);
          setSliderPosition(50);
        }}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <Image
            src={image.beforeImage}
            alt={`${image.alt} - przed`}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">
            PRZED
          </div>
        </div>

        {/* After Image with slider */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            opacity: showAfter ? 1 : 0,
          }}
        >
          <Image
            src={image.afterImage}
            alt={`${image.alt} - po`}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
            PO
          </div>
        </div>

        {/* Slider line */}
        {showAfter && (
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="flex gap-0.5">
                <div className="w-0.5 h-4 bg-gray-400"></div>
                <div className="w-0.5 h-4 bg-gray-400"></div>
              </div>
            </div>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 bg-white/90 rounded-full">
              <Eye className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute bottom-4 left-4">
          <span
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg",
              image.category === "transport" &&
                "bg-primary text-white",
              image.category === "clearing" &&
                "bg-secondary text-white",
              image.category === "waste-disposal" &&
                "bg-accent text-white"
            )}
          >
            {image.category === "transport" && "Transport"}
            {image.category === "clearing" && "Opróżnianie"}
            {image.category === "waste-disposal" && "Wywóz"}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {image.title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{image.location}</span>
        </div>
      </div>

      {/* Hover instruction */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/75 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap">
          Najedź myszką aby zobaczyć efekt
        </div>
      </div>
    </div>
  );
}
