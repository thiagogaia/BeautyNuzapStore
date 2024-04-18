import "./style.css";

import HeaderWarning from "./headerWarning";
import Logo from "./logo";
import InputSearch from "./inputSearch";
import InputSearchMobile from "./inputSearchMobile";
import FilterTag from "./filterTag";
import FilterTagMobile from "./filterTagMobile";
import Cart from "./cart";

import { BsHeart } from "react-icons/bs";
import { HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi2";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useContext } from "react";
import { StoreContext } from "../../contexts/Store";
import { useParams } from "react-router-dom";

const Header = () => {
  const { storeData } = useContext(StoreContext);
  const categories = storeData.business.categories;
  const social_links = storeData.business.social_links;
  const { storeUri } = useParams();

  return (
    <header
      className="top-0 z-50 w-full overflow-visible sticky tail-cabecalho ev-cabecalho js-tail-cabecalho"
      data-template="1201"
    >
      <HeaderWarning />

      <section className="overflow-visible text-xs relative tail-topo ev-topo js-tail-topo js-appec-escondido">
        <section
          data-nome="interno_1"
          className="relative p-4 overflow-visible transition duration-300 border-b border-transparent border-solid md:border-gray-200 lg:text-left ev-topo-interno-1 js-tail-topo-interno-1 tail-topo-interno-1"
        >
          <div className="grid grid-cols-3 overflow-visible tail-topo-classe-limite">
            <div className="flex items-center md:gap-6 md:flex-col md:items-start lg:items-center lg:flex-row">
              <div className="flex items-center md:order-last lg:order-none md:hidden ev-topo-categorias-toggle-btn-abrir js-tail-topo-inverter">
                <label
                  htmlFor="tail-topo-hamburger-abrir"
                  // onclick="topoToggleTodosFechar(this)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-8 h-8 cursor-pointer ev-topo-categorias-toggle-btn-abrir-svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                  </svg>
                </label>
              </div>
              <input
                className="hidden tail-topo-hamburger-abrir js-tail-topo-toggle-todos"
                type="checkbox"
                name="topo-hamburger"
                id="tail-topo-hamburger-abrir"
              />
              <div
                data-nome="categorias-toggle-1"
                className="overflow-visible bg-black backdrop-filter backdrop-blur-sm bg-opacity-30 tail-topo-categorias-toggle"
              >
                <div className="absolute block top-1 left-72 md:left-80 tail-topo-categorias-toggle-fechar">
                  <label htmlFor="tail-topo-hamburger-abrir">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className=" w-8 h-8 text-white cursor-pointer md:w-10 md:h-10"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </label>
                </div>
                <div className="w-64 h-full overflow-auto text-sm bg-white md:w-72 lg:w-80 ev-topo-categorias-toggle-interno ev-topo-categorias-toggle-1-interno">
                  <div className="overflow-visible ev-topo-categorias-toggle-interno ev-topo-categorias-toggle-1-dados-interno0">
                    <div className="flex flex-col overflow-visible uppercase divide-y divide-gray-200 divide-solid tail-topo-categorias-toggle-lista ev-topo-categorias-toggle-lista ev-topo-categorias-toggle-1-dados-lista0">
                      {categories.map((category) => (
                        <FilterTagMobile
                          key={category.id}
                          href={`${storeUri}/loja/${category.uri}`}
                          name={category.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div data-nome="social-1" className="hidden md:block js-tail-topo-inverter">
                <div className="ev-topo-social-interno">
                  <ul className="flex justify-center gap-1 md:justify-start ev-topo-social-lista">
                    {social_links.facebook && (
                      <li className="ev-topo-social-item  ev-topo-social-dados-item">
                        <a
                          href={social_links.facebook}
                          className="block p-1 ev-topo-social-link  ev-topo-social-dados-link"
                          title="facebook"
                          rel="external"
                          target="_blank"
                        >
                          <FaFacebookF style={{ fontSize: "1.2rem" }} />
                        </a>
                      </li>
                    )}
                    {social_links.instagram && (
                      <li className="ev-topo-social-item  ev-topo-social-dados-item">
                        <a
                          href={social_links.instagram}
                          className="block p-1 ev-topo-social-link  ev-topo-social-dados-link"
                          title="instagram"
                          rel="external"
                          target="_blank"
                        >
                          <FaInstagram style={{ fontSize: "1.2rem" }} />
                        </a>
                      </li>
                    )}
                    {social_links.youtube && (
                      <li className="ev-topo-social-item  ev-topo-social-dados-item">
                        <a
                          href={social_links.youtube}
                          className="block p-1 ev-topo-social-link  ev-topo-social-dados-link"
                          title="tiktok"
                          rel="external"
                          target="_blank"
                        >
                          <FaYoutube style={{ fontSize: "1.2rem" }} />
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <InputSearch storeUri={storeUri || ""} />
            </div>
            <div className="flex items-center justify-center overflow-visible">
              <Logo />
            </div>

            <div className="flex flex-wrap items-center justify-end gap-2 overflow-visible md:gap-3">
              <div
                data-nome="desejo-1"
                className="overflow-visible w-min md:ml-4 tail-topo-desejo ev-topo-desejo js-tail-topo-inverter"
              >
                <div className="ev-topo-desejo-interno">
                  <div className="ev-topo-desejo-vetor">
                    <a href="/conta/desejos" className="ev-topo-desejo-vetor-link">
                      <BsHeart style={{ fontSize: "1.15rem" }} />
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-nome="login-1"
                className="relative hidden overflow-visible md:order-first md:block"
              >
                <div className="flex justify-end tail-topo-login-interno ev-topo-login-interno">
                  <nav className="flex items-center tail-topo-login-nav ev-topo-login-nav">
                    <HiOutlineUser style={{ fontSize: "1.3rem" }} />
                    <ul className="flex items-center gap-2 divide-x divide-gray-200 divide-solid tail-topo-login-lista ev-topo-login-lista tail-topo-login">
                      <li className="tail-topo-login-item ev-topo-login-item ml-1 tail-topo-login-dados-entrar-item ev-topo-login-dados-entrar-item">
                        <a
                          href="/login?redir=%2F"
                          rel="nofollow"
                          className="inline-block p-0 hover:underline tail-topo-login-link ev-topo-login-link  tail-topo-login-dados-entrar-link ev-topo-login-dados-entrar-link tail-topo-login-dados-link"
                          data-nome="Entrar"
                        >
                          <div className="tail-topo-login-texto ev-topo-login-link-texto  tail-topo-login-dados-entrar-texto ev-topo-login-dados-entrar-texto js-tail-topo-inverter">
                            Entrar
                          </div>
                        </a>
                      </li>
                      <li className="tail-topo-login-item ev-topo-login-item pl-2 ">
                        <a
                          href="/cadastro"
                          rel="nofollow"
                          className="inline-block p-0 hover:underline tail-topo-login-link ev-topo-login-link tail-topo-login-dados-link"
                          data-nome="Criar conta"
                        >
                          <div className="tail-topo-login-texto ev-topo-login-link-texto js-tail-topo-inverter">
                            Criar conta
                          </div>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div
                data-nome="login-toggle-1"
                className="relative z-20 overflow-visible w-min md:hidden tail-topo-login ev-topo-login"
              >
                <div className="flex justify-end tail-topo-login-interno ev-topo-login-interno">
                  <nav className="flex tail-topo-login-nav ev-topo-login-nav">
                    <label
                      htmlFor="tail-topo-login-toggle"
                      className="js-tail-topo-inverter"
                      // onclick="topoToggleTodosFechar(this)"
                    >
                      <HiOutlineUser style={{ fontSize: "1.5rem" }} />
                    </label>
                    <input
                      className="hidden tail-topo-login-toggle js-tail-topo-toggle-todos"
                      type="checkbox"
                      name="tail-topo-login-toggle"
                      id="tail-topo-login-toggle"
                    />
                    <ul className="absolute right-0 flex flex-col items-center invisible bg-white border border-gray-100 border-solid divide-y divide-gray-200 rounded-md shadow-md opacity-0 top-8 divide-solid tail-topo-login-lista ev-topo-login-lista tail-topo-login">
                      <li className="w-full whitespace-nowrap tail-topo-login-item ev-topo-login-item  tail-topo-login-dados-entrar-item ev-topo-login-dados-entrar-item">
                        <a
                          href="/login?redir=%2F"
                          rel="nofollow"
                          className="inline-block py-4 pl-4 pr-12 tail-topo-login-link ev-topo-login-link  tail-topo-login-dados-entrar-link ev-topo-login-dados-entrar-link"
                        >
                          <div className="tail-topo-login-texto ev-topo-login-link-texto  tail-topo-login-dados-entrar-texto ev-topo-login-dados-entrar-texto">
                            Entrar
                          </div>
                        </a>
                      </li>
                      <li className="w-full whitespace-nowrap tail-topo-login-item ev-topo-login-item ">
                        <a
                          href="/cadastro"
                          rel="nofollow"
                          className="inline-block py-4 pl-4 pr-12 tail-topo-login-link ev-topo-login-link"
                        >
                          <div className="tail-topo-login-texto ev-topo-login-link-texto">
                            Criar conta
                          </div>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div
                data-nome="carrinho-1"
                className="overflow-visible ev-topo-carrinho ev-topo-carrinho-1 tail-topo-sacola"
              >
                <div className="ev-topo-carrinho-interno ev-topo-carrinho-1-interno overflow-visible">
                  <div className="overflow-visible">
                    <label
                      htmlFor="tail-topo-sacola-toggle"
                      className="relative inline-block overflow-visible"
                      // onclick="topoToggleTodosFechar(this)"
                    >
                      <span className="inline-block js-tail-topo-inverter">
                        <HiOutlineShoppingBag style={{ fontSize: "1.45rem" }} />
                      </span>
                      <div className="absolute flex items-center justify-center cursor-pointer rounded-full -right-1 h-4 w-4 -top-1 bg-red-500 text-white font-bold leading-none tail-topo-sacola-numero js-tail-topo-carrinho-numero">
                        4
                      </div>
                    </label>
                  </div>
                  <input
                    type="checkbox"
                    name="tail-topo-sacola-toggle"
                    id="tail-topo-sacola-toggle"
                    className="hidden tail-topo-sacola-toggle js-tail-topo-toggle-todos"
                  />
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* desktop categories */}
        <section
          data-nome="interno_2"
          className="flex justify-between overflow-visible transition duration-300 ev-topo-interno-2 js-tail-topo-interno-2"
        >
          <div className="w-full overflow-visible">
            <div className="overflow-visible">
              <div data-nome="categorias-1" className="hidden overflow-visible md:block">
                <div className="overflow-visible ev-topo-categorias-interno ev-topo-categorias-1-interno">
                  <nav className="overflow-visible ev-topo-categorias-interno ev-topo-categorias-1-dados-interno0">
                    <ul className="flex flex-wrap justify-center px-6 overflow-visible uppercase border-b border-gray-200 border-solid gap-x-3 tail-topo-categorias-lista-0 ev-topo-categorias-lista ev-topo-categorias-1-dados-lista0">
                      {categories.map((category) => (
                        <FilterTag
                          key={category.id}
                          href={`${storeUri}/loja/${category.uri}`}
                          name={category.name}
                        />
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>

              <InputSearchMobile storeUri={storeUri || ""} />
            </div>
          </div>
        </section>
      </section>
    </header>
  );
};

export default Header;
