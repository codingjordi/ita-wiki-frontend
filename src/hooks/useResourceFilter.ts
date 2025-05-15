import { useState, useEffect, useMemo } from "react";
import { useSearchParams, useParams } from "react-router";
import { IntResource } from "../types";

interface UseResourceFilterProps {
  resources: IntResource[];
  resourceTypes: readonly string[];
}

export const useResourceFilter = ({
  resources,
  resourceTypes,
}: UseResourceFilterProps) => {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialResourceTypes = searchParams
    .get("resourceTypes")
    ?.split(",") || [resourceTypes[0]];
  const searchQuery = searchParams.get("search") || "";
  const initialTags = searchParams.get("tags")?.split(",") || [];

  const [selectedResourceTypes, setSelectedResourceTypes] =
    useState<string[]>(initialResourceTypes);
  const [selectedTags, setSelectedTags] = useState<string[]>(initialTags);

  useEffect(() => {
    if (category) {
      setSelectedResourceTypes([...resourceTypes]);
    }
  }, [category, resourceTypes]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (
      selectedResourceTypes.length > 0 &&
      selectedResourceTypes.some((type) => type.trim() !== "")
    ) {
      params.set("resourceTypes", selectedResourceTypes.join(","));
    }
    if (!params.has("search") && searchQuery) {
      params.set("search", searchQuery);
    }
    if (selectedTags.length > 0) {
      params.set("tags", selectedTags.join(","));
    }

    setSearchParams(params, { replace: true });
  }, [selectedResourceTypes, searchQuery, selectedTags, setSearchParams]);

  const filteredResources = useMemo(() => {
    if (!resources || !category) return [];

    return resources.filter((resource) => {
      const categoryMatch = !category || resource.category === category;
      const typeMatch =
        selectedResourceTypes.length === 0 ||
        selectedResourceTypes.some(
          (selectedType) => resource.type === selectedType,
        );
      const searchMatch =
        !searchQuery ||
        resource.title.toLowerCase().includes(searchQuery.toLowerCase());

      const tagMatch =
        selectedTags.length === 0 ||
        selectedTags.some((tag) =>
          resource.tags?.some((t) => {
            const tagName = typeof t === "string" ? t : t.name;
            return tagName === tag;
          }),
        );

      return categoryMatch && typeMatch && searchMatch && tagMatch;
    });
  }, [resources, category, selectedResourceTypes, searchQuery, selectedTags]);

  return {
    filteredResources,
    selectedResourceTypes,
    setSelectedResourceTypes,
    selectedTags,
    setSelectedTags,
  };
};
