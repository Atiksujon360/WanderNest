'use client";';
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Shuffle } from "lucide-react"; // Import Shuffle icon

function HeroSecBannar() {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-center transform transition-transform duration-500 ease-in-out bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-5 text-white text-center flex flex-col items-center justify-center h-full">
        <h2 className="text-4xl font-heading font-bold mb-4">
          Experience The World
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-6">
          Discover amazing destinations and create unforgettable memories on
          your next journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size={"lg"}
            className="bg-teal-500 text-white hover:bg-teal-800 cursor-pointer transition duration-300 ease-in-out"
          >
            <Link href="/trip-planner">Start Planning Now</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-amber-50 hover:bg-teal-800 text-normal hover:text-white cursor-pointer transition duration-300 ease-in-out"
          >
            <Shuffle className="mr-2 h-4 w-4" />
            Surprise Me!
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSecBannar;
