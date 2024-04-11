import "./style.css";

const Payment = () => {
  return (
    <>
      <header className="grid py-4 bg-white border-b border-gray-300 border-solid lg:grid-cols-2 tail-carr-topo js-appec-escondido">
        <div className="w-full px-4 ml-auto lg:max-w-screen-sm lg:px-8">
          <a href="/carrinho" className="block ml-auto">
            <img
              src="https://www.vivadress.com.br/logo/logo_carrinho.jpg"
              alt="Viva Dress"
              title="Viva Dress"
              className="max-h-10 tail-carr-topo-logo"
            />
          </a>
        </div>
      </header>
      <main id="principal" className="grid lg:grid-cols-2 tail-carrinho-main">
        <article id="conteudo" className="mt-6 mb-8 lg:my-16">
          <div className="px-4 text-gray-800 lg:px-8 lg:max-w-screen-sm lg:ml-auto">
            <h1 className="hidden text-xl font-medium">Checkout</h1>
            <form
              action="/carrinho/cliente"
              autoComplete="off"
              method="post"
              noValidate="novalidate"
              data-vale-desconto={0.0}
              data-total="199.90"
              className="js-carrinho-cliente-form js-recaptcha"
            >
              <div>
                <section>
                  <div className="flex flex-wrap items-center justify-between mb-3 gap-x-3">
                    <h2 className="text-xl font-medium leading-none">Contato</h2>
                    <div className="flex items-center gap-1 text-sm">
                      <span>Possui uma conta?</span>
                      <a
                        href="/login?redir=%2Fcarrinho%2Fcliente"
                        rel="nofollow"
                        className="text-sm text-blue-500 underline hover:no-underline"
                      >
                        Fazer Login
                      </a>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <div
                      className="relative grid tail-carrinho-form-geral js-tail-form-geral  border-transparent form-div-cliente-email"
                      data-campo="Cliente.email"
                    >
                      <label
                        className="absolute text-sm text-gray-500 top-3.5 left-2 cursor-pointer transition-all tail-carrinho-form-titulo"
                        htmlFor="ClienteEmail"
                      >
                        E-mail
                        <span className="ml-1 text-sm text-red-500 align-bottom">*</span>
                      </label>
                      <div className="grid js-tail-form-text-lista">
                        <input
                          type="email"
                          autoComplete="email"
                          data-rotulo="E-mail*"
                          id="ClienteEmail"
                          name="dados[Cliente][email]"
                          placeholder="E-mail"
                          className="h-12 px-2 text-sm placeholder-transparent bg-white border border-gray-300 border-solid rounded-md outline-none hover:border-blue-500 focus:border-blue-500 ring-0 tail-carrinho-form-campo js-carrinho-cliente-email"
                          style={{
                            backgroundImage: 'url("data:image/png',
                            backgroundRepeat: "no-repeat",
                            backgroundSize: 20,
                            backgroundPosition: "97% center",
                            cursor: "auto",
                          }}
                          data-temp-mail-org={0}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-3 js-imask-tel-geral">
                      <div
                        className="relative flex-skrink-0 js-tail-form-geral self-start  border-transparent form-div-cliente-tel-1-pais"
                        data-campo="Cliente.tel_1_pais"
                      >
                        <label
                          className="absolute top-0 z-10 text-xs leading-6 text-gray-500 left-2 pointer-events-none"
                          htmlFor="ClienteTel1Pais"
                        >
                          País
                        </label>
                        <div className="">
                          <div className="relative overflow-hidden relative">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={3}
                              stroke="currentColor"
                              className="absolute h-4 pl-1.5 text-gray-500 transform border-l border-gray-300 border-solid pointer-events-none right-2 top-2/4 -translate-y-2/4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                            <select
                              autoComplete="tel-country-code"
                              data-rotulo="País"
                              id="ClienteTel1Pais"
                              name="dados[Cliente][tel_1_pais]"
                              className="border border-gray-300 border-solid rounded-md w-full h-12 pt-4 pl-2 pr-8 text-sm bg-gray-50 outline-none appearance-none cursor-pointer hover:border-blue-500 tail-carrinho-form-campo js-imask-tel-pais"
                            >
                              <option value={55}>+55 🇧🇷</option>
                              <option value={1}>&nbsp;&nbsp;+1 🇺🇸</option>
                              <option value={7}>&nbsp;&nbsp;+7 🇷🇺</option>
                              <option value={20}>+20 🇪🇬</option>
                              <option value={27}>+27 🇿🇦</option>
                              <option value={30}>+30 🇬🇷</option>
                              <option value={31}>+31 🇳🇱</option>
                              <option value={32}>+32 🇧🇪</option>
                              <option value={33}>+33 🇫🇷</option>
                              <option value={34}>+34 🇪🇸</option>
                              <option value={36}>+36 🇭🇺</option>
                              <option value={39}>+39 🇮🇹</option>
                              <option value={40}>+40 🇷🇴</option>
                              <option value={41}>+41 🇨🇭</option>
                              <option value={43}>+43 🇦🇹</option>
                              <option value={44}>+44 🇬🇧</option>
                              <option value={45}>+45 🇩🇰</option>
                              <option value={46}>+46 🇸🇪</option>
                              <option value={47}>+47 🇳🇴</option>
                              <option value={48}>+48 🇵🇱</option>
                              <option value={49}>+49 🇩🇪</option>
                              <option value={51}>+51 🇵🇪</option>
                              <option value={52}>+52 🇲🇽</option>
                              <option value={53}>+53 🇨🇺</option>
                              <option value={54}>+54 🇦🇷</option>
                              <option value={56}>+56 🇨🇱</option>
                              <option value={57}>+57 🇨🇴</option>
                              <option value={58}>+58 🇻🇪</option>
                              <option value={60}>+60 🇲🇾</option>
                              <option value={61}>+61 🇦🇺</option>
                              <option value={62}>+62 🇮🇩</option>
                              <option value={63}>+63 🇵🇭</option>
                              <option value={64}>+64 🇳🇿</option>
                              <option value={65}>+65</option>
                              <option value={66}>+66 🇹🇭</option>
                              <option value={81}>+81 🇯🇵</option>
                              <option value={82}>+82 🇰🇷</option>
                              <option value={84}>+84 🇻🇳</option>
                              <option value={86}>+86 🇨🇳</option>
                              <option value={90}>+90 🇹🇷</option>
                              <option value={91}>+91 🇮🇳</option>
                              <option value={92}>+92 🇵🇰</option>
                              <option value={93}>+93 🇦🇫</option>
                              <option value={94}>+94 🇱🇰</option>
                              <option value={95}>+95 🇲🇲</option>
                              <option value={98}>+98 🇮🇷</option>
                              <option value={211}>+211</option>
                              <option value={212}>+212</option>
                              <option value={213}>+213</option>
                              <option value={216}>+216</option>
                              <option value={218}>+218</option>
                              <option value={220}>+220</option>
                              <option value={221}>+221</option>
                              <option value={222}>+222</option>
                              <option value={223}>+223</option>
                              <option value={224}>+224</option>
                              <option value={225}>+225</option>
                              <option value={226}>+226</option>
                              <option value={227}>+227</option>
                              <option value={228}>+228</option>
                              <option value={229}>+229</option>
                              <option value={230}>+230</option>
                              <option value={231}>+231</option>
                              <option value={232}>+232</option>
                              <option value={233}>+233</option>
                              <option value={234}>+234</option>
                              <option value={235}>+235</option>
                              <option value={236}>+236</option>
                              <option value={237}>+237</option>
                              <option value={238}>+238</option>
                              <option value={239}>+239</option>
                              <option value={240}>+240</option>
                              <option value={241}>+241</option>
                              <option value={242}>+242</option>
                              <option value={244}>+244</option>
                              <option value={245}>+245</option>
                              <option value={246}>+246</option>
                              <option value={248}>+248</option>
                              <option value={249}>+249</option>
                              <option value={250}>+250</option>
                              <option value={251}>+251</option>
                              <option value={252}>+252</option>
                              <option value={253}>+253</option>
                              <option value={254}>+254</option>
                              <option value={255}>+255</option>
                              <option value={256}>+256</option>
                              <option value={257}>+257</option>
                              <option value={258}>+258</option>
                              <option value={260}>+260</option>
                              <option value={261}>+261</option>
                              <option value={262}>+262</option>
                              <option value={263}>+263</option>
                              <option value={264}>+264</option>
                              <option value={265}>+265</option>
                              <option value={266}>+266</option>
                              <option value={267}>+267</option>
                              <option value={268}>+268</option>
                              <option value={269}>+269</option>
                              <option value={290}>+290</option>
                              <option value={291}>+291</option>
                              <option value={297}>+297</option>
                              <option value={298}>+298</option>
                              <option value={299}>+299</option>
                              <option value={350}>+350</option>
                              <option value={351}>+351 🇵🇹</option>
                              <option value={352}>+352</option>
                              <option value={353}>+353 🇮🇪</option>
                              <option value={354}>+354 🇮🇸</option>
                              <option value={355}>+355</option>
                              <option value={356}>+356</option>
                              <option value={357}>+357</option>
                              <option value={358}>+358</option>
                              <option value={359}>+359</option>
                              <option value={370}>+370</option>
                              <option value={371}>+371</option>
                              <option value={372}>+372</option>
                              <option value={373}>+373</option>
                              <option value={374}>+374</option>
                              <option value={375}>+375</option>
                              <option value={376}>+376</option>
                              <option value={377}>+377</option>
                              <option value={378}>+378</option>
                              <option value={380}>+380 🇺🇦</option>
                              <option value={381}>+381</option>
                              <option value={382}>+382</option>
                              <option value={385}>+385 🇭🇷</option>
                              <option value={386}>+386</option>
                              <option value={387}>+387</option>
                              <option value={389}>+389</option>
                              <option value={420}>+420</option>
                              <option value={421}>+421</option>
                              <option value={423}>+423</option>
                              <option value={500}>+500</option>
                              <option value={501}>+501</option>
                              <option value={502}>+502</option>
                              <option value={503}>+503</option>
                              <option value={504}>+504</option>
                              <option value={505}>+505</option>
                              <option value={506}>+506 🇨🇷</option>
                              <option value={507}>+507 🇵🇦</option>
                              <option value={508}>+508</option>
                              <option value={509}>+509</option>
                              <option value={590}>+590</option>
                              <option value={591}>+591</option>
                              <option value={592}>+592</option>
                              <option value={593}>+593</option>
                              <option value={594}>+594</option>
                              <option value={595}>+595 🇵🇾</option>
                              <option value={596}>+596</option>
                              <option value={597}>+597</option>
                              <option value={598}>+598 🇺🇾</option>
                              <option value={599}>+599</option>
                              <option value={670}>+670</option>
                              <option value={672}>+672</option>
                              <option value={673}>+673</option>
                              <option value={674}>+674</option>
                              <option value={675}>+675</option>
                              <option value={676}>+676</option>
                              <option value={677}>+677</option>
                              <option value={678}>+678</option>
                              <option value={679}>+679</option>
                              <option value={680}>+680</option>
                              <option value={681}>+681</option>
                              <option value={682}>+682</option>
                              <option value={683}>+683</option>
                              <option value={684}>+684</option>
                              <option value={686}>+686</option>
                              <option value={687}>+687</option>
                              <option value={688}>+688</option>
                              <option value={689}>+689</option>
                              <option value={690}>+690</option>
                              <option value={691}>+691</option>
                              <option value={692}>+692</option>
                              <option value={850}>+850</option>
                              <option value={852}>+852</option>
                              <option value={853}>+853</option>
                              <option value={855}>+855</option>
                              <option value={856}>+856</option>
                              <option value={880}>+880</option>
                              <option value={886}>+886</option>
                              <option value={960}>+960</option>
                              <option value={961}>+961</option>
                              <option value={962}>+962</option>
                              <option value={963}>+963 🇸🇾</option>
                              <option value={964}>+964</option>
                              <option value={965}>+965</option>
                              <option value={966}>+966</option>
                              <option value={967}>+967</option>
                              <option value={968}>+968</option>
                              <option value={970}>+970</option>
                              <option value={971}>+971</option>
                              <option value={972}>+972 🇮🇱</option>
                              <option value={973}>+973</option>
                              <option value={974}>+974</option>
                              <option value={975}>+975</option>
                              <option value={976}>+976</option>
                              <option value={977}>+977</option>
                              <option value={992}>+992</option>
                              <option value={994}>+994</option>
                              <option value={995}>+995</option>
                              <option value={996}>+996</option>
                              <option value={998}>+998</option>
                              <option value={1242}>+1242</option>
                              <option value={1246}>+1246</option>
                              <option value={1264}>+1264</option>
                              <option value={1268}>+1268</option>
                              <option value={1284}>+1284</option>
                              <option value={1340}>+1340</option>
                              <option value={1345}>+1345</option>
                              <option value={1441}>+1441</option>
                              <option value={1473}>+1473</option>
                              <option value={1649}>+1649</option>
                              <option value={1664}>+1664</option>
                              <option value={1670}>+1670</option>
                              <option value={1671}>+1671</option>
                              <option value={1684}>+1684</option>
                              <option value={1758}>+1758</option>
                              <option value={1767}>+1767</option>
                              <option value={1784}>+1784</option>
                              <option value={1787}>+1787</option>
                              <option value={1809}>+1809</option>
                              <option value={1868}>+1868</option>
                              <option value={1869}>+1869</option>
                              <option value={1876}>+1876</option>
                              <option value={7370}>+7370</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative grid tail-carrinho-form-geral js-tail-form-geral flex-grow  border-transparent form-div-cliente-tel-1"
                        data-campo="Cliente.tel_1"
                      >
                        <label
                          className="absolute text-sm text-gray-500 top-3.5 left-2 cursor-pointer transition-all tail-carrinho-form-titulo"
                          htmlFor="ClienteTel1"
                        >
                          Celular
                          <span className="ml-1 text-sm text-red-500 align-bottom">*</span>
                        </label>
                        <div className="grid js-tail-form-text-lista">
                          <input
                            type="text"
                            autoComplete="tel-national"
                            data-rotulo="Celular*"
                            id="ClienteTel1"
                            inputMode="numeric"
                            name="dados[Cliente][tel_1]"
                            placeholder="Celular"
                            className="h-12 px-2 text-sm placeholder-transparent bg-white border border-gray-300 border-solid rounded-md outline-none hover:border-blue-500 focus:border-blue-500 ring-0 tail-carrinho-form-campo js-imask-tel-campo js-imask-tel-campo-1 js-carrinho-cliente-tel1"
                            data-mascara-regra="(##) #####-####"
                            maxLength={20}
                            data-mascara-validar={1}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="">
                  <h2 className="mt-12 pb-3 text-xl font-medium leading-none">Seus Dados</h2>
                  <div className="grid gap-3">
                    <div
                      className="relative grid tail-carrinho-form-geral js-tail-form-geral  border-transparent form-div-cliente-nome"
                      data-campo="Cliente.nome"
                    >
                      <label
                        className="absolute text-sm text-gray-500 top-3.5 left-2 cursor-pointer transition-all tail-carrinho-form-titulo"
                        htmlFor="ClienteNome"
                      >
                        Nome completo
                        <span className="ml-1 text-sm text-red-500 align-bottom">*</span>
                      </label>
                      <div className="grid js-tail-form-text-lista">
                        <input
                          type="text"
                          autoComplete="name"
                          data-rotulo="Nome completo*"
                          id="ClienteNome"
                          name="dados[Cliente][nome]"
                          onBlur="carrinhoClienteDestinatario()"
                          placeholder="Nome"
                          className="h-12 px-2 text-sm placeholder-transparent bg-white border border-gray-300 border-solid rounded-md outline-none hover:border-blue-500 focus:border-blue-500 ring-0 tail-carrinho-form-campo js-carrinho-cliente-nome"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="relative grid gap-3">
                        <div
                          className="relative grid tail-carrinho-form-geral js-tail-form-geral js-form-cpf-geral  border-transparent form-div-cliente-cpf"
                          data-campo="Cliente.cpf"
                        >
                          <label
                            className="absolute text-sm text-gray-500 top-3.5 left-2 cursor-pointer transition-all tail-carrinho-form-titulo"
                            htmlFor="ClienteCpf"
                          >
                            CPF
                            <span className="ml-1 text-sm text-red-500 align-bottom">*</span>
                          </label>
                          <div className="grid js-tail-form-text-lista">
                            <input
                              type="text"
                              data-rotulo="CPF*"
                              id="ClienteCpf"
                              inputMode="numeric"
                              maxLength={14}
                              name="dados[Cliente][cpf]"
                              placeholder="000.000.000-00"
                              className="h-12 px-2 text-sm placeholder-transparent bg-white border border-gray-300 border-solid rounded-md outline-none hover:border-blue-500 focus:border-blue-500 ring-0 tail-carrinho-form-campo js-imask-cpf js-carrinho-cliente-cpf"
                              data-mascara-regra="###.###.###-##"
                              autoComplete="off"
                              data-mascara-validar={1}
                            />
                          </div>
                        </div>
                        <div
                          className="relative grid tail-carrinho-form-geral js-tail-form-geral js-form-documento escondido  border-transparent form-div-cliente-documento"
                          data-campo="Cliente.documento"
                        >
                          <label
                            className="absolute text-sm text-gray-500 top-3.5 left-2 cursor-pointer transition-all tail-carrinho-form-titulo"
                            htmlFor="ClienteDocumento"
                          >
                            Passaporte ou ID
                            <span className="ml-1 text-sm text-red-500 align-bottom">*</span>
                          </label>
                          <div className="grid js-tail-form-text-lista">
                            <input
                              type="text"
                              data-rotulo="Passaporte ou ID*"
                              id="ClienteDocumento"
                              maxLength={14}
                              name="dados[Cliente][documento]"
                              placeholder="Passaporte ou ID"
                              className="h-12 px-2 text-sm placeholder-transparent bg-white border border-gray-300 border-solid rounded-md outline-none hover:border-blue-500 focus:border-blue-500 ring-0 tail-carrinho-form-campo js-carrinho-cliente-documento"
                            />
                          </div>
                        </div>
                        <input
                          type="hidden"
                          data-rotulo=""
                          id="ClienteEstrangeiro"
                          name="dados[Cliente][estrangeiro]"
                          defaultValue={0}
                          className=""
                        />
                      </div>
                      <div className="relative grid gap-3">
                        <div
                          className="relative grid tail-carrinho-form-geral js-tail-form-geral  border-transparent form-div-cliente-nascimento"
                          data-campo="Cliente.nascimento"
                        >
                          <label
                            className="absolute text-sm text-gray-500 top-3.5 left-2 cursor-pointer transition-all tail-carrinho-form-titulo"
                            htmlFor="ClienteNascimento"
                          >
                            Nascimento
                            <span className="text-xs text-gray-500 align-baseline">
                              (dd/mm/aaaa)
                            </span>
                          </label>
                          <div className="grid js-tail-form-text-lista">
                            <input
                              type="text"
                              autoComplete="bday"
                              data-rotulo="Nascimento"
                              id="ClienteNascimento"
                              inputMode="numeric"
                              name="dados[Cliente][nascimento]"
                              obs="(dd/mm/aaaa)"
                              placeholder="dd/mm/aaaa"
                              className="h-12 px-2 text-sm placeholder-transparent bg-white border border-gray-300 border-solid rounded-md outline-none hover:border-blue-500 focus:border-blue-500 ring-0 tail-carrinho-form-campo js-imask-nascimento"
                              data-mascara-regra="##/##/####"
                              maxLength={10}
                              data-mascara-validar={1}
                            />
                          </div>
                        </div>
                        <div
                          className="js-tail-form-geral absolute p-1 right-2 top-2.5  border-transparent form-div-cliente-nascimento-vazio"
                          data-campo="Cliente.nascimento_vazio"
                        >
                          <input
                            type="hidden"
                            name="dados[Cliente][nascimento_vazio]"
                            defaultValue=""
                          />
                          <div className="">
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                data-rotulo=""
                                id="ClienteNascimentoVazio1"
                                name="dados[Cliente][nascimento_vazio]"
                                className="relative h-5 overflow-hidden rounded-full appearance-none cursor-pointer w-9 tail-carrinho-checkbox-switch"
                                defaultValue={1}
                              />
                              <label
                                className="pl-1 cursor-pointer text-xs"
                                htmlFor="ClienteNascimentoVazio1"
                              >
                                Não informar
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="">
                  <div className="grid gap-3">
                    <input
                      type="hidden"
                      data-rotulo=""
                      id="ClientePessoa"
                      name="dados[Cliente][pessoa]"
                      defaultValue={1}
                      className=""
                    />
                    <div className="grid gap-3 escondido js-form-juridico">
                      <div
                        className="relative grid tail-carrinho-form-geral js-tail-form-geral  border-transparent form-div-cliente-empresa"
                        data-campo="Cliente.empresa"
                      >
                        <label
                          className="absolute text-sm text-gray-500 top-3.5 left-2 cursor-pointer transition-all tail-carrinho-form-titulo"
                          htmlFor="ClienteEmpresa"
                        >
                          Razão Social
                        </label>
                        <div className="grid js-tail-form-text-lista">
                          <input
                            type="text"
                            data-rotulo="Razão Social"
                            id="ClienteEmpresa"
                            name="dados[Cliente][empresa]"
                            placeholder="Razão Social"
                            className="h-12 px-2 text-sm placeholder-transparent bg-white border border-gray-300 border-solid rounded-md outline-none hover:border-blue-500 focus:border-blue-500 ring-0 tail-carrinho-form-campo js-carrinho-cliente-empresa"
                          />
                        </div>
                      </div>
                      <div className="grid gap-3 lg:grid-cols-3">
                        <div
                          className="relative grid tail-carrinho-form-geral js-tail-form-geral  border-transparent form-div-cliente-cnpj"
                          data-campo="Cliente.cnpj"
                        >
                          <label
                            className="absolute text-sm text-gray-500 top-3.5 left-2 cursor-pointer transition-all tail-carrinho-form-titulo"
                            htmlFor="ClienteCnpj"
                          >
                            CNPJ
                          </label>
                          <div className="grid js-tail-form-text-lista">
                            <input
                              type="text"
                              data-rotulo="CNPJ"
                              id="ClienteCnpj"
                              inputMode="numeric"
                              maxLength={18}
                              name="dados[Cliente][cnpj]"
                              placeholder="00.000.000/0000-00"
                              className="h-12 px-2 text-sm placeholder-transparent bg-white border border-gray-300 border-solid rounded-md outline-none hover:border-blue-500 focus:border-blue-500 ring-0 tail-carrinho-form-campo js-imask-cnpj js-carrinho-cliente-cnpj"
                              data-mascara-regra="##.###.###/####-##"
                              autoComplete="off"
                              data-mascara-validar={1}
                            />
                          </div>
                        </div>
                        <div
                          className="relative grid tail-carrinho-form-geral js-tail-form-geral  border-transparent form-div-cliente-ie"
                          data-campo="Cliente.ie"
                        >
                          <label
                            className="absolute text-sm text-gray-500 top-3.5 left-2 cursor-pointer transition-all tail-carrinho-form-titulo"
                            htmlFor="ClienteIe"
                          >
                            Inscrição Estadual
                          </label>
                          <div className="grid js-tail-form-text-lista">
                            <input
                              type="text"
                              data-rotulo="Inscrição Estadual"
                              id="ClienteIe"
                              maxLength={20}
                              name="dados[Cliente][ie]"
                              placeholder="Inscrição Estadual"
                              className="h-12 px-2 text-sm placeholder-transparent bg-white border border-gray-300 border-solid rounded-md outline-none hover:border-blue-500 focus:border-blue-500 ring-0 tail-carrinho-form-campo"
                            />
                          </div>
                        </div>
                        <div
                          className="relative grid tail-carrinho-form-geral js-tail-form-geral  border-transparent form-div-cliente-im"
                          data-campo="Cliente.im"
                        >
                          <label
                            className="absolute text-sm text-gray-500 top-3.5 left-2 cursor-pointer transition-all tail-carrinho-form-titulo"
                            htmlFor="ClienteIm"
                          >
                            Inscrição Municipal
                          </label>
                          <div className="grid js-tail-form-text-lista">
                            <input
                              type="text"
                              data-rotulo="Inscrição Municipal"
                              id="ClienteIm"
                              maxLength={20}
                              name="dados[Cliente][im]"
                              placeholder="Inscrição Municipal"
                              className="h-12 px-2 text-sm placeholder-transparent bg-white border border-gray-300 border-solid rounded-md outline-none hover:border-blue-500 focus:border-blue-500 ring-0 tail-carrinho-form-campo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="">
                  <div className=" js-carrinho-endereco-novo">
                    <section>
                      <h2 className="mt-12 pb-3 text-xl font-medium leading-none">
                        Endereço de entrega
                      </h2>
                      <div className="grid gap-3">
                        <div className="grid gap-3 lg:grid-cols-2">
                          <div
                            className="relative flex-skrink-0 js-tail-form-geral escondido  border-transparent form-div-endereco-pais"
                            data-campo="Endereco.pais"
                          >
                            <label
                              className="absolute top-0 z-10 text-xs leading-6 text-gray-500 left-2 pointer-events-none"
                              htmlFor="EnderecoPais"
                            >
                              País
                            </label>
                            <div className="">
                              <div className="relative overflow-hidden relative">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={3}
                                  stroke="currentColor"
                                  className="absolute h-4 pl-1.5 text-gray-500 transform border-l border-gray-300 border-solid pointer-events-none right-2 top-2/4 -translate-y-2/4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                  />
                                </svg>
                                <select
                                  data-rotulo="País"
                                  id="EnderecoPais"
                                  name="dados[Endereco][pais]"
                                  placeholder="País"
                                  className="border border-gray-300 border-solid rounded-md w-full h-12 pt-4 pl-2 pr-8 text-sm bg-gray-50 outline-none appearance-none cursor-pointer hover:border-blue-500 tail-carrinho-form-campo js-carrinho-endereco-pais"
                                >
                                  <option value="BR">Brazil</option>
                                  <option value="AF">Afghanistan</option>
                                  <option value="AX">Aland Islands</option>
                                  <option value="AL">Albania</option>
                                  <option value="DZ">Algeria</option>
                                  <option value="AS">American Samoa</option>
                                  <option value="AD">Andorra</option>
                                  <option value="AO">Angola</option>
                                  <option value="AI">Anguilla</option>
                                  <option value="AQ">Antarctica</option>
                                  <option value="AG">Antigua and Barbuda</option>
                                  <option value="AR">Argentina</option>
                                  <option value="AM">Armenia</option>
                                  <option value="AW">Aruba</option>
                                  <option value="AU">Australia</option>
                                  <option value="AT">Austria</option>
                                  <option value="AZ">Azerbaijan</option>
                                  <option value="BS">Bahamas</option>
                                  <option value="BH">Bahrain</option>
                                  <option value="BD">Bangladesh</option>
                                  <option value="BB">Barbados</option>
                                  <option value="BY">Belarus</option>
                                  <option value="BE">Belgium</option>
                                  <option value="BZ">Belize</option>
                                  <option value="BJ">Benin</option>
                                  <option value="BM">Bermuda</option>
                                  <option value="BT">Bhutan</option>
                                  <option value="BO">Bolivia</option>
                                  <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                  <option value="BA">Bosnia and Herzegovina</option>
                                  <option value="BW">Botswana</option>
                                  <option value="BV">Bouvet Island</option>
                                  <option value="IO">British Indian Ocean Territory</option>
                                  <option value="BN">Brunei Darussalam</option>
                                  <option value="BG">Bulgaria</option>
                                  <option value="BF">Burkina Faso</option>
                                  <option value="BI">Burundi</option>
                                  <option value="KH">Cambodia</option>
                                  <option value="CM">Cameroon</option>
                                  <option value="CA">Canada</option>
                                  <option value="CV">Cape Verde</option>
                                  <option value="KY">Cayman Islands</option>
                                  <option value="CF">Central African Republic</option>
                                  <option value="TD">Chad</option>
                                  <option value="CL">Chile</option>
                                  <option value="CN">China</option>
                                  <option value="CX">Christmas Island</option>
                                  <option value="CC">Cocos (Keeling) Islands</option>
                                  <option value="CO">Colombia</option>
                                  <option value="KM">Comoros</option>
                                  <option value="CG">Congo</option>
                                  <option value="CD">
                                    Congo, Democratic Republic of the Congo
                                  </option>
                                  <option value="CK">Cook Islands</option>
                                  <option value="CR">Costa Rica</option>
                                  <option value="CI">Cote D'Ivoire</option>
                                  <option value="HR">Croatia</option>
                                  <option value="CU">Cuba</option>
                                  <option value="CW">Curacao</option>
                                  <option value="CY">Cyprus</option>
                                  <option value="CZ">Czech Republic</option>
                                  <option value="DK">Denmark</option>
                                  <option value="DJ">Djibouti</option>
                                  <option value="DM">Dominica</option>
                                  <option value="DO">Dominican Republic</option>
                                  <option value="EC">Ecuador</option>
                                  <option value="EG">Egypt</option>
                                  <option value="SV">El Salvador</option>
                                  <option value="GQ">Equatorial Guinea</option>
                                  <option value="ER">Eritrea</option>
                                  <option value="EE">Estonia</option>
                                  <option value="ET">Ethiopia</option>
                                  <option value="FK">Falkland Islands (Malvinas)</option>
                                  <option value="FO">Faroe Islands</option>
                                  <option value="FJ">Fiji</option>
                                  <option value="FI">Finland</option>
                                  <option value="FR">France</option>
                                  <option value="GF">French Guiana</option>
                                  <option value="PF">French Polynesia</option>
                                  <option value="TF">French Southern Territories</option>
                                  <option value="GA">Gabon</option>
                                  <option value="GM">Gambia</option>
                                  <option value="GE">Georgia</option>
                                  <option value="DE">Germany</option>
                                  <option value="GH">Ghana</option>
                                  <option value="GI">Gibraltar</option>
                                  <option value="GR">Greece</option>
                                  <option value="GL">Greenland</option>
                                  <option value="GD">Grenada</option>
                                  <option value="GP">Guadeloupe</option>
                                  <option value="GU">Guam</option>
                                  <option value="GT">Guatemala</option>
                                  <option value="GG">Guernsey</option>
                                  <option value="GN">Guinea</option>
                                  <option value="GW">Guinea-Bissau</option>
                                  <option value="GY">Guyana</option>
                                  <option value="HT">Haiti</option>
                                  <option value="HM">Heard Island and Mcdonald Islands</option>
                                  <option value="VA">Holy See (Vatican City State)</option>
                                  <option value="HN">Honduras</option>
                                  <option value="HK">Hong Kong</option>
                                  <option value="HU">Hungary</option>
                                  <option value="IS">Iceland</option>
                                  <option value="IN">India</option>
                                  <option value="ID">Indonesia</option>
                                  <option value="IR">Iran, Islamic Republic of</option>
                                  <option value="IQ">Iraq</option>
                                  <option value="IE">Ireland</option>
                                  <option value="IM">Isle of Man</option>
                                  <option value="IL">Israel</option>
                                  <option value="IT">Italy</option>
                                  <option value="JM">Jamaica</option>
                                  <option value="JP">Japan</option>
                                  <option value="JE">Jersey</option>
                                  <option value="JO">Jordan</option>
                                  <option value="KZ">Kazakhstan</option>
                                  <option value="KE">Kenya</option>
                                  <option value="KI">Kiribati</option>
                                  <option value="KP">Korea, Democratic People's Republic of</option>
                                  <option value="KR">Korea, Republic of</option>
                                  <option value="XK">Kosovo</option>
                                  <option value="KW">Kuwait</option>
                                  <option value="KG">Kyrgyzstan</option>
                                  <option value="LA">Lao People's Democratic Republic</option>
                                  <option value="LV">Latvia</option>
                                  <option value="LB">Lebanon</option>
                                  <option value="LS">Lesotho</option>
                                  <option value="LR">Liberia</option>
                                  <option value="LY">Libyan Arab Jamahiriya</option>
                                  <option value="LI">Liechtenstein</option>
                                  <option value="LT">Lithuania</option>
                                  <option value="LU">Luxembourg</option>
                                  <option value="MO">Macao</option>
                                  <option value="MK">
                                    Macedonia, the Former Yugoslav Republic of
                                  </option>
                                  <option value="MG">Madagascar</option>
                                  <option value="MW">Malawi</option>
                                  <option value="MY">Malaysia</option>
                                  <option value="MV">Maldives</option>
                                  <option value="ML">Mali</option>
                                  <option value="MT">Malta</option>
                                  <option value="MH">Marshall Islands</option>
                                  <option value="MQ">Martinique</option>
                                  <option value="MR">Mauritania</option>
                                  <option value="MU">Mauritius</option>
                                  <option value="YT">Mayotte</option>
                                  <option value="MX">Mexico</option>
                                  <option value="FM">Micronesia, Federated States of</option>
                                  <option value="MD">Moldova, Republic of</option>
                                  <option value="MC">Monaco</option>
                                  <option value="MN">Mongolia</option>
                                  <option value="ME">Montenegro</option>
                                  <option value="MS">Montserrat</option>
                                  <option value="MA">Morocco</option>
                                  <option value="MZ">Mozambique</option>
                                  <option value="MM">Myanmar</option>
                                  <option value="NA">Namibia</option>
                                  <option value="NR">Nauru</option>
                                  <option value="NP">Nepal</option>
                                  <option value="NL">Netherlands</option>
                                  <option value="AN">Netherlands Antilles</option>
                                  <option value="NC">New Caledonia</option>
                                  <option value="NZ">New Zealand</option>
                                  <option value="NI">Nicaragua</option>
                                  <option value="NE">Niger</option>
                                  <option value="NG">Nigeria</option>
                                  <option value="NU">Niue</option>
                                  <option value="NF">Norfolk Island</option>
                                  <option value="MP">Northern Mariana Islands</option>
                                  <option value="NO">Norway</option>
                                  <option value="OM">Oman</option>
                                  <option value="PK">Pakistan</option>
                                  <option value="PW">Palau</option>
                                  <option value="PS">Palestinian Territory, Occupied</option>
                                  <option value="PA">Panama</option>
                                  <option value="PG">Papua New Guinea</option>
                                  <option value="PY">Paraguay</option>
                                  <option value="PE">Peru</option>
                                  <option value="PH">Philippines</option>
                                  <option value="PN">Pitcairn</option>
                                  <option value="PL">Poland</option>
                                  <option value="PT">Portugal</option>
                                  <option value="PR">Puerto Rico</option>
                                  <option value="QA">Qatar</option>
                                  <option value="RE">Reunion</option>
                                  <option value="RO">Romania</option>
                                  <option value="RU">Russian Federation</option>
                                  <option value="RW">Rwanda</option>
                                  <option value="BL">Saint Barthelemy</option>
                                  <option value="SH">Saint Helena</option>
                                  <option value="KN">Saint Kitts and Nevis</option>
                                  <option value="LC">Saint Lucia</option>
                                  <option value="MF">Saint Martin</option>
                                  <option value="PM">Saint Pierre and Miquelon</option>
                                  <option value="VC">Saint Vincent and the Grenadines</option>
                                  <option value="WS">Samoa</option>
                                  <option value="SM">San Marino</option>
                                  <option value="ST">Sao Tome and Principe</option>
                                  <option value="SA">Saudi Arabia</option>
                                  <option value="SN">Senegal</option>
                                  <option value="RS">Serbia</option>
                                  <option value="CS">Serbia and Montenegro</option>
                                  <option value="SC">Seychelles</option>
                                  <option value="SL">Sierra Leone</option>
                                  <option value="SG">Singapore</option>
                                  <option value="SX">Sint Maarten</option>
                                  <option value="SK">Slovakia</option>
                                  <option value="SI">Slovenia</option>
                                  <option value="SB">Solomon Islands</option>
                                  <option value="SO">Somalia</option>
                                  <option value="ZA">South Africa</option>
                                  <option value="GS">
                                    South Georgia and the South Sandwich Islands
                                  </option>
                                  <option value="SS">South Sudan</option>
                                  <option value="ES">Spain</option>
                                  <option value="LK">Sri Lanka</option>
                                  <option value="SD">Sudan</option>
                                  <option value="SR">Suriname</option>
                                  <option value="SJ">Svalbard and Jan Mayen</option>
                                  <option value="SZ">Swaziland</option>
                                  <option value="SE">Sweden</option>
                                  <option value="CH">Switzerland</option>
                                  <option value="SY">Syrian Arab Republic</option>
                                  <option value="TW">Taiwan, Province of China</option>
                                  <option value="TJ">Tajikistan</option>
                                  <option value="TZ">Tanzania, United Republic of</option>
                                  <option value="TH">Thailand</option>
                                  <option value="TL">Timor-Leste</option>
                                  <option value="TG">Togo</option>
                                  <option value="TK">Tokelau</option>
                                  <option value="TO">Tonga</option>
                                  <option value="TT">Trinidad and Tobago</option>
                                  <option value="TN">Tunisia</option>
                                  <option value="TR">Turkey</option>
                                  <option value="TM">Turkmenistan</option>
                                  <option value="TC">Turks and Caicos Islands</option>
                                  <option value="TV">Tuvalu</option>
                                  <option value="UG">Uganda</option>
                                  <option value="UA">Ukraine</option>
                                  <option value="AE">United Arab Emirates</option>
                                  <option value="GB">United Kingdom</option>
                                  <option value="US">United States</option>
                                  <option value="UM">United States Minor Outlying Islands</option>
                                  <option value="UY">Uruguay</option>
                                  <option value="UZ">Uzbekistan</option>
                                  <option value="VU">Vanuatu</option>
                                  <option value="VE">Venezuela</option>
                                  <option value="VN">Viet Nam</option>
                                  <option value="VG">Virgin Islands, British</option>
                                  <option value="VI">Virgin Islands, U.s.</option>
                                  <option value="WF">Wallis and Futuna</option>
                                  <option value="EH">Western Sahara</option>
                                  <option value="YE">Yemen</option>
                                  <option value="ZM">Zambia</option>
                                  <option value="ZW">Zimbabwe</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid gap-3 lg:grid-cols-2">
                          <div
                            className="relative grid tail-carrinho-form-geral js-tail-form-geral flex-grow  border-transparent form-div-endereco-cep-1"
                            data-campo="Endereco.cep_1"
                          >
                            <label
                              className="absolute text-sm text-gray-500 top-3.5 left-2 cursor-pointer transition-all tail-carrinho-form-titulo"
                              htmlFor="EnderecoCep1"
                            >
                              CEP
                              <span className="text-xs text-gray-500 align-baseline">
                                <span className="align-baseline">
                                  Não sabe seu CEP?
                                  <a
                                    href="https://buscacepinter.correios.com.br/app/localidade_logradouro/index.php"
                                    rel="external"
                                    target="_blank"
                                    className="underline align-baseline"
                                  >
                                    clique aqui
                                  </a>
                                </span>
                              </span>
                            </label>
                            <div className="grid js-tail-form-text-lista">
                              <input
                                type="text"
                                autoComplete="postal-code"
                                data-rotulo="CEP"
                                id="EnderecoCep1"
                                inputMode="numeric"
                                maxLength={9}
                                name="dados[Endereco][cep_1]"
                                obs='<span class="align-baseline">Não sabe seu CEP? <a href="https://buscacepinter.correios.com.br/app/localidade_logradouro/index.php" rel="external" target="_blank" class="underline align-baseline">clique aqui</a></span>'
                                placeholder="CEP"
                                className="h-12 px-2 text-sm placeholder-transparent bg-white border border-gray-300 border-solid rounded-md outline-none hover:border-blue-500 focus:border-blue-500 ring-0 tail-carrinho-form-campo js-imask-cep js-carrinho-endereco-cep1"
                                data-mascara-regra="#####-###"
                                data-mascara-validar={1}
                              />
                            </div>
                          </div>
                          <div
                            className="relative grid tail-carrinho-form-geral js-tail-form-geral flex-grow  border-transparent form-div-endereco-cep-2 escondido"
                            data-campo="Endereco.cep_2"
                          >
                            <label
                              className="absolute text-sm text-gray-500 top-3.5 left-2 cursor-pointer transition-all tail-carrinho-form-titulo"
                              htmlFor="EnderecoCep2"
                            >
                              CEP
                            </label>
                            <div className="grid js-tail-form-text-lista">
                              <input
                                type="text"
                                data-rotulo="CEP"
                                id="EnderecoCep2"
                                name="dados[Endereco][cep_2]"
                                placeholder="CEP"
                                className="h-12 px-2 text-sm placeholder-transparent bg-white border border-gray-300 border-solid rounded-md outline-none hover:border-blue-500 focus:border-blue-500 ring-0 tail-carrinho-form-campo js-carrinho-endereco-cep2"
                              />
                            </div>
                          </div>
                          <div
                            id="cep-carregando"
                            className="grid w-12 h-12 border border-gray-300 border-solid rounded-md place-content-center escondido"
                          >
                            <svg
                              className="h-5 animate-spin"
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
                            <span className="sr-only">Pesquisando CEP, por favor, aguarde...</span>
                          </div>
                          <div
                            id="cep-erro"
                            className="flex items-center gap-4 px-3 text-sm text-red-600 border border-red-200 border-solid rounded-md bg-red-50 cep-erro escondido"
                          >
                            <svg
                              className="flex-shrink-0 h-6"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="flex-shrink-0">CEP não encontrado</span>
                          </div>
                        </div>
                        <div className="grid gap-3 lg:grid-cols-2 transition-opacity escondido js-carrinho-cliente-endereco-container">
                          <div
                            className="relative grid tail-carrinho-form-geral js-tail-form-geral  border-transparent form-div-endereco-endereco"
                            data-campo="Endereco.endereco"
                          >
                            <label
                              className="absolute text-sm text-gray-500 top-3.5 left-2 cursor-pointer transition-all tail-carrinho-form-titulo"
                              htmlFor="EnderecoEndereco"
                            >
                              Endereço
                            </label>
                            <div className="grid js-tail-form-text-lista">
                              <input
                                type="text"
                                autoComplete="street-address"
                                data-rotulo="Endereço"
                                id="EnderecoEndereco"
                                maxLength={200}
                                name="dados[Endereco][endereco]"
                                placeholder="Endereço"
                                className="h-12 px-2 text-sm placeholder-transparent bg-white border border-gray-300 border-solid rounded-md outline-none hover:border-blue-500 focus:border-blue-500 ring-0 tail-carrinho-form-campo js-carrinho-endereco-rua"
                              />
                            </div>
                          </div>
                          <div
                            className="relative grid tail-carrinho-form-geral js-tail-form-geral  border-transparent form-div-endereco-numero"
                            data-campo="Endereco.numero"
                          >
                            <label
                              className="absolute text-sm text-gray-500 top-3.5 left-2 cursor-pointer transition-all tail-carrinho-form-titulo"
                              htmlFor="EnderecoNumero"
                            >
                              Número
                              <span className="text-xs text-gray-500 align-baseline">
                                (digite 0 para sem número)
                              </span>
                            </label>
                            <div className="grid js-tail-form-text-lista">
                              <input
                                type="text"
                                autoComplete="street-number"
                                data-rotulo="Número"
                                id="EnderecoNumero"
                                inputMode="numeric"
                                maxLength={10}
                                name="dados[Endereco][numero]"
                                obs="(digite 0 para sem número)"
                                placeholder="Número"
                                className="h-12 px-2 text-sm placeholder-transparent bg-white border border-gray-300 border-solid rounded-md outline-none hover:border-blue-500 focus:border-blue-500 ring-0 tail-carrinho-form-campo js-carrinho-endereco-numero"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="grid gap-3 lg:grid-cols-2 transition-opacity escondido js-carrinho-cliente-endereco-container">
                          <div
                            className="relative grid tail-carrinho-form-geral js-tail-form-geral  border-transparent form-div-endereco-complemento"
                            data-campo="Endereco.complemento"
                          >
                            <label
                              className="absolute text-sm text-gray-500 top-3.5 left-2 cursor-pointer transition-all tail-carrinho-form-titulo"
                              htmlFor="EnderecoComplemento"
                            >
                              Complemento
                              <span className="text-xs text-gray-500 align-baseline">
                                (opcional)
                              </span>
                            </label>
                            <div className="grid js-tail-form-text-lista">
                              <input
                                type="text"
                                data-rotulo="Complemento"
                                id="EnderecoComplemento"
                                maxLength={30}
                                name="dados[Endereco][complemento]"
                                obs="(opcional)"
                                placeholder="Complemento"
                                className="h-12 px-2 text-sm placeholder-transparent bg-white border border-gray-300 border-solid rounded-md outline-none hover:border-blue-500 focus:border-blue-500 ring-0 tail-carrinho-form-campo"
                              />
                            </div>
                          </div>
                          <div
                            className="relative grid tail-carrinho-form-geral js-tail-form-geral  border-transparent form-div-endereco-bairro"
                            data-campo="Endereco.bairro"
                          >
                            <label
                              className="absolute text-sm text-gray-500 top-3.5 left-2 cursor-pointer transition-all tail-carrinho-form-titulo"
                              htmlFor="EnderecoBairro"
                            >
                              Bairro
                            </label>
                            <div className="grid js-tail-form-text-lista">
                              <input
                                type="text"
                                data-rotulo="Bairro"
                                id="EnderecoBairro"
                                maxLength={30}
                                name="dados[Endereco][bairro]"
                                placeholder="Bairro"
                                className="h-12 px-2 text-sm placeholder-transparent bg-white border border-gray-300 border-solid rounded-md outline-none hover:border-blue-500 focus:border-blue-500 ring-0 tail-carrinho-form-campo js-carrinho-endereco-bairro"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="grid gap-3 lg:grid-cols-2 transition-opacity escondido js-carrinho-cliente-endereco-container">
                          <div
                            className="relative grid tail-carrinho-form-geral js-tail-form-geral  border-transparent form-div-endereco-cidade"
                            data-campo="Endereco.cidade"
                          >
                            <label
                              className="absolute text-sm text-gray-500 top-3.5 left-2 cursor-pointer transition-all tail-carrinho-form-titulo"
                              htmlFor="EnderecoCidade"
                            >
                              Cidade
                            </label>
                            <div className="grid js-tail-form-text-lista">
                              <input
                                type="text"
                                autoComplete="street-city"
                                data-rotulo="Cidade"
                                id="EnderecoCidade"
                                maxLength={50}
                                name="dados[Endereco][cidade]"
                                placeholder="Cidade"
                                className="h-12 px-2 text-sm placeholder-transparent bg-white border border-gray-300 border-solid rounded-md outline-none hover:border-blue-500 focus:border-blue-500 ring-0 tail-carrinho-form-campo js-carrinho-endereco-cidade"
                              />
                            </div>
                          </div>
                          <div
                            className="relative flex-skrink-0 js-tail-form-geral  border-transparent form-div-endereco-estado-1"
                            data-campo="Endereco.estado_1"
                          >
                            <label
                              className="absolute top-0 z-10 text-xs leading-6 text-gray-500 left-2 pointer-events-none"
                              htmlFor="EnderecoEstado1"
                            >
                              Estado
                            </label>
                            <div className="">
                              <div className="relative overflow-hidden relative">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={3}
                                  stroke="currentColor"
                                  className="absolute h-4 pl-1.5 text-gray-500 transform border-l border-gray-300 border-solid pointer-events-none right-2 top-2/4 -translate-y-2/4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                  />
                                </svg>
                                <select
                                  data-rotulo="Estado"
                                  id="EnderecoEstado1"
                                  name="dados[Endereco][estado_1]"
                                  className="border border-gray-300 border-solid rounded-md w-full h-12 pt-4 pl-2 pr-8 text-sm bg-gray-50 outline-none appearance-none cursor-pointer hover:border-blue-500 tail-carrinho-form-campo js-carrinho-endereco-estado1"
                                >
                                  <option value="">Escolha o estado</option>
                                  <option value="AC">Acre</option>
                                  <option value="AL">Alagoas</option>
                                  <option value="AP">Amapá</option>
                                  <option value="AM">Amazonas</option>
                                  <option value="BA">Bahia</option>
                                  <option value="CE">Ceará</option>
                                  <option value="DF">Distrito Federal</option>
                                  <option value="ES">Espírito Santo</option>
                                  <option value="GO">Goias</option>
                                  <option value="MA">Maranhão</option>
                                  <option value="MT">Mato Grosso</option>
                                  <option value="MS">Mato Grosso do Sul</option>
                                  <option value="MG">Minas Gerais</option>
                                  <option value="PA">Pará</option>
                                  <option value="PB">Paraíba</option>
                                  <option value="PR">Paraná</option>
                                  <option value="PE">Pernambuco</option>
                                  <option value="PI">Piauí</option>
                                  <option value="RJ">Rio de Janeiro</option>
                                  <option value="RN">Rio Grande do Norte</option>
                                  <option value="RS">Rio Grande do Sul</option>
                                  <option value="RO">Rondônia</option>
                                  <option value="RR">Roraima</option>
                                  <option value="SC">Santa Catarina</option>
                                  <option value="SP">São Paulo</option>
                                  <option value="SE">Sergipe</option>
                                  <option value="TO">Tocantins</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div
                            className="relative grid tail-carrinho-form-geral js-tail-form-geral  border-transparent form-div-endereco-estado-2 escondido"
                            data-campo="Endereco.estado_2"
                          >
                            <label
                              className="absolute text-sm text-gray-500 top-3.5 left-2 cursor-pointer transition-all tail-carrinho-form-titulo"
                              htmlFor="EnderecoEstado2"
                            >
                              Estado
                            </label>
                            <div className="grid js-tail-form-text-lista">
                              <input
                                type="text"
                                data-rotulo="Estado"
                                id="EnderecoEstado2"
                                maxLength={2}
                                name="dados[Endereco][estado_2]"
                                placeholder="Estado"
                                className="h-12 px-2 text-sm placeholder-transparent bg-white border border-gray-300 border-solid rounded-md outline-none hover:border-blue-500 focus:border-blue-500 ring-0 tail-carrinho-form-campo js-carrinho-endereco-estado2"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="grid gap-3 lg:grid-cols-2 transition-opacity escondido js-carrinho-cliente-endereco-container">
                          <div
                            className="relative grid tail-carrinho-form-geral js-tail-form-geral  border-transparent form-div-endereco-nome"
                            data-campo="Endereco.nome"
                          >
                            <label
                              className="absolute text-sm text-gray-500 top-3.5 left-2 cursor-pointer transition-all tail-carrinho-form-titulo"
                              htmlFor="EnderecoNome"
                            >
                              Nome do destinatário
                            </label>
                            <div className="grid js-tail-form-text-lista">
                              <input
                                type="text"
                                data-rotulo="Nome do destinatário"
                                id="EnderecoNome"
                                maxLength={50}
                                name="dados[Endereco][nome]"
                                placeholder="Nome do destinatário"
                                className="h-12 px-2 text-sm placeholder-transparent bg-white border border-gray-300 border-solid rounded-md outline-none hover:border-blue-500 focus:border-blue-500 ring-0 tail-carrinho-form-campo js-carrinho-endereco-nome"
                              />
                            </div>
                          </div>
                          <div
                            className="relative grid tail-carrinho-form-geral js-tail-form-geral escondido  border-transparent form-div-endereco-documento"
                            data-campo="Endereco.documento"
                          >
                            <label
                              className="absolute text-sm text-gray-500 top-3.5 left-2 cursor-pointer transition-all tail-carrinho-form-titulo"
                              htmlFor="EnderecoDocumento"
                            >
                              Documento (CPF, RG ou ID)
                            </label>
                            <div className="grid js-tail-form-text-lista">
                              <input
                                type="text"
                                data-rotulo="Documento (CPF, RG ou ID)"
                                id="EnderecoDocumento"
                                maxLength={14}
                                name="dados[Endereco][documento]"
                                placeholder="Documento (CPF, RG ou ID)"
                                className="h-12 px-2 text-sm placeholder-transparent bg-white border border-gray-300 border-solid rounded-md outline-none hover:border-blue-500 focus:border-blue-500 ring-0 tail-carrinho-form-campo"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 escondido">
                          <div className="grid gap-3">
                            <div
                              className="js-tail-form-geral  border-transparent form-div-endereco-lembrete"
                              data-campo="Endereco.lembrete"
                            >
                              <div className="mb-0.5 text-xs text-gray-500">
                                Salvar endereço como
                              </div>
                              <div className="flex flex-wrap gap-x-6 gap-y-3 -ml-1">
                                <div className="relative flex items-center p-1 transition-colors rounded hover:bg-gray-100">
                                  <input
                                    type="radio"
                                    data-rotulo="Salvar endereço como"
                                    id="EnderecoLembrete1"
                                    name="dados[Endereco][lembrete]"
                                    defaultValue="c"
                                    className="w-5 h-5 pl-2 transition-colors bg-white border border-gray-300 border-solid rounded-md appearance-none cursor-pointer focus:outline-none tail-carrinho-radio-campo"
                                    defaultChecked={true}
                                  />
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={3}
                                    stroke="currentColor"
                                    className="absolute h-3 text-white transform top-1/2 left-2 -translate-y-2/4 pointer-events-none transition-colors tail-carrinho-radio-campo-icone"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M4.5 12.75l6 6 9-13.5"
                                    />
                                  </svg>
                                  <label
                                    className="pl-1 text-sm cursor-pointer"
                                    htmlFor="EnderecoLembrete1"
                                  >
                                    Casa
                                  </label>
                                </div>
                                <div className="relative flex items-center p-1 transition-colors rounded hover:bg-gray-100">
                                  <input
                                    type="radio"
                                    data-rotulo="Salvar endereço como"
                                    id="EnderecoLembrete2"
                                    name="dados[Endereco][lembrete]"
                                    defaultValue="t"
                                    className="w-5 h-5 pl-2 transition-colors bg-white border border-gray-300 border-solid rounded-md appearance-none cursor-pointer focus:outline-none tail-carrinho-radio-campo"
                                  />
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={3}
                                    stroke="currentColor"
                                    className="absolute h-3 text-white transform top-1/2 left-2 -translate-y-2/4 pointer-events-none transition-colors tail-carrinho-radio-campo-icone"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M4.5 12.75l6 6 9-13.5"
                                    />
                                  </svg>
                                  <label
                                    className="pl-1 text-sm cursor-pointer"
                                    htmlFor="EnderecoLembrete2"
                                  >
                                    Trabalho
                                  </label>
                                </div>
                                <div className="relative flex items-center p-1 transition-colors rounded hover:bg-gray-100">
                                  <input
                                    type="radio"
                                    data-rotulo="Salvar endereço como"
                                    id="EnderecoLembrete3"
                                    name="dados[Endereco][lembrete]"
                                    defaultValue="o"
                                    className="w-5 h-5 pl-2 transition-colors bg-white border border-gray-300 border-solid rounded-md appearance-none cursor-pointer focus:outline-none tail-carrinho-radio-campo"
                                  />
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={3}
                                    stroke="currentColor"
                                    className="absolute h-3 text-white transform top-1/2 left-2 -translate-y-2/4 pointer-events-none transition-colors tail-carrinho-radio-campo-icone"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M4.5 12.75l6 6 9-13.5"
                                    />
                                  </svg>
                                  <label
                                    className="pl-1 text-sm cursor-pointer"
                                    htmlFor="EnderecoLembrete3"
                                  >
                                    Outro
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="escondido js-carrinho-cliente-frete" />

                <div className="flex flex-col items-center justify-between gap-3 mt-12 lg:flex-row">
                  <a
                    href="/carrinho"
                    className="text-sm order-last py-3.5 lg:order-first hover:underline"
                  >
                    <span className="">← Voltar</span>
                  </a>
                  <button type="submit" className="hidden js-carrinho-botao-pagarme5" />
                  <div>
                    <div
                      className="grecaptcha-badge"
                      data-style="none"
                      style={{
                        width: 256,
                        height: 60,
                        position: "fixed",
                        visibility: "hidden",
                      }}
                    >
                      <div className="grecaptcha-logo">
                        <iframe
                          title="reCAPTCHA"
                          width={256}
                          height={60}
                          role="presentation"
                          name="a-3bat66p0dtwk"
                          frameBorder={0}
                          scrolling="no"
                          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                          src="https://www.google.com/recaptcha/enterprise/anchor?ar=1&k=6Ld0b2keAAAAADfjftpjmIFGGX34ncuMu3_ru18J&co=aHR0cHM6Ly93d3cudml2YWRyZXNzLmNvbS5icjo0NDM.&hl=pt-BR&v=rz4DvU-cY2JYCwHSTck0_qm-&size=invisible&badge=bottomright&cb=ob37fkys27oa"
                        />
                      </div>
                      <div className="grecaptcha-error" />
                      <textarea
                        id="g-recaptcha-response"
                        name="g-recaptcha-response"
                        className="g-recaptcha-response"
                        style={{
                          width: 250,
                          height: 40,
                          border: "1px solid rgb(193, 193, 193)",
                          margin: "10px 25px",
                          padding: 0,
                          resize: "none",
                          display: "none",
                        }}
                        defaultValue={""}
                      />
                    </div>
                    <iframe style={{ display: "none" }} />
                  </div>
                  <button
                    type="button"
                    data-enviar="false"
                    data-callback="carrinhoClienteSubmit"
                    data-error-callback="recaptchaError"
                    data-expired-callback="recaptchaExpired"
                    data-sitekey="6Ld0b2keAAAAADfjftpjmIFGGX34ncuMu3_ru18J"
                    className="relative w-full lg:w-auto flex justify-center items-center gap-2 py-3.5 pl-10 pr-8 text-base font-bold text-white cursor-pointer transition-colors bg-black rounded-md group lg:ml-auto tail-carrinho-btn-continuar js-carrinho-botao-continuar g-recaptcha"
                  >
                    <span className="transition-opacity tail-carrinho-btn-continuar-texto">
                      Continuar
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="h-4 transition-opacity tail-carrinho-btn-continuar-icone"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 overflow-hidden transition-opacity opacity-0 tail-carrinho-btn-continuar-loading"
                    >
                      <div className="absolute w-full h-full transition bg-blue-400 translate-x-screen tail-carrinho-btn-continuar-loading-fundo" />
                      <div className="absolute transform opacity-0 left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 tail-carrinho-btn-continuar-loading-icone">
                        <svg
                          className="h-6 animate-spin"
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
                            className="opacity-100"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                      </div>
                      <svg
                        className="absolute h-6 origin-center transform opacity-0 left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 tail-carrinho-btn-continuar-loading-sucesso-icone"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div className=" border-t border-solid border-gray-300 pt-6 mx-auto mt-6 text-xs text-center text-gray-500">
                  Este site é protegido pelo reCAPTCHA e pelo Google
                  <br />
                  <a
                    href="https://policies.google.com/privacy"
                    className="text-blue-600 hover:underline"
                    rel="external"
                    target="_blank"
                  >
                    Política de Privacidade
                  </a>
                  e
                  <a
                    href="https://policies.google.com/terms"
                    className="text-blue-600 hover:underline"
                    rel="external"
                    target="_blank"
                  >
                    Termos de serviço
                  </a>
                  se aplicam.
                </div>
              </div>
            </form>
          </div>
        </article>
        <aside className="order-first lg:order-last text-gray-800 lg:px-8 bg-gray-50 lg:py-16 lg:border-l lg:border-gray-300 lg:border-solid">
          <details className="tail-carrinho-lateral-details js-carrinho-lateral-geral" open>
            <summary className="px-4 py-4 list-none border-b border-gray-300 border-solid cursor-pointer lg:max-w-sm lg:mr-auto lg:hidden tail-carrinho-lateral-summary">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="h-4 transition-transform pointer-events-none tail-carrinho-lateral-summary-icone"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <h2 className="text-lg">Resumo do pedido</h2>
              </div>
            </summary>
            <div className="grid gap-6 px-4 py-6 text-sm border-b border-gray-300 border-solid lg:pt-0 lg:px-0 lg:border-none lg:max-w-sm lg:mt-0 lg:mr-auto tail-carrinho-lateral-conteudo">
              <div className="relative">
                <div className="font-bold border-b border-gray-300 border-solid sr-only">
                  Produtos
                </div>
                <div
                  aria-hidden="true"
                  className="escondido absolute hidden inset-x-0 z-10 p-2 -top-6 pointer-events-none from-transparent to-gray-50 bg-gradient-to-t lg:block"
                />
                <ul className="relative grid -mt-6">
                  <li className="flex flex-col mt-6 lg:gap-3 lg:flex-row">
                    <div className="flex flex-grow gap-3 pt-1.5">
                      <div className="overflow-visible relative self-center flex-shrink-0 w-14">
                        <div className="overflow-hidden border border-gray-300 border-solid rounded-md">
                          <img src="https://thumb.braavo.me/vivadress/200/3998669464.webp" />
                        </div>
                        <div
                          style={{ fontSize: 10 }}
                          className="absolute grid w-5 h-5 font-bold text-white bg-red-500 rounded-full -top-1.5 -right-1.5 place-content-center"
                        >
                          <span className="sr-only">Quantidade do produto</span>1
                        </div>
                      </div>
                      <div className="grid gap-1 tail-carr-nome tail-carr-paga-nome">
                        <div className="self-end truncate">
                          Vestido Longo Ombro a Ombro Transpassado com Fenda na Saia Marsala
                        </div>
                        <div className="text-xs text-gray-500">Tamanho: Único</div>
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 text-right lg:self-end">
                      <div>R$ 199,90</div>
                      <div>Subtotal R$ 199,90</div>
                    </div>
                  </li>
                  <div
                    aria-hidden="true"
                    className="escondido sticky hidden inset-x-0 bottom-0 z-10 p-6 pointer-events-none from-transparent to-gray-50 bg-gradient-to-b lg:block"
                  />
                </ul>
                <div
                  aria-hidden="true"
                  className="escondido absolute bottom-0 z-10 hidden pointer-events-none transform left-2/4 -translate-x-2/4 lg:block"
                >
                  <div className="px-2 py-3.5 bg-white border border-gray-200 border-solid rounded-full shadow">
                    <div className="p-0.5 -mt-2 bg-gray-300 rounded-full transform tail-scroll-indicador-bolinha" />
                  </div>
                  <svg
                    className="h-3.5 mx-auto text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-300 border-solid">
                <div className="text-lg font-bold sr-only">Resumo</div>
                <div className="grid gap-3">
                  <div className="flex justify-between">
                    <div className="text-gray-500">Produtos</div>
                    <div className="text-right">R$ 199,90 </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-gray-500">Frete</div>
                    <div className="text-right js-carrinho-resumo-produtos-frete"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-gray-500">Pagamento</div>
                    <div className="text-right js-carrinho-resumo-produtos-pagamento"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-between gap-3 pt-6 border-t border-gray-300 border-solid">
                <div className="text-xl">Total</div>
                <div className="text-right">
                  <div className="text-xl">
                    <span className="mr-2 text-xs text-gray-500 align-middle">BRL</span>
                    <span className="align-middle js-carrinho-resumo-produtos-total">
                      R$ 199,90
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </aside>
      </main>
    </>
  );
};

export default Payment;
