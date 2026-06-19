import { useCallback, useState } from "react";
import usePost from "./usePost";
import API_ENDPOINTS from "../services/endpoints";
import type { Book } from "../types/Book.interface";

const useGetSupplyById = (id: string) => {
  const catalogEndpoint = API_ENDPOINTS.getSupplyById;
  const [supply, setSupply] = useState<Book | null>(null);

  const { execute, loading, error: postError } = usePost(catalogEndpoint.url, endpoint => endpoint.replace(":id", id));
  const [loginError, setLoginError] = useState<null | string>(null);

  const fetchSupply = useCallback(async () => {
    setLoginError(null);

    try {
      const responseData = await execute<Book>({
        targetMethod: catalogEndpoint.method,
        body: {},
        queryParams: {}
      });

      if (responseData) {
        setSupply(responseData);
      }
    } catch (error: unknown) {
      console.error("error:", error);
      setLoginError((error as Error).message || "Error al cargar libro");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { supply, fetchSupply, loading, error: loginError || postError };
};

export default useGetSupplyById;
