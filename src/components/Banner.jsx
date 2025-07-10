import { useState } from "react";

const images = [
  {
    src: "https://cdn.flyonui.com/fy-assets/components/carousel/image-22.png",
    alt: "game",
  },
  {
    src: "https://cdn.flyonui.com/fy-assets/components/carousel/image-15.png",
    alt: "vrbox",
  },
  {
    src: "https://cdn.flyonui.com/fy-assets/components/carousel/image-16.png",
    alt: "laptop",
  },
  {
    src: "https://cdn.flyonui.com/fy-assets/components/carousel/image-8.png",
    alt: "VRBox",
  },
  {
    src: "https://cdn.flyonui.com/fy-assets/components/carousel/image-23.png",
    alt: "iwatch",
  },
];

export function Banner() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[52rem] md:h-[52rem] bg-gradient-to-br from-indigo-100 via-white to-indigo-200 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent z-0" />
      <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-white/60"
              style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
            />
          </div>
        ))}
        {/* Gradient overlay for better text/contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl pointer-events-none z-10" />
      </div>
      {/* Previous Slide */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-white/80 hover:bg-indigo-100 shadow-lg p-3 rounded-full transition-all z-20 border border-indigo-200"
        aria-label="Previous"
      >
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      {/* Next Slide */}
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-white/80 hover:bg-indigo-100 shadow-lg p-3 rounded-full transition-all z-20 border border-indigo-200"
        aria-label="Next"
      >
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-4 h-4 rounded-full border-2 border-indigo-400 transition-all duration-200 ${
              idx === current ? "bg-indigo-500 scale-110 shadow-lg" : "bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}