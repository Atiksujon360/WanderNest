"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Calendar, User, Shuffle } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import DestinationTags from "./DestinationTags";
import EmojiReactions from "./EmojiReactions";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags: any[];
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Hidden Beaches You Must Visit in Thailand",
    excerpt:
      "Discover secluded paradises away from the tourist crowds in Thailand.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=1980&auto=format&fit=crop",
    date: "May 2, 2025",
    author: "Sarah Johnson",
    category: "Beaches",
    tags: ["beach", "relaxing"],
  },
  {
    id: "2",
    title: "Ultimate Food Guide to Italy: Beyond Pizza and Pasta",
    excerpt: "Explore the regional cuisines of Italy that tourists often miss.",
    image:
      "https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?q=80&w=2070&auto=format&fit=crop",
    date: "April 28, 2025",
    author: "Marco Rossi",
    category: "Food",
    tags: ["foodie", "cultural"],
  },
  {
    id: "3",
    title: "How to Travel Europe on a Budget: Tips and Tricks",
    excerpt:
      "Smart strategies for experiencing Europe without breaking the bank.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    date: "April 20, 2025",
    author: "Emma Wilson",
    category: "Budget Travel",
    tags: ["city", "cultural"],
  },
];

const LatestBlogPosts: React.FC = () => {
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);

  useEffect(() => {
    // Get recently viewed posts from localStorage if available
    const savedRecentlyViewed = localStorage.getItem("recentlyViewedPosts");
    if (savedRecentlyViewed) {
      setRecentlyViewed(JSON.parse(savedRecentlyViewed));
    }
  }, []);

  const handleViewPost = (id: string) => {
    if (!recentlyViewed.includes(id)) {
      const updatedRecentlyViewed = [id, ...recentlyViewed].slice(0, 4);
      setRecentlyViewed(updatedRecentlyViewed);
      localStorage.setItem(
        "recentlyViewedPosts",
        JSON.stringify(updatedRecentlyViewed)
      );
    }
  };

  const surpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * blogPosts.length);
    const randomPost = blogPosts[randomIndex];
    handleViewPost(randomPost.id);
    window.location.href = `/blog/${randomPost.id}`;
  };

  const recentlyViewedPosts = recentlyViewed
    .map((id) => blogPosts.find((post) => post.id === id))
    .filter(Boolean) as BlogPost[];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-2">
              Latest Blog Posts
            </h2>
            <p className="text-gray-600">
              Travel tips, guides, and inspirations for your next adventure
            </p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Button
              onClick={surpriseMe}
              variant="outline"
              className="border-dashed border-2 border-travel-blue text-travel-blue hover:bg-travel-blue/10 text-teal-500"
            >
              <Shuffle className="mr-2 h-4 w-4 text-teal-500" />
              Surprise Me!
            </Button>
            <Link
              href="/blog"
              className="text-teal-500 font-medium hover:underline"
            >
              View all posts
            </Link>
          </div>
        </div>

        {/* Recently viewed section */}
        {recentlyViewedPosts.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4">Recently Viewed</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {recentlyViewedPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="block h-24 relative rounded-lg overflow-hidden"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-2">
                    <span className="text-white font-bold text-center text-sm line-clamp-2">
                      {post.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden border-none shadow-md card-hover h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pt-6 pb-2">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                  <span className="inline-block px-2 py-1 bg-travel-light-blue text-travel-blue rounded-full text-xs">
                    {post.category}
                  </span>
                </div>
                <DestinationTags tags={post.tags} size="sm" />
                <Link
                  href={`/blog/${post.id}`}
                  className="group"
                  onClick={() => handleViewPost(post.id)}
                >
                  <h3 className="text-xl font-bold group-hover:text-travel-blue transition-colors line-clamp-2 mt-2">
                    {post.title}
                  </h3>
                </Link>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="border-t pt-4 flex flex-col gap-3">
                <div className="text-sm text-gray-500 flex justify-between w-full">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <EmojiReactions />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
