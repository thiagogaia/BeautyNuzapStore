import { FC, PropsWithChildren } from "react";
import StoreProvider from "./Store";
import ProductsProvider from "./Products";
import CartProvider from "./cart";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreProvider>
      <CartProvider>
        <ProductsProvider>{children}</ProductsProvider>
      </CartProvider>
    </StoreProvider>
  );
};

export default Providers;
