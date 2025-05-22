import { API_URL, END_POINTS } from "../config";
import { getCurrentUserId } from "../utils/getCurrentUserId";
import { createRole } from "./endPointRoles";

interface RoleChangeRequest {
  github_id: number;
  role: string;
}

interface RoleChangeResponse {
  message: string;
  role: {
    github_id: number;
    role: string;
  };
}

const changeRole = async (
  body: RoleChangeRequest,
): Promise<RoleChangeResponse> => {
  const controller = new AbortController();
  const signal = controller.signal;
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const url = `${API_URL}${END_POINTS.devTools.roleChange}`;

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal,
    });

    clearTimeout(timeout);

    // Handle 422 error - User id not found in the database
    if (response.status === 422 && ["student", "mentor"].includes(body.role)) {
      try {
        const GithubId = getCurrentUserId();
        if (!GithubId) {
          throw new Error("No user ID found on localStorage/context.");
        }

        const createRoleRequest = {
          github_id: GithubId,
          role: body.role,
          authorized_github_id: 1,
        };
        const result = await createRole(createRoleRequest);

        return result;
      } catch (fallbackError) {
        console.error("Fallback role creation error:", fallbackError);
        throw fallbackError;
      }
    }

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `Error ${response.status}: ${response.statusText}`,
      );
    }

    const data = await response.json();

    // Succesful
    if (data && typeof data === "object") {
      if (
        data.message &&
        data.role &&
        typeof data === "object" &&
        "github_id" in data.role &&
        "role" in data.role
      ) {
        return data as RoleChangeResponse;
      }

      if (data.error) {
        throw new Error(`API Error: ${data.error}`);
      }
    }

    //  Unexpected
    throw new Error("Unexpected response from API.");
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      console.warn("Petition cancelled.");
    }
    console.error("changeRole error:", error);
    throw error;
  }
};

export type { RoleChangeRequest, RoleChangeResponse };
export { changeRole };
