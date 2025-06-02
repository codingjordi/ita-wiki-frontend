import { useEffect, useState } from "react";
import { TagsByCategory, Tag } from "../types";
import { fetchTagsByCategory } from "../api/endPointTagsByCategory";
import { getTags } from "../api/endPointTags";

export const useTagsByCategory = () => {
  const [tagsByCategory, setTagsByCategory] = useState<TagsByCategory>({});
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    const loadTags = async () => {
      try {
        const [categoryTags, fullTags] = await Promise.all([
          fetchTagsByCategory(),
          getTags(),
        ]);

        setTagsByCategory(categoryTags);
        setTags(fullTags);
      } catch (err) {
        console.error("Error fetching tags:", err);
      }
    };

    loadTags();
  }, []);

  return { tagsByCategory, tags };
};
