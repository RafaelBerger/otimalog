import "./styles/header.css";
import "./styles/section-basic.css";
import "./styles/App.css";

import logo from "./assets/logo.svg";
import illustration1 from "./assets/illustration-1.svg";
import illustration2 from "./assets/illustration-2.svg";
import illustration3 from "./assets/illustration-3.svg";
import headerImg from "./assets/header-img.png";

import ContentShowcase from "./components/ContentShowcase";
import { Package, Truck, MapPin, VideoCamera } from "phosphor-react";

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
          <p></p>
        </ContentShowcase>
      </main>
    </>
  );
}

export default App;
