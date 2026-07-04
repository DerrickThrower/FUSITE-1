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

function CodeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function PenIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

const ROLES = [
  {
    key: "dev-lead",
    label: "Developer Lead",
    button: "DEVELOPER LEAD",
    icons: ["star", "code"],
    desc: "Guide and coordinate the development team, ensuring efficient coding and integration. Prepare the team with necessary resources to fully build the final product to the planned scope.",
  },
  {
    key: "design-lead",
    label: "Design Lead",
    button: "DESIGN LEAD",
    icons: ["star", "pen"],
    desc: "Manage the design of the project, ensuring the final product has a cohesive, user-friendly experience. Keep designers on track with their work and guide them with each step of the design process.",
  },
  {
    key: "developer",
    label: "Developer",
    button: "DEVELOPER",
    icons: ["code"],
    desc: "Write, test, and maintain code, implementing the technical functionality of the project. Complete tasks in a timely and organized fashion to meet all deadlines and keep all code collectively clean.",
  },
  {
    key: "design",
    label: "Design",
    button: "DESIGNER",
    icons: ["pen"],
    desc: "Create optimal user interfaces and experiences, focusing on aesthetic usability. Conduct user research and testing, and design low fidelity, mid fidelity, and high fidelity screens for the product.",
  },
];

function RoleIcons({ icons, className }) {
  return (
    <span className="flex items-center gap-2">
      {icons.map((i) =>
        i === "star" ? (
          <StarIcon key={i} className={className} />
        ) : i === "code" ? (
          <CodeIcon key={i} className={className} />
        ) : (
          <PenIcon key={i} className={className} />
        )
      )}
    </span>
  );
}

/**
 * "The FIP Team Structure" section (Figma Team Structure - Desktop).
 * Clicking a position button swaps the description card below.
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
              The FIP Team Structure
            </h2>
            <p className="font-inter text-base leading-8 text-fusion-body">
              The FUSION ICS Project gives members a choice of four different roles to take on.
              Whether you reside in lines of code or find yourself nitpicking interfaces, all team
              members consistently collaborate to build the final web application. Designers get to
              create and elevate every screen and asset made. Once designs are flushed out, they get
              passed on to the developers to make the product come to life from front end to back
              end.
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
