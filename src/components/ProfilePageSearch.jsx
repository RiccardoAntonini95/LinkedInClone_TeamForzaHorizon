import { useParams } from "react-router-dom";
import { Experience } from "./Experience";
import Footer from "./Footer";
import { FaCamera } from "react-icons/fa";
import { Container, Card, Row } from "react-bootstrap";
import "../assets/css/ProfilePage.css";
import backgroundImg from "../assets/img/background-profilePage-card.jpeg";
import { useSelector } from "react-redux";

const ProfilePageSearch = () => {
  const params = useParams();
  const allProfiles = useSelector((state) => state.totalProfiles.allProfiles);
  const [specificProfile] = allProfiles.filter(
    (profile) => profile._id == params.profileId
  );
  console.log("specificProfile ", specificProfile);

  return (
    <>
      {/* LEFT SECTION */}
      <Container className="d-flex pt-4 mb-5 profile-page-container justify-content-center">
        <Container className="main-info-container ">
          {specificProfile && (
            <>
              {/* CARD */}
              <Card>
                <Card.Header>
                  <img
                    src={backgroundImg}
                    alt="background"
                    className="header-card-img"
                  />
                </Card.Header>

                <Card.Img
                  src={specificProfile.image}
                  alt={`${specificProfile.name} ${specificProfile.surname}`}
                  className="rounded-circle card-profile-img"
                />

                <Card.Body className="">
                  <Card.Title className="d-inline-block mt-5 me-3 fs-3">
                    {specificProfile.name} {specificProfile.surname}
                  </Card.Title>

                  <Card.Text>{specificProfile.title}</Card.Text>
                  <Card.Text className="location-text">
                    {specificProfile.area} .{" "}
                    <a href="#" id="contact-info">
                      Contact Infos
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
              {/* END OF CARD */}

              {/* ABOUT */}
              {specificProfile.bio && (
                <div className="about-section">
                  <h2>About</h2>
                  <p>{specificProfile.bio}</p>
                </div>
              )}
              {/* END OF ABOUT */}
            </>
          )}

          {specificProfile && (
            <Experience userId={specificProfile._id} isSpecificProfile />
          )}
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
          </Container>
        </Container>
        {/* END OF RIGHT SECTION */}
      </Container>
      <Footer />
    </>
  );
};

export default ProfilePageSearch;
