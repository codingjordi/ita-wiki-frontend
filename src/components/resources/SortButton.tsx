import { useState, useEffect, useRef } from "react";
import { SortOption } from "../../types";

interface SortButtonProps {
  setSortOption: (option: SortOption) => void;
  setSelectedYear: (year: number | null) => void;
  availableYears: number[];
}

const SortButton: React.FC<SortButtonProps> = ({
  setSortOption,
  setSelectedYear,
  availableYears,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setIsYearDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className="p-2 rounded-md transition-colors duration-200 hover:bg-gray-200 cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-gray-800 hover:text-gray-900"
        >
          <path d="M3 5h18M6 9h12M9 13h6M12 17h0" />
        </svg>
      </button>

      {isDropdownOpen && (
        <ul className="absolute right-0 mt-[-2px] w-40 bg-white border border-gray-300 rounded-md shadow-lg z-[1000]">
          <li
            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            onClick={() => {
              setSortOption("recent");
              setIsDropdownOpen(false);
            }}
          >
            Más recientes
          </li>
          <li
            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            onClick={() => {
              setSortOption("oldest");
              setIsDropdownOpen(false);
            }}
          >
            Más antiguos
          </li>
          <li
            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            onClick={() => setSortOption("votes")}
          >
            Más votados
          </li>
          <li
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 relative"
            onMouseEnter={() => setIsYearDropdownOpen(true)}
            onMouseLeave={() => setIsYearDropdownOpen(false)}
          >
            Por año →
            {isYearDropdownOpen && (
              <ul
              className="absolute left-0 top-full mt-[-2px] w-32 bg-white border border-gray-300 rounded-md shadow-lg z-[1000]"
              style={{
                minWidth: "max-content",
                whiteSpace: "nowrap",
              }}
            >
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setSelectedYear(null);
                    setIsDropdownOpen(false);
                  }}
                >
                  Todos los años
                </li>
                {availableYears.map((year) => (
                  <li
                    key={year}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setSelectedYear(year);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {year}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      )}
    </div>
  );
};

export default SortButton;