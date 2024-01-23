import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLinkedin } from "react-icons/fa";
import "../assets/css/HomeFooter.css";

const HomeFooter = () => {
  return (
    <footer>
      <div>
        <Container>
          <ul className="list-unstyled d-flex">
            <li>
              <a href="#" className="homeFooter">
                Informazioni
              </a>
            </li>
            <li>
              <a href="#" className="homeFooter">
                Accessibilità
              </a>
            </li>
            <li>
              <a href="#" className="homeFooter">
                Centro Assistenza
              </a>
            </li>
            <li>
              <a href="#" className="homeFooter">
                Privacy e condizioni
              </a>
            </li>
            <li>
              <a href="#" className="homeFooter">
                Opzioni per gli annunci pubblicitari
              </a>
            </li>
            <li>
              <a href="#" className="homeFooter">
                Pubblicità
              </a>
            </li>
            <li>
              <a href="#" className="homeFooter">
                Servizi per le aziende
              </a>
            </li>
            <li>
              <a href="#" className="homeFooter">
                Scarica l'app LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="homeFooter">
                Altro
              </a>
            </li>
          </ul>
          <FaLinkedin />
          <p>LinkedIn Corporation © 2024</p>
        </Container>
      </div>
    </footer>
  );
};

export default HomeFooter;
