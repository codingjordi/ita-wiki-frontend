import { useEffect, useState } from "react";
import { IntResource } from "../types";
import { useCtxUser } from "./useCtxUser";
import { useLikeToggle } from "./useLikeToggle";
import { getLikes } from "../api/likesApi";

export function useResourceLike(resource: IntResource) {
    const { user } = useCtxUser();
    const [likedResources, setLikedResources] = useState<number[]>([]);
    const [voteCount, setVoteCount] = useState<number>(resource.votes ?? 0);

    const { toggleLike } = useLikeToggle();

    useEffect(() => {
        const fetchLikes = async () => {
            if (!user || user.role !== "student" || !user.github_id) return;
            const likes = await getLikes(user.github_id);
            const likedIds = likes.map((like) => like.resource_id);
            setLikedResources(likedIds);
        };
        fetchLikes();
    }, [user]);

    const handleLike = () => {
        toggleLike(resource, likedResources, setLikedResources, setVoteCount);
    };

    return {
        liked: likedResources.includes(resource.id!),
        voteCount,
        handleLike,
        disabled: !user || user.role !== "student",
    };
}
