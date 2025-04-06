import { FC } from "react";
import { MessageCircle, PlayCircle, Clock, Triangle } from "lucide-react";
import { IntResource } from "../../types";
import { useCtxUser } from "../../hooks/useCtxUser";

import BookmarkIconComponent from "../resources/BookmarkIconComponent";

interface ResourceCardProps {
  resource: IntResource;
  isBookmarked: boolean;
  toggleBookmark: (resource: IntResource) => void;
  bookmarkCount?: number;
  commentsCount?: number;
}

const ResourceCard: FC<ResourceCardProps> = ({
  resource,
  isBookmarked,
  toggleBookmark,
  bookmarkCount = 0,
  commentsCount = 0,
}) => {
  const { title, description, type, created_at, votes } = resource;
  const { user } = useCtxUser();

  const handleBookmarkClick = () => {
    // Only allow bookmark toggling for logged-in users
    if (!user) {
      console.log("User not logged in, cannot toggle bookmark");
      // Here you could add a redirect to login or show a tooltip/message
      return;
    }

    console.log("Bookmark clicked");
    toggleBookmark(resource);
  };

  const formattedDate =
    typeof created_at === "string" && isNaN(Date.parse(created_at))
      ? created_at
      : created_at
        ? new Date(created_at).toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
        : "Fecha desconocida";

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-400 p-6 flex justify-between items-center w-full max-w-[710px] h-[109px]">
      {/* Left Section */}
      <div className="flex flex-col space-y-2 overflow-hidden">
        <div>
          <h3 className="text-lg font-bold text-black truncate">{title}</h3>
          <p className="text-gray-500 text-sm truncate">{description}</p>
        </div>
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <span className="flex items-center gap-1">
            <PlayCircle size={16} />
            {type}
          </span>
          <span className="flex items-center gap-1">
            <div
              onClick={handleBookmarkClick}
              className={`${user ? "cursor-pointer" : "cursor-not-allowed opacity-70"}`}
              title={user ? undefined : "Inicia sesión para guardar recursos"}
            >
              <BookmarkIconComponent marked={isBookmarked} />
            </div>
            {bookmarkCount}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={16} />
            {formattedDate}
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 shrink-0">
        <div className="flex flex-col items-center justify-center border border-gray-200 rounded-lg px-3 py-2">
          <MessageCircle size={16} className="text-black" />
          <span className="text-sm font-medium">{commentsCount}</span>
        </div>
        <div className="flex flex-col items-center justify-center border border-gray-200 rounded-lg px-3 py-2">
          <Triangle size={16} className="text-black" />
          <span className="text-sm font-medium">{votes ?? 0}</span>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
