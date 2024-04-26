const MainPasswordSent = () => {
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
                  </a>
                </div>
                <div className="grid gap-4">
                  <h1 className="flex items-center gap-1 mb-0 text-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      data-slot="icon"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                    <span>Redefinição de senha enviada</span>
                  </h1>
                  <div className="w-full p-2 text-sm text-green-700 bg-green-100 border border-green-400 border-dashed rounded-lg">
                    Acabamos de enviar um e-mail com o link para redefinir sua senha. Se o e-mail
                    não aparecer, verifique sua caixa de spam ou lixo eletrônico.{" "}
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

export default MainPasswordSent;
