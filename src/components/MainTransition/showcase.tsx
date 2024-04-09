import ShowcaseCard from "./showcaseCard";
import { IShowcaseProps } from "./types";

const Showcase = ({ title }: IShowcaseProps) => {
  return (
    <>
      <div className="cont-limite cont-limite-427 cont-pdd-pq ">
        <h2 className="tt vitr-tt cont-tt  cont-ali-ip-c cont-ali-fb-c cont-ali-dk-c cont-ali-mn-c cont-tt-427">
          <a href="https://www.vivadress.com.br/cat/5/new-in" className="tt-url">
            <span className="tt-texto">{title}</span>
          </a>
        </h2>
        <ul className="cont-lista cont-lista-427 cont-mgm-l-md ">
          <li
            className="vitr-grupo-box vitr-grupo-hash-428 conteudo-hash-428 cont-item cont-item-428  cont-mgm-i-md"
            data-id={428}
          >
            <section className="relative flex items-center gap-2 overflow-hidden tail-listagem-prod js-tail-listagem-prod">
              <button
                aria-label="Voltar Slider para os produtos anteriores"
                className="absolute left-0 z-10 p-2 pl-0.5 tail-listagem-seta tail-listagem-prod-seta"
                onclick="listagemSlider('voltar');"
              >
                <div className="grid flex-shrink-0 px-2 border border-gray-300 border-solid rounded-full place-content-center bg-gray-50 tail-listagem-seta-interno tail-listagem-prod-seta-interno ev-listagem-seta-interno">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="h-3 md:h-4 -ml-0.5 text-gray-500 pointer-events-none ev-listagem-seta-icone"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </div>
              </button>

              <ul className="flex flex-grow ml-2 overflow-x-scroll tail-listagem-prod-slider-container js-tail-listagem-prod-lista flex flex-grow ml-2 gap-y-2">
                {[1, 2, 3, 4, 5, 6].map((e) => (
                  <ShowcaseCard key={e} />
                ))}
              </ul>

              <button
                aria-label="Avançar Slider para os próximos produtos"
                className="absolute right-0 p-2 pr-0.5 tail-listagem-seta tail-listagem-prod-seta"
                onclick="listagemSlider('avancar')"
              >
                <div className="grid flex-shrink-0 px-2 border border-gray-300 border-solid rounded-full place-content-center bg-gray-50 tail-listagem-seta-interno tail-listagem-prod-seta-interno ev-listagem-seta-interno">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="h-3 md:h-4 -mr-0.5 text-gray-500 pointer-events-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </button>
            </section>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Showcase;
