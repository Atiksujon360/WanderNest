const API_BASE_URL = "https://booking-com18.p.rapidapi.com";

const API_ENDPOINTS = {
  FLIGHTS: {
    MIN_PRICE_ROUNDTRIP: "/flights/v2/min-price-roundtrip",
    SEARCH: "/flights/v2/search",
  },
  HOTELS: {
    SEARCH: "/hotels/search",
    DETAILS: "/hotels/details",
  },
  // Add more as needed
};

export { API_BASE_URL, API_ENDPOINTS };
