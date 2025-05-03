import { API_URL, END_POINTS } from "../config";
import { Like } from "../types";

export const getLikes = async (github_id: number): Promise<Like[]> => {
  const url = `${API_URL}${END_POINTS.likes.get}/${github_id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error("Error fetching likes:", error);
    return [];
  }
};

export const createLike = async (github_id: number, resource_id: number): Promise<Like> => {
  const url = `${API_URL}${END_POINTS.likes.post}`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ github_id, resource_id }),
    });

    if (!response.ok) throw new Error("Error creating like");
    return await response.json();
  } catch (error) {
    console.error("Error creating like:", error);
    throw error;
  }
};

export const deleteLike = async (github_id: number, resource_id: number): Promise<boolean> => {
  const url = `${API_URL}${END_POINTS.likes.delete}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ github_id, resource_id }),
    });

    return response.ok;
  } catch (error) {
    console.error("Error deleting like:", error);
    return false;
  }
};
