import { useContext } from "react";
import { formatAndFollowUrl } from "../utils/links";
import { StoreContext } from "../../contexts/Store";

const MainLogin = () => {
  const { storeUri } = useContext(StoreContext);

  return (
    <>
      <main id="principal" className="principal tail-principal ev-principal">
        <div id="principal-limite" className="principal-limite">
          <article id="conteudo" className="conteudo">
            <div className="grid w-full gap-1 px-1 mx-auto mt-8 lg:max-w-xl md:p-4">
              <div className="grid gap-8">
                <div className="grid gap-4">
                  <h1 className="mb-0 text-2xl tt">
                    <span className="tt-texto">Identificação</span>
                  </h1>
                  <form
                    action="/login?redir=%2F"
                    autoComplete="on"
                    method="post"
                    className="grid w-full gap-6 lg:gap-6 js-recaptcha"
                  >
                    <div className="grid gap-6 lg:gap-2">
                      <div
                        className="flex flex-col flex-grow gap-1 border lg:rounded-lg lg:hover:bg-yellow-50 lg:px-1 lg:py-2 js-tail-form-geral  border-transparent form-div-usuario-email"
                        data-campo="Usuario.email"
                      >
                        <label
                          className="block text-sm font-medium text-gray-800"
                          htmlFor="UsuarioEmail"
                        >
                          E-mail
                        </label>
                        <div className="relative flex gap-1 js-tail-form-text-lista">
                          <input
                            type="email"
                            autoComplete="username"
                            data-rotulo="E-mail:"
                            id="UsuarioEmail"
                            name="dados[Usuario][email]"
                            required
                            className="block w-full px-3 py-2 text-base text-black bg-white border border-gray-400 border-solid rounded-lg shadow-sm outline-none sm:text-sm focus:border-indigo-500 ring-0 disabled-bg"
                            style={{
                              backgroundImage: 'url("data:image/png',
                              backgroundRepeat: "no-repeat",
                              backgroundSize: 20,
                              backgroundPosition: "97% center",
                              cursor: "auto",
                            }}
                            data-temp-mail-org={0}
                          />
                        </div>
                      </div>
                      <div
                        className="flex flex-col flex-grow gap-1 border lg:rounded-lg lg:hover:bg-yellow-50 lg:px-1 lg:py-2 js-tail-form-geral  border-transparent form-div-usuario-senha"
                        data-campo="Usuario.senha"
                      >
                        <label
                          className="block text-sm font-medium text-gray-800"
                          htmlFor="UsuarioSenha"
                        >
                          Senha
                        </label>
                        <div className="relative flex gap-1 js-tail-form-text-lista">
                          <input
                            type="password"
                            autoComplete="current-password"
                            data-rotulo="Senha:"
                            id="UsuarioSenha"
                            name="dados[Usuario][senha]"
                            required
                            className="block w-full px-3 py-2 text-base text-black bg-white border border-gray-400 border-solid rounded-lg shadow-sm outline-none sm:text-sm focus:border-indigo-500 ring-0 disabled-bg"
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => formatAndFollowUrl(`${storeUri}/senha`)}
                        className="block text-sm text-start font-medium text-gray-800 underline lg:px-1 tail-link-padrao"
                      >
                        Esqueceu sua senha?
                      </button>
                      <input
                        type="hidden"
                        data-rotulo=""
                        id="Token"
                        name="dados[_token]"
                        className=""
                      />
                    </div>

                    <div className="text-center">
                      <div className="relative">
                        <div className="absolute z-10 w-full h-full text-center bg-white top js-login-entrar-loader opacity-90 escondido">
                          <div className="m-auto loader" />
                        </div>

                        <div className="z-0 grid gap-2 text-center justify-items-center js-login-entrar-campos">
                          <div>
                            <div
                              className="grecaptcha-badge"
                              data-style="none"
                              style={{
                                width: 256,
                                height: 60,
                                position: "fixed",
                                visibility: "hidden",
                              }}
                            >
                              <div className="grecaptcha-logo">
                                <iframe
                                  title="reCAPTCHA"
                                  width={256}
                                  height={60}
                                  role="presentation"
                                  name="a-ocr3pyjyf1wg"
                                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                  src="https://www.google.com/recaptcha/enterprise/anchor?ar=1&k=6Ld0b2keAAAAADfjftpjmIFGGX34ncuMu3_ru18J&co=aHR0cHM6Ly93d3cudml2YWRyZXNzLmNvbS5icjo0NDM.&hl=pt-BR&v=V6_85qpc2Xf2sbe3xTnRte7m&size=invisible&badge=bottomleft&sa=submit&cb=otpq5gkkyadg"
                                />
                              </div>
                              <div className="grecaptcha-error" />
                              <textarea
                                id="g-recaptcha-response"
                                name="g-recaptcha-response"
                                className="g-recaptcha-response"
                                style={{
                                  width: 250,
                                  height: 40,
                                  border: "1px solid rgb(193, 193, 193)",
                                  margin: "10px 25px",
                                  padding: 0,
                                  resize: "none",
                                  display: "none",
                                }}
                              />
                            </div>
                            <iframe style={{ display: "none" }} />
                          </div>
                          <button
                            type="button"
                            data-action="submit"
                            data-callback="recaptchaSubmit"
                            data-error-callback="recaptchaError"
                            data-expired-callback="recaptchaExpired"
                            data-sitekey="6Ld0b2keAAAAADfjftpjmIFGGX34ncuMu3_ru18J"
                            className="order-first w-full text-sm botao botao-primario lg:w-80 lg:text-base lg:px-12 lg:py-3 g-recaptcha"
                          >
                            Entrar
                          </button>
                          <div className="mt-6 text-xs text-gray-500 lg:mt-2">
                            Este site é protegido pelo reCAPTCHA e pelo Google
                            <br />
                            <a
                              href="https://policies.google.com/privacy"
                              className="text-blue-600 hover:underline tail-link-padrao"
                              rel="external"
                              target="_blank"
                            >
                              Política de Privacidade
                            </a>{" "}
                            e{" "}
                            <a
                              href="https://policies.google.com/terms"
                              className="text-blue-600 hover:underline tail-link-padrao"
                              rel="external"
                              target="_blank"
                            >
                              Termos de serviço{" "}
                            </a>
                            se aplicam.
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="w-full border-t border-gray-400 border-dashed lg:mx-1" />
                  {/* register */}
                  <div className="grid gap-6 lg:gap-6">
                    <div className="grid gap-6 text-center lg:gap-2">
                      <h2 className="text-lg font-semibold lg:text-base lg:px-1 lg:py-2">
                        Quero me cadastrar
                      </h2>
                      <div className="text-xs">
                        Ao criar uma conta, você concorda com nossos termos de uso, condições,
                        política de privacidade e que tem pelo menos 16 anos de idade.
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        onClick={() => formatAndFollowUrl(`${storeUri}/cadastro`)}
                        className="w-full text-sm botao botao-secundario lg:w-80 lg:text-base lg:px-12 lg:py-3"
                      >
                        Criar Conta
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default MainLogin;
