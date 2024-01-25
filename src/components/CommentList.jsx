import { Row, Col, Image, Badge } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { STRIVE_KEY_COMMENTS } from "../assets/js/auth_keys";
import { useSelector } from "react-redux";
import user from "../assets/img/user.png"

const CommentList = ({comments}) => {

  return (
    <>
      <Row className="mb-2">
        <Col className="col-1 p-0">
          <Image className="rounded-circle" width={40} height={40} src={user} />
        </Col>
        <Col className="col-11 p-0 bg-light">
          <Row className="d-flex justify-content-between">
            <Col className="d-flex col-6">
              <p className="m-0 mx-2 fw-bold">{comments.author}</p>
              <Badge className="bg-secondary p-1">Autore</Badge>
            </Col>
            <Col className="col-6 d-flex align-items-center justify-content-end text-secondary">
              <BsThreeDots /> {/* FETCH MODIFICA */}
              <p className="m-0 pe-1">✖️</p> {/* FETCH ELIMINA */}
            </Col>
            <Col className="col-12 mt-1 ms-2">{comments.comment}</Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default CommentList
