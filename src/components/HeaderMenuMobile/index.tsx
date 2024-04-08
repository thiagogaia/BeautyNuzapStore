const HeaderMenuMobile = () => {
  return (
    <section className="overflow-visible text-xs relative tail-topo ev-topo js-tail-topo js-appec-escondido">
      <section
        data-nome="interno_1"
        className="relative p-4 overflow-visible transition duration-300 border-b border-transparent border-solid md:border-gray-200 lg:text-left ev-topo-interno-1 js-tail-topo-interno-1 tail-topo-interno-1"
        data-seta-posicao="baixo"
      >
        <div className="grid grid-cols-3 overflow-visible tail-topo-classe-limite">
          <div className="flex items-center md:gap-6 md:flex-col md:items-start lg:items-center lg:flex-row">
            <div
              className="flex items-center md:order-last lg:order-none md:hidden ev-topo-categorias-toggle-btn-abrir js-tail-topo-inverter"
              data-seta-posicao="baixo"
            >
              <label
                htmlFor="tail-topo-hamburger-abrir"
                onclick="topoToggleTodosFechar(this)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-8 h-8 cursor-pointer ev-topo-categorias-toggle-btn-abrir-svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </label>
            </div>
            <input
              className="hidden tail-topo-hamburger-abrir js-tail-topo-toggle-todos"
              type="checkbox"
              name="topo-hamburger"
              id="tail-topo-hamburger-abrir"
            />
            <div
              data-nome="categorias-toggle-1"
              className="overflow-visible bg-black backdrop-filter backdrop-blur-sm bg-opacity-30 tail-topo-categorias-toggle"
            >
              <div className="absolute block top-1 left-72 md:left-80 tail-topo-categorias-toggle-fechar">
                <label htmlFor="tail-topo-hamburger-abrir">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className=" w-8 h-8 text-white cursor-pointer md:w-10 md:h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </label>
              </div>
              <div className="w-64 h-full overflow-auto text-sm bg-white md:w-72 lg:w-80 ev-topo-categorias-toggle-interno ev-topo-categorias-toggle-1-interno">
                <div className="overflow-visible ev-topo-categorias-toggle-interno ev-topo-categorias-toggle-1-dados-interno0">
                  <div className="flex flex-col overflow-visible uppercase divide-y divide-gray-200 divide-solid tail-topo-categorias-toggle-lista ev-topo-categorias-toggle-lista ev-topo-categorias-toggle-1-dados-lista0">
                    <div
                      style={{}}
                      className="overflow-visible px-2.5 tail-topo-categorias-toggle-1-dados-item-0 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item0"
                    >
                      <div className="flex items-center gap-2">
                        <a
                          href="/cat/5/new-in"
                          style={{}}
                          rel="next"
                          className="flex-grow inline-block py-4 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link0 tail-topo-categorias-toggle-1-dados-link-0"
                          data-nome="New In"
                        >
                          <div className="flex items-center gap-2.5 tail-topo-categorias-toggle-img-container ">
                            Ola gente
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      style={{}}
                      className="overflow-visible px-2.5 tail-topo-categorias-toggle-1-dados-item-0 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item0"
                    >
                      <div className="flex items-center gap-2">
                        <a
                          href="/cat/4/best-sellers"
                          style={{}}
                          rel="next"
                          className="flex-grow inline-block py-4 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link0 tail-topo-categorias-toggle-1-dados-link-0"
                          data-nome="Best Sellers"
                        >
                          <div className="flex items-center gap-2.5 tail-topo-categorias-toggle-img-container ">
                            Best Sellers
                          </div>
                        </a>
                      </div>
                    </div>
                    <details
                      className="overflow-visible px-2.5 tail-topo-categorias-toggle-1-dados-item-0 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item0 tail-topo-categorias-toggle-details"
                      data-nome="ATÉ 75% OFF"
                    >
                      <summary className="flex items-center gap-2 cursor-pointer tail-topo-mobile-summary">
                        <div
                          style={{ color: "black", fontWeight: "bold" }}
                          className="flex-grow inline-block py-4 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link0 tail-topo-categorias-toggle-1-dados-link-0"
                          data-nome="ATÉ 75% OFF"
                        >
                          <div className="flex items-center gap-2.5 tail-topo-categorias-toggle-img-container ">
                            ATÉ 75% OFF
                          </div>
                        </div>
                        <span className="py-1.5 px-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className="w-5 h-5 tail-topo-categorias-toggle-seta"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            ></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="text-left ev-topo-categorias-toggle-interno ev-topo-categorias-toggle-1-dados-interno1">
                        <div className="flex flex-col gap-2 pb-4 pl-3 normal-case pr-1.5 ev-topo-categorias-toggle-lista ev-topo-categorias-toggle-1-dados-lista1 tail-topo-categorias-toggle-1-dados-lista-1">
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1 tail-topo-categorias-toggle-1-dados-item-1-ver-tudo">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/70/ate-75-off"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Ver ATÉ 75% OFF </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/73/ate-r-359-90"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>ATÉ R$ 359,90 </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/72/ate-r-199-90"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>ATÉ R$ 199,90 </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/71/ate-r-99-90"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>ATÉ R$ 99,90 </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </details>
                    <details
                      className="overflow-visible px-2.5 tail-topo-categorias-toggle-1-dados-item-0 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item0 tail-topo-categorias-toggle-details"
                      data-nome="Todos Vestidos Longos"
                    >
                      <summary className="flex items-center gap-2 cursor-pointer tail-topo-mobile-summary">
                        <div
                          style={{}}
                          className="flex-grow inline-block py-4 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link0 tail-topo-categorias-toggle-1-dados-link-0"
                          data-nome="Todos Vestidos Longos"
                        >
                          <div className="flex items-center gap-2.5 tail-topo-categorias-toggle-img-container ">
                            Todos Vestidos Longos
                          </div>
                        </div>
                        <span className="py-1.5 px-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className="w-5 h-5 tail-topo-categorias-toggle-seta"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            ></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="text-left ev-topo-categorias-toggle-interno ev-topo-categorias-toggle-1-dados-interno1">
                        <div className="flex flex-col gap-2 pb-4 pl-3 normal-case pr-1.5 ev-topo-categorias-toggle-lista ev-topo-categorias-toggle-1-dados-lista1 tail-topo-categorias-toggle-1-dados-lista-1">
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1 tail-topo-categorias-toggle-1-dados-item-1-ver-tudo">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/2/todos-vestidos-longos"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>
                                  Ver Todos Vestidos Longos{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/c/vestidos-tons-lilas-fucsia"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Tons Lilás/Fúcsia </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/c/vestidos-tons-verdes"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Tons Verdes </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/c/vestidos-tons-terrosos"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Tons Terrosos </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/c/vestidos-tons-azuis"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Tons Azuis/Serenity </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/63/tons-marsala-vermelho"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Tons Marsala/Vermelho </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/58/tons-rose-pink"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Tons Rose/Pink </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/64/tons-amarelo"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Tons Amarelo </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/84/preto"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Preto </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/39/vestidos-alfaiataria"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Vestidos Alfaiataria </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/c/vestidos-lisos"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Vestidos Lisos </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/36/vestidos-acetinados"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Vestidos Acetinados </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/c/vestidos-tule"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Vestidos Tule </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/38/vestidos-body"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Vestidos Body </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/56/vestidos-plissados"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Vestidos Plissados </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/57/vestidos-paete"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Vestidos Paetê </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </details>
                    <details
                      className="overflow-visible px-2.5 tail-topo-categorias-toggle-1-dados-item-0 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item0 tail-topo-categorias-toggle-details"
                      data-nome="Vestidos Curtos"
                    >
                      <summary className="flex items-center gap-2 cursor-pointer tail-topo-mobile-summary">
                        <div
                          style={{}}
                          className="flex-grow inline-block py-4 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link0 tail-topo-categorias-toggle-1-dados-link-0"
                          data-nome="Vestidos Curtos"
                        >
                          <div className="flex items-center gap-2.5 tail-topo-categorias-toggle-img-container ">
                            Vestidos Curtos
                          </div>
                        </div>
                        <span className="py-1.5 px-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className="w-5 h-5 tail-topo-categorias-toggle-seta"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            ></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="text-left ev-topo-categorias-toggle-interno ev-topo-categorias-toggle-1-dados-interno1">
                        <div className="flex flex-col gap-2 pb-4 pl-3 normal-case pr-1.5 ev-topo-categorias-toggle-lista ev-topo-categorias-toggle-1-dados-lista1 tail-topo-categorias-toggle-1-dados-lista-1">
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1 tail-topo-categorias-toggle-1-dados-item-1-ver-tudo">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/1/vestidos-curtos"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Ver Vestidos Curtos </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/c/vestido-paete-curto"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Vestido Paete Curto </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/c/vestido-lurex-curto"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Vestido Lurex Curto </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </details>
                    <div
                      style={{}}
                      className="overflow-visible px-2.5 tail-topo-categorias-toggle-1-dados-item-0 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item0"
                    >
                      <div className="flex items-center gap-2">
                        <a
                          href="/c/mil-formas"
                          style={{}}
                          rel="next"
                          className="flex-grow inline-block py-4 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link0 tail-topo-categorias-toggle-1-dados-link-0"
                          data-nome="Mil Formas"
                        >
                          <div className="flex items-center gap-2.5 tail-topo-categorias-toggle-img-container ">
                            Mil Formas
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      style={{}}
                      className="overflow-visible px-2.5 tail-topo-categorias-toggle-1-dados-item-0 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item0"
                    >
                      <div className="flex items-center gap-2">
                        <a
                          href="/cat/16/brilhe"
                          style={{}}
                          rel="next"
                          className="flex-grow inline-block py-4 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link0 tail-topo-categorias-toggle-1-dados-link-0"
                          data-nome="Brilhe"
                        >
                          <div className="flex items-center gap-2.5 tail-topo-categorias-toggle-img-container ">
                            Brilhe
                          </div>
                        </a>
                      </div>
                    </div>
                    <details
                      className="overflow-visible px-2.5 tail-topo-categorias-toggle-1-dados-item-0 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item0 tail-topo-categorias-toggle-details"
                      data-nome="Ocasiões"
                    >
                      <summary className="flex items-center gap-2 cursor-pointer tail-topo-mobile-summary">
                        <div
                          style={{}}
                          className="flex-grow inline-block py-4 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link0 tail-topo-categorias-toggle-1-dados-link-0"
                          data-nome="Ocasiões"
                        >
                          <div className="flex items-center gap-2.5 tail-topo-categorias-toggle-img-container ">
                            Ocasiões
                          </div>
                        </div>
                        <span className="py-1.5 px-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className="w-5 h-5 tail-topo-categorias-toggle-seta"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            ></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="text-left ev-topo-categorias-toggle-interno ev-topo-categorias-toggle-1-dados-interno1">
                        <div className="flex flex-col gap-2 pb-4 pl-3 normal-case pr-1.5 ev-topo-categorias-toggle-lista ev-topo-categorias-toggle-1-dados-lista1 tail-topo-categorias-toggle-1-dados-lista-1">
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1 tail-topo-categorias-toggle-1-dados-item-1-ver-tudo">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/19/ocasioes"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Ver Ocasiões </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/54/estolas-e-casacos"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Estolas e Casacos </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/7/formandas"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Formandas </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/28/gravidas"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Grávidas </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/20/madrinhas"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Madrinhas </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/21/debutante"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Debutante </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/30/veludo"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Veludo </span>
                              </a>
                            </div>
                          </div>
                          <div className="tail-topo-categorias-toggle-1-dados-item-1 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item1">
                            <div className="flex items-center gap-x-2">
                              <a
                                href="/cat/22/brancos"
                                rel="next"
                                className="flex-grow inline-block py-2 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link1 tail-topo-categorias-toggle-1-dados-link-1"
                              >
                                <span className>Brancos </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </details>
                    <div
                      style={{ color: "#ff0000", fontWeight: "bold" }}
                      className="overflow-visible px-2.5 tail-topo-categorias-toggle-1-dados-item-0 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item0"
                    >
                      <div className="flex items-center gap-2">
                        <a
                          href="/cat/29/ate-199-90"
                          style={{ color: "#ff0000", fontWeight: "bold" }}
                          rel="next"
                          className="flex-grow inline-block py-4 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link0 tail-topo-categorias-toggle-1-dados-link-0"
                          data-nome="Até 199,90"
                        >
                          <div className="flex items-center gap-2.5 tail-topo-categorias-toggle-img-container ">
                            Até 199,90
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      style={{}}
                      className="overflow-visible px-2.5 tail-topo-categorias-toggle-1-dados-item-0 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item0"
                    >
                      <div className="flex items-center gap-2">
                        <a
                          href="/cat/17/ver-todos"
                          style={{}}
                          rel="next"
                          className="flex-grow inline-block py-4 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link0 tail-topo-categorias-toggle-1-dados-link-0"
                          data-nome="Ver Todos"
                        >
                          <div className="flex items-center gap-2.5 tail-topo-categorias-toggle-img-container ">
                            Ver Todos
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      style={{}}
                      className="overflow-visible px-2.5 tail-topo-categorias-toggle-1-dados-item-0 ev-topo-categorias-toggle-item ev-topo-categorias-toggle-1-dados-item0"
                    >
                      <div className="flex items-center gap-2">
                        <a
                          href="/cat/55/blog"
                          style={{}}
                          rel="next"
                          className="flex-grow inline-block py-4 text-left ev-topo-categorias-toggle-link ev-topo-categorias-toggle-1-dados-link0 tail-topo-categorias-toggle-1-dados-link-0"
                          data-nome="Blog"
                        >
                          <div className="flex items-center gap-2.5 tail-topo-categorias-toggle-img-container ">
                            Blog
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-nome="social-1"
              className="hidden md:block js-tail-topo-inverter"
            >
              <div className="ev-topo-social-interno">
                <ul
                  className="flex justify-center gap-1 md:justify-start ev-topo-social-lista"
                  data-seta-posicao="baixo"
                >
                  <li className="ev-topo-social-item  ev-topo-social-dados-item">
                    <a
                      href="http://www.facebook.com/oficialvivadress"
                      className="block p-1 ev-topo-social-link  ev-topo-social-dados-link"
                      title="facebook"
                      rel="external"
                      target="_blank"
                    >
                      <svg
                        className="h-5 fill-current  ev-topo-social-dados-svg tail-topo-social-vetor-facebook"
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
                  <li className="ev-topo-social-item  ev-topo-social-dados-item">
                    <a
                      href="http://www.instagram.com/viva.dress/"
                      className="block p-1 ev-topo-social-link  ev-topo-social-dados-link"
                      title="instagram"
                      rel="external"
                      target="_blank"
                    >
                      <svg
                        className="h-5 fill-current  ev-topo-social-dados-svg tail-topo-social-vetor-instagram"
                        version="1.1"
                        xmlns="//www.w3.org/2000/svg"
                        xmlnsXlink="//www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 56.7 56.7"
                        enableBackground="new 0 0 56.7 56.7"
                        xmlSpace="preserve"
                      >
                        <g>
                          <path d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z" />
                          <circle cx="41.5" cy="16.4" r="2.9" />
                          <path d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z" />
                        </g>
                      </svg>
                    </a>
                  </li>
                  <li className="ev-topo-social-item  ev-topo-social-dados-item">
                    <a
                      href="http://tiktok.com/@viva.dress"
                      className="block p-1 ev-topo-social-link  ev-topo-social-dados-link"
                      title="tiktok"
                      rel="external"
                      target="_blank"
                    >
                      <svg
                        className="h-5 fill-current  ev-topo-social-dados-svg tail-topo-social-vetor-tiktok"
                        viewBox="0 0 32 32"
                        xmlns="//www.w3.org/2000/svg"
                      >
                        <path d="M16.708 0.027c1.745-0.027 3.48-0.011 5.213-0.027 0.105 2.041 0.839 4.12 2.333 5.563 1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-0.063-3.855-0.463-5.6-1.291-0.76-0.344-1.468-0.787-2.161-1.24-0.009 3.896 0.016 7.787-0.025 11.667-0.104 1.864-0.719 3.719-1.803 5.255-1.744 2.557-4.771 4.224-7.88 4.276-1.907 0.109-3.812-0.411-5.437-1.369-2.693-1.588-4.588-4.495-4.864-7.615-0.032-0.667-0.043-1.333-0.016-1.984 0.24-2.537 1.495-4.964 3.443-6.615 2.208-1.923 5.301-2.839 8.197-2.297 0.027 1.975-0.052 3.948-0.052 5.923-1.323-0.428-2.869-0.308-4.025 0.495-0.844 0.547-1.485 1.385-1.819 2.333-0.276 0.676-0.197 1.427-0.181 2.145 0.317 2.188 2.421 4.027 4.667 3.828 1.489-0.016 2.916-0.88 3.692-2.145 0.251-0.443 0.532-0.896 0.547-1.417 0.131-2.385 0.079-4.76 0.095-7.145 0.011-5.375-0.016-10.735 0.025-16.093z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              data-nome="busca-1"
              className="hidden w-56 md:block tail-topo-busca ev-topo-busca js-tail-topo-inverter"
            >
              <div className="ev-topo-busca-interno" data-seta-posicao="baixo">
                <form
                  action="/busca"
                  autoComplete="off"
                  method="get"
                  noValidate="novalidate"
                  className="ev-topo-busca-form js-busca"
                >
                  <div className="tail-topo-busca-form-interno-1 ev-topo-busca-form-interno-1">
                    <div className="flex justify-between border border-black border-solid rounded-full tail-topo-busca-form-interno-2 ev-topo-busca-form-interno-2">
                      <input
                        type="text"
                        inputMode="search"
                        name="b"
                        aria-label="Buscar em Viva Dress"
                        autoCorrect="off"
                        autoCapitalize="none"
                        autoComplete="off"
                        placeholder="Buscar produto"
                        className="w-full px-4 py-2 pr-0 leading-normal placeholder-black bg-transparent rounded-none outline-none tail-topo-busca-campo ev-topo-busca-campo js-busca-campo"
                        id="topo-busca-campo"
                      />
                      <button
                        value
                        aria-label="Enviar busca"
                        className="px-2 text-current bg-transparent cursor-pointer tail-topo-busca-btn-ok ev-topo-busca-btn-ok js-busca-botao"
                        data-seta-posicao="baixo"
                      >
                        <label htmlFor="topo-busca-campo">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className="w-5 h-5 cursor-pointer tail-topo-busca-btn-ok-svg ev-topo-busca-btn-ok-svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                          </svg>
                          <span className="sr-only">
                            Selecionar barra de pesquisa
                          </span>
                        </label>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center overflow-visible">
            <div
              data-nome="logo-1"
              className="overflow-visible tail-topo-logo js-tail-topo-inverter"
            >
              <div className="ev-topo-logo-interno">
                <div className="ev-topo-logo-foto">
                  <a href="/" className="ev-topo-logo-foto-link">
                    <img
                      loading="lazy"
                      src="https://braavo-thumb.nyc3.digitaloceanspaces.com/vivadress/0/3608396007.webp"
                      width={259}
                      height={60}
                      className="object-contain max-h-12 md:max-h-20 ev-topo-logo-foto-img tail-topo-logo-img"
                      alt="Viva Dress"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-2 overflow-visible md:gap-3">
            <div
              data-nome="desejo-1"
              className="overflow-visible w-min md:ml-4 tail-topo-desejo ev-topo-desejo js-tail-topo-inverter"
            >
              <div className="ev-topo-desejo-interno" data-seta-posicao="baixo">
                <div className="ev-topo-desejo-vetor">
                  <a
                    href="/conta/desejos"
                    className="ev-topo-desejo-vetor-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-6 h-6 transition-transform transform hover:scale-110 ev-topo-desejo-vetor-svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div
              data-nome="login-1"
              className="relative hidden overflow-visible md:order-first md:block"
            >
              <div
                className="flex justify-end tail-topo-login-interno ev-topo-login-interno"
                data-seta-posicao="baixo"
              >
                <nav className="flex items-center tail-topo-login-nav ev-topo-login-nav">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-5 h-5 tail-topo-login-svg ev-topo-login-svg js-tail-topo-inverter"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <ul className="flex items-center gap-2 divide-x divide-gray-200 divide-solid tail-topo-login-lista ev-topo-login-lista tail-topo-login">
                    <li className="tail-topo-login-item ev-topo-login-item ml-1 tail-topo-login-dados-entrar-item ev-topo-login-dados-entrar-item">
                      <a
                        href="/login?redir=%2F"
                        rel="nofollow"
                        className="inline-block p-0 hover:underline tail-topo-login-link ev-topo-login-link  tail-topo-login-dados-entrar-link ev-topo-login-dados-entrar-link tail-topo-login-dados-link"
                        data-nome="Entrar"
                      >
                        <div className="tail-topo-login-texto ev-topo-login-link-texto  tail-topo-login-dados-entrar-texto ev-topo-login-dados-entrar-texto js-tail-topo-inverter">
                          Entrar
                        </div>
                      </a>
                    </li>
                    <li className="tail-topo-login-item ev-topo-login-item pl-2 ">
                      <a
                        href="/cadastro"
                        rel="nofollow"
                        className="inline-block p-0 hover:underline tail-topo-login-link ev-topo-login-link tail-topo-login-dados-link"
                        data-nome="Criar conta"
                      >
                        <div className="tail-topo-login-texto ev-topo-login-link-texto js-tail-topo-inverter">
                          Criar conta
                        </div>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div
              data-nome="login-toggle-1"
              className="relative z-20 overflow-visible w-min md:hidden tail-topo-login ev-topo-login"
            >
              <div className="flex justify-end tail-topo-login-interno ev-topo-login-interno">
                <nav className="flex tail-topo-login-nav ev-topo-login-nav">
                  <label
                    htmlFor="tail-topo-login-toggle"
                    className="js-tail-topo-inverter"
                    onclick="topoToggleTodosFechar(this)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer tail-topo-login-svg ev-topo-login-svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </label>
                  <input
                    className="hidden tail-topo-login-toggle js-tail-topo-toggle-todos"
                    type="checkbox"
                    name="tail-topo-login-toggle"
                    id="tail-topo-login-toggle"
                  />
                  <ul className="absolute right-0 flex flex-col items-center invisible bg-white border border-gray-100 border-solid divide-y divide-gray-200 rounded-md shadow-md opacity-0 top-8 divide-solid tail-topo-login-lista ev-topo-login-lista tail-topo-login">
                    <li className="w-full whitespace-nowrap tail-topo-login-item ev-topo-login-item  tail-topo-login-dados-entrar-item ev-topo-login-dados-entrar-item">
                      <a
                        href="/login?redir=%2F"
                        rel="nofollow"
                        className="inline-block py-4 pl-4 pr-12 tail-topo-login-link ev-topo-login-link  tail-topo-login-dados-entrar-link ev-topo-login-dados-entrar-link"
                      >
                        <div className="tail-topo-login-texto ev-topo-login-link-texto  tail-topo-login-dados-entrar-texto ev-topo-login-dados-entrar-texto">
                          Entrar
                        </div>
                      </a>
                    </li>
                    <li className="w-full whitespace-nowrap tail-topo-login-item ev-topo-login-item ">
                      <a
                        href="/cadastro"
                        rel="nofollow"
                        className="inline-block py-4 pl-4 pr-12 tail-topo-login-link ev-topo-login-link"
                      >
                        <div className="tail-topo-login-texto ev-topo-login-link-texto">
                          Criar conta
                        </div>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div
              data-nome="carrinho-1"
              className="overflow-visible ev-topo-carrinho ev-topo-carrinho-1 tail-topo-sacola"
            >
              <div
                className="ev-topo-carrinho-interno ev-topo-carrinho-1-interno overflow-visible"
                data-seta-posicao="baixo"
              >
                <div className="overflow-visible">
                  <label
                    htmlFor="tail-topo-sacola-toggle"
                    className="relative inline-block overflow-visible"
                    onclick="topoToggleTodosFechar(this)"
                  >
                    <span className="inline-block js-tail-topo-inverter">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer ev-topo-carrinho-interno ev-topo-carrinho-1-dados-sacola-svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </span>
                    <div className="absolute flex items-center justify-center cursor-pointer rounded-full -right-1 h-4 w-4 -top-1 bg-red-500 text-white font-bold leading-none tail-topo-sacola-numero js-tail-topo-carrinho-numero">
                      4
                    </div>
                  </label>
                </div>
                <input
                  type="checkbox"
                  name="tail-topo-sacola-toggle"
                  id="tail-topo-sacola-toggle"
                  className="hidden tail-topo-sacola-toggle js-tail-topo-toggle-todos"
                />
                <nav className="fixed top-0 right-0 invisible w-64 h-screen text-sm bg-white shadow-md rounded-l-md md:w-96 ev-topo-carrinho-lista ev-topo-carrinho-1-dados-lista opacity-0 sm:bg-opacity-60 sm:backdrop-filter sm:backdrop-blur-md md:bg-opacity-60 md:backdrop-filter md:backdrop-blur-md lg:bg-opacity-60 lg:backdrop-filter lg:backdrop-blur-md xl:bg-opacity-60 xl:backdrop-filter xl:backdrop-blur-md tail-topo-sacola-lista">
                  <div className="flex flex-col content-start h-full tail-topo-carrinho-interno">
                    <div className="flex items-center justify-between p-5">
                      <h3 className="text-sm md:text-base">Meu Carrinho</h3>
                      <label htmlFor="tail-topo-sacola-toggle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                          className="w-8 h-8 cursor-pointer md:w-10 md:h-10"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </label>
                    </div>
                    <div className="p-5 text-sm font-bold text-center">
                      <a
                        href="/carrinho"
                        className="inline-block w-full py-4 text-center border border-gray-300 border-solid rounded-md tail-topo-carrinho-produto-ir ev-topo-carrinho-produto-ir ev-topo-carrinho-1-produto-ir"
                      >
                        Ir para o carrinho{" "}
                      </a>
                    </div>
                    <div className="p-5 text-sm font-bold text-center">
                      <div className="flex items-center justify-center gap-1 text-base font-bold js-tail-topo-carrinho-subtotal">
                        <span className="font-normal">Subtotal:</span>
                        <span className="js-tail-topo-carrinho-subtotal-valor">
                          R$ 989,60
                        </span>
                      </div>
                    </div>
                    <ul className="p-5 overflow-y-auto border-t border-b border-gray-200 border-solid divide-y divide-gray-200 divide-solid js-tail-topo-carrinho-produto-lista">
                      <li className>
                        <div className>
                          <div className="flex py-5 gap-x-4">
                            <div className="flex-shrink-0">
                              <img
                                src="https://thumb.braavo.me/vivadress/200/1290490666.webp"
                                style={{ aspectRatio: "3/4" }}
                                className="h-20 rounded-md object-cover"
                              />
                            </div>
                            <div className="flex flex-col gap-y-2">
                              <div className="font-bold">
                                Vestido Curto Giulia Marsala
                              </div>
                              <div className="text-xs text-gray-500">
                                Tamanho: 38
                              </div>
                              <div>
                                <span className="font-bold">
                                  R$ <span>359,80</span>
                                </span>
                                <div>
                                  Quantidade: <span>2</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className>
                        <div className>
                          <div className="flex py-5 gap-x-4">
                            <div className="flex-shrink-0">
                              <img
                                src="https://thumb.braavo.me/vivadress/200/1596482158.webp"
                                style={{ aspectRatio: "3/4" }}
                                className="h-20 rounded-md object-cover"
                              />
                            </div>
                            <div className="flex flex-col gap-y-2">
                              <div className="font-bold">
                                Vestido Longo Acetinado Verde Bandeira
                              </div>
                              <div className="text-xs text-gray-500">
                                Tamanho: 38
                              </div>
                              <div>
                                <span className="font-bold">
                                  R$ <span>279,90</span>
                                </span>
                                <div>
                                  Quantidade: <span>1</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className>
                        <div className>
                          <div className="flex py-5 gap-x-4">
                            <div className="flex-shrink-0">
                              <img
                                src="https://thumb.braavo.me/vivadress/200/1483771895.webp"
                                style={{ aspectRatio: "3/4" }}
                                className="h-20 rounded-md object-cover"
                              />
                            </div>
                            <div className="flex flex-col gap-y-2">
                              <div className="font-bold">
                                Vestido Longo Tule Glitter Busto Plissado Fucsia
                              </div>
                              <div className="text-xs text-gray-500">
                                Tamanho: 40
                              </div>
                              <div>
                                <span className="font-bold">
                                  R$ <span>349,90</span>
                                </span>
                                <div>
                                  Quantidade: <span>1</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className=" hidden js-tail-topo-carrinho-produto-template-item">
                        <div className>
                          <div className="flex py-5 gap-x-4">
                            <div className="flex-shrink-0">
                              <img
                                src
                                style={{ aspectRatio: "3/4" }}
                                className="h-20 rounded-md object-cover js-tail-topo-carrinho-produto-template-foto"
                              />
                            </div>
                            <div className="flex flex-col gap-y-2">
                              <div className="font-bold js-tail-topo-carrinho-produto-template-nome" />
                              <div className="text-xs text-gray-500 js-tail-topo-carrinho-produto-template-variacoes" />
                              <div>
                                <span className="font-bold">
                                  R${" "}
                                  <span className="js-tail-topo-carrinho-produto-template-preco" />
                                </span>
                                <div>
                                  Quantidade:{" "}
                                  <span className="js-tail-topo-carrinho-produto-template-quantidade" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-nome="interno_2"
        className="flex justify-between overflow-visible transition duration-300 ev-topo-interno-2 js-tail-topo-interno-2"
        data-seta-posicao="baixo"
      >
        <div className="w-full overflow-visible">
          <div className="overflow-visible">
            <div
              data-nome="categorias-1"
              className="hidden overflow-visible md:block"
            >
              <div className="overflow-visible ev-topo-categorias-interno ev-topo-categorias-1-interno">
                <nav className="overflow-visible ev-topo-categorias-interno ev-topo-categorias-1-dados-interno0">
                  <ul
                    className="flex flex-wrap justify-center px-6 overflow-visible uppercase border-b border-gray-200 border-solid gap-x-3 tail-topo-categorias-lista-0 ev-topo-categorias-lista ev-topo-categorias-1-dados-lista0"
                    data-seta-posicao="baixo"
                  >
                    <li
                      className="h-full overflow-visible text-left px-2.5 md:p-0 md:text-center tail-topo-categorias tail-topo-categorias-item-0 ev-topo-categorias-item ev-topo-categorias-1-dados-item0"
                      data-seta-posicao="baixo"
                      data-nome="New In"
                    >
                      <div>
                        <a
                          style={{}}
                          href="/cat/5/new-in"
                          rel="next"
                          className="inline-block p-3 tail-topo-categorias-link-0 ev-topo-categorias-link ev-topo-categorias-1-dados-link0 tail-topo-categorias-1-dados-link-0 js-tail-topo-inverter"
                          data-nome="New In"
                          data-seta-posicao="baixo"
                        >
                          <div className=" tail-topo-categorias-1-dados-link-0-texto">
                            New In
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="h-full overflow-visible text-left px-2.5 md:p-0 md:text-center tail-topo-categorias tail-topo-categorias-item-0 ev-topo-categorias-item ev-topo-categorias-1-dados-item0"
                      data-seta-posicao="baixo"
                      data-nome="Best Sellers"
                    >
                      <div>
                        <a
                          style={{}}
                          href="/cat/4/best-sellers"
                          rel="next"
                          className="inline-block p-3 tail-topo-categorias-link-0 ev-topo-categorias-link ev-topo-categorias-1-dados-link0 tail-topo-categorias-1-dados-link-0 js-tail-topo-inverter"
                          data-nome="Best Sellers"
                          data-seta-posicao="baixo"
                        >
                          <div className=" tail-topo-categorias-1-dados-link-0-texto">
                            Best Sellers
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="h-full overflow-visible text-left px-2.5 md:p-0 md:text-center tail-topo-categorias tail-topo-categorias-item-0 ev-topo-categorias-item ev-topo-categorias-1-dados-item0"
                      data-seta-posicao="baixo"
                      data-nome="ATÉ 75% OFF"
                    >
                      <div>
                        <a
                          style={{
                            color: "black !important",
                            fontWeight: "bold !important",
                          }}
                          href="/cat/70/ate-75-off"
                          rel="next"
                          className="inline-block p-3 tail-topo-categorias-link-0 ev-topo-categorias-link ev-topo-categorias-1-dados-link0 tail-topo-inverter-reset tail-topo-categorias-1-dados-link-0 js-tail-topo-inverter"
                          data-nome="ATÉ 75% OFF"
                          data-seta-posicao="baixo"
                        >
                          <div className=" tail-topo-categorias-1-dados-link-0-texto">
                            ATÉ 75% OFF
                          </div>
                        </a>
                      </div>
                      <div
                        className="z-10 flex flex-wrap overflow-auto text-left bg-white gap-x-3 md:rounded-b-sm md:invisible md:opacity-0 md:shadow-lg md:absolute tail-topo-subcategorias-nivel-1 ev-topo-categorias-interno ev-topo-categorias-1-dados-interno1"
                        data-nome="ATÉ 75% OFF"
                      >
                        <ul className="gap-2 pb-4 pl-3 overflow-auto text-black normal-case divide-y divide-gray-200 md:p-0 md:gap-0 md:w-56 md:divide-solid lg:w-64 tail-topo-categorias-lista-1 ev-topo-categorias-lista ev-topo-categorias-1-dados-lista1 tail-topo-categorias-lista-1">
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/cat/73/ate-r-359-90"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="ATÉ R$ 359,90"
                            >
                              <div className>ATÉ R$ 359,90</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/cat/72/ate-r-199-90"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="ATÉ R$ 199,90"
                            >
                              <div className>ATÉ R$ 199,90</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/cat/71/ate-r-99-90"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="ATÉ R$ 99,90"
                            >
                              <div className>ATÉ R$ 99,90</div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      className="h-full overflow-visible text-left px-2.5 md:p-0 md:text-center tail-topo-categorias tail-topo-categorias-item-0 ev-topo-categorias-item ev-topo-categorias-1-dados-item0"
                      data-seta-posicao="baixo"
                      data-nome="Todos Vestidos Longos"
                    >
                      <div>
                        <a
                          style={{}}
                          href="/cat/2/todos-vestidos-longos"
                          rel="next"
                          className="inline-block p-3 tail-topo-categorias-link-0 ev-topo-categorias-link ev-topo-categorias-1-dados-link0 tail-topo-categorias-1-dados-link-0 js-tail-topo-inverter"
                          data-nome="Todos Vestidos Longos"
                          data-seta-posicao="baixo"
                        >
                          <div className=" tail-topo-categorias-1-dados-link-0-texto">
                            Todos Vestidos Longos
                          </div>
                        </a>
                      </div>
                      <div
                        className="z-10 flex flex-wrap overflow-auto text-left bg-white gap-x-3 md:rounded-b-sm md:invisible md:opacity-0 md:shadow-lg md:absolute tail-topo-subcategorias-nivel-1 ev-topo-categorias-interno ev-topo-categorias-1-dados-interno1"
                        data-nome="Todos Vestidos Longos"
                      >
                        <ul className="gap-2 pb-4 pl-3 overflow-auto text-black normal-case divide-y divide-gray-200 md:p-0 md:gap-0 md:w-56 md:divide-solid lg:w-64 tail-topo-categorias-lista-1 ev-topo-categorias-lista ev-topo-categorias-1-dados-lista1 tail-topo-categorias-lista-1">
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/c/vestidos-tons-lilas-fucsia"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Tons Lilás/Fúcsia"
                            >
                              <div className>Tons Lilás/Fúcsia</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/c/vestidos-tons-verdes"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Tons Verdes"
                            >
                              <div className>Tons Verdes</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/c/vestidos-tons-terrosos"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Tons Terrosos"
                            >
                              <div className>Tons Terrosos</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/c/vestidos-tons-azuis"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Tons Azuis/Serenity"
                            >
                              <div className>Tons Azuis/Serenity</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/cat/63/tons-marsala-vermelho"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Tons Marsala/Vermelho"
                            >
                              <div className>Tons Marsala/Vermelho</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/cat/58/tons-rose-pink"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Tons Rose/Pink"
                            >
                              <div className>Tons Rose/Pink</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/cat/64/tons-amarelo"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Tons Amarelo"
                            >
                              <div className>Tons Amarelo</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/cat/84/preto"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Preto"
                            >
                              <div className>Preto</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/cat/39/vestidos-alfaiataria"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Vestidos Alfaiataria"
                            >
                              <div className>Vestidos Alfaiataria</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/c/vestidos-lisos"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Vestidos Lisos"
                            >
                              <div className>Vestidos Lisos</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/cat/36/vestidos-acetinados"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Vestidos Acetinados"
                            >
                              <div className>Vestidos Acetinados</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/c/vestidos-tule"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Vestidos Tule"
                            >
                              <div className>Vestidos Tule</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/cat/38/vestidos-body"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Vestidos Body"
                            >
                              <div className>Vestidos Body</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/cat/56/vestidos-plissados"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Vestidos Plissados"
                            >
                              <div className>Vestidos Plissados</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/cat/57/vestidos-paete"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Vestidos Paetê"
                            >
                              <div className>Vestidos Paetê</div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      className="h-full overflow-visible text-left px-2.5 md:p-0 md:text-center tail-topo-categorias tail-topo-categorias-item-0 ev-topo-categorias-item ev-topo-categorias-1-dados-item0"
                      data-seta-posicao="baixo"
                      data-nome="Vestidos Curtos"
                    >
                      <div>
                        <a
                          style={{}}
                          href="/cat/1/vestidos-curtos"
                          rel="next"
                          className="inline-block p-3 tail-topo-categorias-link-0 ev-topo-categorias-link ev-topo-categorias-1-dados-link0 tail-topo-categorias-1-dados-link-0 js-tail-topo-inverter"
                          data-nome="Vestidos Curtos"
                          data-seta-posicao="baixo"
                        >
                          <div className=" tail-topo-categorias-1-dados-link-0-texto">
                            Vestidos Curtos
                          </div>
                        </a>
                      </div>
                      <div
                        className="z-10 flex flex-wrap overflow-auto text-left bg-white gap-x-3 md:rounded-b-sm md:invisible md:opacity-0 md:shadow-lg md:absolute tail-topo-subcategorias-nivel-1 ev-topo-categorias-interno ev-topo-categorias-1-dados-interno1"
                        data-nome="Vestidos Curtos"
                      >
                        <ul className="gap-2 pb-4 pl-3 overflow-auto text-black normal-case divide-y divide-gray-200 md:p-0 md:gap-0 md:w-56 md:divide-solid lg:w-64 tail-topo-categorias-lista-1 ev-topo-categorias-lista ev-topo-categorias-1-dados-lista1 tail-topo-categorias-lista-1">
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/c/vestido-paete-curto"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Vestido Paete Curto"
                            >
                              <div className>Vestido Paete Curto</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/c/vestido-lurex-curto"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Vestido Lurex Curto"
                            >
                              <div className>Vestido Lurex Curto</div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      className="h-full overflow-visible text-left px-2.5 md:p-0 md:text-center tail-topo-categorias tail-topo-categorias-item-0 ev-topo-categorias-item ev-topo-categorias-1-dados-item0"
                      data-seta-posicao="baixo"
                      data-nome="Mil Formas"
                    >
                      <div>
                        <a
                          style={{}}
                          href="/c/mil-formas"
                          rel="next"
                          className="inline-block p-3 tail-topo-categorias-link-0 ev-topo-categorias-link ev-topo-categorias-1-dados-link0 tail-topo-categorias-1-dados-link-0 js-tail-topo-inverter"
                          data-nome="Mil Formas"
                          data-seta-posicao="baixo"
                        >
                          <div className=" tail-topo-categorias-1-dados-link-0-texto">
                            Mil Formas
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="h-full overflow-visible text-left px-2.5 md:p-0 md:text-center tail-topo-categorias tail-topo-categorias-item-0 ev-topo-categorias-item ev-topo-categorias-1-dados-item0"
                      data-seta-posicao="baixo"
                      data-nome="Brilhe"
                    >
                      <div>
                        <a
                          style={{}}
                          href="/cat/16/brilhe"
                          rel="next"
                          className="inline-block p-3 tail-topo-categorias-link-0 ev-topo-categorias-link ev-topo-categorias-1-dados-link0 tail-topo-categorias-1-dados-link-0 js-tail-topo-inverter"
                          data-nome="Brilhe"
                          data-seta-posicao="baixo"
                        >
                          <div className=" tail-topo-categorias-1-dados-link-0-texto">
                            Brilhe
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="h-full overflow-visible text-left px-2.5 md:p-0 md:text-center tail-topo-categorias tail-topo-categorias-item-0 ev-topo-categorias-item ev-topo-categorias-1-dados-item0"
                      data-seta-posicao="baixo"
                      data-nome="Ocasiões"
                    >
                      <div>
                        <a
                          style={{}}
                          href="/cat/19/ocasioes"
                          rel="next"
                          className="inline-block p-3 tail-topo-categorias-link-0 ev-topo-categorias-link ev-topo-categorias-1-dados-link0 tail-topo-categorias-1-dados-link-0 js-tail-topo-inverter"
                          data-nome="Ocasiões"
                          data-seta-posicao="baixo"
                        >
                          <div className=" tail-topo-categorias-1-dados-link-0-texto">
                            Ocasiões
                          </div>
                        </a>
                      </div>
                      <div
                        className="z-10 flex flex-wrap overflow-auto text-left bg-white gap-x-3 md:rounded-b-sm md:invisible md:opacity-0 md:shadow-lg md:absolute tail-topo-subcategorias-nivel-1 ev-topo-categorias-interno ev-topo-categorias-1-dados-interno1"
                        data-nome="Ocasiões"
                      >
                        <ul className="gap-2 pb-4 pl-3 overflow-auto text-black normal-case divide-y divide-gray-200 md:p-0 md:gap-0 md:w-56 md:divide-solid lg:w-64 tail-topo-categorias-lista-1 ev-topo-categorias-lista ev-topo-categorias-1-dados-lista1 tail-topo-categorias-lista-1">
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/cat/54/estolas-e-casacos"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Estolas e Casacos"
                            >
                              <div className>Estolas e Casacos</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/cat/7/formandas"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Formandas"
                            >
                              <div className>Formandas</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/cat/28/gravidas"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Grávidas"
                            >
                              <div className>Grávidas</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/cat/20/madrinhas"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Madrinhas"
                            >
                              <div className>Madrinhas</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/cat/21/debutante"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Debutante"
                            >
                              <div className>Debutante</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/cat/30/veludo"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Veludo"
                            >
                              <div className>Veludo</div>
                            </a>
                          </li>
                          <li className="flex flex-col items-center tail-topo-categorias-item-1 ev-topo-categorias-item ev-topo-categorias-1-dados-item1 tail-topo-categorias-item-1">
                            <a
                              href="/cat/22/brancos"
                              rel="next"
                              className="w-full p-3 tail-topo-categorias-link-1 ev-topo-categorias-link ev-topo-categorias-1-dados-link1 tail-topo-categorias-1-dados-link-1"
                              data-seta-posicao="esquerda"
                              data-nome="Brancos"
                            >
                              <div className>Brancos</div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      className="h-full overflow-visible text-left px-2.5 md:p-0 md:text-center tail-topo-categorias tail-topo-categorias-item-0 ev-topo-categorias-item ev-topo-categorias-1-dados-item0"
                      data-seta-posicao="baixo"
                      data-nome="Até 199,90"
                    >
                      <div>
                        <a
                          style={{
                            color: "#ff0000 !important",
                            fontWeight: "bold !important",
                          }}
                          href="/cat/29/ate-199-90"
                          rel="next"
                          className="inline-block p-3 tail-topo-categorias-link-0 ev-topo-categorias-link ev-topo-categorias-1-dados-link0 tail-topo-inverter-reset tail-topo-categorias-1-dados-link-0 js-tail-topo-inverter"
                          data-nome="Até 199,90"
                          data-seta-posicao="baixo"
                        >
                          <div className=" tail-topo-categorias-1-dados-link-0-texto">
                            Até 199,90
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="h-full overflow-visible text-left px-2.5 md:p-0 md:text-center tail-topo-categorias tail-topo-categorias-item-0 ev-topo-categorias-item ev-topo-categorias-1-dados-item0"
                      data-seta-posicao="baixo"
                      data-nome="Ver Todos"
                    >
                      <div>
                        <a
                          style={{}}
                          href="/cat/17/ver-todos"
                          rel="next"
                          className="inline-block p-3 tail-topo-categorias-link-0 ev-topo-categorias-link ev-topo-categorias-1-dados-link0 tail-topo-categorias-1-dados-link-0 js-tail-topo-inverter"
                          data-nome="Ver Todos"
                          data-seta-posicao="baixo"
                        >
                          <div className=" tail-topo-categorias-1-dados-link-0-texto">
                            Ver Todos
                          </div>
                        </a>
                      </div>
                    </li>
                    <li
                      className="h-full overflow-visible text-left px-2.5 md:p-0 md:text-center tail-topo-categorias tail-topo-categorias-item-0 ev-topo-categorias-item ev-topo-categorias-1-dados-item0"
                      data-seta-posicao="baixo"
                      data-nome="Blog"
                    >
                      <div>
                        <a
                          style={{}}
                          href="/cat/55/blog"
                          rel="next"
                          className="inline-block p-3 tail-topo-categorias-link-0 ev-topo-categorias-link ev-topo-categorias-1-dados-link0 tail-topo-categorias-1-dados-link-0 js-tail-topo-inverter"
                          data-nome="Blog"
                          data-seta-posicao="baixo"
                        >
                          <div className=" tail-topo-categorias-1-dados-link-0-texto">
                            Blog
                          </div>
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div
              data-nome="busca-2"
              className="flex-grow md:hidden tail-topo-busca ev-topo-busca js-tail-topo-inverter"
            >
              <div className="ev-topo-busca-interno" data-seta-posicao="baixo">
                <form
                  action="/busca"
                  autoComplete="off"
                  method="get"
                  noValidate="novalidate"
                  className="ev-topo-busca-form js-busca"
                >
                  <div className="tail-topo-busca-form-interno-1 ev-topo-busca-form-interno-1">
                    <div className="flex justify-between border-t border-b border-gray-200 border-solid divide-x divide-gray-200 divide-solid tail-topo-busca-form-interno-2 ev-topo-busca-form-interno-2">
                      <input
                        type="text"
                        inputMode="search"
                        name="b"
                        aria-label="Buscar em Viva Dress"
                        autoCorrect="off"
                        autoCapitalize="none"
                        autoComplete="off"
                        placeholder="Buscar produto"
                        className="w-full px-4 leading-normal placeholder-gray-500 rounded-none outline-none py-3.5 tail-topo-busca-campo ev-topo-busca-campo js-busca-campo"
                        id="topo-busca-campo"
                      />
                      <button
                        value
                        aria-label="Enviar busca"
                        className="px-4 text-gray-600 bg-white cursor-pointer tail-topo-busca-btn-ok ev-topo-busca-btn-ok js-busca-botao"
                        data-seta-posicao="baixo"
                      >
                        <label htmlFor="topo-busca-campo">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className="w-6 h-6 cursor-pointer tail-topo-busca-btn-ok-svg ev-topo-busca-btn-ok-svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                          </svg>
                          <span className="sr-only">
                            Selecionar barra de pesquisa
                          </span>
                        </label>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style
        id="css-tail-topo-csspuro"
        type="text/css"
        data-nome="csspuro"
        dangerouslySetInnerHTML={{ __html: "" }}
      />
      <style data-nome="topo_estilo" dangerouslySetInnerHTML={{ __html: "" }} />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n            .tail-topo-menu-1-item:first-child{padding-left:0 !important;}\n            .tail-topo-categorias-toggle{inset:0 auto 0 -100%; position:fixed; transition:all 700ms cubic-bezier(0.19, 1, 0.22, 1); z-index:400;}\n            .tail-topo-hamburger-abrir:checked + .tail-topo-categorias-toggle{left:0; right:0;}\n            .tail-topo-categorias-toggle-direita{inset:0 -100% 0 auto;}\n            .tail-topo-hamburger-abrir:checked + .tail-topo-categorias-toggle-direita{right:0;}\n            .tail-topo-categorias-toggle-seta{transition:transform 200ms ease-in-out;}\n            .tail-topo-categorias-toggle-details[open] .tail-topo-categorias-toggle-seta{transform:rotate(-180deg);}\n            .tail-topo-mobile-summary::-webkit-details-marker{display:none;}\n            .tail-topo-categorias-toggle-foto{border-radius:.5rem;}\n            .tail-topo-login{transition:opacity 200ms, visibility 200ms;}\n            .tail-topo-login-toggle:checked + .tail-topo-login{opacity:1; visibility:visible;}\n            .tail-topo-sacola-lista{transition:opacity 200ms, visibility 200ms; z-index:399;}\n            .tail-topo-sacola-toggle:checked + .tail-topo-sacola-lista{opacity:1; visibility:visible;}\n            .tail-topo-busca{transition:opacity 200ms, visibility 200ms;}\n            .tail-topo-busca-toggle:checked + .tail-topo-busca{opacity:1; visibility:visible;}\n            .tail-topo-sacola-numero{font-family:'Arial', sans-serif; font-size:10px;}\n            .tail-topo-carrinho-interno{grid-template-rows:max-content 1fr max-content;}\n            .tail-topo-subcategorias-separador::before{background-color:#d3d3d3; content:''; inset:0 auto 0 0; position:absolute; width:1px;}\n            /* remove layout shift do font-weight nas categorias */\n            .tail-topo-categorias-1-dados-link-0::after{content:attr(data-nome); display:block; height:0; overflow:hidden; pointer-events:none; user-select:none; visibility:hidden;}\n            @media screen and (min-width:768px) {\n            .tail-topo-subcategorias-nivel-1{max-height:70vh; transition:opacity 300ms, visibility 300ms;}\n            .tail-topo-categorias:hover .tail-topo-subcategorias-nivel-1{opacity:1; visibility:visible;}\n            .tail-topo-categorias:last-of-type{position:relative;}\n            .tail-topo-categorias:last-of-type .tail-topo-subcategorias-nivel-1{right:0;}\n            .tail-topo-subcategorias-colunas{border-width:0 !important; column-gap:4.5rem; margin-inline:8px; row-gap:0.5rem; width:max-content !important;}\n            .tail-topo-subcategorias-colunas > li {border-width:0 !important;}\n            .tail-topo-categorias-container-foto{margin-inline:12px;}\n            .tail-topo-subcategorias-colunas + .tail-topo-categorias-container-foto{margin-inline:20px;}\n            }\n            @media screen and (min-width:1024px) {\n            .tail-topo-categorias-toggle-fechar{left:21rem !important;}\n            }\n            /* estilizacao em templates separados */\n          ",
        }}
      />
    </section>
  )

};

export default HeaderMenuMobile;