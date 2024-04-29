const MainPurchaseRequests = () => {
  return (
    <main id="principal" className="principal tail-principal ev-principal">
      <div id="principal-limite" className="principal-limite">
        <article id="conteudo" className="conteudo">
          <div className="mx-auto mt-5 lg:w-9/12">
            <h1 className="text-xl font-medium tt">
              <span className="tt-texto">Pedidos</span>
            </h1>
            <a href="/conta" className="inline-block mt-1 text-black hover:underline">
              ← Voltar
            </a>

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
                            src="https://thumb.braavo.me/vivadress/400/306664086.webp"
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
                      <div className="flex gap-2 flex-rows">
                        <div className="flex-none w-24">
                          <img
                            src="https://thumb.braavo.me/vivadress/400/823111629.webp"
                            alt="Estola Palha"
                            className="inline-block object-contain align-top"
                          />
                        </div>
                        <div className="flex flex-col flex-auto gap-2">
                          <div className="">
                            <span className="font-bold">3x </span>
                            <a
                              href="/prod/2547/estola-palha"
                              target="_blank"
                              className="text-black underline"
                            >
                              Estola Palha
                            </a>
                            <div className="text-xs">Código: 2547 - Sku: 16346</div>
                          </div>
                          <div className="text-green-600">R$ 447,00</div>
                          <div className="text-gray-500">
                            <div className="capitalize">Tamanho: Único</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-rows">
                        <div className="flex-none w-24">
                          <img
                            src="https://thumb.braavo.me/vivadress/400/2109048451.webp"
                            alt="Vestido Longo Acetinado Roxo"
                            className="inline-block object-contain align-top"
                          />
                        </div>
                        <div className="flex flex-col flex-auto gap-2">
                          <div className="">
                            <span className="font-bold">1x </span>
                            <a
                              href="/prod/2591/vestido-longo-acetinado-roxo"
                              target="_blank"
                              className="text-black underline"
                            >
                              Vestido Longo Acetinado Roxo
                            </a>
                            <div className="text-xs">Código: 2591 - Sku: 16482</div>
                          </div>
                          <div className="text-green-600">R$ 279,90</div>
                          <div className="text-gray-500">
                            <div className="capitalize">Tamanho: 42</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-rows">
                        <div className="flex-none w-24">
                          <img
                            src="https://thumb.braavo.me/vivadress/400/2109048451.webp"
                            alt="Vestido Longo Acetinado Roxo"
                            className="inline-block object-contain align-top"
                          />
                        </div>
                        <div className="flex flex-col flex-auto gap-2">
                          <div className="">
                            <span className="font-bold">1x </span>
                            <a
                              href="/prod/2591/vestido-longo-acetinado-roxo"
                              target="_blank"
                              className="text-black underline"
                            >
                              Vestido Longo Acetinado Roxo
                            </a>
                            <div className="text-xs">Código: 2591 - Sku: 16483</div>
                          </div>
                          <div className="text-green-600">R$ 279,90</div>
                          <div className="text-gray-500">
                            <div className="capitalize">Tamanho: 44</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-rows">
                        <div className="flex-none w-24">
                          <img
                            src="https://thumb.braavo.me/vivadress/400/2109048451.webp"
                            alt="Vestido Longo Acetinado Roxo"
                            className="inline-block object-contain align-top"
                          />
                        </div>
                        <div className="flex flex-col flex-auto gap-2">
                          <div className="">
                            <span className="font-bold">1x </span>
                            <a
                              href="/prod/2591/vestido-longo-acetinado-roxo"
                              target="_blank"
                              className="text-black underline"
                            >
                              Vestido Longo Acetinado Roxo
                            </a>
                            <div className="text-xs">Código: 2591 - Sku: 16481</div>
                          </div>
                          <div className="text-green-600">R$ 279,90</div>
                          <div className="text-gray-500">
                            <div className="capitalize">Tamanho: 40</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-rows">
                        <div className="flex-none w-24">
                          <img
                            src="https://thumb.braavo.me/vivadress/400/1698729372.webp"
                            alt="Vestido Longo Lauren Marinho"
                            className="inline-block object-contain align-top"
                          />
                        </div>
                        <div className="flex flex-col flex-auto gap-2">
                          <div className="">
                            <span className="font-bold">1x </span>
                            <a
                              href="/prod/1937/vestido-longo-lauren-marinho"
                              target="_blank"
                              className="text-black underline"
                            >
                              Vestido Longo Lauren Marinho
                            </a>
                            <div className="text-xs">Código: 1937 - Sku: 8034</div>
                          </div>
                          <div className="text-green-600">R$ 349,90</div>
                          <div className="text-gray-500">
                            <div className="capitalize">Tamanho: 40</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-rows">
                        <div className="flex-none w-24">
                          <img
                            src="https://thumb.braavo.me/vivadress/400/1698729372.webp"
                            alt="Vestido Longo Lauren Marinho"
                            className="inline-block object-contain align-top"
                          />
                        </div>
                        <div className="flex flex-col flex-auto gap-2">
                          <div className="">
                            <span className="font-bold">1x </span>
                            <a
                              href="/prod/1937/vestido-longo-lauren-marinho"
                              target="_blank"
                              className="text-black underline"
                            >
                              Vestido Longo Lauren Marinho
                            </a>
                            <div className="text-xs">Código: 1937 - Sku: 8035</div>
                          </div>
                          <div className="text-green-600">R$ 349,90</div>
                          <div className="text-gray-500">
                            <div className="capitalize">Tamanho: 42</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-rows">
                        <div className="flex-none w-24">
                          <img
                            src="https://thumb.braavo.me/vivadress/400/759006134.webp"
                            alt="Vestido Longo Paetê Bárbara Pink"
                            className="inline-block object-contain align-top"
                          />
                        </div>
                        <div className="flex flex-col flex-auto gap-2">
                          <div className="">
                            <span className="font-bold">1x </span>
                            <a
                              href="/prod/1859/vestido-longo-paete-barbara-pink"
                              target="_blank"
                              className="text-black underline"
                            >
                              Vestido Longo Paetê Bárbara Pink
                            </a>
                            <div className="text-xs">Código: 1859 - Sku: 7844</div>
                          </div>
                          <div className="text-green-600">R$ 299,90</div>
                          <div className="text-gray-500">
                            <div className="capitalize">Tamanho: 42</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 lg:flex-none lg:w-52">
                      <a
                        href="/conta/pedidos/28311"
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
