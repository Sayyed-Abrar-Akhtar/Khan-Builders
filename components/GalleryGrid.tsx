"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryItems, GalleryItem } from "@/content/gallery";
import { ServiceCategory } from "@/content/services";
import { Filter, MapPin, X } from "lucide-react";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | "all">("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-concrete pb-4">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-ink/70 mr-2 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5 text-amber" /> Filter Projects:
        </span>
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
            activeCategory === "all"
              ? "bg-amber text-ink border border-amber"
              : "bg-white text-ink border border-concrete hover:bg-steel"
          }`}
        >
          All Works ({galleryItems.length})
        </button>
        <button
          onClick={() => setActiveCategory("building")}
          className={`px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
            activeCategory === "building"
              ? "bg-amber text-ink border border-amber"
              : "bg-white text-ink border border-concrete hover:bg-steel"
          }`}
        >
          Building ({galleryItems.filter(i => i.category === 'building').length})
        </button>
        <button
          onClick={() => setActiveCategory("electrical")}
          className={`px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
            activeCategory === "electrical"
              ? "bg-amber text-ink border border-amber"
              : "bg-white text-ink border border-concrete hover:bg-steel"
          }`}
        >
          Electrical ({galleryItems.filter(i => i.category === 'electrical').length})
        </button>
        <button
          onClick={() => setActiveCategory("air-conditioning")}
          className={`px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
            activeCategory === "air-conditioning"
              ? "bg-amber text-ink border border-amber"
              : "bg-white text-ink border border-concrete hover:bg-steel"
          }`}
        >
          Air Conditioning ({galleryItems.filter(i => i.category === 'air-conditioning').length})
        </button>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group bg-white border border-concrete cursor-pointer hover:border-circuit transition-all flex flex-col"
          >
            <div className="relative aspect-[4/3] w-full bg-steel overflow-hidden border-b border-concrete">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 bg-ink/90 text-amber text-[10px] font-heading font-bold uppercase tracking-widest px-2.5 py-1 border border-concrete/20">
                {item.categoryTitle}
              </div>
            </div>

            <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-heading font-bold text-ink text-base group-hover:text-circuit transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-ink/80 mt-1 leading-relaxed">
                  {item.caption}
                </p>
              </div>

              <div className="pt-2 border-t border-concrete/50 flex items-center text-[11px] text-ink/70">
                <MapPin className="w-3 h-3 text-amber mr-1 shrink-0" />
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white max-w-3xl w-full border border-concrete overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 bg-ink text-white p-2 hover:bg-amber hover:text-ink transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-steel">
              <Image
                src={selectedImage.image.src}
                alt={selectedImage.image.alt}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 space-y-2 bg-steel">
              <span className="inline-block bg-circuit text-white text-[10px] font-heading font-bold uppercase tracking-widest px-2.5 py-1">
                {selectedImage.categoryTitle}
              </span>
              <h3 className="font-heading font-extrabold text-ink text-xl">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-ink/80 leading-relaxed">
                {selectedImage.caption}
              </p>
              <div className="pt-2 flex items-center text-xs text-ink/70">
                <MapPin className="w-3.5 h-3.5 text-amber mr-1" />
                <span>{selectedImage.location}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
