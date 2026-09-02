import Image from "next/image";
import { Karla } from "next/font/google";
import Hero from "@/components/Hero";
import AlumniDirectory from "./AlumniDirectory";

export const metadata = {
  title: "Alumni",
  description:
    "Where FUSION alumni land after UCI, and how to stay connected with the network.",
};

const karla = Karla({ weight: ["700", "800"], subsets: ["latin"] });

function BubbleHeader({ eyebrow, title }) {
  return (
    <div className="flex flex-col gap-3">
      <p className={`${karla.className} text-xl font-bold tracking-[0.12em] text-fusion-yellow lg:text-2xl`}>
        {eyebrow} &raquo;
      </p>
      <h3 className={`${karla.className} text-3xl font-bold text-black lg:text-[40px]`}>{title}</h3>
      <div className="h-1 w-[100px] bg-fusion-yellow" />
    </div>
  );
}

export default function Alumni() {
  return (
    <div className="bg-white">
      <Hero
        image="/alumni/hero.jpg"
        imageAlt="FUSION alumni gathering"
        eyebrow="PROGRAMS"
        title="ALUMNI"
      />

      {/* ───── Stay Connected ───── */}
      <section className="flex w-full justify-center bg-white px-5 py-16 md:px-8 md:py-[100px] lg:py-[160px]">
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-5 text-center">
          <h2 className={`${karla.className} text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
            Stay <span className="text-fusion-yellow">Connected</span>
          </h2>
          <div className="h-1 w-[100px] bg-fusion-yellow" />
          <p className="font-inter text-base leading-8 text-fusion-body">
            At FUSION, we believe in the power of lifelong connections. Our strong alumni network
            is a testament to the enduring relationships formed within our community. We actively
            engage with our alumni through regular events and networking opportunities, ensuring
            they remain an integral part of FUSION&apos;s growth and success. By fostering these
            connections, we provide current members with invaluable guidance and support, while
            celebrating the achievements of our alumni in their professional journeys.
          </p>
        </div>
      </section>

      {/* ───── Photo band ───── */}
      <section className="relative h-[420px] w-full lg:h-[684px]">
        <Image src="/alumni/carousel.jpg" alt="FUSION alumni event" fill sizes="100vw" className="object-cover" />
      </section>

      {/* ───── Alumni Spotlight ───── */}
      <section className="w-full bg-gradient-to-r from-fusion-cream via-fusion-cream to-fusion-amber">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 py-16 lg:flex-row lg:gap-20 lg:px-[100px] lg:py-20">
          <div className="flex max-w-[560px] flex-col gap-8 lg:flex-1">
            <BubbleHeader eyebrow="ALUMNI SPOTLIGHT" title="Celebrating Success" />
            <p className="font-inter text-base leading-8 text-black">
              We invite alumni to share their journeys through panels, spotlights, and story
              features, offering lessons from their challenges and successes. By highlighting
              these experiences, we inspire current members with real-world advice and build a
              community.
            </p>
          </div>
          <div className="relative h-[280px] w-full max-w-[584px] shrink-0 overflow-hidden rounded-bl-[30px] rounded-tr-[30px] lg:h-[371px] lg:w-[584px]">
            <Image src="/alumni/spotlight.jpg" alt="Alumni spotlight panel" fill sizes="584px" className="object-cover" />
          </div>
        </div>
      </section>

      {/* ───── Network with Professionals ───── */}
      <section className="relative w-full overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image src="/alumni/network-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative flex w-full justify-center px-5 py-16 lg:justify-end lg:px-[88px] lg:py-[99px]">
          <div className="flex max-w-[461px] flex-col gap-10 rounded-br-[32px] rounded-tl-[32px] rounded-tr-[32px] bg-white px-9 py-11">
            <BubbleHeader eyebrow="CONNECT & COLLABORATE" title="Network with Professionals" />
            <p className="font-inter text-base leading-8 text-black">
              Our events connect students with FUSION alumni through workshops, panels, and
              socials. Members gain valuable insights, build professional relationships, and
              expand career opportunities while being part of a thriving STEM community.
            </p>
          </div>
        </div>
      </section>

      {/* ───── Alumni Scholarship ───── */}
      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-11 px-5 pb-11 pt-16 lg:px-20 lg:pt-[100px]">
          <div className="flex w-full flex-col items-stretch gap-8 lg:flex-row">
            <div className="flex w-full max-w-[740px] flex-col gap-4 rounded-br-[32px] rounded-tl-[32px] rounded-tr-[32px] bg-gray-100 px-8 py-11 lg:px-[52px]">
              <BubbleHeader eyebrow="EMPOWERING FUTURES" title="Alumni Scholarship for Tomorrow's Leaders" />
              <p className="font-inter text-base leading-8 text-black">
                FUSION&apos;s alumni-sponsored scholarships ease financial burdens and recognize
                student achievement. Powered by alumni generosity, these awards inspire excellence
                and ensure every member has the chance to thrive in STEM.
              </p>
            </div>
            <div className="relative min-h-[280px] w-full max-w-[516px] overflow-hidden rounded-bl-[30px] rounded-tr-[30px]">
              <Image src="/alumni/scholarship.jpg" alt="Scholarship recipients" fill sizes="516px" className="object-cover" />
            </div>
          </div>
          <div className="flex gap-5 self-start">
            <span className="h-5 w-5 rotate-45 bg-fusion-yellow/50" />
            <span className="h-5 w-5 rotate-45 bg-fusion-yellow/70" />
            <span className="h-5 w-5 rotate-45 bg-fusion-yellow" />
          </div>
        </div>
      </section>

      {/* ───── Alumni Network directory ───── */}
      <section className="w-full bg-white pb-24">
        <div className="mx-auto flex w-full max-w-[1306px] flex-col gap-10 px-5 pt-16 md:px-10">
          <h2 className={`${karla.className} text-3xl font-bold text-black lg:text-[40px]`}>
            ALUMNI NETWORK
          </h2>
          <div className="mx-auto w-full max-w-[1126px]">
            <AlumniDirectory />
          </div>
        </div>
      </section>
    </div>
  );
}
