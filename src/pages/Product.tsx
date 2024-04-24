import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainProductPage from "../components/MainProductPage";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../contexts/Store";
import Loading from "../components/Loading";
import WidgetWhatsapp from "../components/WidgetWhatsapp";

const Product = () => {
  const { load, setStoreUri, storeData } = useContext(StoreContext);
  const { storeUri } = useParams();
  const [whatsapp, setWhatsapp] = useState("");

  useEffect(() => {
    if (storeUri !== undefined) {
      setStoreUri(storeUri);
      setWhatsapp(storeData.business.social_integrations.whatsapp_widget);
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
          <MainProductPage />
          {whatsapp.length > 0 && <WidgetWhatsapp numero={whatsapp} />}

          <Footer />
        </>
      )}
    </>
  );
};

export default Product;
