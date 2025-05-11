import HeroSecBannar from "@/components/commonui/HeroSecBannar";
import HeroSection from "@/components/commonui/HeroSection";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FeaturedDestinations from "@/components/commonui/FeaturedDestinations";
import FeaturedFlightDeals from "@/components/commonui/FeaturedFlightDeals";
import PopularSearches from "@/components/commonui/PopularSearches";
import LatestBlogPosts from "@/components/commonui/LatestBlogPosts";
import EssentialTips from "@/components/commonui/EssentialTips";
import NewsletterSignupFreebie from "@/components/commonui/NewsletterSignupFreebie";

export default function Home() {
  return (
    <div className="main-h-screen">
      <div>
        <HeroSection />
      </div>
      <div>
        <HeroSecBannar />
      </div>
      {/*Feature details*/}
      <FeaturedDestinations />
      <FeaturedFlightDeals />
      <PopularSearches />
      <LatestBlogPosts />
      <EssentialTips />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <NewsletterSignupFreebie
            title="Join Our Travel Community"
            description="Get exclusive travel deals, destination guides, and travel hacks delivered straight to your inbox."
            freebieTitle="Ultimate Packing Checklist"
            freebieDescription="A customizable packing list for any type of trip, plus bonus money-saving travel hacks!"
          />
        </div>
      </section>
    </div>
  );
}
