import "../styles/navbar.css";

import { Chat, House, Info, MapPin } from "phosphor-react";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <a href="#home" className="navbar__link">
            <House size={32} />
            <span>Inicio</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="#about" className="navbar__link">
            <Info size={32} />
            <span>Sobre</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="#location" className="navbar__link">
            <MapPin size={32} />
            <span>Localização</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="#contact" className="navbar__link">
            <Chat size={32} />
            <span>Contato</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
