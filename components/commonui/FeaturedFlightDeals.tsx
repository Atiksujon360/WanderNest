"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, CircleGauge, Plane } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { getCheapFlights } from "@/app/services/travelPayouts";
interface FlightDeals {
  origin: string;
  destination: string;
  price: string | number;
  airline: string;
  departDate: string;
}
export default function FeaturedFlightDeals() {
  const [flightDeals, setFlightDeals] = useState<FlightDeals[]>([]);

  useEffect(() => {
    const fetchFlightDeals = async () => {
      try {
        const routes = [
          { origin: "NYC", destination: "LON" },
          { origin: "LAX", destination: "PAR" },
          { origin: "CHI", destination: "ROM" },
        ];

        const nextMonth = new Date();
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        const departDate = nextMonth.toISOString().split("T")[0];
        const deals: FlightDeals[] = [];

        for (const route of routes) {
          const response = await getCheapFlights(
            route.origin,
            route.destination,
            departDate
          );
          console.log("Response", response);
          if (response.success) {
            Object.entries(response.data).forEach(([destination, airlines]) => {
              Object.entries(airlines).forEach(([airline, flight]) => {
                deals.push({
                  origin: flight.origin,
                  destination: flight.destination,
                  price: flight.value,
                  airline: flight.airline,
                  departDate: flight.depart_date,
                });
              });
            });
          }
        }
        setFlightDeals(deals);
      } catch (error) {}
    };

    fetchFlightDeals();
  }, []);

  console.log("Flight", flightDeals);
  return (
    <section className="py-10 bg-travel-gray px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 text-center md:text-left">
          <div>
            <h2 className="text-title">Featured Flight Deals</h2>
            <p className="text-normal">
              Special offers for your next adventure
            </p>
          </div>

          <Link
            href="/destinations"
            className="text-teal-500 font-semibold hover:underline"
          >
            View all flight deals
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flightDeals.map((deal, index) => (
            <Link key={index} href={"/flights"}>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Plane className="text-teal-500 h-5 w-5 sm:h-6 sm:w-6" />
                    <p className="text-normal text-sm font-mono">
                      {deal.origin} <ArrowRight className="inline h-3 w-3" />{" "}
                      {deal.destination}
                    </p>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {deal.airline}
                  </h3>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">
                        {new Date(deal.departDate).toLocaleDateString()}
                      </span>
                    </div>

                    <p className="text-xl font-bold text-teal-500">
                      {formatPrice(deal.price as number)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
