import { useContext } from "react";
import { formatAndFollowUrl } from "../utils/links";
import { StoreContext } from "../../contexts/Store";

const MainWishlist = () => {
  const { storeUri } = useContext(StoreContext);

  return (
    <main id="principal" className="principal tail-principal ev-principal">
      <div id="principal-limite" className="principal-limite">
        <article id="conteudo" className="conteudo">
          <div className="grid w-full gap-1 px-1 mx-auto mt-8 lg:max-w-4xl md:p-4">
            <div className="grid gap-8">
              <div>
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
              </div>
              <div className="grid gap-4">
                <h1 className="mb-0 text-2xl tt">
                  <span className="tt-texto text-2xl">Lista de desejo</span>
                </h1>
                <div className="grid gap-4">
                  <div className="grid gap-4">
                    <section className="relative flex items-center gap-2 overflow-hidden tail-listagem-prod js-tail-listagem-prod">
                      <ul className="tail-listagem-prod-lista js-tail-listagem-prod-lista js-tail-paginacao-busca-lista flex-grow grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4">
                        {/* product card */}
                      </ul>
                    </section>
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

export default MainWishlist;
