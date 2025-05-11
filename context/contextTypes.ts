export interface AppState {
  user: string | null;
  isLoggedIn: boolean;
  setUser: (user: string | null) => void;
  setIsLoggedIn: (status: boolean) => void;
}
