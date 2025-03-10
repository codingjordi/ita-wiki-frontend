import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { IntResource } from "../types";
import { ListResources } from "../components/resources/ListResources";
import { getResources } from "../api/endPointResources";
import { categories } from "../data/categories";

const ResourcesPage: FC = () => {
  const { category: categoryParam } = useParams();
  const [apiResources, setApiResources] = useState<IntResource[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getResources();
      setApiResources(() => data);
    })();
  }, []);

  const category =
    categoryParam && categoryParam in categories
      ? (categoryParam as keyof typeof categories)
      : undefined;

  return <ListResources resources={apiResources} category={category} />;
};

export default ResourcesPage;
