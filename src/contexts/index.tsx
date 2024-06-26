import { FC, PropsWithChildren } from "react";
import StoreProvider from "./Store";
import CartProvider from "./cart";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreProvider>
      <CartProvider>{children}</CartProvider>
    </StoreProvider>
  );
};

export default Providers;
