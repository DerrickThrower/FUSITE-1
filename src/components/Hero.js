import Image from "next/image";
import { Karla } from "next/font/google";

const karla = Karla({ weight: ["700", "800"], subsets: ["latin"] });

/**
 * Page hero / title section (Figma "Title Section").
 * The global Navbar (in layout.js) overlays the top of this,
 * so render <Hero /> as the first element of a page.
 *
 * Props:
 *   - image            background photo. Either a static import
 *                      (`import img from "./photo.jpg"`) or a /public URL
 *                      string. Omit for a neutral placeholder.
 *   - imageAlt         alt text for the background image
 *   - eyebrow          small label above the title (e.g. "EST. 2001")
 *   - title            the large headline (string, or a node for custom layouts)
 *   - subtext          spaced uppercase line below the title (e.g. the Join banner)
 *   - children         anything below the title (e.g. a "Learn More" button)
 *   - className        extra classes for the section (e.g. a different height)
 *   - overlayClassName the dark scrim over the image
 */
export default function Hero({
  image,
  imageAlt = "",
  eyebrow,
  title,
  subtext,
  children,
  className = "",
  overlayClassName = "bg-[#111928]/70",
}) {
  return (
    <section className={`relative flex h-[88vh] min-h-[560px] flex-col overflow-hidden ${className}`}>
      {/* Background */}
      {image ? (
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
      ) : (
        // TODO: pass an `image` prop with this page's hero photo
        <div className="absolute inset-0 bg-neutral-700" />
      )}
      {/* Dark scrim */}
      <div className={`absolute inset-0 ${overlayClassName}`} />

      {/* Content (lifted above the image + scrim) */}
      <div className={`${karla.className} relative z-10 flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center`}>
        {eyebrow && (
          <p className="text-lg font-bold tracking-[0.12em] text-fusion-muted md:text-2xl lg:text-[32px]">
            {eyebrow}
          </p>
        )}
        {title && (
          <h1 className="text-5xl font-extrabold leading-[1.02] text-white sm:text-7xl md:text-8xl xl:text-[128px]">
            {title}
          </h1>
        )}
        {subtext && (
          <p className="text-sm font-bold tracking-[0.12em] text-fusion-muted md:text-xl lg:text-2xl">
            {subtext}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
