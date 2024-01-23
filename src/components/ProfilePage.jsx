import { useEffect, useState } from "react";
import { Container, Card, Row, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setProfileAction } from "../redux/actions/ProfilePage";
import { STRIVE_KEY_GAE } from "../assets/js/auth_keys";
import "../assets/css/ProfilePage.css";
import ProvaReducer from "./ProvaReducer";
import { GoShieldCheck } from "react-icons/go";
import { FaCamera } from "react-icons/fa";

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${STRIVE_KEY_GAE}`,
    "Content-Type": "application/json",
  },
};

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  /*  const profileData = useSelector((state) => state.profile.actualProfile); */
  const [show, setShow] = useState(false);
  const [fileImg, setFileImg] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        options
      );

      if (!res.ok) throw new Error("Cannot fetch data");

      const data = await res.json();
      setProfileData(data);
      dispatch(setProfileAction(data));
      console.log("getProfileData data: ", data);
    } catch (err) {
      console.log(err);
    }
  };

  const setProfileImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile", fileImg);
    console.log(fileImg);
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${profileData._id}/picture`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${STRIVE_KEY_GAE}`,
            /*   "Content-Type": "multipart/form-data", */
          },
          body: formData,
        }
      );
      console.log("response", res);

      if (!res.ok) throw new Error("Cannot Upload Image");

      console.log("formData", formData);
      //setFileImg(URL.createObjectURL(file));
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
      {profileData && (
        <Container className="d-flex mt-5 p-5">
          <Container className="main-info-container ">
            <Card>
              <Card.Header>
                <img
                  src="https://media.licdn.com/dms/image/D4D16AQEuFnpwxpadJQ/profile-displaybackgroundimage-shrink_350_1400/0/1695901435207?e=1711584000&v=beta&t=5L0zFPxA6sO5dN6BvcRygVKTopWNPVWuxbmF5M0scGU"
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
              {/* MODALE */}
              <Modal
                aria-labelledby="contained-modal-title-vcenter"
                show={show}
                onHide={handleClose}
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
                    encType="multipart/form-data"
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
      )}
      <ProvaReducer />
    </>
  );
};

export default ProfilePage;
