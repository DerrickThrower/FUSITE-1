import Image from "next/image";
import { Karla } from "next/font/google";
import Hero from "@/components/Hero";
import NumbersBand from "@/components/NumbersBand";
import TeamStructure from "./TeamStructure";
import PastProjects from "./PastProjects";

export const metadata = {
  title: "FUSION ICS Project",
  description:
    "FIP is FUSION's software project team, shipping real applications from concept to demo.",
};

const karla = Karla({ weight: ["700"], subsets: ["latin"] });

const STATS = [
  { icon: "/fip/icon-users.svg", value: "5", label: "Teams" },
  { icon: "/fip/icon-monitor.svg", value: "+80%", label: "GitHub Skills" },
  { icon: "/fip/icon-pen.svg", value: "+92%", label: "User Research" },
  { icon: "/fip/icon-star.svg", value: "+33%", label: "in Confidence" },
];

const TIMELINE = [
  {
    title: "1. Conceptualizing",
    image: "/fip/timeline-1.jpg",
    text: "Teams begin by defining the application they want to develop, aligned with the official prompt. This phase involves brainstorming ideas, conducting research on existing solutions, and outlining the project's objectives and features.",
  },
  {
    title: "2. Organizing",
    image: "/fip/timeline-2.png",
    text: "Teams determine their scope and requirements, ensuring the project addresses specific needs. This phase includes creating design documents, wireframes, and architectural plans that guide the development process.",
  },
  {
    title: "3. Building",
    image: "/fip/timeline-3.jpg",
    text: "Teams start designing and coding the application. Designers and developers work closely to implement features, build the user interface, and ensure that the backend systems are robust and efficient.",
  },
  {
    title: "4. Testing",
    image: "/fip/timeline-4.jpg",
    text: "Teams rigorously test their products. This phase involves debugging, user testing, performance optimization, and conclusive refinement to ensure the application functions smoothly and meets all requirements.",
  },
  {
    title: "5. Deployment",
    image: "/fip/timeline-5.png",
    text: "Teams prepare a formal presentation on their web application to be shown at FUSIONCON, demonstrating the application's capabilities, discussing the development journey's ups and downs, and highlighting how the project aligns with the prompt.",
  },
];

const FINDINGS = [
  {
    name: "Leilani Bascos",
    role: "Adobytes Design Lead",
    image: "/fip/testimonial-leilani.jpg",
    text: "“FIP was an amazing opportunity to exercise my design skills from start to finish alongside a development team. From ideating, researching and to finally designing, my team and I spent the whole year creating BranchOut. There really aren't many opportunities to practice working alongside development, so it was rewarding to see our designs brought to life in the final product we presented at FusionCon!”",
  },
  {
    name: "Aariel Abaincia",
    role: "Ubebytes Developer Lead",
    image: "/fip/testimonial-aariel.jpg",
    text: "“FIP was an incredible experience that grew my leadership and took my web development skills to the next level. I loved learning more about building projects while fostering a strong team culture and managing tasks that brought out the best in developers with different strengths. This journey as a lead not only allowed me to make meaningful connections with my team, but also helped me land my current developer job!”",
  },
];

function FindingCard({ name, role, image, text, reverse = false }) {
  return (
    <div className={`flex w-full max-w-[1100px] flex-col items-center gap-6 lg:gap-10 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
      <div className="relative h-[200px] w-[200px] shrink-0 lg:h-[260px] lg:w-[260px]">
        <Image src={image} alt={`Portrait of ${name}`} fill sizes="260px" className="object-cover" />
      </div>
      <div className="flex w-full flex-col gap-3 rounded-2xl bg-fusion-cream/95 px-8 py-6 shadow-lg">
        <span className={`${karla.className} text-5xl font-bold leading-none text-fusion-yellow`} aria-hidden>
          &ldquo;
        </span>
        <p className="font-inter text-base leading-8 text-fusion-body">{text}</p>
        <p className="self-end font-inter text-base text-fusion-body">
          {name} - <span className="italic text-fusion-amber">{role}</span>
        </p>
      </div>
    </div>
  );
}

export default function FIP() {
  return (
    <div>
      <Hero
        image="/fip/hero.jpg"
        imageAlt="FUSION ICS Project members group photo"
        eyebrow="PROJECTS"
        title="FUSION ICS PROJECT"
      />

      {/* ───── Intro ───── */}
      <section className="flex w-full justify-center bg-white px-5 py-16 md:px-8 md:py-[100px] lg:py-[160px]">
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-5 text-center">
          <h2 className={`${karla.className} text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
            The FUSION <span className="text-fusion-amber">ICS</span> Project
          </h2>
          <div className="h-1 w-[100px] bg-fusion-amber" />
          <p className="font-inter text-base leading-8 text-fusion-body">
            The FUSION ICS Project is made to equip members with hands-on project experience,
            fostering both technical and professional growth. With a hackathon format, participants
            will hone in on development or design skills over two academic quarters by producing a
            full-stack web application. Their products will allow them to build for real-world
            situations and collaborate in a dynamic, team-based environment. Participants will also
            get to grow their professional skills as the project consistently promotes them to
            effectively communicate, present work confidently, and translate complex ideas into
            actionable solutions. Our goal is to prepare participants not only to succeed in their
            careers but to lead and innovate in the tech field.
          </p>
        </div>
      </section>

      {/* ───── Team structure (interactive) ───── */}
      <TeamStructure />

      {/* ───── Process infographic ───── */}
      <section className="relative w-full">
        <Image
          src="/fip/process-infographic.jpg"
          alt="FIP process: plan, design, develop, test, finalize"
          width={1440}
          height={885}
          sizes="100vw"
          className="h-auto w-full"
        />
      </section>

      {/* ───── Project timeline ───── */}
      <section className="w-full bg-white px-5 py-16 md:px-8 lg:py-[160px]">
        <div className="mx-auto flex w-full max-w-[1164px] flex-col items-center gap-10 lg:gap-16">
          <h2 className={`${karla.className} text-3xl font-bold text-black lg:text-[48px] lg:leading-[52px]`}>
            Project Timeline
          </h2>
          <div className="relative flex w-full flex-col gap-12 lg:gap-20">
            {/* center line */}
            <div aria-hidden className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-black lg:block" />
            {TIMELINE.map((step, i) => (
              <div
                key={step.title}
                className={`relative flex flex-col items-center gap-6 lg:flex-row lg:gap-16 ${
                  i % 2 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div aria-hidden className="absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-fusion-yellow ring-4 ring-white lg:block" />
                <div className="relative h-[220px] w-full max-w-[520px] overflow-hidden rounded-xl lg:h-[300px] lg:w-1/2">
                  <Image
                    src={step.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className={`flex w-full flex-col gap-3 lg:w-1/2 ${i % 2 ? "lg:pr-8 lg:text-right" : "lg:pl-8"}`}>
                  <h3 className={`${karla.className} text-2xl font-bold text-black lg:text-[32px]`}>{step.title}</h3>
                  <p className="font-inter text-base leading-8 text-fusion-body">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FIP 2025 numbers ───── */}
      <NumbersBand eyebrow="FIP 2025" title="By The Numbers" stats={STATS} dark />

      {/* ───── Past projects (cards + modals) ───── */}
      <PastProjects />

      {/* ───── Findings from FIP ───── */}
      <section className="relative w-full overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image src="/fip/testimonials-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-fusion-amber/40" />
        </div>
        <div className="relative mx-auto flex w-full max-w-[1164px] flex-col items-center gap-10 px-5 py-16 md:px-8 lg:py-[160px]">
          <h2 className={`${karla.className} text-2xl font-bold tracking-[0.12em] text-white lg:text-[32px]`}>
            FINDINGS FROM FIP
          </h2>
          <FindingCard {...FINDINGS[0]} />
          <FindingCard {...FINDINGS[1]} reverse />
        </div>
      </section>

      {/* ───── Sponsors ───── */}
      <section className="w-full bg-white px-5 py-16 md:px-8 lg:py-[160px]">
        <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center gap-10 text-center">
          <h2 className={`${karla.className} text-3xl font-bold text-black lg:text-[48px] lg:leading-[52px]`}>
            Our Sponsors
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            <Image src="/fip/sponsor-1.png" alt="Sponsor logo" width={180} height={90} className="h-[70px] w-auto object-contain lg:h-[90px]" />
            <Image src="/fip/sponsor-fasae.png" alt="FASAE logo" width={180} height={90} className="h-[70px] w-auto object-contain lg:h-[90px]" />
            <Image src="/fip/sponsor-2.png" alt="Sponsor logo" width={180} height={90} className="h-[70px] w-auto object-contain lg:h-[90px]" />
          </div>
          <p className="font-inter text-base leading-8 text-fusion-body">
            We&rsquo;re grateful to our sponsors for supporting innovation, community, and student
            success &mdash; their partnership helps the FUSION ICS Project continue to grow and
            thrive. If you are interested in providing any form of mentorship, guidance, or support
            towards the FUSION ICS Project, please reach out!
          </p>
          <div className="flex w-full items-center justify-center gap-6">
            <div aria-hidden className="h-px flex-1 bg-gray-300" />
            <p className={`${karla.className} text-xl font-bold tracking-[0.08em] text-black lg:text-2xl`}>
              Contact Us to Get Involved
            </p>
            <div aria-hidden className="h-px flex-1 bg-gray-300" />
          </div>
          <a
            href="mailto:fusion@uci.edu"
            className={`${karla.className} inline-flex items-center gap-1.5 rounded-xl bg-fusion-amber px-5 py-3 text-lg font-bold tracking-[0.12em] text-white shadow-sm transition-opacity hover:opacity-90`}
          >
            Contact Us <span aria-hidden>›</span>
          </a>
        </div>
      </section>
    </div>
  );
}
