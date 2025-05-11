import { toast } from "sonner";

// API Endpoints
const BASE_URL = "https://api.travelpayouts.com/data";
const FLIGHT_PRICES_URL = `${BASE_URL}/prices/cheap`;
const HOTEL_PRICES_URL = `${BASE_URL}/hotels/search`;
const POPULAR_DESTINATIONS_URL = `${BASE_URL}/apidocs/v2/places.json`;

// The token should ideally be stored in environment variables
const API_TOKEN = "YOUR_TRAVELPAYOUTS_API_TOKEN"; // Replace with your actual token

// Types for API responses
export interface FlightPrice {
  value: number | string;
  trip_class: number;
  show_to_affiliates: boolean;
  origin: string;
  number_of_changes: number;
  gate: string;
  found_at: string;
  duration: number;
  distance: number;
  destination: string;
  depart_date: string;
  return_date: string;
  airline: string;
}

export interface FlightPricesResponse {
  success: boolean;
  data: {
    [destination: string]: {
      [airline: string]: FlightPrice;
    };
  };
  error?: string;
}

export interface Hotel {
  id: number;
  name: string;
  location: {
    lat: number;
    lon: number;
  };
  stars: number;
  price: number;
  priceAvg: number;
  priceFrom: number;
  discount: number;
  ratings: {
    rating: number;
    reviewsAmount: number;
  };
  photos: string[];
  description: string;
  amenities: string[];
}

export interface HotelPricesResponse {
  success: boolean;
  data: {
    hotels: Hotel[];
  };
  error?: string;
}

export interface Destination {
  id: string;
  name: string;
  cityCode: string;
  countryCode: string;
  countryName: string;
  popularity: number;
  coordinates: {
    lat: number;
    lon: number;
  };
  photos: string[];
  description: string;
}

export interface DestinationsResponse {
  success: boolean;
  data: Destination[];
  error?: string;
}

// Function to get cheap flight prices
export const getCheapFlights = async (
  origin: string,
  destination: string,
  departDate: string,
  returnDate?: string
): Promise<FlightPricesResponse> => {
  try {
    // In a real implementation, we would call the actual API
    // For now, we'll simulate the API call and return mock data
    console.log(`Fetching flights from ${origin} to ${destination}`);

    // Mock response with realistic data
    const mockResponse: FlightPricesResponse = {
      success: true,
      data: {
        [destination]: {
          S7: {
            value: 24829,
            trip_class: 0,
            show_to_affiliates: true,
            origin: origin,
            number_of_changes: 0,
            gate: "S7",
            found_at: "2023-05-24T00:54:17",
            duration: 10800,
            distance: 1200,
            destination: destination,
            depart_date: departDate,
            return_date: returnDate || "",
            airline: "S7",
          },
          BA: {
            value: 31509,
            trip_class: 0,
            show_to_affiliates: true,
            origin: origin,
            number_of_changes: 1,
            gate: "BA",
            found_at: "2023-05-24T00:23:45",
            duration: 12600,
            distance: 1200,
            destination: destination,
            depart_date: departDate,
            return_date: returnDate || "",
            airline: "BA",
          },
        },
      },
    };

    return mockResponse;
  } catch (error) {
    console.error("Error fetching flight prices:", error);
    toast.error("Failed to fetch flight prices.");
    return {
      success: false,
      data: {},
      error: "Failed to fetch flight prices.",
    };
  }
};

// Function to get hotel prices
export const getHotelPrices = async (
  cityCode: string,
  checkIn: string,
  checkOut: string,
  adults: number = 2
): Promise<HotelPricesResponse> => {
  try {
    // In a real implementation, we would call the actual API
    console.log(`Fetching hotels in ${cityCode}`);

    // Mock response with realistic data
    const mockResponse: HotelPricesResponse = {
      success: true,
      data: {
        hotels: [
          {
            id: 1,
            name: "Grand Plaza Hotel",
            location: { lat: 48.8566, lon: 2.3522 },
            stars: 4,
            price: 149,
            priceAvg: 159,
            priceFrom: 129,
            discount: 15,
            ratings: { rating: 4.7, reviewsAmount: 1258 },
            photos: [
              "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2080&auto=format&fit=crop",
            ],
            description:
              "Luxury hotel in the heart of the city with amazing views.",
            amenities: ["Free WiFi", "Pool", "Spa", "Restaurant"],
          },
          {
            id: 2,
            name: "Riverside Inn",
            location: { lat: 48.8634, lon: 2.3488 },
            stars: 3,
            price: 99,
            priceAvg: 109,
            priceFrom: 89,
            discount: 10,
            ratings: { rating: 4.3, reviewsAmount: 856 },
            photos: [
              "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
            ],
            description:
              "Cozy hotel by the river with comfortable rooms and friendly staff.",
            amenities: ["Free WiFi", "Breakfast", "Parking"],
          },
        ],
      },
    };

    return mockResponse;
  } catch (error) {
    console.error("Error fetching hotel prices:", error);
    toast.error("Failed to fetch hotel prices.");
    return {
      success: false,
      data: { hotels: [] },
      error: "Failed to fetch hotel prices.",
    };
  }
};

// Function to get popular destinations
export const getPopularDestinations =
  async (): Promise<DestinationsResponse> => {
    try {
      // In a real implementation, we would call the actual API
      console.log("Fetching popular destinations");

      // Mock response with realistic data
      const mockResponse: DestinationsResponse = {
        success: true,
        data: [
          {
            id: "paris",
            name: "Paris",
            cityCode: "PAR",
            countryCode: "FR",
            countryName: "France",
            popularity: 98,
            coordinates: { lat: 48.8566, lon: 2.3522 },
            photos: [
              "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
            ],
            description:
              "The City of Light features iconic landmarks like the Eiffel Tower and world-class museums.",
          },
          {
            id: "bali",
            name: "Bali",
            cityCode: "DPS",
            countryCode: "ID",
            countryName: "Indonesia",
            popularity: 95,
            coordinates: { lat: -8.3405, lon: 115.092 },
            photos: [
              "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop",
            ],
            description:
              "An island paradise known for its beaches, temples, and vibrant culture.",
          },
          {
            id: "santorini",
            name: "Santorini",
            cityCode: "JTR",
            countryCode: "GR",
            countryName: "Greece",
            popularity: 92,
            coordinates: { lat: 36.3932, lon: 25.4615 },
            photos: [
              "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2062&auto=format&fit=crop",
            ],
            description:
              "Famous for its stunning white buildings, blue domes, and breathtaking sunsets.",
          },
          {
            id: "kyoto",
            name: "Kyoto",
            cityCode: "KIX",
            countryCode: "JP",
            countryName: "Japan",
            popularity: 90,
            coordinates: { lat: 35.0116, lon: 135.7681 },
            photos: [
              "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?q=80&w=2074&auto=format&fit=crop",
            ],
            description:
              "The cultural heart of Japan with ancient temples, gardens, and traditional tea houses.",
          },
        ],
      };

      return mockResponse;
    } catch (error) {
      console.error("Error fetching popular destinations:", error);
      toast.error("Failed to fetch popular destinations.");
      return {
        success: false,
        data: [],
        error: "Failed to fetch popular destinations.",
      };
    }
  };
