'use client";';
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { MapPin, Search, Star } from "lucide-react";

interface Highlight {
  icon: React.ReactNode;
  text: string;
}

const highlights: Highlight[] = [
  { icon: <MapPin className="h-4 w-4" />, text: "500+ destinations" },
  { icon: <Star className="h-4 w-4" />, text: "Best price guarantee" },
  { icon: <Search className="h-4 w-4" />, text: "Easy booking" },
];

function HeroSection() {
  return (
    <section className="relative h-[100vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-center transform transition-trasform duration-500 ease-in-out bg-cover bg-no-repeat hover:scale-105"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop")',
          transitionProperty: "transform",
          transitionDuration: "30s",
        }}
      />
      <div className="hero-gradient absolute inset-0 " />
      <div className="relative h-full container mx-auto flex items-center justify-center text-center text-white px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Discover the World's Hidden Gems
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in opacity-90">
            Travel guides, tips, and the best deals for your next adventure
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in">
            <Link href="/flights">
              <Button
                size={"lg"}
                className="bg-teal-500 text-white hover:bg-teal-800 cursor-pointer transition duration-300 ease-in-out"
              >
                <Search className="h-10 w-10 mr-2" />
                Find Flights
              </Button>
            </Link>
            <Link href="/hotels">
              <Button
                size={"lg"}
                className="bg-amber-50 hover:bg-teal-800 text-normal hover:text-white cursor-pointer transition duration-300 ease-in-out"
              >
                Explore Hotels
              </Button>
            </Link>
          </div>
          <div className="mt-16 flex justify-center gap-8 md:gap-16">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/90"
              >
                {highlight.icon}
                <span className="text-sm md:text-base ">{highlight.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent opacity-50" />
    </section>
  );
}

export default HeroSection;
