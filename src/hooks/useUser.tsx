import { useState } from "react";
import { User } from "../types";
import { signInWithGitHub } from "../api/firebase";

export const useUser = () => {
  const [user, setUser] = useState<User | null>(JSON.parse(localStorage.getItem("user") as string));

  const signIn = () => {
    signInWithGitHub(setUser)
  }
  const signOut = () => {
    localStorage.removeItem("user")
    setUser(() => JSON.parse(localStorage.getItem("user") as string))
  }
  const saveUser = (user: User) => {
    setUser(() => user)
  }
  return { user, saveUser, signIn, signOut };
};
