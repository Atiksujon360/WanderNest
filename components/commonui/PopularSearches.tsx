"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plane, Hotel, Map } from "lucide-react";

interface SearchItem {
  id: string;
  type: "flight" | "hotel" | "destination";
  name: string;
  desc?: string;
}

const searchItems: SearchItem[] = [
  {
    id: "bali-flight",
    type: "flight",
    name: "Flights to Bali",
    desc: "From $450",
  },
  {
    id: "paris-hotel",
    type: "hotel",
    name: "Paris Hotels",
    desc: "From $120/night",
  },
  {
    id: "tokyo-flight",
    type: "flight",
    name: "Flights to Tokyo",
    desc: "From $720",
  },
  {
    id: "rome-hotel",
    type: "hotel",
    name: "Rome Hotels",
    desc: "From $95/night",
  },
  {
    id: "santorini",
    type: "destination",
    name: "Santorini, Greece",
    desc: "Trending",
  },
  {
    id: "nyc-flight",
    type: "flight",
    name: "Flights to New York",
    desc: "From $320",
  },
  {
    id: "maldives-hotel",
    type: "hotel",
    name: "Maldives Resorts",
    desc: "From $350/night",
  },
  {
    id: "sydney",
    type: "destination",
    name: "Sydney, Australia",
    desc: "Popular",
  },
];

const getIcon = (type: string): React.ReactNode => {
  switch (type) {
    case "flight":
      return <Plane className="h-4 w-4 text-travel-blue" />;
    case "hotel":
      return <Hotel className="h-4 w-4 text-travel-orange" />;
    case "destination":
      return <Map className="h-4 w-4 text-green-600" />;
    default:
      return null;
  }
};

const getBadgeColor = (type: string): string => {
  switch (type) {
    case "flight":
      return "bg-teal-100  text-teal-500 ";
    case "hotel":
      return "bg-orange-100 text--orange-500";
    case "destination":
      return "bg-green-100 text-green-600";
    default:
      return "";
  }
};

const PopularSearches: React.FC = () => {
  return (
    <section className="py-10 bg-travel-gray px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold mb-2 text-center">
          Popular Searches
        </h2>
        <p className="text-gray-600 text-center mb-10">
          What travelers are looking for right now
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {searchItems.map((item) => (
            <Link
              key={item.id}
              href={
                item.type === "flight"
                  ? "/flights"
                  : item.type === "hotel"
                  ? "/hotels"
                  : `/destinations/${item.id}`
              }
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 border-none cursor-pointer">
                <CardContent className="p-4 flex items-center gap-3">
                  <div
                    className={`p-2 rounded-full ${getBadgeColor(
                      item.type
                    )} bg-opacity-20`}
                  >
                    {getIcon(item.type)}
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    {item.desc && (
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSearches;
