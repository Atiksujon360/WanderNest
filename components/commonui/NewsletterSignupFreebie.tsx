"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DownloadCloud, Mail } from "lucide-react";
import { toast } from "sonner";

interface NewsletterSignupFreebieProps {
  title?: string;
  description?: string;
  freebieTitle?: string;
  freebieDescription?: string;
  downloadUrl?: string;
}

const NewsletterSignupFreebie: React.FC<NewsletterSignupFreebieProps> = ({
  title = "Subscribe to Our Newsletter",
  description = "Get travel tips and exclusive destination guides directly to your inbox.",
  freebieTitle = "Top 10 Packing Hacks",
  freebieDescription = "Our best tips to pack efficiently for any trip, plus a printable packing checklist!",
  downloadUrl = "#",
}) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    setSubmitted(true);
    toast.success("Thanks for subscribing! Your download is ready.");
  };

  return (
    <Card className="border border-travel-light-blue bg-gradient-to-r from-teal-100/20 to-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-travel-blue">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        {!submitted ? (
          <>
            <p className="mb-6 text-gray-700">{description}</p>

            <div className="bg-white p-4 rounded-lg shadow-sm mb-6 border border-dashed border-gray-300">
              <div className="flex items-start">
                <div className="bg-teal-500/10 rounded-full p-2 mr-4">
                  <DownloadCloud className="h-6 w-6 text-teal-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Free Download: {freebieTitle}
                  </h4>
                  <p className="text-normal text-sm">{freebieDescription}</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 placeholder:bg-white"
                  />
                </div>
                <Button
                  variant={"ghost"}
                  type="submit"
                  className="bg-teal-500 text-white"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <h4 className="text-xl font-bold mb-4">Thank You!</h4>
            <p className="mb-6">
              Your free download is ready. Click below to get your copy.
            </p>
            <Button asChild className="bg-teal-500">
              <a href={downloadUrl} download>
                <DownloadCloud className="mr-2 h-4 w-4" />
                Download Now
              </a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NewsletterSignupFreebie;
