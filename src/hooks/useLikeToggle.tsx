import { IntResource } from "../types";
import { useCtxUser } from "./useCtxUser";

export function useLikeToggle() {
    const { user } = useCtxUser();

    const toggleLike = (
        resource: IntResource,
        likedResources: number[],
        setLikedResources: React.Dispatch<React.SetStateAction<number[]>>,
        setVoteCount: React.Dispatch<React.SetStateAction<number>>,
    ) => {
        if (!user || user.role !== "alumno") {
            return;
        }

        const isAlreadyLiked = likedResources.includes(resource.id!);

        setLikedResources((prev) => {
            if (isAlreadyLiked) {
                return prev.filter((id) => id !== resource.id);
            } else {
                return [...prev, resource.id!];
            }
        });

        setVoteCount((prevCount) => {
            const newCount = isAlreadyLiked ? prevCount - 1 : prevCount + 1;
            return newCount;
        });

    };

    return {
        toggleLike,
    };
}
