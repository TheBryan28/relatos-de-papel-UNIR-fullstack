import { useState } from "react";
import usePost from "./usePost";
import API_ENDPOINTS from "../services/endpoints";
import type { User } from "../types/User.interface";

const useLogout = () => {
  const logoutEndpoint = API_ENDPOINTS.logout;

  const { execute, loading, error: postError } = usePost(logoutEndpoint.url);
  const [logoutError, setLogoutError] = useState<null | string>(null);

  const logout = async () => {
    setLogoutError(null);

    try {
      await execute<User>({
        targetMethod: logoutEndpoint.method,
        body: {},
        queryParams: {}
      });
    } catch (error: unknown) {
      console.error("Logout error:", error);
      setLogoutError((error as Error).message || "Error al cerrar sesión");
    }
  };

  return { logout, loading, error: logoutError || postError };
};

export default useLogout;
