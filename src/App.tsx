import "./styles/header.css";
import "./styles/section-basic.css";
import "./styles/App.css";
import logo from "./assets/logo.svg";
import headerImg from "./assets/header-img.png";
import illustration1 from "./assets/illustration-1.svg";
import ContentShowcase from "./components/ContentShowcase";

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
          <ul>
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

        <ContentShowcase src={illustration1} isReversed={false}>
          <h2>Teste</h2>
          <p>Este é um teste de conteúdo.</p>
        </ContentShowcase>

        <ContentShowcase src={illustration1} isReversed={true}>
          <h2>Teste</h2>
          <p>Este é um teste de conteúdo.</p>
        </ContentShowcase>
      </main>
    </>
  );
}

export default App;
