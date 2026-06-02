import Image from "next/image";
import { Livvic, Inter } from "next/font/google";

const livvic = Livvic({ weight: ["700"], subsets: ["latin"] });
const inter = Inter({ weight: ["500"], subsets: ["latin"] });

/**
 * Page hero. The global Navbar (in layout.js) overlays the top of this,
 * so render <Hero /> as the first element of a page.
 *
 * Props:
 *   - image            background photo. Either a static import
 *                      (`import img from "./photo.jpg"`) or a /public URL
 *                      string. Omit for a neutral placeholder.
 *   - imageAlt         alt text for the background image
 *   - eyebrow          small label above the title (e.g. "OUR HISTORY")
 *   - title            the large headline (string, or a node for custom layouts)
 *   - children         anything below the title (e.g. a "Learn More" button)
 *   - className        extra classes for the section (e.g. a different height)
 *   - overlayClassName the dark scrim over the image
 */
export default function Hero({
  image,
  imageAlt = "",
  eyebrow,
  title,
  children,
  className = "",
  overlayClassName = "bg-[#15151f]/55",
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
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        {eyebrow && (
          <p className={`${inter.className} mb-3 text-sm font-medium tracking-[0.35em] text-white/75 md:text-base`}>
            {eyebrow}
          </p>
        )}
        {title && (
          <h1 className={`${livvic.className} text-5xl font-bold leading-[1.05] text-white sm:text-7xl md:text-8xl xl:text-9xl`}>
            {title}
          </h1>
        )}
        {children}
      </div>
    </section>
  );
}
