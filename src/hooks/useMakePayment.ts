import { useState } from "react";
import usePost from "./usePost";
import API_ENDPOINTS from "../services/endpoints";
import type { CartItem } from "../state/contexts/Cart.Context";

const useMakePayment = () => {
  const paymentEndpoint = API_ENDPOINTS.createOrder;
  const [order, setOrder] = useState<{ id: number } | null>(null);

  const { execute, loading, error: postError } = usePost(paymentEndpoint.url);
  const [paymentError, setPaymentError] = useState<null | string>(null);

  const makePayment = async (orderData: CartItem[]) => {
    setPaymentError(null);

    try {
      const responseData = await execute<{ id: number }>({
        targetMethod: paymentEndpoint.method,
        body: {
          supplies: orderData.map(item => ({
            id: item.id,
            quantity: item.quantity
          }))
        },
        queryParams: {}
      });

      if (responseData) {
        setOrder(responseData);
      }
    } catch (error: unknown) {
      console.error("Payment error:", error);
      setPaymentError((error as Error).message || "Error al realizar el pago");
    }
  };

  return { order, makePayment, loading, error: paymentError || postError };
};

export default useMakePayment;
