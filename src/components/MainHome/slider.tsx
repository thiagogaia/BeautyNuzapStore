import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { useContext } from "react";
import { StoreContext } from "../../contexts/Store";

const Slider = () => {
  const { storeData } = useContext(StoreContext);
  const slides = storeData.business.slides;

  console.log(slides);

  return (
    <>
      {slides.length > 0 && (
        <>
          <div className="cont-limite cont-limite-120  esconder-dk esconder-mn ">
            <ul className="cont-lista cont-lista-120  esconder-dk esconder-mn ">
              <li className="cont-item-bann-slider " data-id={120}>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  autoplay={{ delay: 5000 }}
                  css-mode="true"
                  effect="slide"
                  loop={true}
                  navigation={true}
                  pagination={{ clickable: true }}
                  resizeObserver={true}
                  className="w-full"
                >
                  {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <a
                        href={slide.link}
                        style={{ pointerEvents: slide.link.length > 0 ? "auto" : "none" }}
                      >
                        <picture>
                          <source
                            srcSet={slide.image_mobile}
                            media="(resolution:1x) and (max-width:639px)"
                          />
                          <source
                            srcSet={slide.image_mobile}
                            media="(resolution:2x) and (max-width:639px)"
                          />
                          <source
                            srcSet={slide.image_mobile}
                            media="(resolution:1x) and (min-width:640px) and (max-width:1023px)"
                          />
                          <source
                            srcSet={slide.image_mobile}
                            media="(resolution:2x) and (min-width:640px) and (max-width:1023px)"
                          />
                          <source
                            srcSet={slide.image_mobile}
                            media="(resolution:1x) and (min-width:1024px)"
                          />
                          <source
                            srcSet={slide.image_mobile}
                            media="(resolution:2x) and (min-width:1024px)"
                          />
                          <img
                            loading="eager"
                            src={slide.image_mobile}
                            alt="store"
                            className="w-full"
                          />
                        </picture>
                      </a>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </li>
            </ul>
          </div>

          <div className="cont-separador cont-separador-37  esconder-ip esconder-fb " />
          <div className="cont-limite cont-limite-37  esconder-ip esconder-fb ">
            <ul className="cont-lista cont-lista-37  esconder-ip esconder-fb ">
              <li className="cont-item-bann-slider " data-id={37} style={{ userSelect: "none" }}>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  autoplay={{ delay: 5000 }}
                  css-mode="true"
                  effect="slide"
                  loop={true}
                  navigation={true}
                  pagination={{ clickable: true }}
                  resizeObserver={true}
                  className="w-full"
                >
                  {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <a
                        href={slide.link}
                        style={{ pointerEvents: slide.link.length > 0 ? "auto" : "none" }}
                      >
                        <picture>
                          <source
                            srcSet={slide.image_desktop}
                            media="(resolution:1x) and (max-width:639px)"
                          />
                          <source
                            srcSet={slide.image_desktop}
                            media="(resolution:2x) and (max-width:639px)"
                          />
                          <source
                            srcSet={slide.image_desktop}
                            media="(resolution:1x) and (min-width:640px) and (max-width:1023px)"
                          />
                          <source
                            srcSet={slide.image_desktop}
                            media="(resolution:2x) and (min-width:640px) and (max-width:1023px)"
                          />
                          <source
                            srcSet={slide.image_desktop}
                            media="(resolution:1x) and (min-width:1024px)"
                          />
                          <source
                            srcSet={slide.image_desktop}
                            media="(resolution:2x) and (min-width:1024px)"
                          />
                          <img
                            loading="eager"
                            src={slide.image_desktop}
                            alt="store"
                            className="w-full"
                          />
                        </picture>
                      </a>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </li>
            </ul>
          </div>
        </>
      )}
      <div className="cont-separador cont-separador-119 cont-alt-md " />
      <div className="cont-limite cont-limite-119 cont-pdd-pq ">
        <ul className="cont-lista cont-lista-119 cont-mgm-l-md ">
          <li
            className="vitr-grupo-box vitr-grupo-hash-141 conteudo-hash-141 cont-item cont-item-141  cont-mgm-i-md"
            data-id={141}
          >
            <div className="cont-fotos"></div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Slider;
