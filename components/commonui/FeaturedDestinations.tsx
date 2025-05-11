"use client";
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  Destination,
  getPopularDestinations,
} from "@/app/services/travelPayouts";
import { toast } from "sonner";
import { Skeleton } from "../ui/skeleton";

function FeaturedDestinations() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await getPopularDestinations();
        if (response.success) {
          setDestinations(response.data);
        } else {
          toast.error("Failed to load destinations");
        }
      } catch (error) {
        console.error("Error fetching destinations:", error);
        toast.error("An error occurred while loading destinations");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <section className="py-10 bg-travel-gray px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 text-center md:text-left">
          <div>
            <h2 className="text-title">Experience The World</h2>
            <p className="text-normal">
              Discover amazing destinations and create unforgettable memories on
              your next journey.
            </p>
          </div>

          <Link
            href="/destinations"
            className="text-teal-500 font-semibold hover:underline"
          >
            View all destinations
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading
            ? Array(4)
                .fill(0)
                .map((_, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden h-full border-none shadow-md"
                  >
                    <div className="relative h-64">
                      <Skeleton className="w-full h-full" />
                    </div>
                    <div className="p-4">
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                  </Card>
                ))
            : destinations.map((destination) => (
                <Link
                  key={destination.id}
                  href={`/destinations/${destination.id}`}
                >
                  <Card className="overflow-hidden h-full border-0 shadow-md card-hover">
                    <div className="relative h-64">
                      <img
                        src={destination.photos[0]}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {destination.name}
                        </h3>
                        <p className="text-sm sm:text-base text-white/80">
                          {destination.countryName}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDestinations;
