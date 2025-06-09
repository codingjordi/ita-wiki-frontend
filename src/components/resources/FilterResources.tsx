import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
// import { useTagsByCategory } from "../../hooks/useTagsByCategory"; // TODO: restaurar cuando esté disponible

interface FilterResourcesProps {
  resourceTypes: readonly string[];
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  selectedResourceTypes: string[];
  setSelectedResourceTypes: (resourceTypes: string[]) => void;
}

export const FilterResources: FC<FilterResourcesProps> = ({
  resourceTypes,
  selectedTags,
  setSelectedTags,
  selectedResourceTypes,
  setSelectedResourceTypes,
}) => {
  const { category } = useParams();
  const [prevCategory, setPrevCategory] = useState<string | null>(null);

  // Hardcoded tags por ahora - TODO: restaurar useTagsByCategory cuando esté disponible
  const getTagsForCategory = (category: string | undefined): string[] => {
    if (!category) return [];

    const mockTags: { [key: string]: string[] } = {
      React: ["hooks", "components", "state", "props", "jsx"],
      Node: ["express", "mongodb", "api", "server", "npm"],
      JavaScript: ["async", "promises", "es6", "dom", "functions"],
      CSS: ["flexbox", "grid", "animations", "responsive", "sass"],
      TypeScript: ["types", "interfaces", "generics", "decorators"],
      Vue: ["composition", "directives", "router", "vuex"],
      Angular: ["components", "services", "routing", "rxjs"],
      Python: ["django", "flask", "pandas", "numpy"],
      Java: ["spring", "hibernate", "maven", "gradle"],
      PHP: ["laravel", "symfony", "composer", "pdo"],
    };

    return mockTags[category] || [];
  };

  const tagsFromCategory = getTagsForCategory(category);

  useEffect(() => {
    if (category !== prevCategory) {
      setSelectedResourceTypes([...resourceTypes]);
      setSelectedTags([]);
      setPrevCategory(category ?? null);
    }
    if (selectedResourceTypes.length === 0 && resourceTypes.length > 0) {
      setSelectedResourceTypes([...resourceTypes]);
    }
  }, [
    category,
    prevCategory,
    resourceTypes,
    selectedResourceTypes,
    setSelectedResourceTypes,
    setSelectedTags,
  ]);

  const tags = ["Todos", ...tagsFromCategory];

  const toggleTag = (tag: string) => {
    if (tag === "Todos") {
      setSelectedTags([]);
    } else {
      setSelectedTags(
        selectedTags.includes(tag)
          ? selectedTags.filter((t) => t !== tag)
          : [...selectedTags.filter((t) => t !== "Todos"), tag],
      );
    }
  };

  return (
    <div className="mt-6">
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">Temas</h3>
        {tags.map((tagName) => {
          const isSelected =
            (tagName === "Todos" && selectedTags.length === 0) ||
            selectedTags.includes(tagName);

          return (
            <label
              key={tagName}
              className="flex items-center gap-2 mb-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => toggleTag(tagName)}
                className="hidden"
              />
              <div
                className={`w-5 h-5 flex items-center justify-center rounded border ${
                  isSelected
                    ? "bg-[#B91879] border-[#B91879]"
                    : "border-gray-400"
                }`}
              >
                {isSelected && (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                )}
              </div>
              <span
                className="text-gray-800 max-w-[120px] truncate inline-block"
                title={tagName}
              >
                {tagName}
              </span>
            </label>
          );
        })}

        {tagsFromCategory.length === 0 && (
          <p className="text-sm text-gray-500">No hay temas disponibles.</p>
        )}
      </div>
    </div>
  );
};
