import { useState } from "react";
import { Experience } from "./Experience";
import Footer from "./Footer";
import ProfilePageActivity from "./ProfilePageActivity";
import ProfilePageModifyButton from "./ProfilePageModifyButton";
import backgroundImg from "../assets/img/background-profilePage-card.jpeg";
import { Container, Card, Row, Modal } from "react-bootstrap";
import { STRIVE_KEY_MERLINO } from "../assets/js/auth_keys";
import { GoShieldCheck } from "react-icons/go";
import { FaCamera } from "react-icons/fa";
import { setProfileAction } from "../redux/actions/ProfilePage";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/ProfilePage.css";
import Loader from "./Loader";

const ProfilePage = () => {
  const profileData = useSelector((state) => state.profile.actualProfile);
  const [show, setShow] = useState(false);

  const [fileImg, setFileImg] = useState(null);
  const dispatch = useDispatch();

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
          },
          body: formData,
        }
      );
      console.log("response", res);

      if (!res.ok) throw new Error("Cannot Upload Image");

      const data = await res.json();
      dispatch(setProfileAction(data));

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
      {/* LEFT SECTION */}
      <Container className="d-flex pt-4 mb-5 profile-page-container justify-content-center">
        <Container className="main-info-container ">
          {!profileData && <Loader />}
          {profileData && (
            <>
              {/* CARD */}
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
                    <form id="modal-form" onSubmit={setProfileImage}>
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

                <Card.Body className="">
                  <div className="d-flex justify-content-end">
                    <ProfilePageModifyButton profileData={profileData} />
                  </div>
                  <Card.Title className="d-inline-block me-3 fs-3">
                    {profileData.name} {profileData.surname}
                  </Card.Title>
                  <a id="verification-link" href="#">
                    <GoShieldCheck strokeWidth={2} fill={"#0a66c2"} /> Start
                    verification
                  </a>
                  <Card.Text>{profileData.title}</Card.Text>
                  <Card.Text className="location-text">
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
              {/* END OF CARD */}

              {/* ABOUT */}
              <div className="about-section">
                <h2>About</h2>
                <p>{profileData.bio}</p>
              </div>
              {/* END OF ABOUT */}
            </>
          )}
          {profileData && <Experience userId={profileData._id} />}
          <section>
            <ProfilePageActivity profileData={profileData} />
          </section>
        </Container>
        {/* END OF LEFT SECTION */}

        {/* RIGHT SECTION */}
        <Container className="secondary-info-container">
          <Container>
            <Container className="ProfilePageContainer">
              <Row>
                <div className="RightBarProfile">
                  <h4 className="Title3">Profile Language</h4>
                  <a href="#" className="Pencil">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-pencil"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                    </svg>
                  </a>
                </div>
                <p className="ProfilePageContainer2">Italian</p>
              </Row>

              <hr />
              <Row>
                <div className="RightBarProfile">
                  <h4 className="Title3">Public Profile & URL</h4>
                  <a href="#" className="Pencil">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-pencil"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                    </svg>
                  </a>
                </div>
                <p className="ProfilePageContainer2">www.linkedin.com</p>
              </Row>
            </Container>

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
        {/* END OF RIGHT SECTION */}
      </Container>
      <Footer />
    </>
  );
};

export default ProfilePage;
