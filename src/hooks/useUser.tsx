import { useState } from "react";
import { User } from "../types";
import { signInWithGitHub } from "../api/firebase";
import { storage } from "../utils";

export const useUser = () => {
  const [user, setUser] = useState<User | null>(storage.get("user"));

  const signIn = () => {
    signInWithGitHub(setUser)
  }
  const signOut = () => {
    localStorage.removeItem("user")
    setUser(() => storage.get("user"))
  }
  const saveUser = (user: User) => {
    setUser(() => user)
  }
  return { user, saveUser, signIn, signOut };
};
