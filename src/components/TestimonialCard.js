import Image from "next/image";

/**
 * Photo + quote card (Figma "Rectangular Testimonials").
 * `reverse` puts the photo on the right and squares the opposite corner.
 */
export default function TestimonialCard({ name, role, image, text, reverse = false }) {
  return (
    <div className={`flex w-full max-w-[1064px] flex-col items-center gap-6 lg:gap-10 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
      <div className="relative h-[220px] w-[220px] shrink-0 lg:h-[312px] lg:w-[312px]">
        <Image src={image} alt={`Portrait of ${name}`} fill sizes="312px" className="object-cover" />
      </div>
      <div
        className={`flex min-h-[312px] w-full flex-col justify-between gap-6 bg-gray-100 px-6 py-6 lg:px-10 ${
          reverse ? "rounded-bl-[32px] rounded-br-[32px] rounded-tl-[32px]" : "rounded-bl-[32px] rounded-br-[32px] rounded-tr-[32px]"
        }`}
      >
        <div className="flex flex-col gap-3">
          <Image src="/programs/quote.svg" alt="" width={70} height={50} />
          <p className="font-inter text-base leading-8 text-fusion-body">{text}</p>
        </div>
        <p className="self-end font-inter text-base text-fusion-body">
          {name} - <span className="italic text-[#FFB900]">{role}</span>
        </p>
      </div>
    </div>
  );
}
