"use client"

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaDiscord, FaFacebook, FaLinkedin, FaEnvelope, FaCopyright } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative w-full bg-slate-950 text-text-white overflow-hidden min-h-[264px] lg:min-h-[360px]">
      <div style={{ padding: "40px 80px" }} className="flex w-full max-w-[1440px] mx-auto flex-col items-start gap-8">
      <div style={{ padding: "48px 0", gap: "var(--spacing-32, 128px)" }} className="flex flex-row flex-wrap w-full justify-start">
        <div style={{ padding: "16px" }} className="flex flex-col gap-1">
          <h3 className="text-body text-text-fg-yellow font-bold text-lg">CONTACT US</h3>
          <p className="text-body text-text-fg-yellow flex items-center gap-2">
            <FaEnvelope size={16} className="text-text-fg-yellow" /> fusion@uci.edu
          </p>
        </div>

        <div style={{ padding: "16px" }} className="flex flex-col gap-2">
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

        <div style={{ padding: "16px" }} className="flex flex-col gap-2">
          <Link href="/" className="text-body text-text-white hover:opacity-80 transition-opacity">Home</Link>
          <Link href="/about" className="text-body text-text-white hover:opacity-80 transition-opacity">About</Link>
          <Link href="/board" className="text-body text-text-white hover:opacity-80 transition-opacity">Board</Link>
          <Link href="/programs" className="text-body text-text-white hover:opacity-80 transition-opacity">Programs</Link>
          <Link href="/projects" className="text-body text-text-white hover:opacity-80 transition-opacity">Projects</Link>
        </div>

        <div style={{ padding: "16px" }} className="flex flex-col gap-2">
          <h3 className="text-body text-text-white font-bold text-lg">JOIN OUR NEWSLETTER</h3>
          <div
            className="flex items-center gap-2 bg-[#F9FAFB]"
            style={{
              width: 384,
              height: 52,
              borderRadius: "12px",
              padding: "var(--spacing-2_5) var(--spacing-2_5) var(--spacing-2_5) var(--spacing-3)",
              border: "var(--border-width) solid #E5E7EB",
              boxShadow: "0px 1px 0.5px 0.05px rgba(29, 41, 61, 0.02)",
            }}
          >
            <input
              type="email"
              placeholder="Email Address"
              className="text-body min-w-0 flex-1 bg-transparent text-gray-900 placeholder:text-gray-500 focus:outline-none"
            />
            <button
              type="button"
              className="text-body shrink-0 rounded-lg border border-[#E5E7EB] bg-white px-3 py-1.5 font-medium text-text-body transition-colors hover:bg-gray-50"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div style={{ paddingBottom: "16px", paddingLeft: "16px" }} className="flex flex-col gap-1 w-full">
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
