"use client";
import React, { useState } from "react";

interface Reaction {
  emoji: string;
  label: string;
  count: number;
}

interface EmojiReactionsProps {
  initialReactions?: Reaction[];
}

const defaultReactions: Reaction[] = [
  { emoji: "❤️", label: "Love", count: 12 },
  { emoji: "😮", label: "Wow", count: 8 },
  { emoji: "😂", label: "Laugh", count: 5 },
];

const EmojiReactions: React.FC<EmojiReactionsProps> = ({
  initialReactions = defaultReactions,
}) => {
  const [reactions, setReactions] = useState<Reaction[]>(initialReactions);
  const [userReaction, setUserReaction] = useState<string | null>(null);

  const handleReaction = (emoji: string) => {
    if (userReaction === emoji) {
      // User is removing their reaction
      setReactions(
        reactions.map((reaction) =>
          reaction.emoji === emoji
            ? { ...reaction, count: reaction.count - 1 }
            : reaction
        )
      );
      setUserReaction(null);
    } else {
      // User is adding a new reaction or changing reaction
      if (userReaction) {
        // Remove previous reaction
        setReactions(
          reactions.map((reaction) =>
            reaction.emoji === userReaction
              ? { ...reaction, count: reaction.count - 1 }
              : reaction
          )
        );
      }

      // Add new reaction
      setReactions(
        reactions.map((reaction) =>
          reaction.emoji === emoji
            ? { ...reaction, count: reaction.count + 1 }
            : reaction
        )
      );
      setUserReaction(emoji);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {reactions.map((reaction) => (
        <button
          key={reaction.emoji}
          onClick={() => handleReaction(reaction.emoji)}
          className={`flex items-center gap-1 rounded-full py-1 px-3 transition-all ${
            userReaction === reaction.emoji
              ? "bg-travel-light-blue text-travel-blue font-medium"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
          title={reaction.label}
        >
          <span className="text-base">{reaction.emoji}</span>
          <span className="text-xs">{reaction.count}</span>
        </button>
      ))}
    </div>
  );
};

export default EmojiReactions;
