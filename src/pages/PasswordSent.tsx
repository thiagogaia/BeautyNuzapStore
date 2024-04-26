import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../contexts/Store";
import { useParams } from "react-router-dom";

import Loading from "../components/Loading";
import Header from "../components/Header";
import MainPasswordSent from "../components/MainPasswordSent";
import WidgetWhatsapp from "../components/WidgetWhatsapp";
import Footer from "../components/Footer";

const PasswordSent = () => {
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
          <MainPasswordSent />
          {whatsapp?.length > 0 && <WidgetWhatsapp numero={whatsapp} />}
          <Footer />
        </>
      )}
    </>
  );
};

export default PasswordSent;
