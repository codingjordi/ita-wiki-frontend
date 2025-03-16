
const API_URL = import.meta.env.VITE_API_URL;

export const getUserRole = async (githubId: number): Promise<string> => {
  try {
    const response = await fetch(
      `${API_URL}login?github_id=${githubId}`,
    );

    //TO-DO: poner AbortController()

    if (!response.ok) return "anonymous" // provisional fix 
    const data = await response.json();
    return data.role?.role;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || "Error during fetching user role. Please, try again 👾");
    }

    throw new Error("Something went wrong, sis. Please, try again 👾");
  }
};