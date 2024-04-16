import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { IProductData } from "../../contexts/types";
import Gallery from "./gallery";
import ProductVariations from "./productVariations";
import Loading from "../Loading";

const MainProductPage = () => {
  const navigate = useNavigate();
  const { productUri, storeUri } = useParams();
  const [productData, setProductData] = useState({} as IProductData);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    api
      .get(`/products/${productUri}?_store=${storeUri}`)
      .then((res) => {
        setProductData(res.data);
        setLoad(false);
      })
      .catch(() => {});
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <div id="principal-limite" className="principal-limite">
          <article id="conteudo" className="conteudo">
            {/* navigation */}
            <section itemProp="breadcrumb" className="pt-6 js-appec-escondido">
              <div className="text-xs">
                <div className="flex flex-wrap items-start justify-start w-full gap-1 text-center">
                  <div className="mt-0.5">
                    <FaArrowLeftLong />
                  </div>
                  <div>
                    <span onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
                      Voltar
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid max-w-screen-md gap-8 mx-auto mt-6 overflow-visible text-sm md:gap-10 lg:mx-0 lg:max-w-none tail-prod-ver-geral">
              <div className="grid gap-8 tail-prod-ver-tamanho-colunas js-tail-comprar">
                <Gallery productData={productData} />

                <div className="flex flex-col gap-8">
                  <div className="relative flex-shrink-0 text-sm lg:w-full lg:col-start-2 lg:row-span-2">
                    <form
                      method="post"
                      action="/carrinho"
                      autoComplete="off"
                      noValidate
                      // onsubmit="etapaComprarFetch()"
                      data-fetch={1}
                      data-escolher-variacao={0}
                      data-pixel-evento-unico={0}
                      data-tipo="produto"
                      className="flex flex-col gap-8 js-tail-prod-ver-form"
                      data-nome="Vestido Longo Tule Glitter Busto Plissado Fucsia"
                      data-categoria="Todos Vestidos Longos"
                    >
                      <div className="grid gap-1 tail-prod-ver-grupo-nome">
                        <h1
                          className="text-2xl ev-prod-ver-nome tail-prod-ver-nome"
                          data-seta-posicao="esquerda"
                        >
                          <span>{productData.name}</span>
                        </h1>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 tail-prod-ver-codigo">
                          <div className="">
                            <span>Código</span>
                            <span>{productData.code}</span>
                          </div>

                          {/* reference */}
                          {/* <div className="h-3 w-px bg-gray-400 rounded-full" />
                        <div className="">
                          <span>Referência</span>
                          6407V04
                        </div> */}
                        </div>
                      </div>

                      <div className="grid gap-8 tail-prod-ver-grupo-precos-e-variacoes">
                        <div className="grid gap-1 tail-prod-ver-grupo-precos ">
                          <div className="flex flex-col gap-1 tail-etapa-preco-interno">
                            <div
                              className="relative flex flex-col justify-center h-32 gap-1 p-4 bg-gray-100 rounded-lg cursor-pointer lg:h-28 ev-etapa-preco-grupo tail-etapa-preco-grupo"
                              data-privado={0}
                              // onclick="etapaParcelaFetch()"
                            >
                              {+productData.stock <= 0 ? (
                                <div className="text-3xl font-bold lg:text-2xl tail-etapa-preco-esgotado ev-etapa-preco-esgotado js-tail-etapa-preco-esgotado">
                                  Esgotado
                                </div>
                              ) : (
                                <>
                                  {/* discont */}
                                  {/* <div className="flex items-center justify-center gap-1 lg:justify-start tail-etapa-preco-de-container js-tail-etapa-preco-de-container">
                                  <del
                                    className="relative flex items-center flex-shrink-0 gap-1 text-base text-gray-600 no-underline tail-etapa-preco-de ev-etapa-preco-de js-tail-etapa-preco-de"
                                    data-seta-posicao="cima"
                                  >
                                    <div className="absolute w-full h-px bg-gray-600" />
                                    <span className="">R$ </span>
                                    <span className="js-tail-etapa-preco-de-valor">429,90</span>
                                  </del>
                                  <div
                                    className="flex items-center gap-1 text-xs text-green-700 tail-etapa-preco-economia js-tail-etapa-preco-economia"
                                    data-preco-economia-exibir={1}
                                  >
                                    <div className="hidden">
                                      <span className="js-tail-etapa-preco-economia-moeda">R$</span>
                                      <span className="js-tail-etapa-preco-economia-valor">
                                        80,00
                                      </span>
                                    </div>
                                    <div className="">
                                      <span className="js-tail-etapa-preco-economia-numero">
                                        18
                                      </span>
                                      <span className="js-tail-etapa-preco-economia-porcento">
                                        %
                                      </span>
                                      OFF
                                    </div>
                                  </div>
                                </div> */}

                                  <div className="flex flex-col items-center justify-center gap-1 lg:flex-row lg:justify-start tail-etapa-preco-grupo-precos-principais">
                                    <div
                                      className="flex items-center flex-shrink-0 gap-1 text-3xl font-bold lg:text-2xl tail-etapa-preco-por ev-etapa-preco-por js-tail-etapa-preco-por"
                                      data-seta-posicao="cima"
                                    >
                                      <span className="js-tail-etapa-preco-por-valor">
                                        {Number(productData.price).toLocaleString("pt-BR", {
                                          style: "currency",
                                          currency: "BRL",
                                        })}
                                      </span>
                                    </div>

                                    {/* parcels */}
                                    {/* <div
                                className="flex items-center gap-1 text-sm text-gray-600 tail-etapa-parcela ev-etapa-parcela js-tail-etapa-parcela"
                                data-seta-posicao="cima"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="flex-shrink-0 w-4 h-4 tail-etapa-parcela-icone"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                                  />
                                </svg>
                                <div className="tail-etapa-parcela-texto">
                                  <span className="tail-etapa-parcela-texto-numero js-tail-etapa-parcela-numero">
                                    6
                                  </span>
                                  <span className="tail-etapa-parcela-texto-x">x</span>
                                  <span className="tail-etapa-parcela-texto-cifrao">R$</span>
                                  <span className="tail-etapa-parcela-texto-valor js-tail-etapa-parcela-valor">
                                    58,32
                                  </span>
                                  <span className="tail-etapa-parcela-texto-sem-juros">
                                    sem juros
                                  </span>
                                </div>
                              </div> */}
                                  </div>

                                  {/* discount in cash */}
                                  <div className="text-green-700 flex items-center justify-center gap-1 lg:justify-start lg:items-start escondido tail-etapa-preco-avista ev-etapa-preco-avista js-tail-etapa-preco-avista">
                                    <div
                                      className="tail-etapa-preco-avista-interno"
                                      data-seta-posicao="direita"
                                    >
                                      <span className="tail-etapa-preco-avista-moeda js-tail-etapa-preco-avista-moeda">
                                        R$
                                      </span>
                                      <span className="js-tail-etapa-preco-avista-valor" />
                                      <span className="js-tail-etapa-preco-avista-texto">
                                        à vista
                                      </span>
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <ProductVariations productData={productData} />
                      </div>
                      <div className="grid gap-4 tail-prod-ver-grupo-comprar">
                        <div className="flex gap-2 tail-etapa-comprar js-tail-etapa-comprar w-full lg:max-w-xs">
                          <button
                            type="submit"
                            className="relative flex-grow py-3 text-base tracking-wide text-center text-white transition-opacity bg-black border border-transparent border-solid rounded-lg select-none outline-none hover:opacity-70 ev-etapa-comprar-btn tail-etapa-comprar-btn js-tail-etapa-comprar-btn"
                            data-seta-posicao="esquerda"
                          >
                            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full escondido tail-etapa-comprar-btn-carregando js-tail-etapa-comprar-btn-carregando">
                              <svg
                                className="h-4 animate-spin"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx={12}
                                  cy={12}
                                  r={10}
                                  stroke="currentColor"
                                  strokeWidth={4}
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                              </svg>
                            </div>
                            <div className="tail-etapa-comprar-btn-texto js-tail-etapa-comprar-btn-texto">
                              Comprar
                            </div>
                          </button>
                          <button
                            type="button"
                            className="flex-grow py-3 text-base tracking-wide text-center text-white transition-opacity bg-black border border-transparent border-solid rounded-lg select-none hover:opacity-70 escondido tail-etapa-comprar-btn-espera js-tail-etapa-comprar-btn-esgotado"
                            // onclick="etapaEsperaModal()"
                          >
                            <div className="tail-etapa-comprar-btn-texto-espera">Avise-me</div>
                          </button>
                          <button
                            type="button"
                            className="flex-grow py-3 text-base tracking-wide text-center text-gray-500 bg-gray-100 border border-gray-300 border-solid rounded-lg pointer-events-none select-none cursor-not-allowed escondido tail-etapa-comprar-btn-consulte js-tail-etapa-comprar-btn-consulte"
                          >
                            <div className="tail-etapa-comprar-btn-texto-consulte">Consulte</div>
                          </button>
                          {/* add to Favorites */}
                          <a
                            href="#"
                            rel="nofollow"
                            data-produto-id={2581}
                            // onclick="etapaDesejoFetch()"
                            className="grid px-3 border border-black border-solid rounded-lg place-content-center group md:px-2 tail-etapa-desejo-link ev-etapa-desejo-link js-tail-etapa-desejo-link"
                            data-seta-posicao="direita"
                          >
                            <svg
                              className="h-6 transition-opacity opacity-70 group-hover:opacity-100 ev-etapa-desejo-icone-0 js-tail-etapa-desejo-icone-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              strokeWidth="1.5"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                              />
                            </svg>
                            <svg
                              className="h-6 transition-opacity opacity-100 group-hover:opacity-70 ev-etapa-desejo-icone-1 js-tail-etapa-desejo-icone-1 escondido"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                            <svg
                              className="h-6 animate-spin js-tail-etapa-desejo-carregando escondido"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <circle
                                className="opacity-25"
                                cx={12}
                                cy={12}
                                r={10}
                                stroke="currentColor"
                                strokeWidth={4}
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            <span className="sr-only">Adicionar à lista de desejos</span>
                          </a>
                        </div>
                      </div>
                      {/* to share */}
                      <div className="grid gap-4 tail-prod-ver-grupo-frete-e-social">
                        <section
                          aria-label="Links para compartilhar o produto em suas redes sociais"
                          className="flex flex-col gap-1 tail-etapa-social"
                        >
                          <h2 className="tail-etapa-social-tt">Compartilhe</h2>
                          <ul
                            className="flex gap-2 tail-etapa-social-lista ev-etapa-social-lista"
                            data-seta-posicao="esquerda"
                          >
                            <li className="border border-gray-300 border-solid rounded-full tail-etapa-social-item ev-etapa-social-item">
                              <a
                                href="https://wa.me/?text=https%3A%2F%2Fwww.nuzap.com.br%2Fprod%2F2581%2Fvestido-longo-tule-glitter-busto-plissado-fucsia"
                                className="p-2 inline-block cursor-pointer ev-etapa-social-link js-whatsapp"
                                target="_blank"
                              >
                                <span className="sr-only">Compartilhar com WhatsApp</span>
                                <svg
                                  className="w-4 h-4 text-current opacity-60 pointer-events-none tail-etapa-social-svg ev-etapa-social-svg"
                                  version="1.1"
                                  xmlns="//www.w3.org/2000/svg"
                                  xmlnsXlink="//www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 90 90"
                                  enableBackground="new 0 0 90 90"
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    <path d="M90,43.789C90,67.979,70.221,87.59,45.818,87.59c-7.748,0-15.025-1.979-21.357-5.45L0,89.906l7.975-23.501 c-4.023-6.601-6.34-14.342-6.34-22.617c0-24.19,19.781-43.801,44.184-43.801C70.223-0.012,90,19.598,90,43.789 M45.818,6.963 c-20.484,0-37.146,16.52-37.146,36.825c0,8.059,2.629,15.521,7.076,21.591l-4.641,13.676l14.275-4.532 c5.865,3.847,12.891,6.091,20.437,6.091c20.481,0,37.146-16.518,37.146-36.825C82.964,23.484,66.301,6.963,45.818,6.963 M68.129,53.876c-0.273-0.446-0.994-0.716-2.076-1.253c-1.084-0.536-6.41-3.135-7.4-3.49c-0.992-0.359-1.717-0.539-2.438,0.535 c-0.721,1.075-2.797,3.492-3.43,4.208c-0.633,0.719-1.264,0.809-2.348,0.272c-1.082-0.537-4.57-1.673-8.708-5.33 c-3.219-2.845-5.393-6.358-6.025-7.434c-0.631-1.074-0.066-1.654,0.475-2.189c0.488-0.481,1.084-1.253,1.625-1.88 c0.543-0.627,0.723-1.075,1.082-1.792c0.363-0.717,0.182-1.343-0.09-1.881c-0.27-0.536-2.438-5.82-3.34-7.969 c-0.902-2.149-1.803-1.791-2.436-1.791c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.343 c-0.992,1.074-3.789,3.672-3.789,8.955c0,5.283,3.879,10.387,4.422,11.104c0.541,0.715,7.49,11.91,18.5,16.208 C58.2,65.699,58.2,64.266,60.186,64.086c1.984-0.18,6.406-2.597,7.312-5.103C68.398,56.474,68.398,54.324,68.129,53.876" />
                                  </g>
                                </svg>
                              </a>
                            </li>
                            <li className="border border-gray-300 border-solid rounded-full tail-etapa-social-item ev-etapa-social-item">
                              <a
                                href="mailto:?Subject=Olha%20o%20que%20eu%20gostei&body=Achei%20legal%20e%20queria%20compartilhar%20com%20você:%20https%3A%2F%2Fwww.nuzap.com.br%2Fprod%2F2581%2Fvestido-longo-tule-glitter-busto-plissado-fucsia"
                                className="p-2 inline-block cursor-pointer ev-etapa-social-link"
                              >
                                <span className="sr-only">Compartilhar via E-mail</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-4 h-4 text-current opacity-60 pointer-events-none tail-etapa-social-svg ev-etapa-social-svg"
                                >
                                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                              </a>
                            </li>
                            <li className="border border-gray-300 border-solid rounded-full tail-etapa-social-item ev-etapa-social-item">
                              <a
                                href="//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.nuzao.com.br%2Fprod%2F2581%2Fvestido-longo-tule-glitter-busto-plissado-fucsia"
                                target="_blank"
                                className="p-2 inline-block cursor-pointer ev-etapa-social-link"
                              >
                                <span className="sr-only">Compartilhar com Facebook</span>
                                <svg
                                  className="w-4 h-4 text-current opacity-60 pointer-events-none tail-etapa-social-svg ev-etapa-social-svg"
                                  version="1.1"
                                  xmlns="//www.w3.org/2000/svg"
                                  xmlnsXlink="//www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 50 50"
                                  enableBackground="new 0 0 50 50"
                                  xmlSpace="preserve"
                                >
                                  <path d="M35.627,16.183h-7.92V10.99c0-1.951,1.293-2.406,2.203-2.406c0.908,0,5.59,0,5.59,0V0.011l-7.697-0.029c-8.543,0-10.487,6.395-10.487,10.487v5.715h-4.941v8.835h4.941c0,11.338,0,24.999,0,24.999h10.391c0,0,0-13.797,0-24.999h7.012L35.627,16.183z" />
                                </svg>
                              </a>
                            </li>
                            <li className="border border-gray-300 border-solid rounded-full tail-etapa-social-item ev-etapa-social-item">
                              <a
                                href="https://pinterest.com/"
                                className="p-2 inline-block cursor-pointer ev-etapa-social-link"
                              >
                                <span className="sr-only">Compartilhar com Pinterest</span>
                                <svg
                                  className="w-4 h-4 text-current opacity-60 pointer-events-none tail-etapa-social-svg ev-etapa-social-svg"
                                  version="1.1"
                                  xmlns="//www.w3.org/2000/svg"
                                  xmlnsXlink="//www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 50 50"
                                  enableBackground="new 0 0 50 50"
                                  xmlSpace="preserve"
                                >
                                  <path d="M26.16,0.208c-13.487,0-20.287,9.668-20.287,17.733c0,4.881,1.848,9.226,5.812,10.843c0.651,0.266,1.233,0.01,1.422-0.711c0.13-0.496,0.441-1.754,0.58-2.277c0.189-0.712,0.115-0.961-0.409-1.583c-1.143-1.348-1.875-3.093-1.875-5.566c0-7.172,5.368-13.595,13.976-13.595c7.623,0,11.812,4.659,11.812,10.877c0,8.186-3.622,15.094-8.999,15.094c-2.969,0-5.191-2.455-4.48-5.469c0.854-3.596,2.506-7.476,2.506-10.073c0-2.323-1.249-4.26-3.828-4.26c-3.035,0-5.474,3.141-5.474,7.347c0,2.679,0.905,4.492,0.905,4.492s-3.106,13.165-3.652,15.469c-1.083,4.59-0.163,10.217-0.084,10.783c0.046,0.34,0.479,0.42,0.676,0.164c0.279-0.363,3.896-4.826,5.124-9.287c0.349-1.264,1.997-7.803,1.997-7.803c0.986,1.883,3.869,3.537,6.935,3.537c9.123,0,15.314-8.318,15.314-19.454C44.129,8.049,36.998,0.208,26.16,0.208z" />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </section>
                      </div>
                    </form>
                  </div>
                  <div>
                    {/* calculate shipping */}
                    <details className="border-t border-gray-300 border-solid tail-prod-ver-details tail-etapa-frete js-tail-etapa-frete">
                      <summary className="flex items-center justify-between px-2 py-4 text-sm cursor-pointer tail-prod-ver-summary hover:bg-gray-100">
                        <h2 className="text-xl lg:text-base tail-prod-ver-summary-tt">
                          Calcular o prazo de entrega
                        </h2>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="currentColor"
                          className="h-4 text-gray-500 tail-prod-ver-details-icone"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </summary>
                      <div className="flex flex-col justify-center max-w-xs gap-2 p-2 pb-4">
                        <div className="flex w-4/5 gap-4 lg:gap-2">
                          <svg
                            className="self-center flex-shrink-0 hidden opacity-60 w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                            />
                          </svg>
                          <input
                            type="text"
                            name=""
                            placeholder="Digite seu CEP"
                            max={9}
                            pattern="[0-9]*"
                            // onkeypress="etapaFreteEnterNoInput()"
                            // oninput="etapaFreteCepCompleto()"
                            className="w-full flex-shrink px-2.5 py-2 overflow-visible text-xs transition-colors bg-white border border-gray-300 border-solid rounded-lg hover:border-blue-500 outline-none focus:border-blue-500 tail-etapa-frete-cep js-tail-etapa-frete-cep js-cookie-cep js-imask-cep"
                            data-mascara-regra="#####-###"
                            autoComplete="off"
                            inputMode="decimal"
                            maxLength={9}
                            data-mascara-validar={1}
                          />
                          <button
                            type="button"
                            // onclick="etapaFreteFetch()"
                            className="relative flex items-center flex-shrink-0 gap-1 px-3 text-white transition-opacity bg-black rounded-lg w-34 hover:opacity-70 tail-etapa-frete-btn ev-etapa-frete-btn js-tail-etapa-frete-btn"
                            data-seta-posicao="direita"
                          >
                            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full escondido js-tail-etapa-frete-btn-carregando">
                              <svg
                                className="h-4 animate-spin"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx={12}
                                  cy={12}
                                  r={10}
                                  stroke="currentColor"
                                  strokeWidth={4}
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                              </svg>
                            </div>
                            <div className="js-tail-etapa-frete-btn-texto">Calcular</div>
                          </button>
                        </div>
                        <a
                          href="//www.correios.com.br/enviar/precisa-de-ajuda/tudo-sobre-cep"
                          rel="external"
                          target="_blank"
                          className="hidden text-xs underline w-max tail-etapa-frete-nao-sei"
                        />
                      </div>
                    </details>

                    {/* description */}
                    <details className="border-t border-gray-300 border-solid tail-prod-ver-details">
                      <summary className="flex items-center justify-between px-2 py-4 text-sm cursor-pointer tail-prod-ver-summary hover:bg-gray-100">
                        <h2 className="text-xl lg:text-base tail-prod-ver-summary-tt">Descrição</h2>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="currentColor"
                          className="h-4 text-gray-500 tail-prod-ver-details-icone"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </summary>
                      <div
                        className="px-2 py-2 marcacao ev-prod-ver-descricao-texto"
                        data-seta-posicao="esquerda"
                      >
                        <div>
                          <p>{productData.description_small}</p>

                          {/* <p>
                          <strong>Tabela de Medida</strong>
                        </p>
                        <figure>
                          <table className="w-full my-5 text-xs border-collapse tail-prod-ver-descricao-tabela">
                            <tbody>
                              <tr>
                                <td>
                                  <strong>Tamanho</strong>
                                </td>
                                <td>
                                  <strong>36</strong>
                                </td>
                                <td>
                                  <strong>38</strong>
                                </td>
                                <td>
                                  <strong>40</strong>
                                </td>
                                <td>
                                  <strong>42</strong>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Busto</strong>
                                </td>
                                <td>60</td>
                                <td>64</td>
                                <td>70</td>
                                <td>73</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Cintura</strong>
                                </td>
                                <td>58</td>
                                <td>61</td>
                                <td>68</td>
                                <td>72</td>
                              </tr>
                            </tbody>
                          </table>
                        </figure> */}
                        </div>
                      </div>
                    </details>
                  </div>
                </div>
              </div>

              <dialog className="fixed z-50 w-11/12 max-w-xl text-left border border-gray-300 border-solid outline-none rounded-lg shadow-lg scroll-auto tail-prod-ver-modal js-tail-prod-ver-modal js-tail-etapa-comprar-modal" />
              <dialog className="fixed z-50 w-11/12 max-w-xl text-left border border-gray-300 border-solid outline-none rounded-lg shadow-lg scroll-auto tail-prod-ver-modal js-tail-prod-ver-modal js-tail-etapa-frete-modal" />
              <dialog className="fixed z-50 w-11/12 max-w-xl text-left border border-gray-300 border-solid outline-none rounded-lg shadow-lg scroll-auto tail-prod-ver-modal js-tail-prod-ver-modal js-tail-etapa-parcela-modal" />
              <dialog className="fixed z-50 w-11/12 max-w-xl text-left border border-gray-300 border-solid outline-none rounded-lg shadow-lg scroll-auto tail-prod-ver-modal js-tail-prod-ver-modal js-tail-etapa-espera-modal">
                <section className="overflow-visible js-tail-etapa-espera">
                  <div className="sticky top-0 z-10 flex items-center justify-between gap-2 p-4 bg-white border-b border-gray-200 border-solid lg:px-8">
                    <h2 className="text-xl lg:text-2xl">Avise-me quando este produto chegar</h2>
                    <button
                      type="button"
                      className="flex-shrink-0 p-1.5 border border-gray-200 border-solid rounded-full hover:bg-gray-100 cursor-pointer"
                      // onclick="etapaEsperaModalBtnFechar()"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="flex-shrink-0 h-4 pointer-events-none"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="grid gap-4 px-4 py-6 lg:px-8">
                    <div className="grid gap-1 text-sm text-gray-800">
                      <label htmlFor="etapa-espera-email" className="font-bold">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="etapa-espera-email"
                        placeholder="Digite seu e-mail"
                        // onkeypress="etapaEsperaEnterNoInput()"
                        className="flex items-center w-full px-2 py-2.5 transition-shadow bg-white border border-gray-300 border-solid rounded-lg shadow outline-none placeholder-gray-500 hover:border-black focus:border-black js-tail-etapa-espera-email js-cookie-email"
                        style={{
                          backgroundImage: 'url("data:image/png',
                          backgroundRepeat: "no-repeat",
                          backgroundSize: 20,
                          backgroundPosition: "97% center",
                          cursor: "auto",
                        }}
                        data-temp-mail-org={0}
                      />
                    </div>
                    <div className="grid gap-2 transition-all transform md:grid-cols-2">
                      <button
                        type="button"
                        // onclick="etapaEsperaFetch()"
                        className="relative flex items-center justify-center gap-1 px-4 py-3 text-base text-white transition-opacity bg-black rounded-lg hover:opacity-70 tail-etapa-espera-btn ev-etapa-espera-btn js-tail-etapa-espera-btn"
                        data-seta-posicao="direita"
                      >
                        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full escondido js-tail-etapa-espera-btn-carregando">
                          <svg
                            className="h-4 animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx={12}
                              cy={12}
                              r={10}
                              stroke="currentColor"
                              strokeWidth={4}
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                        </div>
                        <div className="js-tail-etapa-espera-btn-texto">Avise-me</div>
                      </button>
                      <div className="flex items-center row-start-2 gap-2 px-3 py-2 mx-auto text-sm font-bold text-green-600 transition-opacity rounded-lg opacity-0 bg-green-50 md:mx-0 lg:text-base w-max md:row-start-1 md:col-start-2 escondido js-tail-etapa-espera-alerta-sucesso">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                          />
                        </svg>
                        <span className="js-tail-etapa-espera-alerta-sucesso-texto" />
                      </div>
                      <div className="flex items-center row-start-2 gap-2 px-3 py-2 mx-auto text-sm font-bold text-red-600 transition-opacity rounded-lg opacity-0 bg-red-50 md:mx-0 lg:text-base w-max md:row-start-1 md:col-start-2 escondido js-tail-etapa-espera-alerta-erro">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                          />
                        </svg>
                        <span className="js-tail-etapa-espera-alerta-erro-texto" />
                      </div>
                    </div>
                  </div>
                </section>
              </dialog>
              <dialog className="fixed z-50 w-11/12 max-w-xl text-left border border-gray-300 border-solid outline-none rounded-lg shadow-lg scroll-auto tail-prod-ver-modal js-tail-prod-ver-modal js-tail-produto-pergunta-modal"></dialog>
              <div
                data-classe="js-tail-etapa-comprar-modal"
                className="escondido fixed z-50 w-11/12 max-w-xl text-left border border-gray-300 border-solid outline-none rounded-lg shadow-lg scroll-auto tail-prod-ver-modal bg-white top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 tail-produto-modal-polyfill-div js-tail-produto-modal-polyfill-div"
              />
              <div
                data-classe="js-tail-etapa-frete-modal"
                className="escondido fixed z-50 w-11/12 max-w-xl text-left border border-gray-300 border-solid outline-none rounded-lg shadow-lg scroll-auto tail-prod-ver-modal bg-white top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 tail-produto-modal-polyfill-div js-tail-produto-modal-polyfill-div"
              />
              <div
                data-classe="js-tail-etapa-parcela-modal"
                className="escondido fixed z-50 w-11/12 max-w-xl text-left border border-gray-300 border-solid outline-none rounded-lg shadow-lg scroll-auto tail-prod-ver-modal bg-white top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 tail-produto-modal-polyfill-div js-tail-produto-modal-polyfill-div"
              />
              {/* Notify me when this product arrives */}
              <div
                data-classe="js-tail-etapa-espera-modal"
                className="escondido fixed z-50 w-11/12 max-w-xl text-left border border-gray-300 border-solid outline-none rounded-lg shadow-lg scroll-auto tail-prod-ver-modal bg-white top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 tail-produto-modal-polyfill-div js-tail-produto-modal-polyfill-div"
              >
                <section className="overflow-visible js-tail-etapa-espera">
                  <div className="sticky top-0 z-10 flex items-center justify-between gap-2 p-4 bg-white border-b border-gray-200 border-solid lg:px-8">
                    <h2 className="text-xl lg:text-2xl">Avise-me quando este produto chegar</h2>
                    <button
                      type="button"
                      className="flex-shrink-0 p-1.5 border border-gray-200 border-solid rounded-full hover:bg-gray-100 cursor-pointer"
                      // onclick="etapaEsperaModalBtnFechar()"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="flex-shrink-0 h-4 pointer-events-none"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="grid gap-4 px-4 py-6 lg:px-8">
                    <div className="grid gap-1 text-sm text-gray-800">
                      <label htmlFor="etapa-espera-email" className="font-bold">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="etapa-espera-email"
                        placeholder="Digite seu e-mail"
                        // onkeypress="etapaEsperaEnterNoInput()"
                        className="flex items-center w-full px-2 py-2.5 transition-shadow bg-white border border-gray-300 border-solid rounded-lg shadow outline-none placeholder-gray-500 hover:border-black focus:border-black js-tail-etapa-espera-email js-cookie-email"
                        style={{
                          backgroundImage: 'url("data:image/png',
                          backgroundRepeat: "no-repeat",
                          backgroundSize: 20,
                          backgroundPosition: "97% center",
                          cursor: "auto",
                        }}
                        data-temp-mail-org={1}
                      />
                    </div>
                    <div className="grid gap-2 transition-all transform md:grid-cols-2">
                      <button
                        type="button"
                        // onclick="etapaEsperaFetch()"
                        className="relative flex items-center justify-center gap-1 px-4 py-3 text-base text-white transition-opacity bg-black rounded-lg hover:opacity-70 tail-etapa-espera-btn ev-etapa-espera-btn js-tail-etapa-espera-btn"
                        data-seta-posicao="direita"
                      >
                        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full escondido js-tail-etapa-espera-btn-carregando">
                          <svg
                            className="h-4 animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx={12}
                              cy={12}
                              r={10}
                              stroke="currentColor"
                              strokeWidth={4}
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                        </div>
                        <div className="js-tail-etapa-espera-btn-texto">Avise-me</div>
                      </button>
                      <div className="flex items-center row-start-2 gap-2 px-3 py-2 mx-auto text-sm font-bold text-green-600 transition-opacity rounded-lg opacity-0 bg-green-50 md:mx-0 lg:text-base w-max md:row-start-1 md:col-start-2 escondido js-tail-etapa-espera-alerta-sucesso">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                          />
                        </svg>
                        <span className="js-tail-etapa-espera-alerta-sucesso-texto" />
                      </div>
                      <div className="flex items-center row-start-2 gap-2 px-3 py-2 mx-auto text-sm font-bold text-red-600 transition-opacity rounded-lg opacity-0 bg-red-50 md:mx-0 lg:text-base w-max md:row-start-1 md:col-start-2 escondido js-tail-etapa-espera-alerta-erro">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                          />
                        </svg>
                        <span className="js-tail-etapa-espera-alerta-erro-texto" />
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div
                data-classe="js-tail-produto-pergunta-modal"
                className="escondido fixed z-50 w-11/12 max-w-xl text-left border border-gray-300 border-solid outline-none rounded-lg shadow-lg scroll-auto tail-prod-ver-modal bg-white top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 tail-produto-modal-polyfill-div js-tail-produto-modal-polyfill-div"
              ></div>

              <section />

              {/* Assessments */}
              {/* <section
              id="prod-ver-avaliacao"
              aria-label="Avaliações e opiniões sobre o produto"
              className="overflow-visible border-t border-solid border-gray-300 pt-8 px-2 md:pt-10 tail-prod-ver-avaliacao prod-ver-secao prod-ver-avaliacao-vazio"
            >
              <div className="flex flex-col gap-8 overflow-visible md:flex-row lg:gap-16">
                <div className="flex flex-col flex-shrink-0 w-full h-full gap-4 overflow-visible top-52 md:sticky sm:max-w-sm">
                  <h2 className="text-xl">Avaliações de clientes</h2>
                  <div className="flex flex-wrap items-center gap-2">
                    <div>Baseado em 0 avaliação </div>
                  </div>
                  <div>
                    <ul className="grid gap-4">
                      <li className="flex gap-2">
                        <span className="flex items-center flex-shrink-0 w-8 gap-1">
                          <span className="text-sm">5</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 text-yellow-300"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <div className="flex-grow border border-gray-300 border-solid rounded-full bg-gray-50">
                          <div className="h-full tail-avaliacao-barra" style={{ width: "0%" }} />
                        </div>
                        <span className="flex-shrink-0 w-10 text-right">0%</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="flex items-center flex-shrink-0 w-8 gap-1">
                          <span className="text-sm">4</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 text-yellow-300"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <div className="flex-grow border border-gray-300 border-solid rounded-full bg-gray-50">
                          <div className="h-full tail-avaliacao-barra" style={{ width: "0%" }} />
                        </div>
                        <span className="flex-shrink-0 w-10 text-right">0%</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="flex items-center flex-shrink-0 w-8 gap-1">
                          <span className="text-sm">3</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 text-yellow-300"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <div className="flex-grow border border-gray-300 border-solid rounded-full bg-gray-50">
                          <div className="h-full tail-avaliacao-barra" style={{ width: "0%" }} />
                        </div>
                        <span className="flex-shrink-0 w-10 text-right">0%</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="flex items-center flex-shrink-0 w-8 gap-1">
                          <span className="text-sm">2</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 text-yellow-300"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <div className="flex-grow border border-gray-300 border-solid rounded-full bg-gray-50">
                          <div className="h-full tail-avaliacao-barra" style={{ width: "0%" }} />
                        </div>
                        <span className="flex-shrink-0 w-10 text-right">0%</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="flex items-center flex-shrink-0 w-8 gap-1">
                          <span className="text-sm">1</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 text-yellow-300"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <div className="flex-grow border border-gray-300 border-solid rounded-full bg-gray-50">
                          <div className="h-full tail-avaliacao-barra" style={{ width: "0%" }} />
                        </div>
                        <span className="flex-shrink-0 w-10 text-right">0%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section> */}

              {/* Available in other colors */}
              {/* <section className="grid gap-2 pt-6 border-t border-gray-300 border-solid md:pt-10 tail-prod-ver-relacionado">
              <h2 className="px-2 text-xl tail-produto-rela-tt">Disponíveis em outras cores</h2>
              <section className="relative flex items-center gap-2 overflow-hidden tail-listagem-prod js-tail-listagem-prod">
                <button
                  aria-label="Voltar Slider para os produtos anteriores"
                  className="absolute left-0 z-10 p-2 pl-0.5 tail-listagem-seta tail-listagem-prod-seta"
                  // onclick="listagemSlider('voltar');"
                >
                  <div className="grid flex-shrink-0 px-2 border border-gray-300 border-solid rounded-full place-content-center bg-gray-50 tail-listagem-seta-interno tail-listagem-prod-seta-interno ev-listagem-seta-interno">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="h-3 md:h-4 -ml-0.5 text-gray-500 pointer-events-none ev-listagem-seta-icone"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </div>
                </button>

                <ul className="flex flex-grow ml-2 overflow-x-scroll tail-listagem-prod-slider-container js-tail-listagem-prod-lista flex flex-grow ml-2 gap-y-2">
                  {[...new Array(6)].map((e) => (
                    <li
                      key={e + 4564 + "12121"}
                      className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4"
                      data-seta-posicao="direita"
                    >
                      <a
                        href="/prod/2581/vestido-longo-tule-glitter-busto-plissado-fucsia"
                        target="_self"
                        className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link"
                      >
                        <div
                          className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile"
                          style={{ paddingBottom: "133%" }}
                        >
                          <picture>
                            <source
                              srcSet="/1483771895.webp 200w, /1483771895.webp 400w, /1483771895.webp 600w"
                              sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px"
                              type="image/webp"
                            />
                            <source
                              srcSet="/1483771895.jpg 200w, /1483771895.jpg 400w, /1483771895.jpg 600w"
                              sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px"
                              type="image/jpeg"
                            />
                            <img
                              loading="lazy"
                              src="/1483771895.jpg"
                              alt="Vestido Longo Tule Glitter Busto Plissado Fucsia"
                              className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover"
                            />
                          </picture>
                          <picture>
                            <source
                              srcSet="/3659536422.webp 200w, /3659536422.webp 400w, /3659536422.webp 600w"
                              sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px"
                              type="image/webp"
                            />
                            <source
                              srcSet="/3659536422.jpg 200w, /3659536422.jpg 400w, /3659536422.jpg 600w"
                              sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px"
                              type="image/jpeg"
                            />
                            <img
                              loading="lazy"
                              src="/3659536422.jpg"
                              alt="Vestido Longo Tule Glitter Busto Plissado Fucsia"
                              className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover"
                            />
                          </picture>
                          <div
                            className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto"
                            data-seta-posicao="direita"
                          >
                            -18%
                          </div>
                        </div>
                        <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
                          <h4
                            className="text-xs lg:text-sm ev-listagem-prod-nome"
                            title="Vestido Longo Tule Glitter Busto Plissado Fucsia"
                            data-seta-posicao="direita"
                          >
                            Vestido Longo Tule Glitter Busto Plissado Fucsia
                          </h4>
                          <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
                            <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                              <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                                <ins
                                  className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por"
                                  data-seta-posicao="direita"
                                >
                                  <span className="mr-0.5">R$ 349,90</span>
                                </ins>
                                <del
                                  className=" flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de"
                                  data-seta-posicao="direita"
                                >
                                  <span className="mr-0.5">R$ 429,90</span>
                                </del>
                                <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                                  <div
                                    className=" flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela"
                                    data-seta-posicao="direita"
                                  >
                                    <span className="mr-0.5 tail-listagem-prod-precos2-parcela-parcelas">
                                      6x
                                    </span>
                                    <span className="tail-listagem-prod-precos2-parcela-cifrao">
                                      R$ 58,32
                                    </span>
                                  </div>
                                  <div
                                    className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista"
                                    data-seta-posicao="baixo"
                                  >
                                    <span className="mr-0.5">à vista</span>
                                    <span>R$ 349,90</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-privado ev-listagem-prod-preco-privado"
                              data-seta-posicao="direita"
                            >
                              <span>Somente logado</span>
                            </div>
                            <div
                              className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-consulta ev-listagem-prod-preco-consulta"
                              data-seta-posicao="direita"
                            >
                              <span>Consulta</span>
                            </div>
                            <div
                              className="hidden flex items-center text-base font-bold text-gray-500 tail-listagem-prod-preco-esgotado ev-listagem-prod-preco-esgotado"
                              data-seta-posicao="direita"
                            >
                              <span>Esgotado</span>
                            </div>
                          </div>
                        </div>
                      </a>
                      <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
                        <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
                          <li
                            className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002"
                            title="40"
                          >
                            <a
                              href="/prod/2581/vestido-longo-tule-glitter-busto-plissado-fucsia#s16435"
                              target="_self"
                              className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto"
                            >
                              40
                            </a>
                          </li>
                          <li aria-hidden="true" className="hidden" />
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>

                <button
                  aria-label="Avançar Slider para os próximos produtos"
                  className="absolute right-0 p-2 pr-0.5 tail-listagem-seta tail-listagem-prod-seta"
                  // onclick="listagemSlider('avancar')"
                >
                  <div className="grid flex-shrink-0 px-2 border border-gray-300 border-solid rounded-full place-content-center bg-gray-50 tail-listagem-seta-interno tail-listagem-prod-seta-interno ev-listagem-seta-interno">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="h-3 md:h-4 -mr-0.5 text-gray-500 pointer-events-none"
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
            </section> */}
            </section>
          </article>
        </div>
      )}
    </>
  );
};

export default MainProductPage;
