import * as React from "react"
import card1 from "../images/card1.svg"
import card2 from "../images/card2.svg"
import card3 from "../images/card3.svg"
import card4 from "../images/card4.svg"
import card5 from "../images/card5.svg"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-screen p-10 lg:p-0 lg:w-full lg:max-w-lg"
    >
      <CarouselContent>
          {/* hidden item */}
          <CarouselItem className="md:basis-1/2 lg:basis-1/2 hidden lg:block opacity-0">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center h-[350px]">
                  <span className="text-3xl font-semibold">1</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-between flex-col p-5 h-[350px]">
                  <div className="flex-grow p-5">
                    <img src={card1} alt="" className="h-full"/>
                  </div>
                  <div className="">
                    <div className="text-xl lg:text-2xl">Hues - App Template</div>
                    <div className="opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-between flex-col p-5 h-[350px]">
                  <div className="flex-grow p-5">
                    <img src={card2} alt="" className="h-full"/>
                  </div>
                  <div className="">
                    <div className="text-xl lg:text-2xl">Hues - App Template</div>
                    <div className="opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-between flex-col p-5 h-[350px]">
                  <div className="flex-grow p-5">
                    <img src={card3} alt="" className="h-full"/>
                  </div>
                  <div className="">
                    <div className="text-xl lg:text-2xl">Hues - App Template</div>
                    <div className="opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-between flex-col p-5 h-[350px]">
                  <div className="flex-grow p-5">
                    <img src={card4} alt="" className="h-full"/>
                  </div>
                  <div className="">
                    <div className="text-xl lg:text-2xl">Hues - App Template</div>
                    <div className="opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-between flex-col p-5 h-[350px]">
                  <div className="flex-grow p-5">
                    <img src={card5} alt="" className="h-full"/>
                  </div>
                  <div className="">
                    <div className="text-xl lg:text-2xl">Hues - App Template</div>
                    <div className="opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
