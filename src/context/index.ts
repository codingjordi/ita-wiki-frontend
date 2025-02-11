import { createContext } from "react";
interface User {
  uid: string;
  displayName: string;
  photoURL: string;
}

export interface IUserCtx {
  user: User;
  setUser: () => void;
}
export const UserCtx = createContext<IUserCtx | null>(null);
