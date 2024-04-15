import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../contexts/Store";
// import { ProductsContext } from "../contexts/Products";

import MainHome from "../components/MainHome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WidgetPrivacity from "../components/WidgetPrivacity";
import WidgetWhatsapp from "../components/WidgetWhatsapp";
import Loading from "../components/Loading";

const Home = () => {
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
          <MainHome />
          <WidgetWhatsapp numero="5548991729419" />
          <WidgetPrivacity />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
