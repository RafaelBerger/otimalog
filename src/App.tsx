import "./styles/header.css";
import "./styles/App.css";
import "./styles/about-section.css";

import logo from "./assets/logo.svg";
import illustration1 from "./assets/illustration-1.svg";
import illustration2 from "./assets/illustration-2.svg";
import illustration3 from "./assets/illustration-3.svg";
import illustration4 from "./assets/illustration-4.svg";
import illustration5 from "./assets/illustration-5.svg";
import illustration6 from "./assets/illustration-6.svg";
import headerImg from "./assets/header-img.png";

import ContentShowcase from "./components/ContentShowcase";
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
} from "phosphor-react";

function App() {
  return (
    <>
      <header className="app-header">
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
            <button>Nos Contate</button>
          </div>
        </div>
        <div className="header-image">
          <img src={headerImg} alt="Truck Image" />
        </div>
      </header>

      <main>
        <h2 className="main-title">Sobre nós</h2>

        <ContentShowcase src={illustration1} isReversed={false}>
          <h2>Carga Fracionada com a OTIMA.LOG</h2>
          <p>
            Na carga fracionada, diferentes mercadorias de várias empresas
            compartilham o mesmo veículo. Isso significa mais economia,
            eficiência e rapidez, sem a necessidade de lotar um caminhão inteiro
            para realizar a entrega. É a solução ideal para empresas que
            precisam enviar quantidades menores de produtos, mas exigem a mesma
            segurança, rastreabilidade e pontualidade de uma carga completa.
          </p>
          <ul className="fractional-load-list">
            <li>Embarques diários</li>
            <li>Rapidez nas entregas</li>
            <li>Roteirização estratégica → menor custo e maior agilidade</li>
            <li>Monitoramento em tempo real via torre de controle</li>
            <li>Segurança e gestão de risco ativa</li>
            <li>
              Armazém próprio estruturado (1.000 posições-palete, 7 docas)
            </li>
          </ul>
        </ContentShowcase>

        <ContentShowcase src={illustration2} isReversed={true}>
          <h2>Armazém e Infraestrutura</h2>
          <p>
            Capacidade e Segurança para operações de todos os portes. <br />{" "}
            <br /> Nossa estrutura foi pensada para garantir eficiência em todas
            as etapas da movimentação de cargas. O armazém da Otima.log é
            equipado para suportar altos volumes com acesso seguro, vigilância
            constante e processos bem definidos.
          </p>
          <div className="icon-container">
            <div className="icon-item">
              <Package size={80} color={"#fff"} />
              <div className="icon-text-group">
                <p>
                  <b>1000</b> <br />
                  posições-palete
                </p>
              </div>
            </div>
            <div className="icon-item">
              <Truck size={80} color={"#fff"} />
              <div className="icon-text-group">
                <p>
                  <b>7</b> <br />
                  docas para carga e descarga
                </p>
              </div>
            </div>
            <div className="icon-item">
              <MapPin size={80} color={"#fff"} />
              <p>Pátio amplo, seguro e pavimentado</p>
            </div>
            <div className="icon-item">
              <VideoCamera size={80} color={"#fff"} />
              <p>Monitoramento 24h por câmeras</p>
            </div>
          </div>
        </ContentShowcase>

        <ContentShowcase src={illustration3} isReversed={false}>
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
                <CheckCircle size={63} color="#ffffff" weight="fill" />
                <p>Roteiros flexíveis conforme a necessidade do cliente</p>
              </div>
              <div className="individual-benefit">
                <CheckCircle size={63} color="#ffffff" weight="fill" />
                <p>Planejamento com base na capacidade de frota</p>
              </div>
              <div className="individual-benefit">
                <CheckCircle size={63} color="#ffffff" weight="fill" />
                <p>Respeito às restrições e particularidades de cada região</p>
              </div>
            </div>
          </div>
        </ContentShowcase>

        <ContentShowcase src={illustration4} isReversed={true}>
          <div className="expedition-tech-text">
            <h2>Expedição com Tecnologia</h2>
            <p>
              Processos rastreáveis e automatizados <br /> <br />A Otima.log
              utiliza o sistema SSWcom leitura de código de barras, permitindo
              controle preciso da entrada e saída de mercadorias. Automatizamos
              nossos processos para oferecer mais agilidade, controle e
              confiabilidade em cada etapa da operação.
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
        </ContentShowcase>
        <ContentShowcase src={illustration5} isReversed={false}>
          <div>
            <h2>Torre de Controle e Gestão à vista</h2>
            <p>
              A Otima.log opera com uma Torre de Controle moderna e integrada,
              capaz de oferecer visibilidade completa da operação, status das
              entregas em tempo real e controle detalhado das etapas do
              transporte. Essa estrutura permite que a gestão logística do
              cliente seja feita com previsibilidade, rastreabilidade e
              segurança, reduzindo riscos e melhorando a performance das
              entregas.
            </p>
          </div>
          <div className="control-tower-benefits-container">
            <div className="individual-benefit">
              <DeviceMobile size={64} color="#ffffff" weight="regular" />
              <p>Integração com o mobile dos motoristas</p>
            </div>
            <div className="individual-benefit">
              <ClipboardText size={64} color="#ffffff" weight="regular" />
              <p>Previsibilidade das próximas entregas</p>
            </div>
            <div className="individual-benefit">
              <Warning size={64} color="#ffffff" weight="regular" />
              <p>Alertas de anomalias operacionais</p>
            </div>
            <div className="individual-benefit">
              <MapPinLine size={64} color="#ffffff" weight="regular" />
              <p>Check-in e Check-out via geolocalização</p>
            </div>
            <div className="individual-benefit">
              <CheckCircle size={64} color="#ffffff" weight="regular" />
              <p>Status de entregas atualizado em tempo real</p>
            </div>
            <div className="individual-benefit">
              <ListChecks size={64} color="#ffffff" weight="regular" />
              <p>Gestão de ocorrências sistematizadas</p>
            </div>
            <div className="individual-benefit">
              <Thermometer size={64} color="#ffffff" weight="regular" />
              <p>Rastreabilidade de temperatura (quando necessário)</p>
            </div>
            <div className="individual-benefit">
              <FileText size={64} color="#ffffff" weight="regular" />
              <p>Comprovante de entrega digital com assinatura + coordenadas</p>
            </div>
            <div className="individual-benefit">
              <ChartBar size={64} color="#ffffff" weight="regular" />
              <p>Painéis visuais com indicadores logísticos atualizados</p>
            </div>
          </div>
        </ContentShowcase>
        <ContentShowcase src={illustration6} isReversed={true}>
          <h2>Gerenciamento de Risco e Gestão Ótima</h2>
          <p>
            Aliamos tecnologia, gestão e experiência para garantir mais
            segurança e menos imprevistos em toda a cadeia logística. Com uma
            liderança atuante e estrutura de apoio especializada, antecipamos
            riscos e entregamos soluções.
          </p>
          <div className="management-risk-container">
            <div>
              <div className="title-icon-container">
                <WarningCircle size={64} color="#ffffff" weight="regular" />
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
                <Truck size={64} color="#ffffff" weight="regular" />
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
      </main>
    </>
  );
}

export default App;
