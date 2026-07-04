"use client";

import { useState } from "react";
import Image from "next/image";
import { Karla } from "next/font/google";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const karla = Karla({ weight: ["700"], subsets: ["latin"] });

/* One slide per fam; add more photos here as they're collected. */
const SLIDES = [{ name: "FUNKY FAM", image: "/family/hero.jpg" }];

export default function FamCarousel() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];
  const step = (d) => setIndex((i) => (i + d + SLIDES.length) % SLIDES.length);

  return (
    <div className="relative h-[420px] w-full max-w-[1120px] overflow-hidden rounded-xl lg:h-[600px]">
      <Image
        key={slide.image}
        src={slide.image}
        alt={`${slide.name} group photo`}
        fill
        sizes="1120px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <button
        type="button"
        aria-label="Previous fam"
        onClick={() => step(-1)}
        className="absolute left-8 top-1/2 flex h-[66px] w-[66px] -translate-y-1/2 items-center justify-center rounded-full bg-white/30 text-white transition-colors hover:bg-white/50"
      >
        <FiChevronLeft size={42} />
      </button>
      <button
        type="button"
        aria-label="Next fam"
        onClick={() => step(1)}
        className="absolute right-8 top-1/2 flex h-[66px] w-[66px] -translate-y-1/2 items-center justify-center rounded-full bg-white/30 text-white transition-colors hover:bg-white/50"
      >
        <FiChevronRight size={42} />
      </button>

      <p className={`${karla.className} absolute bottom-8 left-[72px] text-3xl font-bold text-white lg:text-[48px]`}>
        {slide.name}
      </p>

      <div className="absolute bottom-9 left-1/2 flex -translate-x-1/2 gap-6">
        {SLIDES.map((s, i) => (
          <button
            key={s.name}
            type="button"
            aria-label={`Go to ${s.name}`}
            onClick={() => setIndex(i)}
            className={`h-[21px] w-[21px] rounded-full transition-colors ${i === index ? "bg-white" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
