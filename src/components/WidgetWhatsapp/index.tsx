interface props {
  numero: string;
}
const WidgetWhatsapp = ({ numero }: props) => {
  return (
    <>
      <a
        href={"https://wa.me/" + numero}
        target="_blank"
        title="Atendimento via WhatsApp!"
        data-seta-posicao="cima"
        className=" fixed z-50 flex items-center justify-center p-3 overflow-visible text-sm no-underline uppercase bg-green-500 shadow-md text-white ev-whatsapp-fixo ev-whatsapp-fixo-fundo right-5 bottom-5 rounded-full"
      >
        <span className="animate-ping rounded-full w-full h-full absolute bg-green-500 tail-whatsapp-fixo-efeito ev-whatsapp-fixo-fundo"></span>
        <svg
          className="z-50 fill-current ev-whatsapp-fixo-icone"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="23px"
          height="24px"
          viewBox="0 0 23 24"
          enableBackground="new 0 0 23 24"
        >
          <g>
            <g>
              <path
                id="WhatsApp"
                d="M23,11.193c0,6.185-5.061,11.193-11.295,11.193c-1.969,0-3.834-0.512-5.47-1.406L0,23
              l2.044-6.006c-1.022-1.687-1.61-3.68-1.61-5.775C0.409,5.009,5.469,0,11.705,0C17.939,0,23,5.009,23,11.193z M11.705,1.789
              c-5.24,0-9.482,4.217-9.482,9.404c0,2.07,0.665,3.961,1.814,5.52l-1.175,3.502l3.654-1.15c1.508,0.996,3.297,1.559,5.214,1.559
              c5.213,0,9.48-4.217,9.48-9.43S16.943,1.789,11.705,1.789z M17.403,13.774c-0.077-0.103-0.255-0.179-0.536-0.332
              c-0.281-0.128-1.637-0.792-1.892-0.895s-0.435-0.128-0.613,0.128c-0.179,0.281-0.716,0.895-0.869,1.073s-0.332,0.204-0.587,0.077
              c-0.281-0.129-1.176-0.436-2.225-1.355c-0.817-0.715-1.379-1.635-1.533-1.891c-0.153-0.281-0.025-0.435,0.129-0.562
              c0.127-0.127,0.28-0.332,0.408-0.485s0.179-0.281,0.281-0.46c0.102-0.179,0.051-0.332-0.025-0.485
              C9.864,8.459,9.328,7.104,9.098,6.542c-0.23-0.536-0.46-0.46-0.613-0.46S8.126,6.057,7.948,6.057S7.462,6.133,7.207,6.389
              C6.951,6.67,6.235,7.334,6.235,8.689c0,1.354,0.997,2.657,1.125,2.836c0.128,0.18,1.917,3.041,4.728,4.141
              c2.811,1.099,2.811,0.74,3.322,0.689c0.511-0.051,1.635-0.664,1.865-1.303C17.48,14.439,17.48,13.902,17.403,13.774z"
              />
            </g>
          </g>
        </svg>
      </a>
    </>
  );
};

export default WidgetWhatsapp;
