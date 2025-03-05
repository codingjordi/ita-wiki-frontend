import { useState } from "react";
import { IntUser } from "../types";
import { signInWithGitHub } from "../api/firebase";
import { storage } from "../utils";

export const useUser = () => {
  const [user, setUser] = useState<IntUser | null>(storage.get("user"));
  const [error, setError] = useState<string | null>(null);

  const signIn = async () => {
    try {
      const newUser = await signInWithGitHub();
      setUser(newUser);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };
  const signOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    setError(null);
  };
  const saveUser = (user: IntUser) => {
    setUser(() => user);
  };
  return {
    user,
    saveUser,
    signIn,
    signOut,
    error,
    setError,
  };
};
