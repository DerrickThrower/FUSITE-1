"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["500", "700"], subsets: ["latin"] });

// Nav structure. PROGRAMS has a submenu (shown as a hover dropdown on desktop
// and an expandable section in the mobile menu). All hrefs map to real routes.
const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "BOARD", href: "/board" },
  {
    label: "PROGRAMS",
    href: "/programs",
    children: [
      { label: "Family", href: "/family" },
      { label: "Internship", href: "/internship" },
      { label: "Athletics", href: "/athletics" },
      { label: "FEP", href: "/fep" },
      { label: "FIP", href: "/fip" },
    ],
  },
  { label: "PROJECTS", href: "/projects" },
];

function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      aria-label="FUSION home"
      className={`flex items-center text-2xl font-bold tracking-[0.22em] text-white lg:text-3xl ${className}`}
    >
      <span>FUSI</span>
      {/* gear + sun emblem stands in for the "O" */}
      <span className="relative mx-[0.05em] inline-block h-[0.95em] w-[0.95em] translate-y-[0.05em]">
        <Image src="/gearsun.png" alt="O" fill sizes="32px" className="object-contain" />
      </span>
      <span>N</span>
    </Link>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setProgramsOpen(false);
  };

  return (
    <nav className={`${inter.className} absolute top-0 left-0 z-30 w-full`}>
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-10 lg:px-16">
        <Logo />

        {/* ───────── Desktop links ───────── */}
        <ul className="hidden items-center gap-9 lg:flex xl:gap-14">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="text-sm font-medium tracking-[0.15em] text-white transition-opacity hover:opacity-70"
                >
                  {item.label}
                </Link>
                {/* hover dropdown */}
                <div className="invisible absolute left-1/2 top-full z-40 min-w-[180px] -translate-x-1/2 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <ul className="flex flex-col rounded-lg bg-[#2b2620]/95 py-2 shadow-xl backdrop-blur-sm">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="block px-5 py-2 text-sm tracking-wide text-white transition-colors hover:bg-white/10"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm font-medium tracking-[0.15em] text-white transition-opacity hover:opacity-70"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* ───────── Mobile hamburger ───────── */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="text-white lg:hidden"
        >
          <FiMenu size={28} />
        </button>
      </div>

      {/* ───────── Mobile expanded menu ───────── */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#3c3a37]/98 backdrop-blur-sm lg:hidden">
          <div className="flex items-center justify-between px-6 py-6 md:px-10">
            <Logo />
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="text-white"
            >
              <FiX size={28} />
            </button>
          </div>

          <ul className="flex flex-col gap-1 px-8 py-4">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <li key={item.label} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="py-3 text-xl tracking-[0.1em] text-white"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle Programs submenu"
                      aria-expanded={programsOpen}
                      onClick={() => setProgramsOpen((v) => !v)}
                      className="p-3 text-white"
                    >
                      <FiChevronDown
                        size={18}
                        className={`transition-transform ${programsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  {programsOpen && (
                    <ul className="flex flex-col border-l border-white/20 pl-4">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={closeMenu}
                            className="block py-2 text-base tracking-wide text-white/80 transition-colors hover:text-white"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block py-3 text-xl tracking-[0.1em] text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
