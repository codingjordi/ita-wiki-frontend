import { useState } from "react";
export interface User {
  uid: string;
  displayName: string;
  photoURL: string;
}

export const useUser = () => {
  const [user, setUser] = useState<User>();
  return { user, setUser };
};
