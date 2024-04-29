const MainCredits = () => {
  return (
    <main id="principal" className="principal tail-principal ev-principal">
      <div id="principal-limite" className="principal-limite">
        <article id="conteudo" className="conteudo">
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
                <h1 className="mb-0 text-2xl tt js-appec-escondido">
                  <span className="tt-texto">Créditos</span>
                </h1>
                <div className="text-sm">
                  Saldo de créditos <strong>R$ 0,00</strong>.
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default MainCredits;
