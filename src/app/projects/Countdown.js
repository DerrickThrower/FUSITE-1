"use client";

import { useEffect, useState } from "react";
import { Karla } from "next/font/google";

const karla = Karla({ weight: ["700", "800"], subsets: ["latin"] });

// Next FUSIONCON date is TBD — update when announced (shows 00s once passed).
const TARGET = new Date("2027-05-29T17:00:00-07:00");

function parts(msLeft) {
  if (msLeft <= 0) return { Days: 0, Hours: 0, Minutes: 0 };
  return {
    Days: Math.floor(msLeft / 86400000),
    Hours: Math.floor(msLeft / 3600000) % 24,
    Minutes: Math.floor(msLeft / 60000) % 60,
  };
}

export default function Countdown() {
  // Render zeros on the server / first paint to avoid a hydration mismatch,
  // then tick once mounted.
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(t);
  }, []);

  const p = parts(now ? TARGET.getTime() - now : 0);

  return (
    <div className={`${karla.className} flex items-center gap-6 lg:gap-10`}>
      {Object.entries(p).map(([label, value]) => (
        <div key={label} className="flex w-[100px] flex-col items-center gap-1 lg:w-[174px]">
          <span className="text-6xl font-extrabold text-white lg:text-[128px] lg:leading-none">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-lg font-bold tracking-[0.12em] text-white lg:text-2xl">{label}</span>
        </div>
      ))}
    </div>
  );
}
