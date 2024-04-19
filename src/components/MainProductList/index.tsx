import "./style.css";
import { api } from "../../services/api";
import { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import CardProduct from "../CardProduct";
import Filters from "./filters";
import Loading from "../Loading";

import { StoreContext } from "../../contexts/Store";
import { IProductData } from "../../contexts/types";

const MainProductList = () => {
  const [URLSearchParams] = useSearchParams();
  const { storeData } = useContext(StoreContext);
  const { storeUri, categoryUri, productSearched } = useParams();

  const [productList, setProductList] = useState<IProductData[]>([]);
  const [load, setLoad] = useState<boolean>(true);

  const categoryId = storeData.business.categories.filter((e) => e.uri === categoryUri)[0]?.id;
  const page = URLSearchParams.get("page") === null ? 1 : Number(URLSearchParams.get("page"));

  const orderBy = URLSearchParams.get("order");
  const maxPrice = URLSearchParams.get("price");
  const variations = URLSearchParams.get("variation");

  useEffect(() => {
    setLoad(true);

    const categoryUrl = `products?_url=${storeUri}&_page=${page}&_limit=12&_category_id=${categoryId}&_order_by=name_asc`;
    const searchUrl = `products?_url=${storeUri}&_page=${page}&_limit=12&_name_like=${productSearched}&_order_by=name_asc`;
    const filterUrl = `products?_url=${storeUri}&_page=${page}&_limit=12&_order_by=${orderBy}${
      variations !== null ? `&_variations=${variations}` : ""
    }${maxPrice !== null ? `&_maxprice=${maxPrice}` : ""}`;

    api
      .get(orderBy !== null ? filterUrl : productSearched === undefined ? categoryUrl : searchUrl)
      .then((res) => {
        setProductList(res.data);
        setLoad(false);
      })
      .catch(() => {});
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderBy, maxPrice, variations]);

  return (
    <>
      <div id="principal-limite" className="principal-limite">
        <article id="conteudo" className="conteudo">
          <div className="flex flex-wrap justify-end gap-4 ">
            <div className="flex-none flex items-center justify-end lg:w-full js-appec-escondido">
              <div className="flex items-center justify-center gap-2 lg:justify-end">
                {/* desktop sorting */}
                <details className="hidden lg:block select-none tail-busca-filtro-details js-tail-busca-filtro-filtro">
                  <summary className="flex items-center py-2 list-none cursor-pointer whitespace-nowrap tail-busca-filtro-summary">
                    <span className="text-sm text-gray-700 tail-busca-filtro-ordenar-texto">
                      Ordenar
                    </span>
                    <svg
                      className="h-5 w-5 text-gray-400 mr-0.5 tail-busca-filtro-ordenar-icone"
                      x-description="Heroicon name: mini/chevron-down"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>
                  <div className="absolute z-10 py-2 text-gray-700 bg-white border border-gray-300 border-solid rounded-lg shadow-2xl w-36 tail-busca-tag-lista lg:-ml-20">
                    <label
                      htmlFor="FiltroOrdenarnomeAsc"
                      className="flex items-center gap-2 p-2 text-sm cursor-pointer hover:bg-gray-100 tail-busca-filtro-label"
                    >
                      <div
                        style={{ backgroundColor: orderBy === "name_asc" ? "black" : "white" }}
                        className="w-4 h-4 bg-white border border-gray-200 border-solid rounded-full"
                      >
                        <span className="sr-only">Ordenação ativa</span>
                      </div>
                      <span>Nome A - Z</span>
                    </label>
                    <label
                      htmlFor="FiltroOrdenarnomeDesc"
                      className="flex items-center gap-2 p-2 text-sm cursor-pointer hover:bg-gray-100 tail-busca-filtro-label"
                    >
                      <div
                        style={{ backgroundColor: orderBy === "name_desc" ? "black" : "white" }}
                        className="w-4 h-4 bg-white border border-gray-200 border-solid rounded-full"
                      >
                        <span className="sr-only">Ordenação ativa</span>
                      </div>
                      <span>Nome Z - A</span>
                    </label>
                    <label
                      htmlFor="FiltroOrdenarbarato"
                      className="flex items-center gap-2 p-2 text-sm cursor-pointer hover:bg-gray-100 tail-busca-filtro-label"
                    >
                      <div
                        style={{ backgroundColor: orderBy === "price_asc" ? "black" : "white" }}
                        className="w-4 h-4 bg-white border border-gray-200 border-solid rounded-full"
                      >
                        <span className="sr-only">Ordenação ativa</span>
                      </div>
                      <span>Menor preço</span>
                    </label>
                    <label
                      htmlFor="FiltroOrdenarcaro"
                      className="flex items-center gap-2 p-2 text-sm cursor-pointer hover:bg-gray-100 tail-busca-filtro-label"
                    >
                      <div
                        style={{ backgroundColor: orderBy === "price_desc" ? "black" : "white" }}
                        className="w-4 h-4 bg-white border border-gray-200 border-solid rounded-full"
                      >
                        <span className="sr-only">Ordenação ativa</span>
                      </div>
                      <span>Maior preço</span>
                    </label>
                  </div>
                </details>
              </div>
            </div>

            <Filters
              storeData={storeData}
              categoryId={categoryId}
              maxPrice={maxPrice}
              orderBy={orderBy}
              variationList={variations}
            />

            <div className="flex flex-col w-full gap-4 lg:w-auto lg:flex-1">
              {/* product listing */}
              <div className="grid gap-4">
                <section className="relative flex items-center gap-2 overflow-hidden tail-listagem-prod js-tail-listagem-prod">
                  {load ? (
                    <Loading />
                  ) : (
                    <>
                      {productList.length > 0 ? (
                        <ul className="tail-listagem-prod-lista js-tail-listagem-prod-lista js-tail-paginacao-busca-lista flex-grow grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                          {productList.map((data) => (
                            <CardProduct key={data.id} {...data} />
                          ))}
                        </ul>
                      ) : (
                        <p className="flex justify-center items-center h-[10rem] w-[100%] text-xl">
                          Produto não encontrado
                        </p>
                      )}
                    </>
                  )}
                </section>
              </div>

              {/* pagination  */}
              {(productList.length >= 12 || page > 1) && (
                <div className="">
                  <div className="flex justify-center gap-2 mx-2 tail-paginacao-manual ">
                    <button
                      style={{ cursor: page === 1 ? "auto" : "pointer" }}
                      className="w-8 h-8 grid place-content-center rounded-lg text-gray-600 transition-colors hover:bg-gray-200 tail-paginacao-btn"
                    >
                      <a
                        href={`?page=${page - 1}`}
                        style={{ pointerEvents: page === 1 ? "none" : "auto" }}
                      >
                        <span className="sr-only">Anterior</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-4 mr-0.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          />
                        </svg>
                      </a>
                    </button>

                    {/* pages */}
                    {[...Array(6)].map((_, index) => (
                      <a
                        key={index}
                        href={`?page=${index + 1}`}
                        className={
                          index + 1 === page
                            ? "w-8 h-8 grid place-content-center rounded-lg bg-black text-white font-bold transition-opacity hover:opacity-70 ev-paginacao-btn-ativo tail-paginacao-btn-ativo"
                            : "w-8 h-8 grid place-content-center rounded-lg text-gray-600 transition-colors hover:bg-gray-200 tail-paginacao-btn"
                        }
                        data-seta-posicao="cima"
                      >
                        {index + 1}
                      </a>
                    ))}

                    <button
                      style={{ cursor: productList.length < 12 ? "auto" : "pointer" }}
                      className="w-8 h-8 grid place-content-center rounded-lg text-gray-600 transition-colors hover:bg-gray-200 tail-paginacao-btn"
                    >
                      <a
                        href={`?page=${page + 1}`}
                        style={{ pointerEvents: productList.length < 12 ? "none" : "auto" }}
                      >
                        <span className="sr-only">Próximo</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-4 ml-0.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </a>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default MainProductList;
