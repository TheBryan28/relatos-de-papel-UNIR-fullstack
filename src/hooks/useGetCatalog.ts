import { useCallback, useState } from "react";
import usePost from "./usePost";
import API_ENDPOINTS from "../services/endpoints";
import type { Book } from "../types/Book.interface";
import type { BookFilters } from "../types/BookFilters.interface";

const useGetCatalog = () => {
  const catalogEndpoint = API_ENDPOINTS.catalog;
  const [books, setBooks] = useState<Book[] | null>(null);

  const { execute, loading, error: postError } = usePost(catalogEndpoint.url);
  const [loginError, setLoginError] = useState<null | string>(null);

  const fetchSupplies = useCallback(async (filters: BookFilters) => {
    setLoginError(null);

    const queryParamsMapped = Object.entries(filters).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = [value];
      }
      return acc;
    }, {} as Record<string, unknown>);


    try {
      const responseData = await execute<{ supplies: Book[] }>({
        targetMethod: catalogEndpoint.method,
        body: {},
        queryParams: queryParamsMapped
      });

      if (responseData) {
        setBooks(responseData.supplies);
      }
    } catch (error: unknown) {
      console.error("error:", error);
      setLoginError((error as Error).message || "Error al cargar libros");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { books, fetchSupplies, loading, error: loginError || postError };
};

export default useGetCatalog;
