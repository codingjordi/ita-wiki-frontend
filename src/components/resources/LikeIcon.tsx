import { FC } from "react";
import { Triangle } from "lucide-react";

interface LikeIconProps {
  liked?: boolean;
}

const LikeIcon: FC<LikeIconProps> = ({ liked = false }) => {
  return (
    <Triangle
      size={16}
      className={`${liked ? "text-green-custom fill-green-custom" : "text-black"}`}
      aria-label={liked ? "Me gusta" : ""}
    />
  );
};

export default LikeIcon;
