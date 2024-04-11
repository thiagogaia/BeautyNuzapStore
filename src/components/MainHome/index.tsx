import "./style.css";

// import MainCart from "../MainCart";
// import MainProductList from "../MainProductList";
// import MainProductPage from "../MainProductPage";
// import FeaturedCategories from "./featuredCategories";
// import Instagram from "./instagram";
// import Showcase from "./showcase";
// import InformativeComponent from "./informativeComponent";
import Slider from "./slider";
import PaymentMethods from "./paymentMethods";
import CardProduct from "../CardProduct";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/Products";

const MainHome = () => {
  const { products } = useContext(ProductsContext);

  console.log(products);

  return (
    <>
      <main id="principal" className="principal tail-principal ev-principal">
        <article id="conteudo" className="conteudo">
          <div className="cont-menu">
            <div className="cont-separador cont-separador-120  esconder-dk esconder-mn " />
            <Slider />

            <div className="cont-separador cont-separador-40  " />
            <PaymentMethods />

            <div className="cont-separador cont-separador-427 cont-alt-md " />
            <div className="cont-limite cont-limite-40">
              <ul className="tail-listagem-prod-lista js-tail-listagem-prod-lista js-tail-paginacao-busca-lista flex-grow grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                {[...new Array(8)].map((e) => (
                  <CardProduct key={e} />
                ))}
              </ul>
            </div>

            {/* <div className="cont-separador cont-separador-427 cont-alt-md " />
            <Showcase title="New In" /> */}

            {/* <div className="cont-separador cont-separador-166 cont-alt-md " />
            <FeaturedCategories /> */}

            {/* <div className="cont-separador cont-separador-422 cont-alt-md " />
            <Showcase title="Best sellers" /> */}

            {/* <div className="cont-separador cont-separador-143 cont-alt-md " />
            <InformativeComponent /> */}

            {/* <div className="cont-separador cont-separador-425 cont-alt-md " />
            <Showcase title="até 75% off" /> */}

            {/* <div className="cont-separador cont-separador-65 cont-alt-gr " />
            <Instagram /> */}
          </div>
        </article>
      </main>
    </>
  );
};

export default MainHome;
