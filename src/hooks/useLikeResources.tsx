import { useContext, useEffect, useState } from "react";
import { LikeContext } from "../context/LikeContext";
import { useLikeToggle } from "./useLikeToggle";
import { IntResource } from "../types";
import { useCtxUser } from "./useCtxUser";
import { useResources } from "../context/ResourcesContext";

export function useLikeResources(resource: IntResource) {
  const { likedResourceIds, refreshLikes, setLikedResourceIds } =
    useContext(LikeContext);
  const { toggleLike } = useLikeToggle();
  const { user } = useCtxUser();
  const { refreshResources } = useResources();

  const github_id = user?.github_id;
  const resourceId = Number(resource.id);

  const [localLiked, setLocalLiked] = useState<boolean>(
    likedResourceIds.includes(resourceId),
  );
  const [localCount, setLocalCount] = useState<number>(
    resource.like_count ?? 0,
  );
  const [syncBlocked, setSyncBlocked] = useState(false);

  useEffect(() => {
    if (!syncBlocked) {
      setLocalLiked(likedResourceIds.includes(resourceId));
      setLocalCount(resource.like_count ?? 0);
    }
  }, [likedResourceIds, resource.like_count, resourceId, syncBlocked]);

  useEffect(() => {
    refreshResources();
  }, [resourceId]);

  const rollback = (wasLiked: boolean) => {
    setLocalLiked(wasLiked);
    // Revert optimistic like count update
    setLocalCount((prev) => prev + (wasLiked ? -1 : 1));
    setLikedResourceIds(likedResourceIds);
  };

  const handleLike = async () => {
    if (!github_id) return;

    const wasLiked = localLiked;

    setLocalLiked(!wasLiked);
    setLocalCount((prev) => prev + (wasLiked ? -1 : 1));
    setSyncBlocked(true);

    const optimisticIds = wasLiked
      ? likedResourceIds.filter((id) => id !== resourceId)
      : [...likedResourceIds, resourceId];
    setLikedResourceIds(optimisticIds);

    try {
      const result = await toggleLike(resourceId, wasLiked);

      if (!result?.success) {
        rollback(wasLiked);
      } else {
        await refreshLikes();
        await refreshResources();
      }
    } catch (err) {
      console.error("Error toggling like:", err);
      rollback(wasLiked);
    } finally {
      setSyncBlocked(false);
    }
  };

  return {
    liked: localLiked,
    voteCount: localCount,
    handleLike,
    disabled: !github_id,
  };
}
