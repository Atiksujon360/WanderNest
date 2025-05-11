"use client";
import { Globe, Menu, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useActiveTab } from "@/hooks/useActiveTab";

const navBarUrl = [
  { name: "Home", url: "/" },
  { name: "Destinations", url: "/destinations" },
  { name: "Flights", url: "/flights" },
  { name: "Hotels", url: "/hotels" },
  { name: "Blog", url: "/blog" },
  { name: "FAQ", url: "/faq" },
];
const tabList = [
  "Home",
  "Destinations",
  "Flights",
  "Hotels",
  "Blog",
  "FAQ",
] as const;

function NavBar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { setActiveTab, isActive } =
    useActiveTab<(typeof tabList)[number]>("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Globe className="text-teal-500 h-6 w-6" strokeWidth={2.5} />
          <span className="text-2xl font-heading font-bold text-teal-500">
            Wanderlust
          </span>
        </Link>
      </div>

      <div className="hidden md:flex space-x-1 items-center">
        {navBarUrl.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className={`px-4 py-2 rounded-full font-medium transition-colors text-normal ${
              isActive(item.name as (typeof tabList)[number])
                ? "bg-teal-500 text-white"
                : "hover:bg-teal-500/10 hover:text-teal-500"
            }`}
            onClick={() => setActiveTab(item.name as (typeof tabList)[number])}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="md:hidden flex items-center">
        <Button
          variant={"ghost"}
          size={"icon"}
          className="hover:bg-teal-500/10 hover:text-teal-500 mr-2"
        >
          <Search className="h-4 w-4 mr-2" />
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="hover:bg-teal-500/10 hover:text-teal-500"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-white/95 backdrop-blur-md border-1 border-teal-500/20 shadow-lg"
          >
            <div className="flex flex-col gap-4 mt-8">
              {navBarUrl.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className={`py-2 px-3 rounded-md font-medium ${
                    isActive(item.name as (typeof tabList)[number])
                      ? "bg-teal-500 text-white"
                      : "hover:bg-teal-500/10 hover:text-teal-500"
                  }`}
                  onClick={() =>
                    setActiveTab(item.name as (typeof tabList)[number])
                  }
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default NavBar;
