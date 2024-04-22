import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";
import MainCart from "../components/MainCart";
import { useContext, useEffect } from "react";
import { StoreContext } from "../contexts/Store";
import Footer from "../components/Footer";
import CartProvider from "../contexts/cart";

const Cart = () => {
  const { load, setStoreUri } = useContext(StoreContext);
  const { storeUri } = useParams();

  useEffect(() => {
    if (storeUri !== undefined) {
      setStoreUri(storeUri);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <>
          <Header />
          <CartProvider>
            <MainCart />
          </CartProvider>
          <Footer />
        </>
      )}
    </>
  );
};

export default Cart;
