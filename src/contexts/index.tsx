import { FC, PropsWithChildren } from "react";
import ProductsProvider from "./Products";

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ProductsProvider>{children}</ProductsProvider>;
};

export default ContextProvider;
