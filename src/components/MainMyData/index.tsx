const MainMyData = () => {
  return (
    <main id="principal" className="principal tail-principal ev-principal">
      <div id="principal-limite" className="principal-limite">
        <article id="conteudo" className="conteudo">
          <div className="grid w-full gap-4 mt-8">
            <div className="grid gap-8 px-1 mx-auto lg:max-w-xl md:p-4">
              <div>
                <a
                  href="/conta"
                  className="flex items-center inline-block gap-1 px-4 py-2 bg-gray-100 rounded-lg w-max hover:bg-gray-200 tail-btn-voltar js-appec-escondido"
                >
                  <svg
                    xmlns="//www.w3.org/2000/svg"
                    className="h-3 lg:h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span className="font-semibold">Voltar</span>
                </a>
              </div>
              <div className="grid gap-4">
                <h1 className="mb-0 text-2xl tt">
                  <span className="tt-texto text-2xl">Meus Dados</span>
                </h1>
                <form
                  action="/conta/cadastro"
                  autoComplete="on"
                  method="post"
                  className="grid w-full gap-6 lg:gap-2 js-clie-form"
                >
                  <div className="grid gap-6 lg:gap-2">
                    <div
                      className="flex flex-col flex-grow gap-1 border lg:rounded-lg lg:hover:bg-yellow-50 lg:px-1 lg:py-2 js-tail-form-geral  border-transparent form-div-cliente-nome"
                      data-campo="Cliente.nome"
                    >
                      <label
                        className="block text-sm font-medium text-gray-800"
                        htmlFor="ClienteNome"
                      >
                        Nome completo
                      </label>
                      <div className="relative flex gap-1 js-tail-form-text-lista">
                        <input
                          type="text"
                          autoComplete="name"
                          data-rotulo="Nome completo"
                          id="ClienteNome"
                          name="dados[Cliente][nome]"
                          required
                          defaultValue="Nome do Usuário"
                          className="block w-full px-3 py-2 text-base text-black bg-white border border-gray-400 border-solid rounded-lg shadow-sm outline-none sm:text-sm focus:border-indigo-500 ring-0 disabled-bg"
                        />
                      </div>
                    </div>
                    <div
                      className="flex flex-col flex-grow gap-1 border lg:rounded-lg lg:hover:bg-yellow-50 lg:px-1 lg:py-2 js-tail-form-geral  border-transparent form-div-cliente-email"
                      data-campo="Cliente.email"
                    >
                      <label
                        className="block text-sm font-medium text-gray-800"
                        htmlFor="ClienteEmail"
                      >
                        E-mail
                      </label>
                      <div className="relative flex gap-1 js-tail-form-text-lista">
                        <input
                          type="email"
                          autoComplete="email"
                          data-rotulo="E-mail"
                          id="ClienteEmail"
                          name="dados[Cliente][email]"
                          required
                          defaultValue="email@email.com"
                          className="block w-full px-3 py-2 text-base text-black bg-white border border-gray-400 border-solid rounded-lg shadow-sm outline-none sm:text-sm focus:border-indigo-500 ring-0 disabled-bg"
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

                    <div className="w-full border-t border-gray-400 border-dashed lg:mx-1" />

                    <div className="flex flex-row justify-between w-full gap-2 js-imask-tel-geral">
                      <div
                        className="flex flex-col gap-1 border lg:rounded-lg lg:hover:bg-yellow-50 lg:px-1 lg:py-2 js-tail-form-geral  border-transparent form-div-cliente-tel-1-pais"
                        data-campo="Cliente.tel_1_pais"
                      >
                        <label
                          className="block text-sm font-medium text-gray-800"
                          htmlFor="ClienteTel1Pais"
                        >
                          DDI
                        </label>
                        <div className="flex">
                          <div className=" relative">
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
                              data-rotulo="DDI"
                              id="ClienteTel1Pais"
                              name="dados[Cliente][tel_1_pais]"
                              className="block w-full py-2 pl-3 pr-8 text-base text-black bg-white border border-gray-400 border-solid rounded-lg shadow-sm outline-none appearance-none sm:text-sm focus:border-indigo-500 ring-0 disabled-bg js-imask-tel-pais"
                            >
                              <option value={55} selected>
                                +55 🇧🇷
                              </option>
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
                              <option value={7370}>+7370</option>{" "}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex flex-col flex-grow gap-1 border lg:rounded-lg lg:hover:bg-yellow-50 lg:px-1 lg:py-2 js-tail-form-geral  border-transparent form-div-cliente-tel-1"
                        data-campo="Cliente.tel_1"
                      >
                        <label
                          className="block text-sm font-medium text-gray-800"
                          htmlFor="ClienteTel1"
                        >
                          Celular
                        </label>
                        <div className="relative flex gap-1 js-tail-form-text-lista">
                          <input
                            type="text"
                            autoComplete="tel-national"
                            data-rotulo="Celular"
                            id="ClienteTel1"
                            inputMode="numeric"
                            name="dados[Cliente][tel_1]"
                            required
                            defaultValue={31993939399}
                            className="block w-full px-3 py-2 text-base text-black bg-white border border-gray-400 border-solid rounded-lg shadow-sm outline-none sm:text-sm focus:border-indigo-500 ring-0 disabled-bg js-imask-tel-campo js-imask-tel-campo-1"
                            data-mascara-regra="(##) #####-####"
                            maxLength={20}
                            data-mascara-validar={1}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full border-t border-gray-400 border-dashed lg:mx-1" />

                  <div className="grid gap-6 lg:gap-2">
                    <h2 className="text-base font-semibold lg:px-1">Notificação de compras</h2>
                    <div
                      className="flex flex-col gap-2 lg:gap-1 lg:rounded-lg lg:p-1 js-tail-form-geral  border-transparent form-div-cliente-notificar"
                      data-campo="Cliente.notificar"
                    >
                      <input type="hidden" name="dados[Cliente][notificar]" defaultValue={0} />
                      <div className="flex flex-col gap-4 lg:gap-0 flex-start lg:-ml-0.5">
                        <div className="flex items-start gap-2 text-sm text-gray-800 lg:rounded-lg lg:hover:bg-yellow-50 lg:px-1 lg:py-2">
                          <input
                            type="checkbox"
                            data-rotulo=""
                            id="ClienteNotificar1"
                            name="dados[Cliente][notificar]"
                            defaultValue={1}
                            className="flex-shrink-0 text-sm text-gray-800 align-top border-gray-400 rounded-lg cursor-pointer mt-0.5 ring-0 outline-none disabled-bg"
                            defaultChecked
                          />
                          <label className="text-sm cursor-pointer" htmlFor="ClienteNotificar1">
                            Desejo receber e-mails sobre meus pedidos (aprovação, envio, código de
                            rastreio)
                          </label>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex flex-col gap-2 lg:gap-1 lg:rounded-lg lg:p-1 js-tail-form-geral  border-transparent form-div-cliente-sms"
                      data-campo="Cliente.sms"
                    >
                      <input type="hidden" name="dados[Cliente][sms]" defaultValue={0} />
                      <div className="flex flex-col gap-4 lg:gap-0 flex-start lg:-ml-0.5">
                        <div className="flex items-start gap-2 text-sm text-gray-800 lg:rounded-lg lg:hover:bg-yellow-50 lg:px-1 lg:py-2">
                          <input
                            type="checkbox"
                            data-rotulo=""
                            id="ClienteSms1"
                            name="dados[Cliente][sms]"
                            defaultValue={1}
                            className="flex-shrink-0 text-sm text-gray-800 align-top border-gray-400 rounded-lg cursor-pointer mt-0.5 ring-0 outline-none disabled-bg"
                            defaultChecked
                          />
                          <label className="text-sm cursor-pointer" htmlFor="ClienteSms1">
                            Desejo receber alertas por SMS
                          </label>
                        </div>
                      </div>
                    </div>
                    <h2 className="text-base font-semibold lg:px-1">Notificação de ofertas</h2>
                    <div
                      className="flex flex-col gap-2 lg:gap-1 lg:rounded-lg lg:p-1 js-tail-form-geral  border-transparent form-div-cliente-newsletter"
                      data-campo="Cliente.newsletter"
                    >
                      <input type="hidden" name="dados[Cliente][newsletter]" defaultValue={0} />
                      <div className="flex flex-col gap-4 lg:gap-0 flex-start lg:-ml-0.5">
                        <div className="flex items-start gap-2 text-sm text-gray-800 lg:rounded-lg lg:hover:bg-yellow-50 lg:px-1 lg:py-2">
                          <input
                            type="checkbox"
                            data-rotulo=""
                            id="ClienteNewsletter1"
                            name="dados[Cliente][newsletter]"
                            defaultValue={1}
                            className="flex-shrink-0 text-sm text-gray-800 align-top border-gray-400 rounded-lg cursor-pointer mt-0.5 ring-0 outline-none disabled-bg"
                            defaultChecked
                          />
                          <label className="text-sm cursor-pointer" htmlFor="ClienteNewsletter1">
                            Desejo receber e-mails com promoções
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center lg:px-1">
                    <button type="submit" className="w-full botao botao-primario">
                      Gravar
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <a
                  className="float-right mt-2 text-xs text-right underline"
                  href="/conta/encerrar"
                  //   onclick="return confirm('Tem certeza que deseja apagar?');"
                >
                  Solicitar a exclusão da minha conta
                </a>
                <a
                  href="/conta"
                  className="flex items-center inline-block gap-1 px-4 py-2 bg-gray-100 rounded-lg w-max hover:bg-gray-200 tail-btn-voltar js-appec-escondido"
                >
                  <svg
                    xmlns="//www.w3.org/2000/svg"
                    className="h-3 lg:h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span className="font-semibold">Voltar</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default MainMyData;
