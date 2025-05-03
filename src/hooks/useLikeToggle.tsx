import { createLike, deleteLike } from "../api/likesApi";
import { IntResource } from "../types";
import { useCtxUser } from "./useCtxUser";

export function useLikeToggle() {
    const { user } = useCtxUser();

    const toggleLike = async (
        resource: IntResource,
        likedResources: number[],
        setLikedResources: React.Dispatch<React.SetStateAction<number[]>>,
        setVoteCount: React.Dispatch<React.SetStateAction<number>>,
    ) => {
        if (!user || user.role !== "student") {
            return;
        }

        const isAlreadyLiked = likedResources.includes(resource.id!);

        if (isAlreadyLiked) {
            const success = await deleteLike(user.github_id!, resource.id!);
            if (success) {
                setLikedResources((prev) => prev.filter((id) => id !== resource.id!));
                setVoteCount((prev) => prev - 1);
            }
        } else {
            const result = await createLike(user.github_id!, resource.id!);
            if (result) {
                setLikedResources((prev) => [...prev, resource.id!]);
                setVoteCount((prev) => prev + 1);
            }
        }
    };

    return {
        toggleLike,
    };
}
