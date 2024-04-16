import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainProductPage from "../components/MainProductPage";
import { useContext, useEffect } from "react";
import { StoreContext } from "../contexts/Store";
import Loading from "../components/Loading";

const Product = () => {
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
          <MainProductPage />
          <Footer />
        </>
      )}
    </>
  );
};

export default Product;
