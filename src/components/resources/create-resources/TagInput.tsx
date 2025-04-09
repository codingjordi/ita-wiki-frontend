import { useState } from 'react';
import { themes } from '../../../data/themes';

interface TagInputProps {
  selectedTheme: (typeof themes)[number] | null;
  setSelectedTheme: (theme: (typeof themes)[number] | null) => void;
}

const suggestions = themes;

const TagInput: React.FC<TagInputProps> = ({
  selectedTheme,
  setSelectedTheme,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<
    (typeof themes)[number][]
  >([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      setFilteredSuggestions(
        suggestions.filter((theme) =>
          theme.toLowerCase().includes(value.toLowerCase()),
        ),
      );
    } else {
      setFilteredSuggestions([]);
    }
  };

  const addTag = (theme: (typeof themes)[number]) => {
    if (selectedTheme !== theme) {
      setSelectedTheme(theme);
    }
    setInputValue('');
    setFilteredSuggestions([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      const trimmedValue = inputValue.trim();

      if (themes.includes(trimmedValue as (typeof themes)[number])) {
        addTag(trimmedValue as (typeof themes)[number]);
      } else {
        console.error('El valor ingresado no es válido.');
      }
    }
  };

  const removeTag = (theme: (typeof themes)[number]) => {
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
            key={selectedTheme}
            className="flex items-center bg-[#F6F6F6] font-medium px-3 py-1 rounded-md ">
            <span>{selectedTheme}</span>
            <button
              onClick={() => removeTag(selectedTheme)}
              className="ml-2 text-black hover:text-gray-700 ">
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
          placeholder="Escribe un tema..."
          className="w-full border-none outline-none bg-transparent"
        />
      </div>

      {filteredSuggestions.length > 0 && (
        <ul className="bg-white border border-[#DEDEDE] rounded-md shadow-md mt-2 max-h-48 overflow-y-auto">
          {filteredSuggestions.map((theme) => (
            <li
              key={theme}
              className="cursor-pointer p-2 hover:bg-[#B91879] hover:text-white"
              onClick={() => addTag(theme)}>
              {theme}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagInput;
