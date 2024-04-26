import { createContext, useEffect, useState } from "react";
import { IStoreProviderData, IProviderProps, IStoreData, IProductData } from "./types";
import { api } from "../services/api";

export const StoreContext = createContext<IStoreProviderData>({} as IStoreProviderData);

const StoreProvider = ({ children }: IProviderProps) => {
  const [storeData, setStoreData] = useState({} as IStoreData);
  const [productList, setProductList] = useState([] as IProductData[]);
  const [productListPromo, setProductListPromo] = useState([] as IProductData[]);
  const [productListRelease, setProductListRelease] = useState([] as IProductData[]);
  const [storeUri, setStoreUri] = useState("");
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (storeUri.length > 0) {
      api
        .get(`store-api/${storeUri}`)
        .then((res) => {
          setLoad(false);
          setStoreData(res.data);
        })
        .catch(() => {});
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeUri]);

  useEffect(() => {
    if (storeUri.length > 0) {
      api
        .get(`/products?_url=${storeUri}&_page=1&_limit=8`)
        .then((res) => {
          setProductList(res.data);
        })
        .catch(() => {});

      api
        .get(`/products?_url=${storeUri}&_page=1&_limit=8&_product_price=promo`)
        .then((res) => {
          setProductListPromo(res.data);
        })
        .catch(() => {});

      api
        .get(`/products?_url=${storeUri}&_page=1&_limit=8&_product_type=release`)
        .then((res) => {
          setProductListRelease(res.data);
        })
        .catch(() => {});
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeUri]);

  return (
    <StoreContext.Provider
      value={{
        load,
        storeData,
        productList,
        productListPromo,
        productListRelease,
        storeUri,
        setStoreUri,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
