const MainAddress = () => {
  return (
    <main id="principal" className="principal tail-principal ev-principal">
      <div id="principal-limite" className="principal-limite">
        <article id="conteudo" className="conteudo">
          <div className="escondido mb-3 lg:mb-6 p-2 bg-green-100 border border-dashed border-green-500 rounded text-sm text-green-800 tail-notificacao-ok">
            <div>Endereço apagado</div>
          </div>

          <div className="grid w-full gap-1 px-1 mx-auto mt-8 lg:max-w-4xl md:p-4">
            <div className="grid gap-8">
              <div>
                <a
                  href="/conta"
                  className="flex items-center inline-block gap-1 px-4 py-2 bg-gray-100 rounded-lg w-max hover:bg-gray-200 tail-btn-voltar js-appec-escondido"
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
                </a>
              </div>
              <div className="grid gap-4">
                <h1 className="mb-0 text-2xl tt">
                  <span className="tt-texto">Endereço</span>
                </h1>
                <div>
                  <a
                    href="/conta/enderecos/editar/0"
                    className="flex items-center justify-center block gap-1 px-4 py-3 text-blue-500 transition-colors border border-blue-200 border-dotted rounded-lg hover:underline hover:border-blue-600 hover:bg-blue-200 hover:bg-opacity-20 w-max"
                  >
                    Adicionar endereço
                    <svg
                      xmlns="//www.w3.org/2000/svg"
                      className="h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </a>
                </div>
                <ul className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4 js-paginacao-lista">
                  <li className="flex flex-col justify-between p-2 space-y-2 text-center border border-gray-300 border-solid rounded-lg js-paginacao-item">
                    <div className="flex flex-col gap-1 px-3 py-4">
                      <div className="font-semibold">Av Fleming, 123</div>
                      <div>Ouro Preto - Belo Horizonte - MG</div>
                      <div>31210-030</div>
                    </div>
                    <div className="flex">
                      <a
                        href="/conta/enderecos/editar/22685"
                        className="flex items-center justify-center w-full gap-1 py-2 text-blue-500 transition-colors rounded-lg hover:underline hover:border-blue-600 hover:bg-blue-200 hover:bg-opacity-20"
                      >
                        Editar
                        <svg
                          xmlns="//www.w3.org/2000/svg"
                          className="h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                      </a>
                      <a
                        href="/conta/enderecos/apagar/22685"
                        className="flex items-center justify-center w-full gap-1 py-2 text-red-500 transition-colors rounded-lg hover:underline hover:border-red-600 hover:bg-red-200 hover:bg-opacity-20"
                        // onclick="return confirm('Tem certeza que deseja apagar?');"
                      >
                        Apagar
                        <svg
                          xmlns="//www.w3.org/2000/svg"
                          className="h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default MainAddress;
