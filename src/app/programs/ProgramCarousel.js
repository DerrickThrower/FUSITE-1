"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Karla } from "next/font/google";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const karla = Karla({ weight: ["700"], subsets: ["latin"] });

/*
 * Featured-program carousel (Figma "DESKTOP ALUMNI" section).
 * The Alumni copy comes from the design; the other slides reuse the
 * program-card photos with short blurbs until real copy is written.
 */
const SLIDES = [
  {
    name: "ALUMNI",
    href: "/alumni",
    image: "/programs/carousel-alumni.jpg",
    text: "FUSION stays connected with alumni and always encourages current members to do the same. Our network dates back all the way to 2001, honoring a vast amount of experienced individuals.",
  },
  {
    name: "FAMILY",
    href: "/family",
    image: "/programs/card-family.jpg",
    text: "Our Family program pairs members into close-knit fams that grow together through socials, traditions, and support throughout the year.",
  },
  {
    name: "FUNDRAISING",
    href: "/fundraising",
    image: "/programs/card-fundraising.jpg",
    text: "From bacon-wrapped hotdogs to merch drops, our Fundraising program keeps FUSION running while teaching members real-world hustle.",
  },
  {
    name: "INTERNSHIP",
    href: "/internship",
    image: "/programs/card-internship.jpg",
    text: "The Internship program develops the next generation of FUSION leaders through hands-on involvement and mentorship from board members.",
  },
  {
    name: "MENTORSHIP",
    href: "/mentorship",
    image: "/programs/card-mentorship.jpg",
    text: "Mentors and mentees are matched to share guidance on academics, career paths, and life at UC Irvine.",
  },
  {
    name: "SOCIAL",
    href: "/social",
    image: "/programs/card-social.jpg",
    text: "Weekly socials and events where members from all backgrounds connect and unwind together.",
  },
  {
    name: "STUDY HOURS",
    href: "/study-hours",
    image: "/programs/card-study-hours.jpg",
    text: "Weekly study hours keep our members on top of their academics with a supportive community around them.",
  },
  {
    name: "WORKSHOPS",
    href: "/programs",
    image: "/programs/card-workshops.jpg",
    text: "Skill-building workshops covering everything from resumes and interviews to technical tools used in industry.",
  },
  {
    name: "ATHLETICS",
    href: "/athletics",
    image: "/programs/card-athletics.png",
    text: "FUSION Fit brings members together through sports, intramurals, and friendly competition.",
  },
];

export default function ProgramCarousel() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];
  const step = (d) => setIndex((i) => (i + d + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative h-[684px] w-full overflow-hidden bg-fusion-amber">
      {/* Photo inset below a thin amber strip, like the Figma layout */}
      <div className="absolute inset-x-0 bottom-0 top-8">
        <Image
          key={slide.image}
          src={slide.image}
          alt={`${slide.name} program photo`}
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
        {/* bottom-heavy dark gradient + left scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-[45%] bg-black/30" />
      </div>

      {/* Slide text */}
      <div className="absolute bottom-[69px] left-12 flex w-full max-w-[560px] flex-col items-start gap-2 pr-6">
        <h2 className={`${karla.className} text-4xl font-bold leading-[52px] text-white lg:text-[48px]`}>
          {slide.name}
        </h2>
        <p className="font-inter text-base leading-normal text-white lg:text-xl">{slide.text}</p>
        <Link
          href={slide.href}
          className="mt-2 bg-fusion-yellow px-3 py-2 text-sm font-medium text-fusion-ink shadow-sm transition-opacity hover:opacity-90"
        >
          LEARN MORE
        </Link>
      </div>

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous program"
        onClick={() => step(-1)}
        className="absolute left-12 top-1/2 flex h-[58px] w-[58px] -translate-y-1/2 items-center justify-center rounded-full bg-neutral-100/30 text-white transition-colors hover:bg-neutral-100/50"
      >
        <FiChevronLeft size={28} />
      </button>
      <button
        type="button"
        aria-label="Next program"
        onClick={() => step(1)}
        className="absolute right-12 top-1/2 flex h-[58px] w-[58px] -translate-y-1/2 items-center justify-center rounded-full bg-neutral-100/30 text-white transition-colors hover:bg-neutral-100/50"
      >
        <FiChevronRight size={28} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-[46px] left-1/2 flex -translate-x-1/2 gap-4">
        {SLIDES.map((s, i) => (
          <button
            key={s.name}
            type="button"
            aria-label={`Go to ${s.name}`}
            onClick={() => setIndex(i)}
            className={`h-3.5 w-3.5 rounded-full transition-colors ${i === index ? "bg-white" : "bg-white/30"}`}
          />
        ))}
      </div>
    </section>
  );
}
