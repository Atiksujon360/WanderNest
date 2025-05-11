"use client";
import React from "react";
import { Map, Camera, Compass, Umbrella, Star, Laptop } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface TravelTip {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
}

const tips: TravelTip[] = [
  {
    title: "Research Local Customs",
    description:
      "Learn about local customs, etiquette, and basic phrases before your trip to show respect and enhance your experience.",
    icon: <Compass className="h-10 w-10" />,
    bgColor: "text-teal-500/30",
    iconColor: "text-teal-500",
  },
  {
    title: "Pack Smart",
    description:
      "Pack light but include essentials for your destination. Always bring versatile clothing items that can be layered.",
    icon: <Umbrella className="h-10 w-10" />,
    bgColor: "text-emerald-500/30",
    iconColor: "text-emerald-500",
  },
  {
    title: "Document Your Journey",
    description:
      "Take photos, keep a journal, or start a blog to capture your travel memories and experiences for years to come.",
    icon: <Camera className="h-10 w-10" />,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Use Offline Maps",
    description:
      "Download offline maps and travel guides for your destination to navigate without relying on internet connection.",
    icon: <Map className="h-10 w-10" />,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Read Reviews",
    description:
      "Check reviews from other travelers before booking accommodations or activities to ensure quality experiences.",
    icon: <Star className="h-10 w-10" />,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    title: "Stay Connected",
    description:
      "Consider getting a local SIM card or portable WiFi device to stay connected during your travels.",
    icon: <Laptop className="h-10 w-10" />,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
];

const EssentialTips: React.FC = () => {
  return (
    <section className="py-2 mb-4 bg-travel-gray/30">
      <div className="container mx-auto px-4 mb-3">
        <h2 className="text-title text-center font-heading mb-3">
          Essential Travel Tips
        </h2>
        <p className="text-center text-normal">
          Make the most of your adventures with these tried-and-tested travel
          recommendations
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {tips.map((Item, index) => (
          <Card
            key={index}
            className="card-hover broder-none shadow-md overflow-hidden"
          >
            <CardContent className="pt-6 flex flex-col items-center text-center p-6">
              <div className={`mb-4 p-4 rounded-full ${Item.bgColor}`}>
                <div className={Item.iconColor}>{Item.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-2">{Item.title}</h3>
              <p className="text-normal">{Item.description}</p>
            </CardContent>
          </Card>
        ))}{" "}
      </div>
    </section>
  );
};

export default EssentialTips;
