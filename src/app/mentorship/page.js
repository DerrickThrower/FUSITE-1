import Image from "next/image";
import { Karla } from "next/font/google";
import Hero from "@/components/Hero";

const karla = Karla({ weight: ["700", "800"], subsets: ["latin"] });

const LINES = [
  {
    name: "SPARK LINE",
    image: "/mentorship/line-spark.jpg",
    mentor: {
      name: "Noah Tizon",
      role: "[Spark Line] Mentor",
      text: "Being a mentor has been such a rewarding way to help someone new feel at home in FUSION and at UCI. I love being able to share advice and offer support, and along the way, I've gained a true friend I know will remain part of my life.",
    },
    mentee: {
      name: "Quinn Pierce",
      role: "[Spark Line] Mentee",
      text: "I learned what it means to be there for someone academically, professionally, and emotionally. It has shown me how to be myself around others while also being able to expand my relationship with those around me.",
    },
  },
  {
    name: "BLAST LINE",
    image: "/mentorship/line-blast.jpg",
    reverse: true,
    mentor: {
      name: "Lulu Buan",
      role: "[Blast Line] Mentor",
      text: "Becoming a mentor has not only been a journey of getting to know underclassmen but it has helped me learn from my mentees. It really is such a privilege to get to know amazing people and see how they navigate their own journeys throughout college. But more than that my mentees have become such great friends and continue to be important people in my life.",
    },
    mentee: {
      name: "Kaylee Quinn",
      role: "[Blast Line] Mentee",
      text: "I learned how it feels to have someone be there for you through the stressful, fun, and crazy parts of college. Having someone to look up to, and just being a text away has really given me that home away from home.",
    },
  },
];

function LineTestimonial({ name, image, mentor, mentee, reverse = false }) {
  return (
    <div className={`flex w-full flex-col items-stretch gap-10 lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""}`}>
      <div className="relative flex min-h-[300px] w-full max-w-[425px] shrink-0 items-end overflow-hidden px-8 py-7">
        <Image src={image} alt={`${name} mentorship line`} fill sizes="425px" className="object-cover" />
        <span className={`${karla.className} relative text-2xl font-bold tracking-[0.12em] text-white lg:text-[32px]`}>
          {name}
        </span>
      </div>
      <div
        className={`flex flex-1 flex-col gap-6 bg-white p-5 ${
          reverse ? "rounded-bl-[32px] rounded-br-[32px] rounded-tl-[32px]" : "rounded-bl-[32px] rounded-br-[32px] rounded-tr-[32px]"
        }`}
      >
        <Image src="/programs/quote.svg" alt="" width={70} height={50} />
        <div className="flex flex-col gap-2">
          <p className="font-inter text-base leading-8 text-text-body">{mentor.text}</p>
          <p className="font-inter text-xs">
            <span className="font-semibold text-fusion-body">{mentor.name}</span>{" "}
            <span className="text-base text-fusion-body">-</span>{" "}
            <span className="italic text-[#FFB900]">{mentor.role}</span>
          </p>
        </div>
        <div className="flex flex-col items-end gap-2 text-right">
          <p className="font-inter text-base leading-8 text-black">{mentee.text}</p>
          <p className="font-inter text-xs">
            <span className="font-semibold text-fusion-body">{mentee.name}</span>{" "}
            <span className="text-base text-fusion-body">-</span>{" "}
            <span className="italic text-[#FFB900]">{mentee.role}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Mentorship() {
  return (
    <div className="bg-white">
      <Hero
        image="/mentorship/hero.png"
        imageAlt="Mentorship reveal event"
        eyebrow="PROGRAMS"
        title="MENTORSHIP"
      />

      {/* ───── What is our Mentorship Program? ───── */}
      <section className="flex w-full justify-center bg-white px-5 py-16 md:px-8 md:py-[100px] lg:py-[160px]">
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-5 text-center">
          <h2 className={`${karla.className} text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
            What is our <span className="text-fusion-yellow">Mentorship</span> Program?
          </h2>
          <div className="h-1 w-[100px] bg-fusion-yellow" />
          <p className="font-inter text-base leading-8 text-fusion-body">
            FUSION&apos;s Mentorship Program offers general members the opportunity to receive
            academic, professional, and social guidance from an experienced mentor. During
            Mentorship Reveal, which happens twice a year, members are paired with mentors based
            on compatibility and academic background. A mentor serves as a guide, offering support
            as members begin their college journey or their journey in FUSION.
          </p>
        </div>
      </section>

      {/* ───── GROW / CONNECT / LEARN checkerboard ───── */}
      <section className="grid w-full grid-cols-1 md:grid-cols-3">
        <div className={`${karla.className} order-1 flex h-[120px] items-center justify-center text-2xl font-bold tracking-[0.12em] text-black md:h-[370px] lg:text-[32px]`}>
          CONNECT
        </div>
        <div className="relative order-2 h-[260px] md:h-[370px]">
          <Image src="/mentorship/grid-connect.jpg" alt="Mentorship pairs connecting" fill sizes="480px" className="object-cover" />
        </div>
        <div className={`${karla.className} order-3 hidden h-[370px] items-center justify-center text-2xl font-bold tracking-[0.12em] text-black md:flex lg:text-[32px]`}>
          LEARN
        </div>
        <div className="relative order-4 h-[260px] md:h-[370px]">
          <Image src="/mentorship/grid-grow.jpg" alt="Mentors and mentees growing together" fill sizes="480px" className="object-cover" />
        </div>
        <div className={`${karla.className} order-5 flex h-[120px] items-center justify-center text-2xl font-bold tracking-[0.12em] text-black md:h-[370px] lg:text-[32px]`}>
          GROW
        </div>
        <div className="relative order-6 h-[260px] md:h-[370px]">
          <Image src="/mentorship/grid-learn.jpg" alt="Mentorship learning session" fill sizes="480px" className="object-cover" />
        </div>
      </section>

      {/* ───── Mentorship line testimonials ───── */}
      <section className="w-full bg-fusion-cream">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[60px] px-5 py-16 lg:px-[100px] lg:py-[100px]">
          <div className="flex flex-col items-center gap-3">
            <div className="flex w-full items-center justify-center gap-10">
              <div className="hidden h-1 flex-1 bg-fusion-yellow md:block" />
              <h2 className={`${karla.className} text-center text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
                A Word from Our
              </h2>
              <div className="hidden h-1 flex-1 bg-fusion-yellow md:block" />
            </div>
            <p className={`${karla.className} text-lg font-bold tracking-[0.12em] text-neutral-500 lg:text-2xl`}>
              MENTORSHIP LINES
            </p>
          </div>
          {LINES.map((line) => (
            <LineTestimonial key={line.name} {...line} />
          ))}
        </div>
      </section>

      {/* ───── Gallery ───── */}
      <section className="flex w-full flex-col items-center gap-10 bg-white px-5 py-16 lg:py-[100px]">
        <h2 className={`${karla.className} max-w-[524px] text-center text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
          Mentorship Memories in Frames
        </h2>
        <div className="h-1 w-[100px] bg-fusion-yellow" />
        <div className="relative h-[300px] w-full max-w-[760px] lg:h-[452px]">
          <Image src="/mentorship/gallery.jpg" alt="Mentorship memories photo" fill sizes="760px" className="object-cover" />
        </div>
      </section>

      {/* ───── Apply ───── */}
      <section className="relative w-full overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image src="/mentorship/join-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#111928]/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fusion-amber/80" />
        </div>
        <div className={`${karla.className} relative flex w-full flex-col items-center gap-8 py-[136px]`}>
          <p className="px-5 text-center text-lg font-bold tracking-[0.12em] text-[#CBC9C3] lg:text-2xl">
            WANT TO BECOME A MENTOR/MENTEE?
          </p>
          <h2 className="max-w-[830px] px-5 text-center text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[48px] lg:leading-[52px]">
            Apply to Our FUSION Mentorship Program Below!
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#FFA523] px-5 py-3 text-base font-bold tracking-[0.12em] text-white shadow-sm transition-opacity hover:opacity-90"
          >
            Apply Here <span aria-hidden>›</span>
          </a>
          <div className="flex w-full flex-col items-center gap-8 px-5 pt-4 lg:flex-row lg:justify-center">
            <div className="relative h-[240px] w-full max-w-[572px] overflow-hidden rounded-br-[30px] rounded-tl-[30px] lg:h-[308px]">
              <Image src="/mentorship/apply-1.jpg" alt="Mentorship reveal celebration" fill sizes="572px" className="object-cover" />
            </div>
            <div className="relative hidden h-[308px] w-[572px] overflow-hidden rounded-bl-[30px] rounded-tr-[30px] lg:block">
              <Image src="/mentorship/apply-2.jpg" alt="Mentorship line group photo" fill sizes="572px" className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
