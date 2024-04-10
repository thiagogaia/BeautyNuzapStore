import Slider from "../Slider";
import FeaturedCategories from "./featuredCategories";
import Instagram from "./instagram";
import Showcase from "./showcase";
import "./style.css";

const MainTransition = () => {
  return (
    <>
      <main id="principal" className="principal tail-principal ev-principal">
        <article id="conteudo" className="conteudo">
          <div className="cont-menu">
            <div className="cont-separador cont-separador-120  esconder-dk esconder-mn " />
            <Slider />

            <div className="cont-separador cont-separador-40  " />
            <div className="cont-limite cont-limite-40  ">
              <ul className="cont-lista cont-lista-40  ">
                <li
                  className="vitr-grupo-box vitr-grupo-hash-118 conteudo-hash-118 cont-item cont-item-118 esconder-dk esconder-mn  "
                  data-id={118}
                >
                  <div className="cont-fotos">
                    <figure className="cont-fotos-box cont-fotos-hash-247 cont-mgm-s-md">
                      <picture className="w-full">
                        <source
                          srcSet="https://thumb.braavo.me/vivadress/400/720908950.webp 400w, https://thumb.braavo.me/vivadress/600/720908950.webp 600w, https://thumb.braavo.me/vivadress/0/720908950.webp 1x, https://thumb.braavo.me/vivadress/0/720908950.webp 2x"
                          sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, (max-width: 1199px) 600px, 100vw"
                          type="image/webp"
                        />
                        <source
                          srcSet="https://thumb.braavo.me/vivadress/400/720908950.png 400w, https://thumb.braavo.me/vivadress/600/720908950.png 600w, https://thumb.braavo.me/vivadress/0/720908950.png 1x, https://thumb.braavo.me/vivadress/0/720908950.png 2x"
                          sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, (max-width: 1199px) 600px, 100vw"
                          type="image/jpeg"
                        />
                        <img
                          loading="lazy"
                          src="https://thumb.braavo.me/vivadress/0/720908950.png"
                          alt="Viva Dress"
                          className="cont-fotos-imagem mx-auto"
                        />
                      </picture>
                    </figure>
                  </div>
                </li>
                <li
                  className="vitr-grupo-box vitr-grupo-hash-41 conteudo-hash-41 cont-item cont-item-41 esconder-ip esconder-fb  "
                  data-id={41}
                >
                  <div className="cont-banners">
                    <div className="cont-banners-menu">
                      <div className="cont-banners-lista">
                        <div className="cont-banners-banners cont-mgm-s-gr">
                          <figure className="cont-banners-box ">
                            <picture className="w-full">
                              <source
                                srcSet="https://thumb.braavo.me/vivadress/400/2644292766.webp 400w, https://thumb.braavo.me/vivadress/600/2644292766.webp 600w, https://thumb.braavo.me/vivadress/0/2644292766.webp 1x, https://thumb.braavo.me/vivadress/0/2644292766.webp 2x"
                                sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, (max-width: 1199px) 600px, 100vw"
                                type="image/webp"
                              />
                              <source
                                srcSet="https://thumb.braavo.me/vivadress/400/2644292766.jpg 400w, https://thumb.braavo.me/vivadress/600/2644292766.jpg 600w, https://thumb.braavo.me/vivadress/0/2644292766.jpg 1x, https://thumb.braavo.me/vivadress/0/2644292766.jpg 2x"
                                sizes="(max-width: 575px) 200px, (max-width: 991px) 400px, (max-width: 1199px) 600px, 100vw"
                                type="image/jpeg"
                              />
                              <img
                                loading="lazy"
                                src="https://thumb.braavo.me/vivadress/0/2644292766.jpg"
                                alt="Viva Dress"
                                className="cont-banners-imagem"
                              />
                            </picture>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="cont-separador cont-separador-427 cont-alt-md " />
            <Showcase title="New In" />

            <div className="cont-separador cont-separador-166 cont-alt-md " />
            <FeaturedCategories />

            <div className="cont-separador cont-separador-422 cont-alt-md " />
            <Showcase title="Best sellers" />

            <div className="cont-separador cont-separador-143 cont-alt-md " />
            <div className="cont-limite cont-limite-143 cont-pdd-pq ">
              <ul className="cont-lista cont-lista-143 cont-mgm-l-md ">
                <li
                  className="vitr-grupo-box vitr-grupo-hash-424 conteudo-hash-424 cont-item cont-item-424  cont-mgm-i-md"
                  data-id={424}
                >
                  <div className="cont-fotos">
                    <figure className="cont-fotos-box cont-fotos-hash-238 cont-mgm-s-md">
                      <a href="/cat/70/ate-75-off" className="cont-fotos-link">
                        <picture className="w-full">
                          <img
                            loading="lazy"
                            src="https://thumb.braavo.me/vivadress/0/3809129515.jpg"
                            alt="Viva Dress"
                            className="cont-fotos-imagem mx-auto"
                          />
                        </picture>
                      </a>
                    </figure>
                  </div>
                </li>
              </ul>
            </div>

            <div className="cont-separador cont-separador-425 cont-alt-md " />
            <Showcase title="até 75% off" />

            <div className="cont-separador cont-separador-65 cont-alt-gr " />
            <Instagram />

            <div className="cont-separador cont-separador-64 cont-alt-md " />
            <div className="cont-limite cont-limite-64 cont-pdd-pq ">
              <ul className="cont-lista cont-lista-64 cont-mgm-l-md "></ul>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default MainTransition;
