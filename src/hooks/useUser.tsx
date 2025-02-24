import { useState } from "react";
import { IntUser } from "../types";
import { signInWithGitHub } from "../api/firebase";
import { storage } from "../utils";

export const useUser = () => {

  const [user, setUser] = useState<IntUser | undefined>(storage.get("user"));

  const signIn = () => {
    signInWithGitHub(setUser)
  }
  const signOut = () => {
    localStorage.removeItem("user")
    setUser(() => storage.get("user"))
  }
  const saveUser = (user: IntUser) => {
    setUser(() => user)
  }
  return { user, saveUser, signIn, signOut };
};
