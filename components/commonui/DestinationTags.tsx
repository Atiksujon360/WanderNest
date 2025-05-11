"use client";
import React from "react";

export type TagType =
  | "adventure"
  | "relaxing"
  | "nature"
  | "foodie"
  | "cultural"
  | "beach"
  | "city"
  | "mountain";

interface TagInfo {
  emoji: string;
  label: string;
  className: string;
}

interface DestinationTagsProps {
  tags: TagType[];
  size?: "sm" | "md" | "lg";
}

const tagInfo: Record<TagType, TagInfo> = {
  adventure: {
    emoji: "✈️",
    label: "Adventure",
    className: "bg-travel-orange/10 text-travel-orange",
  },
  relaxing: {
    emoji: "🧘",
    label: "Relaxing",
    className: "bg-blue-100 text-blue-700",
  },
  nature: {
    emoji: "🌿",
    label: "Nature",
    className: "bg-green-100 text-green-700",
  },
  foodie: {
    emoji: "🍜",
    label: "Foodie",
    className: "bg-yellow-100 text-yellow-700",
  },
  cultural: {
    emoji: "🏛️",
    label: "Cultural",
    className: "bg-purple-100 text-purple-700",
  },
  beach: {
    emoji: "🏝️",
    label: "Beach",
    className: "bg-travel-light-blue text-travel-blue",
  },
  city: { emoji: "🏙️", label: "City", className: "bg-gray-100 text-gray-700" },
  mountain: {
    emoji: "🏔️",
    label: "Mountain",
    className: "bg-amber-100 text-amber-700",
  },
};

const DestinationTags: React.FC<DestinationTagsProps> = ({
  tags,
  size = "md",
}) => {
  const sizeClasses = {
    sm: "text-xs py-0.5 px-2",
    md: "text-sm py-1 px-2",
    lg: "py-1.5 px-3",
  };

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const { emoji, label, className } = tagInfo[tag];
        return (
          <span
            key={tag}
            className={`rounded-full font-medium flex items-center gap-1 ${className} ${sizeClasses[size]}`}
          >
            <span>{emoji}</span>
            <span>{label}</span>
          </span>
        );
      })}
    </div>
  );
};

export default DestinationTags;
