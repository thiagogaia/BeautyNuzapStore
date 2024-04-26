import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../contexts/Store";

import MainHome from "../components/MainHome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WidgetPrivacity from "../components/WidgetPrivacity";
import WidgetWhatsapp from "../components/WidgetWhatsapp";
import Loading from "../components/Loading";

const Home: React.FC = () => {
  const { load, setStoreUri, storeData } = useContext(StoreContext);
  const { storeUri } = useParams<{ storeUri: string | undefined }>();
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
          <MainHome />
          {whatsapp?.length > 0 && <WidgetWhatsapp numero={whatsapp} />}
          <WidgetPrivacity />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
