// src/ui/TagsByCategory.tsx
import React from "react";

interface TagsByCategoryProps {
  category: string;
  tags: { [tagName: string]: number }; // <- corregido
}
// interface TagsByCategoryProps {
//   data: {
//     [category: string]: number[];
//   };
// }

const TagsByCategory: React.FC<TagsByCategoryProps> = ({ category, tags }) => {
  const tagNames = Object.keys(tags); // <- obtenemos solo los nombres

  //Testing
  console.log("tags: ");
  console.log(tagNames);

  return (
    <div>
      <h3 className="text-lg font-semibold">{category}</h3>
      <ul className="flex flex-wrap gap-2 mt-2">
        {tagNames.map((tag) => (
          <li key={tag} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

// const TagsByCategory: React.FC<TagsByCategoryProps> = ({ data }) => {
//   return (
//     <div>
//       {Object.entries(data).map(([category, tagIds]) => (
//         <div key={category} className="mb-4">
//           <h3 className="text-lg font-semibold">{category}</h3>
//           <ul className="flex flex-wrap gap-2 mt-2">
//             {tagIds.map((id) => (
//               <li
//                 key={id}
//                 className="px-3 py-1 bg-gray-200 rounded-full text-sm"
//               >
//                 Tag ID: {id}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

export default TagsByCategory;
