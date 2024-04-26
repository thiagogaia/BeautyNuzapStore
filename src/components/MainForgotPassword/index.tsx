const MainForgotPassword = () => {
  return (
    <>
      <main id="principal" className="principal tail-principal ev-principal">
        <div id="principal-limite" className="principal-limite">
          <article id="conteudo" className="conteudo">
            <div className="grid w-full gap-1 px-1 mx-auto mt-8 lg:max-w-xl md:p-4">
              <div className="grid gap-8">
                <div>
                  <a
                    href="/login"
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
                  </a>{" "}
                </div>
                <div className="grid gap-4">
                  <h1 className="mb-0 text-2xl tt">
                    <span className="tt-texto">Recuperar senha</span>
                  </h1>
                  <form
                    action="/senha"
                    autoComplete="off"
                    method="post"
                    noValidate
                    className="grid w-full gap-6 lg:gap-2 js-recaptcha"
                  >
                    <div className="grid gap-6 lg:gap-2">
                      <div
                        className="flex flex-col gap-2 lg:gap-1 lg:rounded-lg lg:px-1 lg:py-2 js-tail-form-geral  border-transparent form-div-usuario-tipo"
                        data-campo="Usuario.tipo"
                      >
                        <div className="grid gap-4 mt-1 lg:mt-1 lg:gap-1 lg:-ml-0.5">
                          <div className="flex items-start gap-2 text-sm lg:rounded-lg lg:px-1 lg:py-2 lg:hover:bg-yellow-50">
                            <input
                              type="radio"
                              data-rotulo=""
                              id="UsuarioTipo1"
                              name="dados[Usuario][tipo]"
                              // onchange="senhaRadio(this.value)"
                              className="flex-shrink-0 text-sm text-gray-800 align-top border-gray-400 rounded-full cursor-pointer mt-0.5 ring-0 outline-none disabled-bg"
                              defaultValue={1}
                            />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={3}
                              stroke="currentColor"
                              className="hidden"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                            <label
                              className="pl-1 cursor-pointer text-base font-semibold"
                              htmlFor="UsuarioTipo1"
                            >
                              Recuperar senha usando e-mail
                            </label>
                          </div>
                        </div>
                      </div>
                      <div id="senhaEmail" className="grid gap-6 lg:gap-2 escondido">
                        <div className="w-full border-t border-gray-400 border-dashed lg:mx-1" />
                        <div
                          className="flex flex-col flex-grow gap-1 border lg:rounded-lg lg:hover:bg-yellow-50 lg:px-1 lg:py-2 js-tail-form-geral  border-transparent form-div-usuario-email"
                          data-campo="Usuario.email"
                        >
                          <label
                            className="block text-sm font-medium text-gray-800"
                            htmlFor="UsuarioEmail"
                          >
                            Digite seu e-mail{" "}
                          </label>
                          <div className="relative flex gap-1 js-tail-form-text-lista">
                            <input
                              type="text"
                              data-rotulo="Digite seu e-mail:"
                              id="UsuarioEmail"
                              name="dados[Usuario][email]"
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
                      </div>
                    </div>
                    <div id="senhaBotao" className="text-center escondido">
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
                                  name="a-q8h42t2q0bqo"
                                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                  src="https://www.google.com/recaptcha/enterprise/anchor?ar=1&k=6Ld0b2keAAAAADfjftpjmIFGGX34ncuMu3_ru18J&co=aHR0cHM6Ly93d3cudml2YWRyZXNzLmNvbS5icjo0NDM.&hl=pt-BR&v=V6_85qpc2Xf2sbe3xTnRte7m&size=invisible&badge=bottomleft&sa=submit&cb=l73hmot9sr1m"
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
                            Recuperar senha{" "}
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
                            e
                            <a
                              href="https://policies.google.com/terms"
                              className="text-blue-600 hover:underline tail-link-padrao"
                              rel="external"
                              target="_blank"
                            >
                              Termos de serviço
                            </a>{" "}
                            se aplicam.
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default MainForgotPassword;
