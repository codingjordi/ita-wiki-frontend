import { FC, ReactNode } from "react";
import { useUser } from "../hooks/UseUser";
import { UserCtx, IUserCtx } from "./index";

interface Props {
  children: ReactNode;
}

const UserCtxprovider: FC<Props> = ({ children }) => {
  const value = { ...useUser() } as IUserCtx;

  return <UserCtx.Provider value={value}>{children}</UserCtx.Provider>;
};

export default UserCtxprovider;
