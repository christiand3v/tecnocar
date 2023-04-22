import React from "react";
import Logo from "./../../assets/logo.svg";
import styles from "./Header.module.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <header className={styles.content}>
        <img src={Logo} className={styles.logo} />
        <div className={styles.links}>
          <ul className={styles.lista}>
            <a>
              <li>
                <Link to="sobre" spy={true} smooth={true} duration={1000}>
                  sobre
                </Link>
              </li>
            </a>

            <a>
              <li>
                <Link to="services" spy={true} smooth={true} duration={1000}>
                  serviços
                </Link>
              </li>
            </a>

            <a>
              <li>
                <Link to="location" spy={true} smooth={true} duration={1000}>
                  agendamento
                </Link>
              </li>
            </a>

            <a>
              <li>
                <Link to="contatos" spy={true} smooth={true} duration={1000}>
                  contato
                </Link>
              </li>
            </a>
          </ul>
        </div>
      </header>
      <div className={styles.iconWhatsapp}>
        <a href="https://wa.me/5551995592253" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png"
            alt=""
          />
        </a>
      </div>
    </>
  );
};

export default Header;