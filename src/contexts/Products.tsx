import { createContext, useEffect, useState } from "react";
import { IProductsProviderData, IProviderProps } from "./types";
import { api } from "../services/api";

export const ProductsContext = createContext<IProductsProviderData>({} as IProductsProviderData);

const ProductsProvider = ({ children }: IProviderProps) => {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .get("/products?_url=joelik&_page=1&_limit=8")
      .then((res) => {
        // setProducts(res.data);
        // setLoading(false);

        console.log(res.data);
      })
      .catch(() => {});
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading }}>{children}</ProductsContext.Provider>
  );
};

export default ProductsProvider;
