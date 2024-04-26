import "./style.css";

import Slider from "./slider";
import PaymentMethods from "./paymentMethods";
import CardProduct from "../CardProduct";
import { useContext } from "react";
import { StoreContext } from "../../contexts/Store";

const MainHome = () => {
  const { productList } = useContext(StoreContext);

  return (
    <>
      <main id="principal" className="principal tail-principal ev-principal">
        <article id="conteudo" className="conteudo">
          <div className="cont-menu">
            <div className="cont-separador cont-separador-120  esconder-dk esconder-mn " />
            <Slider />

            <div className="cont-separador cont-separador-40" />
            <PaymentMethods />

            <div className="cont-separador cont-separador-427 cont-alt-md " />
            <div className="cont-limite cont-limite-40">
              <ul className="tail-listagem-prod-lista js-tail-listagem-prod-lista js-tail-paginacao-busca-lista flex-grow grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                {productList.map((data) => (
                  <CardProduct key={data.id} {...data} />
                ))}
              </ul>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default MainHome;
