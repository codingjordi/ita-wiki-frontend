import { IntResource, IntBookmarkElement } from "../types";
import { useCtxUser } from "./useCtxUser";
import { createBookmark, deleteBookmark } from "../api/endPointBookmark";

// This hook now only handles toggling bookmarks, not fetching them
export function useBookmarkToggle() {
  const { user } = useCtxUser();

  const toggleBookmark = async (
    resource: IntResource,
    bookmarkedResources: IntBookmarkElement[],
    setBookmarkedResources: React.Dispatch<
      React.SetStateAction<IntBookmarkElement[]>
    >
  ) => {
    if (!user) {
      return;
    }

    const isAlreadyBookmarked: boolean = bookmarkedResources.some(
      (item: IntBookmarkElement) => item.id === resource.id
    );

    try {
      // Update local state immediately for better UX
      setBookmarkedResources((prev: IntBookmarkElement[]) => {
        if (isAlreadyBookmarked) {
          return prev.filter(
            (item: IntBookmarkElement) => item.id !== resource.id
          );
        } else {
          const newBookmark = {
            id: resource.id!,
            github_id: user.id,
            title: resource.title,
            description: resource.description,
            url: resource.url,
            created_at: new Date().toISOString(),
          } as IntBookmarkElement;

          const updatedBookmarks = [...prev, newBookmark];
          return updatedBookmarks.sort(
            (a, b) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          );
        }
      });

      // Then perform API operation
      if (isAlreadyBookmarked) {
        console.log("Deleting bookmark...");
        // 6729608
        await deleteBookmark("6729608", resource.id!);
        // await deleteBookmark(String(user.id), resource.id!);
      } else {
        console.log("Creating bookmark...");
        await createBookmark("6729608", resource.id!);
        // await createBookmark(String(user.id), resource.id!);
      }
    } catch (error) {
      console.error("Error toggling bookmark:", error);
      throw error; // Let the context handle error recovery
    }
  };

  return {
    toggleBookmark,
  };
}
