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
      <section
        role="resource"
        data-testid="list-resources"
        className="flex flex-col gap-2 p-4"
      >
        <h2 className="py-4 text-4xl">Recursos {technology}</h2>
        <ul className="flex flex-col gap-2">
          {resources.map((resource: IntResource) => (
            <Resource key={resource.id} resource={resource} />
          ))}
        </ul>
      </section>
    )
  );
};
//
