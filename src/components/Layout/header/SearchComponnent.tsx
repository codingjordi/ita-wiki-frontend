import { useState } from "react";
import searchIcon from "../../../assets/search.svg";

interface SearchComponentProps {
    onSearch: (query: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div className="relative mr-[120px]">
            <input
                type="text"
                placeholder="Buscar recurso"
                className="bg-white pl-10 pr-4 py-2 border border-gray-300 font-semibold text-base rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-gray-400"
                value={searchTerm}
                onChange={handleChange}
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <img src={searchIcon} alt="Buscar" className="h-5 w-5 text-gray-500" />
            </div>
        </div>
    );
};

export default SearchComponent;
