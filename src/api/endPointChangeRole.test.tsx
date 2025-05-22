import { describe, it, expect, vi, beforeEach } from "vitest";
import { API_URL, END_POINTS } from "../config";
import {
  RoleChangeRequest,
  RoleChangeResponse,
  changeRole,
} from "./endPointChangeRole";
import * as getCurrentUserIdModule from "../utils/getCurrentUserId";
import * as endPointRolesModule from "./endPointRoles";

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

// Tests for the 422 error handling
describe("422 Error Handling", () => {
  const mockCurrentUserId = 9999;

  beforeEach(() => {
    vi.spyOn(getCurrentUserIdModule, "getCurrentUserId").mockReturnValue(
      mockCurrentUserId
    );

    vi.spyOn(endPointRolesModule, "createRole").mockResolvedValue({
      message: "Role created successfully",
      role: { github_id: mockCurrentUserId, role: "student" },
    });

    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 422,
      json: () => Promise.resolve({ message: "User not found" }),
    });
  });

  it("should attempt to create role when status is 422 and role is student", async () => {
    const studentRoleRequest = { github_id: 12345, role: "student" };

    const result = await changeRole(studentRoleRequest);

    expect(global.fetch).toHaveBeenCalledWith(
      `${API_URL}${END_POINTS.devTools.roleChange}`,
      expect.objectContaining({
        method: "PUT",
        body: JSON.stringify(studentRoleRequest),
      })
    );

    expect(getCurrentUserIdModule.getCurrentUserId).toHaveBeenCalled();

    expect(endPointRolesModule.createRole).toHaveBeenCalledWith({
      github_id: mockCurrentUserId,
      role: "student",
      authorized_github_id: 1,
    });

    expect(result).toEqual({
      message: "Role created successfully",
      role: { github_id: mockCurrentUserId, role: "student" },
    });
  });

  it("should attempt to create role when status is 422 and role is mentor", async () => {
    const mentorRoleRequest = { github_id: 12345, role: "mentor" };

    const result = await changeRole(mentorRoleRequest);

    expect(endPointRolesModule.createRole).toHaveBeenCalledWith({
      github_id: mockCurrentUserId,
      role: "mentor",
      authorized_github_id: 1,
    });

    expect(result).toEqual({
      message: "Role created successfully",
      role: { github_id: mockCurrentUserId, role: "student" },
    });
  });

  it("should not attempt to create role when status is 422 but role is admin", async () => {
    const adminRoleRequest = { github_id: 12345, role: "admin" };

    await expect(changeRole(adminRoleRequest)).rejects.toThrow(
      "User not found"
    );

    expect(global.fetch).toHaveBeenCalled();

    expect(endPointRolesModule.createRole).not.toHaveBeenCalled();
  });

  it("should not attempt to create role when status is 422 but role is superadmin", async () => {
    const superadminRoleRequest = { github_id: 12345, role: "superadmin" };

    await expect(changeRole(superadminRoleRequest)).rejects.toThrow(
      "User not found"
    );

    expect(endPointRolesModule.createRole).not.toHaveBeenCalled();
  });
});
