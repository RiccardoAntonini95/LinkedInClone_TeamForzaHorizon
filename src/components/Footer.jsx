import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-style">
                  Informazioni
                </a>
              </li>
              <li>
                <a href="#" className="footer-style">
                  Linee guida della community
                </a>
              </li>
              <li>
                <a href="#" className="footer-style">
                  Privacy e condizioni
                </a>
              </li>
              <li>
                <a href="#" className="footer-style">
                  Sales Solutions
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-style">
                  Accessibilità
                </a>
              </li>
              <li>
                <a href="#" className="footer-style">
                  Carriera
                </a>
              </li>
              <li>
                <a href="#" className="footer-style">
                  Opzioni per gli annunci pubblicitari
                </a>
              </li>
              <li>
                <a href="#" className="footer-style">
                  Mobile
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-style">
                  Talent Solutions
                </a>
              </li>
              <li>
                <a href="#" className="footer-style">
                  Soluzioni di marketing
                </a>
              </li>
              <li>
                <a href="#" className="footer-style">
                  Pubblicità
                </a>
              </li>
              <li>
                <a href="#" className="footer-style">
                  Piccole imprese
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <ul className="list-unstyled">
              <li>
                <BsFillQuestionSquareFill />
                <a href="#" className="footer-style2">
                  Domande?
                </a>
                <h6 className="sottoTesto">
                  Visita il nostro Centro assistenza
                </h6>
              </li>
              <li>
                <IoSettingsSharp />
                <a href="#" className="footer-style2">
                  Gestisci il tuo account e la tua privacy
                </a>
                <h6 className="sottoTesto">Vai alle impostazioni</h6>
              </li>
              <li>
                <FaShieldAlt />
                <a href="#" className="footer-style2">
                  Trasparenza sui contenuti consigliati
                </a>
                <h6 className="sottoTesto">
                  Scopri di più sui contenuti consigliati
                </h6>
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <p>LinkedIn Corporation © 2024</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
