import { useContext, useEffect, useState } from "react";
import MainHome from "../components/MainHome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WidgetPrivacity from "../components/WidgetPrivacity";
import WidgetWhatsapp from "../components/WidgetWhatsapp";
import { useParams } from "react-router-dom";

const Home = () => {
  const { storeUri } = useParams();

  /* useEffect(() => {
    window.scrollTo(0, 0);
    api.get(`/users/${user_id}`).then((res) => {
      const data: IUserData = res.data;
      const vehicles = data.vehicles.map((vehicle) => ({
        ...vehicle,
        owner: data,
      }));

      setUserData(data);

      setCars(vehicles.filter(({ type, sellType }) => type === "CARRO" && sellType === "VENDA"));
      setMotorbikes(
        vehicles.filter(({ type, sellType }) => type === "MOTO" && sellType === "VENDA")
      );

      setAuction(vehicles.filter(({ sellType }) => sellType === "LEILÃO"));

      setLoading(false);
    });

    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeUri]); */
  return (
    <>
      <Header />
      <MainHome />
      <WidgetWhatsapp numero="5548991729419" />
      <WidgetPrivacity />
      <Footer />
    </>
  );
};

export default Home;
