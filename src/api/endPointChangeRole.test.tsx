import { changeRole } from './endPointChangeRole';
import { getUserRole } from './userApi';
import { createRole } from './endPointRoles';

jest.mock('./userApi', () => ({
  getUserRole: jest.fn(),
}));

jest.mock('./endPointRoles', () => ({
  createRole: jest.fn(),
}));

describe('changeRole', () => {
  const mockGithubId = 123;
  const mockRole = 'student';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new role for an anonymous user', async () => {
    (getUserRole as jest.Mock).mockResolvedValueOnce(null);
    (createRole as jest.Mock).mockResolvedValueOnce({
      message: 'Role created successfully',
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
      message: 'Role created successfully',
      role: {
        github_id: mockGithubId,
        role: mockRole,
      },
    });
  });

  it('should update role for a user with existing role', async () => {
    (getUserRole as jest.Mock).mockResolvedValueOnce('mentor');

    const request = {
      github_id: mockGithubId,
      role: 'admin',
    };

    const mockFetchResponse = {
      ok: true,
      json: async () => ({
        message: 'Role updated successfully',
        role: {
          github_id: mockGithubId,
          role: 'admin',
        },
      }),
    };

    global.fetch = jest.fn().mockResolvedValueOnce(mockFetchResponse);

    const response = await changeRole(request, mockGithubId);

    expect(getUserRole).toHaveBeenCalledWith(mockGithubId);
    expect(response).toEqual({
      message: 'Role updated successfully',
      role: {
        github_id: mockGithubId,
        role: 'admin',
      },
    });
  });
});
