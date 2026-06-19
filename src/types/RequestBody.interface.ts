import type { IHttpMethod } from "./HttpMethods.inteface";

export interface RequestBody {
  targetMethod: IHttpMethod;
  body: Record<string, unknown>;
  queryParams: Record<string, unknown>;
}
