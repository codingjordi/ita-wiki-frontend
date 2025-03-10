import { useState, useEffect, useMemo } from "react";
import { useSearchParams, useParams } from "react-router";
import { IntResource } from "../types"; // Adjust path as needed

interface UseResourceFilterProps {
  resources: IntResource[];
  themes: readonly string[];
  resourceTypes: readonly string[];
}

export const useResourceFilter = ({
  resources,
  themes,
  resourceTypes,
}: UseResourceFilterProps) => {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialTheme = searchParams.get("theme") || themes[0];
  const initialResourceTypes = searchParams
    .get("resourceTypes")
    ?.split(",") || [resourceTypes[0]];

  const [selectedTheme, setSelectedTheme] = useState<string>(initialTheme);
  const [selectedResourceTypes, setSelectedResourceTypes] =
    useState<string[]>(initialResourceTypes);

  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedTheme) {
      params.set("theme", selectedTheme);
    }
    if (
      selectedResourceTypes.length > 0 &&
      selectedResourceTypes.some((type) => type.trim() !== "")
    ) {
      params.set("resourceTypes", selectedResourceTypes.join(","));
    }
    const queryString = params.toString();
    setSearchParams(queryString ? params : undefined);
  }, [selectedTheme, selectedResourceTypes, setSearchParams]);

  const filteredResources = useMemo(() => {
    if (!resources) return [];

    return resources.filter((resource) => {
      const themeMatch =
        selectedTheme === "Todos" || resource.theme === selectedTheme;

      const typeMatch =
        selectedResourceTypes.length === 0 ||
        selectedResourceTypes.some(
          (selectedType) => resource.type === selectedType
        );

      return themeMatch && typeMatch;
    });
  }, [resources, category, selectedTheme, selectedResourceTypes]);
  console.log("el array");
  console.log("Recursos filtrados:", filteredResources);

  return {
    filteredResources,
    selectedTheme,
    setSelectedTheme,
    selectedResourceTypes,
    setSelectedResourceTypes,
  };
};
