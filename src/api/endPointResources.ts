import { API_URL, END_POINTS } from "../config";
import { IntResource } from "../types";
import moock from "../moock/resources.json";
import { API_URL, END_POINTS } from "../config";
import { IntResource } from "../types";
import moock from "../moock/resources.json";

const moockResources = moock.resources.map(
  (resource) =>
    ({
      ...resource,
      create_at: "2025-02-25 00:00:00",
      update_at: "2025-02-25 00:00:00",
    }) as IntResource,
);
const moockResources = moock.resources.map(
  (resource) =>
    ({
      ...resource,
      create_at: "2025-02-25 00:00:00",
      update_at: "2025-02-25 00:00:00",
    }) as IntResource,
);

const getResources = async () => {
  try {
    const url = `${API_URL}${END_POINTS.resources.lists}`;
    const request = await fetch(url);
    const url = `${API_URL}${END_POINTS.resources.lists}`;
    const request = await fetch(url);
    const ok = request.ok;
    if (!ok) return moockResources;
    const data = await request.json();
    return data;
    if (!ok) return moockResources;
    const data = await request.json();
    return data;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
    const err = error as Error;
    throw new Error(err.message);
  }
};

export {
  getResources
}