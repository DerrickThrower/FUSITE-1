import Image from "next/image";
import { Karla } from "next/font/google";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Athletics",
  description:
    "Intramural teams, FUSION Fever, and everything else that gets members moving.",
};

const karla = Karla({ weight: ["700", "800"], subsets: ["latin"] });

function InfoBubble({ eyebrow, title, text, eyebrowClass = "text-fusion-yellow", className = "" }) {
  return (
    <div className={`flex flex-col gap-4 rounded-br-[32px] rounded-tl-[32px] rounded-tr-[32px] bg-white px-9 py-11 lg:px-[60px] ${className}`}>
      <div className="flex flex-col gap-3">
        <p className={`${karla.className} text-xl font-bold tracking-[0.12em] lg:text-2xl ${eyebrowClass}`}>
          {eyebrow} &raquo;
        </p>
        <h3 className={`${karla.className} text-3xl font-bold text-black lg:text-[40px]`}>{title}</h3>
        <div className="h-1 w-[100px] bg-fusion-yellow" />
      </div>
      <p className="font-inter text-base leading-8 text-black">{text}</p>
    </div>
  );
}

export default function Athletics() {
  return (
    <div className="bg-white">
      <Hero
        image="/athletics/hero.jpg"
        imageAlt="FUSION intramural team photo"
        eyebrow="PROGRAMS"
        title="ATHLETICS"
      />

      {/* ───── Embrace your Inner Athlete ───── */}
      <section className="flex w-full justify-center bg-white px-5 py-16 md:px-8 md:py-[100px] lg:py-[160px]">
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-5 text-center">
          <h2 className={`${karla.className} text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[48px] lg:leading-[52px]`}>
            Embrace your <span className="text-fusion-amber">Inner Athlete</span>
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

      {/* ───── FUSION FEVER ───── */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[400px] w-full lg:h-[597px]">
          <Image src="/athletics/fever-photo.jpg" alt="FUSION Fever intramural game" fill sizes="100vw" className="object-cover opacity-90" />
        </div>
        <div className="relative w-full bg-fusion-yellow pb-16 lg:h-[303px]">
          {/* FUSION FEVER wordmark */}
          <div className="px-8 pt-10 lg:absolute lg:left-[74px] lg:top-2 lg:px-0">
            <p className={`${karla.className} border-y-4 border-black py-2 text-4xl font-extrabold italic leading-tight text-black lg:text-[64px]`}>
              FUSION
              <br />
              FEVER
            </p>
          </div>
        </div>
        {/* Info bubble overlapping the band */}
        <div className="relative mx-auto -mt-8 flex w-full max-w-[1000px] flex-col items-center px-5 lg:absolute lg:bottom-10 lg:right-[48px] lg:mt-0 lg:w-[904px] lg:flex-row lg:items-end lg:px-0">
          <Image
            src="/athletics/black-logo.png"
            alt=""
            width={279}
            height={279}
            className="hidden shrink-0 -mr-24 lg:block"
          />
          <div className="relative shadow-xl">
            <InfoBubble
              eyebrow="FUSION FEVER"
              title="FUSION's Intramural Teams"
              text="Our intramural sports program is all about bringing members together through teamwork, friendly competition, and active fun. From basketball and volleyball to soccer, flag football, and ultimate frisbee, there are plenty of opportunities to join a team and show off your FUSION spirit. Whether you're an experienced athlete or just looking to try something new, FUSION IMs create a space where everyone can get involved, make new friends, and grow both on and off the court."
              className="lg:w-[752px]"
            />
            <Image
              src="/athletics/sticker.svg"
              alt=""
              width={132}
              height={135}
              className="absolute -bottom-10 right-4 hidden lg:block"
            />
          </div>
        </div>
      </section>

      {/* ───── Fever photo band + volleyball photos ───── */}
      <section className="w-full bg-black py-12">
        <div className="relative mx-auto h-[420px] w-full max-w-[1440px] lg:h-[684px]">
          <Image src="/athletics/carousel-bg.jpg" alt="FUSION Fever game action" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="flex w-full items-center justify-center gap-12 px-5 py-12">
          <div className="relative h-[400px] w-full max-w-[449px] lg:h-[716px]">
            <Image src="/athletics/volleyball-1.jpg" alt="Volleyball match" fill sizes="449px" className="object-cover" />
          </div>
          <div className="relative hidden h-[716px] w-[448px] md:block">
            <Image src="/athletics/volleyball-2.jpg" alt="Volleyball team huddle" fill sizes="448px" className="object-cover" />
          </div>
          <div className="relative hidden h-[716px] w-[448px] lg:block">
            <Image src="/athletics/volleyball-3.jpg" alt="Volleyball serve" fill sizes="448px" className="object-cover" />
          </div>
        </div>
      </section>

      {/* ───── FUSION FIT (background video placeholder) ───── */}
      <section className="relative w-full overflow-hidden bg-neutral-800">
        {/* TODO: replace with the autoplaying FUSION Fit background video from the design */}
        <div aria-hidden className="absolute inset-0">
          <Image src="/athletics/fever-photo.jpg" alt="" fill sizes="100vw" className="object-cover opacity-40" />
        </div>
        <div className="relative flex w-full justify-center px-5 py-16 lg:justify-end lg:px-[88px] lg:py-[99px]">
          <InfoBubble
            eyebrow="FUSION FIT"
            title="Recreational Fitness"
            text="Our recreational exercise program provides general members an outlet to stay active and healthy. Participate in a variety of activities designed to suit all fitness levels, including basketball, volleyball, soccer, flag football, ultimate frisbee, pickleball, kickball, group workouts, and many more. Whether you are looking to work on your fitness goals or simply want to stay active, FUSION Fits have something to offer for everyone at all levels. Join us to stay active, connect with fellow members, and make fitness an enjoyable part of your routine!"
            className="max-w-[461px]"
          />
        </div>
      </section>

      {/* ───── F-TEK ───── */}
      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-8 px-5 pb-8 pt-12 md:px-[84px]">
          <div className="flex flex-col items-start gap-8 lg:flex-row">
            <div className="relative flex w-full max-w-[739px] flex-col gap-1 rounded-br-[32px] rounded-tl-[32px] rounded-tr-[32px] bg-gray-100 px-8 py-11 lg:px-16 lg:pb-[62px]">
              <p className={`${karla.className} text-xl font-bold tracking-[0.12em] text-fusion-yellow/60 lg:text-2xl`}>
                F-TEK &raquo;
              </p>
              <h3 className={`${karla.className} text-3xl font-bold text-black lg:text-[40px]`}>
                Dance Workshops
              </h3>
              <div className="my-3 h-1 w-[80px] bg-fusion-yellow" />
              <p className="font-inter text-base leading-8 text-black">
                F-TEK is FUSION&apos;s dance program that gives general members the chance to lead
                their own hip hop workshops. It&apos;s a great opportunity for anyone who is
                passionate about teaching choreography, and for members who love to dance. No
                experience is required, which makes the program a fun way to bring people together
                through dance.
              </p>
            </div>
            <div className="relative h-[300px] w-full max-w-[511px] overflow-hidden rounded-bl-[32px] rounded-br-[32px] rounded-tl-[32px] lg:h-[383px]">
              <Image src="/athletics/ftek-photo.jpg" alt="F-TEK dance workshop" fill sizes="511px" className="object-cover" />
            </div>
          </div>

          {/* yellow diamond accents */}
          <div className="flex gap-5 self-center lg:self-auto lg:pl-[624px]">
            <span className="h-5 w-5 rotate-45 bg-fusion-yellow/50" />
            <span className="h-5 w-5 rotate-45 bg-fusion-yellow/70" />
            <span className="h-5 w-5 rotate-45 bg-fusion-yellow" />
          </div>

          {/* TODO: replace with the autoplaying F-TEK video from the design */}
          <div className="relative h-[300px] w-full overflow-hidden bg-neutral-200 lg:h-[483px]">
            <Image src="/athletics/volleyball-2.jpg" alt="" fill sizes="100vw" className="object-cover opacity-60" />
          </div>
        </div>
      </section>
    </div>
  );
}
