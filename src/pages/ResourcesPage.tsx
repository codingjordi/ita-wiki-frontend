import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { IntResource, TypTechnologyResource } from "../types";
import { ListResources } from "../components/resources/ListResources";
import { getResources } from "../api/endPointResources";

const ResourcesPage: FC = () => {
  const { technology } = useParams();
  const [apiResources, setApiResources] = useState<IntResource[]>([]);
  const tech = technology as TypTechnologyResource;
  useEffect(() => {
    (async () => {
      const data = await getResources();
      setApiResources(() => data);
    })();
  }, []);

  return (<ListResources resources={apiResources} technology={tech} />)
}

export default ResourcesPage;
