import { useContext, useRef, useState } from "react";
import CardProduct from "../CardProduct";
import { IShowcaseProps } from "./types";
import { formatAndFollowUrl } from "../utils/links";
import { StoreContext } from "../../contexts/Store";

const Showcase = ({ title, productList, categoryUri }: IShowcaseProps) => {
  const { storeUri } = useContext(StoreContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const container = useRef<HTMLUListElement>(null);

  const scroll = () => {
    if (container.current !== null) {
      setScrollPosition(container.current.scrollLeft);
    }
  };

  const controls = (direction: "prev" | "next") => {
    if (container.current !== null) {
      const ul = container.current;

      if (direction === "prev" && scrollPosition > 0) {
        ul.scrollTo(scrollPosition - ul.offsetWidth, 0);
        setScrollPosition(scrollPosition - ul.offsetWidth);
      }
      if (direction === "next" && ul.scrollLeft + ul.offsetWidth !== ul.scrollWidth) {
        ul.scrollTo(scrollPosition + ul.offsetWidth, 0);
        setScrollPosition(scrollPosition + ul.offsetWidth);
      }
    }
  };

  return (
    <>
      <div className="cont-limite cont-limite-427 cont-pdd-pq ">
        <h2 className="tt vitr-tt cont-tt  cont-ali-ip-c cont-ali-fb-c cont-ali-dk-c cont-ali-mn-c cont-tt-427">
          <button
            onClick={() => formatAndFollowUrl(`${storeUri}/loja/${categoryUri}`)}
            className="tt-url"
          >
            <span className="theme-mode-color tt-texto">{title}</span>
          </button>
        </h2>
        <ul className="cont-lista cont-lista-427 cont-mgm-l-md ">
          <li
            className="vitr-grupo-box vitr-grupo-hash-428 conteudo-hash-428 cont-item cont-item-428  cont-mgm-i-md"
            data-id={428}
          >
            <section className="relative flex items-center gap-2 overflow-hidden tail-listagem-prod js-tail-listagem-prod">
              <button
                aria-label="Voltar Slider para os produtos anteriores"
                className="absolute left-0 z-10 p-2 pl-0.5 tail-listagem-seta tail-listagem-prod-seta"
                onClick={() => controls("prev")}
              >
                <div className="theme-mode-bg grid flex-shrink-0 px-2 border border-solid rounded-full place-content-center tail-listagem-seta-interno tail-listagem-prod-seta-interno ev-listagem-seta-interno">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="h-3 md:h-4 -ml-0.5 pointer-events-none ev-listagem-seta-icone"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </div>
              </button>

              <ul
                ref={container}
                onScroll={scroll}
                style={{ scrollbarWidth: "none" }}
                className="flex flex-grow ml-2 overflow-x-scroll scroll-smooth snap-mandatory snap-x gap-y-2"
              >
                {productList.map((product) => (
                  <CardProduct
                    key={product.id}
                    {...product}
                    className="snap-start flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4"
                  />
                ))}
              </ul>

              <button
                aria-label="Avançar Slider para os próximos produtos"
                className="absolute right-0 p-2 pr-0.5 tail-listagem-seta tail-listagem-prod-seta"
                onClick={() => controls("next")}
              >
                <div className="theme-mode-bg grid flex-shrink-0 px-2 border border-solid rounded-full place-content-center tail-listagem-seta-interno tail-listagem-prod-seta-interno ev-listagem-seta-interno">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="h-3 md:h-4 -mr-0.5 pointer-events-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </button>
            </section>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Showcase;
