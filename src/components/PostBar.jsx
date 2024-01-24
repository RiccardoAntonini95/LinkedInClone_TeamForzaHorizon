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
import { useSelector } from "react-redux";
import { STRIVE_KEY_MERLINO } from "../assets/js/auth_keys";

/*- GET https://striveschool-api.herokuapp.com/api/posts/  Ritorna una lista di post esistenti
- POST https://striveschool-api.herokuapp.com/api/posts/  Crea un nuovo post. NOTA: ogni utente ha il permesso di modificare solo i propri post
- GET https://striveschool-api.herokuapp.com/api/posts/{postId}  Ritorna uno specifico post
- PUT https://striveschool-api.herokuapp.com/api/posts/{postId}  Modifica uno specifico post
- DELETE https://striveschool-api.herokuapp.com/api/posts/{postId}  Cancella uno specifico postModello del POST: */

/* MODELLO DEL POST {
  "text": "Questo è un nuovo post", // L'unica proprietà richiesta!
  "username": "mario88", // SERVER GENERATED
  "createdAt": "2023-10-01T19:44:04.496Z", // SERVER GENERATED
  "updatedAt": "2023-10-01T19:44:04.496Z", // SERVER GENERATED
  "__v": 0, // SERVER GENERATED
  "_id": "5d93ac84b86e220017e76ae1", // SERVER GENERATED
} */

const PostBar = () => {
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const profileData = useSelector((state) => state.profile.actualProfile);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${STRIVE_KEY_MERLINO}`,
            "Content-Type": "application/json",
          },
          body: query /* JSON.stringify({ text: `${query}`}) */,
        }
      );
      console.log("response", res);

      if (!res.ok) throw new Error("Error posting");

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Container className="my-4 border rounded-3 bg-white">
      <Row className="justify-content-md-center p-3">
        <Col xs={2} className="d-flex align-items-center">
          <Image src={profileData.image} className="rounded-circle" style={{ width: '50px', height: '50px' }} />
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
          <Col xs={1}><Image src={profileData.image} style={{ width: '40px', height: '40px' }} className="rounded-circle" /></Col>
          <Col xs={6}><p className="m-0 fw-bold px-2">{profileData.name} {profileData.surname}</p><p className="Post text-secondary m-0 px-2">Pubblica: Chiunque</p></Col>
          <Modal.Title>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <FormGroup>
            <Form.Control className="border-0" as="textarea" placeholder="Di cosa vorresti parlare?" rows={8} onChange={(e) => setQuery(e.target.value)}/>
          </FormGroup>
        </Modal.Body>
        <ModalBody className="py-0"><FaRegFaceSmile className="mx-3" /></ModalBody>
          <Modal.Body className="d-flex"><div className="m-2 p-2 rounded-circle bg-body-secondary d-flex justify-content-center align-items-center"><AiFillPicture className="text-secondary fs-5" /></div><div className="m-2 p-2 rounded-circle bg-body-secondary d-flex justify-content-center align-items-center"><MdCalendarMonth className="text-secondary fs-5" /></div><div className="m-2 p-2 rounded-circle bg-body-secondary d-flex justify-content-center align-items-center"><TiStarburst className="text-secondary fs-5" /></div><div></div><div className="m-2 p-2 rounded-circle bg-body-secondary d-flex justify-content-center align-items-center"><BsThreeDots className="text-secondary fs-5" /></div></Modal.Body>
        <Modal.Footer>
        <IoMdTime className="dark" />
          <Button id="Pubblic" className="rounded-pill" onClick={(e) => {handleClose(); handleSubmit(e)}}>
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PostBar;
