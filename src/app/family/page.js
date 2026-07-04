import { Livvic, Inter } from "next/font/google";
import Hero from "@/components/Hero";
import familyHero from "./images/familyhero.jpg";

const livvic = Livvic({ weight: ["600", "700"], subsets: ["latin"] });
const inter = Inter({ weight: ["400", "500"], subsets: ["latin"] });

const HEADING_COLOR = "#1A1A2E";

export default function Family() {
  return (
    <div className={inter.className}>
      {/* ───────────────────────── Hero ───────────────────────── */}
      {/* TODO: pass the family group photo via the `image` prop */}
      <Hero eyebrow="PROGRAMS" title="FAMILY" image={familyHero} />
    </div>
  );
}
