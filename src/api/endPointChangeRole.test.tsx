import { describe, it, expect, vi, beforeEach } from "vitest";
import { API_URL, END_POINTS } from "../config";
import {
  RoleChangeRequest,
  RoleChangeResponse,
  changeRole,
} from "./endPointChangeRole";

beforeEach(() => {
  vi.spyOn(console, "error").mockImplementation(() => {});
  vi.spyOn(console, "log").mockImplementation(() => {});
  vi.spyOn(console, "warn").mockImplementation(() => {});
});

describe("changeRole", () => {
  const mockRoleRequest: RoleChangeRequest = {
    github_id: 12345,
    role: "mentor",
  };
  const mockRoleResponse: RoleChangeResponse = {
    message: "Role updated successfully",
    role: { github_id: 12345, role: "mentor" },
  };

  it("should change role successfully", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockRoleResponse),
    });

    const result = await changeRole(mockRoleRequest);

    expect(global.fetch).toHaveBeenCalledWith(
      `${API_URL}${END_POINTS.devTools.roleChange}`, //Temporary
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mockRoleRequest),
        signal: expect.any(AbortSignal),
      },
    );
    expect(result).toEqual(mockRoleResponse);
  });

  it("should throw error on fetch failure", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    await expect(changeRole(mockRoleRequest)).rejects.toThrow("Network error");
  });

  it("should throw error when API returns error field", async () => {
    const errorResponse = {
      error: "Invalid role specified",
    };

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(errorResponse),
    });

    await expect(changeRole(mockRoleRequest)).rejects.toThrow(
      "API Error: Invalid role specified",
    );
  });

  it("should handle AbortError on timeout", async () => {
    const abortError = new DOMException(
      "The operation was aborted",
      "AbortError",
    );
    global.fetch = vi.fn().mockRejectedValue(abortError);

    await expect(changeRole(mockRoleRequest)).rejects.toThrow(
      "The operation was aborted",
    );

    expect(console.warn).toHaveBeenCalledWith("Petition cancelled.");
  });
});
