import Link from "next/link";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      {/* TODO: pass the home hero photo via the `image` prop */}
      <Hero
        eyebrow="EST. 2001"
        title={
          <>
            <span className="block text-3xl font-light sm:text-4xl md:text-5xl">
              WELCOME TO
            </span>
            <span className="block">FUSION</span>
          </>
        }
      >
        <Link
          href="/about"
          className="mt-8 inline-block rounded-md bg-[#FDC700] px-8 py-3 text-sm font-bold tracking-[0.15em] text-[#1A1A2E] transition-opacity hover:opacity-90"
        >
          LEARN MORE ›
        </Link>
      </Hero>

      <div
        className="w-full mx-auto
                  min-h-[737px] md:min-h-[514px] lg:min-h-[602px]
                  pt-[64px] md:pt-[100px] lg:pt-[160px]
                  pr-[20px] md:pr-[32px] lg:pr-[354px]
                  pb-[64px] md:pb-[100px] lg:pb-[160px]
                  pl-[20px] md:pl-[32px] lg:pl-[354px]
                bg-white flex justify-center gap-[10px]"
      >
        <div
          className="flex flex-col
                    w-[335px] md:w-[704px] lg:w-[732px]
                    h-fit
                    gap-[19px]
                    text-center items-center"
        >
          <h2 className="text-black font-livvic font-bold text-xl leading-none tracking-normal">
            Our Story
          </h2>

          <h1 className="text-black font-livvic font-bold text-4xl leading-none tracking-normal">
            A network connecting the Filipinx community and STEM at UC Irvine.
          </h1>

          <p className="text-gray-600 font-inter font-normal text-base leading-8 ">
            Join FUSION, where ambition meets innovation. We&apos;re a vibrant
            community empowering Filipinx students and aspiring professionals in
            Science, Technology, Engineering, and Mathematics (STEM) at UC
            Irvine. Through our five pillars, Support, Professionalism,
            Academics, Culture, and Science-Engineering we foster excellence and
            provide unparalleled opportunities for growth.
          </p>
        </div>
      </div>

      <div
        className="w-full min-h-[820px] pt-[64px] px-[20px] pb-[64px] bg-white flex gap-[40px] flex-col-reverse items-center justify-center 
      md:min-h-[643px] md:pt-[100px] md:pr-[32px] md:pl-[32px] md:pb-[100px] md:flex-row 
      lg:min-h-[635px] lg:pt-[160px] lg:pr-[138px] lg:pl-[138px] lg:pb-[160px] lg:gap-[60px] lg:flex-row"
      >
        <div className="flex flex-col text-left gap-[19px] w-full max-w-[335px] md:w-[332px] lg:w-[587px] ">
          <h1
            className="text-black font-livvic font-bold text-4xl leading-none tracking-normal 
          w-full max-w-[335px]
          h-[135px]"
          >
            A Hub Where Engineering and Technology Grows
          </h1>

          <p
            className="text-gray-600 font-inter font-normal text-base leading-8 
          w-full max-w-[335px] h-fit max-h-[]
          md:w-[332px] md:h[352px]
          lg:w-[587] lg:h[192px]"
          >
            From full-fledged projects, like the FUSION Engineering Project
            (FEP) and the FUSION ICS Project (FIP), to workshops and networking
            events to hone in on skills, FUSION always promotes the professional
            development of its members. With our various opportunities, we
            provide a platform where ideas flourish and solutions are born. Join
            us to help shape the future of STEM and become strong innovators in
            our field.
          </p>
          <button className=" w-[130px] h-[40px] self-center md:self-start font-medium bg-[#1447E6] pt-2.5 pr-4 pb-2.5 pl-4 gap-1.5 rounded-xl text-center text-white">
            Learn More &gt;{" "}
          </button>
        </div>
        <div className="bg-[#D9D9D9] flex-shrink-0 w-full max-w-[517px] h-[209px] md:w-[332px] md:h-[565px] xl:w-[517px] xl:h-[382px]"></div>
        {/* placeholder for a picture */}
      </div>

      <div
        className="w-full min-h-[820px] pt-[64px] px-[20px] pb-[64px] bg-white flex gap-[40px] flex-col-reverse items-center justify-center 
      md:min-h-[643px] md:pt-[100px] md:pr-[32px] md:pl-[32px] md:pb-[100px] md:flex-row-reverse 
      lg:min-h-[635px] lg:pt-[160px] lg:pr-[138px] lg:pl-[138px] lg:pb-[160px] lg:gap-[60px] lg:flex-row-reverse"
      >
        <div className="flex flex-col text-left gap-[19px] w-full max-w-[335px] md:w-[332px] lg:w-[587px]">
          <h1
            className="text-black font-livvic font-bold text-4xl leading-none tracking-normal 
          w-full max-w-[335px]
          h-[135px]"
          >
            A Family that Celebrates Diversity and Dedication
          </h1>

          <p
            className="text-gray-600 font-inter font-normal text-base leading-8 
          w-full max-w-[335px] h-fit max-h-[]
          md:w-[332px] md:h[352px]
          lg:w-[587] lg:h[192px]"
          >
            At FUSION, we strive for inclusivity as we welcome students with an
            array of cultural backgrounds in STEM. Taking pride in our Support
            pillar, we find many ways to encourage our members to grow
            academically and professionally as a collective, allowing all to
            share and learn with one another. Join us as we continue to build a
            community where diversity thrives and STEM continues to grow with
            our intelligence.
          </p>
          <button className=" w-[130px] h-[40px] self-center md:self-start font-medium bg-[#1447E6] pt-2.5 pr-4 pb-2.5 pl-4 gap-1.5 rounded-xl text-center text-white">
            Learn More &gt;{" "}
          </button>
        </div>
        <div className="bg-[#D9D9D9] flex-shrink-0 w-full max-w-[517px] h-[209px] md:w-[332px] md:h-[565px] xl:w-[517px] xl:h-[382px]"></div>
        {/* placeholder for a picture */}
      </div>

      <div
        className="w-full min-h-[820px] pt-[64px] px-[20px] pb-[64px] bg-white flex gap-[40px] flex-col-reverse items-center justify-center 
      md:min-h-[643px] md:pt-[100px] md:pr-[32px] md:pl-[32px] md:pb-[100px] md:flex-row 
      lg:min-h-[635px] lg:pt-[160px] lg:pr-[138px] lg:pl-[138px] lg:pb-[160px] lg:gap-[60px] lg:flex-row"
      >
        <div className="flex flex-col text-left gap-[19px] w-full max-w-[335px] md:w-[332px] lg:w-[587px]">
          <h1
            className="text-black font-livvic font-bold text-4xl leading-none tracking-normal 
          w-full max-w-[335px]
          h-[135px]"
          >
            Holding the Future of Innovation in Our Hands
          </h1>

          <p
            className="text-gray-600 font-inter font-normal text-base leading-8 
          w-full max-w-[335px] h-fit max-h-[]
          md:w-[332px] md:h[352px]
          lg:w-[587] lg:h[192px]"
          >
            FUSION continuously fosters a vast platform for members to grow in
            their own initiatives. We offer nine different programs, from
            mentorship to internship, allowing members to gain immensely diverse
            experience all in one place. Utilizing and honoring all five of our
            pillars, FUSION ensures that all members are able to continuously
            build on their academic, professional, and social developments.
          </p>
          <button className=" w-[130px] h-[40px] self-center md:self-start font-medium bg-[#1447E6] pt-2.5 pr-4 pb-2.5 pl-4 gap-1.5 rounded-xl text-center text-white">
            Learn More &gt;{" "}
          </button>
        </div>
        <div className="bg-[#D9D9D9] flex-shrink-0 w-full max-w-[335pc] h-[209px] md:w-[332px] md:h-[565px] xl:w-[517px] xl:h-[360px]"></div>
        {/* placeholder for a picture */}
      </div>
    </div>
  );
}
