import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useTagsByCategory } from "../../hooks/useTagsByCategory";

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
  const toggleResourceType = (resourceType: string) => {
    if (
      selectedResourceTypes.length === 1 &&
      selectedResourceTypes.includes(resourceType)
    ) {
      setSelectedResourceTypes([...resourceTypes]);
    } else {
      setSelectedResourceTypes(
        selectedResourceTypes.includes(resourceType)
          ? selectedResourceTypes.filter((rType) => rType !== resourceType)
          : [...selectedResourceTypes, resourceType],
      );
    }
  };

  const { category } = useParams();
  const [prevCategory, setPrevCategory] = useState<string | null>(null);
  const { tagsByCategory } = useTagsByCategory();

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

  const tagsFromCategory =
    category && tagsByCategory[category]
      ? Object.keys(tagsByCategory[category])
      : [];

  const tags = ["Todos", ...tagsFromCategory];

  const toggleTag = (tag: string) => {
    if (tag === "Todos") {
      setSelectedTags([]);
    } else {
      setSelectedTags((prevTags) =>
        prevTags.includes(tag)
          ? prevTags.filter((t) => t !== tag)
          : [...prevTags.filter((t) => t !== "Todos"), tag],
      );
    }
  };

  return (
    <div className="mt-6">
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">Temas</h3>
        {tags.map((tagName) => (
          <label
            key={tagName}
            className="flex items-center gap-2 mb-2 cursor-pointer"
          >
            <button
              type="button"
              onClick={() => toggleTag(tagName)}
              className="flex items-center gap-2 mb-2 cursor-pointer"
            >
              <div
                className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${(tagName === "Todos" && selectedTags.length === 0) ||
                  selectedTags.includes(tagName)
                  ? "border-[#B91879]"
                  : "border-gray-400"
                  }`}
              >
                {((tagName === "Todos" && selectedTags.length === 0) ||
                  selectedTags.includes(tagName)) && (
                    <div className="w-2.5 h-2.5 bg-[#B91879] rounded-full"></div>
                  )}
              </div>
              <span className="text-gray-800">{tagName}</span>
            </button>
          </label>
        ))}
        {tagsFromCategory.length === 0 && (
          <p className="text-sm text-gray-500">No hay temas disponibles.</p>
        )}
      </div>

      <div>
        <h3 className="text-lg font-bold mb-3">Tipo de recurso</h3>
        {resourceTypes.map((resourceType) => (
          <label
            key={resourceType}
            className="flex items-center gap-2 mb-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedResourceTypes.includes(resourceType)}
              onChange={() => toggleResourceType(resourceType)}
              className="hidden"
            />
            <div
              className={`w-5 h-5 flex items-center justify-center rounded border ${selectedResourceTypes.includes(resourceType)
                ? "bg-[#B91879] border-[#B91879]"
                : "border-gray-400"
                }`}
            >
              {selectedResourceTypes.includes(resourceType) && (
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
            <span className="text-gray-800">{resourceType}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
