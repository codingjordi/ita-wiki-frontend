import { useEffect, useState } from "react";
import { getTags } from "../../../api/endPointTags";
import { Tag } from "../../../types";
import { formatText } from "../../../utils/formatText";

interface TagInputProps {
  selectedTheme: Tag | null;
  setSelectedTheme: (theme: Tag | null) => void;
}

const TagInput: React.FC<TagInputProps> = ({
  selectedTheme,
  setSelectedTheme,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredTags, setFilteredTags] = useState<Tag[]>([]);
  const [tags, setTags] = useState<Tag[]>();

  useEffect(() => {
    const fetchTags = async () => {
      const tags = await getTags();
      setTags(tags);
    };
    fetchTags();
  }, []);

  const tagNames = tags?.map((tag) => tag.name) || [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value && tags) {
      const filtered = tags.filter((suggestion) =>
        suggestion.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredTags(filtered);
    } else {
      setFilteredTags([]);
    }
  };

  const addTag = (tag: Tag) => {
    if (selectedTheme !== tag) {
      setSelectedTheme(tag);
    }
    setInputValue("");
    setFilteredTags([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      const trimmedValue = inputValue.trim();

      if (tagNames.includes(trimmedValue)) {
        const selectedTag = tags?.find((tag) => tag.name === trimmedValue);
        if (selectedTag && selectedTheme !== selectedTag) {
          setSelectedTheme(selectedTag);
          setInputValue("");
          setFilteredTags([]);
        }
      } else {
        console.error("El valor ingresado no es válido.");
      }
    }
  };

  const removeTag = (theme: Tag) => {
    if (selectedTheme === theme) {
      setSelectedTheme(null);
    }
  };

  return (
    <div className="w-full max-w-[482px]">
      <p className="font-medium mb-2 text-sm text-gray-800">Tags</p>

      <div className="p-2 border rounded-md border-gray-200 flex flex-wrap gap-2 focus:border-2 ">
        {selectedTheme && (
          <div
            key={selectedTheme.id}
            className="flex items-center bg-[#F6F6F6] font-medium px-3 py-2 rounded-md mb-2 text-sm border border-[#828282]"
          >
            <span>{formatText(selectedTheme.name)}</span>
            <button
              onClick={() => removeTag(selectedTheme)}
              className="ml-2 text-black hover:text-gray-700 "
            >
              ✕
            </button>
          </div>
        )}

        <input
          type="text"
          id="tags"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Escribe un tag..."
          className="w-full border-none outline-none bg-transparent px-2 py-1"
        />
      </div>

      {filteredTags.length > 0 && (
        <ul className="bg-white border border-[#DEDEDE] rounded-md shadow-md max-h-48 overflow-y-auto">
          {filteredTags.map((tag) => (
            <li
              key={tag.id}
              className="cursor-pointer p-2 hover:bg-[#B91879] hover:text-white"
              onClick={() => addTag(tag)}
            >
              {formatText(tag.name)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagInput;
