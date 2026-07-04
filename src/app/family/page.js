import Image from "next/image";
import { Karla } from "next/font/google";
import Hero from "@/components/Hero";
import FamCarousel from "./FamCarousel";

const karla = Karla({ weight: ["700", "800"], subsets: ["latin"] });

const CHALLENGES = [
  {
    title: "FAM CHALLENGE ALERT:",
    text: "Show your FUSION spirt at IMs!",
    image: "/family/challenge-ims.jpg",
    rounded: "rounded-bl-[18px] rounded-br-[18px] rounded-tr-[44px]",
    sticker: (
      <div className="absolute -right-16 bottom-[-52px] flex h-[66px] w-[206px] -rotate-[8deg] items-center justify-center">
        <Image src="/family/sticker-ellipse.svg" alt="" fill sizes="206px" />
        <span className="relative font-inter text-xl font-bold text-black">+ 100 PTS</span>
      </div>
    ),
  },
  {
    title: "SIP & SOCIAL CHALLENGE:",
    text: "Support FUSION's 7Leaves Fundraiser!",
    image: "/family/challenge-sip.jpg",
    rounded: "rounded-bl-[18px] rounded-tl-[18px] rounded-tr-[44px]",
    sticker: (
      <>
        <div className="absolute -left-40 top-6 hidden h-[204px] w-[290px] -rotate-[22deg] lg:block">
          <Image src="/family/sticker-7leaves.svg" alt="" fill sizes="290px" />
        </div>
        <span className="absolute -left-16 bottom-[-40px] -rotate-[30deg] font-inter text-xl font-bold text-black">
          + 75 PTS
        </span>
      </>
    ),
  },
  {
    title: "DANCE OFF CHALLENGE:",
    text: "Practice your dance moves by coming to FTEK!",
    image: "/family/challenge-dance.png",
    rounded: "rounded-bl-[18px] rounded-br-[18px] rounded-tr-[44px]",
    sticker: (
      <div className="absolute -right-24 bottom-[-56px] flex h-[59px] w-[183px] items-center justify-center bg-[#FAC80A]">
        <span className="font-inter text-xl font-bold text-black">+ 50 PTS</span>
      </div>
    ),
  },
];

export default function Family() {
  return (
    <div>
      <Hero
        image="/family/hero.jpg"
        imageAlt="FUSION fam group photo"
        eyebrow="PROGRAMS"
        title="FAMILY"
      />

      {/* ───── Meet your FUSION Family ───── */}
      <section className="flex w-full justify-center bg-white px-5 py-16 md:px-8 md:py-[100px] lg:py-[160px]">
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-5 text-center">
          <h2 className={`${karla.className} text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
            Meet your FUSION Family
          </h2>
          <div className="h-1 w-[100px] bg-fusion-yellow" />
          <p className="font-inter text-base leading-8 text-fusion-body">
            All general members are placed into a FUSION Family, referred to as &ldquo;Fams,&rdquo;
            each named according to the school year&apos;s theme. Past themes have included Super
            Mario, Avatar, and Sanrio. This system allows general members to build connections,
            create lasting memories, and experience cultural enrichment through social gatherings,
            challenges, and friendly competition. The FUSION Family System significantly
            contributes to creating a strong sense of community within the organization.
          </p>
        </div>
      </section>

      {/* ───── '24-'25 Fams carousel ───── */}
      <section className="relative w-full overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image src="/family/fams-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-fusion-amber/80" />
        </div>
        <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 px-5 py-[72px]">
          <div className="flex items-center gap-8">
            <div className="hidden h-1 w-[100px] bg-fusion-yellow md:block" />
            <h2 className={`${karla.className} text-3xl font-bold text-white lg:text-[48px] lg:leading-[52px]`}>
              &lsquo;24 - &lsquo;25 Fams
            </h2>
            <div className="hidden h-1 w-[100px] bg-fusion-yellow md:block" />
          </div>
          <p className="max-w-[840px] text-center font-inter text-base leading-8 text-white">
            For the 2024-2025 school year, our Family theme was inspired by the iconic Super Mario
            Bros. series. Each family was named after a significant character from the franchise.
          </p>
          <FamCarousel />
        </div>
      </section>

      {/* ───── Fam Challenges ───── */}
      <section className="w-full overflow-hidden bg-white">
        <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-16 px-5 py-20 md:px-8">
          <div className="flex flex-col items-center gap-5">
            <h2 className={`${karla.className} text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
              <span className="text-[#FFA523]">Fam</span> Challenges
            </h2>
            <div className="h-1 w-[213px] bg-fusion-yellow" />
          </div>

          <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
            {/* Challenge cards */}
            <div className="flex flex-1 flex-col items-center gap-16">
              {CHALLENGES.map((c) => (
                <div key={c.title} className="relative w-full max-w-[472px]">
                  <div className={`relative h-[212px] w-full overflow-hidden shadow-[10px_7px_0px_0px_#FF8A4C] ${c.rounded}`}>
                    <Image src={c.image} alt="" fill sizes="472px" className="object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex items-center justify-center px-12 text-center">
                      <p className="text-white">
                        <span className={`${karla.className} text-xl font-bold tracking-[0.12em] lg:text-2xl`}>
                          {c.title}{" "}
                        </span>
                        <span className="font-inter text-base leading-8">{c.text}</span>
                      </p>
                    </div>
                  </div>
                  {c.sticker}
                </div>
              ))}
            </div>

            {/* Description + Fam of the Year */}
            <div className="flex flex-1 flex-col items-center gap-16">
              <div className="flex w-full max-w-[521px] items-center rounded-bl-[52px] rounded-br-[52px] rounded-tr-[52px] bg-[#F3F4F6] px-14 py-10">
                <p className="text-center font-inter text-lg leading-8 text-fusion-body lg:text-xl">
                  <span className="font-bold">Fam Challenges</span> encourage Fams to attend FUSION
                  events such as intramural games, fundraisers, and socials. Fams earn points based
                  on participation, which accumulate to determine the Fam of the Quarter and Fam of
                  the Year. This system adds friendly competition while encouraging members to stay
                  active in both their Fam and the wider FUSION community.
                </p>
              </div>

              <div className="relative w-full max-w-[523px]">
                <div className="relative h-[349px] w-full overflow-hidden rounded-br-[52px] rounded-tl-[52px] rounded-tr-[52px] shadow-[8px_4px_0px_0px_#FE9A00]">
                  <Image src="/family/fam-of-year.jpg" alt="Luigi Fam, Fam of the Year" fill sizes="523px" className="object-cover" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-1 bg-gradient-to-t from-black/70 to-transparent px-4 pb-5 pt-10 text-center">
                    <span className={`${karla.className} text-base font-bold text-fusion-amber`}>LUIGI FAM</span>
                    <span className={`${karla.className} text-xl font-bold text-white lg:text-2xl`}>
                      FAM OF THE YEAR &lsquo;24-&rsquo;25
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
