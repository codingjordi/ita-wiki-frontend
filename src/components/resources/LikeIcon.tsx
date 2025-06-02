import { FC } from "react";
import { Triangle } from "lucide-react";

interface LikeIconProps {
  liked?: boolean;
}

const LikeIcon: FC<LikeIconProps> = ({ liked = false }) => {
  return (
    <Triangle
      size={16}
      fill={liked ? "rgb(39, 174, 96)" : "none"}
      color={liked ? "rgb(39, 174, 96)" : "black"}
      aria-label={liked ? "Me gusta" : ""}
    />
  );
};

export default LikeIcon;
