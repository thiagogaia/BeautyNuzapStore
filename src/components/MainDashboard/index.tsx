const MainDashboard = () => {
  return (
    <main id="principal" className="principal tail-principal ev-principal">
      <div id="principal-limite" className="principal-limite">
        <article id="conteudo" className="conteudo">
          <div className="grid w-full gap-1 px-1 mx-auto mt-8 lg:max-w-4xl md:p-4">
            <div className="grid gap-8">
              <div className="grid gap-4">
                <h1 className="text-2xl text-center tt conta-tt">
                  <span className="tt-texto conta-tt-texto">Olá, Nome do Usuário!</span>
                  <span className="block text-sm font-normal text-center text-black conta-tt-email">
                    email@email.com
                  </span>
                </h1>
                <div className="text-center">
                  <div className="mt-3 mb-2 border-t border-gray-300 border-dashed lg:mx-1" />
                </div>
                <ul className="grid grid-cols-2 gap-3 md:gap-4 sm:grid-cols-3 md:grid-cols-4 conta-box-lista">
                  <li className="transition duration-200 ease-in-out bg-gray-100 rounded-lg hover:bg-gray-200 conta-box-item">
                    <a
                      className="flex flex-col items-center gap-1 px-2 py-3 text-base lg:text-sm conta-box-link"
                      href="/conta/pedidos"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                          />
                        </svg>
                      </span>
                      <span className="conta-box-texto">Pedidos</span>
                    </a>
                  </li>
                  <li className="transition duration-200 ease-in-out bg-gray-100 rounded-lg hover:bg-gray-200 conta-box-item">
                    <a
                      className="flex flex-col items-center gap-1 px-2 py-3 text-base lg:text-sm conta-box-link"
                      href="/conta/cadastro"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                          />
                        </svg>
                      </span>
                      <span className="conta-box-texto">Meus Dados</span>
                    </a>
                  </li>
                  <li className="transition duration-200 ease-in-out bg-gray-100 rounded-lg hover:bg-gray-200 conta-box-item">
                    <a
                      className="flex flex-col items-center gap-1 px-2 py-3 text-base lg:text-sm conta-box-link"
                      href="/conta/senha"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </span>
                      <span className="conta-box-texto">Alterar senha</span>
                    </a>
                  </li>
                  <li className="transition duration-200 ease-in-out bg-gray-100 rounded-lg hover:bg-gray-200 conta-box-item">
                    <a
                      className="flex flex-col items-center gap-1 px-2 py-3 text-base lg:text-sm conta-box-link"
                      href="/conta/enderecos"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                      </span>
                      <span className="conta-box-texto">Endereços</span>
                    </a>
                  </li>
                  <li className="transition duration-200 ease-in-out bg-gray-100 rounded-lg hover:bg-gray-200 conta-box-item">
                    <a
                      className="flex flex-col items-center gap-1 px-2 py-3 text-base lg:text-sm conta-box-link"
                      href="/conta/carteira"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                      <span className="conta-box-texto">Créditos</span>
                    </a>
                  </li>
                  <li className="transition duration-200 ease-in-out bg-gray-100 rounded-lg hover:bg-gray-200 conta-box-item">
                    <a
                      className="flex flex-col items-center gap-1 px-2 py-3 text-base lg:text-sm conta-box-link"
                      href="/conta/descontos"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                          />
                        </svg>
                      </span>
                      <span className="conta-box-texto">Vale-Desconto</span>
                    </a>
                  </li>
                  <li className="transition duration-200 ease-in-out bg-gray-100 rounded-lg hover:bg-gray-200 conta-box-item">
                    <a
                      className="flex flex-col items-center gap-1 px-2 py-3 text-base lg:text-sm conta-box-link"
                      href="/conta/desejos"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </span>
                      <span className="conta-box-texto">Lista de desejo</span>
                    </a>
                  </li>
                  <li className="transition duration-200 ease-in-out bg-gray-100 rounded-lg hover:bg-gray-200 conta-box-item">
                    <a
                      className="flex flex-col items-center gap-1 px-2 py-3 text-base lg:text-sm conta-box-link"
                      href="/conta/afiliados"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                          />
                        </svg>
                      </span>
                      <span className="conta-box-texto">Indicações</span>
                    </a>
                  </li>
                  <li className="transition duration-200 ease-in-out bg-gray-100 rounded-lg hover:bg-gray-200 conta-box-item">
                    <a
                      className="flex flex-col items-center gap-1 px-2 py-3 text-base lg:text-sm conta-box-link"
                      href="/conta/avaliacoes"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      </span>
                      <span className="conta-box-texto">Avaliar Compras</span>
                    </a>
                  </li>
                  <li className="transition duration-200 ease-in-out bg-gray-100 rounded-lg hover:bg-gray-200 conta-box-item">
                    <a
                      className="flex flex-col items-center gap-1 px-2 py-3 text-base lg:text-sm conta-box-link"
                      href="/conta/devolucoes"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                          />
                        </svg>
                      </span>
                      <span className="conta-box-texto">Devoluções</span>
                    </a>
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

export default MainDashboard;
