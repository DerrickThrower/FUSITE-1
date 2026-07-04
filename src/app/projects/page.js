import Image from "next/image";
import Link from "next/link";
import { Karla } from "next/font/google";
import Hero from "@/components/Hero";
import NumbersBand from "@/components/NumbersBand";
import ExpectCarousel from "./ExpectCarousel";
import Countdown from "./Countdown";

const karla = Karla({ weight: ["500", "700"], subsets: ["latin"] });

const STATS = [
  { icon: "/projects/icon-user.svg", value: "100+", label: "Attendees" },
  { icon: "/projects/icon-users.svg", value: "10", label: "Sponsors" },
  { icon: "/projects/icon-award.svg", value: "20+", label: "Teams" },
  { icon: "/projects/icon-school.svg", value: "100%", label: "Learning" },
];

function ProjectCard({ logo, logoAlt, text, href }) {
  return (
    <div className="flex min-h-[384px] w-full max-w-[544px] flex-col items-center justify-center gap-4 rounded-br-[30px] rounded-tl-[30px] bg-white px-9 py-6 shadow-[4px_4px_10.85px_rgba(0,0,0,0.25)]">
      <div className="relative h-[130px] w-full max-w-[378px]">
        <Image src={logo} alt={logoAlt} fill sizes="378px" className="object-contain" />
      </div>
      <p className="max-w-[406px] text-center font-inter text-base leading-8 text-black">{text}</p>
      <Link
        href={href}
        className={`${karla.className} inline-flex items-center gap-1.5 rounded-xl bg-fusion-amber px-4 py-2.5 text-lg font-medium tracking-[0.12em] text-white shadow-sm transition-opacity hover:opacity-90`}
      >
        Learn More <span aria-hidden>›</span>
      </Link>
    </div>
  );
}

export default function Projects() {
  return (
    <div>
      <Hero
        image="/projects/hero.jpg"
        imageAlt="FUSIONCON audience and stage"
        eyebrow="F.I.P. & F.E.P."
        title="PROJECTS"
      />

      {/* ───── Our Projects intro ───── */}
      <section className="flex w-full justify-center bg-white px-5 py-16 md:px-8 md:py-[100px] lg:py-[160px]">
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-5 text-center">
          <p className={`${karla.className} text-2xl font-bold tracking-[0.12em] text-black lg:text-[32px]`}>
            Our Projects
          </p>
          <div className="h-1 w-[100px] bg-fusion-yellow" />
          <h2 className={`${karla.className} text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
            Innovate with FUSION
          </h2>
          <p className="font-inter text-base leading-8 text-fusion-body">
            FUSION supports the growth of STEM skills through innovative projects like the FUSION
            Engineering Project (FEP) and the FUSION Information and Computer Science Project
            (FIP). By participating in FEP and FIP, members enhance their problem-solving abilities
            and technical skills while being part of a vibrant, supportive community. Both projects
            culminate in FUSIONCON, our annual conference, where members showcase their projects to
            the community and industry professionals.
          </p>
        </div>
      </section>

      {/* ───── FEP / FIP cards ───── */}
      <section className="relative w-full overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image src="/projects/overview-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#FFB900]/30" />
        </div>
        <div className="relative mx-auto flex w-full max-w-[1160px] flex-col items-center justify-between gap-10 px-5 py-16 lg:flex-row lg:py-[160px]">
          <ProjectCard
            logo="/projects/fep-logo.png"
            logoAlt="FUSION Engineering Project logo"
            href="/fep"
            text="The FUSION Engineering Project (FEP) is a two-quarter program offering FUSION members the opportunity to participate in teams and enhance their engineering and programming knowledge."
          />
          <ProjectCard
            logo="/projects/fip-logo.png"
            logoAlt="FUSION ICS Project logo"
            href="/fip"
            text="The FUSION Information & Computer Sciences Project is a two-quarter program designed for FUSION designers and developers to enhance their skills in coding and system design."
          />
        </div>
      </section>

      {/* ───── What is FUSIONCON ───── */}
      <section className="flex w-full justify-center bg-white px-5 py-16 md:px-8 md:py-[100px] lg:py-[160px]">
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-5 text-center">
          <h2 className={`${karla.className} text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
            What is <span className="text-fusion-amber">FUSIONCON</span>?
          </h2>
          <div className="h-1 w-[100px] bg-fusion-yellow" />
          <div className="flex flex-col gap-8 font-inter text-base leading-8 text-fusion-body">
            <p>
              FUSIONCON is FUSION&rsquo;s annual convention where all project teams present the work
              they have developed throughout the year, from engineering builds to software projects.
            </p>
            <p>
              The convention features keynote speakers, live demonstrations, and formal
              presentations. The event concludes with an awards ceremony recognizing the dedication
              and accomplishments of the project members.
            </p>
          </div>
        </div>
      </section>

      {/* ───── FUSIONCON photo ───── */}
      <section className="relative flex w-full justify-center overflow-hidden py-16 lg:py-[100px]">
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 hidden h-[578px] w-[575px] -translate-x-[calc(50%+407px)] -translate-y-1/2 -rotate-45 border-[46px] border-[#FAC80A] lg:block"
        />
        <div className="relative mx-5 h-[240px] w-full max-w-[1157px] overflow-hidden rounded-[20px] md:h-[400px] lg:h-[627px]">
          <Image
            src="/projects/fusioncon.jpg"
            alt="FUSIONCON group photo"
            fill
            sizes="1157px"
            className="object-cover"
          />
        </div>
      </section>

      {/* ───── What to Expect ───── */}
      <section className="relative w-full overflow-hidden bg-white px-5 py-16 lg:py-[100px]">
        <Image
          aria-hidden
          src="/projects/gear-corner.svg"
          alt=""
          width={91}
          height={105}
          className="absolute left-[43px] top-[118px] hidden lg:block"
        />
        <div className="mx-auto flex w-full max-w-[1264px] flex-col items-center gap-10">
          <h2 className={`${karla.className} text-3xl font-bold leading-tight text-black lg:text-[48px] lg:leading-[52px]`}>
            What to Expect
          </h2>
          <div className="h-1 w-[100px] bg-fusion-yellow" />
          <ExpectCarousel />
        </div>
      </section>

      {/* ───── By the numbers + countdown ───── */}
      <NumbersBand eyebrow="FUSIONCON 2024" title="By The Numbers" stats={STATS} />
      {/* Figma says 2026, but that event has passed — countdown targets the next con */}
      <NumbersBand eyebrow="COUNTDOWN TO" title="FUSIONCON 2027" dark>
        <Countdown />
      </NumbersBand>
    </div>
  );
}
