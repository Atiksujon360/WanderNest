'use client";';
import { useState } from "react";

export function useActiveTab<T extends string>(initialTab: T) {
  const [activeTab, setActiveTab] = useState<T>(initialTab);

  const isActive = (tab: T) => activeTab === tab;

  return { activeTab, setActiveTab, isActive };
}
