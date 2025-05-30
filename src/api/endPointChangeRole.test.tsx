import { changeRole } from "./endPointChangeRole";
import { getUserRole } from "./userApi";
import { createRole } from "./endPointRoles";
import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("./userApi", () => ({
  getUserRole: vi.fn(),
}));

vi.mock("./endPointRoles", () => ({
  createRole: vi.fn(),
}));

describe("changeRole", () => {
  const mockGithubId = 123;
  const mockRole = "student";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should create a new role for an anonymous user", async () => {
    (getUserRole as vi.Mock).mockResolvedValueOnce(null);
    (createRole as vi.Mock).mockResolvedValueOnce({
      message: "Role created successfully",
      role: {
        github_id: mockGithubId,
        role: mockRole,
      },
    });

    const request = {
      github_id: mockGithubId,
      role: mockRole,
    };

    const response = await changeRole(request, mockGithubId);

    expect(getUserRole).toHaveBeenCalledWith(mockGithubId);
    expect(createRole).toHaveBeenCalledWith({
      github_id: mockGithubId,
      role: mockRole,
      authorized_github_id: 1,
    });
    expect(response).toEqual({
      message: "Role created successfully",
      role: {
        github_id: mockGithubId,
        role: mockRole,
      },
    });
  });

  it("should update role for a user with existing role", async () => {
    (getUserRole as vi.Mock).mockResolvedValueOnce("mentor");

    const request = {
      github_id: mockGithubId,
      role: "admin",
    };

    const mockFetchResponse = {
      ok: true,
      json: async () => ({
        message: "Role updated successfully",
        role: {
          github_id: mockGithubId,
          role: "admin",
        },
      }),
    };

    global.fetch = vi.fn().mockResolvedValueOnce(mockFetchResponse);

    const response = await changeRole(request, mockGithubId);

    expect(getUserRole).toHaveBeenCalledWith(mockGithubId);
    expect(response).toEqual({
      message: "Role updated successfully",
      role: {
        github_id: mockGithubId,
        role: "admin",
      },
    });
  });
});
