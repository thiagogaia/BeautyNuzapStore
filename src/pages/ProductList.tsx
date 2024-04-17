import { useContext, useEffect } from "react";
import { StoreContext } from "../contexts/Store";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import MainProductList from "../components/MainProductList";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const ProductList = () => {
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
          <MainProductList />
          <Footer />
        </>
      )}
    </>
  );
};

export default ProductList;
