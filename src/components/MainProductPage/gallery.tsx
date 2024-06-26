import { useEffect } from "react";
import { IProductData } from "../../contexts/types";

interface Props {
  productData: IProductData;
  variation: string;
  slideIndex: number;
  setSlideIndex: (e: number) => void;
}

const Gallery = ({ productData, variation, slideIndex, setSlideIndex }: Props) => {
  const images = [productData, ...productData.gallery];

  const currentVariation = productData.variation_data.find((e) => e.name == variation);

  useEffect(() => {
    return () => {};
  }, [slideIndex]);

  const slideControl = (direction: "prev" | "next") => {
    if (direction === "prev" && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
    if (direction === "next" && slideIndex < images.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <>
      <section className="flex flex-col gap-1.5 lg:w-full">
        <div className="grid gap-4">
          <div className="relative overflow-hidden js-produto-ver-foto">
            {/* image loader */}
            <div className="absolute z-10 flex items-center justify-center w-full h-full text-center bg-white js-produto-ver-foto-loader escondido">
              <svg
                className="h-16 text-black animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx={12}
                  cy={12}
                  r={10}
                  stroke="currentColor"
                  strokeWidth={4}
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>

            {productData.gallery && (
              <div className="flex flex-col-reverse lg:flex-row js-produto-ver-foto-interno js-produto-ver-foto-interno-2581-0">
                {/* image displayed */}
                <div className=" relative order-1 w-full p-1 lg:max-w-4xl">
                  {/* controls */}
                  {productData.gallery.length > 0 && (
                    <>
                      <div
                        className="theme-mode-bg absolute z-10 left-0 px-3 py-2 ml-2.5 border border-solid rounded-full opacity-50 cursor-pointer top-2/4 prod-ver-foto-btn-anterior tail-prod-ver-foto-btn-anterior "
                        onClick={() => slideControl("prev")}
                      >
                        &lt;
                      </div>
                      <div
                        className="theme-mode-bg absolute z-10 right-0 px-3 py-2 mr-3 border border-solid rounded-full opacity-50 cursor-pointer top-2/4 prod-ver-foto-btn-proximo tail-prod-ver-foto-btn-proximo "
                        onClick={() => slideControl("next")}
                      >
                        &gt;
                      </div>
                    </>
                  )}

                  {/* gallery images */}
                  <div className="flex overflow-hidden js-produto-ver-foto-capa">
                    {currentVariation && (
                      <div
                        className="flex-none w-full text-center"
                        style={{
                          transform: `translateX(${slideIndex * -100}%)`,
                          transition: "transform .5s",
                        }}
                      >
                        <img
                          loading="eager"
                          src={
                            currentVariation.imgUrl.length > 0
                              ? currentVariation.imgUrl
                              : "/no-image.jpg"
                          }
                          srcSet={`${
                            currentVariation.imgUrl.length > 0
                              ? currentVariation.imgUrl
                              : "/no-image.jpg"
                          } 600w,${
                            currentVariation.imgUrl.length > 0
                              ? currentVariation.imgUrl
                              : "/no-image.jpg"
                          } 1000w,${
                            currentVariation.imgUrl.length > 0
                              ? currentVariation.imgUrl
                              : "/no-image.jpg"
                          } 2x`}
                          sizes="(max-width: 1199px) 600px, (min-width: 1200px) 1000px"
                          alt="product img"
                          className="img-props inline-block w-full h-full align-middle object-fit"
                        />
                      </div>
                    )}

                    {images.map((product) => (
                      <div
                        key={product.id}
                        className="flex-none w-full text-center"
                        style={{
                          transform: `translateX(${slideIndex * -100}%)`,
                          transition: "transform .5s",
                        }}
                      >
                        <img
                          loading="eager"
                          src={product.imgUrl}
                          srcSet={`${product.imgUrl} 600w,${product.imgUrl} 1000w,${product.imgUrl} 2x`}
                          sizes="(max-width: 1199px) 600px, (min-width: 1200px) 1000px"
                          alt="product img"
                          className="img-props inline-block w-full h-full align-middle object-fit"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* images on the side */}
                <div className="overflow-x-auto flex flex-row lg:flex-col flex-none lg:w-12 gap-2 order-0 ">
                  {/* gallery images */}
                  {currentVariation && (
                    <div
                      className="min-w-[20%] p-1 border border-white border-solid cursor-pointer hover:border-gray-500 tail-prodver-thumbs"
                      onClick={() => setSlideIndex(0)}
                    >
                      <div className="h-full">
                        <img
                          loading="eager"
                          src={
                            currentVariation.imgUrl.length > 0
                              ? currentVariation.imgUrl
                              : "/no-image.jpg"
                          }
                          alt="product img"
                          className="inline-block object-cover w-full h-full align-middle"
                        />
                      </div>
                    </div>
                  )}

                  {images.map((product, index) => (
                    <div
                      key={product.id}
                      className="min-w-[20%] p-1 border border-white border-solid cursor-pointer hover:border-gray-500 tail-prodver-thumbs"
                      onClick={() => setSlideIndex(index + 1)}
                    >
                      <div className="h-full">
                        <img
                          loading="eager"
                          src={product.imgUrl}
                          alt="product img"
                          className="inline-block object-cover w-full h-full align-middle"
                        />
                      </div>
                    </div>
                  ))}

                  {/* video */}
                  {/* <div
                  className="p-1 border border-white border-solid cursor-pointer hover:border-gray-500 tail-prodver-thumbs"
                  // onclick="produtoVerFotosThumb(this, 4);"
                >
                  <div className="relative flex items-center justify-center h-full text-center">
                    <svg
                      className="w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.0}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                      />
                    </svg>
                  </div>
                </div> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
