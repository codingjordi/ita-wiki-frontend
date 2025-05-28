import { useUserContext } from "../context/UserContext";

export const getCurrentUserId = (): number | null => {
    const { user } = useUserContext();
    return user?.id || null;
};