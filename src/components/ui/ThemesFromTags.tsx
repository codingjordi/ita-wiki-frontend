import React from "react";
import { useTagsByCategory } from "../../hooks/useTagsByCategory";

type Props = {
    category: string;
};

const ThemesFromTags: React.FC<Props> = ({ category }) => {
    const { tagsByCategory } = useTagsByCategory();


    const tags = tagsByCategory[category];

    if (!tags) return <p>No tags found for this category.</p>;

    return (
        <div>
            <h3 className="text-lg font-semibold mb-2">Themes</h3>
            <ul className="flex flex-wrap gap-2">
                {Object.keys(tags).map((tag) => (
                    <li
                        key={tag}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm"
                    >
                        #{tag}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ThemesFromTags;
