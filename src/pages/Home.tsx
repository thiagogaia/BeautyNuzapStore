import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../contexts/Store";

import MainHome from "../components/MainHome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WidgetPrivacity from "../components/WidgetPrivacity";
import WidgetWhatsapp from "../components/WidgetWhatsapp";
import Loading from "../components/Loading";
import ProductsProvider from "../contexts/Products";

const Home: React.FC = () => {
  const { load, setStoreUri } = useContext(StoreContext);
  const { storeUri } = useParams<{ storeUri: string | undefined }>();

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
          <ProductsProvider>
            <MainHome />
          </ProductsProvider>
          <WidgetWhatsapp numero="5548991729419" />
          <WidgetPrivacity />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
