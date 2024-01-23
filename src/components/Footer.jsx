import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";

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
                <a href="#">Linee guida della community</a>
              </li>
              <li>
                <a href="#">Privacy e condizioni</a>
              </li>
              <li>
                <a href="#">Sales Solutions</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <ul className="list-unstyled">
              <li>
                <a href="#">Accessibilità</a>
              </li>
              <li>
                <a href="#">Carriera</a>
              </li>
              <li>
                <a href="#">Opzioni per gli annunci pubblicitari</a>
              </li>
              <li>
                <a href="#">Mobile</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <ul className="list-unstyled">
              <li>
                <a href="#">Talent Solutions</a>
              </li>
              <li>
                <a href="#">Soluzioni di marketing</a>
              </li>
              <li>
                <a href="#">Pubblicità</a>
              </li>
              <li>
                <a href="#">Piccole imprese</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <ul className="list-unstyled">
              <li>
                <BsFillQuestionSquareFill />
                <a href="#">Domande?</a>
                <h6>Visita il nostro Centro assistenza</h6>
              </li>
              <li>
                <IoSettingsSharp />
                <a href="#">Gestisci il tuo account e la tua privacy</a>
                <h6>Vai alle impostazioni</h6>
              </li>
              <li>
                <FaShieldAlt />
                <a href="#">Trasparenza sui contenuti consigliati</a>
                <h6>Scopri di più sui contenuti consigliati</h6>
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
