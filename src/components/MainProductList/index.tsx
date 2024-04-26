import "./style.css";
import { api } from "../../services/api";
import { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import CardProduct from "../CardProduct";
import Filters from "./filters";
import Loading from "../Loading";

import { StoreContext } from "../../contexts/Store";
import { IProductData } from "../../contexts/types";
import Pagination from "./pagination";

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
  const variations = URLSearchParams.get("variations");
  const variationItems = URLSearchParams.get("variationItems");
  const categories = URLSearchParams.get("categories");

  useEffect(() => {
    setLoad(true);

    const categoryUrl = `products?_url=${storeUri}&_page=${page}&_limit=12&_category_id=${categoryId}`;
    const searchUrl = `products?_url=${storeUri}&_page=${page}&_limit=12&_name_like=${productSearched}`;

    const filterUrl = `products?_url=${storeUri}&_page=${page}&_limit=12${
      productSearched !== undefined ? `&_name_like=${productSearched}` : ""
    }${
      categories !== null
        ? `&_categories=${categories}`
        : categoryId !== undefined
        ? `&_category_id=${categoryId}`
        : ""
    }${orderBy !== "novidades" ? `&_order_by=${orderBy}` : ""}${
      variations !== null ? `&_variations=${variations}` : ""
    }${variationItems !== null ? `&_variation_items=${variationItems}` : ""}${
      maxPrice !== null ? `&_maxprice=${maxPrice}` : ""
    }`;

    api
      .get(orderBy !== null ? filterUrl : productSearched !== undefined ? searchUrl : categoryUrl)
      .then((res) => {
        setProductList(res.data);
        setLoad(false);
      })
      .catch(() => {});
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, orderBy, maxPrice, variations, variationItems]);

  return (
    <>
      <div id="principal-limite" className="principal-limite">
        <article id="conteudo" className="conteudo">
          <div className="relative">
            <section itemProp="breadcrumb" className="mt-6 tail-busca-migalhas js-appec-escondido">
              <div className="text-xs">
                <div className="flex flex-wrap items-start justify-start w-full gap-1 text-center">
                  <div>
                    <a href={"/" + storeUri}>Home</a>
                  </div>

                  <div className="mt-0.5">
                    <svg
                      className="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                  </div>

                  <div>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        (window.location.href = categoryUri
                          ? window.location.origin + "/" + `${storeUri}/loja/${categoryUri}`
                          : window.location.origin + "/" + `${storeUri}/busca/${productSearched}`)
                      }
                      className="tail-busca-migalhas-link"
                    >
                      {categoryUri ? categoryUri : "Busca"}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

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
                      htmlFor="FiltroNovidades"
                      className="flex items-center gap-2 p-2 text-sm cursor-pointer hover:bg-gray-100 tail-busca-filtro-label"
                    >
                      <div
                        style={{
                          backgroundColor:
                            orderBy === null || orderBy === "novidades" ? "black" : "white",
                        }}
                        className="w-4 h-4 bg-white border border-gray-200 border-solid rounded-full"
                      >
                        <span className="sr-only">Ordenação ativa</span>
                      </div>
                      <span>Novidades</span>
                    </label>
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
                    {/* <label
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
                    </label> */}
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
              variationItemList={variationItems}
              categoryList={categories}
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
                <Pagination
                  page={page}
                  productListLength={productList.length}
                  maxPagesExibition={3}
                  totalPages={100}
                />
              )}
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default MainProductList;
