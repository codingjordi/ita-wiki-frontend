import { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { IntResource } from "../types";
import { ListResources } from "../components/resources/ListResources";
import { getResources } from "../api/endPointResources";
import { categories } from "../data/categories";
import moock from "../moock/resources.json";

const ResourcesPage: FC = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [apiResources, setApiResources] = useState<IntResource[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!category) {
      navigate(`/resources/${categories[0]}`);
    }
  }, [category, navigate]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        setIsLoading(true);
        const data = await getResources();
        console.log("📌 Recursos en el estado después de getResources():", data); 
        setApiResources(data);
      } catch (error) {
        console.error(
          "No se han podido obtener los recursos. Se cargan los recursos de moock.",
          error,
        );
        setApiResources(moock.resources as IntResource[]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResources();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Obteniendo los recursos...</div>
      ) : (
        <ListResources
          resources={apiResources}
          category={category as keyof typeof categories | undefined}
        />
      )}
    </>
  );
};

export default ResourcesPage;
