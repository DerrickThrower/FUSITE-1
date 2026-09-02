import "./globals.css";
import { Inter, Karla } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* Site fonts, self-hosted by next/font and exposed as CSS variables so
   globals.css (.font-inter / .font-karla) and Tailwind can both use them.
   Inter = body copy, Karla = headings (Figma "v2" components). */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata = {
  title: {
    default: "FUSION at UC Irvine",
    template: "%s | FUSION at UC Irvine",
  },
  description:
    "FUSION — Filipinx Undergraduate Scientist-Engineers in an Organized Network — is a network fusing the Filipinx and STEM communities at UC Irvine.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${karla.variable}`}>
      <body>
        {/* Global navbar: overlays the top of every page's hero. */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
