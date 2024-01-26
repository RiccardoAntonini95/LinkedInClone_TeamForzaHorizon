import { useState } from "react";
import CommentList from "./CommentList";
import user from "../assets/img/user.png";
import { IoPeople } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { AiTwotoneLike, AiFillPicture } from "react-icons/ai";
import { FaRegCommentDots, FaRegFaceSmile, FaRegImage } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";
import {
  STRIVE_KEY_MERLINO,
  STRIVE_KEY_COMMENTS,
} from "../assets/js/auth_keys";
import {
  Row,
  Col,
  Container,
  Button,
  Image,
  Modal,
  FormGroup,
  Form,
  ModalBody,
} from "react-bootstrap";
import { MdCalendarMonth } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { TiStarburst } from "react-icons/ti";
import { useSelector } from "react-redux";

const optionsDelete = {
  method: "DELETE",
  headers: {
    Authorization: `Bearer ${STRIVE_KEY_MERLINO}`,
  },
};

const PostList = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const profileData = useSelector((state) => state.profile.actualProfile);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState();
  const [queryComment, setQueryComment] = useState();

  const handlePostComment = async () => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${STRIVE_KEY_COMMENTS}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment: queryComment,
            elementId: props.posts._id,
            rate: 5,
          }),
        }
      );
      if (!res.ok) throw new Error("Error posting comment");

      alert("Your comment was correctly posted");
    } catch (error) {
      console.log(error);
    }
  };

  const handleModPost = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${props.posts._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${STRIVE_KEY_MERLINO}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: `${query}` }),
        }
      );
      console.log("response", res);

      if (!res.ok) throw new Error("Error posting");

      alert("Your Post was succesfully modified");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePost = async () => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${props.posts._id}`,
        optionsDelete
      );
      if (!res.ok) throw new Error("Cannot fetch data");
      const data = await res.json();
      console.log(data, "sono dentro DELETE");
    } catch (err) {
      console.log("error", err);
      alert("Your post was successfully deleted");
    }
  };

  const handleLike = () => {
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };
  const date = new Date(`${props.posts.createdAt}`);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    <Container className="my-2 border rounded-3 bg-white">
      <Row className="d-flex bg-white justify-content-between p-3 my-3">
        <Col className="col-1 me-2">
          <Image
            className="rounded-circle object-fit-cover"
            width={45}
            height={45}
            src={props.posts.user.image ? props.posts.user.image : user}
          />
        </Col>
        <Col className="col-8 me-auto ps-2">
          <p className="fs-5 fw-bold">{props.posts.username}</p>
          <p className="text-secondary">
            {day}/{month}/{year} . <IoPeople />
          </p>
        </Col>
        <Col className="col-2 text-end p-0">
          <BsThreeDots
            className="me-1"
            style={{ cursor: "pointer" }}
            onClick={() => handleShow()}
          />
          <button
            className="border-0 bg-white"
            onClick={() => handleDeletePost()}
          >
            ✖️
          </button>
        </Col>
        <Row>
          <p>{props.posts.text}</p>
          {props.posts.image && (
            <Image src={props.posts.image} />
          )}
        </Row>
        <Row className="text-center text-secondary p-0">
          <Col
            className="fs-5 py-4 px-5"
            onClick={() => handleLike()}
            style={{ color: isClicked ? "blue" : "" }}
          >
            <AiTwotoneLike className="mx-3" />
            <span style={{ fontSize: "0.8em" }}>Recommend</span>
          </Col>
          <Col className="fs-5 py-4 px-5">
            <FaRegCommentDots className="mx-3" />
            <span style={{ fontSize: "0.8em" }}>Comment</span>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="col-1 p-0">
            <Image
              className="rounded-circle object-fit-cover"
              width={40}
              height={40}
              src={profileData.image}
            />
          </Col>
          <Col className="col-11 p-0 position-relative">
            <input
              type="text"
              className="border border-secondary rounded-pill w-100 p-2"
              placeholder="Write a comment.."
              onChange={(e) => setQueryComment(e.target.value)}
            ></input>
            <FaRegSmile
              className="position-absolute text-secondary"
              style={{ right: "70px", bottom: "15px" }}
            />
            <FaRegImage
              className="position-absolute text-secondary"
              style={{ right: "20px", bottom: "15px" }}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="col-1"></Col>
          <Col className="col-11 p-0 mb-3">
            <Button
              variant="primary"
              className="rounded-pill px-4 py-1"
              onClick={() => handlePostComment()}
            >
              Post
            </Button>
          </Col>
        </Row>
        {/* COMMENTS */}
        {props.comments &&
          props.comments.map((singoloCommento, i) => (
            <CommentList key={i} comments={singoloCommento} />
          ))}
      </Row>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header className="border-0" closeButton>
          <Col xs={1}>
            <Image
              src={profileData.image}
              style={{ width: "40px", height: "40px" }}
              className="rounded-circle object-fit-cover"
            />
          </Col>
          <Col xs={6}>
            <p className="m-0 fw-bold px-2">
              {profileData.name} {profileData.surname}
            </p>
            <p className="Post text-secondary m-0 px-2">Publish: Anyone</p>
          </Col>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <FormGroup>
            <Form.Control
              className="border-0"
              as="textarea"
              placeholder="What would you like to talk about?"
              rows={8}
              onChange={(e) => setQuery(e.target.value)}
            />
          </FormGroup>
        </Modal.Body>
        <ModalBody className="py-0">
          <FaRegFaceSmile className="mx-3" />
        </ModalBody>
        <Modal.Body className="d-flex">
          <div className="m-2 p-2 rounded-circle bg-body-secondary d-flex justify-content-center align-items-center">
            <AiFillPicture className="text-secondary fs-5" />
          </div>
          <div className="m-2 p-2 rounded-circle bg-body-secondary d-flex justify-content-center align-items-center">
            <MdCalendarMonth className="text-secondary fs-5" />
          </div>
          <div className="m-2 p-2 rounded-circle bg-body-secondary d-flex justify-content-center align-items-center">
            <TiStarburst className="text-secondary fs-5" />
          </div>
          <div></div>
          <div className="m-2 p-2 rounded-circle bg-body-secondary d-flex justify-content-center align-items-center">
            <BsThreeDots className="text-secondary fs-5" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <IoMdTime className="dark" />
          <Button
            id="Pubblic"
            className="rounded-pill"
            onClick={(e) => {
              handleClose();
              handleModPost(e);
            }}
          >
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PostList;
