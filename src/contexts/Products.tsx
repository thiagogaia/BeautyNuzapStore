import { createContext, useContext, useEffect, useState } from "react";
import { IProductsProviderData, IProviderProps, IProductData } from "./types";
import { api } from "../services/api";
import { StoreContext } from "./Store";

export const ProductsContext = createContext<IProductsProviderData>({} as IProductsProviderData);

const ProductsProvider = ({ children }: IProviderProps) => {
  const [productList, setProductList] = useState([] as IProductData[]);
  const { storeUri } = useContext(StoreContext);

  useEffect(() => {
    if (storeUri.length > 0) {
      api
        .get(`/products?_url=${storeUri}&_page=1&_limit=8`)
        .then((res) => {
          setProductList(res.data);
        })
        .catch(() => {});
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeUri]);

  // getProduct("saia-juliana-paes-1708711257");

  return <ProductsContext.Provider value={{ productList }}>{children}</ProductsContext.Provider>;
};

export default ProductsProvider;
