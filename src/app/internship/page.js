import Image from "next/image";
import { Karla } from "next/font/google";
import Hero from "@/components/Hero";
import TestimonialCard from "@/components/TestimonialCard";

const karla = Karla({ weight: ["700", "800"], subsets: ["latin"] });

const DUTIES = [
  {
    title: "Support",
    icon: "/internship/icon-gear.png",
    rounded: "rounded-tl-[30px]",
    text: "Attend all general meetings and board meetings, and often be present at various FUSION-related events.",
  },
  {
    title: "Innovate",
    icon: "/internship/icon-sungear.png",
    rounded: "",
    text: "Contribute to the work of each chosen position and create an event during the final week to present your acquired skills.",
  },
  {
    title: "Organize",
    icon: "/internship/icon-sun.png",
    rounded: "rounded-br-[30px]",
    text: "Plan the intern-led week, organizing and leading a general meeting and other programs with your intern class.",
  },
];

const TESTIMONIALS = [
  {
    name: "Marissa Caguioa",
    role: "FU Class",
    image: "/internship/testimonial-marissa.jpg",
    text: "“The FUSION internship revived my love for leadership. I was able to connect with other while working toward a common goal, let my creativity fly, and see the impact of my voice and ideas.”",
  },
  {
    name: "Tristan Dela Cruz",
    role: "ON Class",
    image: "/internship/testimonial-tristan.png",
    text: "“It was one of my favorite experiences I've ever had in college. It opened up my professional and social communities and built me skills that I've translated to other opportunities. I can proudly say that ON Class has a special place in my heart throughout college and after I graduate.”",
  },
  {
    name: "Alecs Garcia",
    role: "SI Class",
    image: "/internship/testimonial-alecs.png",
    text: "“Interning under Motherboard as a SI class intern was an invaluable experience during my short time at UCI! Shadowing board members and assisting in their tasks helped me navigate the transition from ideas to execution in a fun and low-stakes environment. In addition, collaborating with other SI interns helped me appreciate the dedication that went into growing and maintaining the wonderful space that FUSION occupies.”",
  },
];

const CLASSES = [
  { name: "FU CLASS", year: "‘22-’23", image: "/internship/class-fu.png" },
  { name: "SI CLASS", year: "‘23-’24", image: "/internship/class-si.png" },
  { name: "ON CLASS", year: "‘23-’24", image: "/internship/class-on.png" },
  { name: "EN CLASS", year: "‘24-’25", image: "/internship/class-en.png" },
  { name: "GR CLASS", year: "‘24-’25", image: "/internship/class-gr.png" },
];

function DutyCard({ title, icon, text, rounded }) {
  return (
    <div
      className={`flex h-[467px] w-[314px] flex-col items-center justify-center gap-4 bg-white px-7 text-center shadow-[0px_0px_8.3px_rgba(51,50,45,0.3)] ${rounded}`}
    >
      <Image src={icon} alt="" width={139} height={120} className="h-[120px] w-auto object-contain" />
      <h3 className={`${karla.className} text-2xl font-bold tracking-[0.12em] text-black lg:text-[32px]`}>
        {title}
      </h3>
      <p className="font-inter text-base leading-8 text-fusion-body">{text}</p>
    </div>
  );
}

export default function Internship() {
  return (
    <div>
      <Hero
        image="/internship/hero.jpg"
        imageAlt="FUSION intern class group photo"
        eyebrow="PROGRAMS"
        title="INTERNSHIP"
      />

      {/* ───── Intern with FUSION ───── */}
      <section className="flex w-full justify-center bg-white px-5 py-16 md:px-8 md:py-[100px] lg:py-[160px]">
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-5 text-center">
          <h2 className={`${karla.className} text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
            Intern with FUSION!
          </h2>
          <div className="h-1 w-[100px] bg-fusion-yellow" />
          <p className="font-inter text-base leading-8 text-fusion-body">
            Our 10-week internship program gives general members a chance to shadow three board
            positions of their choice. Interns spend their first six weeks rotating through their
            chosen roles and use the following four weeks to hone in on a preferred position,
            conclusively leading a general meeting and other events with their intern class during
            the last week of the program. Interns are expected to be incredibly active in the
            FUSION space, aiming to become a familiar face in the organization.
          </p>
        </div>
      </section>

      {/* ───── Intern duties ───── */}
      <section className="relative w-full overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FACA84] via-white to-[#FBC578]" />
          <Image src="/internship/duties-texture.png" alt="" fill sizes="100vw" className="object-cover opacity-5" />
        </div>
        <div className="relative mx-auto flex w-full max-w-[1166px] flex-col items-center gap-10 px-5 py-16 md:py-[160px]">
          <h2 className={`${karla.className} text-3xl font-bold text-black lg:text-[40px]`}>
            INTERN DUTIES
          </h2>
          <div className="h-1 w-[164px] bg-fusion-yellow" />
          <div className="flex flex-col items-center gap-[34px] lg:flex-row">
            {DUTIES.map((d) => (
              <DutyCard key={d.title} {...d} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── Why intern testimonials ───── */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-neutral-500">
        <div
          aria-hidden
          className="absolute -left-[295px] top-[56px] hidden h-[578px] w-[575px] -rotate-45 border-[46px] border-[#FAC80A] lg:block"
        />
        <div
          aria-hidden
          className="absolute left-[997px] top-[975px] hidden h-[455px] w-[453px] -rotate-45 border-[46px] border-[#FAC80A] lg:block"
        />
        <div className="relative mx-auto flex w-full max-w-[1166px] flex-col items-center gap-10 px-5 py-16 md:px-8 md:py-[160px]">
          <h2 className={`${karla.className} text-center text-3xl font-bold text-black lg:text-[40px]`}>
            <span className="text-[#FFA523]">Why</span> Intern for FUSION?
          </h2>
          <TestimonialCard {...TESTIMONIALS[0]} />
          <TestimonialCard {...TESTIMONIALS[1]} reverse />
          <TestimonialCard {...TESTIMONIALS[2]} />
        </div>
      </section>

      {/* ───── Apply + intern class carousel ───── */}
      <section className="relative w-full overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image src="/internship/join-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#111928]/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fusion-amber/80" />
        </div>
        <div className={`${karla.className} relative flex w-full flex-col items-center gap-8 py-[136px]`}>
          <p className="px-5 text-center text-lg font-bold tracking-[0.12em] text-[#CBC9C3] lg:text-2xl">
            WANT TO CONTRIBUTE MORE TO FUSION?
          </p>
          <h2 className="max-w-[830px] px-5 text-center text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[48px] lg:leading-[52px]">
            Apply to Our FUSION Internship Program Below!
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#FFA523] px-5 py-3 text-base font-bold tracking-[0.12em] text-white shadow-sm transition-opacity hover:opacity-90"
          >
            Apply Here <span aria-hidden>›</span>
          </a>

          {/* horizontally scrollable class strip */}
          <div className="flex w-full gap-10 overflow-x-auto px-10 pb-4 pt-8">
            {CLASSES.map((c) => (
              <div
                key={`${c.name}-${c.year}`}
                className="relative flex h-[308px] w-[572px] shrink-0 flex-col items-start justify-end overflow-hidden rounded-xl px-8 py-6"
              >
                <Image
                  src={c.image}
                  alt={`${c.name} group photo`}
                  fill
                  sizes="572px"
                  className="object-cover object-bottom"
                />
                <div className="relative flex items-center gap-2 text-white">
                  <span className="text-2xl font-bold tracking-[0.12em] lg:text-[32px]">{c.name}</span>
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-white" />
                  <span className="font-inter text-base">{c.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
