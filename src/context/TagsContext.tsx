import { createContext, useContext, useEffect, useState } from "react";
import { getTags } from "../api/endPointTags";
import { fetchTagsIdsByCategory } from "../api/endPointTagsIdsByCategory";
import { Tag } from "../types";

interface TagsContextType {
  tags: Tag[];
  tagsByCategory: Record<string, number[]>;
  getTagsByCategory: (category: string | null) => Tag[];
}

const TagsContext = createContext<TagsContextType>({
  tags: [],
  tagsByCategory: {},
  getTagsByCategory: () => [],
});

export const useTags = () => useContext(TagsContext);

export const TagsProvider = ({ children }: { children: React.ReactNode }) => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagsByCategory, setTagsByCategory] = useState<
    Record<string, number[]>
  >({});

  useEffect(() => {
    const fetch = async () => {
      try {
        const [allTags, tagsByCat] = await Promise.all([
          getTags(),
          fetchTagsIdsByCategory(),
        ]);
        setTags(allTags);
        setTagsByCategory(tagsByCat);
      } catch (err) {
        console.error("Error fetching tags:", err);
      }
    };

    fetch();
  }, []);

  const getTagsByCategory = (category: string | null): Tag[] => {
    if (!category || !tagsByCategory[category]) return [];
    return tags.filter((tag) => tagsByCategory[category].includes(tag.id));
  };

  return (
    <TagsContext.Provider value={{ tags, tagsByCategory, getTagsByCategory }}>
      {children}
    </TagsContext.Provider>
  );
};
