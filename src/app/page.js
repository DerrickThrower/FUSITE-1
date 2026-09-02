import Link from "next/link";
import Image from "next/image";
import { Karla } from "next/font/google";
import Hero from "@/components/Hero";

const karla = Karla({ weight: ["700", "800"], subsets: ["latin"] });

/* Shared CTA styles (Figma "Button") */
const ctaYellow =
  "inline-flex items-center gap-1.5 rounded-xl bg-fusion-yellow px-5 py-3 text-base font-bold tracking-[0.12em] text-fusion-ink shadow-sm transition-opacity hover:opacity-90";
const ctaAmberSmall =
  "inline-flex items-center gap-1.5 rounded-xl bg-fusion-amber px-4 py-2.5 text-sm font-bold tracking-[0.12em] text-white shadow-sm transition-opacity hover:opacity-90";
const ctaYellowSmall =
  "inline-flex items-center gap-1.5 rounded-xl bg-fusion-yellow px-4 py-2.5 text-sm font-bold tracking-[0.12em] text-fusion-ink shadow-sm transition-opacity hover:opacity-90";

/**
 * Alternating image/text band (Figma "Info Section").
 * variant "band"  — white bg with a full-height amber band behind the image side
 * variant "cream" — orange-050 bg with a faint photo texture, image on the left
 */
function InfoSection({ variant = "band", reverse = false, image, imageAlt, heading, text, cta }) {
  return (
    <section className={`relative w-full overflow-hidden ${variant === "cream" ? "" : "bg-white"}`}>
      {variant === "cream" ? (
        <div aria-hidden className="absolute inset-0">
          <div className="absolute inset-0 bg-fusion-cream" />
          <Image src="/home/texture.jpg" alt="" fill sizes="100vw" className="object-cover opacity-5" />
        </div>
      ) : (
        <div
          aria-hidden
          className={`absolute inset-y-0 hidden w-[37.5%] bg-fusion-amber md:block ${reverse ? "left-0" : "right-0"}`}
        />
      )}

      <div
        className={`relative mx-auto flex max-w-[1440px] flex-col-reverse items-center justify-center gap-10 px-5 py-16 md:gap-[60px] md:px-8 md:py-[100px] lg:px-[138px] lg:py-[160px] ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="flex w-full max-w-[560px] flex-col items-start justify-center gap-6 md:flex-1">
          <h2 className={`${karla.className} text-3xl font-bold leading-tight text-black lg:text-[40px]`}>
            {heading}
          </h2>
          <p className="font-inter text-base leading-8 text-fusion-body">{text}</p>
          {cta}
        </div>

        <div className="relative h-[220px] w-full max-w-[517px] shrink-0 overflow-hidden rounded-bl-[30px] rounded-tr-[30px] md:h-[300px] md:w-[45%] lg:w-[517px]">
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, 517px" className="object-cover" />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Hero
        image="/home/hero.jpg"
        imageAlt="FUSION members working on a robotics project"
        eyebrow="EST. 2001"
        title={
          <>
            WELCOME TO
            <br />
            FUSION
          </>
        }
      >
        <Link href="/about" className={`${ctaYellow} mt-2`}>
          LEARN MORE <span aria-hidden>›</span>
        </Link>
      </Hero>

      {/* ───── Our Mission (Figma "Text Section") ───── */}
      <section className="flex w-full justify-center bg-white px-5 py-16 md:px-8 md:py-[100px] lg:py-[160px]">
        <div className="flex w-full max-w-[732px] flex-col items-center gap-5 text-center">
          <h2 className={`${karla.className} text-2xl font-bold tracking-[0.12em] text-black lg:text-[32px]`}>
            Our Mission
          </h2>
          <div className="h-1 w-[100px] bg-fusion-yellow" />
          <h3 className={`${karla.className} text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
            A Network Fusing the Filipinx and STEM Communities at UC Irvine.
          </h3>
          <p className="font-inter text-base leading-8 text-fusion-body">
            Since 2001, FUSION, Filipinx Undergraduate Scientist-Engineers in an Organized Network,
            has been empowering Filipinx students in Science, Technology, Engineering, and
            Mathematics (STEM) at UC Irvine. FUSION&apos;s five pillars - Support, Professionalism,
            Academics, Culture, and Engineering &amp; Science - provide endless opportunities for
            development across all areas of life.
          </p>
        </div>
      </section>

      <InfoSection
        image="/home/info-engineering.jpg"
        imageAlt="Members presenting an engineering project"
        heading={
          <>
            A hub where <span className="text-fusion-amber">engineering</span> and{" "}
            <span className="text-fusion-amber">technology</span> grows
          </>
        }
        text="From full-fledged projects, like the FUSION Engineering Project (FEP) and the FUSION ICS Project (FIP), to workshops and networking events to hone in on skills, FUSION always promotes the professional development of its members. With our various opportunities, we provide a platform where ideas flourish and solutions are born. Join us to help shape the future of STEM and become strong innovators in our field."
        cta={
          <Link href="/projects" className={ctaAmberSmall}>
            Learn More <span aria-hidden>›</span>
          </Link>
        }
      />

      <InfoSection
        variant="cream"
        reverse
        image="/home/info-family.jpg"
        imageAlt="FUSION general meeting audience"
        heading="A Family that Celebrates Diversity and Dedication"
        text="At FUSION, we strive for inclusivity as we welcome students with an array of cultural backgrounds in STEM. Taking pride in our commitment to rich connections, we find many ways to encourage our members to grow academically and professionally as a collective, allowing all to share and learn with one another. Join us as we continue to build a community where diversity thrives and STEM continues to grow with our intelligence."
        cta={
          <Link href="/about" className={ctaYellowSmall}>
            Learn More <span aria-hidden>›</span>
          </Link>
        }
      />

      <InfoSection
        image="/home/info-innovation.jpg"
        imageAlt="Members collaborating during a workshop"
        heading="Holding the Future of Innovation in Our Hands"
        text="FUSION continuously fosters a vast platform for members to grow in their own initiatives. We offer nine different programs, from internship to social events, allowing members to gain immensely diverse experience all in one place. Utilizing and honoring all five of our pillars, FUSION ensures that all members are able to continuously build on their academic, professional, and even social developments."
        cta={
          <Link href="/programs" className={ctaAmberSmall}>
            Learn More <span aria-hidden>›</span>
          </Link>
        }
      />

      {/* ───── Join banner (Figma bottom "Title Section") ───── */}
      <Hero
        image="/home/join-bg.png"
        imageAlt="FUSION community group photo"
        heightClass="min-h-[348px] md:min-h-[467px] lg:min-h-[739px]"
        overlayClassName="bg-[#111928]/70 bg-gradient-to-b from-transparent to-fusion-amber/60"
        eyebrow="INTERESTED?"
        title="JOIN FUSION"
        subtext="WE ARE ALWAYS OPEN TO GROWING OUR COMMUNITY!"
      >
        <Link href="/about" className={`${ctaYellow} mt-2`}>
          LEARN MORE <span aria-hidden>›</span>
        </Link>
      </Hero>
    </div>
  );
}
