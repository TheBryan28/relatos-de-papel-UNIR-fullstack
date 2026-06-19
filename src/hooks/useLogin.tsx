import { useState } from "react";
import usePost from "./usePost";
import API_ENDPOINTS from "../services/endpoints";
import type { User } from "../types/User.interface";

const useLogin = () => {
  const loginEndpoint = API_ENDPOINTS.login;
  const [user, setUser] = useState<User | null>(null);
  
  const { execute, loading, error: postError } = usePost(loginEndpoint.url);
  const [loginError, setLoginError] = useState<null|string>(null);

  const login = async (username: string, password: string) => {
    setLoginError(null);
    
    try {
      const responseData = await execute<User>({
        targetMethod: loginEndpoint.method,
        body: { username, password },
        queryParams: {}
      });

      if (responseData) {
        setUser(responseData);
      }
    } catch (error: unknown) {
      console.error("Login error:", error);
      setLoginError((error as Error).message || "Error al iniciar sesión");
    }
  };

  return { user, login, loading, error: loginError || postError };
};

export default useLogin;
