import Image from "next/image";
import { Karla } from "next/font/google";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Board",
  description:
    "Meet the executive, appointed, and committee members running FUSION this year.",
};

const karla = Karla({ weight: ["700", "800"], subsets: ["latin"] });

const EXECUTIVE = [
  { name: "Benson Manzano", role: "PRESIDENT", image: "/board/benson-manzano.jpg" },
  { name: "Arvin Limjoco", role: "EXTERNAL VICE PRESIDENT", image: "/board/arvin-limjoco.jpg" },
  { name: "Jasmine Hsu", role: "INTERNAL VICE PRESIDENT", image: "/board/jasmine-hsu.jpg" },
  { name: "Dommenick Lacuata", role: "TREASURER", image: "/board/dommenick-lacuata.jpg" },
  { name: "Magdalena Sablan", role: "SECRETARY", image: "/board/magdalena-sablan.jpg" },
];

/* null image = headshot not yet in the design; renders the gray placeholder */
const APPOINTED = [
  { name: "Noah Tizon", role: "CO-ICS PROJECT DIRECTOR", image: "/board/noah-tizon.jpg" },
  { name: "Sydney Chou", role: "CO-ICS PROJECT DIRECTOR", image: null },
  { name: "Anthony Fabros", role: "CO-ENGINEERING PROJECT DIRECTOR", image: "/board/anthony-fabros.jpg" },
  { name: "Ricky Ferriol", role: "CO-ENGINEERING PROJECT DIRECTOR", image: "/board/ricky-ferriol.jpg" },
  { name: "Kaylee Quinn", role: "CO-ATHLETICS DIRECTOR", image: "/board/kaylee-quinn.jpg" },
  { name: "Name", role: "CO-ATHLETICS DIRECTOR", image: null },
  { name: "Emily Tang", role: "CO-ACADEMICS DIRECTOR", image: "/board/emily-tang.jpg" },
  { name: "Joshua Yalung", role: "CO-ACADEMICS DIRECTOR", image: "/board/joshua-yalung.jpg" },
  { name: "Emma Nazareno", role: "CO-FUNDRAISING DIRECTOR", image: "/board/emma-nazareno.jpg" },
  { name: "Dylan Kha", role: "CO-FUNDRAISING DIRECTOR", image: "/board/dylan-kha.jpg" },
  { name: "Daniela Herrera", role: "CO-PRODEV DIRECTOR", image: "/board/daniela-herrera.jpg" },
  { name: "Name", role: "CO-PRODEV DIRECTOR", image: null },
  { name: "Emma Narvaez", role: "CO-PUBLICITY DIRECTOR", image: "/board/emma-narvaez.jpg" },
  { name: "Bianca Cataniag", role: "CO-PUBLICITY DIRECTOR", image: "/board/bianca-cataniag.jpg" },
  { name: "Kaitlin Sasot", role: "CO-PUBLICITY DIRECTOR", image: "/board/kaitlin-sasot.jpg" },
  { name: "Samantha Gail Tawatao", role: "CO-MEDIA DIRECTOR", image: "/board/samantha-tawatao.jpg" },
  { name: "Name", role: "CO-MEDIA DIRECTOR", image: null },
  { name: "Isaac Cruz", role: "CO-SOCIAL DIRECTOR", image: "/board/isaac-cruz.jpg" },
  { name: "Name", role: "CO-SOCIAL DIRECTOR", image: null },
  { name: "Erin Grace Tuscano", role: "CULTURAL DIRECTOR", image: "/board/erin-tuscano.jpg" },
];

function BoardCard({ name, role, image }) {
  return (
    <div className="flex w-[320px] flex-col items-center gap-6">
      <div className="relative h-[320px] w-full overflow-hidden rounded-lg bg-[#C4C4C4] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        {image && (
          <Image src={image} alt={`Portrait of ${name}`} fill sizes="320px" className="object-cover" />
        )}
      </div>
      <div className="flex w-full flex-col items-center gap-1 text-center">
        <h3 className={`${karla.className} text-2xl font-bold text-black lg:text-[32px]`}>{name}</h3>
        <p className="font-inter text-base leading-8 text-fusion-amber">{role}</p>
      </div>
    </div>
  );
}

function SectionHeader({ title }) {
  return (
    <div className="flex flex-col items-center">
      <Image src="/board/sun-icon.svg" alt="" width={103} height={103} className="-mb-4 -rotate-[135deg]" />
      <div className="flex items-center gap-10">
        <div className="h-1 w-[115px] bg-fusion-yellow" />
        <h2 className={`${karla.className} text-2xl font-bold tracking-[0.12em] text-black lg:text-[32px]`}>
          {title}
        </h2>
        <div className="h-1 w-[115px] bg-fusion-yellow" />
      </div>
    </div>
  );
}

export default function Board() {
  return (
    <div>
      <Hero
        image="/board/hero.jpg"
        imageAlt="FUSION board group photo"
        eyebrow={"‘25 - ‘26"}
        title="BOARD"
      />

      {/* ───── Our Board Members intro ───── */}
      <section className="flex w-full justify-center bg-white px-5 py-16 md:px-8 md:py-[100px] lg:py-[160px]">
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-5 text-center">
          <h2 className={`${karla.className} text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
            Our <span className="text-fusion-amber">Board</span> Members
          </h2>
          <div className="h-1 w-[100px] bg-fusion-yellow" />
          <p className="font-inter text-base leading-8 text-[#7D7D7D]">
            Our board members play a vital role in making FUSION a vibrant and connected community.
            They facilitate internal programs, host social events, manage athletic activities
            through IMs, and much more. Joining the board is a fantastic opportunity to hone your
            leadership skills in a supportive environment. Each year, our board members come up
            with a creative name for their class. For the 2025-2026 school year, we proudly
            present: ___ Board!
          </p>
        </div>
      </section>

      {/* ───── Executive board ───── */}
      <section className="flex w-full flex-col items-center gap-10 bg-white px-5 pb-20 md:px-8">
        <SectionHeader title="EXECUTIVE" />
        <BoardCard {...EXECUTIVE[0]} />
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-20">
          <BoardCard {...EXECUTIVE[1]} />
          <BoardCard {...EXECUTIVE[2]} />
        </div>
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-20">
          <BoardCard {...EXECUTIVE[3]} />
          <BoardCard {...EXECUTIVE[4]} />
        </div>
      </section>

      {/* ───── Appointed board ───── */}
      <section className="flex w-full flex-col items-center gap-10 bg-white px-5 pb-24 pt-10 md:px-8">
        <SectionHeader title="APPOINTED" />
        <div className="flex max-w-[1340px] flex-wrap items-start justify-center gap-x-[18px] gap-y-10">
          {APPOINTED.map((m, i) => (
            <BoardCard key={`${m.name}-${m.role}-${i}`} {...m} />
          ))}
        </div>
      </section>
    </div>
  );
}
