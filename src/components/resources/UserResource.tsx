import { FC } from "react";
import { IntUser, TypChildren } from "../../types";
interface UserResourceProps {
  user: IntUser;
}

export const UserResource: FC<TypChildren & UserResourceProps> = ({
  children,
  user,
}) => {
  return (
    <div
      role="resource"
      data-testid="user-resource"
      className="flex gap-2 items-center"
    >
      <img src={user.photoURL} alt="User avatar" />
      <h3>{user.displayName}</h3>
      {children}
    </div>
  );
};
