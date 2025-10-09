import "./styles/header.css";
import "./styles/App.css";
import "./styles/about-section.css";
import "./styles/location.css";
import "./styles/contact-section.css";
import "./styles/footer.css";
import "./styles/responsive.css";

import logo from "./assets/logo.svg";
import illustration1 from "./assets/illustration-1.svg";
import illustration2 from "./assets/illustration-2.svg";
import illustration3 from "./assets/illustration-3.svg";
import illustration4 from "./assets/illustration-4.svg";
import illustration5 from "./assets/illustration-5.svg";
import illustration6 from "./assets/illustration-6.svg";

import headerImg from "./assets/header-img.png";

import ContentShowcase from "./components/ContentShowcase";
import ContactCard from "./components/ContactCard";
import Navbar from "./components/Navbar";

import {
  Package,
  Truck,
  MapPin,
  VideoCamera,
  CheckCircle,
  DeviceMobile,
  ClipboardText,
  Warning,
  MapPinLine,
  ListChecks,
  Thermometer,
  FileText,
  ChartBar,
  WarningCircle,
  WhatsappLogo,
  EnvelopeSimple,
} from "phosphor-react";

function App() {
  const currentYear: number = new Date().getFullYear();

  return (
    <>
      <Navbar />
      <header className="app-header" id="home">
        <div className="header-info">
          <div className="header-presentation">
            <img src={logo} alt="LOGO" />
            <h1>
              Conectando distâncias,
              <br /> Acelerando negócios
            </h1>
            <p>
              Mais que transporte, a Otima.log atua como parceira estratégica de
              empresas que valorizam agilidade, rastreabilidade e controle sobre
              suas operações logísticas. Especializada em operação de fretes
              fracionados, a empresa conta com uma estrutura moderna e um time
              altamente qualificado, oferecendo soluções completas para quem
              quer crescer com eficiência.
            </p>
          </div>
          <div className="header-contact-btn">
            <a href="#contact">Nos Contate</a>
          </div>
        </div>
        <div className="header-image">
          <img src={headerImg} alt="Truck Image" />
        </div>
      </header>

      <div id="body-container">
        {/* about section */}
        <main id="about" className="ultrawide-responsiveness">
          <h2 className="main-title">Sobre nós</h2>
          <ContentShowcase
            src={illustration1}
            isReversed={false}
            isLighter={true}
          >
            <div className="bg-1">
              <h2>Carga Fracionada com a OTIMA.LOG</h2>
              <p>
                Na carga fracionada, diferentes mercadorias de várias empresas
                compartilham o mesmo veículo. Isso significa mais economia,
                eficiência e rapidez, sem a necessidade de lotar um caminhão
                inteiro para realizar a entrega. É a solução ideal para empresas
                que precisam enviar quantidades menores de produtos, mas exigem
                a mesma segurança, rastreabilidade e pontualidade de uma carga
                completa.
              </p>
              <ul className="fractional-load-list">
                <li>Embarques diários</li>
                <li>Rapidez nas entregas</li>
                <li>
                  Roteirização estratégica → menor custo e maior agilidade
                </li>
                <li>Monitoramento em tempo real via torre de controle</li>
                <li>Segurança e gestão de risco ativa</li>
                <li>
                  Armazém próprio estruturado (1.000 posições-palete, 7 docas)
                </li>
              </ul>
            </div>
          </ContentShowcase>
          <ContentShowcase
            src={illustration2}
            isReversed={true}
            isLighter={true}
          >
            <div className="bg-2">
              <h2>Armazém e Infraestrutura</h2>
              <p>
                Capacidade e Segurança para operações de todos os portes. <br />{" "}
                <br /> Nossa estrutura foi pensada para garantir eficiência em
                todas as etapas da movimentação de cargas. O armazém da
                Otima.log é equipado para suportar altos volumes com acesso
                seguro, vigilância constante e processos bem definidos.
              </p>
              <div className="icon-container">
                <div className="icon-item">
                  <Package
                    size={80}
                    className="icon-mobile"
                    color={"#042f62"}
                  />
                  <div className="icon-text-group">
                    <p>
                      <b>1000</b> <br />
                      posições-palete
                    </p>
                  </div>
                </div>
                <div className="icon-item">
                  <Truck size={80} className="icon-mobile" color={"#042f62"} />
                  <div className="icon-text-group">
                    <p>
                      <b>7</b> <br />
                      docas para carga e descarga
                    </p>
                  </div>
                </div>
                <div className="icon-item">
                  <MapPin size={80} className="icon-mobile" color={"#042f62"} />
                  <p>Pátio amplo, seguro e pavimentado</p>
                </div>
                <div className="icon-item">
                  <VideoCamera
                    size={80}
                    className="icon-mobile"
                    color={"#042f62"}
                  />
                  <p>Monitoramento 24h por câmeras</p>
                </div>
              </div>
            </div>
          </ContentShowcase>

          <ContentShowcase
            src={illustration3}
            isReversed={false}
            isLighter={false}
          >
            <h2>Roteirização e Planejamento de Entregas</h2>
            <div className="delivery-planning-section">
              <p>
                Nossa roteirização inteligente leva em conta todas as variáveis
                que podem impactar uma entrega — da capacidade dos veículos às
                restrições urbanas, passando pelas demandas específicas de cada
                cliente. Tudo isso é feito com o objetivo de garantir entregas
                pontuais e otimizadas.
              </p>
              <div className="delivery-planning-benefits-container">
                <div className="individual-benefit">
                  <CheckCircle size={63} color="#042f62" weight="fill" />
                  <p>Roteiros flexíveis conforme a necessidade do cliente</p>
                </div>
                <div className="individual-benefit">
                  <CheckCircle size={63} color="#042f62" weight="fill" />
                  <p>Planejamento com base na capacidade de frota</p>
                </div>
                <div className="individual-benefit">
                  <CheckCircle size={63} color="#042f62" weight="fill" />
                  <p>
                    Respeito às restrições e particularidades de cada região
                  </p>
                </div>
              </div>
            </div>
          </ContentShowcase>

          <ContentShowcase
            src={illustration4}
            isReversed={true}
            isLighter={false}
          >
            <div className="bg-3">
              <div className="expedition-tech-text">
                <h2>Expedição com Tecnologia</h2>
                <p>
                  Processos rastreáveis e automatizados <br /> <br />A Otima.log
                  utiliza o sistema SSWcom leitura de código de barras,
                  permitindo controle preciso da entrada e saída de mercadorias.
                  Automatizamos nossos processos para oferecer mais agilidade,
                  controle e confiabilidade em cada etapa da operação.
                </p>
              </div>
              <div className="expedition-tech-list">
                <p>
                  {" "}
                  <b className="flashy-number">1</b> Sistema SSW com leitura de
                  código de barras
                </p>
                <p>
                  <b className="flashy-number">2</b> Rastreabilidade total das
                  mercadorias
                </p>
                <p>
                  <b className="flashy-number">3</b> Processos automatizados de
                  recebimento e expedição
                </p>
              </div>
            </div>
          </ContentShowcase>
          <div className="bg">
            <ContentShowcase
              src={illustration5}
              isReversed={false}
              isLighter={true}
            >
              <div className="bg-4">
                <div>
                  <h2>Torre de Controle e Gestão à vista</h2>
                  <p>
                    A Otima.log opera com uma Torre de Controle moderna e
                    integrada, capaz de oferecer visibilidade completa da
                    operação, status das entregas em tempo real e controle
                    detalhado das etapas do transporte. Essa estrutura permite
                    que a gestão logística do cliente seja feita com
                    previsibilidade, rastreabilidade e segurança, reduzindo
                    riscos e melhorando a performance das entregas.
                  </p>
                </div>
                <div className="control-tower-benefits-container">
                  <div className="individual-benefit">
                    <DeviceMobile size={64} color="#042f62" weight="regular" />
                    <p>Integração com o mobile dos motoristas</p>
                  </div>
                  <div className="individual-benefit">
                    <ClipboardText size={64} color="#042f62" weight="regular" />
                    <p>Previsibilidade das próximas entregas</p>
                  </div>
                  <div className="individual-benefit">
                    <Warning size={64} color="#042f62" weight="regular" />
                    <p>Alertas de anomalias operacionais</p>
                  </div>
                  <div className="individual-benefit">
                    <MapPinLine size={64} color="#042f62" weight="regular" />
                    <p>Check-in e Check-out via geolocalização</p>
                  </div>
                  <div className="individual-benefit">
                    <CheckCircle size={64} color="#042f62" weight="regular" />
                    <p>Status de entregas atualizado em tempo real</p>
                  </div>
                  <div className="individual-benefit">
                    <ListChecks size={64} color="#042f62" weight="regular" />
                    <p>Gestão de ocorrências sistematizadas</p>
                  </div>
                  <div className="individual-benefit">
                    <Thermometer size={64} color="#042f62" weight="regular" />
                    <p>Rastreabilidade de temperatura (quando necessário)</p>
                  </div>
                  <div className="individual-benefit">
                    <FileText size={64} color="#042f62" weight="regular" />
                    <p>
                      Comprovante de entrega digital com assinatura +
                      coordenadas
                    </p>
                  </div>
                  <div className="individual-benefit">
                    <ChartBar size={64} color="#042f62" weight="regular" />
                    <p>
                      Painéis visuais com indicadores logísticos atualizados
                    </p>
                  </div>
                </div>
              </div>
            </ContentShowcase>
            <ContentShowcase
              src={illustration6}
              isReversed={true}
              isLighter={true}
            >
              <h2>Gerenciamento de Risco e Gestão Ótima</h2>
              <p>
                Aliamos tecnologia, gestão e experiência para garantir mais
                segurança e menos imprevistos em toda a cadeia logística. Com
                uma liderança atuante e estrutura de apoio especializada,
                antecipamos riscos e entregamos soluções.
              </p>
              <div className="management-risk-container">
                <div>
                  <div className="title-icon-container">
                    <WarningCircle size={64} color="#042f62" weight="regular" />
                    <h3>Gerenciamento de Risco:</h3>
                  </div>
                  <ul>
                    <li>Equipe especializada em segurança e rastreamento </li>
                    <li>Monitoramento ativo da frota e das operações </li>
                    <li>Prevenção contra perdas e incidentes</li>
                  </ul>
                </div>
                <div>
                  <div className="title-icon-container">
                    <Truck size={64} color="#042f62" weight="regular" />
                    <h3>Gestão Jangaz:</h3>
                  </div>
                  <ul>
                    <li>Direção experiente e capacitada</li>
                    <li>Resposta rápida aos desafios da operação</li>
                    <li>Comprometimento com a performance do cliente</li>
                  </ul>
                </div>
              </div>
            </ContentShowcase>
          </div>
        </main>
        {/* location section*/}
        <section
          id="location"
          className="ultrawide-responsiveness location-section"
        >
          <div className="bg-5">
            <h2 className="main-title">Área de Atendimento</h2>
            <div className="location-container">
              <div className="map-half">
                <h2>Encontre-nos no mapa</h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13046.924358748076!2d-46.45899923722282!3d-23.418246701059125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce8a2ff7206689%3A0x69496411e34d48f9!2sRua%20Manoel%20Fernandes%20Garrote%2C%20588%20-%20Jardim%20Novo%20Portugal%2C%20Guarulhos%20-%20SP%2C%2007160-520!5e0!3m2!1spt-BR!2sbr!4v1759256697644!5m2!1spt-BR!2sbr"
                  className="map-iframe"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="location-info-half">
                <p>
                  Atendemos todo o estado de São Paulo com foco em performance e
                  cobertura estratégica. Nossa base próxima ao Aeroporto de
                  Guarulhos garante mais agilidade nas entregas e coletas,
                  conectando com rapidez as principais regiões comerciais e
                  industriais. Expandimos também nossa presença no Norte do
                  país, com operações em Rondônia e Acre. Além disso, já
                  projetamos ampliar nossa atuação futura para o Centro-Oeste
                </p>
                <div>
                  <h3>Regiões Atendidas</h3>
                  <ul>
                    <li>São Paulo (Capital e Grande SP)</li>
                    <li>Litoral Sul</li>
                    <li>Vale do Ribeira</li>
                    <li>Vale do Paraíba</li>
                    <li>Litoral Norte</li>
                    <li>Rondônia (Porto Velho, Ji-Paraná)</li>
                    <li>Acre (Rio Branco)</li>
                  </ul>
                </div>
                <div>
                  <h3>Bases Operacionais</h3>
                  <ul>
                    <li>
                      Guarulhos/SP - Rua Manoel Fernandes Garrote, 588 - Jardim
                      Novo Portugal
                    </li>
                    <li>
                      Porto Velho/RO - Rua da Felicidade, 4422 - Areal da
                      Floresta
                    </li>
                    <li>Ji-Paraná/RO - Rua Santa Clara, 1067 - Primavera</li>
                    <li>
                      Rio Branco/AC - Via Chico Mendes, 2872 - Triângulo Novo
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact section*/}
        <section id="contact" className="ultrawide-responsiveness">
          <div className="contact-section-container">
            <div className="contact-text-half">
              <h1>Nos Contate</h1>
              <p>
                Entre em contato e descubra como a Ótima Log pode ser a parceira
                estratégica que sua empresa precisa. Especialistas em fretes
                fracionados, oferecemos agilidade, rastreabilidade e controle
                para que sua operação cresça com eficiência e segurança.
              </p>
            </div>
            <div className="contact-card-half">
              <ContactCard
                Icon={WhatsappLogo}
                contactMethod="WhatsApp"
                contactMethodInfo="(14) 98158-3077"
                buttonText="Mandar mensagem"
                href="https://wa.me/5514981583077"
              />
              <ContactCard
                Icon={EnvelopeSimple}
                contactMethod="E-mail"
                contactMethodInfo="comercial@otimalog.com.br"
                buttonText="Mandar email"
                href="mailto:comercial@otimalog.com.br"
              />
            </div>
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
