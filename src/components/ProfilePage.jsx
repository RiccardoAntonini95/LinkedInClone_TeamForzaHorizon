import { useEffect, useState } from "react";
import { Container, Card, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setProfileAction } from "../redux/actions/ProfilePage";
import { STRIVE_KEY_GAE } from "../assets/js/auth_keys";
import { Experience } from "./Experience";
import "../assets/css/ProfilePage.css";

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${STRIVE_KEY_GAE}`,
  },
};

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  /*  const profileData = useSelector((state) => state.profile.actualProfile); */
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
      console.log(data);
    } catch (err) {
      console.log(err);
    }
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
              </Card.Header>

              <Card.Img
                src={profileData.image}
                alt={`${profileData.name} ${profileData.surname}`}
                className="rounded-circle card-profile-img"
              />
              <Card.Body className="mt-5">
                <Card.Title>
                  {profileData.name} {profileData.surname}
                </Card.Title>
                <a href="#">Inizia la verifica</a>
                <Card.Text>{profileData.bio}</Card.Text>
                <Card.Text>
                  {profileData.area} . <a href="#">Contact Infos</a>
                </Card.Text>
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
            </Container>
          </Container>
        </Container>
      )}
      <Experience />
    </>
  );
};

export default ProfilePage;
