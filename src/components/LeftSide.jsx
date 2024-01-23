import React from "react";
import { Card, ListGroup, Row, Col, Container } from "react-bootstrap";
import { TiUserAdd } from "react-icons/ti";
import { IoHardwareChip } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const LeftSide = () => {
  return (
    <>
      <Card className="my-4 border border-tertiary">
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>"Nome generato"</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Row>
              <Col xs={10}>
                <p className="text-secondary m-0">Collegamenti</p>
                <p className="fw-bold m-0">Espandi la tua rete</p>
              </Col>
              <Col xs={2}>
                <TiUserAdd />
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <p className="text-secondary m-0">
              Accedi a strumenti e informazioni in esclusiva
            </p>
            <p className="d-flex align-items-center">
              <IoHardwareChip className="text-warning me-1" /> Prova Premium per
              0 EUR
            </p>
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <p className="d-flex align-items-center fw-bold">
            <FaBookmark className="me-2 text-secondary" /> I miei elementi
          </p>
        </Card.Body>
      </Card>
      <Card className="bg-white border border-tertiary rounded">
        <Row>
            <Col xs={12} className="py-2"><a className="text-decoration-none fw-bold px-3" href="#">Gruppi</a></Col>
            <Col xs={10} className="py-2"><a className="text-decoration-none fw-bold px-3" href="#">Eventi</a></Col>
            <Col xs={2} className="d-flex justify-content-center align-items-center"><FiPlus /></Col>
            <Col xs={12} className="py-2"><a className="text-decoration-none fw-bold px-3" href="#">Hashtag seguiti</a></Col>
        </Row>
        <hr />
        <Row>
            <p className="text-center">Scopri di più</p>
        </Row>
      </Card>
    </>
  );
};
export default LeftSide;
