"use client";
import React from "react";
import { useFormik, FormikErrors } from "formik";
import { Input } from "@/components/ui/input";
import { Calendar, Plane, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type FlightFormValues = {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  passengers: number;
};

function Flights() {
  const formik = useFormik<FlightFormValues>({
    initialValues: {
      origin: "",
      destination: "",
      departureDate: "",
      returnDate: "",
      passengers: 1,
    },
    validate: (values) => {
      const errors: FormikErrors<FlightFormValues> = {};
      if (!values.origin.trim()) errors.origin = "Origin is required";
      if (!values.destination.trim())
        errors.destination = "Destination is required";
      if (!values.departureDate)
        errors.departureDate = "Departure date is required";
      if (!values.returnDate) errors.returnDate = "Return date is required";
      if (values.passengers < 1 || values.passengers > 10) {
        errors.passengers = "Passengers must be between 1 and 10";
      }
      return errors;
    },
    onSubmit: async (values) => {},
  });

  console.log("formik ", formik);
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Find the Best Flight Deals</h1>
          <p className="text-normal">
            Search and compare flights from hundreds of airlines and travel
            agencies to find your perfect trip
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-6">
        <Card className="mb-10 bg-white shadow-lg border-none overflow-hidden">
          <CardContent className="p-6">
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              {/* Origin & Destination */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-normal pb-1">Origin</p>
                  <div className="relative mt-1">
                    <Input
                      id="origin"
                      name="origin"
                      type="text"
                      placeholder="City or airport code"
                      className="pl-10"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.origin}
                    />
                    <Plane className="absolute left-3 top-1/2 transform -translate-1/2 h-4 w-4 text-teal-400" />
                  </div>
                  {formik.touched.origin && formik.errors.origin && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.origin}
                    </p>
                  )}
                </div>
                <div>
                  <p className="text-normal pb-1">Destination</p>
                  <div className="relative mt-1">
                    <Input
                      id="destination"
                      name="destination"
                      type="text"
                      placeholder="City or airport code"
                      className="pl-10"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.destination}
                    />
                    <Plane className="absolute left-3 top-1/2 transform -translate-1/2 h-4 w-4 text-teal-400" />
                  </div>
                  {formik.touched.destination && formik.errors.destination && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.destination}
                    </p>
                  )}
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-normal pb-1">Departure Date</p>
                  <div className="relative mt-1">
                    <Input
                      id="departureDate"
                      name="departureDate"
                      type="date"
                      className="pl-10"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.departureDate}
                    />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-1/2 h-4 w-4 text-teal-400" />
                  </div>
                  {formik.touched.departureDate &&
                    formik.errors.departureDate && (
                      <p className="text-red-500 text-sm mt-1">
                        {formik.errors.departureDate}
                      </p>
                    )}
                </div>
                <div>
                  <p className="text-normal pb-1">Return Date</p>
                  <div className="relative mt-1">
                    <Input
                      id="returnDate"
                      name="returnDate"
                      type="date"
                      className="pl-10"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.returnDate}
                    />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-1/2 h-4 w-4 text-teal-400" />
                  </div>
                  {formik.touched.returnDate && formik.errors.returnDate && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.returnDate}
                    </p>
                  )}
                </div>
              </div>

              {/* Passengers */}
              <div>
                <p className="text-normal pb-1">Passengers</p>
                <div className="relative mt-1">
                  <Input
                    id="passengers"
                    name="passengers"
                    type="number"
                    min="1"
                    max="10"
                    className="pl-10"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.passengers}
                  />
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-teal-500" />
                </div>
                {formik.touched.passengers && formik.errors.passengers && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.passengers}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="flex justify-center pt-5">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-teal-500 hover:bg-teal-700 shadow-lg min-w-3/6"
                >
                  Search
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="container mx-auto px-4 max-w-4xl py-6">
        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-heading font-semibold mb-4">
            Flight Booking Tips
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="bg-teal-400 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                1
              </span>
              <p>
                <strong>Book in advance</strong> - Flights are typically
                cheapest when booked 2-3 months before departure.
              </p>
            </li>
            <li className="flex items-start">
              <span className="bg-teal-400 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                2
              </span>
              <p>
                <strong>Be flexible with dates</strong> - Flying mid-week
                (Tuesday-Thursday) is often cheaper than weekends.
              </p>
            </li>
            <li className="flex items-start">
              <span className="bg-teal-400 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                3
              </span>
              <p>
                <strong>Sign up for price alerts</strong> - Get notified when
                prices drop for your desired route.
              </p>
            </li>
            <li className="flex items-start">
              <span className="bg-teal-400 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                4
              </span>
              <p>
                <strong>Consider nearby airports</strong> - Sometimes flying
                into or out of alternative airports can save money.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Flights;
