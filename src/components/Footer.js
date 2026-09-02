"use client"

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaDiscord, FaFacebook, FaLinkedin, FaEnvelope, FaCopyright } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative w-full bg-slate-950 text-text-white overflow-hidden min-h-[264px] lg:min-h-[360px]">
      <div className="flex w-full max-w-[1440px] mx-auto flex-col items-start gap-8 px-5 py-10 md:px-20 lg:px-[138px]">
      <div className="flex flex-row flex-wrap w-full justify-start gap-10 py-12 md:gap-16 lg:gap-[128px]">
        <div className="flex flex-col gap-1 p-4">
          <h3 className="text-body text-text-fg-yellow font-bold text-lg">CONTACT US</h3>
          <p className="text-body text-text-fg-yellow flex items-center gap-2">
            <FaEnvelope size={16} className="text-text-fg-yellow" /> fusion@uci.edu
          </p>
        </div>

        <div className="flex flex-col gap-2 p-4">
          <a href="#" className="text-body flex items-center gap-2 text-text-white hover:opacity-80 transition-opacity">
            <FaInstagram size={18} /> Instagram
          </a>
          <a href="#" className="text-body flex items-center gap-2 text-text-white hover:opacity-80 transition-opacity">
            <FaDiscord size={18} /> Discord
          </a>
          <a href="#" className="text-body flex items-center gap-2 text-text-white hover:opacity-80 transition-opacity">
            <FaFacebook size={18} /> Facebook
          </a>
          <a href="#" className="text-body flex items-center gap-2 text-text-white hover:opacity-80 transition-opacity">
            <FaLinkedin size={18} /> LinkedIn
          </a>
          <a href="#" className="text-body flex items-center gap-2 text-text-white hover:opacity-80 transition-opacity">
            <FaTiktok size={18} /> TikTok
          </a>
        </div>

        <div className="flex flex-col gap-2 p-4">
          <Link href="/" className="text-body text-text-white hover:opacity-80 transition-opacity">Home</Link>
          <Link href="/about" className="text-body text-text-white hover:opacity-80 transition-opacity">About</Link>
          <Link href="/board" className="text-body text-text-white hover:opacity-80 transition-opacity">Board</Link>
          <Link href="/programs" className="text-body text-text-white hover:opacity-80 transition-opacity">Programs</Link>
          <Link href="/projects" className="text-body text-text-white hover:opacity-80 transition-opacity">Projects</Link>
        </div>

        <div className="flex flex-col gap-2 p-4">
          <h3 className="text-body text-text-white font-bold text-lg">JOIN OUR NEWSLETTER</h3>
          <form
            /* TODO: wire to the real newsletter endpoint */
            onSubmit={(e) => e.preventDefault()}
            className="flex h-[52px] w-full max-w-[384px] items-center gap-2 bg-[#F9FAFB]"
            style={{
              borderRadius: "12px",
              padding: "var(--spacing-2_5) var(--spacing-2_5) var(--spacing-2_5) var(--spacing-3)",
              border: "var(--border-width) solid #E5E7EB",
              boxShadow: "0px 1px 0.5px 0.05px rgba(29, 41, 61, 0.02)",
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email Address"
              className="text-body min-w-0 flex-1 bg-transparent text-gray-900 placeholder:text-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="text-body shrink-0 rounded-lg border border-[#E5E7EB] bg-white px-3 py-1.5 font-medium text-text-body transition-colors hover:bg-gray-50"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col gap-1 w-full pb-4 pl-4">
        <p className="text-body text-[#7D7D7D] flex items-center gap-2">
          <FaCopyright size={14} /> Copyright FUSION 2025
        </p>
        <p className="text-body text-[#7D7D7D]">Created by FUSITE2 Team</p>
      </div>
      </div>

      <div
        className="hidden md:block absolute right-0 bottom-0 w-[256px] lg:w-[350px] h-[264px] lg:h-[360px] pointer-events-none"
        style={{ marginBottom: "-1px" }}
      >
        <Image
          src="/gear-footer.png"
          alt=""
          fill
          sizes="350px"
          className="object-contain"
          style={{ objectPosition: "right bottom" }}
        />
      </div>
    </footer>
  );
}
