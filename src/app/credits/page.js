import Image from "next/image";
import { Karla } from "next/font/google";
import { FaLinkedin } from "react-icons/fa";
import Hero from "@/components/Hero";

const karla = Karla({ weight: ["700", "800"], subsets: ["latin"] });

/* null image = headshot not yet in the design; renders the gray placeholder */
const DESIGNERS = [
  { name: "Leilani Bascos", role: "DESIGN LEAD", image: "/credits/leilani-bascos.jpg" },
  { name: "Bianca Cataniag", role: "CO-PUBLICITY DIRECTOR", image: "/credits/bianca-cataniag.jpg" },
  { name: "Emma Narvaez", role: "CO-PUBLICITY DIRECTOR", image: "/credits/emma-narvaez.jpg" },
  { name: "Name", role: "DESIGNER", image: null },
  { name: "Name", role: "DESIGNER", image: null },
  { name: "Kaylee Quinn", role: "CO-ATHLETICS DIRECTOR", image: "/credits/kaylee-quinn.png" },
];

const DEVELOPERS = [
  { name: "Dommenick Lacuata", role: "DEVELOPER LEAD", image: "/credits/dommenick-lacuata.jpg" },
  { name: "Name", role: "DEVELOPER", image: null },
  { name: "Name", role: "DEVELOPER", image: null },
  { name: "Name", role: "DEVELOPER", image: null },
  { name: "Name", role: "DEVELOPER", image: null },
  { name: "Name", role: "DEVELOPER", image: null },
];

function CreditCard({ name, role, image }) {
  return (
    <div className="flex w-[320px] flex-col items-center gap-6">
      <div className="relative h-[320px] w-full overflow-hidden rounded-lg bg-[#C4C4C4] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        {image && (
          <Image src={image} alt={`Portrait of ${name}`} fill sizes="320px" className="object-cover" />
        )}
      </div>
      <div className="flex w-full flex-col items-center gap-1 text-center">
        <h3 className={`${karla.className} text-2xl font-bold text-white lg:text-[32px]`}>{name}</h3>
        <p className="font-inter text-base leading-8 text-fusion-amber">{role}</p>
        <a href="#" aria-label={`${name} on LinkedIn`} className="text-white transition-opacity hover:opacity-70">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
}

function CreditSection({ title, members }) {
  return (
    <section className="flex w-full flex-col items-center gap-10 px-5 py-20 md:px-8 lg:px-[128px]">
      <div className="flex items-center gap-10">
        <div className="hidden h-1 w-[148px] bg-fusion-yellow md:block" />
        <h2 className={`${karla.className} text-2xl font-bold tracking-[0.12em] text-white lg:text-[32px]`}>
          {title}
        </h2>
        <div className="hidden h-1 w-[148px] bg-fusion-yellow md:block" />
      </div>
      <div className="flex w-full max-w-[1340px] flex-wrap items-start justify-center gap-10">
        {members.map((m, i) => (
          <CreditCard key={`${m.name}-${m.role}-${i}`} {...m} />
        ))}
      </div>
    </section>
  );
}

export default function Credits() {
  return (
    <div className="bg-neutral-700">
      <Hero
        image="/credits/hero.jpg"
        imageAlt="FUSITE team members"
        eyebrow="CREDITS"
        title="FUSITE TEAM"
      />

      {/* ───── Our FUSITE Team intro ───── */}
      <section className="flex w-full justify-center bg-neutral-700 px-5 py-16 md:px-8 md:py-[100px] lg:py-[160px]">
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-5 text-center">
          <h2 className={`${karla.className} text-2xl font-bold tracking-[0.12em] text-white lg:text-[32px]`}>
            OUR FUSITE TEAM
          </h2>
          <h3 className={`${karla.className} text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
            Revamping FUSION&apos;s Website
          </h3>
          <div className="h-1 w-[100px] bg-fusion-yellow" />
          <div className="flex flex-col gap-8 font-inter text-base leading-8 text-neutral-100">
            <p>
              From January to September 2024, the FUSITE team undertook a beta project to redesign
              our website, laying the groundwork for FUSION&apos;s Information and Computer Science
              Project (FIP). Using Figma for design and implementing their work with Sketch and
              CSS, they gained hands-on software development experience and honed skills essential
              for future FIP leaders. This project significantly enhanced our digital presence and
              established a strong foundation for upcoming initiatives within FUSION.
            </p>
            <p>
              Now, a new team, FUSITE2, took on the task of redesigning the website to consider
              mobile responsiveness and updated information.
            </p>
          </div>
        </div>
      </section>

      <CreditSection title="DESIGNERS" members={DESIGNERS} />
      <CreditSection title="DEVELOPERS" members={DEVELOPERS} />
      <div className="pb-24" />
    </div>
  );
}
