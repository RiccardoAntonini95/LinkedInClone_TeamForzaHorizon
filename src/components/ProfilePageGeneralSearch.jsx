import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/css/ProfilePageGeneralSearch.css";
import Footer from "./Footer";

const ProfilePageGeneralSearch = () => {
  const params = useParams();
  const navigate = useNavigate();
  const allProfiles = useSelector((state) => state.totalProfiles.allProfiles);
  const searchedProfiles = allProfiles
    .filter((profile) =>
      profile.name.toLowerCase().includes(params.profileName.toLowerCase())
    )
    .slice(0, 9);

  return (
    <>
      <Container className="mt-5 mb-5 d-flex align-items-start justify-content-between gap-2 main-container">
        {/* LEFT SECTION */}
        <Container>
          <div className="bg-white left-section">
            <p>On this page</p>
            <p>People</p>
            <p>Post</p>
            <p>Company</p>
            <p>Other people</p>
          </div>
        </Container>

        {/* MIDDLE SECTION */}
        <Container className="results-container">
          <h2 className="mb-4 ms-3 p-2">People</h2>
          <div>
            {searchedProfiles &&
              searchedProfiles.map((profile, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => navigate(`/profile/${profile._id}`)}
                    className="d-flex gap-1 align-items-start justify-content-center single-profile"
                  >
                    <div className="flex-shrink p-1">
                      <img
                        src={profile.image}
                        alt={`${profile.name} ${profile.surname}`}
                      />
                    </div>
                    <div className="flex-grow-1 p-1">
                      <h3>
                        {profile.name} {profile.surname}
                      </h3>
                      <p>{profile.title}</p>
                      <p>{profile.bio}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </Container>

        {/* RIGHT SECTION */}
        <Container>
          <Container>
            <Row className="rounded">
              <img
                src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                alt="See who's hiring on Linkedin"
                className="ad-image"
              />
            </Row>
            {/*    <Row>{fileImg && <p>{fileImg[0]}</p>}</Row> */}
          </Container>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default ProfilePageGeneralSearch;
