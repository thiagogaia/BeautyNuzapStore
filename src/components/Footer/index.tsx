import "./style.css";

import { useContext } from "react";
import { StoreContext } from "../../contexts/Store";
import { formatAndFollowUrl } from "../utils/links";

const Footer = () => {
  const { storeUri, storeData } = useContext(StoreContext);

  return (
    <>
      <footer className="text-center text-xs tail-cor tail-rodape-fonte mt-10 tail-rodape js-appec-escondido">
        <section
          data-nome="interno_1"
          className="theme-mode-bg px-2 flex w-full justify-center lg:px-0 border-t border-solid border-black border-opacity-10 lg:text-left json-rodape-rodape_interno_1-fundo-interno tail-rodape-interno-1"
        >
          <div className="py-6 px-8 w-full tail-rodape-limite-1">
            <div className="flex gap-7 lg:gap-0 flex-col lg:flex-row lg:justify-between">
              <div>
                <div
                  data-nome="menu_1"
                  className=" tail-rodape-coluna tail-rodape-coluna-menu js-tail-rodape-coluna"
                >
                  <div className="json-rodape-borda-interno json-rodape-menu_1-borda-interno json-rodape-fundo-interno json-rodape-menu_1-fundo-interno json-rodape-cores-interno json-rodape-menu_1-cores-interno">
                    <h2 className="mb-2 text-sm font-bold json-rodape-borda-titulo json-rodape-menu_1-borda-titulo json-rodape-fundo-titulo json-rodape-menu_1-fundo-titulo tail-rodape-tt tail-rodape-tt-menu js-tail-rodape-tt json-rodape-cores-titulo json-rodape-menu_1-cores-titulo">
                      INSTITUCIONAL
                    </h2>
                    <nav>
                      <ul className="list-inside list-none lg:list-disc json-rodape-borda-lista json-rodape-menu_1-borda-dados_lista json-rodape-fundo-lista json-rodape-menu_1-fundo-dados_lista json-rodape-cores-lista json-rodape-menu_1-cores-dados_lista grid gap-2">
                        <li className="pl-px json-rodape-borda-item json-rodape-menu_1-borda-dados_item json-rodape-fundo-item json-rodape-menu_1-fundo-dados_item json-rodape-cores-item json-rodape-menu_1-cores-dados_item">
                          <a
                            href={`/${storeUri}`}
                            rel="next"
                            className="no-underline hover:underline json-rodape-borda-link json-rodape-menu_1-borda-dados_link json-rodape-fundo-link json-rodape-menu_1-fundo-dados_link json-rodape-cores-link json-rodape-menu_1-cores-dados_link"
                          >
                            <span className="inline">Home </span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-7">
                {/* my account */}
                <div
                  data-nome="menu_2"
                  className=" tail-rodape-coluna tail-rodape-coluna-menu js-tail-rodape-coluna"
                >
                  <div className="json-rodape-borda-interno json-rodape-menu_2-borda-interno json-rodape-fundo-interno json-rodape-menu_2-fundo-interno json-rodape-cores-interno json-rodape-menu_2-cores-interno">
                    <h2 className="mb-2 text-sm font-bold json-rodape-borda-titulo json-rodape-menu_2-borda-titulo json-rodape-fundo-titulo json-rodape-menu_2-fundo-titulo tail-rodape-tt tail-rodape-tt-menu js-tail-rodape-tt json-rodape-cores-titulo json-rodape-menu_2-cores-titulo">
                      MINHA CONTA
                    </h2>
                    <nav>
                      <ul className="list-inside list-none lg:list-disc json-rodape-borda-lista json-rodape-menu_2-borda-dados_lista json-rodape-fundo-lista json-rodape-menu_2-fundo-dados_lista json-rodape-cores-lista json-rodape-menu_2-cores-dados_lista grid gap-2">
                        <li className="pl-px json-rodape-borda-item json-rodape-menu_2-borda-dados_item json-rodape-fundo-item json-rodape-menu_2-fundo-dados_item json-rodape-cores-item json-rodape-menu_2-cores-dados_item">
                          <span
                            onClick={() => formatAndFollowUrl(`${storeUri}/conta/cadastro`)}
                            className="cursor-pointer no-underline hover:underline json-rodape-borda-link json-rodape-menu_2-borda-dados_link json-rodape-fundo-link json-rodape-menu_2-fundo-dados_link json-rodape-cores-link json-rodape-menu_2-cores-dados_link"
                          >
                            <span className="inline">Meus Dados </span>
                          </span>
                        </li>
                        <li className="pl-px json-rodape-borda-item json-rodape-menu_2-borda-dados_item json-rodape-fundo-item json-rodape-menu_2-fundo-dados_item json-rodape-cores-item json-rodape-menu_2-cores-dados_item">
                          <span
                            onClick={() => formatAndFollowUrl(`${storeUri}/conta/pedidos`)}
                            className="cursor-pointer no-underline hover:underline json-rodape-borda-link json-rodape-menu_2-borda-dados_link json-rodape-fundo-link json-rodape-menu_2-fundo-dados_link json-rodape-cores-link json-rodape-menu_2-cores-dados_link"
                          >
                            <span className="inline">Meus Pedidos </span>
                          </span>
                        </li>
                        <li className="pl-px json-rodape-borda-item json-rodape-menu_2-borda-dados_item json-rodape-fundo-item json-rodape-menu_2-fundo-dados_item json-rodape-cores-item json-rodape-menu_2-cores-dados_item">
                          <span
                            onClick={() => formatAndFollowUrl(`${storeUri}/conta/desejos`)}
                            className="cursor-pointer no-underline hover:underline json-rodape-borda-link json-rodape-menu_2-borda-dados_link json-rodape-fundo-link json-rodape-menu_2-fundo-dados_link json-rodape-cores-link json-rodape-menu_2-cores-dados_link"
                          >
                            <span className="inline">Lista Desejos </span>
                          </span>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                {/* follow us */}
                <div
                  data-nome="social_1"
                  className=" tail-rodape-coluna tail-rodape-coluna-social js-tail-rodape-coluna"
                >
                  <div className="json-rodape-borda-interno json-rodape-social_1-borda-interno json-rodape-fundo-interno json-rodape-social_1-fundo-interno json-rodape-cores-interno json-rodape-social_1-cores-interno">
                    <h2 className="mb-2 text-sm font-bold json-rodape-borda-titulo json-rodape-social_1-borda-titulo json-rodape-fundo-titulo json-rodape-social_1-fundo-titulo tail-rodape-tt tail-rodape-tt-social js-tail-rodape-tt json-rodape-cores-titulo json-rodape-social_1-cores-titulo">
                      SIGA-NOS
                    </h2>
                    <ul className="flex gap-2 justify-center lg:justify-start">
                      <li className="border-[rgba(var(--reverse-color),.1)] border border-solid border-1 border-opacity-10 rounded">
                        <a
                          href={storeData.business.social_links.facebook}
                          className="p-1 block"
                          title="facebook"
                          rel="external"
                          target="_blank"
                        >
                          <svg
                            className="h-4 fill-current tail-rodape-social-vetor-facebook json-rodape-social-vetor"
                            version="1.1"
                            xmlns="//www.w3.org/2000/svg"
                            xmlnsXlink="//www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 50 50"
                            enableBackground="new 0 0 50 50"
                            xmlSpace="preserve"
                          >
                            <path d="M35.627,16.183h-7.92V10.99c0-1.951,1.293-2.406,2.203-2.406c0.908,0,5.59,0,5.59,0V0.011l-7.697-0.029c-8.543,0-10.487,6.395-10.487,10.487v5.715h-4.941v8.835h4.941c0,11.338,0,24.999,0,24.999h10.391c0,0,0-13.797,0-24.999h7.012L35.627,16.183z" />
                          </svg>
                        </a>
                      </li>
                      <li className="border-[rgba(var(--reverse-color),.1)] border border-solid border-1 border-opacity-10 rounded">
                        <a
                          href={storeData.business.social_links.instagram}
                          className="p-1 block"
                          title="instagram"
                          rel="external"
                          target="_blank"
                        >
                          <svg
                            className="h-4 fill-current tail-rodape-social-vetor-instagram json-rodape-social-vetor"
                            version="1.1"
                            xmlns="//www.w3.org/2000/svg"
                            xmlnsXlink="//www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 56.7 56.7"
                            enableBackground="new 0 0 56.7 56.7"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z" />
                              <circle cx="41.5" cy="16.4" r="2.9" />
                              <path d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z" />
                            </g>
                          </svg>
                        </a>
                      </li>
                      <li className="border-[rgba(var(--reverse-color),.1)] border border-solid border-1 border-opacity-10 rounded">
                        <a
                          href={storeData.business.social_links.youtube}
                          className="p-1 block"
                          title="youtube"
                          rel="external"
                          target="_blank"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 576 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ fontSize: "1.2rem" }}
                          >
                            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* whatsapp support */}
              <div>
                <div
                  data-nome="texto_1"
                  className=" tail-rodape-coluna tail-rodape-coluna-texto js-tail-rodape-coluna"
                >
                  <div className="json-rodape-borda-interno json-rodape-texto_1-borda-interno json-rodape-fundo-interno json-rodape-texto_1-fundo-interno json-rodape-cores-interno json-rodape-texto_1-cores-interno">
                    <h2 className="mb-2 text-sm font-bold json-rodape-borda-titulo json-rodape-texto_1-borda-titulo json-rodape-fundo-titulo json-rodape-texto_1-fundo-titulo tail-rodape-tt tail-rodape-tt-texto js-tail-rodape-tt json-rodape-cores-titulo json-rodape-texto_1-cores-titulo">
                      ATENDIMENTO WHATSAPP
                    </h2>
                    <div className="grid gap-3 json-rodape-borda-texto json-rodape-texto_1-borda-texto json-rodape-fundo-texto json-rodape-texto_1-fundo-texto json-rodape-cores-texto json-rodape-texto_1-cores-texto">
                      <span className="leading-normal">
                        De segunda a sexta-feira, das 9h às 16h
                        <br />
                        (exceto feriados)
                      </span>
                      <div className="grid gap-2 leading-normal">
                        <span className="leading-normal">
                          Pedidos e Envio de Comprovantes
                          <br />
                          <a
                            href="
                    //wa.me/5548999999999
                    "
                            target="_blank"
                            rel="external"
                          >
                            (48) 99999-9999
                          </a>
                        </span>
                        <span className="leading-normal">
                          Joelik Express e Retirada
                          <br />
                          <a
                            href="
                    //wa.me/5548999999999
                    "
                            target="_blank"
                            rel="external"
                          >
                            (48) 99999-9999
                          </a>
                        </span>
                        <span className="leading-normal">
                          Trocas e Devoluções
                          <br />
                          <a
                            href="
                    //wa.me/5548999999999
                    "
                            target="_blank"
                            rel="external"
                          >
                            (48) 99999-9999
                          </a>
                        </span>
                      </div>
                      <span>atendimento@joelik.com.br</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* payment methods */}
              <div className="flex flex-col gap-7">
                <div
                  data-nome="pagamento_1"
                  className=" tail-rodape-coluna tail-rodape-coluna-pagamento js-tail-rodape-coluna"
                >
                  <div className="json-rodape-borda-interno json-rodape-pagamento_1-borda-interno json-rodape-fundo-interno json-rodape-pagamento_1-fundo-interno json-rodape-cores-interno json-rodape-pagamento_1-cores-interno">
                    <h2 className="mb-2 text-sm font-bold json-rodape-borda-titulo json-rodape-pagamento_1-borda-titulo tail-rodape-tt tail-rodape-tt-pagamento js-tail-rodape-tt json-rodape-fundo-titulo json-rodape-pagamento_1-fundo-titulo json-rodape-cores-titulo json-rodape-pagamento_1-cores-titulo">
                      FORMAS DE PAGAMENTO
                    </h2>
                    <div>
                      <figure>
                        <img
                          loading="lazy"
                          src="/tail-pagamento-2-linhas-4-colunas-pix-boleto.webp"
                          className="mx-auto lg:mx-0 tail-rodape-pagamento"
                          alt="Formas de Pagamento"
                        />
                      </figure>
                    </div>
                  </div>
                </div>

                {/* security */}
                <div
                  data-nome="ssl_1"
                  className=" tail-rodape-coluna tail-rodape-coluna-ssl js-tail-rodape-coluna"
                >
                  <div className="json-rodape-borda-interno json-rodape-ssl_1-borda-interno json-rodape-fundo-interno json-rodape-ssl_1-fundo-interno json-rodape-cores-interno json-rodape-ssl_1-cores-interno">
                    <h2 className="mb-1 text-sm font-bold lg:mb-2 json-rodape-borda-titulo json-rodape-ssl_1-borda-titulo json-rodape-fundo-titulo json-rodape-ssl_1-fundo-titulo tail-rodape-tt tail-rodape-tt-ssl js-tail-rodape-tt json-rodape-cores-titulo json-rodape-ssl_1-cores-titulo">
                      SEGURANÇA
                    </h2>
                    <div>
                      <figure>
                        <img
                          loading="lazy"
                          src="/tail-ssl-preto.webp"
                          className="drop-shadow-[var(--filter-drop-shadow)] mx-auto lg:m-0 tail-rodape-ssl"
                          alt="Formas de Pagamento"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>

              {/* newsletter */}
              <div className="flex justify-center">
                <div
                  data-nome="news_1"
                  className="w-68 lg:w-48 tail-rodape-coluna tail-rodape-coluna-news js-tail-rodape-coluna"
                >
                  <div className="json-rodape-borda-interno json-rodape-news_1-borda-interno json-rodape-fundo-interno json-rodape-news_1-fundo-interno json-rodape-cores-interno json-rodape-news_1-cores-interno">
                    <h2 className="mb-2 text-sm font-bold json-rodape-borda-titulo json-rodape-news_1-borda-titulo json-rodape-fundo-titulo json-rodape-news_1-fundo-titulo tail-rodape-tt tail-rodape-tt-news js-tail-rodape-tt json-rodape-cores-titulo json-rodape-news_1-cores-titulo">
                      NEWSLETTER
                    </h2>
                    <div className="leading-normal lg:mb-2 json-rodape-borda-texto json-rodape-news_1-borda-texto json-rodape-fundo-texto json-rodape-news_1-fundo-texto json-rodape-cores-texto json-rodape-news_1-cores-texto">
                      Receba nossas dicas, novidades e promoções.
                    </div>
                    <form
                      action="/lista/newsletter"
                      autoComplete="off"
                      method="post"
                      noValidate
                      className="js-newsletter"
                    >
                      <div>
                        <div className="border-[rgba(var(--border-color),.1)] border-b border-b border-solid border-opacity-10 py-3 text-left tail-rodape-news-nome">
                          <input
                            type="email"
                            name="newsNome"
                            autoComplete="off"
                            placeholder="Nome"
                            // onkeyup="nesletterEnter(this, event);"
                            className="placeholder-[rgba(var(--text-color),1)] outline-none py-1 bg-transparent js-newsletter-nome"
                          />
                        </div>
                        <div className="border-[rgba(var(--border-color),.1)] border-b border-b border-solid border-opacity-10 py-3 grid grid-cols-5 leading-normal tail-rodape-news-email">
                          <input
                            type="email"
                            name="newsEmail"
                            autoComplete="off"
                            placeholder="E-mail"
                            // onkeyup="nesletterEnter(this, event);"
                            className="placeholder-[rgba(var(--text-color),1)] outline-none py-1 bg-transparent col-span-4 leading-none js-newsletter-email"
                          />
                          <input
                            type="button"
                            defaultValue="OK"
                            aria-label="Enviar email para receber dicas, novidades e promoções"
                            // onclick="nesletterSubmit(this);"
                            className="rounded-full h-8 w-8 bg-gray-200 cursor-pointer text-black justify-self-end leading-none tail-rodape-news-btn-ok ev-rodape-news-btn-ok"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          data-nome="interno_2"
          className="theme-mode-bg px-2 flex w-full justify-center lg:px-0 border-t border-solid border-black border-opacity-10 json-rodape-rodape_interno_2-fundo-interno tail-rodape-interno-2"
        >
          <div className="py-3 flex flex-col items-center gap-3 lg:gap-2 tail-rodape-limite-2">
            <div>
              <div data-nome="texto_2">
                <div className="json-rodape-borda-interno json-rodape-texto_2-borda-interno json-rodape-fundo-interno json-rodape-texto_2-fundo-interno json-rodape-cores-interno json-rodape-texto_2-cores-interno">
                  <div className="flex flex-col gap-1 lg:flex-row json-rodape-borda-texto json-rodape-texto_2-borda-texto json-rodape-fundo-texto json-rodape-texto_2-fundo-texto json-rodape-cores-texto json-rodape-texto_2-cores-texto">
                    <span>
                      Todos os direitos reservados
                      <span className="hidden lg:inline"> -</span>
                    </span>
                    <span>
                      Joelik Confeccoes LTDA
                      <span className="hidden lg:inline"> -</span>
                    </span>
                    <span>CNPJ: 11.473.118/0001-53</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div data-nome="assinatura">
                <div className="flex gap-0 lg:gap-1 flex-wrap justify-center items-center json-rodape-borda-interno json-rodape-assinatura-borda-interno json-rodape-fundo-interno json-rodape-assinatura-fundo-interno json-rodape-cores-interno json-rodape-assinatura-cores-interno">
                  <div className="w-full lg:w-auto">
                    Desenvolvimento:
                    <a href="//www.nuzap.com.br/" target="_blank" rel="external">
                      Nuzap Agency
                    </a>
                    <span className="hidden lg:inline"> - </span>
                  </div>
                  <h2 className="mr-1 lg:mr-0 json-rodape-borda-titulo json-rodape-assinatura-borda-titulo json-rodape-fundo-titulo json-rodape-assinatura-fundo-titulo json-rodape-cores-titulo json-rodape-assinatura-cores-titulo">
                    Plataforma:
                  </h2>
                  <div className="json-rodape-borda-texto json-rodape-assinatura-borda-texto json-rodape-fundo-texto json-rodape-assinatura-fundo-texto json-rodape-cores-texto json-rodape-assinatura-cores-texto">
                    <a
                      href="//www.nuzap.com.br?utm_campaign=joelik&utm_source=loja"
                      title="Nuzap! - Lojas Virtuais"
                      rel="external"
                      target="_blank"
                    >
                      <img
                        src="https://loja.nuzap.com.br/img/logo-web.png"
                        alt="Nuzap"
                        width={50}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
