"use client";

import { createContext, useState, ReactNode } from "react";
import { AppState } from "./contextTypes";

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
