import React from 'react';
import { Row, Col, Container, Button, Image } from 'react-bootstrap';
import { AiFillPicture } from "react-icons/ai";
import { MdCalendarMonth } from "react-icons/md";
import { GrTextWrap } from "react-icons/gr";

const TopBar = () => {
  return (
    <Container className='my-4 border rounded-3 bg-white'>
        <Row className="justify-content-md-center p-3">
        <Col xs={2}>
        <Image src="" roundedCircle />
        </Col>
        <Col xs={10}><Button className='w-100 rounded-pill border border-secondary bg-white text-secondary text-start p-3'>Avvia un Post</Button></Col>
      </Row>
      <Row className='px-3 pb-3'>
        <Col xs={5} className='d-flex align-items-center justify-content-center p-0'><AiFillPicture className='fs-3 text-info' /><p className='Post m-0 px-3 text-secondary'>Contenuti multimediali</p></Col>
        <Col xs={3} className='d-flex align-items-center justify-content-center p-0'><MdCalendarMonth className='fs-3 text-warning' /><p className='Post m-0 px-3 text-secondary'>Evento</p></Col>
        <Col xs={4} className='d-flex align-items-center justify-content-end p-0'><GrTextWrap className='fs-5 text-danger' /><p className='Post m-0 px-3 text-secondary'>Scrivi un articolo</p></Col>
      </Row>
    </Container>
  );
};

export default TopBar;