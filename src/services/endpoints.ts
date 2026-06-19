import type { IHttpMethod } from "../types/HttpMethods.inteface";

const API_ENDPOINTS = {
  login: {
    method: 'POST',
    url: 'users/api/v1/token'
  },
  logout: {
    method: 'DELETE',
    url: 'users/api/v1/token'
  },
  signup: {
    method: 'POST',
    url: 'users/api/v1/users'
  },
  catalog: {
    method: 'GET',
    url: 'catalog/api/v1/supplies'
  },
  getSupplyById: {
    method: 'GET',
    url: 'catalog/api/v1/supplies/:id'
  },
  createOrder: {
    method: 'POST',
    url: 'orders/api/v1/orders'
  },
  getOrders: {
    method: 'GET',
    url: 'orders/api/v1/orders'
  },
  getUserOrders: {
    method: 'GET',
    url: 'orders/api/v1/orders/user'
  }
} as Record<string, { method: IHttpMethod; url: string }>;

export default API_ENDPOINTS;