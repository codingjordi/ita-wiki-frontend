import { API_URL, END_POINTS } from "../config";

interface RoleChangeRequest {
    authorized_github_id: number; //TEMPORAL
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

const changeRole = async (body: RoleChangeRequest): Promise<RoleChangeResponse> => {
    const controller = new AbortController();
    const signal = controller.signal;
    const timeout = setTimeout(() => controller.abort(), 10000);

    try {
        const url = `${API_URL}${END_POINTS.roles.put}`; //TEMPORAL

        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
            signal
        });

        clearTimeout(timeout);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
                errorData.message || `Error ${response.status}: ${response.statusText}`,
            );
        };

        const data = await response.json();

        // Succesful
        if (data && typeof data === "object") {
            //EMPIEZA TEMPORAL
            if (data.message) {
                return {
                    message: data.message,
                    role: {
                        github_id: body.github_id,
                        role: body.role
                    }
                };
            }
            //TERMINA TEMPORAL
            
            if (data.role) {
                return data.role as RoleChangeResponse;
            };

            if (data.error) {
                throw new Error(`API Error: ${data.error}`)
            };
        };

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
