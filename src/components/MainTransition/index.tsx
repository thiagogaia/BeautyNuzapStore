import Slider from '../Slider'
import './style.css'


const MainTransition = () => {
  return (
    <>
      <main id="principal" className="principal tail-principal ev-principal">
        <article id="conteudo" className="conteudo">
          <div className="cont-menu">
            <div className="cont-separador cont-separador-120  esconder-dk esconder-mn " />
            <Slider />
            
            <div className="cont-separador cont-separador-40  " />
            {/* PAgamentos */}
            <div className="cont-limite cont-limite-40  ">
              <ul className="cont-lista cont-lista-40  ">
                <li className="vitr-grupo-box vitr-grupo-hash-118 conteudo-hash-118 cont-item cont-item-118 esconder-dk esconder-mn  " data-id={118}>
                  <div className="cont-fotos">
                    <figure className="cont-fotos-box cont-fotos-hash-247 cont-mgm-s-md">
                      <picture className="w-full">
                        <source srcSet="https://thumb.braavo.me/vivadress/400/720908950.webp 400w, https://thumb.braavo.me/vivadress/600/720908950.webp 600w, https://thumb.braavo.me/vivadress/0/720908950.webp 1x, https://thumb.braavo.me/vivadress/0/720908950.webp 2x" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, (max-width: 1199px) 600px, 100vw" type="image/webp" />
                        <source srcSet="https://thumb.braavo.me/vivadress/400/720908950.png 400w, https://thumb.braavo.me/vivadress/600/720908950.png 600w, https://thumb.braavo.me/vivadress/0/720908950.png 1x, https://thumb.braavo.me/vivadress/0/720908950.png 2x" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, (max-width: 1199px) 600px, 100vw" type="image/jpeg" />
                        <img loading="lazy" src="https://thumb.braavo.me/vivadress/0/720908950.png" alt="Viva Dress" className="cont-fotos-imagem mx-auto" />
                      </picture>
                    </figure>
                  </div>
                </li>
                <li className="vitr-grupo-box vitr-grupo-hash-41 conteudo-hash-41 cont-item cont-item-41 esconder-ip esconder-fb  " data-id={41}>
                  <div className="cont-banners">
                    <div className="cont-banners-menu">
                      <div className="cont-banners-lista">
                        <div className="cont-banners-banners cont-mgm-s-gr">
                          <figure className="cont-banners-box ">
                            <picture className="w-full">
                              <source srcSet="https://thumb.braavo.me/vivadress/400/2644292766.webp 400w, https://thumb.braavo.me/vivadress/600/2644292766.webp 600w, https://thumb.braavo.me/vivadress/0/2644292766.webp 1x, https://thumb.braavo.me/vivadress/0/2644292766.webp 2x" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, (max-width: 1199px) 600px, 100vw" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/400/2644292766.jpg 400w, https://thumb.braavo.me/vivadress/600/2644292766.jpg 600w, https://thumb.braavo.me/vivadress/0/2644292766.jpg 1x, https://thumb.braavo.me/vivadress/0/2644292766.jpg 2x" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, (max-width: 1199px) 600px, 100vw" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/0/2644292766.jpg" alt="Viva Dress" className="cont-banners-imagem" />
                            </picture>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* Pagamentos */}
            <div className="cont-separador cont-separador-427 cont-alt-md " />
            <div className="cont-limite cont-limite-427 cont-pdd-pq ">
              <h2 className="tt vitr-tt cont-tt  cont-ali-ip-c cont-ali-fb-c cont-ali-dk-c cont-ali-mn-c cont-tt-427">
                <a href="https://www.vivadress.com.br/cat/5/new-in" className="tt-url">
                  <span className="tt-texto">New In</span>
                </a>
              </h2>
              <ul className="cont-lista cont-lista-427 cont-mgm-l-md ">
                <li className="vitr-grupo-box vitr-grupo-hash-428 conteudo-hash-428 cont-item cont-item-428  cont-mgm-i-md" data-id={428}>
                  <section className="relative flex items-center gap-2 overflow-hidden tail-listagem-prod js-tail-listagem-prod">
                    <button aria-label="Voltar Slider para os produtos anteriores" className="absolute left-0 z-10 p-2 pl-0.5 tail-listagem-seta tail-listagem-prod-seta" onclick="listagemSlider('voltar');">
                      <div className="grid flex-shrink-0 px-2 border border-gray-300 border-solid rounded-full place-content-center bg-gray-50 tail-listagem-seta-interno tail-listagem-prod-seta-interno ev-listagem-seta-interno">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3 md:h-4 -ml-0.5 text-gray-500 pointer-events-none ev-listagem-seta-icone">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                      </div>
                    </button>
                    <ul className="flex flex-grow ml-2 overflow-x-scroll tail-listagem-prod-slider-container js-tail-listagem-prod-lista flex flex-grow ml-2 gap-y-2">
                      <li className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4" data-seta-posicao="direita">
                        <a href="/prod/2554/estola-de-pele-prata" ref="alternate" target="_self" className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link">
                          <div className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile" style={{paddingBottom: '133%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1947090195.webp 200w, https://thumb.braavo.me/vivadress/400/1947090195.webp 400w, https://thumb.braavo.me/vivadress/600/1947090195.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1947090195.jpg 200w, https://thumb.braavo.me/vivadress/400/1947090195.jpg 400w, https://thumb.braavo.me/vivadress/600/1947090195.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/1947090195.jpg" alt="Estola de Pele Prata" className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover" />
                            </picture>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/867059651.webp 200w, https://thumb.braavo.me/vivadress/400/867059651.webp 400w, https://thumb.braavo.me/vivadress/600/867059651.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/867059651.jpg 200w, https://thumb.braavo.me/vivadress/400/867059651.jpg 400w, https://thumb.braavo.me/vivadress/600/867059651.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/867059651.jpg" alt="Estola de Pele Prata" className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover" />
                            </picture>
                            <div className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto" data-seta-posicao="direita">
                              -13%              
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
                            <h4 className="text-xs lg:text-sm ev-listagem-prod-nome" title="Estola de Pele Prata" data-seta-posicao="direita">Estola de Pele Prata</h4>
                            <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
                              <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                                  <ins className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>199</span><span>,</span><span>90</span>
                                  </ins>
                                  <del className=" flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>229</span><span>,</span><span>90</span>
                                  </del>
                                  <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                                    <div className=" flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela" data-seta-posicao="direita">
                                      <span className="mr-0.5 tail-listagem-prod-precos2-parcela-parcelas">3x</span><span className="tail-listagem-prod-precos2-parcela-cifrao">R$</span><span className="tail-listagem-prod-precos2-parcela-valor">66,63</span>
                                    </div>
                                    <div className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista" data-seta-posicao="baixo">
                                      <span className="mr-0.5">à vista</span><span>R$</span><span>199,90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-privado ev-listagem-prod-preco-privado" data-seta-posicao="direita">
                                <span>Somente logado</span>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-consulta ev-listagem-prod-preco-consulta" data-seta-posicao="direita">
                                <span>Consulta</span>
                              </div>
                              <div className="hidden flex items-center text-base font-bold text-gray-500 tail-listagem-prod-preco-esgotado ev-listagem-prod-preco-esgotado" data-seta-posicao="direita">
                                <span>Esgotado</span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
                          <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title="Único">
                              <a href="/prod/2554/estola-de-pele-prata#s16353" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">Único</a>
                            </li>
                            <li aria-hidden="true" className="hidden" />
                          </ul>
                        </div>
                      </li>
                      <li className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4" data-seta-posicao="direita">
                        <a href="/prod/2577/vestido-longo-mirelle-verde" ref="alternate" target="_self" className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link">
                          <div className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile" style={{paddingBottom: '133%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3275182186.webp 200w, https://thumb.braavo.me/vivadress/400/3275182186.webp 400w, https://thumb.braavo.me/vivadress/600/3275182186.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3275182186.jpg 200w, https://thumb.braavo.me/vivadress/400/3275182186.jpg 400w, https://thumb.braavo.me/vivadress/600/3275182186.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/3275182186.jpg" alt="Vestido Longo Mirelle Verde" className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover" />
                            </picture>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2224499386.webp 200w, https://thumb.braavo.me/vivadress/400/2224499386.webp 400w, https://thumb.braavo.me/vivadress/600/2224499386.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2224499386.jpg 200w, https://thumb.braavo.me/vivadress/400/2224499386.jpg 400w, https://thumb.braavo.me/vivadress/600/2224499386.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/2224499386.jpg" alt="Vestido Longo Mirelle Verde" className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover" />
                            </picture>
                            <div className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto" data-seta-posicao="direita">
                              -18%              
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
                            <h4 className="text-xs lg:text-sm ev-listagem-prod-nome" title="Vestido Longo Mirelle Verde" data-seta-posicao="direita">Vestido Longo Mirelle Verde</h4>
                            <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
                              <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                                  <ins className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>349</span><span>,</span><span>90</span>
                                  </ins>
                                  <del className=" flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>429</span><span>,</span><span>90</span>
                                  </del>
                                  <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                                    <div className=" flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela" data-seta-posicao="direita">
                                      <span className="mr-0.5 tail-listagem-prod-precos2-parcela-parcelas">6x</span><span className="tail-listagem-prod-precos2-parcela-cifrao">R$</span><span className="tail-listagem-prod-precos2-parcela-valor">58,32</span>
                                    </div>
                                    <div className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista" data-seta-posicao="baixo">
                                      <span className="mr-0.5">à vista</span><span>R$</span><span>349,90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-privado ev-listagem-prod-preco-privado" data-seta-posicao="direita">
                                <span>Somente logado</span>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-consulta ev-listagem-prod-preco-consulta" data-seta-posicao="direita">
                                <span>Consulta</span>
                              </div>
                              <div className="hidden flex items-center text-base font-bold text-gray-500 tail-listagem-prod-preco-esgotado ev-listagem-prod-preco-esgotado" data-seta-posicao="direita">
                                <span>Esgotado</span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
                          <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={40}>
                              <a href="/prod/2577/vestido-longo-mirelle-verde#s16406" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">40</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={42}>
                              <a href="/prod/2577/vestido-longo-mirelle-verde#s16407" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">42</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={44}>
                              <a href="/prod/2577/vestido-longo-mirelle-verde#s16408" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">44</a>
                            </li>
                            <li aria-hidden="true" className="hidden" />
                          </ul>
                        </div>
                      </li>
                      <li className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4" data-seta-posicao="direita">
                        <a href="/prod/2581/vestido-longo-tule-glitter-busto-plissado-fucsia" ref="alternate" target="_self" className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link">
                          <div className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile" style={{paddingBottom: '133%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1483771895.webp 200w, https://thumb.braavo.me/vivadress/400/1483771895.webp 400w, https://thumb.braavo.me/vivadress/600/1483771895.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1483771895.jpg 200w, https://thumb.braavo.me/vivadress/400/1483771895.jpg 400w, https://thumb.braavo.me/vivadress/600/1483771895.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/1483771895.jpg" alt="Vestido Longo Tule Glitter Busto Plissado Fucsia" className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover" />
                            </picture>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3659536422.webp 200w, https://thumb.braavo.me/vivadress/400/3659536422.webp 400w, https://thumb.braavo.me/vivadress/600/3659536422.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3659536422.jpg 200w, https://thumb.braavo.me/vivadress/400/3659536422.jpg 400w, https://thumb.braavo.me/vivadress/600/3659536422.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/3659536422.jpg" alt="Vestido Longo Tule Glitter Busto Plissado Fucsia" className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover" />
                            </picture>
                            <div className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto" data-seta-posicao="direita">
                              -18%              
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
                            <h4 className="text-xs lg:text-sm ev-listagem-prod-nome" title="Vestido Longo Tule Glitter Busto Plissado Fucsia" data-seta-posicao="direita">Vestido Longo Tule Glitter Busto Plissado Fucsia</h4>
                            <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
                              <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                                  <ins className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>349</span><span>,</span><span>90</span>
                                  </ins>
                                  <del className=" flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>429</span><span>,</span><span>90</span>
                                  </del>
                                  <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                                    <div className=" flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela" data-seta-posicao="direita">
                                      <span className="mr-0.5 tail-listagem-prod-precos2-parcela-parcelas">6x</span><span className="tail-listagem-prod-precos2-parcela-cifrao">R$</span><span className="tail-listagem-prod-precos2-parcela-valor">58,32</span>
                                    </div>
                                    <div className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista" data-seta-posicao="baixo">
                                      <span className="mr-0.5">à vista</span><span>R$</span><span>349,90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-privado ev-listagem-prod-preco-privado" data-seta-posicao="direita">
                                <span>Somente logado</span>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-consulta ev-listagem-prod-preco-consulta" data-seta-posicao="direita">
                                <span>Consulta</span>
                              </div>
                              <div className="hidden flex items-center text-base font-bold text-gray-500 tail-listagem-prod-preco-esgotado ev-listagem-prod-preco-esgotado" data-seta-posicao="direita">
                                <span>Esgotado</span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
                          <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={40}>
                              <a href="/prod/2581/vestido-longo-tule-glitter-busto-plissado-fucsia#s16434" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">40</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={42}>
                              <a href="/prod/2581/vestido-longo-tule-glitter-busto-plissado-fucsia#s16435" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">42</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={44}>
                              <a href="/prod/2581/vestido-longo-tule-glitter-busto-plissado-fucsia#s16436" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">44</a>
                            </li>
                            <li aria-hidden="true" className="hidden" />
                          </ul>
                        </div>
                      </li>
                      <li className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4" data-seta-posicao="direita">
                        <a href="/prod/2557/vestido-longo-um-ombro-tule-glitter-lilas" ref="alternate" target="_self" className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link">
                          <div className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile" style={{paddingBottom: '133%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1988205578.webp 200w, https://thumb.braavo.me/vivadress/400/1988205578.webp 400w, https://thumb.braavo.me/vivadress/600/1988205578.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1988205578.jpg 200w, https://thumb.braavo.me/vivadress/400/1988205578.jpg 400w, https://thumb.braavo.me/vivadress/600/1988205578.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/1988205578.jpg" alt="Vestido Longo um Ombro Tule Glitter Lilás" className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover" />
                            </picture>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/824305370.webp 200w, https://thumb.braavo.me/vivadress/400/824305370.webp 400w, https://thumb.braavo.me/vivadress/600/824305370.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/824305370.jpg 200w, https://thumb.braavo.me/vivadress/400/824305370.jpg 400w, https://thumb.braavo.me/vivadress/600/824305370.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/824305370.jpg" alt="Vestido Longo um Ombro Tule Glitter Lilás" className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover" />
                            </picture>
                            <div className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto" data-seta-posicao="direita">
                              -10%              
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
                            <h4 className="text-xs lg:text-sm ev-listagem-prod-nome" title="Vestido Longo um Ombro Tule Glitter Lilás" data-seta-posicao="direita">Vestido Longo um Ombro Tule Glitter Lilás</h4>
                            <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
                              <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                                  <ins className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>349</span><span>,</span><span>90</span>
                                  </ins>
                                  <del className=" flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>389</span><span>,</span><span>90</span>
                                  </del>
                                  <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                                    <div className=" flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela" data-seta-posicao="direita">
                                      <span className="mr-0.5 tail-listagem-prod-precos2-parcela-parcelas">6x</span><span className="tail-listagem-prod-precos2-parcela-cifrao">R$</span><span className="tail-listagem-prod-precos2-parcela-valor">58,32</span>
                                    </div>
                                    <div className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista" data-seta-posicao="baixo">
                                      <span className="mr-0.5">à vista</span><span>R$</span><span>349,90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-privado ev-listagem-prod-preco-privado" data-seta-posicao="direita">
                                <span>Somente logado</span>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-consulta ev-listagem-prod-preco-consulta" data-seta-posicao="direita">
                                <span>Consulta</span>
                              </div>
                              <div className="hidden flex items-center text-base font-bold text-gray-500 tail-listagem-prod-preco-esgotado ev-listagem-prod-preco-esgotado" data-seta-posicao="direita">
                                <span>Esgotado</span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
                          <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={38}>
                              <a href="/prod/2557/vestido-longo-um-ombro-tule-glitter-lilas#s16365" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">38</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={40}>
                              <a href="/prod/2557/vestido-longo-um-ombro-tule-glitter-lilas#s16366" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">40</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={42}>
                              <a href="/prod/2557/vestido-longo-um-ombro-tule-glitter-lilas#s16367" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">42</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={44}>
                              <a href="/prod/2557/vestido-longo-um-ombro-tule-glitter-lilas#s16368" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">44</a>
                            </li>
                            <li aria-hidden="true" className="hidden" />
                          </ul>
                        </div>
                      </li>
                      <li className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4" data-seta-posicao="direita">
                        <a href="/prod/2545/vestido-longo-com-recortes-na-cintura-tule-glitter-fucsia" ref="alternate" target="_self" className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link">
                          <div className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile" style={{paddingBottom: '133%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1883196126.webp 200w, https://thumb.braavo.me/vivadress/400/1883196126.webp 400w, https://thumb.braavo.me/vivadress/600/1883196126.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1883196126.jpg 200w, https://thumb.braavo.me/vivadress/400/1883196126.jpg 400w, https://thumb.braavo.me/vivadress/600/1883196126.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/1883196126.jpg" alt="Vestido Longo com Recortes na Cintura Tule Glitter Fucsia" className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover" />
                            </picture>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/155403627.webp 200w, https://thumb.braavo.me/vivadress/400/155403627.webp 400w, https://thumb.braavo.me/vivadress/600/155403627.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/155403627.jpg 200w, https://thumb.braavo.me/vivadress/400/155403627.jpg 400w, https://thumb.braavo.me/vivadress/600/155403627.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/155403627.jpg" alt="Vestido Longo com Recortes na Cintura Tule Glitter Fucsia" className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover" />
                            </picture>
                            <div className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto" data-seta-posicao="direita">
                              -18%              
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
                            <h4 className="text-xs lg:text-sm ev-listagem-prod-nome" title="Vestido Longo com Recortes na Cintura Tule Glitter Fucsia" data-seta-posicao="direita">Vestido Longo com Recortes na Cintura Tule Glitter Fucsia</h4>
                            <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
                              <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                                  <ins className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>349</span><span>,</span><span>90</span>
                                  </ins>
                                  <del className=" flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>429</span><span>,</span><span>90</span>
                                  </del>
                                  <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                                    <div className=" flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela" data-seta-posicao="direita">
                                      <span className="mr-0.5 tail-listagem-prod-precos2-parcela-parcelas">6x</span><span className="tail-listagem-prod-precos2-parcela-cifrao">R$</span><span className="tail-listagem-prod-precos2-parcela-valor">58,32</span>
                                    </div>
                                    <div className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista" data-seta-posicao="baixo">
                                      <span className="mr-0.5">à vista</span><span>R$</span><span>349,90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-privado ev-listagem-prod-preco-privado" data-seta-posicao="direita">
                                <span>Somente logado</span>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-consulta ev-listagem-prod-preco-consulta" data-seta-posicao="direita">
                                <span>Consulta</span>
                              </div>
                              <div className="hidden flex items-center text-base font-bold text-gray-500 tail-listagem-prod-preco-esgotado ev-listagem-prod-preco-esgotado" data-seta-posicao="direita">
                                <span>Esgotado</span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
                          <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={38}>
                              <a href="/prod/2545/vestido-longo-com-recortes-na-cintura-tule-glitter-fucsia#s16332" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">38</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={40}>
                              <a href="/prod/2545/vestido-longo-com-recortes-na-cintura-tule-glitter-fucsia#s16333" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">40</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={42}>
                              <a href="/prod/2545/vestido-longo-com-recortes-na-cintura-tule-glitter-fucsia#s16334" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">42</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={44}>
                              <a href="/prod/2545/vestido-longo-com-recortes-na-cintura-tule-glitter-fucsia#s16335" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">44</a>
                            </li>
                            <li aria-hidden="true" className="hidden" />
                          </ul>
                        </div>
                      </li>
                      <li className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4" data-seta-posicao="direita">
                        <a href="/prod/2538/vestido-longo-com-alcas-nas-costas-verde" ref="alternate" target="_self" className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link">
                          <div className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile" style={{paddingBottom: '133%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2506996067.webp 200w, https://thumb.braavo.me/vivadress/400/2506996067.webp 400w, https://thumb.braavo.me/vivadress/600/2506996067.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2506996067.jpg 200w, https://thumb.braavo.me/vivadress/400/2506996067.jpg 400w, https://thumb.braavo.me/vivadress/600/2506996067.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/2506996067.jpg" alt="Vestido Longo com Alças nas Costas Verde" className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover" />
                            </picture>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1580296902.webp 200w, https://thumb.braavo.me/vivadress/400/1580296902.webp 400w, https://thumb.braavo.me/vivadress/600/1580296902.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1580296902.jpg 200w, https://thumb.braavo.me/vivadress/400/1580296902.jpg 400w, https://thumb.braavo.me/vivadress/600/1580296902.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/1580296902.jpg" alt="Vestido Longo com Alças nas Costas Verde" className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover" />
                            </picture>
                            <div className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto" data-seta-posicao="direita">
                              -18%              
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
                            <h4 className="text-xs lg:text-sm ev-listagem-prod-nome" title="Vestido Longo com Alças nas Costas Verde" data-seta-posicao="direita">Vestido Longo com Alças nas Costas Verde</h4>
                            <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
                              <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                                  <ins className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>349</span><span>,</span><span>90</span>
                                  </ins>
                                  <del className=" flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>429</span><span>,</span><span>90</span>
                                  </del>
                                  <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                                    <div className=" flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela" data-seta-posicao="direita">
                                      <span className="mr-0.5 tail-listagem-prod-precos2-parcela-parcelas">6x</span><span className="tail-listagem-prod-precos2-parcela-cifrao">R$</span><span className="tail-listagem-prod-precos2-parcela-valor">58,32</span>
                                    </div>
                                    <div className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista" data-seta-posicao="baixo">
                                      <span className="mr-0.5">à vista</span><span>R$</span><span>349,90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-privado ev-listagem-prod-preco-privado" data-seta-posicao="direita">
                                <span>Somente logado</span>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-consulta ev-listagem-prod-preco-consulta" data-seta-posicao="direita">
                                <span>Consulta</span>
                              </div>
                              <div className="hidden flex items-center text-base font-bold text-gray-500 tail-listagem-prod-preco-esgotado ev-listagem-prod-preco-esgotado" data-seta-posicao="direita">
                                <span>Esgotado</span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
                          <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={38}>
                              <a href="/prod/2538/vestido-longo-com-alcas-nas-costas-verde#s16283" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">38</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={40}>
                              <a href="/prod/2538/vestido-longo-com-alcas-nas-costas-verde#s16284" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">40</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={42}>
                              <a href="/prod/2538/vestido-longo-com-alcas-nas-costas-verde#s16285" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">42</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={44}>
                              <a href="/prod/2538/vestido-longo-com-alcas-nas-costas-verde#s16286" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">44</a>
                            </li>
                            <li aria-hidden="true" className="hidden" />
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <button aria-label="Avançar Slider para os próximos produtos" className="absolute right-0 p-2 pr-0.5 tail-listagem-seta tail-listagem-prod-seta" onclick="listagemSlider('avancar')">
                      <div className="grid flex-shrink-0 px-2 border border-gray-300 border-solid rounded-full place-content-center bg-gray-50 tail-listagem-seta-interno tail-listagem-prod-seta-interno ev-listagem-seta-interno">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3 md:h-4 -mr-0.5 text-gray-500 pointer-events-none">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                    </button>
                  </section>
                  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                    @media only screen and (max-width:640px)\n                    {\n                    .conteudo-hash-428 .listagem-mgm{grid-gap:5px;}\n                    .conteudo-hash-428 .listagem-mgm-slider{margin-right:5px;}\n                    .conteudo-hash-428 .listagem-mgm-slider-container{padding-left:5px;}\n                    .conteudo-hash-428 .listagem-slider-anterior,\n                    .conteudo-hash-428 .listagem-slider-proximo{box-shadow:0 0 3px 3px #fff!important;}\n                    }\n                    @media only screen and (min-width:641px) and (max-width:999px)\n                    {\n                    .conteudo-hash-428 .listagem-mgm{grid-gap:5px;}\n                    .conteudo-hash-428 .listagem-mgm-slider{margin-right:5px;}\n                    .conteudo-hash-428 .listagem-mgm-slider-container{padding-left:5px;}\n                    .conteudo-hash-428 .listagem-slider-anterior,\n                    .conteudo-hash-428 .listagem-slider-proximo{box-shadow:0 0 3px 3px #fff!important;}\n                    }\n                    @media only screen and (min-width:1000px) and (max-width:1249px)\n                    {\n                    .conteudo-hash-428 .listagem-mgm{grid-gap:10px;}\n                    .conteudo-hash-428 .listagem-mgm-slider{margin-right:10px;}\n                    .conteudo-hash-428 .listagem-mgm-slider-container{padding-left:10px;}\n                    .conteudo-hash-428 .listagem-slider-anterior,\n                    .conteudo-hash-428 .listagem-slider-proximo{box-shadow:0 0 7px 7px #fff!important;}\n                    }\n                    @media only screen and (min-width:1250px)\n                    {\n                    .conteudo-hash-428 .listagem-mgm{grid-gap:20px;}\n                    .conteudo-hash-428 .listagem-slider-container{padding-left:20px;}\n                    .conteudo-hash-428 .listagem-mgm-slider{margin-right:20px;}\n                    .conteudo-hash-428 .listagem-mgm-slider-container{padding-left:20px;}\n                    .conteudo-hash-428 .listagem-slider-anterior,\n                    .conteudo-hash-428 .listagem-slider-proximo{box-shadow:0 0 10px 15px #fff!important;}\n                    }\n                    @media only screen and (max-width:640px)\n                    {\n                    .conteudo-hash-428 .listagem-col{grid-template-columns:repeat(2, 1fr);}\n                    .conteudo-hash-428 .listagem-col-slider{width:calc(100% / 2);}\n                    .conteudo-hash-428 .listagem-prod-item:nth-child(1n+3){display:none;}\n                    }\n                    @media only screen and (min-width:641px) and (max-width:999px)\n                    {\n                    .conteudo-hash-428 .listagem-col{grid-template-columns:repeat(2, 1fr);}\n                    .conteudo-hash-428 .listagem-col-slider{width:calc(100% / 2);}\n                    .conteudo-hash-428 .listagem-prod-item:nth-child(1n+3){display:none;}\n                    }\n                    @media only screen and (min-width:1000px) and (max-width:1249px)\n                    {\n                    .conteudo-hash-428 .listagem-col{grid-template-columns:repeat(4, 1fr);}\n                    .conteudo-hash-428 .listagem-col-slider{width:calc(100% / 4);}\n                    .conteudo-hash-428 .listagem-prod-item:nth-child(1n+5){display:none;}\n                    }\n                    @media only screen and (min-width:1250px)\n                    {\n                    .conteudo-hash-428 .listagem-col{grid-template-columns:repeat(4, 1fr);}\n                    .conteudo-hash-428 .listagem-col-slider{width:calc(100% / 4);}\n                    .conteudo-hash-428 .listagem-prod-item:nth-child(1n+5){display:none;}\n                    }\n                  " }} />
                </li>
              </ul>
            </div>
            <div className="cont-separador cont-separador-166 cont-alt-md " />
            <div className="cont-limite cont-limite-166 cont-pdd-pq ">
              <ul className="cont-lista cont-lista-166 cont-mgm-l-md ">
                <li className="vitr-grupo-box vitr-grupo-hash-421 conteudo-hash-421 cont-item cont-item-421 esconder-ip esconder-fb  cont-mgm-i-md" data-id={421}>
                  <div className="cont-fotos">
                    <figure className="cont-fotos-box cont-fotos-hash-237 cont-mgm-s-md">
                      <a href="/cat/5/new-in" className="cont-fotos-link">
                        <picture className="w-full">
                          <source srcSet="https://thumb.braavo.me/vivadress/400/4199208637.webp 400w, https://thumb.braavo.me/vivadress/600/4199208637.webp 600w, https://thumb.braavo.me/vivadress/0/4199208637.webp 1x, https://thumb.braavo.me/vivadress/0/4199208637.webp 2x" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, (max-width: 1199px) 600px, 100vw" type="image/webp" />
                          <source srcSet="https://thumb.braavo.me/vivadress/400/4199208637.jpg 400w, https://thumb.braavo.me/vivadress/600/4199208637.jpg 600w, https://thumb.braavo.me/vivadress/0/4199208637.jpg 1x, https://thumb.braavo.me/vivadress/0/4199208637.jpg 2x" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, (max-width: 1199px) 600px, 100vw" type="image/jpeg" />
                          <img loading="lazy" src="https://thumb.braavo.me/vivadress/0/4199208637.jpg" alt="Viva Dress" className="cont-fotos-imagem mx-auto" />
                        </picture>
                      </a>
                    </figure>
                  </div>
                </li>
                <li className="vitr-grupo-box vitr-grupo-hash-419 conteudo-hash-419 cont-item cont-item-419 esconder-ip esconder-fb  cont-mgm-i-md" data-id={419}>
                  <div className="cont-fotos">
                    <figure className="cont-fotos-box cont-fotos-hash-235 cont-mgm-s-md">
                      <a href="/cat/2/todos-vestidos-longos" className="cont-fotos-link">
                        <picture className="w-full">
                          <source srcSet="https://thumb.braavo.me/vivadress/400/2576397449.webp 400w, https://thumb.braavo.me/vivadress/600/2576397449.webp 600w, https://thumb.braavo.me/vivadress/0/2576397449.webp 1x, https://thumb.braavo.me/vivadress/0/2576397449.webp 2x" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, (max-width: 1199px) 600px, 100vw" type="image/webp" />
                          <source srcSet="https://thumb.braavo.me/vivadress/400/2576397449.jpg 400w, https://thumb.braavo.me/vivadress/600/2576397449.jpg 600w, https://thumb.braavo.me/vivadress/0/2576397449.jpg 1x, https://thumb.braavo.me/vivadress/0/2576397449.jpg 2x" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, (max-width: 1199px) 600px, 100vw" type="image/jpeg" />
                          <img loading="lazy" src="https://thumb.braavo.me/vivadress/0/2576397449.jpg" alt="Viva Dress" className="cont-fotos-imagem mx-auto" />
                        </picture>
                      </a>
                    </figure>
                  </div>
                </li>
                <li className="vitr-grupo-box vitr-grupo-hash-420 conteudo-hash-420 cont-item cont-item-420 esconder-ip esconder-fb  cont-mgm-i-md" data-id={420}>
                  <div className="cont-fotos">
                    <figure className="cont-fotos-box cont-fotos-hash-236 cont-mgm-s-md">
                      <a href="/cat/4/best-sellers" className="cont-fotos-link">
                        <picture className="w-full">
                          <source srcSet="https://thumb.braavo.me/vivadress/400/242855006.webp 400w, https://thumb.braavo.me/vivadress/600/242855006.webp 600w, https://thumb.braavo.me/vivadress/0/242855006.webp 1x, https://thumb.braavo.me/vivadress/0/242855006.webp 2x" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, (max-width: 1199px) 600px, 100vw" type="image/webp" />
                          <source srcSet="https://thumb.braavo.me/vivadress/400/242855006.jpg 400w, https://thumb.braavo.me/vivadress/600/242855006.jpg 600w, https://thumb.braavo.me/vivadress/0/242855006.jpg 1x, https://thumb.braavo.me/vivadress/0/242855006.jpg 2x" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, (max-width: 1199px) 600px, 100vw" type="image/jpeg" />
                          <img loading="lazy" src="https://thumb.braavo.me/vivadress/0/242855006.jpg" alt="Viva Dress" className="cont-fotos-imagem mx-auto" />
                        </picture>
                      </a>
                    </figure>
                  </div>
                </li>
                <li className="vitr-grupo-box vitr-grupo-hash-418 conteudo-hash-418 cont-item cont-item-418 esconder-dk esconder-mn  cont-mgm-i-md" data-id={418}>
                  <div className="cont-fotos">
                    <figure className="cont-fotos-box cont-fotos-hash-234 ">
                      <a href="/cat/4/best-sellers" className="cont-fotos-link">
                        <picture className="w-full">
                          <source srcSet="https://thumb.braavo.me/vivadress/400/2801737167.webp 400w, https://thumb.braavo.me/vivadress/600/2801737167.webp 600w, https://thumb.braavo.me/vivadress/0/2801737167.webp 1x, https://thumb.braavo.me/vivadress/0/2801737167.webp 2x" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, (max-width: 1199px) 600px, 100vw" type="image/webp" />
                          <source srcSet="https://thumb.braavo.me/vivadress/400/2801737167.jpg 400w, https://thumb.braavo.me/vivadress/600/2801737167.jpg 600w, https://thumb.braavo.me/vivadress/0/2801737167.jpg 1x, https://thumb.braavo.me/vivadress/0/2801737167.jpg 2x" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, (max-width: 1199px) 600px, 100vw" type="image/jpeg" />
                          <img loading="lazy" src="https://thumb.braavo.me/vivadress/0/2801737167.jpg" alt="Viva Dress" className="cont-fotos-imagem mx-auto" />
                        </picture>
                      </a>
                    </figure>
                  </div>
                </li>
                <li className="vitr-grupo-box vitr-grupo-hash-417 conteudo-hash-417 cont-item cont-item-417 esconder-dk esconder-mn  cont-mgm-i-md" data-id={417}>
                  <div className="cont-fotos">
                    <figure className="cont-fotos-box cont-fotos-hash-232 cont-mgm-s-md">
                      <a href="/cat/2/todos-vestidos-longos" className="cont-fotos-link">
                        <picture className="w-full">
                          <source srcSet="https://thumb.braavo.me/vivadress/400/2214971709.webp 400w, https://thumb.braavo.me/vivadress/600/2214971709.webp 600w, https://thumb.braavo.me/vivadress/0/2214971709.webp 1x, https://thumb.braavo.me/vivadress/0/2214971709.webp 2x" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, (max-width: 1199px) 600px, 100vw" type="image/webp" />
                          <source srcSet="https://thumb.braavo.me/vivadress/400/2214971709.jpg 400w, https://thumb.braavo.me/vivadress/600/2214971709.jpg 600w, https://thumb.braavo.me/vivadress/0/2214971709.jpg 1x, https://thumb.braavo.me/vivadress/0/2214971709.jpg 2x" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, (max-width: 1199px) 600px, 100vw" type="image/jpeg" />
                          <img loading="lazy" src="https://thumb.braavo.me/vivadress/0/2214971709.jpg" alt="Viva Dress" className="cont-fotos-imagem mx-auto" />
                        </picture>
                      </a>
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
            <div className="cont-separador cont-separador-422 cont-alt-md " />
            <div className="cont-limite cont-limite-422 cont-pdd-pq ">
              <h2 className="tt vitr-tt cont-tt  cont-ali-ip-c cont-ali-fb-c cont-ali-dk-c cont-ali-mn-c cont-tt-422">
                <a href="https://www.vivadress.com.br/cat/4/best-sellers" className="tt-url">
                  <span className="tt-texto">BEST SELLERS</span>
                </a>
              </h2>
              <ul className="cont-lista cont-lista-422 cont-mgm-l-md ">
                <li className="vitr-grupo-box vitr-grupo-hash-423 conteudo-hash-423 cont-item cont-item-423  cont-mgm-i-md" data-id={423}>
                  <section className="relative flex items-center gap-2 overflow-hidden tail-listagem-prod js-tail-listagem-prod">
                    <button aria-label="Voltar Slider para os produtos anteriores" className="absolute left-0 z-10 p-2 pl-0.5 tail-listagem-seta tail-listagem-prod-seta" onclick="listagemSlider('voltar');">
                      <div className="grid flex-shrink-0 px-2 border border-gray-300 border-solid rounded-full place-content-center bg-gray-50 tail-listagem-seta-interno tail-listagem-prod-seta-interno ev-listagem-seta-interno">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3 md:h-4 -ml-0.5 text-gray-500 pointer-events-none ev-listagem-seta-icone">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                      </div>
                    </button>
                    <ul className="flex flex-grow ml-2 overflow-x-scroll tail-listagem-prod-slider-container js-tail-listagem-prod-lista flex flex-grow ml-2 gap-y-2">
                      <li className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4" data-seta-posicao="direita">
                        <a href="/prod/2018/vestido-longo-zaya-busto-plissado-crepe-fucsia" ref="alternate" target="_self" className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link">
                          <div className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile" style={{paddingBottom: '133%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2585216739.webp 200w, https://thumb.braavo.me/vivadress/400/2585216739.webp 400w, https://thumb.braavo.me/vivadress/600/2585216739.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2585216739.png 200w, https://thumb.braavo.me/vivadress/400/2585216739.png 400w, https://thumb.braavo.me/vivadress/600/2585216739.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/2585216739.png" alt="Vestido Longo Zaya Busto Plissado Crepe Fucsia" className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover" />
                            </picture>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3719773235.webp 200w, https://thumb.braavo.me/vivadress/400/3719773235.webp 400w, https://thumb.braavo.me/vivadress/600/3719773235.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3719773235.png 200w, https://thumb.braavo.me/vivadress/400/3719773235.png 400w, https://thumb.braavo.me/vivadress/600/3719773235.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/3719773235.png" alt="Vestido Longo Zaya Busto Plissado Crepe Fucsia" className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover" />
                            </picture>
                            <div className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto" data-seta-posicao="direita">
                              -20%              
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
                            <h4 className="text-xs lg:text-sm ev-listagem-prod-nome" title="Vestido Longo Zaya Busto Plissado Crepe Fucsia" data-seta-posicao="direita">Vestido Longo Zaya Busto Plissado Crepe Fucsia</h4>
                            <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
                              <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                                  <ins className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>319</span><span>,</span><span>90</span>
                                  </ins>
                                  <del className=" flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>399</span><span>,</span><span>90</span>
                                  </del>
                                  <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                                    <div className=" flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela" data-seta-posicao="direita">
                                      <span className="mr-0.5 tail-listagem-prod-precos2-parcela-parcelas">6x</span><span className="tail-listagem-prod-precos2-parcela-cifrao">R$</span><span className="tail-listagem-prod-precos2-parcela-valor">53,32</span>
                                    </div>
                                    <div className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista" data-seta-posicao="baixo">
                                      <span className="mr-0.5">à vista</span><span>R$</span><span>319,90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-privado ev-listagem-prod-preco-privado" data-seta-posicao="direita">
                                <span>Somente logado</span>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-consulta ev-listagem-prod-preco-consulta" data-seta-posicao="direita">
                                <span>Consulta</span>
                              </div>
                              <div className="hidden flex items-center text-base font-bold text-gray-500 tail-listagem-prod-preco-esgotado ev-listagem-prod-preco-esgotado" data-seta-posicao="direita">
                                <span>Esgotado</span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
                          <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={38}>
                              <a href="/prod/2018/vestido-longo-zaya-busto-plissado-crepe-fucsia#s8532" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">38</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={40}>
                              <a href="/prod/2018/vestido-longo-zaya-busto-plissado-crepe-fucsia#s8533" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">40</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={42}>
                              <a href="/prod/2018/vestido-longo-zaya-busto-plissado-crepe-fucsia#s8534" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">42</a>
                            </li>
                            <li aria-hidden="true" className="hidden" />
                          </ul>
                        </div>
                      </li>
                      <li className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4" data-seta-posicao="direita">
                        <a href="/prod/2268/vestido-longo-mirelle-verde-oliva" ref="alternate" target="_self" className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link">
                          <div className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile" style={{paddingBottom: '133%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/95453841.webp 200w, https://thumb.braavo.me/vivadress/400/95453841.webp 400w, https://thumb.braavo.me/vivadress/600/95453841.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/95453841.png 200w, https://thumb.braavo.me/vivadress/400/95453841.png 400w, https://thumb.braavo.me/vivadress/600/95453841.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/95453841.png" alt="Vestido Longo Mirelle Verde Oliva" className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover" />
                            </picture>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/953199393.webp 200w, https://thumb.braavo.me/vivadress/400/953199393.webp 400w, https://thumb.braavo.me/vivadress/600/953199393.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/953199393.png 200w, https://thumb.braavo.me/vivadress/400/953199393.png 400w, https://thumb.braavo.me/vivadress/600/953199393.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/953199393.png" alt="Vestido Longo Mirelle Verde Oliva" className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover" />
                            </picture>
                            <div className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto" data-seta-posicao="direita">
                              -18%              
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
                            <h4 className="text-xs lg:text-sm ev-listagem-prod-nome" title="Vestido Longo Mirelle Verde Oliva" data-seta-posicao="direita">Vestido Longo Mirelle Verde Oliva</h4>
                            <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
                              <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                                  <ins className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>349</span><span>,</span><span>90</span>
                                  </ins>
                                  <del className=" flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>429</span><span>,</span><span>90</span>
                                  </del>
                                  <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                                    <div className=" flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela" data-seta-posicao="direita">
                                      <span className="mr-0.5 tail-listagem-prod-precos2-parcela-parcelas">6x</span><span className="tail-listagem-prod-precos2-parcela-cifrao">R$</span><span className="tail-listagem-prod-precos2-parcela-valor">58,32</span>
                                    </div>
                                    <div className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista" data-seta-posicao="baixo">
                                      <span className="mr-0.5">à vista</span><span>R$</span><span>349,90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-privado ev-listagem-prod-preco-privado" data-seta-posicao="direita">
                                <span>Somente logado</span>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-consulta ev-listagem-prod-preco-consulta" data-seta-posicao="direita">
                                <span>Consulta</span>
                              </div>
                              <div className="hidden flex items-center text-base font-bold text-gray-500 tail-listagem-prod-preco-esgotado ev-listagem-prod-preco-esgotado" data-seta-posicao="direita">
                                <span>Esgotado</span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
                          <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={38}>
                              <a href="/prod/2268/vestido-longo-mirelle-verde-oliva#s13059" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">38</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={40}>
                              <a href="/prod/2268/vestido-longo-mirelle-verde-oliva#s13060" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">40</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={42}>
                              <a href="/prod/2268/vestido-longo-mirelle-verde-oliva#s13061" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">42</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={44}>
                              <a href="/prod/2268/vestido-longo-mirelle-verde-oliva#s13062" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">44</a>
                            </li>
                            <li aria-hidden="true" className="hidden" />
                          </ul>
                        </div>
                      </li>
                      <li className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4" data-seta-posicao="direita">
                        <a href="/prod/2262/vestido-longo-com-capa-crepe-terracota" ref="alternate" target="_self" className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link">
                          <div className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile" style={{paddingBottom: '133%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3081362308.webp 200w, https://thumb.braavo.me/vivadress/400/3081362308.webp 400w, https://thumb.braavo.me/vivadress/600/3081362308.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3081362308.png 200w, https://thumb.braavo.me/vivadress/400/3081362308.png 400w, https://thumb.braavo.me/vivadress/600/3081362308.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/3081362308.png" alt="Vestido Longo com Capa Crepe Terracota" className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover" />
                            </picture>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2328490548.webp 200w, https://thumb.braavo.me/vivadress/400/2328490548.webp 400w, https://thumb.braavo.me/vivadress/600/2328490548.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2328490548.png 200w, https://thumb.braavo.me/vivadress/400/2328490548.png 400w, https://thumb.braavo.me/vivadress/600/2328490548.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/2328490548.png" alt="Vestido Longo com Capa Crepe Terracota" className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover" />
                            </picture>
                            <div className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto" data-seta-posicao="direita">
                              -23%              
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
                            <h4 className="text-xs lg:text-sm ev-listagem-prod-nome" title="Vestido Longo com Capa Crepe Terracota" data-seta-posicao="direita">Vestido Longo com Capa Crepe Terracota</h4>
                            <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
                              <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                                  <ins className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>349</span><span>,</span><span>90</span>
                                  </ins>
                                  <del className=" flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>459</span><span>,</span><span>90</span>
                                  </del>
                                  <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                                    <div className=" flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela" data-seta-posicao="direita">
                                      <span className="mr-0.5 tail-listagem-prod-precos2-parcela-parcelas">6x</span><span className="tail-listagem-prod-precos2-parcela-cifrao">R$</span><span className="tail-listagem-prod-precos2-parcela-valor">58,32</span>
                                    </div>
                                    <div className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista" data-seta-posicao="baixo">
                                      <span className="mr-0.5">à vista</span><span>R$</span><span>349,90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-privado ev-listagem-prod-preco-privado" data-seta-posicao="direita">
                                <span>Somente logado</span>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-consulta ev-listagem-prod-preco-consulta" data-seta-posicao="direita">
                                <span>Consulta</span>
                              </div>
                              <div className="hidden flex items-center text-base font-bold text-gray-500 tail-listagem-prod-preco-esgotado ev-listagem-prod-preco-esgotado" data-seta-posicao="direita">
                                <span>Esgotado</span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
                          <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={40}>
                              <a href="/prod/2262/vestido-longo-com-capa-crepe-terracota#s13037" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">40</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={42}>
                              <a href="/prod/2262/vestido-longo-com-capa-crepe-terracota#s13038" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">42</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={44}>
                              <a href="/prod/2262/vestido-longo-com-capa-crepe-terracota#s13039" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">44</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={46}>
                              <a href="/prod/2262/vestido-longo-com-capa-crepe-terracota#s13384" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">46</a>
                            </li>
                            <li aria-hidden="true" className="hidden" />
                          </ul>
                        </div>
                      </li>
                      <li className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4" data-seta-posicao="direita">
                        <a href="/prod/2336/vestido-longo-leticia-verde-escuro" ref="alternate" target="_self" className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link">
                          <div className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile" style={{paddingBottom: '133%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2180009415.webp 200w, https://thumb.braavo.me/vivadress/400/2180009415.webp 400w, https://thumb.braavo.me/vivadress/600/2180009415.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2180009415.png 200w, https://thumb.braavo.me/vivadress/400/2180009415.png 400w, https://thumb.braavo.me/vivadress/600/2180009415.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/2180009415.png" alt="Vestido Longo Leticia Verde Escuro" className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover" />
                            </picture>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3682490884.webp 200w, https://thumb.braavo.me/vivadress/400/3682490884.webp 400w, https://thumb.braavo.me/vivadress/600/3682490884.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3682490884.png 200w, https://thumb.braavo.me/vivadress/400/3682490884.png 400w, https://thumb.braavo.me/vivadress/600/3682490884.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/3682490884.png" alt="Vestido Longo Leticia Verde Escuro" className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover" />
                            </picture>
                            <div className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto" data-seta-posicao="direita">
                              -20%              
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
                            <h4 className="text-xs lg:text-sm ev-listagem-prod-nome" title="Vestido Longo Leticia Verde Escuro" data-seta-posicao="direita">Vestido Longo Leticia Verde Escuro</h4>
                            <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
                              <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                                  <ins className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>319</span><span>,</span><span>90</span>
                                  </ins>
                                  <del className=" flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>399</span><span>,</span><span>90</span>
                                  </del>
                                  <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                                    <div className=" flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela" data-seta-posicao="direita">
                                      <span className="mr-0.5 tail-listagem-prod-precos2-parcela-parcelas">6x</span><span className="tail-listagem-prod-precos2-parcela-cifrao">R$</span><span className="tail-listagem-prod-precos2-parcela-valor">53,32</span>
                                    </div>
                                    <div className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista" data-seta-posicao="baixo">
                                      <span className="mr-0.5">à vista</span><span>R$</span><span>319,90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-privado ev-listagem-prod-preco-privado" data-seta-posicao="direita">
                                <span>Somente logado</span>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-consulta ev-listagem-prod-preco-consulta" data-seta-posicao="direita">
                                <span>Consulta</span>
                              </div>
                              <div className="hidden flex items-center text-base font-bold text-gray-500 tail-listagem-prod-preco-esgotado ev-listagem-prod-preco-esgotado" data-seta-posicao="direita">
                                <span>Esgotado</span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
                          <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={44}>
                              <a href="/prod/2336/vestido-longo-leticia-verde-escuro#s13500" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">44</a>
                            </li>
                            <li aria-hidden="true" className="hidden" />
                          </ul>
                        </div>
                      </li>
                      <li className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4" data-seta-posicao="direita">
                        <a href="/prod/2359/vestido-de-festa-longo-com-busto-plissado-saia-ampla-marrom" ref="alternate" target="_self" className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link">
                          <div className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile" style={{paddingBottom: '133%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2932430129.webp 200w, https://thumb.braavo.me/vivadress/400/2932430129.webp 400w, https://thumb.braavo.me/vivadress/600/2932430129.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2932430129.png 200w, https://thumb.braavo.me/vivadress/400/2932430129.png 400w, https://thumb.braavo.me/vivadress/600/2932430129.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/2932430129.png" alt="Vestido de Festa Longo com Busto Plissado Saia Ampla Marrom" className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover" />
                            </picture>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2477358209.webp 200w, https://thumb.braavo.me/vivadress/400/2477358209.webp 400w, https://thumb.braavo.me/vivadress/600/2477358209.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2477358209.png 200w, https://thumb.braavo.me/vivadress/400/2477358209.png 400w, https://thumb.braavo.me/vivadress/600/2477358209.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/2477358209.png" alt="Vestido de Festa Longo com Busto Plissado Saia Ampla Marrom" className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover" />
                            </picture>
                            <div className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto" data-seta-posicao="direita">
                              -30%              
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
                            <h4 className="text-xs lg:text-sm ev-listagem-prod-nome" title="Vestido de Festa Longo com Busto Plissado Saia Ampla Marrom" data-seta-posicao="direita">Vestido de Festa Longo com Busto Plissado Saia Ampla Marrom</h4>
                            <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
                              <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                                  <ins className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>299</span><span>,</span><span>90</span>
                                  </ins>
                                  <del className=" flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>429</span><span>,</span><span>90</span>
                                  </del>
                                  <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                                    <div className=" flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela" data-seta-posicao="direita">
                                      <span className="mr-0.5 tail-listagem-prod-precos2-parcela-parcelas">5x</span><span className="tail-listagem-prod-precos2-parcela-cifrao">R$</span><span className="tail-listagem-prod-precos2-parcela-valor">59,98</span>
                                    </div>
                                    <div className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista" data-seta-posicao="baixo">
                                      <span className="mr-0.5">à vista</span><span>R$</span><span>299,90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-privado ev-listagem-prod-preco-privado" data-seta-posicao="direita">
                                <span>Somente logado</span>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-consulta ev-listagem-prod-preco-consulta" data-seta-posicao="direita">
                                <span>Consulta</span>
                              </div>
                              <div className="hidden flex items-center text-base font-bold text-gray-500 tail-listagem-prod-preco-esgotado ev-listagem-prod-preco-esgotado" data-seta-posicao="direita">
                                <span>Esgotado</span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
                          <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={38}>
                              <a href="/prod/2359/vestido-de-festa-longo-com-busto-plissado-saia-ampla-marrom#s13604" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">38</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={40}>
                              <a href="/prod/2359/vestido-de-festa-longo-com-busto-plissado-saia-ampla-marrom#s13605" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">40</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={42}>
                              <a href="/prod/2359/vestido-de-festa-longo-com-busto-plissado-saia-ampla-marrom#s13606" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">42</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={44}>
                              <a href="/prod/2359/vestido-de-festa-longo-com-busto-plissado-saia-ampla-marrom#s13607" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">44</a>
                            </li>
                            <li aria-hidden="true" className="hidden" />
                          </ul>
                        </div>
                      </li>
                      <li className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4" data-seta-posicao="direita">
                        <a href="/prod/2570/vestido-longo-com-amarracao-em-malha-menta" ref="alternate" target="_self" className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link">
                          <div className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile" style={{paddingBottom: '133%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3413573734.webp 200w, https://thumb.braavo.me/vivadress/400/3413573734.webp 400w, https://thumb.braavo.me/vivadress/600/3413573734.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3413573734.png 200w, https://thumb.braavo.me/vivadress/400/3413573734.png 400w, https://thumb.braavo.me/vivadress/600/3413573734.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/3413573734.png" alt="Vestido Longo com Amarração em Malha Menta" className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover" />
                            </picture>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/4128713174.webp 200w, https://thumb.braavo.me/vivadress/400/4128713174.webp 400w, https://thumb.braavo.me/vivadress/600/4128713174.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/4128713174.png 200w, https://thumb.braavo.me/vivadress/400/4128713174.png 400w, https://thumb.braavo.me/vivadress/600/4128713174.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/4128713174.png" alt="Vestido Longo com Amarração em Malha Menta" className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover" />
                            </picture>
                            <div className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto" data-seta-posicao="direita">
                              -12%              
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
                            <h4 className="text-xs lg:text-sm ev-listagem-prod-nome" title="Vestido Longo com Amarração em Malha Menta" data-seta-posicao="direita">Vestido Longo com Amarração em Malha Menta</h4>
                            <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
                              <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                                  <ins className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>349</span><span>,</span><span>90</span>
                                  </ins>
                                  <del className=" flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>399</span><span>,</span><span>90</span>
                                  </del>
                                  <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                                    <div className=" flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela" data-seta-posicao="direita">
                                      <span className="mr-0.5 tail-listagem-prod-precos2-parcela-parcelas">6x</span><span className="tail-listagem-prod-precos2-parcela-cifrao">R$</span><span className="tail-listagem-prod-precos2-parcela-valor">58,32</span>
                                    </div>
                                    <div className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista" data-seta-posicao="baixo">
                                      <span className="mr-0.5">à vista</span><span>R$</span><span>349,90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-privado ev-listagem-prod-preco-privado" data-seta-posicao="direita">
                                <span>Somente logado</span>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-consulta ev-listagem-prod-preco-consulta" data-seta-posicao="direita">
                                <span>Consulta</span>
                              </div>
                              <div className="hidden flex items-center text-base font-bold text-gray-500 tail-listagem-prod-preco-esgotado ev-listagem-prod-preco-esgotado" data-seta-posicao="direita">
                                <span>Esgotado</span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
                          <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title="Único">
                              <a href="/prod/2570/vestido-longo-com-amarracao-em-malha-menta#s16396" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">Único</a>
                            </li>
                            <li aria-hidden="true" className="hidden" />
                          </ul>
                        </div>
                      </li>
                      <li className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4" data-seta-posicao="direita">
                        <a href="/prod/1569/vestido-longo-leticia-rose" ref="alternate" target="_self" className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link">
                          <div className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile" style={{paddingBottom: '133%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/349541585.webp 200w, https://thumb.braavo.me/vivadress/400/349541585.webp 400w, https://thumb.braavo.me/vivadress/600/349541585.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/349541585.png 200w, https://thumb.braavo.me/vivadress/400/349541585.png 400w, https://thumb.braavo.me/vivadress/600/349541585.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/349541585.png" alt="Vestido Longo Leticia Rose" className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover" />
                            </picture>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1400237569.webp 200w, https://thumb.braavo.me/vivadress/400/1400237569.webp 400w, https://thumb.braavo.me/vivadress/600/1400237569.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1400237569.png 200w, https://thumb.braavo.me/vivadress/400/1400237569.png 400w, https://thumb.braavo.me/vivadress/600/1400237569.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/1400237569.png" alt="Vestido Longo Leticia Rose" className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover" />
                            </picture>
                            <div className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto" data-seta-posicao="direita">
                              -20%              
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
                            <h4 className="text-xs lg:text-sm ev-listagem-prod-nome" title="Vestido Longo Leticia Rose" data-seta-posicao="direita">Vestido Longo Leticia Rose</h4>
                            <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
                              <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                                  <ins className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>319</span><span>,</span><span>90</span>
                                  </ins>
                                  <del className=" flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>399</span><span>,</span><span>90</span>
                                  </del>
                                  <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                                    <div className=" flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela" data-seta-posicao="direita">
                                      <span className="mr-0.5 tail-listagem-prod-precos2-parcela-parcelas">6x</span><span className="tail-listagem-prod-precos2-parcela-cifrao">R$</span><span className="tail-listagem-prod-precos2-parcela-valor">53,32</span>
                                    </div>
                                    <div className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista" data-seta-posicao="baixo">
                                      <span className="mr-0.5">à vista</span><span>R$</span><span>319,90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-privado ev-listagem-prod-preco-privado" data-seta-posicao="direita">
                                <span>Somente logado</span>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-consulta ev-listagem-prod-preco-consulta" data-seta-posicao="direita">
                                <span>Consulta</span>
                              </div>
                              <div className="hidden flex items-center text-base font-bold text-gray-500 tail-listagem-prod-preco-esgotado ev-listagem-prod-preco-esgotado" data-seta-posicao="direita">
                                <span>Esgotado</span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
                          <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={40}>
                              <a href="/prod/1569/vestido-longo-leticia-rose#s7133" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">40</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={42}>
                              <a href="/prod/1569/vestido-longo-leticia-rose#s7134" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">42</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={44}>
                              <a href="/prod/1569/vestido-longo-leticia-rose#s7135" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">44</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={46}>
                              <a href="/prod/1569/vestido-longo-leticia-rose#s13648" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">46</a>
                            </li>
                            <li aria-hidden="true" className="hidden" />
                          </ul>
                        </div>
                      </li>
                      <li className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4" data-seta-posicao="direita">
                        <a href="/prod/2290/vestido-longo-acetinado-com-saia-babado-e-lenco-verde-oliva" ref="alternate" target="_self" className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link">
                          <div className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile" style={{paddingBottom: '133%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1744679459.webp 200w, https://thumb.braavo.me/vivadress/400/1744679459.webp 400w, https://thumb.braavo.me/vivadress/600/1744679459.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1744679459.png 200w, https://thumb.braavo.me/vivadress/400/1744679459.png 400w, https://thumb.braavo.me/vivadress/600/1744679459.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/1744679459.png" alt="Vestido Longo Acetinado com Saia babado e Lenço Verde Oliva" className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover" />
                            </picture>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1520278419.webp 200w, https://thumb.braavo.me/vivadress/400/1520278419.webp 400w, https://thumb.braavo.me/vivadress/600/1520278419.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1520278419.png 200w, https://thumb.braavo.me/vivadress/400/1520278419.png 400w, https://thumb.braavo.me/vivadress/600/1520278419.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/1520278419.png" alt="Vestido Longo Acetinado com Saia babado e Lenço Verde Oliva" className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover" />
                            </picture>
                            <div className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto" data-seta-posicao="direita">
                              -34%              
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
                            <h4 className="text-xs lg:text-sm ev-listagem-prod-nome" title="Vestido Longo Acetinado com Saia babado e Lenço Verde Oliva" data-seta-posicao="direita">Vestido Longo Acetinado com Saia babado e Lenço Verde Oliva</h4>
                            <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
                              <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                                  <ins className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>279</span><span>,</span><span>90</span>
                                  </ins>
                                  <del className=" flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>429</span><span>,</span><span>90</span>
                                  </del>
                                  <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                                    <div className=" flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela" data-seta-posicao="direita">
                                      <span className="mr-0.5 tail-listagem-prod-precos2-parcela-parcelas">5x</span><span className="tail-listagem-prod-precos2-parcela-cifrao">R$</span><span className="tail-listagem-prod-precos2-parcela-valor">55,98</span>
                                    </div>
                                    <div className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista" data-seta-posicao="baixo">
                                      <span className="mr-0.5">à vista</span><span>R$</span><span>279,90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-privado ev-listagem-prod-preco-privado" data-seta-posicao="direita">
                                <span>Somente logado</span>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-consulta ev-listagem-prod-preco-consulta" data-seta-posicao="direita">
                                <span>Consulta</span>
                              </div>
                              <div className="hidden flex items-center text-base font-bold text-gray-500 tail-listagem-prod-preco-esgotado ev-listagem-prod-preco-esgotado" data-seta-posicao="direita">
                                <span>Esgotado</span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
                          <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={38}>
                              <a href="/prod/2290/vestido-longo-acetinado-com-saia-babado-e-lenco-verde-oliva#s13205" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">38</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={40}>
                              <a href="/prod/2290/vestido-longo-acetinado-com-saia-babado-e-lenco-verde-oliva#s13206" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">40</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={42}>
                              <a href="/prod/2290/vestido-longo-acetinado-com-saia-babado-e-lenco-verde-oliva#s13207" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">42</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={44}>
                              <a href="/prod/2290/vestido-longo-acetinado-com-saia-babado-e-lenco-verde-oliva#s13208" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">44</a>
                            </li>
                            <li aria-hidden="true" className="hidden" />
                          </ul>
                        </div>
                      </li>
                      <li className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4" data-seta-posicao="direita">
                        <a href="/prod/2277/vestido-longo-bella-verde-oliva" ref="alternate" target="_self" className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link">
                          <div className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile" style={{paddingBottom: '133%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1881136992.webp 200w, https://thumb.braavo.me/vivadress/400/1881136992.webp 400w, https://thumb.braavo.me/vivadress/600/1881136992.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1881136992.png 200w, https://thumb.braavo.me/vivadress/400/1881136992.png 400w, https://thumb.braavo.me/vivadress/600/1881136992.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/1881136992.png" alt="Vestido Longo Bella Verde Oliva" className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover" />
                            </picture>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/935306672.webp 200w, https://thumb.braavo.me/vivadress/400/935306672.webp 400w, https://thumb.braavo.me/vivadress/600/935306672.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/935306672.png 200w, https://thumb.braavo.me/vivadress/400/935306672.png 400w, https://thumb.braavo.me/vivadress/600/935306672.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/935306672.png" alt="Vestido Longo Bella Verde Oliva" className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover" />
                            </picture>
                            <div className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto" data-seta-posicao="direita">
                              -30%              
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
                            <h4 className="text-xs lg:text-sm ev-listagem-prod-nome" title="Vestido Longo Bella Verde Oliva" data-seta-posicao="direita">Vestido Longo Bella Verde Oliva</h4>
                            <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
                              <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                                  <ins className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>279</span><span>,</span><span>90</span>
                                  </ins>
                                  <del className=" flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>399</span><span>,</span><span>90</span>
                                  </del>
                                  <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                                    <div className=" flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela" data-seta-posicao="direita">
                                      <span className="mr-0.5 tail-listagem-prod-precos2-parcela-parcelas">5x</span><span className="tail-listagem-prod-precos2-parcela-cifrao">R$</span><span className="tail-listagem-prod-precos2-parcela-valor">55,98</span>
                                    </div>
                                    <div className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista" data-seta-posicao="baixo">
                                      <span className="mr-0.5">à vista</span><span>R$</span><span>279,90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-privado ev-listagem-prod-preco-privado" data-seta-posicao="direita">
                                <span>Somente logado</span>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-consulta ev-listagem-prod-preco-consulta" data-seta-posicao="direita">
                                <span>Consulta</span>
                              </div>
                              <div className="hidden flex items-center text-base font-bold text-gray-500 tail-listagem-prod-preco-esgotado ev-listagem-prod-preco-esgotado" data-seta-posicao="direita">
                                <span>Esgotado</span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
                          <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={42}>
                              <a href="/prod/2277/vestido-longo-bella-verde-oliva#s13122" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">42</a>
                            </li>
                            <li aria-hidden="true" className="hidden" />
                          </ul>
                        </div>
                      </li>
                      <li className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4" data-seta-posicao="direita">
                        <a href="/prod/2251/vestido-longo-tule-com-fenda-ombro-so-rose" ref="alternate" target="_self" className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link">
                          <div className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile" style={{paddingBottom: '133%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3743843505.webp 200w, https://thumb.braavo.me/vivadress/400/3743843505.webp 400w, https://thumb.braavo.me/vivadress/600/3743843505.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3743843505.png 200w, https://thumb.braavo.me/vivadress/400/3743843505.png 400w, https://thumb.braavo.me/vivadress/600/3743843505.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/3743843505.png" alt="Vestido Longo Tule com Fenda Ombro só Rose" className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover" />
                            </picture>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3796282625.webp 200w, https://thumb.braavo.me/vivadress/400/3796282625.webp 400w, https://thumb.braavo.me/vivadress/600/3796282625.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3796282625.png 200w, https://thumb.braavo.me/vivadress/400/3796282625.png 400w, https://thumb.braavo.me/vivadress/600/3796282625.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/3796282625.png" alt="Vestido Longo Tule com Fenda Ombro só Rose" className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover" />
                            </picture>
                            <div className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto" data-seta-posicao="direita">
                              -50%              
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
                            <h4 className="text-xs lg:text-sm ev-listagem-prod-nome" title="Vestido Longo Tule com Fenda Ombro só Rose" data-seta-posicao="direita">Vestido Longo Tule com Fenda Ombro só Rose</h4>
                            <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
                              <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                                  <ins className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>229</span><span>,</span><span>90</span>
                                  </ins>
                                  <del className=" flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>459</span><span>,</span><span>90</span>
                                  </del>
                                  <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                                    <div className=" flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela" data-seta-posicao="direita">
                                      <span className="mr-0.5 tail-listagem-prod-precos2-parcela-parcelas">4x</span><span className="tail-listagem-prod-precos2-parcela-cifrao">R$</span><span className="tail-listagem-prod-precos2-parcela-valor">57,48</span>
                                    </div>
                                    <div className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista" data-seta-posicao="baixo">
                                      <span className="mr-0.5">à vista</span><span>R$</span><span>229,90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-privado ev-listagem-prod-preco-privado" data-seta-posicao="direita">
                                <span>Somente logado</span>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-consulta ev-listagem-prod-preco-consulta" data-seta-posicao="direita">
                                <span>Consulta</span>
                              </div>
                              <div className="hidden flex items-center text-base font-bold text-gray-500 tail-listagem-prod-preco-esgotado ev-listagem-prod-preco-esgotado" data-seta-posicao="direita">
                                <span>Esgotado</span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
                          <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={42}>
                              <a href="/prod/2251/vestido-longo-tule-com-fenda-ombro-so-rose#s12989" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">42</a>
                            </li>
                            <li aria-hidden="true" className="hidden" />
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <button aria-label="Avançar Slider para os próximos produtos" className="absolute right-0 p-2 pr-0.5 tail-listagem-seta tail-listagem-prod-seta" onclick="listagemSlider('avancar')">
                      <div className="grid flex-shrink-0 px-2 border border-gray-300 border-solid rounded-full place-content-center bg-gray-50 tail-listagem-seta-interno tail-listagem-prod-seta-interno ev-listagem-seta-interno">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3 md:h-4 -mr-0.5 text-gray-500 pointer-events-none">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                    </button>
                  </section>
                  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                    @media only screen and (max-width:640px)\n                    {\n                    .conteudo-hash-423 .listagem-mgm{grid-gap:5px;}\n                    .conteudo-hash-423 .listagem-mgm-slider{margin-right:5px;}\n                    .conteudo-hash-423 .listagem-mgm-slider-container{padding-left:5px;}\n                    .conteudo-hash-423 .listagem-slider-anterior,\n                    .conteudo-hash-423 .listagem-slider-proximo{box-shadow:0 0 3px 3px #fff!important;}\n                    }\n                    @media only screen and (min-width:641px) and (max-width:999px)\n                    {\n                    .conteudo-hash-423 .listagem-mgm{grid-gap:5px;}\n                    .conteudo-hash-423 .listagem-mgm-slider{margin-right:5px;}\n                    .conteudo-hash-423 .listagem-mgm-slider-container{padding-left:5px;}\n                    .conteudo-hash-423 .listagem-slider-anterior,\n                    .conteudo-hash-423 .listagem-slider-proximo{box-shadow:0 0 3px 3px #fff!important;}\n                    }\n                    @media only screen and (min-width:1000px) and (max-width:1249px)\n                    {\n                    .conteudo-hash-423 .listagem-mgm{grid-gap:10px;}\n                    .conteudo-hash-423 .listagem-mgm-slider{margin-right:10px;}\n                    .conteudo-hash-423 .listagem-mgm-slider-container{padding-left:10px;}\n                    .conteudo-hash-423 .listagem-slider-anterior,\n                    .conteudo-hash-423 .listagem-slider-proximo{box-shadow:0 0 7px 7px #fff!important;}\n                    }\n                    @media only screen and (min-width:1250px)\n                    {\n                    .conteudo-hash-423 .listagem-mgm{grid-gap:20px;}\n                    .conteudo-hash-423 .listagem-slider-container{padding-left:20px;}\n                    .conteudo-hash-423 .listagem-mgm-slider{margin-right:20px;}\n                    .conteudo-hash-423 .listagem-mgm-slider-container{padding-left:20px;}\n                    .conteudo-hash-423 .listagem-slider-anterior,\n                    .conteudo-hash-423 .listagem-slider-proximo{box-shadow:0 0 10px 15px #fff!important;}\n                    }\n                    @media only screen and (max-width:640px)\n                    {\n                    .conteudo-hash-423 .listagem-col{grid-template-columns:repeat(2, 1fr);}\n                    .conteudo-hash-423 .listagem-col-slider{width:calc(100% / 2);}\n                    .conteudo-hash-423 .listagem-prod-item:nth-child(1n+3){display:none;}\n                    }\n                    @media only screen and (min-width:641px) and (max-width:999px)\n                    {\n                    .conteudo-hash-423 .listagem-col{grid-template-columns:repeat(2, 1fr);}\n                    .conteudo-hash-423 .listagem-col-slider{width:calc(100% / 2);}\n                    .conteudo-hash-423 .listagem-prod-item:nth-child(1n+3){display:none;}\n                    }\n                    @media only screen and (min-width:1000px) and (max-width:1249px)\n                    {\n                    .conteudo-hash-423 .listagem-col{grid-template-columns:repeat(4, 1fr);}\n                    .conteudo-hash-423 .listagem-col-slider{width:calc(100% / 4);}\n                    .conteudo-hash-423 .listagem-prod-item:nth-child(1n+5){display:none;}\n                    }\n                    @media only screen and (min-width:1250px)\n                    {\n                    .conteudo-hash-423 .listagem-col{grid-template-columns:repeat(4, 1fr);}\n                    .conteudo-hash-423 .listagem-col-slider{width:calc(100% / 4);}\n                    .conteudo-hash-423 .listagem-prod-item:nth-child(1n+5){display:none;}\n                    }\n                  " }} />
                </li>
              </ul>
            </div>
            <div className="cont-separador cont-separador-143 cont-alt-md " />
            <div className="cont-limite cont-limite-143 cont-pdd-pq ">
              <ul className="cont-lista cont-lista-143 cont-mgm-l-md ">
                <li className="vitr-grupo-box vitr-grupo-hash-424 conteudo-hash-424 cont-item cont-item-424  cont-mgm-i-md" data-id={424}>
                  <div className="cont-fotos">
                    <figure className="cont-fotos-box cont-fotos-hash-238 cont-mgm-s-md">
                      <a href="/cat/70/ate-75-off" className="cont-fotos-link">
                        <picture className="w-full">
                          <source srcSet="https://thumb.braavo.me/vivadress/400/3809129515.webp 400w, https://thumb.braavo.me/vivadress/600/3809129515.webp 600w, https://thumb.braavo.me/vivadress/0/3809129515.webp 1x, https://thumb.braavo.me/vivadress/0/3809129515.webp 2x" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, (max-width: 1199px) 600px, 100vw" type="image/webp" />
                          <source srcSet="https://thumb.braavo.me/vivadress/400/3809129515.jpg 400w, https://thumb.braavo.me/vivadress/600/3809129515.jpg 600w, https://thumb.braavo.me/vivadress/0/3809129515.jpg 1x, https://thumb.braavo.me/vivadress/0/3809129515.jpg 2x" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, (max-width: 1199px) 600px, 100vw" type="image/jpeg" />
                          <img loading="lazy" src="https://thumb.braavo.me/vivadress/0/3809129515.jpg" alt="Viva Dress" className="cont-fotos-imagem mx-auto" />
                        </picture>
                      </a>
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
            <div className="cont-separador cont-separador-425 cont-alt-md " />
            <div className="cont-limite cont-limite-425 cont-pdd-pq ">
              <h2 className="tt vitr-tt cont-tt  cont-ali-ip-c cont-ali-fb-c cont-ali-dk-c cont-ali-mn-c cont-tt-425">
                <a href="https://www.vivadress.com.br/cat/70/ate-75-off" className="tt-url">
                  <span className="tt-texto">ATÉ 75% OFF</span>
                </a>
              </h2>
              <ul className="cont-lista cont-lista-425 cont-mgm-l-md ">
                <li className="vitr-grupo-box vitr-grupo-hash-426 conteudo-hash-426 cont-item cont-item-426  cont-mgm-i-md" data-id={426}>
                  <section className="relative flex items-center gap-2 overflow-hidden tail-listagem-prod js-tail-listagem-prod">
                    <button aria-label="Voltar Slider para os produtos anteriores" className="absolute left-0 z-10 p-2 pl-0.5 tail-listagem-seta tail-listagem-prod-seta" onclick="listagemSlider('voltar');">
                      <div className="grid flex-shrink-0 px-2 border border-gray-300 border-solid rounded-full place-content-center bg-gray-50 tail-listagem-seta-interno tail-listagem-prod-seta-interno ev-listagem-seta-interno">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3 md:h-4 -ml-0.5 text-gray-500 pointer-events-none ev-listagem-seta-icone">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                      </div>
                    </button>
                    <ul className="flex flex-grow ml-2 overflow-x-scroll tail-listagem-prod-slider-container js-tail-listagem-prod-lista flex flex-grow ml-2 gap-y-2">
                      <li className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4" data-seta-posicao="direita">
                        <a href="/prod/1999/vestido-longo-sophia-plissado-com-decote-v-verde" ref="alternate" target="_self" className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link">
                          <div className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile" style={{paddingBottom: '133%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2556498043.webp 200w, https://thumb.braavo.me/vivadress/400/2556498043.webp 400w, https://thumb.braavo.me/vivadress/600/2556498043.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2556498043.png 200w, https://thumb.braavo.me/vivadress/400/2556498043.png 400w, https://thumb.braavo.me/vivadress/600/2556498043.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/2556498043.png" alt="Vestido Longo Sophia Plissado com Decote V Verde" className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover" />
                            </picture>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/430978302.webp 200w, https://thumb.braavo.me/vivadress/400/430978302.webp 400w, https://thumb.braavo.me/vivadress/600/430978302.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/430978302.png 200w, https://thumb.braavo.me/vivadress/400/430978302.png 400w, https://thumb.braavo.me/vivadress/600/430978302.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/430978302.png" alt="Vestido Longo Sophia Plissado com Decote V Verde" className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover" />
                            </picture>
                            <div className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto" data-seta-posicao="direita">
                              -34%              
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
                            <h4 className="text-xs lg:text-sm ev-listagem-prod-nome" title="Vestido Longo Sophia Plissado com Decote V Verde" data-seta-posicao="direita">Vestido Longo Sophia Plissado com Decote V Verde</h4>
                            <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
                              <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                                  <ins className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>299</span><span>,</span><span>90</span>
                                  </ins>
                                  <del className=" flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>459</span><span>,</span><span>90</span>
                                  </del>
                                  <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                                    <div className=" flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela" data-seta-posicao="direita">
                                      <span className="mr-0.5 tail-listagem-prod-precos2-parcela-parcelas">5x</span><span className="tail-listagem-prod-precos2-parcela-cifrao">R$</span><span className="tail-listagem-prod-precos2-parcela-valor">59,98</span>
                                    </div>
                                    <div className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista" data-seta-posicao="baixo">
                                      <span className="mr-0.5">à vista</span><span>R$</span><span>299,90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-privado ev-listagem-prod-preco-privado" data-seta-posicao="direita">
                                <span>Somente logado</span>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-consulta ev-listagem-prod-preco-consulta" data-seta-posicao="direita">
                                <span>Consulta</span>
                              </div>
                              <div className="hidden flex items-center text-base font-bold text-gray-500 tail-listagem-prod-preco-esgotado ev-listagem-prod-preco-esgotado" data-seta-posicao="direita">
                                <span>Esgotado</span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
                          <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={38}>
                              <a href="/prod/1999/vestido-longo-sophia-plissado-com-decote-v-verde#s8407" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">38</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={40}>
                              <a href="/prod/1999/vestido-longo-sophia-plissado-com-decote-v-verde#s8408" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">40</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={42}>
                              <a href="/prod/1999/vestido-longo-sophia-plissado-com-decote-v-verde#s8409" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">42</a>
                            </li>
                            <li aria-hidden="true" className="hidden" />
                          </ul>
                        </div>
                      </li>
                      <li className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4" data-seta-posicao="direita">
                        <a href="/prod/2293/vestido-longo-acetinado-com-saia-babado-e-lenco-preto" ref="alternate" target="_self" className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link">
                          <div className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile" style={{paddingBottom: '133%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2067230936.webp 200w, https://thumb.braavo.me/vivadress/400/2067230936.webp 400w, https://thumb.braavo.me/vivadress/600/2067230936.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2067230936.png 200w, https://thumb.braavo.me/vivadress/400/2067230936.png 400w, https://thumb.braavo.me/vivadress/600/2067230936.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/2067230936.png" alt="Vestido Longo Acetinado com Saia babado e Lenço Preto" className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover" />
                            </picture>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1180129640.webp 200w, https://thumb.braavo.me/vivadress/400/1180129640.webp 400w, https://thumb.braavo.me/vivadress/600/1180129640.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1180129640.png 200w, https://thumb.braavo.me/vivadress/400/1180129640.png 400w, https://thumb.braavo.me/vivadress/600/1180129640.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/1180129640.png" alt="Vestido Longo Acetinado com Saia babado e Lenço Preto" className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover" />
                            </picture>
                            <div className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto" data-seta-posicao="direita">
                              -34%              
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
                            <h4 className="text-xs lg:text-sm ev-listagem-prod-nome" title="Vestido Longo Acetinado com Saia babado e Lenço Preto" data-seta-posicao="direita">Vestido Longo Acetinado com Saia babado e Lenço Preto</h4>
                            <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
                              <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                                  <ins className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>279</span><span>,</span><span>90</span>
                                  </ins>
                                  <del className=" flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>429</span><span>,</span><span>90</span>
                                  </del>
                                  <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                                    <div className=" flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela" data-seta-posicao="direita">
                                      <span className="mr-0.5 tail-listagem-prod-precos2-parcela-parcelas">5x</span><span className="tail-listagem-prod-precos2-parcela-cifrao">R$</span><span className="tail-listagem-prod-precos2-parcela-valor">55,98</span>
                                    </div>
                                    <div className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista" data-seta-posicao="baixo">
                                      <span className="mr-0.5">à vista</span><span>R$</span><span>279,90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-privado ev-listagem-prod-preco-privado" data-seta-posicao="direita">
                                <span>Somente logado</span>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-consulta ev-listagem-prod-preco-consulta" data-seta-posicao="direita">
                                <span>Consulta</span>
                              </div>
                              <div className="hidden flex items-center text-base font-bold text-gray-500 tail-listagem-prod-preco-esgotado ev-listagem-prod-preco-esgotado" data-seta-posicao="direita">
                                <span>Esgotado</span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
                          <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={38}>
                              <a href="/prod/2293/vestido-longo-acetinado-com-saia-babado-e-lenco-preto#s13226" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">38</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={40}>
                              <a href="/prod/2293/vestido-longo-acetinado-com-saia-babado-e-lenco-preto#s13227" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">40</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={42}>
                              <a href="/prod/2293/vestido-longo-acetinado-com-saia-babado-e-lenco-preto#s13228" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">42</a>
                            </li>
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title={44}>
                              <a href="/prod/2293/vestido-longo-acetinado-com-saia-babado-e-lenco-preto#s13229" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">44</a>
                            </li>
                            <li aria-hidden="true" className="hidden" />
                          </ul>
                        </div>
                      </li>
                      <li className="relative flex flex-col border border-gray-300 border-solid rounded-lg cursor-pointer tail-listagem-prod-item ev-listagem-prod-item js-tail-listagem-prod-item js-tail-paginacao-busca-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-2 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-4" data-seta-posicao="direita">
                        <a href="/prod/2319/vestido-longo-ombro-a-ombro-transpassado-com-fenda-na-saia-marsala" ref="alternate" target="_self" className="flex flex-col justify-between flex-grow tail-listagem-prod-link js-tail-paginacao-busca-link">
                          <div className="relative group ev-listagem-prod-imagem-container tail-listagem-prod-imagem-container js-tail-hover-mobile" style={{paddingBottom: '133%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3998669464.webp 200w, https://thumb.braavo.me/vivadress/400/3998669464.webp 400w, https://thumb.braavo.me/vivadress/600/3998669464.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3998669464.png 200w, https://thumb.braavo.me/vivadress/400/3998669464.png 400w, https://thumb.braavo.me/vivadress/600/3998669464.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/3998669464.png" alt="Vestido Longo Ombro a Ombro Transpassado com Fenda na Saia Marsala" className="absolute w-full h-full tail-listagem-prod-imagem-1 object-cover" />
                            </picture>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2492893688.webp 200w, https://thumb.braavo.me/vivadress/400/2492893688.webp 400w, https://thumb.braavo.me/vivadress/600/2492893688.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2492893688.png 200w, https://thumb.braavo.me/vivadress/400/2492893688.png 400w, https://thumb.braavo.me/vivadress/600/2492893688.png 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/2492893688.png" alt="Vestido Longo Ombro a Ombro Transpassado com Fenda na Saia Marsala" className="absolute w-full h-full transition-opacity opacity-0 group-hover:opacity-100 tail-listagem-prod-imagem-2 object-cover" />
                            </picture>
                            <div className=" absolute top-0 py-1 px-3 right-0 bg-black text-sm text-white rounded-tr-lg rounded-bl-lg ev-listagem-prod-desconto tail-listagem-prod-desconto" data-seta-posicao="direita">
                              -35%              
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col gap-1.5 px-2 pt-1 pb-2 tail-listagem-prod-conteudo">
                            <h4 className="text-xs lg:text-sm ev-listagem-prod-nome" title="Vestido Longo Ombro a Ombro Transpassado com Fenda na Saia Marsala" data-seta-posicao="direita">Vestido Longo Ombro a Ombro Transpassado com Fenda na Saia Marsala</h4>
                            <div className="grid gap-0.5 flex-auto js-tail-visualizado-preco-container">
                              <div className=" flex items-center gap-1 tail-listagem-prod-precos1">
                                <div className="flex flex-row flex-wrap items-center justify-start gap-1">
                                  <ins className=" flex items-center text-xs font-bold lg:text-base tail-listagem-prod-preco-por ev-listagem-prod-preco-por" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>199</span><span>,</span><span>90</span>
                                  </ins>
                                  <del className=" flex items-center text-xs text-center text-gray-500 tail-listagem-prod-preco-de ev-listagem-prod-preco-de" data-seta-posicao="direita">
                                    <span className="mr-0.5">R$</span><span>309</span><span>,</span><span>90</span>
                                  </del>
                                  <div className=" flex flex-row flex-wrap gap-1 items-center divide-x divide-solid divide-gray-400 tail-listagem-prod-precos2">
                                    <div className=" flex items-center gap-0.5 text-xs text-gray-500 tail-listagem-prod-precos2-parcela ev-listagem-prod-preco-parcela" data-seta-posicao="direita">
                                      <span className="mr-0.5 tail-listagem-prod-precos2-parcela-parcelas">3x</span><span className="tail-listagem-prod-precos2-parcela-cifrao">R$</span><span className="tail-listagem-prod-precos2-parcela-valor">66,63</span>
                                    </div>
                                    <div className="hidden flex items-center gap-0.5 pl-1 text-xs text-gray-500 tail-listagem-prod-preco-avista ev-listagem-prod-preco-avista" data-seta-posicao="baixo">
                                      <span className="mr-0.5">à vista</span><span>R$</span><span>199,90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-privado ev-listagem-prod-preco-privado" data-seta-posicao="direita">
                                <span>Somente logado</span>
                              </div>
                              <div className="hidden flex items-center text-xs text-gray-500 tail-listagem-prod-preco-consulta ev-listagem-prod-preco-consulta" data-seta-posicao="direita">
                                <span>Consulta</span>
                              </div>
                              <div className="hidden flex items-center text-base font-bold text-gray-500 tail-listagem-prod-preco-esgotado ev-listagem-prod-preco-esgotado" data-seta-posicao="direita">
                                <span>Esgotado</span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="relative mb-2 tail-variacao-slider js-tail-variacao-slider">
                          <ul className="tail-listagem-prod-variacao-lista flex flex-wrap gap-1 px-2 tail-listagem-prod-lista-vari tail-listagem-prod-slider-container">
                            <li className="flex-shrink-0 flex gap-1.5 flex-wrap relative tail-listagem-prod-variacao-parent-1002" title="Único">
                              <a href="/prod/2319/vestido-longo-ombro-a-ombro-transpassado-com-fenda-na-saia-marsala#s13475" ref="alternate" target="_self" className="grid h-6 px-2 text-xs text-center border border-gray-300 border-solid rounded-lg cursor-pointer place-content-center ev-listagem-prod-variacao-texto tail-listagem-prod-variacao-texto">Único</a>
                            </li>
                            <li aria-hidden="true" className="hidden" />
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <button aria-label="Avançar Slider para os próximos produtos" className="absolute right-0 p-2 pr-0.5 tail-listagem-seta tail-listagem-prod-seta" onclick="listagemSlider('avancar')">
                      <div className="grid flex-shrink-0 px-2 border border-gray-300 border-solid rounded-full place-content-center bg-gray-50 tail-listagem-seta-interno tail-listagem-prod-seta-interno ev-listagem-seta-interno">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3 md:h-4 -mr-0.5 text-gray-500 pointer-events-none">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                    </button>
                  </section>
                  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                    @media only screen and (max-width:640px)\n                    {\n                    .conteudo-hash-426 .listagem-mgm{grid-gap:5px;}\n                    .conteudo-hash-426 .listagem-mgm-slider{margin-right:5px;}\n                    .conteudo-hash-426 .listagem-mgm-slider-container{padding-left:5px;}\n                    .conteudo-hash-426 .listagem-slider-anterior,\n                    .conteudo-hash-426 .listagem-slider-proximo{box-shadow:0 0 3px 3px #fff!important;}\n                    }\n                    @media only screen and (min-width:641px) and (max-width:999px)\n                    {\n                    .conteudo-hash-426 .listagem-mgm{grid-gap:5px;}\n                    .conteudo-hash-426 .listagem-mgm-slider{margin-right:5px;}\n                    .conteudo-hash-426 .listagem-mgm-slider-container{padding-left:5px;}\n                    .conteudo-hash-426 .listagem-slider-anterior,\n                    .conteudo-hash-426 .listagem-slider-proximo{box-shadow:0 0 3px 3px #fff!important;}\n                    }\n                    @media only screen and (min-width:1000px) and (max-width:1249px)\n                    {\n                    .conteudo-hash-426 .listagem-mgm{grid-gap:10px;}\n                    .conteudo-hash-426 .listagem-mgm-slider{margin-right:10px;}\n                    .conteudo-hash-426 .listagem-mgm-slider-container{padding-left:10px;}\n                    .conteudo-hash-426 .listagem-slider-anterior,\n                    .conteudo-hash-426 .listagem-slider-proximo{box-shadow:0 0 7px 7px #fff!important;}\n                    }\n                    @media only screen and (min-width:1250px)\n                    {\n                    .conteudo-hash-426 .listagem-mgm{grid-gap:20px;}\n                    .conteudo-hash-426 .listagem-slider-container{padding-left:20px;}\n                    .conteudo-hash-426 .listagem-mgm-slider{margin-right:20px;}\n                    .conteudo-hash-426 .listagem-mgm-slider-container{padding-left:20px;}\n                    .conteudo-hash-426 .listagem-slider-anterior,\n                    .conteudo-hash-426 .listagem-slider-proximo{box-shadow:0 0 10px 15px #fff!important;}\n                    }\n                    @media only screen and (max-width:640px)\n                    {\n                    .conteudo-hash-426 .listagem-col{grid-template-columns:repeat(2, 1fr);}\n                    .conteudo-hash-426 .listagem-col-slider{width:calc(100% / 2);}\n                    .conteudo-hash-426 .listagem-prod-item:nth-child(1n+3){display:none;}\n                    }\n                    @media only screen and (min-width:641px) and (max-width:999px)\n                    {\n                    .conteudo-hash-426 .listagem-col{grid-template-columns:repeat(2, 1fr);}\n                    .conteudo-hash-426 .listagem-col-slider{width:calc(100% / 2);}\n                    .conteudo-hash-426 .listagem-prod-item:nth-child(1n+3){display:none;}\n                    }\n                    @media only screen and (min-width:1000px) and (max-width:1249px)\n                    {\n                    .conteudo-hash-426 .listagem-col{grid-template-columns:repeat(4, 1fr);}\n                    .conteudo-hash-426 .listagem-col-slider{width:calc(100% / 4);}\n                    .conteudo-hash-426 .listagem-prod-item:nth-child(1n+5){display:none;}\n                    }\n                    @media only screen and (min-width:1250px)\n                    {\n                    .conteudo-hash-426 .listagem-col{grid-template-columns:repeat(4, 1fr);}\n                    .conteudo-hash-426 .listagem-col-slider{width:calc(100% / 4);}\n                    .conteudo-hash-426 .listagem-prod-item:nth-child(1n+5){display:none;}\n                    }\n                  " }} />
                </li>
              </ul>
            </div>
            <div className="cont-separador cont-separador-65 cont-alt-gr " />
            <div className="cont-limite cont-limite-65 cont-pdd-pq ">
              <h2 className="tt vitr-tt cont-tt  cont-ali-ip-c cont-ali-fb-c cont-ali-dk-c cont-ali-mn-c cont-tt-65">
                <span className="tt-texto">INSTAGRAM</span>
              </h2>
              <ul className="cont-lista cont-lista-65 cont-mgm-l-md ">
                <li className="vitr-grupo-box vitr-grupo-hash-66 conteudo-hash-66 cont-item cont-item-66  cont-mgm-i-md" data-id={66}>
                  <section className="relative flex items-center gap-2 overflow-hidden js-tail-listagem-prod">
                    <button aria-label="Voltar Slider para os produtos anteriores" className="absolute left-0 z-10 p-2 pl-0.5 tail-listagem-seta tail-listagem-inst-seta" onclick="listagemSlider('voltar');">
                      <div className="grid flex-shrink-0 px-2 border border-gray-300 border-solid rounded-full place-content-center bg-gray-50 tail-listagem-seta-interno tail-listagem-inst-seta-interno ev-listagem-seta-interno">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3 md:h-4 -ml-0.5 text-gray-500 pointer-events-none ev-listagem-seta-icone">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                      </div>
                    </button>
                    <ul className="flex flex-grow ml-2 overflow-x-scroll tail-listagem-inst-slider-container js-tail-listagem-prod-lista">
                      <li className="relative flex flex-col gap-1.5 border border-solid border-gray-300 rounded-lg cursor-pointer tail-listagem-inst-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-3 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-5">
                        <a href="/instagram/405/1707498900" ref="alternate" target="_blank" className="flex-grow flex flex-col">
                          <div className="relative group js-tail-hover-mobile" style={{paddingBottom: '100%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1315112668.webp 200w, https://thumb.braavo.me/vivadress/400/1315112668.webp 400w, https://thumb.braavo.me/vivadress/600/1315112668.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1315112668.jpg 200w, https://thumb.braavo.me/vivadress/400/1315112668.jpg 400w, https://thumb.braavo.me/vivadress/600/1315112668.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/1315112668.jpg" alt={1707498900} className="absolute w-full h-full transform scale-105 transition-transform duration-500 hover:scale-100 object-cover" />
                            </picture>
                          </div>
                          <div className="hidden">
                            1707498900          
                          </div>
                        </a>
                      </li>
                      <li className="relative flex flex-col gap-1.5 border border-solid border-gray-300 rounded-lg cursor-pointer tail-listagem-inst-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-3 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-5">
                        <a href="/instagram/404/1707160798" ref="alternate" target="_blank" className="flex-grow flex flex-col">
                          <div className="relative group js-tail-hover-mobile" style={{paddingBottom: '100%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3586542259.webp 200w, https://thumb.braavo.me/vivadress/400/3586542259.webp 400w, https://thumb.braavo.me/vivadress/600/3586542259.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3586542259.jpg 200w, https://thumb.braavo.me/vivadress/400/3586542259.jpg 400w, https://thumb.braavo.me/vivadress/600/3586542259.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/3586542259.jpg" alt={1707160798} className="absolute w-full h-full transform scale-105 transition-transform duration-500 hover:scale-100 object-cover" />
                            </picture>
                          </div>
                          <div className="hidden">
                            1707160798          
                          </div>
                        </a>
                      </li>
                      <li className="relative flex flex-col gap-1.5 border border-solid border-gray-300 rounded-lg cursor-pointer tail-listagem-inst-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-3 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-5">
                        <a href="/instagram/403/1706724600" ref="alternate" target="_blank" className="flex-grow flex flex-col">
                          <div className="relative group js-tail-hover-mobile" style={{paddingBottom: '100%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2707333948.webp 200w, https://thumb.braavo.me/vivadress/400/2707333948.webp 400w, https://thumb.braavo.me/vivadress/600/2707333948.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2707333948.jpg 200w, https://thumb.braavo.me/vivadress/400/2707333948.jpg 400w, https://thumb.braavo.me/vivadress/600/2707333948.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/2707333948.jpg" alt={1706724600} className="absolute w-full h-full transform scale-105 transition-transform duration-500 hover:scale-100 object-cover" />
                            </picture>
                          </div>
                          <div className="hidden">
                            1706724600          
                          </div>
                        </a>
                      </li>
                      <li className="relative flex flex-col gap-1.5 border border-solid border-gray-300 rounded-lg cursor-pointer tail-listagem-inst-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-3 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-5">
                        <a href="/instagram/402/1705073465" ref="alternate" target="_blank" className="flex-grow flex flex-col">
                          <div className="relative group js-tail-hover-mobile" style={{paddingBottom: '100%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/989589331.webp 200w, https://thumb.braavo.me/vivadress/400/989589331.webp 400w, https://thumb.braavo.me/vivadress/600/989589331.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/989589331.jpg 200w, https://thumb.braavo.me/vivadress/400/989589331.jpg 400w, https://thumb.braavo.me/vivadress/600/989589331.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/989589331.jpg" alt={1705073465} className="absolute w-full h-full transform scale-105 transition-transform duration-500 hover:scale-100 object-cover" />
                            </picture>
                          </div>
                          <div className="hidden">
                            1705073465          
                          </div>
                        </a>
                      </li>
                      <li className="relative flex flex-col gap-1.5 border border-solid border-gray-300 rounded-lg cursor-pointer tail-listagem-inst-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-3 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-5">
                        <a href="/instagram/401/1704904821" ref="alternate" target="_blank" className="flex-grow flex flex-col">
                          <div className="relative group js-tail-hover-mobile" style={{paddingBottom: '100%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1298480547.webp 200w, https://thumb.braavo.me/vivadress/400/1298480547.webp 400w, https://thumb.braavo.me/vivadress/600/1298480547.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1298480547.jpg 200w, https://thumb.braavo.me/vivadress/400/1298480547.jpg 400w, https://thumb.braavo.me/vivadress/600/1298480547.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/1298480547.jpg" alt={1704904821} className="absolute w-full h-full transform scale-105 transition-transform duration-500 hover:scale-100 object-cover" />
                            </picture>
                          </div>
                          <div className="hidden">
                            1704904821          
                          </div>
                        </a>
                      </li>
                      <li className="relative flex flex-col gap-1.5 border border-solid border-gray-300 rounded-lg cursor-pointer tail-listagem-inst-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-3 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-5">
                        <a href="/instagram/400/1703084700" ref="alternate" target="_blank" className="flex-grow flex flex-col">
                          <div className="relative group js-tail-hover-mobile" style={{paddingBottom: '100%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3602936268.webp 200w, https://thumb.braavo.me/vivadress/400/3602936268.webp 400w, https://thumb.braavo.me/vivadress/600/3602936268.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3602936268.jpg 200w, https://thumb.braavo.me/vivadress/400/3602936268.jpg 400w, https://thumb.braavo.me/vivadress/600/3602936268.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/3602936268.jpg" alt={1703084700} className="absolute w-full h-full transform scale-105 transition-transform duration-500 hover:scale-100 object-cover" />
                            </picture>
                          </div>
                          <div className="hidden">
                            1703084700          
                          </div>
                        </a>
                      </li>
                      <li className="relative flex flex-col gap-1.5 border border-solid border-gray-300 rounded-lg cursor-pointer tail-listagem-inst-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-3 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-5">
                        <a href="/instagram/399/1702995300" ref="alternate" target="_blank" className="flex-grow flex flex-col">
                          <div className="relative group js-tail-hover-mobile" style={{paddingBottom: '100%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2838621045.webp 200w, https://thumb.braavo.me/vivadress/400/2838621045.webp 400w, https://thumb.braavo.me/vivadress/600/2838621045.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2838621045.jpg 200w, https://thumb.braavo.me/vivadress/400/2838621045.jpg 400w, https://thumb.braavo.me/vivadress/600/2838621045.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/2838621045.jpg" alt={1702995300} className="absolute w-full h-full transform scale-105 transition-transform duration-500 hover:scale-100 object-cover" />
                            </picture>
                          </div>
                          <div className="hidden">
                            1702995300          
                          </div>
                        </a>
                      </li>
                      <li className="relative flex flex-col gap-1.5 border border-solid border-gray-300 rounded-lg cursor-pointer tail-listagem-inst-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-3 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-5">
                        <a href="/instagram/398/1702734900" ref="alternate" target="_blank" className="flex-grow flex flex-col">
                          <div className="relative group js-tail-hover-mobile" style={{paddingBottom: '100%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/848602906.webp 200w, https://thumb.braavo.me/vivadress/400/848602906.webp 400w, https://thumb.braavo.me/vivadress/600/848602906.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/848602906.jpg 200w, https://thumb.braavo.me/vivadress/400/848602906.jpg 400w, https://thumb.braavo.me/vivadress/600/848602906.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/848602906.jpg" alt={1702734900} className="absolute w-full h-full transform scale-105 transition-transform duration-500 hover:scale-100 object-cover" />
                            </picture>
                          </div>
                          <div className="hidden">
                            1702734900          
                          </div>
                        </a>
                      </li>
                      <li className="relative flex flex-col gap-1.5 border border-solid border-gray-300 rounded-lg cursor-pointer tail-listagem-inst-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-3 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-5">
                        <a href="/instagram/397/1702660207" ref="alternate" target="_blank" className="flex-grow flex flex-col">
                          <div className="relative group js-tail-hover-mobile" style={{paddingBottom: '100%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1073756267.webp 200w, https://thumb.braavo.me/vivadress/400/1073756267.webp 400w, https://thumb.braavo.me/vivadress/600/1073756267.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1073756267.jpg 200w, https://thumb.braavo.me/vivadress/400/1073756267.jpg 400w, https://thumb.braavo.me/vivadress/600/1073756267.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/1073756267.jpg" alt={1702660207} className="absolute w-full h-full transform scale-105 transition-transform duration-500 hover:scale-100 object-cover" />
                            </picture>
                          </div>
                          <div className="hidden">
                            1702660207          
                          </div>
                        </a>
                      </li>
                      <li className="relative flex flex-col gap-1.5 border border-solid border-gray-300 rounded-lg cursor-pointer tail-listagem-inst-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-3 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-5">
                        <a href="/instagram/396/1701970938" ref="alternate" target="_blank" className="flex-grow flex flex-col">
                          <div className="relative group js-tail-hover-mobile" style={{paddingBottom: '100%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3685053444.webp 200w, https://thumb.braavo.me/vivadress/400/3685053444.webp 400w, https://thumb.braavo.me/vivadress/600/3685053444.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3685053444.jpg 200w, https://thumb.braavo.me/vivadress/400/3685053444.jpg 400w, https://thumb.braavo.me/vivadress/600/3685053444.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/3685053444.jpg" alt={1701970938} className="absolute w-full h-full transform scale-105 transition-transform duration-500 hover:scale-100 object-cover" />
                            </picture>
                          </div>
                          <div className="hidden">
                            1701970938          
                          </div>
                        </a>
                      </li>
                      <li className="relative flex flex-col gap-1.5 border border-solid border-gray-300 rounded-lg cursor-pointer tail-listagem-inst-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-3 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-5">
                        <a href="/instagram/395/1701454950" ref="alternate" target="_blank" className="flex-grow flex flex-col">
                          <div className="relative group js-tail-hover-mobile" style={{paddingBottom: '100%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2889590516.webp 200w, https://thumb.braavo.me/vivadress/400/2889590516.webp 400w, https://thumb.braavo.me/vivadress/600/2889590516.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/2889590516.jpg 200w, https://thumb.braavo.me/vivadress/400/2889590516.jpg 400w, https://thumb.braavo.me/vivadress/600/2889590516.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/2889590516.jpg" alt={1701454950} className="absolute w-full h-full transform scale-105 transition-transform duration-500 hover:scale-100 object-cover" />
                            </picture>
                          </div>
                          <div className="hidden">
                            1701454950          
                          </div>
                        </a>
                      </li>
                      <li className="relative flex flex-col gap-1.5 border border-solid border-gray-300 rounded-lg cursor-pointer tail-listagem-inst-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-3 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-5">
                        <a href="/instagram/394/1701125472" ref="alternate" target="_blank" className="flex-grow flex flex-col">
                          <div className="relative group js-tail-hover-mobile" style={{paddingBottom: '100%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/933161627.webp 200w, https://thumb.braavo.me/vivadress/400/933161627.webp 400w, https://thumb.braavo.me/vivadress/600/933161627.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/933161627.jpg 200w, https://thumb.braavo.me/vivadress/400/933161627.jpg 400w, https://thumb.braavo.me/vivadress/600/933161627.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/933161627.jpg" alt={1701125472} className="absolute w-full h-full transform scale-105 transition-transform duration-500 hover:scale-100 object-cover" />
                            </picture>
                          </div>
                          <div className="hidden">
                            1701125472          
                          </div>
                        </a>
                      </li>
                      <li className="relative flex flex-col gap-1.5 border border-solid border-gray-300 rounded-lg cursor-pointer tail-listagem-inst-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-3 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-5">
                        <a href="/instagram/393/1700323800" ref="alternate" target="_blank" className="flex-grow flex flex-col">
                          <div className="relative group js-tail-hover-mobile" style={{paddingBottom: '100%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1124467476.webp 200w, https://thumb.braavo.me/vivadress/400/1124467476.webp 400w, https://thumb.braavo.me/vivadress/600/1124467476.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/1124467476.jpg 200w, https://thumb.braavo.me/vivadress/400/1124467476.jpg 400w, https://thumb.braavo.me/vivadress/600/1124467476.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/1124467476.jpg" alt={1700323800} className="absolute w-full h-full transform scale-105 transition-transform duration-500 hover:scale-100 object-cover" />
                            </picture>
                          </div>
                          <div className="hidden">
                            1700323800          
                          </div>
                        </a>
                      </li>
                      <li className="relative flex flex-col gap-1.5 border border-solid border-gray-300 rounded-lg cursor-pointer tail-listagem-inst-item flex-shrink-0 mr-2 tail-listagem-card-largura-2 md:tail-listagem-card-largura-3 lg:tail-listagem-card-largura-4 2xl:tail-listagem-card-largura-5">
                        <a href="/instagram/392/1700235000" ref="alternate" target="_blank" className="flex-grow flex flex-col">
                          <div className="relative group js-tail-hover-mobile" style={{paddingBottom: '100%'}}>
                            <picture>
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3634581371.webp 200w, https://thumb.braavo.me/vivadress/400/3634581371.webp 400w, https://thumb.braavo.me/vivadress/600/3634581371.webp 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/webp" />
                              <source srcSet="https://thumb.braavo.me/vivadress/200/3634581371.jpg 200w, https://thumb.braavo.me/vivadress/400/3634581371.jpg 400w, https://thumb.braavo.me/vivadress/600/3634581371.jpg 600w" sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, 600px" type="image/jpeg" />
                              <img loading="lazy" src="https://thumb.braavo.me/vivadress/400/3634581371.jpg" alt={1700235000} className="absolute w-full h-full transform scale-105 transition-transform duration-500 hover:scale-100 object-cover" />
                            </picture>
                          </div>
                          <div className="hidden">
                            1700235000          
                          </div>
                        </a>
                      </li>
                    </ul>
                    <button aria-label="Avançar Slider para os próximos produtos" className="absolute right-0 p-2 pr-0.5 tail-listagem-seta tail-listagem-inst-seta" onclick="listagemSlider('avancar')">
                      <div className="grid flex-shrink-0 px-2 border border-gray-300 border-solid rounded-full place-content-center bg-gray-50 tail-listagem-seta-interno tail-listagem-inst-seta-interno ev-listagem-seta-interno">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3 md:h-4 -mr-0.5 text-gray-500 pointer-events-none">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                    </button>
                  </section>
                  <div className=" mt-2">
                    <a href="https://www.instagram.com/viva.dress/" className="flex items-center justify-center gap-2 mx-auto divide-x divide-gray-300 w-max divide-solid" target="_blank">
                      <img src="https://static.braavo.com.br/webroot/img/2015/vitr-insta-colorido.svg" className="flex-shrink-0" alt="Ícone do Instagram" />
                      <span className="pl-2">Siga @viva.dress</span>
                    </a>
                  </div>
                  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                    @media only screen and (max-width:640px)\n                    {\n                    .conteudo-hash-66 .listagem-mgm{grid-gap:5px;}\n                    .conteudo-hash-66 .listagem-mgm-slider{margin-right:5px;}\n                    .conteudo-hash-66 .listagem-mgm-slider-container{padding-left:5px;}\n                    .conteudo-hash-66 .listagem-slider-anterior,\n                    .conteudo-hash-66 .listagem-slider-proximo{box-shadow:0 0 3px 3px #fff!important;}\n                    }\n                    @media only screen and (min-width:641px) and (max-width:999px)\n                    {\n                    .conteudo-hash-66 .listagem-mgm{grid-gap:5px;}\n                    .conteudo-hash-66 .listagem-mgm-slider{margin-right:5px;}\n                    .conteudo-hash-66 .listagem-mgm-slider-container{padding-left:5px;}\n                    .conteudo-hash-66 .listagem-slider-anterior,\n                    .conteudo-hash-66 .listagem-slider-proximo{box-shadow:0 0 3px 3px #fff!important;}\n                    }\n                    @media only screen and (min-width:1000px) and (max-width:1249px)\n                    {\n                    .conteudo-hash-66 .listagem-mgm{grid-gap:10px;}\n                    .conteudo-hash-66 .listagem-mgm-slider{margin-right:10px;}\n                    .conteudo-hash-66 .listagem-mgm-slider-container{padding-left:10px;}\n                    .conteudo-hash-66 .listagem-slider-anterior,\n                    .conteudo-hash-66 .listagem-slider-proximo{box-shadow:0 0 7px 7px #fff!important;}\n                    }\n                    @media only screen and (min-width:1250px)\n                    {\n                    .conteudo-hash-66 .listagem-mgm{grid-gap:20px;}\n                    .conteudo-hash-66 .listagem-slider-container{padding-left:20px;}\n                    .conteudo-hash-66 .listagem-mgm-slider{margin-right:20px;}\n                    .conteudo-hash-66 .listagem-mgm-slider-container{padding-left:20px;}\n                    .conteudo-hash-66 .listagem-slider-anterior,\n                    .conteudo-hash-66 .listagem-slider-proximo{box-shadow:0 0 10px 15px #fff!important;}\n                    }\n                    @media only screen and (max-width:640px)\n                    {\n                    .conteudo-hash-66 .listagem-col{grid-template-columns:repeat(2, 1fr);}\n                    .conteudo-hash-66 .listagem-col-slider{width:calc(100% / 2);}\n                    }\n                    @media only screen and (min-width:641px) and (max-width:999px)\n                    {\n                    .conteudo-hash-66 .listagem-col{grid-template-columns:repeat(3, 1fr);}\n                    .conteudo-hash-66 .listagem-col-slider{width:calc(100% / 3);}\n                    }\n                    @media only screen and (min-width:1000px) and (max-width:1249px)\n                    {\n                    .conteudo-hash-66 .listagem-col{grid-template-columns:repeat(4, 1fr);}\n                    .conteudo-hash-66 .listagem-col-slider{width:calc(100% / 4);}\n                    }\n                    @media only screen and (min-width:1250px)\n                    {\n                    .conteudo-hash-66 .listagem-col{grid-template-columns:repeat(5, 1fr);}\n                    .conteudo-hash-66 .listagem-col-slider{width:calc(100% / 5);}\n                    }\n                  " }} />
                </li>
              </ul>
            </div>
            <div className="cont-separador cont-separador-64 cont-alt-md " />
            <div className="cont-limite cont-limite-64 cont-pdd-pq ">
              <ul className="cont-lista cont-lista-64 cont-mgm-l-md ">
              </ul>
            </div>
          </div>
          
        </article>
      </main>
    </>
    

  )
}

export default MainTransition