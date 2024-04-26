import "./style.css";

import Slider from "./slider";
import PaymentMethods from "./paymentMethods";
import CardProduct from "../CardProduct";
import { useContext } from "react";
import Showcase from "../Showcase";
import { StoreContext } from "../../contexts/Store";
import Instagram from "../Instagram";

const MainHome = () => {
  const { productList, productListPromo, productListRelease } = useContext(StoreContext);

  return (
    <>
      <main id="principal" className="principal tail-principal ev-principal">
        <article id="conteudo" className="conteudo">
          <div className="cont-menu">
            <div className="cont-separador cont-separador-120  esconder-dk esconder-mn " />
            <Slider />

            <div className="cont-separador cont-separador-40" />
            <PaymentMethods />

            {productListRelease.length > 0 && (
              <>
                <div className="cont-separador cont-separador-40 my-4" />
                <Showcase title="Lançamentos" productList={productListRelease} />
              </>
            )}

            <div className="cont-separador cont-separador-427 cont-alt-md " />
            <div className="cont-limite cont-limite-40">
              <ul className="tail-listagem-prod-lista js-tail-listagem-prod-lista js-tail-paginacao-busca-lista flex-grow grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                {productList.map((data) => (
                  <CardProduct key={data.id} {...data} />
                ))}
              </ul>
            </div>

            {productListPromo.length > 0 && (
              <>
                <div className="cont-separador cont-separador-40 my-4" />
                <Showcase title="Promoções" productList={productListPromo} />
              </>
            )}

            <div className="cont-separador cont-separador-40 my-4" />
            <Instagram />
          </div>
        </article>
      </main>
    </>
  );
};

export default MainHome;
