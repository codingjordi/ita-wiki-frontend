import { useEffect, useState } from "react";
import { TagsByCategory } from "../types";
import { fetchTagsByCategory } from "../api/endPointTagsByCategory";

export const useTagsByCategory = () => {
  const [tagsByCategory, setTagsByCategory] = useState<TagsByCategory>({});

  useEffect(() => {
    const loadTags = async () => {
      try {
        const data = await fetchTagsByCategory();
        setTagsByCategory(data);
      } catch (err) {
        console.error("Error fetching tags by category:", err);
      }
    };

    loadTags();
  }, []);

  return { tagsByCategory };
};
