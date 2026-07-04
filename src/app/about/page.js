import Image from "next/image";
import { Karla } from "next/font/google";
import Hero from "@/components/Hero";

const karla = Karla({ weight: ["700", "800"], subsets: ["latin"] });

const PILLARS = [
  {
    name: "CULTURE",
    dark: true,
    text: "As UC Irvine's sole Filipino-led science and engineering organization, we are dedicated to uplifting Filipino culture through events, programs, and resources that highlight Filipino history, traditions, language, and identity.",
  },
  {
    name: "ACADEMICS",
    dark: true,
    text: "Being a STEM-based organization, we ensure our members focus on their academic careers by hosting study hours throughout the week and offering academic resources.",
  },
  {
    name: "SOCIAL SUPPORT",
    dark: false,
    text: "Each week, we host general meetings and social events where people from different backgrounds can connect through FUSION. Our diverse internal programs ensure that all members can feel included.",
  },
  {
    name: "PROFESSIONALISM",
    dark: true,
    text: "We prepare our members to thrive in the tech and engineering industry by providing resources and experiences that strengthen professional skills, expand industry knowledge, and build meaningful connections.",
  },
  {
    name: "SCIENCE & ENGINEERING",
    dark: true,
    text: "Our two annual projects, FEP and FIP, enable engineers and scientists to sharpen their hard skills, practice teamwork, and present a final product at FUSIONCON, our yearly competition.",
  },
];

const ORGS = [
  {
    name: "PUSO",
    logo: "/about/org-puso.png",
    text: "The Pilipinx Pre-health Undergraduate Student Organization (PUSO) focuses on pre-health and pre-medical career paths for the Filipinx community.",
  },
  {
    name: "KABA",
    logo: "/about/org-kaba.png",
    text: "Kababayan (KABA) is one of the largest collegiate Pilipinx-American organizations in California and nationwide, focusing on Filipino culture.",
  },
  {
    name: "PASS",
    logo: "/about/org-pass.png",
    text: "Pilipinx-Americans in Social Studies (PASS) is an organization that focuses on fields relating to law, humanities, social sciences, and social ecology.",
  },
];

function Pillar({ name, text, dark }) {
  return (
    <div className={`flex w-full flex-col gap-5 px-8 py-7 ${dark ? "bg-neutral-700" : "bg-fusion-cream"}`}>
      <div className="flex items-center gap-6">
        <span className={`h-[30px] w-[30px] shrink-0 rounded-full ${dark ? "bg-fusion-amber" : "bg-fusion-yellow"}`} />
        <h3 className={`${karla.className} text-xl font-bold tracking-[0.12em] lg:text-2xl ${dark ? "text-white" : "text-black"}`}>
          {name}
        </h3>
      </div>
      <p className={`font-inter text-base leading-8 ${dark ? "text-[#F4F4F4]" : "text-fusion-body"}`}>{text}</p>
    </div>
  );
}

export default function About() {
  return (
    <div>
      <Hero
        image="/about/hero.jpg"
        imageAlt="FUSION members group photo at a general meeting"
        eyebrow="OUR HISTORY"
        title="ABOUT US"
      />

      {/* ───── Our Story ───── */}
      <section className="flex w-full justify-center bg-white px-5 py-16 md:px-8 md:py-[100px] lg:py-[160px]">
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-5 text-center">
          <h2 className={`${karla.className} text-2xl font-bold tracking-[0.12em] text-black lg:text-[32px]`}>
            Our Story
          </h2>
          <div className="h-1 w-[100px] bg-fusion-yellow" />
          <h3 className={`${karla.className} text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
            A network connecting the Filipinx community and STEM at UC Irvine.
          </h3>
          <div className="flex flex-col gap-8 font-inter text-base leading-8 text-fusion-body">
            <p>
              In 2001, a Filipina engineer at the University of California, Irvine recognized the
              need for a dedicated space for the Filipinx community in STEM, specifically for
              engineers and scientists. This led to the establishment of the Filipinx Undergraduate
              Scientists-Engineers In an Organized Network, or FUSION.
            </p>
            <p>
              Since then, FUSION has experienced tremendous growth, now boasting over 300 members
              from diverse backgrounds, including not only engineers and scientists but students
              from various fields. FUSION at UC Irvine stands as a welcoming, Filipino-led student
              organization that embraces all academic pursuits and walks of life.
            </p>
          </div>
        </div>
      </section>

      {/* ───── Our Pillars intro (amber band) ───── */}
      <section className="relative w-full overflow-hidden bg-white">
        <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[37.5%] bg-fusion-amber md:block" />
        <div className="relative mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-10 px-5 py-16 md:flex-row md:gap-[60px] md:px-8 md:py-[100px] lg:px-[138px] lg:py-[160px]">
          <div className="flex w-full max-w-[560px] flex-col items-start justify-center gap-6 md:flex-1">
            <h2 className={`${karla.className} text-3xl font-bold leading-tight text-black lg:text-[40px]`}>
              Our Pillars
            </h2>
            <p className="font-inter text-base leading-8 text-fusion-body">
              At FUSION, we pride ourselves on upholding our 5 pillars that comprehensively shape
              each of our members. As fellow undergraduate students, we understand that college is
              about finding balance between work, school, and social life. FUSION offers various
              programs and events that cater to one or more of the following pillars...
            </p>
          </div>
          <div className="relative h-[220px] w-full max-w-[517px] shrink-0 overflow-hidden rounded-bl-[30px] rounded-tr-[30px] md:h-[300px] md:w-[45%] lg:w-[517px]">
            <Image
              src="/about/pillars-info.jpg"
              alt="FUSION members at an event"
              fill
              sizes="(max-width: 768px) 100vw, 517px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ───── Pillar list (photo left, stacked pillars right) ───── */}
      <section className="flex w-full flex-col md:flex-row">
        <div className="relative min-h-[260px] flex-1">
          <Image
            src="/about/pillars-photo.jpg"
            alt="FUSION members celebrating together"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex w-full flex-col md:w-[55%] lg:w-[636px]">
          {PILLARS.map((p) => (
            <Pillar key={p.name} {...p} />
          ))}
        </div>
      </section>

      {/* ───── ALYANSA + org cards ───── */}
      <section className="relative w-full overflow-hidden bg-neutral-100">
        <div aria-hidden className="pointer-events-none absolute -left-[30%] top-[360px] w-[115%] md:-left-[714px] md:w-[1621px]">
          <Image src="/about/sun-vector.svg" alt="" width={1621} height={1577} />
        </div>
        <div className="relative mx-auto flex w-full max-w-[1000px] flex-col items-center gap-16 px-5 py-16 md:py-[100px] lg:gap-[100px] lg:py-[160px]">
          <div className="flex w-full flex-col items-center gap-5 text-center">
            <h2 className={`${karla.className} text-2xl font-bold tracking-[0.12em] text-black lg:text-[32px]`}>
              ALYANSA
            </h2>
            <div className="h-1 w-[100px] bg-fusion-yellow" />
            <h3 className={`${karla.className} text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
              A network connecting the Filipinx community and STEM at UC Irvine.
            </h3>
            <p className="font-inter text-base leading-8 text-fusion-body">
              Join FUSION, where ambition meets innovation. We&apos;re a vibrant community
              empowering Filipinx students and aspiring professionals in Science, Technology,
              Engineering, and Mathematics (STEM) at UC Irvine. Through our five pillars, Support,
              Professionalism, Academics, Culture, and Science-Engineering we foster excellence and
              provide unparalleled opportunities for growth.
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-8 md:flex-row">
            {ORGS.map((org) => (
              <div
                key={org.name}
                className="flex w-full max-w-[310px] flex-col items-center gap-6 rounded-bl-[30px] rounded-tr-[30px] bg-white px-12 py-8 text-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              >
                <Image
                  src={org.logo}
                  alt={`${org.name} logo`}
                  width={110}
                  height={110}
                  className="rounded-full"
                />
                <h4 className={`${karla.className} text-2xl font-bold tracking-[0.12em] text-black lg:text-[32px]`}>
                  {org.name}
                </h4>
                <p className="font-inter text-base leading-8 text-fusion-body">{org.text}</p>
                <a
                  href="#"
                  className="mt-auto inline-flex items-center rounded-xl bg-fusion-amber px-3 py-1.5 text-xs font-medium text-white shadow-sm transition-opacity hover:opacity-90"
                >
                  LEARN MORE
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
