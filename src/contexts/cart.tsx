import { createContext, useContext, useEffect, useState } from "react";
import { ICartProductData, ICartProviderData, IProductData, IProviderProps } from "./types";
import { StoreContext } from "./Store";

export const CartContext = createContext<ICartProviderData>({} as ICartProviderData);

const CartProvider = ({ children }: IProviderProps) => {
  const { storeUri } = useContext(StoreContext);
  const [cart, setCart] = useState<ICartProductData[]>([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem(`cart-${storeUri}`) || "[]"));

    return () => {};
  }, [storeUri]);

  useEffect(() => {
    localStorage.setItem(`cart-${storeUri}`, JSON.stringify(cart));

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const addToCart = (product: IProductData) => {
    if (cart.length === 0) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      const idCart = [...new Set(cart.map((prodCart) => prodCart.id))];

      if (idCart.includes(product.id)) {
        const updateCart = cart.map((prodCart) =>
          prodCart.id === product.id ? { ...prodCart, quantity: prodCart.quantity + 1 } : prodCart
        );
        setCart(updateCart);
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    }
  };

  const removeToCart = (productId: string) => {
    const filtredProduct = cart.find((product) => product.id === productId);
    const { quantity } = filtredProduct as ICartProductData;

    if (quantity > 1) {
      const updateCart = cart.map((prod) =>
        prod.id === productId ? { ...prod, quantity: prod.quantity - 1 } : prod
      );
      setCart(updateCart);
    } else {
      excludeProduct(productId);
    }
  };

  const excludeProduct = (productId: string) => {
    const newList = cart.filter((e) => e.id !== productId);

    setCart(newList);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeToCart, excludeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
