"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Karla } from "next/font/google";

const karla = Karla({ weight: ["700"], subsets: ["latin"] });

const PROJECTS = [
  {
    team: "ADOBYTES",
    name: "BranchOut",
    image: "/fip/project-branchout.png",
    badge: "BEST OVERALL",
    leads: { design: "Leilani Bascos", developer: "Hearty Parrenas" },
    about:
      "BranchOut is an application that aims to create a supportive space for professional growth amongst college students that encourages them to build networks with both peers and mentors while gaining personalized career guidance.",
  },
  {
    team: "UBEBYTES",
    name: "ZotLabs",
    image: "/fip/project-zotlabs.png",
    leads: { design: "Veela Agas", developer: "Aariel Abaincia" },
    about:
      "ZotLabs is an application that makes research opportunities at UCI easier to find and land, giving more students access to a tailored and diverse range of opportunities, and researchers a simpler way to connect to passionate individuals.",
  },
  {
    team: "API HIKING SOCIETY",
    name: "ReelIn",
    image: "/fip/project-reelin.png",
    leads: { design: "Noah Tizon", developer: "Ethan Madjus" },
    about:
      "ReelIn is an application that centralizes the search and creation of passion projects for college students which allows for easier access to many portfolio-worthy activities that both seekers and creators can make use of in their professional developments.",
  },
  {
    team: "JOLLIBUILDERS",
    name: "KapeChat",
    image: "/fip/project-kapechat.png",
    leads: { design: "Caroline David", developer: "Ethan Santos" },
    about:
      "KapeChat is an application that provides UCI students with an approachable, accessible, and personalized hub to foster incredibly strong mentorship connections that truly promote professional growth in the long run.",
  },
  {
    team: "KONEKTADO",
    name: "CodeBytes",
    image: "/fip/project-codebytes.png",
    leads: { design: "Jerry Nguyen", developer: "Justin Macalalad" },
    about:
      "CodeBytes is an application that gamifies the process of learning how to code through bite-sized lessons and interactive challenges, all which is specifically aimed to help beginner web developers and community college students grow the most.",
  },
];

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} details`}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-[1076px] flex-col gap-6 overflow-y-auto rounded-xl border border-gray-200 bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className={`${karla.className} text-sm font-bold tracking-[0.18em] text-black`}>{project.team}</p>
            <p className={`${karla.className} text-3xl font-bold text-black`}>{project.name}</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="p-1 text-2xl leading-none text-gray-500 hover:text-black">
            ×
          </button>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-lg md:h-[300px] md:w-[480px]">
            <Image src={project.image} alt={`${project.name} screenshot`} fill sizes="480px" className="object-cover object-top" />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <p className={`${karla.className} text-xl font-bold tracking-[0.12em] text-black`}>TEAM LEADS</p>
              <p className="font-inter text-base leading-7 text-fusion-body">
                DESIGN - {project.leads.design}
                <br />
                DEVELOPER - {project.leads.developer}
              </p>
            </div>
            <div>
              <p className={`${karla.className} text-xl font-bold tracking-[0.12em] text-black`}>ABOUT</p>
              <p className="font-inter text-base leading-7 text-fusion-body">{project.about}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-4 py-2 font-inter text-sm text-fusion-body hover:bg-gray-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, featured = false, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group flex w-full flex-col overflow-hidden rounded-xl bg-white text-left shadow-[0px_4px_10px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-1 ${
        featured ? "md:flex-row md:items-center" : ""
      }`}
    >
      <div className={`relative ${featured ? "h-[240px] w-full md:h-[330px] md:w-[55%]" : "h-[200px] w-full md:h-[240px]"}`}>
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          sizes="(min-width: 768px) 560px, 100vw"
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-col gap-2 p-6 md:p-8">
        <p className={`${karla.className} text-sm font-bold tracking-[0.18em] text-black`}>{project.team}</p>
        <p className={`${karla.className} text-2xl font-bold text-black lg:text-[32px]`}>{project.name}</p>
        {project.badge && (
          <span className={`${karla.className} mt-2 w-fit rounded bg-fusion-yellow px-3 py-1 text-sm font-bold tracking-[0.08em] text-black`}>
            🏅 {project.badge}
          </span>
        )}
      </div>
    </button>
  );
}

export default function PastProjects() {
  const [open, setOpen] = useState(null);

  return (
    <section className="w-full bg-white px-5 py-16 md:px-8 lg:px-[165px] lg:py-[160px]">
      <div className="mx-auto flex w-full max-w-[1110px] flex-col items-center gap-10 lg:gap-20">
        <h2 className={`${karla.className} text-3xl font-bold text-black lg:text-[48px] lg:leading-[52px]`}>
          Past Projects
        </h2>
        <ProjectCard project={PROJECTS[0]} featured onOpen={() => setOpen(0)} />
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.slice(1).map((p, i) => (
            <ProjectCard key={p.name} project={p} onOpen={() => setOpen(i + 1)} />
          ))}
        </div>
      </div>
      {open !== null && <ProjectModal project={PROJECTS[open]} onClose={() => setOpen(null)} />}
    </section>
  );
}
