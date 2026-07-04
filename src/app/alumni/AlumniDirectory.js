"use client";

import { useMemo, useState } from "react";
import { FiSearch, FiChevronDown, FiX } from "react-icons/fi";
import { FaGraduationCap, FaLinkedin } from "react-icons/fa";

/*
 * Alumni directory (Figma "ALUMNI NETWORK").
 * The design ships placeholder rows ("Full Name - '26"); replace ALUMNI
 * with the real roster (name, year, linkedin) when it's available.
 */
const YEARS = ["All", "'20 - '21", "'21 - '22", "'22 - '23", "'23 - '24", "'24 - '25", "'25 - '26"];

const ALUMNI = Array.from({ length: 26 }, (_, i) => ({
  name: "Full Name",
  year: `'${20 + (i % 6)} - '${21 + (i % 6)}`,
  shortYear: `'${21 + (i % 6)}`,
  linkedin: "#",
}));

export default function AlumniDirectory() {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("All");
  const [open, setOpen] = useState(false);

  const filtered = useMemo(
    () =>
      ALUMNI.filter(
        (a) =>
          (year === "All" || a.year === year) &&
          a.name.toLowerCase().includes(query.toLowerCase())
      ),
    [query, year]
  );

  return (
    <div className="flex w-full flex-col gap-3">
      {/* Search + year filter */}
      <div className="flex w-full items-start justify-between gap-4">
        <label className="flex w-[192px] items-center gap-2 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-2.5 py-2 shadow-sm">
          <FiSearch size={16} className="shrink-0 text-[#6A7282]" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="min-w-0 flex-1 bg-transparent font-inter text-sm text-gray-900 placeholder:text-[#6A7282] focus:outline-none"
          />
        </label>

        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-1.5 rounded-xl bg-fusion-amber px-3 py-2 font-inter text-sm font-medium text-white shadow-[0px_0px_0px_2px_#FFB900] transition-opacity hover:opacity-90"
          >
            Year <FiChevronDown size={16} />
          </button>
          {open && (
            <ul className="absolute right-0 top-12 z-10 flex w-[208px] flex-col gap-1.5 rounded-xl border border-[#E5E7EB] bg-white p-2 shadow-lg">
              {YEARS.map((y) => (
                <li key={y}>
                  <button
                    type="button"
                    onClick={() => {
                      setYear(y);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg p-2 text-left font-inter text-sm font-medium text-[#4A5565] hover:bg-[#F3F4F6] ${
                      year === y ? "bg-[#F3F4F6] text-[#101828]" : ""
                    }`}
                  >
                    {y}
                    <span className="text-xs text-[#6A7282]">
                      ({y === "All" ? ALUMNI.length : ALUMNI.filter((a) => a.year === y).length})
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Active filter tag */}
      {year !== "All" && (
        <button
          type="button"
          onClick={() => setYear("All")}
          className="flex w-fit items-center gap-2 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-2 font-inter text-sm text-[#6A7282]"
        >
          {year} <FiX size={16} />
        </button>
      )}

      {/* Two-column roster */}
      <ul className="grid grid-cols-1 gap-x-8 gap-y-2 pt-2 md:grid-cols-2">
        {filtered.map((a, i) => (
          <li key={i} className="flex items-center justify-between rounded-lg p-2 hover:bg-[#F9FAFB]">
            <span className="flex items-center gap-1.5 font-inter text-sm font-medium text-fusion-ink">
              <FaGraduationCap size={16} className="text-fusion-amber" />
              {a.name} - {a.shortYear}
            </span>
            <a href={a.linkedin} aria-label={`${a.name} on LinkedIn`} className="text-[#0A66C2] hover:opacity-70">
              <FaLinkedin size={14} />
            </a>
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="col-span-2 p-2 font-inter text-sm text-[#6A7282]">No alumni found.</li>
        )}
      </ul>
    </div>
  );
}
