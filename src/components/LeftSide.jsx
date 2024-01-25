import React, { useEffect } from "react";
import { Card, ListGroup, Row, Col, Container, Image } from "react-bootstrap";
import { TiUserAdd } from "react-icons/ti";
import { IoHardwareChip } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { setProfileAction } from "../redux/actions/ProfilePage";
import bannerProfile from "../assets/img/bannerProfile.jpg";

const LeftSide = ({ currentProfile }) => {
  return (
    <>
      <Card className="my-4 border border-tertiary rounded-3">
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>"Generated Name"</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Row>
              <Col xs={10}>
                <p className="text-secondary m-0">Connections</p>
                <p className="fw-bold m-0">Expand your network</p>
                <p className="text-secondary m-0">Connections</p>
                <p className="fw-bold m-0">Expand your network</p>
              </Col>
              <Col xs={2}>
                <TiUserAdd />
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <p className="text-secondary m-0">
              Access exclusive tools and information Access exclusive tools and
              information
            </p>
            <p className="d-flex align-items-center">
              <IoHardwareChip className="text-warning me-1" />
              Try Premium for 0 EUR
            </p>
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <p className="d-flex align-items-center fw-bold">
            <FaBookmark className="me-2 text-secondary" />
            My elements
          </p>
        </Card.Body>
      </Card>
      <Card className="bg-white border border-tertiary rounded-3">
        <Row>
          <Col xs={12} className="py-2">
            <a className="text-decoration-none fw-bold px-3" href="#">
              Groups
            </a>
          </Col>
          <Col xs={8} className="py-2">
            <a className="text-decoration-none fw-bold px-3" href="#">
              Events
            </a>
          </Col>
          <Col
            xs={4}
            className="d-flex justify-content-center align-items-center"
          >
            <HiPlus />
          </Col>
          <Col xs={12} className="py-2">
            <a className="text-decoration-none fw-bold px-3" href="#">
              Followed hashtags
            </a>
          </Col>
          <Col xs={12} className="py-2">
            <a className="text-decoration-none fw-bold px-3" href="#">
              Groups
            </a>
          </Col>
          <Col xs={8} className="py-2">
            <a className="text-decoration-none fw-bold px-3" href="#">
              Events
            </a>
          </Col>
          <Col
            xs={4}
            className="d-flex justify-content-center align-items-center"
          >
            <HiPlus />
          </Col>
          <Col xs={12} className="py-2">
            <a className="text-decoration-none fw-bold px-3" href="#">
              Followed hashtags
            </a>
          </Col>
        </Row>
        <hr />
        <Row>
          <p className="text-center">Find out more</p>
          <p className="text-center">Find out more</p>
        </Row>
      </Card>
    </>
  );
};
export default LeftSide;
