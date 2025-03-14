import { API_URL, END_POINTS } from "../config";
import { Bookmark, Message } from "../types";




const getBookmarks = async (github_id: string): Promise<Bookmark[]> => {
    const url = `${API_URL}/${END_POINTS.bookmarks.get}${github_id}`;
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            return [];
        }
        return await response.json();
    } catch {
        throw new Error("No se pudieron obtener los bookmarks");
    }
}

const createNewBookmark = async (
    github_id: string,
    resource_id: string
): Promise<Bookmark> => {
    const url = `${API_URL}/${END_POINTS.bookmarks.post}`;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ github_id, resource_id }),
        });

        if (!response.ok) {
            throw new Error("Error al crear el bookmark");
        }

        return await response.json(); // Devuelve el bookmark creado
    } catch {
        throw new Error("Error al crear el bookmark");
    }
}

const deleteBookmark = async (
    github_id: string,
    resource_id: string
): Promise<Message> => {
    const url = `${API_URL}/${END_POINTS.bookmarks.delete}`;
    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ github_id, resource_id }),
        });

        if (!response.ok) {
            console.warn(`Error ${response.status}: ${response.statusText}`);
            throw new Error("Error al eliminar el bookmark");
        }

        return await response.json(); // Devuelve el mensaje de confirmación
    } catch {
        throw new Error("Error al eliminar el bookmark");
    }
}

export { getBookmarks, createNewBookmark, deleteBookmark }

