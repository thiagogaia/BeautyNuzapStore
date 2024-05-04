import { useContext, useRef, useState } from "react";
import InstagramCard from "./instagramCard";
import { StoreContext } from "../../contexts/Store";

const Instagram = () => {
  const { storeData } = useContext(StoreContext);
  const instagramUrl = storeData.business.social_links.instagram;
  const invlidStrings = ["", "https:", "www.instagram.com"];
  const instagramUserName = instagramUrl.split("/").filter((e) => !invlidStrings.includes(e))[0];

  const instagramImages = [
    {
      link: "/instagram/404/1707160798",
      img: "/3586542259.jpg",
    },
    {
      link: "/instagram/403/1706724600",
      img: "/2707333948.jpg",
    },
    {
      link: "/instagram/402/1705073465",
      img: "/989589331.jpg",
    },
    {
      link: "/instagram/401/1704904821",
      img: "/1298480547.jpg",
    },
    {
      link: "/instagram/404/1707160798",
      img: "/3586542259.jpg",
    },
    {
      link: "/instagram/403/1706724600",
      img: "/2707333948.jpg",
    },
    {
      link: "/instagram/402/1705073465",
      img: "/989589331.jpg",
    },
    {
      link: "/instagram/401/1704904821",
      img: "/1298480547.jpg",
    },
    {
      link: "/instagram/402/1705073465",
      img: "/989589331.jpg",
    },
    {
      link: "/instagram/401/1704904821",
      img: "/1298480547.jpg",
    },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const container = useRef<HTMLUListElement>(null);

  const scroll = () => {
    if (container.current !== null) {
      setScrollPosition(container.current.scrollLeft);
    }
  };

  const controls = (direction: "prev" | "next") => {
    if (container.current !== null) {
      const ul = container.current;

      if (direction === "prev" && scrollPosition > 0) {
        ul.scrollTo(scrollPosition - ul.offsetWidth, 0);
        setScrollPosition(scrollPosition - ul.offsetWidth);
      }
      if (direction === "next" && ul.scrollLeft + ul.offsetWidth !== ul.scrollWidth) {
        ul.scrollTo(scrollPosition + ul.offsetWidth, 0);
        setScrollPosition(scrollPosition + ul.offsetWidth);
      }
    }
  };

  return (
    <>
      <div className="cont-limite cont-limite-65 cont-pdd-pq ">
        <h2 className="tt vitr-tt cont-tt cont-ali-ip-c cont-ali-fb-c cont-ali-dk-c cont-ali-mn-c cont-tt-65">
          <span className="theme-mode-color tt-texto">INSTAGRAM</span>
        </h2>
        <ul className="cont-lista cont-lista-65 cont-mgm-l-md ">
          <li
            className="vitr-grupo-box vitr-grupo-hash-66 conteudo-hash-66 cont-item cont-item-66  cont-mgm-i-md"
            data-id={66}
          >
            <section className="relative flex items-center gap-2 overflow-hidden js-tail-listagem-prod">
              <button
                onClick={() => controls("prev")}
                aria-label="Voltar Slider para os produtos anteriores"
                className="absolute left-0 z-10 p-2 pl-0.5 tail-listagem-seta tail-listagem-inst-seta"
              >
                <div className="theme-mode-bg grid flex-shrink-0 px-2 border border-solid rounded-full place-content-center tail-listagem-seta-interno tail-listagem-inst-seta-interno ev-listagem-seta-interno">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="h-3 md:h-4 -ml-0.5 pointer-events-none ev-listagem-seta-icone"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </div>
              </button>

              <ul
                onScroll={scroll}
                ref={container}
                className="flex flex-grow ml-2 overflow-x-scroll tail-listagem-inst-slider-container js-tail-listagem-prod-lista"
              >
                {instagramImages.map((data, index) => (
                  <InstagramCard key={index} {...data} />
                ))}
              </ul>

              <button
                onClick={() => controls("next")}
                aria-label="Avançar Slider para os próximos produtos"
                className="absolute right-0 p-2 pr-0.5 tail-listagem-seta tail-listagem-inst-seta"
              >
                <div className="theme-mode-bg grid flex-shrink-0 px-2 border border-solid rounded-full place-content-center tail-listagem-seta-interno tail-listagem-inst-seta-interno ev-listagem-seta-interno">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="h-3 md:h-4 -mr-0.5 pointer-events-none"
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

            <div className=" mt-2">
              <a
                href={instagramUrl}
                className="flex items-center justify-center gap-2 mx-auto divide-x divide-gray-300 w-max divide-solid"
                target="_blank"
              >
                <img
                  src="/vitr-insta-colorido.svg"
                  className="flex-shrink-0"
                  alt="Ícone do Instagram"
                />
                <span className="pl-2">Siga @{instagramUserName}</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Instagram;
