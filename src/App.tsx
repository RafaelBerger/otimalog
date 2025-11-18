import "./styles/App.css";
import "./styles/about-section.css";
import "./styles/location.css";
import "./styles/footer.css";
import "./styles/responsive.css";

import "./styles/header.css";
import "./styles/history.css";
import "./styles/services.css";
import "./styles/expedition-technology.css";
import "./styles/contact.css";

import logo from "./assets/logo.svg";
import logoNew from "./assets/logo-novo.svg";

// icones e imagens usados na seção de serviços
import cameraIcon from "./assets/security-camera-fill.svg";
import truckIcon from "./assets/truck-fill.svg";
import mapPinIcon from "./assets/map-pin-area-fill.svg";
import warehouseIcon from "./assets/warehouse-fill.svg";
import mapImage from "./assets/map.svg";
import mapInfoImage from "./assets/map-info.svg";

// import ContentShowcase from "./components/ContentShowcase";
import ContactCard from "./components/ContactCard";

import { WhatsappLogo, EnvelopeSimple } from "phosphor-react";

function App() {
  const currentYear: number = new Date().getFullYear();

  return (
    <>
      {/* secao hero */}
      <section className="bg-header">
        <header className="app-header" id="home">
          <div className="header-info">
            <div className="header-presentation">
              <img src={logo} alt="LOGO" />
              <div className="header_title_container">
                <h3>OPERADOR LOGISTICO DE REDESPACHO</h3>
                <p>Conectando distâncias, acelerando negócios.</p>
              </div>
              <div className="header_text_container">
                <p>
                  A Ótima.Log entrega soluções logísticas inteligentes que unem
                  tecnologia, agilidade e controle do embarque à entrega.
                </p>
                <b>Mais que transporte, entregamos performance.</b>
              </div>
            </div>
            <div className="header_contact_btn">
              <a href="#history">HISTORIA</a>
              <a href="#contact">SERVIÇOS</a>
              <a href="#contact">SAIBA MAIS</a>
              <a href="#contact">SOLICITE SUA COTAÇÃO</a>
            </div>
          </div>
        </header>
      </section>

      <div id="body-container">
        <main id="about" className="ultrawide-responsiveness">
          {/* secao da HISTORIA */}
          <section className="history_container" id="history">
            <div className="image_container">
              <img src={logoNew} className="history_image" alt="LOGO" />
            </div>
            <div className="history_text_container">
              <h1>NOSSA HISTORIA:</h1>
              <p>
                Administrada por profissionais com mais de quatro décadas de
                experiência em logística, a empresa nasceu com um propósito
                claro: elevar o padrão de qualidade e segurança no transporte de
                cargas. Nossa primeira missão foi atender cargas lotação, com
                todo o rigor exigido por clientes de alto nível e formadores de
                opinião. <br /> <br />
                Desde então, construímos uma operação reconhecida pela
                excelência em cada detalhe. Atualmente ampliando sua atuação
                para o segmento de redespacho, atendendo inumeros clientes e
                parceiros com Transportadoras Amazon, Fedex, Magalhães,
                Rodonaves e inumeros outros embarcadores. <br /> <br />{" "}
                Transportamos praticamente todo tipo de mercadoria e volumes com
                velocidade de transferencia e entrega em centenas de destinos.{" "}
                <br /> <br /> Nossa central com armazém bem localizado fica em
                Guarulhos. <br /> <br />
              </p>
              <b>
                Cada quilômetro percorrido reforça nosso compromisso com a
                integridade da carga e a confiança do cliente.
              </b>
            </div>
          </section>
          {/* TODO: falta apenas estilizar parte da direita com as imagens e em
           seguida deixar responsivo */}
          <section className="services_section">
            <div className="services_title_container">
              <h1>NOSSOS SERVIÇOS:</h1>
              <p>
                Soluções logísticas ponta a ponta — com o DNA da eficiência.
              </p>
            </div>

            <div className="services_content_container">
              <div className="left_service_content_container">
                <h2>Redespacho & Cross Docking</h2>
                <ul>
                  <li>Frota adequada com varias tipologias de veiculos;</li>
                  <li>Roteirização sistemica;</li>
                  <li>Monitoramento das entregas;</li>
                  <li>Gestão de canhotos;</li>
                  <li>Seguro de cargas;</li>
                  <li>Agilidade nas entregas;</li>
                  <li>Gerenciamento de risco 24/7;</li>
                </ul>
                <div className="icons_service_container">
                  <div className="icon_container">
                    <img src={truckIcon} alt="ICONE" />
                    <p>
                      Frota adequada <br /> para distribuição
                    </p>
                  </div>
                  <div className="icon_container">
                    <img src={mapPinIcon} alt="ICONE" />
                    <p>
                      Pátio amplo,
                      <br /> seguro e <br />
                      pavimentado
                    </p>
                  </div>
                  <div className="icon_container">
                    <img src={cameraIcon} alt="ICONE" />
                    <p>
                      Monitoramento <br />
                      24h por <br />
                      câmeras
                    </p>
                  </div>
                  <div className="icon_container">
                    <img src={warehouseIcon} alt="ICONE" />
                    <p>
                      Ampla área de <br /> armazenagem <br /> com 7 docas
                    </p>
                  </div>
                </div>
              </div>
              <div className="right_service_content_container">
                <div className="map_container">
                  <img src={mapInfoImage} alt="MAPA" id="mapInfoImage" />
                  <img src={mapImage} alt="MAPA" id="mapImage" />
                </div>
                <div className="map_text_container">
                  <p>
                    Distribuição na Grande São Paulo Redespacho para Acre e
                    Rondonia -Em breve: MS, MT, GO, DF, TO.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* TODO: falta apenas responsividade e alterar a imagem*/}
          <section className="expedition_technology_section">
            <h1>EXPEDIÇÃO COM TECNOLOGIA</h1>
            <div className="expedition_technology_text_container">
              <h4>Processos rastreáveis e automatizados</h4>
              <p>Automação que garante precisão.</p>
              <p>
                Utilizamos o sistema SSW com leitura de código de barras,
                rastreabilidade <br />
                completa e processos automatizados — do recebimento à expedição.{" "}
                <br /> Resultado? Mais agilidade, menos erros, total controle
                sobre cada item.
              </p>
            </div>
            <div className="expedition_technology_features_container">
              <div>
                <img src={mapImage} alt="" />
              </div>
              <div>
                <ul>
                  <li className="li_feature_item">
                    <span>1</span>{" "}
                    <p>Sistema SSW com leitura de código de barras</p>
                  </li>
                  <li className="li_feature_item">
                    <span>2</span>
                    <p>Rastreabilidade total das mercadorias</p>
                  </li>
                  <li className="li_feature_item">
                    <span>3</span>
                    <p>Processos automatizados de recebimento e expedição</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        {/* contact section*/}
        <section
          id="contact"
          className="ultrawide-responsiveness contact_container"
        >
          <div>
            <img src={logo} alt="LOGO OTIMALOG" />
          </div>

          <div className="contact_text">
            <h1>NOS CONTATE:</h1>
            <p>
              Entre em contato e descubra como a Ótima Log pode ser a parceira
              estratégica que sua <br className="line_breaker" /> empresa
              precisa. Especialistas em fretes fracionados, oferecemos
              agilidade, rastreabilidade e <br className="line_breaker" />
              controle para que sua operação cresça com eficiência e segurança.
            </p>
          </div>

          <div className="contact_cards_container">
            <ContactCard
              Icon={WhatsappLogo}
              contactMethod="WhatsApp"
              contactMethodInfo="(11) 96925-2809"
              href="https://wa.me/5511969252809"
            />
            <ContactCard
              Icon={EnvelopeSimple}
              contactMethod="E-mail"
              contactMethodInfo="contato@otimalog.com.br"
              href="mailto:contato@otimalog.com.br"
            />
          </div>
        </section>
      </div>

      <footer className="footer-container">
        <ul className="footer-nav">
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#location">Área de Atendimento</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
        <div className="footer-copy">
          <p>
            ©{currentYear} ÓtimaLog <br /> Todos os direitos reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
