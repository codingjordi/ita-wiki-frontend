import { createContext, useContext, useEffect, useState } from "react";
import { IntResource, IntBookmarkElement, Bookmark } from "../types";
import { getResources } from "../api/endPointResources";
import { getBookmarks } from "../api/endPointBookmark";
import mock from "../moock/resources.json";
import { useBookmarkToggle } from "../hooks/useBookmarkToggle";
import { useCtxUser } from "../hooks/useCtxUser";

interface ResourcesContextType {
  resources: IntResource[];
  isLoading: boolean;
  bookmarkedResources: IntBookmarkElement[];
  loadingBookmarks: boolean;
  isBookmarked: (resource: IntResource) => boolean;
  toggleBookmark: (resource: IntResource) => void;
}

const ResourcesContext = createContext<ResourcesContextType>({
  resources: [],
  isLoading: true,
  bookmarkedResources: [],
  loadingBookmarks: true,
  isBookmarked: () => false,
  toggleBookmark: () => {},
});

export const useResources = () => useContext(ResourcesContext);

export const ResourcesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user } = useCtxUser();
  const [resources, setResources] = useState<IntResource[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [bookmarkedResources, setBookmarkedResources] = useState<
    IntBookmarkElement[]
  >([]);
  const [loadingBookmarks, setLoadingBookmarks] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const data = await getResources();
        setResources(data);
      } catch (err) {
        console.error("Error loading resources, using mock.", err);
        setResources(mock.resources as IntResource[]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResources();
  }, []);

  useEffect(() => {
    if (!user || resources.length === 0) {
      setBookmarkedResources([]);
      setLoadingBookmarks(false);
      return;
    }

    const fetchBookmarks = async () => {
      try {
        setLoadingBookmarks(true);
        const fetchedBookmarks: Bookmark[] = await getBookmarks(
          user.id.toString(),
        );

        const bookmarkedResources: IntBookmarkElement[] = resources
          .filter((resource) =>
            fetchedBookmarks.some(
              (bookmark) => bookmark.resource_id === resource.id,
            ),
          )
          .map((resource) => {
            const matchedBookmark = fetchedBookmarks.find(
              (bookmark) => bookmark.resource_id === resource.id,
            );

            return {
              id: resource.id!,
              github_id: matchedBookmark?.github_id || user.id,
              title: resource.title,
              description: resource.description,
              url: resource.url,
              created_at:
                matchedBookmark?.created_at || new Date().toISOString(),
            };
          });

        const sortedBookmarks = bookmarkedResources.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
        );

        setBookmarkedResources(sortedBookmarks);
      } catch (error) {
        console.error("Error fetching bookmarks:", error);
        setBookmarkedResources([]);
      } finally {
        setLoadingBookmarks(false);
      }
    };

    fetchBookmarks();
  }, [user, resources]);

  const { toggleBookmark: toggleBookmarkAction } = useBookmarkToggle();

  const toggleBookmark = async (resource: IntResource) => {
    if (!user) return;

    try {
      await toggleBookmarkAction(
        resource,
        bookmarkedResources,
        setBookmarkedResources,
      );
    } catch (error) {
      console.error("Error in toggleBookmark:", error);

      if (user && resources.length > 0) {
        try {
          const fetchedBookmarks: Bookmark[] = await getBookmarks(
            user.id.toString(),
          );
          const revertedBookmarks = resources
            .filter((r) => fetchedBookmarks.some((b) => b.resource_id === r.id))
            .map((r) => {
              const match = fetchedBookmarks.find(
                (b) => b.resource_id === r.id,
              );
              return {
                id: r.id!,
                github_id: match?.github_id || user.id,
                title: r.title,
                description: r.description,
                url: r.url,
                created_at: match?.created_at || new Date().toISOString(),
              } as IntBookmarkElement;
            });
          setBookmarkedResources(revertedBookmarks);
        } catch (fetchError) {
          console.error("Error recovering bookmark state:", fetchError);
        }
      }
    }
  };

  const isBookmarked = (resource: IntResource) => {
    return bookmarkedResources.some((bookmark) => bookmark.id === resource.id);
  };

  return (
    <ResourcesContext.Provider
      value={{
        resources,
        isLoading,
        bookmarkedResources,
        loadingBookmarks,
        isBookmarked,
        toggleBookmark,
      }}
    >
      {children}
    </ResourcesContext.Provider>
  );
};
