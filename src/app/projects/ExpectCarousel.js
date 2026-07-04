"use client";

import { useState } from "react";
import Image from "next/image";
import { Karla } from "next/font/google";

const karla = Karla({ weight: ["700"], subsets: ["latin"] });

const PANELS = [
  { label: "Alyansa Panel", image: "/projects/expect-alyansa.jpg" },
  { label: "Projects Showcase", image: "/projects/fusioncon.jpg" },
  { label: "Industry Panel", image: "/projects/expect-industry.jpg" },
  { label: "Awards Ceremony", image: "/projects/hero.jpg" },
];

export default function ExpectCarousel() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex w-full flex-col items-center gap-12">
      <div className="flex w-full max-w-[1264px] flex-wrap items-center justify-center gap-6 lg:gap-10">
        {PANELS.map((p, i) => (
          <button
            key={p.label}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={`${karla.className} h-[140px] w-[180px] rounded-bl-[50px] rounded-br-[50px] rounded-tr-[50px] px-3 text-center text-2xl font-bold text-black transition-colors lg:h-[234px] lg:w-[286px] lg:text-[40px] lg:leading-tight ${
              i === active
                ? "bg-gray-400"
                : "bg-gray-300 shadow-[10px_4px_0px_0px_rgba(0,0,0,0.25)] hover:bg-gray-400/70"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div className="relative h-[240px] w-full max-w-[1120px] overflow-hidden rounded-xl md:h-[400px] lg:h-[600px]">
        <Image
          key={PANELS[active].image}
          src={PANELS[active].image}
          alt={PANELS[active].label}
          fill
          sizes="1120px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
