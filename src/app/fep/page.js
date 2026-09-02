import Image from "next/image";
import { Karla } from "next/font/google";
import Hero from "@/components/Hero";
import NumbersBand from "@/components/NumbersBand";
import TeamStructure from "./TeamStructure";

export const metadata = {
  title: "FUSION Engineering Project",
  description:
    "FEP pairs members with mentors to design and build a hardware project across the year.",
};

const karla = Karla({ weight: ["700"], subsets: ["latin"] });

const STATS = [
  { icon: "/fip/icon-users.svg", value: "3", label: "Teams" },
  { icon: "/fip/icon-monitor.svg", value: "+80%", label: "Testing Skills" },
  { icon: "/fip/icon-pen.svg", value: "+92%", label: "User Research" },
  { icon: "/fip/icon-star.svg", value: "+33%", label: "in Confidence" },
];

const TIMELINE = [
  {
    title: "1. Planning",
    image: "/fep/timeline-1.jpg",
    text: "Teams start by thoroughly understanding the given challenge, breaking it down into core problems and identifying key requirements. They then develop a strategic plan, including timelines, resource allocation, and initial design concepts.",
  },
  {
    title: "2. Designing",
    image: "/fep/timeline-2.jpg",
    text: "In this phase, teams focus on detailed design work, creating blueprints, schematics, and prototypes. Mechanical and hardware components are modeled and tested to ensure they meet the challenge's specifications. Iterative testing and refinement are crucial at this stage.",
  },
  {
    title: "3. Building",
    image: "/fep/timeline-3.jpg",
    text: "Teams proceed to the construction and assembly of their solution. Mechanical systems and hardware components are built, integrated, and rigorously tested for functionality. Teams work collaboratively to ensure all parts work together seamlessly and address the challenge effectively.",
  },
  {
    title: "4. Testing",
    image: "/fep/timeline-4.jpg",
    text: "Teams rigorously test their solution under real-world conditions to ensure functionality and reliability, refining their design based on performance data and feedback.",
  },
  {
    title: "5. Presentation",
    image: "/fep/timeline-5.jpg",
    text: "The final phase involves thorough testing under real-world conditions to validate the solution. Teams then prepare for a comprehensive presentation of their project, showcasing their design process, technical achievements, and how their solution effectively meets the challenge.",
  },
];

const FINDINGS = [
  {
    name: "Kaitlin Sasot",
    role: "Hardware Subteam",
    image: "/fep/testimonial-kaitlin.png",
    text: "“FEP played a crucial role in shaping my technical skills and professional identity. Before joining FEP, I had no technical experience. I had never worked with a breadboard or even wires. Through the program, I gained hands-on knowledge and learned a lot. It also helped me develop key soft skills, such as communication, teamwork, and professional growth.”",
  },
  {
    name: "Jan Wayne Agluba",
    role: "Hardware Subteam",
    image: "/fep/testimonial-jan.jpg",
    text: "“FEP has been a huge help in how I communicate and work with others, especially when collaborating on projects with more experienced upperclassmen. It gave me a lot of hands-on technical experience, actually designing and building instead of just learning concepts in class. I got to see how real engineering projects come together and learned how to problem-solve when things didn't go as planned.”",
  },
];

const DRONE_TEAMS = [
  { team: "TEAM 2", name: "Flight Ganda", badge: "MOST INNOVATIVE DESIGN" },
  { team: "TEAM 3", name: "LeDrone", badge: "ADAPTABILITY IN ACTION" },
];

function AwardBadge({ label }) {
  return (
    <span className={`${karla.className} inline-flex w-fit items-center gap-2 rounded-xl border border-fusion-amber bg-fusion-amber/50 px-2 py-1 text-sm font-bold tracking-[0.12em] text-black lg:text-base`}>
      🏅 {label}
    </span>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-20 w-20 text-gray-400" fill="currentColor" aria-hidden>
      <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86a1 1 0 0 0-1.5.86z" />
    </svg>
  );
}

function FindingCard({ name, role, image, text, reverse = false }) {
  return (
    <div className={`flex w-full max-w-[1076px] flex-col items-stretch ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
      <div className="relative h-[240px] w-full shrink-0 lg:h-auto lg:w-[314px]">
        <Image src={image} alt={`Portrait of ${name}`} fill sizes="314px" className="object-cover" />
      </div>
      <div
        className={`flex w-full flex-col gap-4 bg-[#f4f4f4] p-6 lg:p-8 ${
          reverse ? "rounded-bl-[36px] rounded-tl-[36px] lg:rounded-bl-[36px]" : "rounded-br-[36px] rounded-tr-[36px]"
        }`}
      >
        <Image src="/programs/quote.svg" alt="" width={56} height={40} />
        <p className="font-inter text-base leading-relaxed text-fusion-body lg:text-xl">{text}</p>
        <p className="self-end font-inter text-base text-fusion-body">
          <span className="font-semibold">{name}</span> - <span className="italic text-[#979488]">{role}</span>
        </p>
      </div>
    </div>
  );
}

export default function FEP() {
  return (
    <div>
      <Hero
        image="/fep/hero.jpg"
        imageAlt="FUSION Engineering Project team group photo"
        eyebrow="PROJECTS"
        title="FUSION ENGINEERING PROJECT"
      />

      {/* ───── Intro ───── */}
      <section className="flex w-full justify-center bg-white px-5 py-16 md:px-8 md:py-[100px] lg:py-[160px]">
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-5 text-center">
          <h2 className={`${karla.className} text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
            The FUSION <span className="text-fusion-amber">Engineering</span> Project
          </h2>
          <div className="h-1 w-[100px] bg-fusion-amber" />
          <div className="flex flex-col gap-8 font-inter text-base leading-8 text-fusion-body">
            <p>
              FUSION empowers members to explore their potential through pioneering projects like
              the FUSION Engineering Project (FEP) and various STEM initiatives. Committed to
              fostering leadership and technical skills, we provide a platform for ideas and
              solutions. Join us in shaping the future of STEM.
            </p>
            <p>
              Teams rigorously design their robots, drawing inspiration from existing projects and
              learning about relevant technology. Using software like TinkerCAD and Solidworks,
              they create detailed models. Manufacturing involves 3D printing, laser cutting, and
              soldering. After assembly, robots are tested to identify issues, optimize design, and
              practice control for the showcase.
            </p>
          </div>
        </div>
      </section>

      {/* ───── Team structure (interactive) ───── */}
      <TeamStructure />

      {/* ───── Process infographic ───── */}
      <section className="relative w-full">
        <Image
          src="/fep/infographic.jpg"
          alt="FEP process: plan, design, develop, test, finalize"
          width={1440}
          height={885}
          sizes="100vw"
          className="h-auto w-full"
        />
      </section>

      {/* ───── Project timeline (dark variant) ───── */}
      <section className="w-full bg-[#7D7D7D] px-5 py-16 md:px-8 lg:py-[160px]">
        <div className="mx-auto flex w-full max-w-[1164px] flex-col items-center gap-10 lg:gap-16">
          <h2 className={`${karla.className} flex items-center gap-3 text-3xl font-bold text-white lg:text-[48px] lg:leading-[52px]`}>
            <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Project Timeline
          </h2>
          <div className="relative flex w-full flex-col gap-12 lg:gap-20">
            <div aria-hidden className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-black lg:block" />
            {TIMELINE.map((step, i) => (
              <div
                key={step.title}
                className={`relative flex flex-col items-center gap-6 lg:flex-row lg:gap-16 ${
                  i % 2 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div aria-hidden className="absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-fusion-yellow ring-4 ring-[#7D7D7D] lg:block" />
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
                  <h3 className={`${karla.className} text-2xl font-bold text-white lg:text-[32px]`}>{step.title}</h3>
                  <p className="font-inter text-base leading-8 text-gray-200">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FEP 2025 numbers ───── */}
      <NumbersBand eyebrow="FEP 2025" title="By The Numbers" stats={STATS} dark />

      {/* ───── 2024-2025 project showcase ───── */}
      <section className="w-full bg-white px-5 py-16 md:px-8 lg:px-[165px] lg:py-[160px]">
        <div className="mx-auto flex w-full max-w-[1061px] flex-col items-center gap-10 lg:gap-20">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className={`${karla.className} text-xl font-bold tracking-[0.12em] text-fusion-amber lg:text-[32px]`}>
              2024-2025 Project
            </p>
            <h2 className={`${karla.className} text-3xl font-bold text-black lg:text-[48px] lg:leading-[52px]`}>
              Remote Controlled Precision Cargo Drone
            </h2>
          </div>

          {/* featured team */}
          <div className="flex w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm md:flex-row">
            <div className="relative h-[240px] w-full shrink-0 md:h-[372px] md:w-[527px]">
              <Image src="/fep/drone-sapin.jpg" alt="Sapin Saplane drone" fill sizes="527px" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-between gap-6 p-8 md:p-12">
              <div className="flex flex-col gap-3">
                <p className={`${karla.className} text-xl font-bold tracking-[0.12em] text-black lg:text-2xl`}>TEAM 1</p>
                <p className={`${karla.className} text-3xl font-bold text-black lg:text-[48px] lg:leading-[52px]`}>
                  Sapin Saplane
                </p>
              </div>
              <AwardBadge label="BEST OVERALL" />
            </div>
          </div>

          {/* other teams */}
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
            {DRONE_TEAMS.map((t) => (
              <div key={t.name} className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                {/* video placeholder per the design */}
                <div className="flex h-[294px] w-full items-center justify-center bg-gray-100">
                  <PlayIcon />
                </div>
                <div className="flex flex-col gap-4 p-8">
                  <div className="flex flex-col gap-3">
                    <p className={`${karla.className} text-xl font-bold tracking-[0.12em] text-black lg:text-2xl`}>{t.team}</p>
                    <p className={`${karla.className} text-3xl font-bold text-black lg:text-[48px] lg:leading-[52px]`}>
                      {t.name}
                    </p>
                  </div>
                  <AwardBadge label={t.badge} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Findings from FEP ───── */}
      <section className="relative w-full overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image src="/fep/testimonials-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-fusion-amber/40" />
        </div>
        <div className="relative mx-auto flex w-full max-w-[1164px] flex-col items-center gap-10 px-5 py-16 md:px-8 lg:py-[160px]">
          <h2 className={`${karla.className} text-3xl font-bold text-white lg:text-[40px]`}>
            FINDINGS FROM FEP
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
            <Image src="/fep/sponsor-fgn.png" alt="Filipino Googler Network logo" width={180} height={90} className="h-[70px] w-auto object-contain lg:h-[90px]" />
            <Image src="/fep/sponsor-faces.png" alt="FACES logo" width={180} height={90} className="h-[70px] w-auto object-contain lg:h-[90px]" />
            <Image src="/fep/sponsor-fasae.png" alt="FASAE logo" width={180} height={90} className="h-[70px] w-auto object-contain lg:h-[90px]" />
          </div>
          <p className="font-inter text-base leading-8 text-fusion-body">
            We&rsquo;re grateful to our sponsors for supporting innovation, community, and student
            success &mdash; their partnership helps the FUSION Engineering Project continue to grow
            and thrive. If you are interested in providing any form of mentorship, guidance, or
            support towards the FUSION Engineering Project, please reach out!
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
