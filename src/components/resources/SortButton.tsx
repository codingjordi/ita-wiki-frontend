import { useState } from "react";

const SortButton: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
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
        <ul className="absolute right-0 mt-[-2px] w-40 bg-white border border-gray-300 rounded-md shadow-lg z-50">
          <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Más recientes</li>
          <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Más antiguos</li>
          <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Por año</li>
          <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Por votos</li>
        </ul>
      )}
    </div>
  );
};

export default SortButton;