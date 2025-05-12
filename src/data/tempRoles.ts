//This is a temporal solution until backend endpoint GET roles.

import { IntUser } from '../types';

export const roles = {
    SUPERADMIN: 'superadmin',
    ADMIN: 'admin',
    MENTOR: 'mentor',
    STUDENT: 'student',
    ANONYMOUS: 'anonymous'
} as const;

export type Role = IntUser['role'];

export const bookmarkPermissionRoles: Role[] = [
    roles.SUPERADMIN,
    roles.STUDENT,
];

export const canBookmark = (userRole: Role | null): boolean => {
    return userRole !== null && userRole !== undefined && bookmarkPermissionRoles.includes(userRole);
};