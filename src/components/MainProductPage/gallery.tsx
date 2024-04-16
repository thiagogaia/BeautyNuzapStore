import { IProductData } from "../../contexts/types";

interface Props {
  productData: IProductData;
}

const Gallery = ({ productData }: Props) => {
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
              <div className=" flex flex-row js-produto-ver-foto-interno js-produto-ver-foto-interno-2581-0">
                {/* image displayed */}
                <div className="relative order-1 w-full p-1 ml-2 border border-white border-solid lg:max-w-4xl">
                  <div
                    className="absolute left-0 px-2 py-1 ml-2 text-gray-400 bg-white border border-gray-400 border-solid rounded-full opacity-50 cursor-pointer top-2/4 prod-ver-foto-btn-anterior tail-prod-ver-foto-btn-anterior "
                    // onclick="produtoVerFotosSeta(this, 'voltar');"
                  >
                    &lt;
                  </div>
                  <div
                    className="absolute right-0 px-2 py-1 mr-2 text-gray-400 bg-white border border-gray-400 border-solid rounded-full opacity-50 cursor-pointer top-2/4 prod-ver-foto-btn-proximo tail-prod-ver-foto-btn-proximo "
                    // onclick="produtoVerFotosSeta(this, 'avancar');"
                  >
                    &gt;
                  </div>

                  <div
                    className="flex overflow-x-auto js-produto-ver-foto-capa"
                    style={{
                      scrollbarWidth: "none",
                      scrollBehavior: "smooth",
                      scrollSnapType: "x mandatory",
                    }}
                  >
                    {productData.gallery.map((product) => (
                      <div
                        key={product.id}
                        className="flex-none w-full text-center"
                        style={{
                          scrollSnapStop: "always",
                          scrollSnapAlign: "center",
                        }}
                      >
                        <a
                          href={product.imgUrl}
                          className="inline-block w-full"
                          data-fancybox="galeria-produtos"
                          data-src={product.imgUrl}
                          data-caption="product img"
                        >
                          <img
                            loading="eager"
                            src={product.imgUrl}
                            srcSet={`${product.imgUrl} 600w,${product.imgUrl} 1000w,${product.imgUrl} 2x`}
                            sizes="(max-width: 1199px) 600px, (min-width: 1200px) 1000px"
                            alt="product img"
                            className="inline-block w-full h-full align-middle object-fit"
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                {/* images on the side */}
                <div className="flex flex-col flex-none w-12 gap-2 order-0 ">
                  {productData.gallery.map((product) => (
                    <div
                      key={product.id}
                      className="p-1 border border-white border-solid cursor-pointer hover:border-gray-500 tail-prodver-thumbs"
                      // onclick="produtoVerFotosThumb(this, 0);"
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

                  <div className="flex-none w-full" />
                  <div className="flex-none w-full" />
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
