import { Karla } from "next/font/google";
import { Inter } from "next/font/google";
import CardComponent from "./card";
import Carousel from "./carousel.js"
import Testimonial from "@/components/Testimonial";
import Hero from "@/components/Hero";
import Image from "next/image";

const karla = Karla({
  weight: ["700"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      {/* TODO: pass the internship hero photo + eyebrow via props */}
      <Hero title="INTERNSHIP" />
      <div className="flex flex-col items-center
                      md:justify-center
                      lg:h-[50vh] md:h-[457px] h-[329px]
                      lg:pr-[354px] md:pr-[32px] pr-[16px]
                      lg:pl-[354px] md:pl-[32px] pl-[16px]">
        <div className={karla.className}>
          <div className="md:text-[5vh] text-xl text-center">Intern with FUSION!</div>
        </div>
        <div className="w-25 h-1 bg-amber-500 sm:my-4 my-1"></div>

        <div className={inter.className}>
          <div className="h-[160px] xl:text-[2vh] text-base text-intern text-center md:w-[79vh] sm:w-[400px] w-[335px]">
            Our 10-week internship program enables interns to shadow three board positions of their 
            choice. The first six weeks involve rotating through these roles, followed by a focus on one 
            preferred position during the final four weeks, culminating in an intern-led general meeting in 
            the last week. Interns are expected to attend both general meetings and board meetings 
            throughout the program.
          </div>
        </div>
      </div>
      
      <div className="relative flex flex-col items-center 
                      lg:p-[0px] md:p-[32px] p-[16px]
                      lg:pt-[80px]
                      lg:h-[78vh] md:h-[575px] h-[513]
                      bg-gradient-to-b from-[#FFA523]/20 via-[#FACA84]/20 to-[#FFA523]/20">
        <Image
          src="/internbackground.png"
          alt="Intern Background"
          fill
          className="object-cover -z-10 opacity-10"
        />
        <div className="absolute inset-0 -z-0"></div>
        <div className={karla.className}>
          <div className="md:text-[3.3vh] text-xl">INTERN DUTIES</div>
        </div>
        <div className="w-25 h-1 my-[5px] bg-amber-500"></div>
        <div className="flex items-center justify-center
                      md:flex-row flex-col
                      lg:gap-[2vw] md:gap-[30x] gap-[26px]     
                      lg:w-[81vw] md:w-[704px] w-[343px]">
          {/* put somethin in the imageSrc prop for the card components to add an image*/}
          <CardComponent
            imageSrc="/gear.png"
            heading="Support"
            description="Attend all general meetings and
                        board meetings, and often be
                        present at various FUSION-related events."
          />
          <CardComponent
            imageSrc="/gearsun.png"
            heading="Innovate"
            description="Contribute to the work of each chosen position and create an event during the final week to present your acquired skills. "
          />
          <CardComponent
            imageSrc="/sun.png"
            heading="Organize"
            description="Plan the intern-led week, organizing and leading a general meeting and other programs with your intern class."
          />

        </div>
      </div>
      <div className="relative flex flex-col items-center 
                      lg:py-[60px] md:py-[40px] py-[20px]
                      lg:px-[354px] md:px-[32px] px-[16px]
                      lg:h-[161vh] md:h-[1195px] h-[592px]
                      bg-linear-to-b from-white to-[#737373]">
        <div className="flex flex-col items-center
                        lg:w-[76vw] md:w-[704px] w-[343px]
                        lg:h-[1198px] md:h-[771px] h-[466px]
                        lg:gap-[40px] md:gap-[36px] gap-[22px]">
          <div className="hidden md:block">
            <Image
              src="/rectangle.png"
              alt="Background Accent"
              width={400}
              height={400}
              className="absolute left-0 top-[56px] w-[45vh]"
            />
          </div>
          <Image
            src="/rectangle2.png"
            alt="Background Accent"
            width={400}
            height={400}
            className="absolute right-0 bottom-0 w-[45vh]"
          />
          <div className={karla.className}>
            <div className="md:text-[3.4vh] text-xl"><span className="text-[#FFA523]">Why</span> Intern for FUSION?</div>
          </div>
          <div className="hidden md:flex flex-col lg:gap-[40px] md:gap-[36px] gap-[22px]">
            <Testimonial
              imageSrc="/marissa.jpg"
              name="Marissa Caguiloa"
              internClass="FU Class"
              description="“The FUSION internship revived my love for leadership. I was able to connect with 
                            others while working toward a common goal, let my creativity fly, and see the impact 
                            of my voice and ideas.”"
            />
            <Testimonial
              imageSrc="/tristan.jpg"
              name="Tristan Dela Cruz"
              internClass="ON Class"
              description="“It was one of my favorite experiences I’ve ever had in college. It opened up my 
                            professional and social communities and built me skills that I’ve translated to other 
                            opportunities. I can proudly say that ON Class has a special place in my heart 
                            throughout college and after I graduate.”"
              direction="row-reverse"
            />
            <Testimonial
              imageSrc="/alecs.png"
              name="Alecs Garcia"
              internClass="SI Class"
              description="“Interning under Motherboard as a SI class intern was an invaluable experience 
                            during my short time at UCI! Shadowing board members and assisting in their tasks 
                            helped me navigate the transition from ideas to execution in a fun and low-stakes 
                            environment. In addition, collaborating with other SI interns helped me appreciate 
                            the dedication that went into growing and maintaining the wonderful space that 
                            FUSION occupies.”"
            />
          </div>
          <div className="md:hidden flex z-10"><Carousel/></div>
        </div>
      </div>
    </div>
  );
}
