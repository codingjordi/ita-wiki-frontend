import { FC } from "react";
import { ListBookmarks } from "../components/resources/ListBookmarks";
import { useResources } from "../context/ResourcesContext";
import PageTitle from "../components/ui/PageTitle";

const BookmarksPage: FC = () => {
  const {
    resources,
    isLoading,
    isBookmarked,
    toggleBookmark: toggleBookmarkInContext,
  } = useResources();

  const bookmarkedResources = resources.filter((resource) =>
    isBookmarked(resource)
  );

  return (
    <>
      <PageTitle title="Recursos guardados en mi lista de lectura" />
      {isLoading ? (
        <div className="w-full max-w-screen-xl px-4 mx-auto py-10 text-center">
          Obteniendo la lista de lectura...
        </div>
      ) : bookmarkedResources.length > 0 ? (
        <div className="w-full max-w-screen-xl px-4 mx-auto grow lg:flex-1 gap-x-6 sm:bg-white lg:bg-transparent">
          <div className="flex flex-col lg:flex-row lg:flex-grow lg:overflow-y-auto bg-white lg:rounded-xl px-4 lg:px-8 py-4 sm:py-6">
            <div className="lg:flex-1 overflow-y-auto h-[calc(100vh-90px)] px-4 py-6 lg:pl-8 xl:pl-6">
              <div className="flex justify-between items-center">
                <h2 className="text-[26px] font-bold">Tu lista de lectura</h2>
              </div>
              <ListBookmarks
                bookmarkedResources={bookmarkedResources}
                toggleBookmark={(resource) => toggleBookmarkInContext(resource)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-screen-xl px-4 mx-auto">
          <div className="bg-white lg:rounded-xl p-8 text-center">
            <h3 className="text-xl font-medium">
              No tienes recursos guardados
            </h3>
            <p className="text-gray-600 mt-2">
              Marca recursos como favoritos para verlos aquí
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default BookmarksPage;
