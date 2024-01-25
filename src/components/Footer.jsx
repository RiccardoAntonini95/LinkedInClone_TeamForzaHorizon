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
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="footer-style">
                  Privacy & Terms
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
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="footer-style">
                  Ad Choices
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
                  Marketing Solutions
                </a>
              </li>
              <li>
                <a href="#" className="footer-style">
                  Adversitings
                </a>
              </li>
              <li>
                <a href="#" className="footer-style">
                  Small Business
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <ul className="list-unstyled">
              <li>
                <BsFillQuestionSquareFill />
                <a href="#" className="footer-style2">
                  Questions?
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
                <h6 className="sottoTesto">Go to your Settings</h6>
              </li>
              <li>
                <FaShieldAlt />
                <a href="#" className="footer-style2">
                  Recommendation transparency
                </a>
                <h6 className="sottoTesto">
                  Learn more about Recommended Content.
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
