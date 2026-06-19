import { useState } from "react";
import type { RequestBody } from "../types/RequestBody.interface";

const usePost = (endpoint: string, transformEndpoint?: (endpoint: string) => string) => {
  const [data, setData] = useState<null | unknown>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null|string>(null);

  async function execute<T>({ targetMethod, body, queryParams }: RequestBody): Promise<T> {
    const apiUrl = import.meta.env.VITE_API_URL;
    // Siempre usamos POST para enviar peticiones al gateway,
    // el targetMethod se envía en el body para que el gateway sepa qué método HTTP usar al hacer la petición al microservicio correspondiente
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}${transformEndpoint?.(endpoint) || endpoint}`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          targetMethod,
          body,
          queryParams
        })
      });
      const jsonResponse = await response.json() as T;
      if (!response.ok) {
        const errorMessage = (jsonResponse as unknown as { message?: string }).message || "Error en la solicitud";
        setError(errorMessage);
        throw new Error(errorMessage);
      }
      setData(jsonResponse);
      return jsonResponse;
      } catch (err) {
        console.error("Error in usePost:", err);
        setError((err as Error).message || "Error al realizar la solicitud");
        throw err;
      } finally {
        setLoading(false);
      }
  }

  return { data, loading, error, execute };

}

export default usePost;
