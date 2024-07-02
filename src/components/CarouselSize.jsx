import * as React from "react"

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
      className="w-full max-w-sm"
    >
      <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/2 opacity-0">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center h-[250px]">
                  <span className="text-3xl font-semibold">1</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center h-[250px]">
                  <span className="text-3xl font-semibold">1</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center h-[250px]">
                  <span className="text-3xl font-semibold">1</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center h-[250px]">
                  <span className="text-3xl font-semibold">1</span>
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
