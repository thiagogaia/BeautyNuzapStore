import { IShowcaseProps } from "./types";

const Showcase = ({ title }: IShowcaseProps) => {
  return (
    <>
      <div className="cont-limite cont-limite-427 cont-pdd-pq ">
        <h2 className="tt vitr-tt cont-tt  cont-ali-ip-c cont-ali-fb-c cont-ali-dk-c cont-ali-mn-c cont-tt-427">
          <a href="https://www.vivadress.com.br/cat/5/new-in" className="tt-url">
            <span className="tt-texto">{title}</span>
          </a>
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
                    key={e}
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
          </li>
        </ul>
      </div>
    </>
  );
};

export default Showcase;
