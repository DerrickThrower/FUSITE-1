"use client"

import { Image, Card, Stack, Text } from '@chakra-ui/react';
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Testimonial({ imageSrc = "/placeholder.png", name, internClass, description, direction="row" }){
    return (
        <Card.Root
            variant={'unstyled'}
            direction={{ base: 'hidden', sm: `${direction}` }}
            overflow='hidden'
            bg={"transparent"}
            className='relative h-[300px] lg:h-[36vh]'
        >
        <div className='flex items-center justify-center'>
            <div className="w-[205px] h-[205px] lg:w-[314px] lg:h-[314px] flex-shrink-0 bg-black">
                <Image
                    src={imageSrc}
                    alt="Testimonial Photo"
                    width={{lg: 314, base: 205}}
                    height={{lg: 314, base: 205}}
                    className="object-cover"
                />
            </div>
        </div>

        <div className='w-40'/>
        <Stack className={`relative bg-[#F3F4F6] lg:py-[24px] lg:px-[40px] 
                                        py-[12px] px-[20px]
                                        ${ direction==='row' ? "rounded-r-4xl rounded-bl-4xl" : "rounded-l-4xl rounded-br-4xl" }
                                        `} >
            <Image src="/quotes.png" alt="Quote Icon" width={{base: 30, lg: 70}}/>
            <Card.Body>
                <Text py={{lg: '2'}} className={`text-base lg:text-[2vh] xl:leading-[4vh] leading-6 ${inter.className}`}>
                    {description}
                </Text>
            </Card.Body>

            <Card.Footer className={`absolute right-5 bottom-2 lg:text-[2vh] text-sm ${inter.className}`}
                        >
                <Text>
                   {name} -
                </Text>
                <Text as="i" color="#FFB900">
                    &nbsp; {internClass}
                </Text>
            </Card.Footer>
        </Stack>
        </Card.Root>
    )
}