import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";
import MainCart from "../components/MainCart";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../contexts/Store";
import Footer from "../components/Footer";
import WidgetWhatsapp from "../components/WidgetWhatsapp";

const Cart = () => {
  const { load, setStoreUri, storeData } = useContext(StoreContext);
  const { storeUri } = useParams();
  const [whatsapp, setWhatsapp] = useState("");

  useEffect(() => {
    if (storeUri !== undefined) {
      setStoreUri(storeUri);
      setWhatsapp(storeData.business?.social_integrations?.whatsapp_widget);
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
          <MainCart />
          {whatsapp?.length > 0 && <WidgetWhatsapp numero={whatsapp} />}
          <Footer />
        </>
      )}
    </>
  );
};

export default Cart;
