import "./style.css";

const MainCart = () => {
  return (
    <>
      <div id="principal-limite" className="principal-limite">
        <article id="conteudo" className="conteudo">
          <div className="flex flex-col gap-6 mx-auto my-6 lg:flex-row lg:max-w-5xl tail-carr-prod-interno">
            <div className="flex flex-col w-full gap-6 divide-y divide-gray-200 divide-solid">
              <div className="js-carr-prod-botoes">
                <button
                  type="submit"
                  // onclick="tailPixelEventoCarrinhoProdutos(), carrinhoResumoContinuar()"
                  className="w-full px-4 py-3 font-medium text-white rounded-md lg:hidden botao-primario carr-prod-botao botao tail-carr-prod-botao-continuar-1"
                >
                  Finalizar compra
                </button>
                <div className="flex flex-col pt-6 lg:pt-0 lg:gap-6 lg:flex-row lg:items-center">
                  <div className="grid w-full grid-cols-2 gap-4 lg:flex lg:w-auto lg:flex-row">
                    <a
                      href="/"
                      className="px-2 py-3 flex justify-center items-center gap-2 leading-none bg-gray-100 text-xs font-bold rounded-md hover:underline focus:underline lg:px-3 lg:text-sm tail-carr-prod-voltar ev-carr-prod-voltar"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                      Continuar comprando
                    </a>
                    <button
                      type="button"
                      className="px-2 py-3 flex justify-center items-center gap-2 leading-none bg-gray-100 text-xs font-bold rounded-md hover:underline focus:underline lg:px-3 lg:text-sm tail-carr-prod-voltar ev-carr-prod-voltar cursor-pointer"
                      // onclick="carrinhoCompartilharModalAbrir()"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Compartilhar carrinho
                    </button>
                  </div>
                </div>
              </div>
              <form
                action="/carrinho"
                autoComplete="off"
                method="post"
                noValidate
                className="js-carrinho-produto-listagem"
              >
                <div className="w-full text-sm">
                  <div className="grid gap-4">
                    {/* CARD MAP */}
                    <div
                      className="flex flex-col w-full gap-2 pt-4 relative  js-carrinho-produto-listagem-item"
                      data-sku={16515}
                    >
                      <div className="flex flex-row w-full gap-2 pt-4">
                        <div className="flex-none w-28">
                          <img
                            loading="lazy"
                            src="/259243190.webp"
                            alt="Vestido Longo Acetinado Chris Ombro a Ombro Roxo"
                          />
                        </div>
                        <div className="relative grid flex-auto gap-4">
                          <label
                            htmlFor="Carrinho0Excluir"
                            title="Remover"
                            className="absolute top-0 right-0 text-xs text-red-600 underline cursor-pointer tail-carr-excluir"
                            // onclick="carrinhoRemover()"
                          >
                            <svg
                              className="h-8 fill-current"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <defs>
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      ".cls-1,.cls-2{fill:none;}.cls-2{stroke:#000;stroke-linecap:round;stroke-linejoin:round;}",
                                  }}
                                />
                              </defs>
                              <g data-name="Layer 2" id="Layer_2">
                                <g id="Workspace">
                                  <rect className="cls-1" height={24} width={24} />
                                  <polyline className="cls-2" points="8 8 9 18 15 18 16 8" />
                                  <line className="cls-2" x1={7} x2={17} y1={8} y2={8} />
                                  <polyline
                                    className="cls-2"
                                    points="10.5 8 10.5 6 13.5 6 13.5 8"
                                  />
                                  <line className="cls-2" x1="10.5" x2={11} y1={10} y2={16} />
                                  <line className="cls-2" x1="13.5" x2={13} y1={10} y2={16} />
                                </g>
                              </g>
                            </svg>
                          </label>
                          <div className="grid gap-2 pr-10">
                            <div>
                              <a
                                href="/prod/2596/vestido-longo-acetinado-chris-ombro-a-ombro-roxo"
                                className="text-sm font-bold leading-none hover:underline tail-carr-nome tail-carr-prod-nome"
                              >
                                Vestido Longo Acetinado Chris Ombro a Ombro Roxo
                              </a>
                            </div>
                            <div>Tamanho: 40</div>
                          </div>
                          <div className="relative flex items-center justify-between flex-auto gap-1 lg:grid lg:grid-cols-2 lg:gap-4">
                            <div className="js-carrinho-produto-listagem-quantidade">
                              <div className="flex items-center gap-1.5 lg:flex-row">
                                <button
                                  type="button"
                                  className="grid p-0.5 rounded-full cursor-pointer place-content-center bg-black ev-carrinho-produto-tabela-qtd-menos"
                                  // onclick="carrinhoQuantidade('negativo')"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-3 text-white ev-carrinho-produto-tabela-qtd-menos-icone"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 12h-15"
                                    />
                                  </svg>
                                </button>
                                <input
                                  type="text"
                                  name="dados[Carrinho][0][quantidade]"
                                  defaultValue={1}
                                  data-quantidade={1}
                                  inputMode="numeric"
                                  // onblur="carrinhoQuantidade('igual')"
                                  className="py-2 text-center bg-gray-100 bg-opacity-50 border border-gray-200 border-solid rounded w-9 js-carrinho-produto-listagem-quantidade-input"
                                />
                                <button
                                  type="button"
                                  className="grid p-0.5 rounded-full cursor-pointer place-content-center bg-black ev-carrinho-produto-tabela-qtd-mais"
                                  // onclick="carrinhoQuantidade('positivo')"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-3 text-white ev-carrinho-produto-tabela-qtd-mais-icone"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 4.5v15m7.5-7.5h-15"
                                    />
                                  </svg>
                                </button>
                                <div className="pl-4 ml-4 text-xs border-l border-gray-300 border-solid js-carrinho-desejo-link-geral">
                                  <a
                                    className="text-red-600 underline cursor-pointer js-carrinho-desejo-link-fetch"
                                    href="/login?redir=%2Fcarrinho"
                                  >
                                    Salvar para mais tarde
                                  </a>
                                </div>
                              </div>
                              <input
                                type="checkbox"
                                name="dados[Carrinho][0][quantidade]"
                                defaultValue={0}
                                id="Carrinho0Excluir"
                                className="hidden form-check-check form-check-excluir"
                              />
                              <input
                                type="hidden"
                                name="dados[Carrinho][0][sku_id]"
                                defaultValue={16515}
                              />
                              <input
                                type="hidden"
                                name="dados[Carrinho][0][conjunto_id]"
                                defaultValue={0}
                              />
                              <input
                                type="hidden"
                                name="dados[Carrinho][0][conjunto_hash]"
                                defaultValue={0}
                              />
                              <input
                                type="hidden"
                                name="dados[Carrinho][0][pers_json]"
                                defaultValue={0}
                              />
                            </div>
                            <div className="text-base text-right tail-carr-prod-preco">
                              <div className="gap-2 text-right tail-carr-prod-preco-parcelas">
                                <div className="font-bold tail-carr-prod-preco-parcelas-interno">
                                  R$ 349,90
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* CARD MAP */}
                  </div>
                </div>
                <input
                  type="hidden"
                  name="dados[acao]"
                  defaultValue="atualizar"
                  className="js-prod-acao"
                />
              </form>
              <div className="grid h-64 place-content-center escondido js-carrinho-produto-listagem-loader">
                <svg
                  className="h-20 animate-spin"
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
            </div>
            <div className="flex-shrink-0 lg:sticky lg:top-0">
              <section className="grid gap-4 p-4 bg-gray-100 border border-gray-300 border-solid divide-y divide-gray-200 rounded-lg divide-solid lg:w-64 tail-carr-prod-resumo js-carr-prod-resumo">
                <div className="grid gap-1 tail-carr-prod-resumo-cupom js-carr-prod-resumo-cupom ">
                  <div className="text-sm text-left tail-carr-prod-resumo-cupom-tt js-carr-prod-resumo-cupom-tt">
                    Cupom de desconto
                  </div>
                  <div className="flex flex-col gap-1 tail-carr-prod-resumo-cupom-info">
                    <form
                      action="/desconto"
                      autoComplete="off"
                      method="post"
                      noValidate
                      className="flex gap-2 items-strech js-carrinho-resumo-desconto"
                    >
                      <div
                        className="flex-auto  border-transparent form-div-desconto-codigo"
                        data-campo="Desconto.codigo"
                      >
                        <div className="relative flex gap-1 js-tail-form-text-lista">
                          <input
                            type="text"
                            data-rotulo
                            id="DescontoCodigo"
                            name="dados[Desconto][codigo]"
                            className="block w-full px-3 py-2 text-base text-black bg-white border border-gray-400 border-solid rounded-lg shadow-sm outline-none sm:text-sm focus:border-indigo-500 ring-0 disabled-bg border-gray-200 js-carrinho-resumo-desconto-campo"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="flex-none px-3.5 text-white rounded-lg botao botao-primario carr-prod-desconto-btn"
                        // onclick="carrinhoDesconto()"
                      >
                        Aplicar
                      </button>
                    </form>
                  </div>
                </div>
                <div className="flex flex-row pt-4 tail-carr-prod-resumo-produtos">
                  <div className="flex-none w-20 text-sm text-left">Subtotal*</div>
                  <div className="w-full text-base font-bold text-right">
                    R$ 349,90 <div className="text-xs font-normal">1 item </div>
                  </div>
                </div>
                <div className="flex flex-row pt-4 tail-carr-prod-resumo-frete">
                  <div className="flex-none w-20 text-sm text-left js-carr-prod-frete-texto">
                    Frete*
                  </div>
                  <div className="w-full text-base font-bold text-right">
                    <button
                      type="button"
                      className="text-xs font-normal underline cursor-pointer"
                      // onclick="freteResumoModalAbrir()"
                    >
                      Calcular Frete
                    </button>
                  </div>
                </div>
                <div className="flex flex-row pt-4 tail-carr-prod-resumo-total js-carr-prod-resumo-total">
                  <div className="flex-none w-20 text-sm text-left">Total*</div>
                  <div
                    className="w-full text-base font-bold text-right js-carr-prod-total"
                    data-total="349.90"
                  >
                    R$ 349,90
                    <button
                      type="button"
                      className="text-xs font-normal underline cursor-pointer"
                      // onclick="parcelaResumoModalAbrir()"
                    >
                      Ver parcelamentos
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  // onclick="tailPixelEventoCarrinhoProdutos(), carrinhoResumoContinuar()"
                  className="w-full px-4 py-3 font-medium text-white rounded-lg botao-primario carr-prod-botao carr-prod-botao-finalizar botao tail-carr-prod-botao-continuar-2"
                >
                  Finalizar compra
                </button>
              </section>
            </div>
          </div>
          <div className="flex flex-col mx-auto my-6 lg:max-w-2xl tail-carr-prod-interno">
            <div className="pt-6 border-t border-gray-200 border-solid tail-carr-prod-texto-2">
              <div className="text-xs text-center">
                *O carrinho de compras armazena temporariamente uma lista dos produtos e não garante
                a disponibilidade em estoque no momento da compra. O preço e a disponibilidade dos
                produtos estão sujeitos a alterações.
              </div>
            </div>
          </div>
          <div className="js-carrinho-desejo" />
          <div className="js-carrinho-upsell" />
          <dialog className="fixed z-50 w-11/12 max-w-xl text-left border border-gray-300 border-solid rounded-lg shadow-lg scroll-auto tail-prod-ver-modal js-tail-carrinho-modal js-tail-frete-resumo-modal" />
          <dialog className="fixed z-50 w-11/12 max-w-xl text-left border border-gray-300 border-solid rounded-lg shadow-lg scroll-auto tail-prod-ver-modal js-tail-carrinho-modal js-tail-parcela-resumo-modal" />
          <dialog className="fixed z-50 w-11/12 max-w-xl text-left border border-gray-300 border-solid rounded-lg shadow-lg scroll-auto tail-prod-ver-modal js-tail-carrinho-modal js-tail-carrinho-compartilhar-modal">
            <div className="sticky top-0 z-10 flex items-center justify-between gap-2 p-4 bg-white border-b border-gray-300 border-solid lg:px-8">
              <h4 className="text-xl lg:text-2xl">Compartilhar</h4>
              <button
                type="button"
                className="flex-shrink-0 p-1.5 border border-gray-300 border-solid rounded-full hover:bg-gray-100"
                // onclick="carrinhoCompartilharModalFechar()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="flex-shrink-0 h-4 pointer-events-none"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="grid gap-2 px-4 py-6 lg:px-8">
              <div className="text-sm lg:text-base">Link para compartilhar</div>
              <textarea
                className="block w-full h-40 px-3 py-2 text-sm text-black bg-white border border-gray-400 border-solid rounded-lg shadow-sm outline-none md:text-base focus:border-indigo-500 ring-0 disabled-bg js-carr-prod-compartilhar-campo"
                defaultValue={"https://www.vivadress.com.br/comprar?skus=16515%2C1%2C0%2C0"}
              />
              <div className="grid gap-2 md:grid-cols-2">
                <button
                  type="button"
                  className="px-4 py-3 text-sm text-white bg-black rounded-lg md:text-base"
                  // onclick="carrinhoCompartilhar()"
                >
                  Copiar
                </button>
                <div className="flex items-center row-start-2 gap-2 px-3 py-2 mx-auto text-sm font-bold text-green-600 transition-opacity rounded-lg bg-green-50 md:mx-0 lg:text-base w-max md:row-start-1 md:col-start-2 escondido js-carr-prod-compartilhar-info">
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
                  <span>Link copiado</span>
                </div>
              </div>
            </div>
          </dialog>
          <div
            data-classe="js-tail-frete-resumo-modal"
            className="escondido fixed z-50 w-11/12 max-w-xl text-left border border-gray-300 border-solid rounded-lg shadow-lg scroll-auto tail-prod-ver-modal bg-white top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 tail-produto-modal-polyfill-div js-tail-produto-modal-polyfill-div"
          />
          <div
            data-classe="js-tail-parcela-resumo-modal"
            className="escondido fixed z-50 w-11/12 max-w-xl text-left border border-gray-300 border-solid rounded-lg shadow-lg scroll-auto tail-prod-ver-modal bg-white top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 tail-produto-modal-polyfill-div js-tail-produto-modal-polyfill-div"
          />
          <div
            data-classe="js-tail-carrinho-compartilhar-modal"
            className="escondido fixed z-50 w-11/12 max-w-xl text-left border border-gray-300 border-solid rounded-lg shadow-lg scroll-auto tail-prod-ver-modal bg-white top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 tail-produto-modal-polyfill-div js-tail-produto-modal-polyfill-div"
          />
        </article>
      </div>
    </>
  );
};

export default MainCart;
