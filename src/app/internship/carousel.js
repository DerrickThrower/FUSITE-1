"use client"

import { useState, useEffect } from 'react';
import { Text, Flex, Box } from '@chakra-ui/react';
import Image from 'next/image';

const testimonials = [
  {
    image: '/marissa.jpg',
    quote: "The FUSION internship revived my love for leadership. I was able to connect with other while working toward a common goal, let my creativity fly, and see the impact of my voice and ideas.",
    author: 'Marissa Caguiloa',
    role: 'FU Class',
  },
  {
    image: '/tristan.jpg',
    quote: "It was one of my favorite experiences I’ve ever had in college. It opened up my professional and social communities and built me skills that I’ve translated to other opportunities. I can proudly say that ON Class has a special place in my heart throughout college and after I graduate.",
    author: 'Tristan Dela Cruz',
    role: 'ON Class',
  },
  {
    image: '/alecs.png',
    quote: "Interning under Motherboard as a SI class intern was an invaluable experience during my short time at UCI! Shadowing board members and assisting in their tasks helped me navigate the transition from ideas to execution in a fun and low-stakes environment. In addition, collaborating with other SI interns helped me appreciate the dedication that went into growing and maintaining the wonderful space that FUSION occupies.",
    author: 'Alecs Garcia',
    role: 'SI Class',
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-rotate every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Flex direction="column" align="center" textAlign="center" px={4}>
      <Flex align="center" justify="center" gap={4}>
        <div className="relative w-[100px] h-[100px] flex-shrink-0 bg-black overflow-hidden">
          <Image
            alt="testifier"
            fill
            src={testimonials[current].image}
            className="object-cover"
          />
        </div>
      </Flex>

      {/* Card */}
      <div className="relative flex flex-col items-center -mt-[30px] p-[20px] pb-[72px] bg-[#F3F4F6] rounded-l-4xl rounded-br-4xl -z-1 text-left">
        <Image
          src="/quotes.png"
          alt="Quote Icon"
          width={25}
          height={25}
          className="absolute left-[20px]"
        />
        <Text fontSize="sm" mt={8} maxW="lg">
          “{testimonials[current].quote}”
        </Text>
        <Text
          mt={4}
          color="gray.600"
          fontSize="sm"
          className="absolute bottom-3 right-5"
        >
          {testimonials[current].author} -{' '}
          <i className="text-[#FFB900]">{testimonials[current].role}</i>
        </Text>
      </div>

      <Flex mt={4} gap={2}>
        {testimonials.map((_, idx) => (
          <Box
            key={idx}
            w="2"
            h="2"
            rounded="full"
            cursor="pointer"
            bg={idx === current ? '#FAC80A' : '#979488'}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </Flex>
    </Flex>
  );
}
