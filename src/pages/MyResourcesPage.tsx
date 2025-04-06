import { FC } from "react";
import { ListMyResources } from "../components/resources/ListMyResources";
import { useResources } from "../context/ResourcesContext";
import PageTitle from "../components/ui/PageTitle";
import { useCtxUser } from "../hooks/useCtxUser";

const MyResourcesPage: FC = () => {
  const { resources, isLoading } = useResources();
  const { user } = useCtxUser();

  const myResources = resources.filter(
    // 6729608
    (resource) => resource.github_id === 6729608
    // (resource) => resource.github_id === user.github_id
  );

  return (
    <>
      <PageTitle title="Recursos que he creado yo" />
      {isLoading ? (
        <div className="w-full max-w-screen-xl px-4 mx-auto py-10 text-center">
          Obteniendo los recursos...
        </div>
      ) : myResources.length > 0 ? (
        <div className="w-full max-w-screen-xl px-4 mx-auto grow lg:flex-1 gap-x-6 sm:bg-white lg:bg-transparent">
          <div className="flex flex-col lg:flex-row lg:flex-grow lg:overflow-y-auto bg-white lg:rounded-xl px-4 lg:px-8 py-4 sm:py-6">
            <div className="lg:flex-1 overflow-y-auto h-[calc(100vh-90px)] px-4 py-6 lg:pl-8 xl:pl-6">
              <div className="flex justify-between items-center">
                <h2 className="text-[26px] font-bold">
                  Los recursos que has creado
                </h2>
              </div>
              <ListMyResources myResources={myResources} />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-screen-xl px-4 mx-auto">
          <div className="bg-white lg:rounded-xl p-8 text-center">
            <h3 className="text-xl font-medium">
              No has creado ningún recurso
            </h3>
            <p className="text-gray-600 mt-2">Crea recursos para verlos aquí</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MyResourcesPage;
