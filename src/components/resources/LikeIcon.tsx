import { FC } from "react";
import { Triangle } from "lucide-react";

interface LikeIconProps {
    liked?: boolean;
}

const LikeIcon: FC<LikeIconProps> = ({
    liked = false }) => {
    return (
        <div
            id="likeIcon"
            data-testid="likeIcon"
            className="flex items-center justify-start gap-2 max-h-12"
        >
            <Triangle
                size={16}
                fill={liked ? "green" : "none"}
                color={liked ? "green" : "gray"}
                aria-label={
                    liked
                        ? "Me gusta"
                        : ""
                }
            />
        </div>
    );
}
export default LikeIcon;