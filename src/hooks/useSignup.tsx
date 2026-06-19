import { useState } from "react";
import usePost from "./usePost";
import API_ENDPOINTS from "../services/endpoints";
import type { User } from "../types/User.interface";

const useSignup = () => {
  const signupEndpoint = API_ENDPOINTS.signup;
  const [user, setUser] = useState<User | null>(null);
  
  const { execute, loading, error: postError } = usePost(signupEndpoint.url);
  const [signupError, setSignupError] = useState<null|string>(null);

  const signup = async (name: string, email: string, password: string) => {
    setSignupError(null);
    
    try {
      const responseData = await execute<User>({
        targetMethod: signupEndpoint.method,
        body: { name, email, password },
        queryParams: {}
      });

      if (responseData) {
        setUser(responseData);
      }
    } catch (error: unknown) {
      setSignupError((error as Error).message || "Error al registrarse");
    }
  };

  return { user, signup, loading, error: signupError || postError };
};

export default useSignup;
