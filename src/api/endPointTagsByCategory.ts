import { API_URL, END_POINTS } from "../config";
import { TagsByCategory } from "../types";

export const fetchTagsByCategory = async (): Promise<TagsByCategory> => {
    const url = `${API_URL}${END_POINTS.tags.categoryFrequency}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch tags by category");
    }

    return await response.json();
};
