import Image from "next/image";
import { Karla } from "next/font/google";

const karla = Karla({ weight: ["700", "800"], subsets: ["latin"] });

/**
 * Page hero / title section (Figma "Title Section").
 * The global Navbar (in layout.js) overlays the top of this,
 * so render <Hero /> as the first element of a page.
 *
 * Heights come from the Figma component (mobile 404 / tablet 547 / desktop 917)
 * rather than viewport units: `vh` made the phone hero 1.8x its designed height
 * and pushed every page's content below the fold, and it shifts under mobile
 * browser chrome. `min-h` (not a fixed height) so a long title can still grow.
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
 *   - heightClass      per-breakpoint min-heights, when a page needs a shorter
 *                      band than the standard hero (e.g. the Join banner)
 *   - className        extra classes for the section
 *   - overlayClassName the dark scrim over the image
 */
export default function Hero({
  image,
  imageAlt = "",
  eyebrow,
  title,
  subtext,
  children,
  heightClass = "min-h-[404px] md:min-h-[547px] lg:min-h-[917px]",
  className = "",
  overlayClassName = "bg-[#111928]/70",
}) {
  return (
    <section
      className={`relative flex flex-col overflow-hidden ${heightClass} ${className}`}
    >
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
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-5 px-4 py-20 text-center md:gap-6 md:px-8 md:py-[120px] lg:py-[160px]">
        {eyebrow && (
          // Figma: Inter Regular 16px mobile / 20px tablet+, #99A1AF
          <p className="font-inter text-base leading-6 text-fusion-muted md:text-xl md:leading-7">
            {eyebrow}
          </p>
        )}
        {title && (
          <h1
            className={`${karla.className} text-5xl font-extrabold leading-[1.02] text-white sm:text-7xl md:text-8xl xl:text-[128px]`}
          >
            {title}
          </h1>
        )}
        {subtext && (
          <p className="font-inter text-base leading-6 text-fusion-muted md:text-xl md:leading-7">
            {subtext}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
