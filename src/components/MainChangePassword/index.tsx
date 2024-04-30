import { useContext } from "react";
import { formatAndFollowUrl } from "../utils/links";
import { StoreContext } from "../../contexts/Store";

const MainChangePassword = () => {
  const { storeUri } = useContext(StoreContext);

  return (
    <main id="principal" className="principal tail-principal ev-principal">
      <div id="principal-limite" className="principal-limite">
        <article id="conteudo" className="conteudo">
          <div className="grid w-full gap-1 px-1 mx-auto mt-8 lg:max-w-xl md:p-4">
            <div className="grid gap-8">
              <div>
                <a
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
                </a>
              </div>
              <div className="grid gap-4">
                <h1 className="mb-0 text-2xl tt">
                  <span className="tt-texto text-2xl">Alterar senha</span>
                </h1>
                <form
                  action="/conta/senha"
                  autoComplete="on"
                  method="post"
                  className="grid w-full gap-6 lg:gap-2"
                >
                  <div className="grid gap-6 lg:gap-2">
                    <div
                      className="flex flex-col flex-grow gap-1 border lg:rounded-lg lg:hover:bg-yellow-50 lg:px-1 lg:py-2 js-tail-form-geral  border-transparent form-div-cliente-senha-atual"
                      data-campo="Cliente.senha_atual"
                    >
                      <label
                        className="block text-sm font-medium text-gray-800"
                        htmlFor="ClienteSenhaAtual"
                      >
                        Senha Atual
                      </label>
                      <div className="relative flex gap-1 js-tail-form-text-lista">
                        <input
                          type="password"
                          autoComplete="current-password"
                          autoFocus
                          data-rotulo="Senha Atual"
                          id="ClienteSenhaAtual"
                          name="dados[Cliente][senha_atual]"
                          required
                          className="block w-full px-3 py-2 text-base text-black bg-white border border-gray-400 border-solid rounded-lg shadow-sm outline-none sm:text-sm focus:border-indigo-500 ring-0 disabled-bg"
                        />
                      </div>
                    </div>
                    <div className="w-full border-t border-gray-400 border-dashed lg:mx-1" />
                    <div className="grid grid-cols-2 gap-6 lg:gap-2">
                      <div
                        className="flex flex-col flex-grow gap-1 border lg:rounded-lg lg:hover:bg-yellow-50 lg:px-1 lg:py-2 js-tail-form-geral  border-transparent form-div-cliente-senha"
                        data-campo="Cliente.senha"
                      >
                        <label
                          className="block text-sm font-medium text-gray-800"
                          htmlFor="ClienteSenha"
                        >
                          Senha Nova
                        </label>
                        <div className="relative flex gap-1 js-tail-form-text-lista">
                          <input
                            type="password"
                            autoComplete="new-password"
                            data-rotulo="Senha Nova"
                            id="ClienteSenha"
                            minLength={4}
                            name="dados[Cliente][senha]"
                            required
                            className="block w-full px-3 py-2 text-base text-black bg-white border border-gray-400 border-solid rounded-lg shadow-sm outline-none sm:text-sm focus:border-indigo-500 ring-0 disabled-bg"
                          />
                        </div>
                      </div>
                      <div
                        className="flex flex-col flex-grow gap-1 border lg:rounded-lg lg:hover:bg-yellow-50 lg:px-1 lg:py-2 js-tail-form-geral  border-transparent form-div-cliente-senha-igual"
                        data-campo="Cliente.senha_igual"
                      >
                        <label
                          className="block text-sm font-medium text-gray-800"
                          htmlFor="ClienteSenhaIgual"
                        >
                          Confirmar Senha
                        </label>
                        <div className="relative flex gap-1 js-tail-form-text-lista">
                          <input
                            type="password"
                            autoComplete="new-password"
                            data-rotulo="Confirmar Senha"
                            id="ClienteSenhaIgual"
                            minLength={4}
                            name="dados[Cliente][senha_igual]"
                            required
                            className="block w-full px-3 py-2 text-base text-black bg-white border border-gray-400 border-solid rounded-lg shadow-sm outline-none sm:text-sm focus:border-indigo-500 ring-0 disabled-bg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center lg:px-1">
                    <button type="submit" className="w-full botao botao-primario">
                      Gravar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default MainChangePassword;
