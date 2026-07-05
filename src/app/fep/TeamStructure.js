"use client";

import { useState } from "react";
import { Karla } from "next/font/google";

const karla = Karla({ weight: ["700"], subsets: ["latin"] });

function StarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" />
    </svg>
  );
}

function HammerIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
      <path d="m18 15 4-4" />
      <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
    </svg>
  );
}

function MonitorIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  );
}

const ROLES = [
  {
    key: "mech-lead",
    label: "Mechanical Lead",
    button: "MECHANICAL LEAD",
    icons: ["star", "hammer"],
    desc: "Manage, plan, and lead the entire project while designing, building, and optimizing mechanical structures and systems to ensure coordination, functionality, performance, and successful completion.",
  },
  {
    key: "hw-lead",
    label: "Hardware Lead",
    button: "HARDWARE LEAD",
    icons: ["star", "monitor"],
    desc: "Lead project hardware by managing design and integration of mechanical structures and electronic systems to ensure functionality and performance.",
  },
  {
    key: "mechanical",
    label: "Mechanical",
    button: "MECHANICAL",
    icons: ["hammer"],
    desc: "Design, build, and optimize mechanical structures and systems for functionality and performance.",
  },
  {
    key: "hardware",
    label: "Hardware",
    button: "HARDWARE",
    icons: ["monitor"],
    desc: "Develop and integrate electronic components and systems for the project.",
  },
];

function RoleIcons({ icons, className }) {
  return (
    <span className="flex items-center gap-2">
      {icons.map((i) =>
        i === "star" ? (
          <StarIcon key={i} className={className} />
        ) : i === "hammer" ? (
          <HammerIcon key={i} className={className} />
        ) : (
          <MonitorIcon key={i} className={className} />
        )
      )}
    </span>
  );
}

/**
 * "The FEP Team Structure" section. Clicking a position button swaps the
 * description card below. (The Figma frame's heading says "FIP" — a typo in
 * the design; this page is FEP.)
 */
export default function TeamStructure() {
  const [active, setActive] = useState(0);
  const role = ROLES[active];

  return (
    <section className="w-full bg-gradient-to-b from-fusion-cream to-fusion-amber px-5 py-16 md:px-8 lg:px-[138px] lg:py-[160px]">
      <div className="mx-auto flex w-full max-w-[1164px] flex-col gap-10 lg:gap-20">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-[520px] flex-col gap-5 text-center lg:text-left">
            <h2 className={`${karla.className} text-3xl font-bold text-black lg:text-[48px] lg:leading-[52px]`}>
              The FEP Team Structure
            </h2>
            <p className="font-inter text-base leading-8 text-fusion-body">
              The FEP Team Structure gives members the opportunity to take on either Hardware or
              Mechanical roles, each with a dedicated lead to manage and guide their domain.
              Mechanical members focus on designing, building, and optimizing structures, while
              hardware members develop and integrate electronic systems. Throughout the project,
              all team members collaborate closely to ensure that mechanical and electronic
              components work together seamlessly, resulting in a fully functional and cohesive
              final product.
            </p>
            <p className={`${karla.className} text-lg font-bold tracking-[0.08em] text-black`}>
              CLICK A POSITION TO LEARN MORE &gt;&gt;
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            {ROLES.map((r, i) => (
              <button
                key={r.key}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`${karla.className} flex h-[100px] w-[150px] flex-col items-start justify-between rounded-lg p-4 text-left text-sm font-bold tracking-[0.18em] transition-colors md:h-[120px] md:w-[190px] md:text-base ${
                  i === active
                    ? "bg-fusion-yellow text-black shadow-[4px_4px_8px_rgba(0,0,0,0.25)]"
                    : "bg-[#101828] text-white hover:bg-[#1e2939]"
                }`}
              >
                <RoleIcons icons={r.icons} className="h-6 w-6" />
                {r.button}
              </button>
            ))}
          </div>
        </div>

        {/* description card */}
        <div className="flex w-full flex-col gap-4 rounded-br-[32px] rounded-tl-[32px] bg-white px-6 py-9 shadow-md lg:px-10">
          <div className={`${karla.className} flex items-center gap-3 text-2xl font-bold text-black lg:text-[32px]`}>
            <RoleIcons icons={role.icons} className="h-7 w-7 text-fusion-amber" />
            {role.label}
          </div>
          <p className="font-inter text-base leading-8 text-fusion-body">{role.desc}</p>
        </div>
      </div>
    </section>
  );
}
