import { ReactNode } from "react";

export interface IProviderProps {
  children: ReactNode;
}

export interface IProductsProviderData {
  products: object;
  loading: boolean;
}
