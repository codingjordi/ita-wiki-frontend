import { FC } from "react";
import { Resource } from "./Resource";
import { IntResource, TypTechnologyResource } from "../../types";

interface ListResourceProps {
  resources: IntResource[];
  technology?: TypTechnologyResource;
}
export const ListResources: FC<ListResourceProps> = ({
  resources,
  technology,
}) => {
  return (
    resources && (
      <div className="mx-auto w-full grow lg:flex xl:px-2 gap-x-6 sm:bg-white lg:bg-transparent">
        <div className="flex-1 xl:flex bg-white rounded-xl px-8 py-6">
          <div className="px-4 py-6 sm:px-6 lg:pl-8 lg:w-80 xl:shrink-0 xl:pl-6">
            Filtros
          </div>

          <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
            <h2 className="py-4 text-4xl">Recursos {technology}</h2>
            <ul className="flex flex-col gap-2">
              {resources.map((resource: IntResource) => (
                <Resource key={resource.id} resource={resource} />
              ))}
            </ul>
          </div>
        </div>

        <div className="shrink-0 lg:w-80 space-y-6">
          <div className="bg-white rounded-xl px-4 py-6 sm:px-6 lg:pl-8 xl:shrink-0 xl:pl-6">
            Lista de lectura
          </div>
          <div className="bg-white rounded-xl px-4 py-6 sm:px-6 lg:pl-8 xl:shrink-0 xl:pl-6">
            Mis recursos
          </div>
        </div>
      </div>
    )
  );
};
