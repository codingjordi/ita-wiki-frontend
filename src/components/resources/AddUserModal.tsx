import React, { useState } from "react";
// import { useCtxUser } from "../../hooks/useCtxUser";
import ButtonComponent from "../atoms/ButtonComponent";
import { createRole } from "../../api/endPointRoles";

interface AddUsersModalProps {
  onClose: () => void;
  userRole: string;
  userID: number | string;
}

const rolePermissions = {
  superadmin: ["admin", "mentor", "student"],
  admin: ["mentor", "student"],
  mentor: ["student"],
};

export const AddUsersModal: React.FC<AddUsersModalProps> = ({ onClose, userRole, userID }) => {
  const [githubId, setGithubId] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  // Get available roles based on the user's role
  const availableRoles = rolePermissions[userRole as keyof typeof rolePermissions] || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const requestBody = {
      authorized_github_id: Number(userID),
      github_id: Number(githubId),
      role: selectedRole
    };
    createRole(requestBody);
    console.log(requestBody);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add Users</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Github ID
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter ID"
              value={githubId}
              onChange={(e) => setGithubId(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              id="role"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              required
            >
              <option value="">Select a role</option>
              {availableRoles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-2">
            <ButtonComponent type="button" variant="secondary" onClick={onClose}>
              Cancel
            </ButtonComponent>
            <ButtonComponent type="submit" variant="primary">
              Add User
            </ButtonComponent>
          </div>
        </form>
      </div>
    </div>
  );
};
