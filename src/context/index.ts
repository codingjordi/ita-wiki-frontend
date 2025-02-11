import { createContext } from "react";
import { User } from "../types";
export interface PropsContext {
  user: User;
  saveUser: (user: User) => void;
  signIn: () => void,
  signOut: () => void
}

const CtxUser = createContext<PropsContext | null>(null);

export default CtxUser
