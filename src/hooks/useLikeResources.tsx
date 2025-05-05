import { useContext, useEffect, useMemo, useState } from "react";
import { LikeContext } from "../context/LikeContext";
import { useLikeToggle } from "./useLikeToggle";
import { IntResource } from "../types";
import { useCtxUser } from "./useCtxUser";
import { useResources } from "../context/ResourcesContext";

export function useLikeResources(resource: IntResource) {
    const { likedResourceIds, refreshLikes, setLikedResourceIds } = useContext(LikeContext);
    const { toggleLike } = useLikeToggle();
    const { user } = useCtxUser();
    const { resources, refreshResources } = useResources();


    const github_id = user?.github_id;
    const resourceId = resource.id!;
    const updatedResource = resources.find((r) => r.id === resource.id);

    const [voteCount, setVoteCount] = useState<number>(updatedResource?.like_count ?? 0);

    useEffect(() => {
        if (updatedResource?.like_count !== undefined) {
            setVoteCount(updatedResource.like_count);
        }
    }, [updatedResource]);


    useEffect(() => {
    }, [voteCount]);

    const isLiked = useMemo(
        () => likedResourceIds.includes(resourceId),
        [likedResourceIds, resourceId]
    );

    const handleLike = async () => {
        if (!github_id) return;
        const optimisticLikedIds = isLiked
            ? likedResourceIds.filter((id) => id !== resourceId)
            : [...likedResourceIds, resourceId];

        setLikedResourceIds(optimisticLikedIds);
        setVoteCount((prev) => prev + (isLiked ? -1 : 1));

        try {
            const result = await toggleLike(resourceId, isLiked);
            if (!result?.success) {
                setLikedResourceIds(likedResourceIds);
                setVoteCount((prev) => prev - (isLiked ? -1 : 1));
            } else {
                refreshLikes();
                refreshResources();
            }
        } catch (err) {
            console.error("Error toggling like:", err);
            setLikedResourceIds(likedResourceIds);
            setVoteCount((prev) => prev - (isLiked ? -1 : 1));
        }
    };


    return {
        liked: isLiked,
        voteCount,
        handleLike,
        disabled: !github_id,
    };
}
