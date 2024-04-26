import { useEffect, useState } from "react";

interface Props {
  page: number;
  productListLength: number;
  maxPagesExibition?: number;
  totalPages?: number;
}

const Pagination = ({ page, productListLength, maxPagesExibition = 3, totalPages = 1 }: Props) => {
  const pages = [...Array(totalPages).keys()];
  const [pagesDisplayed, setPagesDisplayed] = useState<number[]>([]);

  useEffect(() => {
    const currentPagesDisplayed = pages.slice(page - 1, page - 1 + maxPagesExibition);
    const nextPagesDisplayed = pages.slice(page - 2, page - 2 + maxPagesExibition);
    const lastPagesDisplayed = pages.slice(
      page - maxPagesExibition,
      page - maxPagesExibition + maxPagesExibition
    );
    setPagesDisplayed(currentPagesDisplayed);

    if (nextPagesDisplayed.length > 2) {
      if (productListLength >= 12) {
        setPagesDisplayed(nextPagesDisplayed);
      } else {
        setPagesDisplayed(lastPagesDisplayed);
      }
    } else {
      if (nextPagesDisplayed.length > 0) {
        setPagesDisplayed(pagesDisplayed);
      } else {
        setPagesDisplayed(currentPagesDisplayed);
      }
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, productListLength]);

  return (
    <>
      <div className="">
        <div className="flex justify-center gap-2 mx-2 tail-paginacao-manual ">
          <button
            style={{ cursor: page === 1 ? "auto" : "pointer" }}
            className="w-8 h-8 grid place-content-center rounded-lg text-gray-600 transition-colors hover:bg-gray-200 tail-paginacao-btn"
          >
            <a href={`?page=${page - 1}`} style={{ pointerEvents: page === 1 ? "none" : "auto" }}>
              <span className="sr-only">Anterior</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 mr-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </a>
          </button>

          {/* pages */}
          {pagesDisplayed.map((n) => (
            <a
              key={n}
              href={`?page=${n + 1}`}
              className={
                n + 1 === page
                  ? "w-8 h-8 grid place-content-center rounded-lg bg-black text-white font-bold transition-opacity hover:opacity-70 ev-paginacao-btn-ativo tail-paginacao-btn-ativo"
                  : "w-8 h-8 grid place-content-center rounded-lg text-gray-600 transition-colors hover:bg-gray-200 tail-paginacao-btn"
              }
              data-seta-posicao="cima"
            >
              {n + 1}
            </a>
          ))}

          <button
            style={{ cursor: productListLength < 12 ? "auto" : "pointer" }}
            className="w-8 h-8 grid place-content-center rounded-lg text-gray-600 transition-colors hover:bg-gray-200 tail-paginacao-btn"
          >
            <a
              href={`?page=${page + 1}`}
              style={{ pointerEvents: productListLength < 12 ? "none" : "auto" }}
            >
              <span className="sr-only">Próximo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 ml-0.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
