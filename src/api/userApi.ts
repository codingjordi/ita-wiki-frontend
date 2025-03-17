const API_URL = import.meta.env.VITE_API_URL;

export const getUserRole = async (githubId: number): Promise<string> => {
  try {
    const response = await fetch(`${API_URL}login?github_id=${githubId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    //TO-DO: poner AbortController()

    if (!response.ok) return "anonymous"; // provisional fix since the BE doesnt retourn 'anonymous'
    // (BE currently return 'null' if user has no role in the DB)
    const data = await response.json();
    return data.role?.role;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(
        error.message ||
          "Error during fetching user role. Please, try again 👾",
      );
    }

    throw new Error("Something went wrong, sis. Please, try again 👾");
  }
};
