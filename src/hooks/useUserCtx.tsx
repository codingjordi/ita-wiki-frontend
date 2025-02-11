import { useContext } from "react";
import { UserCtx } from "../context/User";

export const useUserCtx = () => {
  const ctx = useContext(UserCtx);
  if (!ctx) throw new Error("contexto no definido");
  return ctx;
};
