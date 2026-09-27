import { createContext, useContext } from "react";

export type User = {
  public_id: string;
  username: string;
  email: string;
};

export type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const AuthContext =
  createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }

  return context;
}