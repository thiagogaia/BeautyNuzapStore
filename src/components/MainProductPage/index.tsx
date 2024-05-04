import "./style.css";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useContext, useEffect, useRef, useState } from "react";
import { IProductData } from "../../contexts/types";
import Gallery from "./gallery";
import ProductVariations from "./productVariations";
import Loading from "../Loading";
import { CartContext } from "../../contexts/cart";
import { StoreContext } from "../../contexts/Store";

import { FaPinterestP, FaWhatsapp, FaFacebookF } from "react-icons/fa";

const MainProductPage = () => {
  const { storeData } = useContext(StoreContext);
  const { productUri, storeUri } = useParams();

  const [productData, setProductData] = useState({} as IProductData);
  const [load, setLoad] = useState(true);
  const [variation, setVariation] = useState("");
  const [variationId, setVariationId] = useState("");
  const [variationItem, setVariationItem] = useState("");
  const [variationItemId, setVariationItemId] = useState("");
  const [slideIndex, setSlideIndex] = useState(0);
  const [buyModal, setBuyModal] = useState<boolean>(false);

  const categoryData = storeData.business.categories.find((e) => e.name === productData.category);

  const modal = useRef<HTMLDivElement>(null);
  const buyButton = useRef<HTMLButtonElement>(null);
  const floatingBuyButton = useRef<HTMLDivElement>(null);

  const { addToCart } = useContext(CartContext);

  const checkPricePromo =
    Number(productData.price_promo) < Number(productData.price) && Number(productData.price_promo);

  useEffect(() => {
    api
      .get(`/products/${productUri}?_store=${storeUri}`)
      .then((res) => {
        setProductData(res.data);

        if (res.data.variation_data.length > 0) {
          setVariation(res.data.variation_data[0].name);
          setVariationId(res.data.variation_data[0].id);
          setVariationItem(res.data.variation_data[0].item[0].variation_item_name);
          setVariationItemId(res.data.variation_data[0].item[0].id);
        }

        setLoad(false);
      })
      .catch(() => {});
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const purchase = (productData: IProductData) => {
    addToCart({
      ...productData,
      variation_name: `${variation} - ${variationItem}`,
      variation_id: variationId,
      variation_item_id: variationItemId,
    });

    setBuyModal(true);
  };

  useEffect(() => {
    const pageClickEvent = (e: Event) => {
      if (modal.current !== null && modal.current.contains(e.target as Node)) {
        setBuyModal(false);
      }
    };

    if (buyModal) {
      document.addEventListener("click", pageClickEvent);
    }

    return () => document.removeEventListener("click", pageClickEvent);
  }, [buyModal]);

  useEffect(() => {
    const scrollPage = () => {
      if (floatingBuyButton.current && buyButton.current) {
        const observer = new IntersectionObserver(
          ([e]) => {
            if (floatingBuyButton.current && buyButton.current) {
              const stickyTop = floatingBuyButton.current.getBoundingClientRect().top;
              const buttonTop = buyButton.current.getBoundingClientRect().top;

              if (e.intersectionRatio === 1 && buttonTop > stickyTop) {
                floatingBuyButton.current.style.visibility = "visible";
              } else if (e.intersectionRatio === 1 && buttonTop <= stickyTop) {
                floatingBuyButton.current.style.visibility = "hidden";
              }
            }
          },
          { threshold: [0, 1] }
        );

        observer.observe(floatingBuyButton.current);
      }
    };
    window.addEventListener("scroll", scrollPage);

    return () => window.removeEventListener("scroll", scrollPage);
  }, []);

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <div id="principal-limite" className="principal-limite">
          <article id="conteudo" className="conteudo">
            {/* navigation */}
            <section itemProp="breadcrumb" className="theme-mode-bg pt-6 js-appec-escondido">
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
                        (window.location.href = `${window.location.origin}/${storeUri}/loja/${categoryData?.uri}`)
                      }
                    >
                      {categoryData?.uri}
                    </span>
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
                    <a href={`/${storeUri}/produto/${productData.uri}`}>
                      {productData.name.toLocaleLowerCase()}
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid max-w-screen-md gap-8 mx-auto mt-6 overflow-visible text-sm md:gap-10 lg:mx-0 lg:max-w-none tail-prod-ver-geral">
              <div className="grid gap-8 tail-prod-ver-tamanho-colunas js-tail-comprar">
                <Gallery
                  productData={productData}
                  variation={variation}
                  slideIndex={slideIndex}
                  setSlideIndex={setSlideIndex}
                />

                <div className="flex flex-col gap-8">
                  <div className="relative flex-shrink-0 text-sm lg:w-full lg:col-start-2 lg:row-span-2">
                    <form
                      autoComplete="off"
                      noValidate
                      // onsubmit="etapaComprarFetch()"
                      data-tipo="produto"
                      className="theme-mode-bg flex flex-col gap-8 js-tail-prod-ver-form"
                    >
                      <div className="grid gap-1 tail-prod-ver-grupo-nome">
                        <h1 className="text-2xl ev-prod-ver-nome tail-prod-ver-nome">
                          <span>{productData.name}</span>
                        </h1>
                        <div className="theme-mode-second-color flex items-center gap-1.5 text-xs tail-prod-ver-codigo">
                          <div>
                            <span>Código {productData.code}</span>
                          </div>

                          {/* reference */}
                          {/* <div className="h-3 w-px bg-gray-400 rounded-full" />
                          <div className="">
                            <span>Referência 6407V04</span>
                          </div> */}
                        </div>
                      </div>

                      {/* stock options */}
                      <div className="grid gap-8 tail-prod-ver-grupo-precos-e-variacoes">
                        <div className="grid gap-1 tail-prod-ver-grupo-precos ">
                          <div className="flex flex-col gap-1 tail-etapa-preco-interno">
                            <div
                              className="theme-mode-bg border border-solid relative flex flex-col justify-center h-32 gap-1 p-4 rounded-lg lg:h-28 ev-etapa-preco-grupo tail-etapa-preco-grupo"
                              // onclick="etapaParcelaFetch()"
                            >
                              {+productData.stock <= 0 ? (
                                <div className="text-3xl font-bold lg:text-2xl tail-etapa-preco-esgotado ev-etapa-preco-esgotado js-tail-etapa-preco-esgotado">
                                  Esgotado
                                </div>
                              ) : (
                                <>
                                  {/* discont */}
                                  {Boolean(checkPricePromo) && (
                                    <div className="flex items-center justify-center gap-1 lg:justify-start tail-etapa-preco-de-container js-tail-etapa-preco-de-container">
                                      <del
                                        className="theme-mode-second-color relative flex items-center flex-shrink-0 gap-1 text-base no-underline tail-etapa-preco-de ev-etapa-preco-de js-tail-etapa-preco-de"
                                        data-seta-posicao="cima"
                                      >
                                        <div className="bg-[rgba(var(--second-text-color),1)] absolute w-full h-px" />
                                        <span className="js-tail-etapa-preco-de-valor">
                                          {Number(productData.price).toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                          })}
                                        </span>
                                      </del>
                                      <div
                                        className="flex items-center gap-1 text-xs text-green-700 tail-etapa-preco-economia js-tail-etapa-preco-economia"
                                        data-preco-economia-exibir={1}
                                      >
                                        {/* <div className="hidden">
                                          <span className="js-tail-etapa-preco-economia-valor">
                                            R$ 99,90
                                          </span>
                                        </div> */}
                                        <div>
                                          <span className="js-tail-etapa-preco-economia-numero">
                                            {Math.round(
                                              100 -
                                                (Number(productData.price_promo) /
                                                  Number(productData.price)) *
                                                  100
                                            )}
                                            % OFF
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  {/* price */}
                                  <div className="flex flex-col items-center justify-center gap-1 lg:flex-row lg:justify-start tail-etapa-preco-grupo-precos-principais">
                                    <div className="flex items-center flex-shrink-0 gap-1 text-3xl font-bold lg:text-2xl tail-etapa-preco-por ev-etapa-preco-por js-tail-etapa-preco-por">
                                      <span className="js-tail-etapa-preco-por-valor">
                                        {Number(
                                          checkPricePromo
                                            ? productData.price_promo
                                            : productData.price
                                        ).toLocaleString("pt-BR", {
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

                        <ProductVariations
                          productData={productData}
                          variation={variation}
                          setVariation={setVariation}
                          setVariationId={setVariationId}
                          variationItem={variationItem}
                          setVariationItemId={setVariationItemId}
                          setVariationItem={setVariationItem}
                          setSlideIndex={setSlideIndex}
                        />
                      </div>

                      {/* buy button */}
                      <div className="grid gap-4 tail-prod-ver-grupo-comprar">
                        <div className="flex gap-2 tail-etapa-comprar js-tail-etapa-comprar w-full lg:max-w-xs">
                          <button
                            ref={buyButton}
                            type="button"
                            onClick={() => purchase(productData)}
                            className="border-[rgba(var(--reverser-color),1)] border border-solid relative flex-grow py-3 text-base tracking-wide text-center text-white transition-opacity bg-black rounded-lg select-none outline-none hover:opacity-70 ev-etapa-comprar-btn tail-etapa-comprar-btn js-tail-etapa-comprar-btn"
                          >
                            Comprar
                          </button>
                          {/* warn me */}
                          {/* <button
                            type="button"
                            className="flex-grow py-3 text-base tracking-wide text-center text-white transition-opacity bg-black border border-transparent border-solid rounded-lg select-none hover:opacity-70 tail-etapa-comprar-btn-espera js-tail-etapa-comprar-btn-esgotado"
                            // onclick="etapaEsperaModal()"
                          >
                            <div className="tail-etapa-comprar-btn-texto-espera">Avise-me</div>
                          </button> */}
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
                            className="grid px-3 border border-solid rounded-lg place-content-center group md:px-2 tail-etapa-desejo-link ev-etapa-desejo-link js-tail-etapa-desejo-link"
                          >
                            <svg
                              className="h-6 mx-1 transition-opacity opacity-70 group-hover:opacity-100 ev-etapa-desejo-icone-0 js-tail-etapa-desejo-icone-0"
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
                              className="escondido h-6 mx-1 transition-opacity opacity-100 group-hover:opacity-70 ev-etapa-desejo-icone-1 js-tail-etapa-desejo-icone-1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
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
                            {/* whatsapp */}
                            <li className="border-[rgba(var(--border-color),1)] border border-solid rounded-full tail-etapa-social-item ev-etapa-social-item">
                              <a
                                href={`https://wa.me/?text=https%3A%2F%2Floja.nuzap.com.br%2F${storeUri}%2Fproduto%2F${productUri}`}
                                className="p-2 inline-block cursor-pointer ev-etapa-social-link js-whatsapp"
                                target="_blank"
                              >
                                <span className="sr-only">Compartilhar com WhatsApp</span>
                                <FaWhatsapp className="theme-mode-second-color w-4 h-4 opacity-60 pointer-events-none tail-etapa-social-svg ev-etapa-social-svg" />
                              </a>
                            </li>
                            {/* email */}
                            {/* <li className="theme-mode-second-color border border-solid rounded-full tail-etapa-social-item ev-etapa-social-item">
                              <a
                                href={`mailto:?Subject=Olha%20o%20que%20eu%20gostei&body=Achei%20legal%20e%20queria%20compartilhar%20com%20você:%20https%3A%2F%2Floja.nuzap.com.br%2F${storeUri}%2Fproduto%2F2${productUri}`}
                                target="_blank"
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
                            </li> */}
                            {/* facebook */}
                            <li className="border-[rgba(var(--border-color),1)] border border-solid rounded-full tail-etapa-social-item ev-etapa-social-item">
                              <a
                                href={`//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Floja.nuzap.com.br%2F${storeUri}%2Fproduto%2F${productUri}`}
                                target="_blank"
                                className="p-2 inline-block cursor-pointer ev-etapa-social-link"
                              >
                                <span className="sr-only">Compartilhar com Facebook</span>
                                <FaFacebookF className="theme-mode-second-color w-4 h-4 opacity-60 pointer-events-none tail-etapa-social-svg ev-etapa-social-svg" />
                              </a>
                            </li>
                            {/* pintrest */}
                            <li className="border-[rgba(var(--border-color),1)] border border-solid rounded-full tail-etapa-social-item ev-etapa-social-item">
                              <a
                                href="https://pinterest.com/"
                                className="p-2 inline-block cursor-pointer ev-etapa-social-link"
                              >
                                <span className="sr-only">Compartilhar com Pinterest</span>
                                <FaPinterestP className="theme-mode-second-color w-4 h-4 opacity-60 pointer-events-none tail-etapa-social-svg ev-etapa-social-svg" />
                              </a>
                            </li>
                          </ul>
                        </section>
                      </div>
                    </form>
                  </div>

                  <div>
                    {/* calculate shipping */}
                    <details className="theme-mode-bg border-t border-solid tail-prod-ver-details tail-etapa-frete js-tail-etapa-frete">
                      <summary className="hover:bg-[rgba(var(--border-color),.5)] flex items-center justify-between px-2 py-4 text-sm cursor-pointer tail-prod-ver-summary">
                        <h2 className="text-xl lg:text-base tail-prod-ver-summary-tt">
                          Calcular o prazo de entrega
                        </h2>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="currentColor"
                          className="theme-mode-second-color h-4 tail-prod-ver-details-icone"
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
                            className="theme-mode-bg placeholder-[rgba(var(--text-color),1)] w-full flex-shrink px-2.5 py-2 overflow-visible text-xs transition-colors border border-solid rounded-lg hover:border-blue-500 outline-none focus:border-blue-500 tail-etapa-frete-cep js-tail-etapa-frete-cep js-cookie-cep js-imask-cep"
                            autoComplete="off"
                            inputMode="decimal"
                            maxLength={9}
                          />
                          <button
                            type="button"
                            // onclick="etapaFreteFetch()"
                            className="border-[rgba(var(--reverser-color),1)] border border-solid relative flex items-center flex-shrink-0 gap-1 px-3 text-white transition-opacity bg-black rounded-lg w-34 hover:opacity-70 tail-etapa-frete-btn ev-etapa-frete-btn js-tail-etapa-frete-btn"
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
                    <details className="theme-mode-bg border-t border-solid tail-prod-ver-details">
                      <summary className="hover:bg-[rgba(var(--border-color),.5)] flex items-center justify-between px-2 py-4 text-sm cursor-pointer tail-prod-ver-summary">
                        <h2 className="text-xl lg:text-base tail-prod-ver-summary-tt">Descrição</h2>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="currentColor"
                          className="theme-mode-second-color h-4 tail-prod-ver-details-icone"
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
                        </div>
                      </div>
                    </details>
                  </div>
                </div>
              </div>

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
            </section>

            {/* floating buy button */}
            <div
              ref={floatingBuyButton}
              className="theme-mode-bg float-buy-btn relative sticky z-10 flex gap-1 inset-x-0 bottom-0 px-2.5 py-3 overflow-visible border-t border-solid md:hidden tail-etapa-comprar-btn-flutuante js-tail-etapa-comprar-btn-flutuante"
            >
              <button
                className="border-[rgba(var(--reverser-color),1)] border border-solid relative flex-grow py-3 text-base tracking-wide text-center text-white transition-opacity bg-black rounded-lg select-none outline-none hover:opacity-70 ev-etapa-comprar-btn ev-etapa-comprar-btn js-tail-etapa-comprar-flutuante-btn"
                onClick={() => purchase(productData)}
              >
                Comprar
              </button>

              {/* <button className="flex-grow py-3 text-base tracking-wide text-center text-gray-500 bg-gray-100 border border-gray-300 border-solid rounded-lg pointer-events-none select-none escondido ev-etapa-comprar-btn-esgotado js-tail-etapa-comprar-flutuante-btn-esgotado">
                Esgotado
              </button>

              <a
                href="/login?redir=%2Fprod%2F2577"
                className="relative flex-grow py-3 text-base tracking-wide text-center text-white transition-opacity bg-black border-none rounded-lg select-none outline-none hover:opacity-70 escondido ev-etapa-comprar-btn-privado js-tail-etapa-comprar-flutuante-privado"
              >
                Consulte
              </a>

              <button className="flex-grow py-3 text-base tracking-wide text-center text-gray-500 bg-gray-100 border border-gray-300 border-solid rounded-lg pointer-events-none select-none cursor-not-allowed escondido ev-etapa-comprar-btn-consulte js-tail-etapa-comprar-flutuante-btn-consulte">
                Consulte
              </button> */}
            </div>

            {buyModal && (
              <section
                style={{
                  background: "rgba(0, 0, 0, 0.7)",
                  position: "fixed",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100vh",
                  zIndex: "999",
                }}
              >
                <div ref={modal} style={{ width: "100%", height: "100vh" }}></div>
                <div
                  className="theme-mode-bg z-50 w-11/12 max-w-xl text-left border border-solid outline-none rounded-lg shadow-lg scroll-auto tail-prod-ver-modal js-tail-prod-ver-modal js-tail-etapa-comprar-modal"
                  style={{
                    position: "fixed",
                    top: "50%",
                    transform: "translate(-50%,-50%)",
                    left: "50%",
                  }}
                >
                  <form
                    autoComplete="off"
                    noValidate
                    id="form-carrinho-ajax"
                    className="px-4 py-6 md:p-8"
                  >
                    <div className="grid gap-4">
                      <div className="text-lg">Produto adicionado</div>
                      <div className="flex flex-wrap items-center gap-4 text-center md:flex-nowrap">
                        <button
                          type="button"
                          onClick={() => setBuyModal(false)}
                          className="border-[rgba(var(--reverser-color),1)] border border-solid w-full px-4 py-2 flex justify-center items-center gap-1.5 text-base text-white bg-black rounded-md transition-opacity hover:opacity-70 tail-prod-ver-btn-seta tail-prod-ver-btn-modal ev-prod-ver-btn-modal js-tail-etapa-comprar-modal-btn"
                        >
                          Continuar comprando
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="3"
                            stroke="currentColor"
                            className="h-3.5 transition pointer-events-none tail-prod-ver-btn-seta-icone"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            (window.location.href =
                              window.location.origin + `/${storeUri}/carrinho`)
                          }
                          className="border-[rgba(var(--reverser-color),1)] border border-solid w-full px-4 py-2 flex justify-center items-center gap-1.5 text-base text-white bg-black rounded-md transition-opacity hover:opacity-70 tail-prod-ver-btn-seta tail-prod-ver-btn-modal ev-prod-ver-btn-modal"
                        >
                          Ir para o carrinho
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-4 transition pointer-events-none tail-prod-ver-btn-seta-icone"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </section>
            )}
          </article>
        </div>
      )}
    </>
  );
};

export default MainProductPage;
