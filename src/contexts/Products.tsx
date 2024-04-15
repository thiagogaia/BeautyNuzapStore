import { createContext, useEffect, useState } from "react";
import { IProductsProviderData, IProviderProps } from "./types";
import { api } from "../services/api";

export const ProductsContext = createContext<IProductsProviderData>({} as IProductsProviderData);

const ProductsProvider = ({ children }: IProviderProps) => {
  const [productList, setProductList] = useState([]);
  const [storeUri, setStoreUri] = useState("");
  const [load, setLoad] = useState(true);

  useEffect(() => {
    api
      .get(`/products?_url=${storeUri}&_page=1&_limit=8`)
      .then((res) => {
        if (typeof res.data !== "string") {
          setLoad(false);
          setProductList(res.data);
        }
      })
      .catch(() => {});

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeUri]);

  return (
    <ProductsContext.Provider value={{ load, productList, setStoreUri }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
