import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>LinkedIn</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
              <li>
                <a href="#">User Agreement</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
              <li>
                <a href="#">Copyright Policy</a>
              </li>
              <li>
                <a href="#">Brand Policy</a>
              </li>
              <li>
                <a href="#">Guest Controls</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Business Solutions</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Talent Solutions</a>
              </li>
              <li>
                <a href="#">Advertise</a>
              </li>
              <li>
                <a href="#">Sales Solutions</a>
              </li>
              <li>
                <a href="#">Small Business</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Directories</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Members</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Companies</a>
              </li>
              <li>
                <a href="#">Salaries</a>
              </li>
              <li>
                <a href="#">Featured</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Mobile</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">LinkedIn Lite</a>
              </li>
              <li>
                <a href="#">Mobile Apps</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Tools</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Job Search</a>
              </li>
              <li>
                <a href="#">Salary Finder</a>
              </li>
              <li>
                <a href="#">Search Resumes</a>
              </li>
              <li>
                <a href="#">Learning</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6}>
            <p>LinkedIn Corporation © 2024</p>
          </Col>
          <Col md={6} className="text-right">
            <a href="#">Accessibility</a>
            <a href="#">Privacy & Terms</a>
            <a href="#">Ad Choices</a>
            <a href="#">Advertising</a>
            <a href="#">Business Services</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
