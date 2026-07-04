import Image from "next/image";
import { Karla } from "next/font/google";
import { FaDiscord } from "react-icons/fa";
import Hero from "@/components/Hero";

const karla = Karla({ weight: ["700", "800"], subsets: ["latin"] });

function BubbleHeader({ eyebrow, title }) {
  return (
    <div className="flex flex-col gap-3">
      <p className={`${karla.className} text-xl font-bold tracking-[0.12em] text-[#FAC80A] lg:text-2xl`}>
        {eyebrow} &raquo;
      </p>
      <h3 className={`${karla.className} text-3xl font-bold text-black lg:text-[40px]`}>{title}</h3>
      <div className="h-1 w-[100px] bg-fusion-yellow" />
    </div>
  );
}

function GameTile({ label, children }) {
  return (
    <div className="flex h-[162px] w-[160px] flex-col items-center justify-center gap-4 rounded-bl-[44px] rounded-tr-[44px] bg-white px-5">
      {children}
      <span className={`${karla.className} text-base font-bold tracking-[0.12em] text-[#0F0A00]`}>{label}</span>
    </div>
  );
}

export default function Social() {
  return (
    <div className="bg-white">
      <Hero
        image="/social/hero.jpg"
        imageAlt="FUSION social event"
        eyebrow="PROGRAMS"
        title="SOCIAL"
      />

      {/* ───── Make Memories with FUSION ───── */}
      <section className="flex w-full justify-center bg-white px-5 py-16 md:px-8 md:py-[100px] lg:py-[160px]">
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-5 text-center">
          <h2 className={`${karla.className} text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
            Make <span className="text-fusion-amber">Memories</span> with FUSION
          </h2>
          <div className="h-1 w-[100px] bg-fusion-yellow" />
          <p className="font-inter text-base leading-8 text-fusion-body">
            FUSION&apos;s athletic programs aim to build a strong community, enhance physical
            well-being, and support mental health through a range of recreational and organized
            activities. By providing opportunities for exercise, we encourage our members to stay
            active and healthy. Our organized sports activities foster teamwork and camaraderie,
            while our workshops offer a supportive space for relaxation and emotional well-being.
            Together, these programs ensure that our members have the resources they need to
            thrive both physically and mentally.
          </p>
        </div>
      </section>

      {/* ───── Photo band on black ───── */}
      <section className="w-full bg-black py-12">
        <div className="relative mx-auto h-[420px] w-full max-w-[1440px] lg:h-[684px]">
          <Image src="/social/carousel.jpg" alt="FUSION social gathering" fill sizes="100vw" className="object-cover" />
        </div>
      </section>

      {/* ───── FUSION FRI & SAT ───── */}
      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-11 px-5 py-16 lg:px-[76px] lg:py-[100px]">
          <div className="flex w-full flex-col items-stretch gap-8 lg:flex-row">
            <div className="flex w-full max-w-[740px] flex-col gap-4 rounded-br-[32px] rounded-tl-[32px] rounded-tr-[32px] bg-gray-100 px-8 py-11 lg:px-[52px]">
              <BubbleHeader eyebrow="A BREATHER" title="FUSION FRI & SAT" />
              <p className="font-inter text-base leading-8 text-black">
                To end busy, stressful weeks on a good note, FUSION Fridays and Saturdays bring
                the FUSION community outside of campus and let members take a breather from their
                academic and professional lives. We strive to find a diverse range of activities
                to do and places to visit, encouraging all members to find the time to slow down,
                relax, and find comfort in the FUSION space.
              </p>
            </div>
            <div className="relative min-h-[280px] w-full max-w-[516px] overflow-hidden rounded-bl-[30px] rounded-tr-[30px]">
              <Image src="/social/fufrisat.png" alt="FUSION Friday outing" fill sizes="516px" className="object-cover" />
            </div>
          </div>
          <div className="flex gap-5 self-center">
            <span className="h-5 w-5 rotate-45 bg-[#FAC80A]/50" />
            <span className="h-5 w-5 rotate-45 bg-[#FAC80A]/70" />
            <span className="h-5 w-5 rotate-45 bg-[#FAC80A]" />
          </div>
        </div>
      </section>

      {/* ───── Retreat ───── */}
      <section className="relative w-full overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image src="/social/retreat-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative flex w-full justify-center px-5 py-16 lg:justify-end lg:px-[88px] lg:py-[99px]">
          <div className="flex max-w-[461px] flex-col gap-10 rounded-br-[32px] rounded-tl-[32px] rounded-tr-[32px] bg-white px-9 py-11">
            <BubbleHeader eyebrow="RETREAT" title="A Weekend Getaway with FUSION" />
            <p className="font-inter text-base leading-8 text-black">
              Every Winter Quarter, FUSION hosts a retreat where members get to bond with their
              classes, fams, and fellow members through various activities organized by class
              representatives, fam heads, and retreat committee. Attendees also have free time
              during the stay to explore the city we visit, or simply kick back and rest. Our
              retreats create unforgettable experiences and connections that truly encapsulate
              what FUSION&apos;s community is about.
            </p>
          </div>
        </div>
      </section>

      {/* ───── FUSION Gaming ───── */}
      <section className="w-full bg-gradient-to-r from-fusion-cream via-fusion-cream to-fusion-amber">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 py-16 lg:flex-row lg:gap-20 lg:px-[100px] lg:py-20">
          <div className="flex max-w-[560px] flex-col gap-8 lg:flex-1">
            <BubbleHeader eyebrow="FUSION GAMING" title="Play, Compete, & Collaborate" />
            <p className="font-inter text-base leading-8 text-black">
              Whether you&apos;re strategizing in a team battle or exploring new worlds, FUSION
              Frenzy offers a chance to unwind, bond with fellow members, and enjoy the thrill of
              gaming. With two gaming voice channels on the FUSION Discord, there is always an
              opportunity to level up your skills on any game at any time with all of our
              community.
            </p>
          </div>
          <div className="flex h-auto w-full max-w-[584px] shrink-0 flex-col items-center justify-center gap-7 rounded-bl-[30px] rounded-tr-[30px] bg-[#F4F4F4] px-6 py-7 lg:h-[371px] lg:w-[584px]">
            <div className="flex flex-col items-center gap-4">
              <FaDiscord size={72} className="text-[#5865F2]" />
              <span className={`${karla.className} text-base font-bold tracking-[0.12em] text-[#0F0A00]`}>
                DISCORD
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5">
              <GameTile label="LEAGUE">
                <Image src="/social/game-league.svg" alt="" width={70} height={75} />
              </GameTile>
              <GameTile label="OVERWATCH">
                <Image src="/social/game-overwatch.png" alt="" width={80} height={80} />
              </GameTile>
              <GameTile label="VALORANT">
                <Image src="/social/game-valorant.svg" alt="" width={80} height={73} />
              </GameTile>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
