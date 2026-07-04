import Link from "next/link";
import Image from "next/image";
import { Karla } from "next/font/google";
import Hero from "@/components/Hero";
import ProgramCarousel from "./ProgramCarousel";

const karla = Karla({ weight: ["700", "800"], subsets: ["latin"] });

const PROGRAM_CARDS = [
  { name: "ALUMNI", href: "/alumni", image: "/programs/card-alumni.png" },
  { name: "ATHLETICS", href: "/athletics", image: "/programs/card-athletics.png" },
  { name: "FAMILY", href: "/family", image: "/programs/card-family.jpg" },
  { name: "FUNDRAISING", href: "/fundraising", image: "/programs/card-fundraising.jpg" },
  { name: "INTERNSHIP", href: "/internship", image: "/programs/card-internship.jpg" },
  { name: "MENTORSHIP", href: "/programs", image: "/programs/card-mentorship.jpg" },
  { name: "SOCIAL", href: "/social", image: "/programs/card-social.jpg" },
  { name: "STUDY HOURS", href: "/study-hours", image: "/programs/card-study-hours.jpg" },
  { name: "WORKSHOPS", href: "/programs", image: "/programs/card-workshops.jpg" },
];

const TESTIMONIALS = [
  {
    name: "Arvin Martinez",
    role: "General Member",
    image: "/programs/testimonial-arvin.jpg",
    text: "“FUSION is a space where I can comfortably connect and grow with those within their community. FEP allowed me to obtain and nourish valuable skills in design, collaboration and Solidworks. Through FUSION I feel that I’ve made lasting memories and experiences that I’ll always cherish.”",
  },
  {
    name: "Taylor Gutierrez",
    role: "General Member",
    image: "/programs/testimonial-taylor.jpg",
    text: "“FUSION helped me find community when I needed it most at the beginning of my college career! I’ve met the sweetest people and have been presented with so many opportunities to further engage in the science and Filipino community at UCI.”",
  },
];

function TestimonialCard({ name, role, image, text, reverse = false }) {
  return (
    <div className={`flex w-full max-w-[1064px] flex-col items-center gap-6 lg:gap-10 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
      <div className="relative h-[220px] w-[220px] shrink-0 lg:h-[312px] lg:w-[312px]">
        <Image src={image} alt={`Portrait of ${name}`} fill sizes="312px" className="object-cover" />
      </div>
      <div
        className={`flex min-h-[312px] w-full flex-col justify-between gap-6 bg-gray-100 px-6 py-6 lg:px-10 ${
          reverse ? "rounded-bl-[32px] rounded-br-[32px] rounded-tl-[32px]" : "rounded-bl-[32px] rounded-br-[32px] rounded-tr-[32px]"
        }`}
      >
        <div className="flex flex-col gap-3">
          <Image src="/programs/quote.svg" alt="" width={70} height={50} />
          <p className="font-inter text-base leading-8 text-fusion-body">{text}</p>
        </div>
        <p className="self-end font-inter text-base text-fusion-body">
          {name} - <span className="italic text-[#FFB900]">{role}</span>
        </p>
      </div>
    </div>
  );
}

export default function Programs() {
  return (
    <div>
      <Hero
        image="/programs/hero.jpg"
        imageAlt="FUSION general meeting"
        eyebrow="INTERNAL"
        title="PROGRAMS"
      />

      {/* ───── What FUSION Has to Offer ───── */}
      <section className="flex w-full justify-center bg-white px-5 py-16 md:px-8 md:py-[100px] lg:py-[160px]">
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-5 text-center">
          <h2 className={`${karla.className} text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
            What <span className="text-fusion-amber">FUSION</span> Has to Offer
          </h2>
          <div className="h-1 w-[100px] bg-fusion-yellow" />
          <p className="font-inter text-base leading-8 text-fusion-body">
            At FUSION, we champion the essence of our five pillars - Support, Professionalism,
            Academics, Culture, and Engineering &amp; Science - by offering nine unique internal
            programs designed to enrich many different aspects of life for our members. Whether
            you&apos;re honing your athletic skills with FUSION Fit, finding or giving guidance
            through our Mentorship Program, or getting a fresh bacon-wrapped hotdog from our
            Fundraising Program, we aim to give every single one of our members a chance at finding
            something remarkably valuable to them in the FUSION space.
          </p>
        </div>
      </section>

      {/* ───── Featured program carousel ───── */}
      <ProgramCarousel />

      {/* ───── All programs grid ───── */}
      <section className="flex w-full justify-center bg-white px-5 py-16 md:px-8 md:py-[100px] lg:px-[94px] lg:py-[160px]">
        <div className="flex w-full max-w-[1252px] flex-col items-center gap-16">
          <div className="flex w-full flex-col items-center gap-3">
            <div className="flex w-full items-center justify-center gap-10">
              <div className="hidden h-1 flex-1 bg-fusion-yellow md:block" />
              <h2 className={`${karla.className} text-center text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
                See What FUSION Has in Store
              </h2>
              <div className="hidden h-1 flex-1 bg-fusion-yellow md:block" />
            </div>
            <p className={`${karla.className} text-lg font-bold tracking-[0.12em] text-neutral-500 lg:text-2xl`}>
              OUR PROGRAMS
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAM_CARDS.map((card) => (
              <Link
                key={card.name}
                href={card.href}
                className="group relative flex h-[220px] items-center justify-center overflow-hidden rounded-br-[40px] rounded-tl-[40px]"
              >
                <Image
                  src={card.image}
                  alt={`${card.name} program`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 390px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/40" />
                <span className={`${karla.className} relative text-3xl font-bold text-white lg:text-[40px]`}>
                  {card.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Testimonials ───── */}
      <section className="relative w-full overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image src="/programs/testimonials-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-[#FFA523]/40" />
        </div>
        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 py-16 md:px-8 md:py-[100px] lg:px-[138px] lg:py-[160px]">
          <h2 className={`${karla.className} text-center text-3xl font-bold text-white lg:text-[40px]`}>
            VOICES OF SATISFACTION
          </h2>
          <TestimonialCard {...TESTIMONIALS[0]} />
          <TestimonialCard {...TESTIMONIALS[1]} reverse />
        </div>
      </section>
    </div>
  );
}
