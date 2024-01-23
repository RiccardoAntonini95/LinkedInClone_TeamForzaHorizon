import React from "react";
import user from "../assets/img/user.png"
import { Row, Col, Container, Button, Image, Modal, FormGroup, Form, ModalBody } from "react-bootstrap";
import { AiFillPicture } from "react-icons/ai";
import { MdCalendarMonth } from "react-icons/md";
import { GrTextWrap } from "react-icons/gr";
import { useState } from "react";
import { IoMdTime } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { TiStarburst } from "react-icons/ti";
import { FaRegFaceSmile } from "react-icons/fa6";

const PostBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="my-4 border rounded-3 bg-white">
      <Row className="justify-content-md-center p-3">
        <Col xs={2} className="d-flex align-items-center">
          <Image src={user}  style={{ width: '50px', height: '50px' }} />
        </Col>
        <Col xs={10}>
          <Button
            id="PostBtn"
            className="w-100 rounded-pill border border-secondary text-secondary bg-body-secondary text-start p-3"
            onClick={handleShow}
          >
            Avvia un Post
          </Button>
        </Col>
      </Row>
      <Row className="px-3 pb-3">
        <Col
          xs={5}
          className="d-flex align-items-center justify-content-center p-0"
        >
          <AiFillPicture className="fs-3 text-info" />
          <p className="Post m-0 px-3 text-secondary">Contenuti multimediali</p>
        </Col>
        <Col
          xs={3}
          className="d-flex align-items-center justify-content-center p-0"
        >
          <MdCalendarMonth className="fs-3 text-warning" />
          <p className="Post m-0 px-3 text-secondary">Evento</p>
        </Col>
        <Col
          xs={4}
          className="d-flex align-items-center justify-content-end p-0"
        >
          <GrTextWrap className="fs-5 text-danger" />
          <p className="Post m-0 px-3 text-secondary">Scrivi un articolo</p>
        </Col>
      </Row>

      {/* MODALE */}

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header className="border-0" closeButton>
          <Col xs={1}><Image src={user} style={{ width: '40px', height: '40px' }} /></Col>
          <Col xs={6}><p className="m-0 fw-bold px-2">Nome utente</p><p className="Post text-secondary m-0 px-2">Pubblica: Chiunque</p></Col>
          <Modal.Title>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <FormGroup>
            <Form.Control className="border-0" as="textarea" placeholder="Di cosa vorresti parlare?" rows={8} />
          </FormGroup>
        </Modal.Body>
        <ModalBody className="py-0"><FaRegFaceSmile className="mx-3" /></ModalBody>
          <Modal.Body className="d-flex"><div className="m-2 p-2 rounded-circle bg-body-secondary d-flex justify-content-center align-items-center"><AiFillPicture className="text-secondary fs-5" /></div><div className="m-2 p-2 rounded-circle bg-body-secondary d-flex justify-content-center align-items-center"><MdCalendarMonth className="text-secondary fs-5" /></div><div className="m-2 p-2 rounded-circle bg-body-secondary d-flex justify-content-center align-items-center"><TiStarburst className="text-secondary fs-5" /></div><div></div><div className="m-2 p-2 rounded-circle bg-body-secondary d-flex justify-content-center align-items-center"><BsThreeDots className="text-secondary fs-5" /></div></Modal.Body>
        <Modal.Footer>
        <IoMdTime className="dark" />
          <Button id="Pubblic" className="rounded-pill" onClick={handleClose}>
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PostBar;
