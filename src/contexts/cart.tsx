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

  const addToCart = (product: IProductData | ICartProductData) => {
    const keys = [
      "id",
      "name",
      "price",
      "image",
      "imgUrl",
      "category",
      "code",
      "uri",
      "price_promo",
      "stock",
      "variation",
      "variation_name",
      "variation_id",
      "variation_item_id",
      "discount",
      "quantity",
    ];

    const newProduct = Object.entries(product)
      .filter(([key]) => keys.includes(key))
      .reduce<Record<keyof ICartProductData, unknown>>((obj, [key, value]) => {
        obj[key as keyof ICartProductData] = value;
        return obj;
      }, {} as ICartProductData) as ICartProductData;

    if (cart.length === 0) {
      setCart([...cart, { ...newProduct, quantity: 1 }]);
    } else {
      const cartIds = [...new Set(cart.map((prodCart) => prodCart.id))];
      const cartVaritionNames = [...new Set(cart.map((prodCart) => prodCart.variation_name))];

      if (cartIds.includes(newProduct.id)) {
        if (cartVaritionNames.includes(newProduct.variation_name)) {
          const updateCart = cart.map((prodCart) =>
            prodCart.variation_name === newProduct.variation_name
              ? { ...prodCart, quantity: prodCart.quantity + 1 }
              : prodCart
          );
          setCart(updateCart);
        } else {
          setCart([...cart, { ...newProduct, quantity: 1 }]);
        }
      } else {
        setCart([...cart, { ...newProduct, quantity: 1 }]);
      }
    }
  };

  const removeToCart = (variationName: string) => {
    const filtredProduct = cart.find((product) => product.variation_name === variationName);

    const { quantity } = filtredProduct as ICartProductData;

    if (quantity > 1) {
      const updateCart = cart.map((prod) =>
        prod.variation_name === variationName ? { ...prod, quantity: prod.quantity - 1 } : prod
      );
      setCart(updateCart);
    } else {
      excludeProduct(variationName);
    }
  };

  const excludeProduct = (variationName: string) => {
    const newList = cart.filter((e) => e.variation_name !== variationName);

    setCart(newList);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeToCart, excludeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
