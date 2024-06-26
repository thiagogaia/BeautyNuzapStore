import { useContext } from "react";
import { formatAndFollowUrl } from "../utils/links";
import { StoreContext } from "../../contexts/Store";

const MainPurchaseRequests = () => {
  const { storeUri } = useContext(StoreContext);

  return (
    <main id="principal" className="principal tail-principal ev-principal">
      <div id="principal-limite" className="principal-limite">
        <article id="conteudo" className="conteudo">
          <div className="mx-auto mt-5 lg:w-9/12">
            <h1 className="text-xl font-medium tt">
              <span className="tt-texto">Pedidos</span>
            </h1>
            <span
              onClick={() => formatAndFollowUrl(`${storeUri}/conta`)}
              className="cursor-pointer flex items-center inline-block gap-1 px-4 py-2 bg-gray-100 rounded-lg w-max hover:bg-gray-200 tail-btn-voltar js-appec-escondido"
            >
              <svg
                xmlns="//www.w3.org/2000/svg"
                className="h-3 lg:h-4"
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
              <span className="font-semibold">Voltar</span>
            </span>

            <div className="mt-5">
              <div className="grid gap-10 js-paginacao-lista">
                <div className="border border-gray-200 border-solid rounded-lg js-paginacao-item">
                  <div className="py-4 bg-gray-200">
                    <div className="grid gap-4 lg:grid-cols-4">
                      <div className="grid text-center">
                        <div className="font-bold">Pedido</div>
                        <div className="text-base">28311</div>
                      </div>
                      <div className="grid text-center">
                        <div className="font-bold">Pagamento</div>
                        <div>Boleto</div>
                      </div>
                      <div className="grid text-center">
                        <div className="font-bold">Total</div>
                        <div>R$ 2.618,87</div>
                      </div>
                      <div className="grid text-center">
                        <div className="font-bold">Comprado em</div>
                        <div>25/04/24 16:37</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-t border-gray-200 border-solid">
                    <div className="grid grid-cols-2">
                      <div className="relative flex flex-row justify-center gap-1">
                        <div
                          className="absolute z-0 top-0 mt-2.5 w-full flex items-center"
                          aria-hidden="true"
                        >
                          <div className="h-0.5 w-full bg-gray-500" />
                        </div>
                        <div className="z-10 flex flex-col items-center justify-start gap-1">
                          <div className="flex items-center justify-center flex-none w-5 h-5 text-center border-2 border-solid rounded-full align-center bg-gray-500 border-gray-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-4 h-4 text-white"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          </div>
                          <div className="w-full px-1 text-xs text-center text-black text-gray-500">
                            Pedido realizado
                          </div>
                        </div>
                      </div>
                      <div className="relative flex flex-row justify-center gap-1">
                        <div
                          className="absolute z-0 top-0 mt-2.5 w-full flex items-center"
                          aria-hidden="true"
                        >
                          <div className="h-0.5 w-full bg-gray-500" />
                        </div>
                        <div className="z-10 flex flex-col items-center justify-start gap-1">
                          <div className="flex items-center justify-center flex-none w-5 h-5 text-center border-2 border-solid rounded-full align-center bg-white border-gray-500">
                            <span className="block w-2 h-2 bg-gray-500 rounded-full" />{" "}
                          </div>
                          <div className="w-full px-1 text-xs text-center text-black font-bold text-gray-500">
                            Cancelado{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-2 p-4 mt-2 border-t border-gray-200 border-solid"></div>

                  <div className="flex flex-col gap-3 p-4 lg:flex-row">
                    <div className="grid flex-auto gap-4">
                      <div className="flex gap-2 flex-rows">
                        <div className="flex-none w-24">
                          <img
                            src="/no-image.jpg"
                            alt="Vestido Longo Degradê Yara Dourado"
                            className="inline-block object-contain align-top"
                          />
                        </div>
                        <div className="flex flex-col flex-auto gap-2">
                          <div className="">
                            <span className="font-bold">1x </span>
                            <a
                              href="/prod/1326/vestido-longo-degrade-yara-dourado"
                              target="_blank"
                              className="text-black underline"
                            >
                              Vestido Longo Degradê Yara Dourado
                            </a>
                            <div className="text-xs">Código: 1326 - Sku: 5660</div>
                          </div>
                          <div className="text-green-600">R$ 299,90</div>
                          <div className="text-gray-500">
                            <div className="capitalize">Tamanho: 40</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 lg:flex-none lg:w-52">
                      <a
                        // href="/conta/pedidos/28311"
                        className="flex-none block botao botao-primario"
                      >
                        Detalhes do pedido
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default MainPurchaseRequests;
