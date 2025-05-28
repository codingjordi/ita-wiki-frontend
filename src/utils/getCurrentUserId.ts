/*
 * Wrapper function to get the current user's GitHub ID
 * allowing us to easily change the source
 * when we switch from localStorage to context
 */

//TODO: Refactor this function to use the context instead of localStorage

import { useUserContext } from "../context/UserContext";

export const getCurrentUserId = (): number | null => {
    const { user } = useUserContext();
    return user?.id || null;
};
