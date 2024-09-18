"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div
      className="flex flex-col justify-between min-h-screen p-8 sm:p-20"
      style={{
        backgroundImage: 'url("/assets/wallpaper_site_2.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top Section: Heading and Subheading */}
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold text-center text-yellow-500 mb-4">
          Welcome to Random Chits!
        </h1>
        <p className="text-xl text-center">
          This is a simple web app that allows you to generate random chits and shits.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="relative flex justify-center items-center my-8">
        <Carousel>
          <CarouselContent className="flex justify-center items-center">
            <CarouselItem className="flex justify-center">
              <img
                src="/assets/meme1.webp"
                alt="image 1"
                className="h-64 w-auto object-contain"
              />
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <img
                src="/assets/meme2.webp"
                alt="image 2"
                className="h-64 w-auto object-contain"
              />
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <img
                src="/assets/meme3.webp"
                alt="image 3"
                className="h-64 w-auto object-contain"
              />
            </CarouselItem>
          </CarouselContent>
          {/* Carousel Arrows */}
          <div className="absolute inset-y-1/2 flex justify-between w-full px-4">
            <CarouselPrevious className="text-white bg-gray-800 rounded-full p-2" />
            <CarouselNext className="text-white bg-gray-800 rounded-full p-2" />
          </div>
        </Carousel>
      </div>

      {/* Centered Button */}
      <div className="flex justify-center items-center">
        <Link href="/chat">
          <Button variant="outline" className="bg-red-400">
            Explore and find what they say!!
          </Button>
        </Link>
      </div>
    </div>
  );
}
