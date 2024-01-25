import "../assets/css/ProfilePage.css";
import { useEffect, useState } from "react";
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
import { AiFillPicture } from "react-icons/ai";
import { MdCalendarMonth } from "react-icons/md";
import { GrTextWrap } from "react-icons/gr";
import { IoMdTime } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { TiStarburst } from "react-icons/ti";
import { FaRegFaceSmile } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { STRIVE_KEY_MERLINO } from "../assets/js/auth_keys";
import { convertTime } from "../assets/js";

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${STRIVE_KEY_MERLINO}`,
  },
};

const optionsPut = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${STRIVE_KEY_MERLINO}`,
    "Content-Type": "application/json",
  },
  body: "",
};

const ProfilePageActivity = ({ profileData }) => {
  const [posts, setPosts] = useState();
  const [query, setQuery] = useState();
  const [show, setShow] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        options
      );

      if (!res.ok) throw new Error("Cannot fetch data");

      const data = await res.json();
      console.log("ProfilePageActivity ", data);
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment();
  };

  const postComment = async () => {
    optionsPut.body = JSON.stringify({ text: query });
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        optionsPut
      );
      if (!res.ok) throw new Error("Cannot fetch data");

      const data = await res.json();
      console.log(data);
      alert("Your message was send successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="containerActivity">
      <div class="card-body">
        <Row className="p-3">
          <div className="d-flex icons-flex ">
            <h4>Activity</h4>
            <div>
              <Button
                variant="outline-primary"
                className="borderButton border"
                onClick={handleShow}
              >
                Create Post
              </Button>
              {/* MODAL */}
              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header className="border-0" closeButton>
                  <Col xs={1}>
                    <Image
                      src={profileData.image}
                      style={{ width: "40px", height: "40px" }}
                      className="rounded-circle"
                    />
                  </Col>
                  <Col xs={6}>
                    <p className="m-0 fw-bold px-2">
                      {profileData.name} {profileData.surname}
                    </p>
                    <p className="Post text-secondary m-0 px-2">
                      Publish: Anyone
                    </p>
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
                      handleSubmit(e);
                      handleClose();
                    }}
                  >
                    Post
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* END OF MODAL */}
              <button type="button">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil"
                    id="pencil"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </Row>
        <div>
          <Button className="btn btn-success border mx-2 borderButton">
            Post
          </Button>
          <Button
            variant="outline-secondary"
            className="border mx-2 borderButton"
          >
            Comments
          </Button>
        </div>

        {posts &&
          posts
            .filter((post) => post.user._id === profileData._id)
            .map((post, i) => {
              const { day, month, year } = convertTime(post.createdAt);

              return (
                <Row key={i}>
                  <div className="mx-3 border-bottom borderProfile">
                    <div>
                      <h4 className="profileText">
                        {profileData.name} {profileData.surname}
                      </h4>
                      <p className="profileText2">
                        posted this {`${day}/${month}/${year}`}
                        <BsFillPeopleFill />
                      </p>
                    </div>
                    <p>{post.text}</p>
                  </div>
                </Row>
              );
            })}

        <div className="showPost2">
          <a href="#" className="showPost">
            Show all posts <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageActivity;
