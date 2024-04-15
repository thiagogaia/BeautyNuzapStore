import { FC, PropsWithChildren } from "react";
import StoreProvider from "./Store";
import ProductsProvider from "./Products";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </StoreProvider>
  );
};

export default Providers;
