import Image from "next/image";
import { Karla } from "next/font/google";

const karla = Karla({ weight: ["700"], subsets: ["latin"] });

/**
 * "IN NUMBERS" stats band (Figma). Used on the Projects, FIP, and FEP pages.
 *
 * Props:
 *   - eyebrow  small amber tracked label ("FUSIONCON 2024")
 *   - title    large heading ("By The Numbers")
 *   - stats    [{ icon, value, label }] — rendered in two columns
 *   - dark     dark-gray band variant (countdown row style); default is the
 *              cream→amber gradient
 *   - children rendered in place of stats when provided (e.g. a countdown)
 */
export default function NumbersBand({ eyebrow, title, stats = [], dark = false, children }) {
  return (
    <section
      className={`flex w-full flex-col items-center justify-between gap-10 overflow-hidden p-10 lg:flex-row lg:p-[100px] ${
        dark ? "bg-[#404040]" : "bg-gradient-to-r from-fusion-cream from-10% to-fusion-amber to-80%"
      }`}
    >
      <div className={`${karla.className} flex flex-col items-center gap-2 text-center lg:items-start lg:text-left`}>
        <p className="text-xl font-bold tracking-[0.12em] text-fusion-amber lg:text-[32px]">{eyebrow}</p>
        <p className={`text-3xl font-bold lg:text-[48px] lg:leading-[52px] ${dark ? "text-white" : "text-black"}`}>
          {title}
        </p>
      </div>
      <svg
        aria-hidden
        className={`hidden h-12 w-12 shrink-0 lg:block ${dark ? "text-fusion-amber" : "text-white"}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
      {children ?? (
        <div className={`${karla.className} grid grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-[140px] lg:gap-y-[70px]`}>
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Image src={s.icon} alt="" width={48} height={48} />
                <span className="text-3xl font-bold text-white lg:text-[48px] lg:leading-[52px]">{s.value}</span>
              </div>
              <span className="text-lg font-bold tracking-[0.12em] text-white lg:text-2xl">{s.label}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
