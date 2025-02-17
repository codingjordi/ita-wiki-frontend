import { FC } from "react";
import { Resource } from "./Resource";
import { IntResource } from "../../types";
interface ListResourcesProps {
  resources: IntResource[],
  nameResource: string
}
export const ListResources: FC<ListResourcesProps> = ({ resources, nameResource }) => {

  return (
    resources && <section role="resource" data-testid="list-resources" className="flex flex-col gap-2 p-4">
      <h2 className="py-4 text-4xl">Recursos  {nameResource}</h2>
      <ul className="flex flex-col gap-2">
        {resources.map((resource: IntResource) => <Resource key={resource.resource_id} resource={resource} />)}
      </ul>
    </section>
  )
}
