import Image from "next/image";
import { Karla } from "next/font/google";
import Hero from "@/components/Hero";
import TestimonialCard from "@/components/TestimonialCard";

const karla = Karla({ weight: ["700", "800"], subsets: ["latin"] });

const DIRECTORS = [
  {
    name: "Emma Nazareno",
    role: "Co-Fundraising Director",
    image: "/fundraising/director-emma.png",
    text: "My goals as FUSION's fundraising director is to utilize our on-campus fundraisers in new and creative ways, to not only provide monetary support for our many offered programs, but to also advocate and promote our Filipino culture and community.",
  },
  {
    name: "Dylan Kha",
    role: "Co-Fundraising Director",
    image: "/fundraising/director-dylan.jpg",
    text: "As one of the fundraising directors, my goal this year is to organize meaningful off-campus fundraisers with local restaurants and cafes that both support our club and strengthen our community. I aim to create opportunities where members can connect, build friendships, and enjoy shared experiences, all while contributing to FUSION's growth and success.",
  },
];

export default function Fundraising() {
  return (
    <div className="bg-white">
      <Hero
        image="/fundraising/hero.jpg"
        imageAlt="FUSION members at a fundraiser"
        eyebrow="PROGRAMS"
        title="FUNDRAISING"
      />

      {/* ───── How We Fundraise ───── */}
      <section className="flex w-full justify-center bg-white px-5 py-16 md:px-8 md:py-[100px] lg:py-[160px]">
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-5 text-center">
          <h2 className={`${karla.className} text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
            How We Fundraise
          </h2>
          <div className="h-1 w-[100px] bg-fusion-yellow" />
          <div className="flex flex-col gap-8 font-inter text-base leading-8 text-fusion-body">
            <p>
              Bacon-Wrapped Hot Dogs (BWHD): FUSION&apos;s most popular on-campus fundraiser. Come
              find us on Ring Road throughout the quarter to buy a Bacon-Wrapped Hot Dog or stop by
              for good vibes!
            </p>
            <p>
              Off-Campus Fundraisers: These include fundraisers with off-campus restaurants such as
              Cha, 7Leaves, Wingstop, and Jollibee. Off-campus fundraisers are a great way to meet
              and hang out with members in FUSION!
            </p>
          </div>
        </div>
      </section>

      {/* ───── Photo strip ───── */}
      <section className="relative w-full overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image src="/fundraising/strip-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-fusion-amber/60" />
        </div>
        <div className="relative flex w-full items-center justify-center gap-[35px] px-5 py-10 lg:h-[556px] lg:px-[138px]">
          <div className="relative hidden h-[360px] w-[517px] shrink-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] lg:block">
            <Image src="/fundraising/photo-1.png" alt="Members selling bacon-wrapped hot dogs" fill sizes="517px" className="object-cover" />
          </div>
          <div className="relative h-[300px] w-full max-w-[630px] shrink-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] lg:h-[472px] lg:w-[630px]">
            <Image src="/fundraising/photo-2.jpg" alt="Fundraising table on Ring Road" fill sizes="630px" className="object-cover" />
          </div>
          <div className="relative hidden h-[360px] w-[517px] shrink-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] lg:block">
            <Image src="/fundraising/photo-3.jpg" alt="Members at an off-campus fundraiser" fill sizes="517px" className="object-cover" />
          </div>
        </div>
      </section>

      {/* ───── Directors' message ───── */}
      <section className="w-full bg-[#FFDBA6]/15">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 py-16 md:px-8 md:py-[100px] lg:px-[138px] lg:py-[160px]">
          <h2 className={`${karla.className} text-center text-3xl font-bold text-black lg:text-[40px]`}>
            A Message From Our Fundraising Directors
          </h2>
          <TestimonialCard {...DIRECTORS[0]} />
          <TestimonialCard {...DIRECTORS[1]} reverse />
        </div>
      </section>
    </div>
  );
}
