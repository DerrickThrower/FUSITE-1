"use client"

import { Card } from '@chakra-ui/react';
import Image from "next/image";
import { Livvic } from "next/font/google";
import { Inter } from "next/font/google";
const livvic = Livvic({
  weight: ["700"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
});

export default function CardComponent({ imageSrc = "/placeholder.png", heading, description }) {
    return (
        <Card.Root bg={{base: "transparent", md: "white"}} variant={{md: 'elevated', base: 'unstyled'}}>
            <Card.Body>
                <div className='flex md:flex-col flex-row md:items-center text-center
                      lg:h-[50vh] md:h-[400px] h-[128px]
                      lg:pt-[40px] md:pt-[40px]
                      '>
                    <div className='relative w-[15vh] h-[15vh] flex-shrink-0 md:mx-auto'>
                        <Image
                            src={imageSrc}
                            alt={heading}
                            fill
                            className='object-contain'
                        />
                    </div>
                    
                    <div className='relative'>
                        <div className={`${livvic.className} flex md:h-[80px] h-[22px] items-center sm:justify-center
                                        md:text-[4vh] text-base indent-2 sm:indent-0`}> {heading} </div>
                        <div className={`${inter.className} flex text-intern lg:text-[2vh] text-sm  sm:text-center
                                        lg:mt-[2vh] lg:leading-[3.5vh] leading-5
                                        lg:w-[18vw] md:w-[173px] w-[192px] sm:ml-0 ml-2 text-left`}>
                            {description}
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card.Root>
    );
}
