import { useContext } from "react";
import { ResourcesContext } from "../context/ResourcesContext";

export const useResources = () => useContext(ResourcesContext);
