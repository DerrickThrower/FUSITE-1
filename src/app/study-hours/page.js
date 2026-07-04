import Image from "next/image";
import { Karla } from "next/font/google";
import { FaInstagram } from "react-icons/fa";
import Hero from "@/components/Hero";

const karla = Karla({ weight: ["700", "800"], subsets: ["latin"] });

function BubbleHeader({ eyebrow, title, eyebrowClass = "text-[#FAC80A]" }) {
  return (
    <div className="flex flex-col gap-3">
      <p className={`${karla.className} text-xl font-bold tracking-[0.12em] lg:text-2xl ${eyebrowClass}`}>
        {eyebrow} &raquo;
      </p>
      <h3 className={`${karla.className} text-3xl font-bold text-black lg:text-[40px]`}>{title}</h3>
      <div className="h-1 w-[100px] bg-fusion-yellow" />
    </div>
  );
}

export default function StudyHours() {
  return (
    <div className="bg-white">
      <Hero
        image="/study-hours/hero.jpg"
        imageAlt="FUSION members studying together"
        eyebrow="PROGRAMS"
        title="STUDY HOURS"
      />

      {/* ───── Empower your Learning ───── */}
      <section className="flex w-full justify-center bg-white px-5 py-16 md:px-8 md:py-[100px] lg:py-[160px]">
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-5 text-center">
          <h2 className={`${karla.className} text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
            Empower your <span className="text-fusion-amber">Learning</span>
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
        <Image src="/study-hours/carousel.jpg" alt="Study hours at the Science Library" fill sizes="100vw" className="object-cover" />
      </section>

      {/* ───── Earn Big ───── */}
      <section className="w-full bg-gradient-to-r from-fusion-cream via-fusion-cream to-fusion-amber">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 py-16 lg:flex-row lg:gap-20 lg:px-[100px] lg:py-20">
          <div className="flex max-w-[560px] flex-col gap-8 lg:flex-1">
            <BubbleHeader eyebrow="ACHIEVE" title="Earn Big" />
            <p className="font-inter text-base leading-8 text-black">
              Join Study Hours, collect stamps, and earn rewards! Every session adds to your
              loyalty card, which you can trade in for prizes like stickers, keychains, and more!
            </p>
          </div>
          <div className="relative h-[280px] w-full max-w-[584px] shrink-0 overflow-hidden rounded-bl-[30px] rounded-tr-[30px] lg:h-[371px] lg:w-[584px]">
            <Image src="/study-hours/loyalty.jpg" alt="Study Hours loyalty cards and prizes" fill sizes="584px" className="object-cover" />
          </div>
        </div>
      </section>

      {/* ───── Honor Society ───── */}
      <section className="relative w-full overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image src="/study-hours/honor-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative flex w-full justify-center px-5 py-16 lg:justify-end lg:px-[88px] lg:py-[99px]">
          <div className="flex max-w-[461px] flex-col gap-10 rounded-br-[32px] rounded-tl-[32px] rounded-tr-[32px] bg-white px-9 py-11">
            <BubbleHeader eyebrow="STRIVE FOR SUCCESS" title="FUSION Honor Society" />
            <p className="font-inter text-base leading-8 text-black">
              The FUSION Honor Society honors graduating members with a GPA of 3.0 or higher.
              Inductees are recognized for their dedication and achievements, inspiring future
              leaders to strive for continued success in their academic and professional careers.
            </p>
          </div>
        </div>
      </section>

      {/* ───── Study Buddies ───── */}
      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-11 px-5 pb-11 pt-16 lg:px-20 lg:pt-[100px]">
          <div className="flex w-full flex-col items-stretch gap-8 lg:flex-row">
            <div className="flex w-full max-w-[740px] flex-col gap-4 rounded-br-[32px] rounded-tl-[32px] rounded-tr-[32px] bg-gray-100 px-8 py-11 lg:px-[52px]">
              <BubbleHeader eyebrow="LEARN & CONNECT" title="FUSION Study Buddies" />
              <p className="font-inter text-base leading-8 text-black">
                Our Study Buddies program helps members form study groups, share resources, and
                support each other in coursework. By working together, students strengthen
                academics, build lasting friendships, and experience the power of collective
                learning.
              </p>
            </div>
            <div className="relative min-h-[280px] w-full max-w-[516px] overflow-hidden rounded-bl-[30px] rounded-tr-[30px]">
              <Image src="/study-hours/buddies.jpg" alt="Study buddies working together" fill sizes="516px" className="object-cover" />
            </div>
          </div>
          <div className="flex gap-5 self-start">
            <span className="h-5 w-5 rotate-45 bg-[#FAC80A]/50" />
            <span className="h-5 w-5 rotate-45 bg-[#FAC80A]/70" />
            <span className="h-5 w-5 rotate-45 bg-[#FAC80A]" />
          </div>
        </div>
      </section>

      {/* ───── Join us at the Science Library ───── */}
      <section className="relative w-full overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image src="/study-hours/join-bg.png" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className={`${karla.className} relative mx-auto flex w-full max-w-[942px] flex-col items-center gap-12 px-5 py-[100px] text-center text-white`}>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold tracking-[0.12em] lg:text-2xl">JOIN US AT THE</p>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-[72px] lg:leading-[78px]">
              SCIENCE LIBRARY
            </h2>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center gap-5">
              <Image src="/study-hours/clock.svg" alt="" width={38} height={38} />
              <p className="text-xl font-bold tracking-[0.12em] lg:text-2xl">WHEN?</p>
            </div>
            <div className="h-1 w-[100px] bg-fusion-yellow" />
          </div>
          <div className="flex w-full max-w-[500px] flex-col items-center gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold tracking-[0.12em] lg:text-2xl">FOLLOW US TO</p>
              <p className="text-3xl font-bold lg:text-[40px]">STAY UPDATED</p>
            </div>
            <a
              href="https://www.instagram.com/fusionuci"
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-between rounded-xl bg-fusion-yellow px-5 py-3 font-inter text-base font-medium text-fusion-ink shadow-sm transition-opacity hover:opacity-90"
            >
              <FaInstagram size={18} />
              Instagram
              <span aria-hidden>›</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
