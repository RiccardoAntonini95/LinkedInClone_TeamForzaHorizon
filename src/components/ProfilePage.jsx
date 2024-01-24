import { useState } from "react";
import { Container, Card, Row, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { STRIVE_KEY_MERLINO } from "../assets/js/auth_keys";
import { Experience } from "./Experience";
import "../assets/css/ProfilePage.css";
import backgroundImg from "../assets/img/background-profilePage-card.jpeg";
import { GoShieldCheck } from "react-icons/go";
import { FaCamera } from "react-icons/fa";

//const userId = '65b02ccc004b880018fef5d1'

const ProfilePage = () => {
  const profileData = useSelector((state) => state.profile.actualProfile);
  const [show, setShow] = useState(false);
  const [fileImg, setFileImg] = useState(null);

  const setProfileImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile", fileImg);
    console.log(fileImg);
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${profileData._id}/picture`,
        {
          mode: "cors",
          method: "POST",
          headers: {
            Authorization: `Bearer ${STRIVE_KEY_MERLINO}`,
            // "Content-Type": "multipart/form-data",
          },
          body: formData,
        }
      );
      console.log("response", res);

      if (!res.ok) throw new Error("Cannot Upload Image");

      const data = await res.json();

      console.log("data ", data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOnChange = (e) => {
    setFileImg(e.target.files[0]);
  };

  return (
    <>
      <Container className="d-flex mt-5 p-5">
        <Container className="main-info-container ">
          {profileData && (
            <Card>
              <Card.Header>
                <img
                  src={backgroundImg}
                  alt="background"
                  className="header-card-img"
                />
                <button type="button" id="header-img-loader-btn">
                  <FaCamera color="0a66c2" />
                </button>
              </Card.Header>

              <Card.Img
                onClick={handleShow}
                src={profileData.image}
                alt={`${profileData.name} ${profileData.surname}`}
                className="rounded-circle card-profile-img"
              />
              {/* MODAL */}
              <Modal
                aria-labelledby="contained-modal-title-vcenter"
                show={show}
                onHide={handleClose}
                id="modal-profile-picture"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Profile Picture
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {profileData && (
                    <img
                      className="rounded-circle modal-img"
                      src={profileData.image}
                      alt={`${profileData.name} ${profileData.surname}`}
                    />
                  )}
                </Modal.Body>
                <Modal.Footer>
                  <form
                    id="modal-form"
                    /* encType="multipart/form-data" */
                    onSubmit={setProfileImage}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      name="background-img-input"
                      id="background-img-input"
                      onChange={handleOnChange}
                    />
                    <button type="submit">Save image</button>
                  </form>
                </Modal.Footer>
              </Modal>
              {/* END OF MODAL */}

              <Card.Body className="mt-5">
                <Card.Title className="d-inline-block me-3 fs-3">
                  {profileData.name} {profileData.surname}
                </Card.Title>
                <a id="verification-link" href="#">
                  <GoShieldCheck strokeWidth={2} fill={"#0a66c2"} /> Start
                  verification
                </a>
                <Card.Text>{profileData.bio}</Card.Text>
                <Card.Text>
                  {profileData.area} .{" "}
                  <a href="#" id="contact-info">
                    Contact Infos
                  </a>
                </Card.Text>
                <Row className="card-buttons-container px-2">
                  <button type="button">Avaiable for</button>
                  <button type="button">Add profile section</button>
                  <button type="button">Other</button>
                </Row>
              </Card.Body>
            </Card>
          )}
          {/*   //const userId = '65b02ccc004b880018fef5d1' */}
          {profileData && <Experience userId={profileData._id} />}
        </Container>

        <Container className="flex-shrink secondary-info-container">
          <Container>
            <Row>
              <h4>Profile Language</h4>
              <p>Italian</p>
            </Row>

            <Row className="rounded">
              <img
                src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                alt="See who's hiring on Linkedin"
                className="ad-image"
              />
            </Row>
            <Row>{fileImg && <p>{fileImg[0]}</p>}</Row>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default ProfilePage;
