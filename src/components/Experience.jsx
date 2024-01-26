import { useState, useEffect } from "react";
import { SingleExperience } from "./SingleExperience";
import { AddExperienceModal } from "./AddExperienceModal";
import { Container, Row, Col } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { STRIVE_KEY_MERLINO } from "../assets/js/auth_keys";
import { url } from "../assets/js/matteoVariables";
import "../assets/css/experienceStyle.css";

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${STRIVE_KEY_MERLINO}`,
    "Content-Type": "application/json",
  },
};

export const Experience = ({ userId, isSpecificProfile }) => {
  const [experience, setExperience] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const setIsActiveProp = () => {
    setIsActive(false);
  };

  const setLoading = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("overflow-disabled");
    } else {
      document.body.classList.remove("overflow-disabled");
    }
  }, [isActive]);

  useEffect(() => {
    getExperience();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [experience]);

  useEffect(() => {
    console.log("Is loading: ", isLoading);
  }, [isLoading]);

  const getExperience = async () => {
    try {
      const res = await fetch(`${url}/${userId}/experiences`, options);
      if (!res.ok) {
        throw new Error("Network connection not ok");
      }
      const data = await res.json();
      console.log("data from Experience fetch ", data);
      setExperience(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className="experience">
      <div className="d-flex justify-content-between experience-header">
        <h2>Experience</h2>
        {!isSpecificProfile && (
          <div className="d-flex icons-flex">
            <button type="button" onClick={() => setIsActive(true)}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                  />
                </svg>
              </div>
            </button>
          </div>
        )}
      </div>
      {isLoading && (
        <Container>
          <Row className="justify-content-center big-spinner-container">
            <Spinner variant="danger" className="big-spinner" />
          </Row>
        </Container>
      )}
      {!isSpecificProfile && experience.length === 0 && (
        <>
          <p className="no-experience">
            Click the icon in the corner to add your first experience
          </p>
        </>
      )}
      {isSpecificProfile && (
        <p className="no-experience">This has no experiences...</p>
      )}
      {!isLoading && experience.length > 0 && (
        <>
          {isActive && (
            <AddExperienceModal
              setIsActiveProp={setIsActiveProp}
              getExperience={getExperience}
              userId={userId}
              setLoading={setLoading}
            />
          )}
          {experience.map((element) => {
            return (
              <div key={element._id}>
                <SingleExperience
                  isSpecificProfile={isSpecificProfile}
                  experience={element}
                  getExperience={getExperience}
                  setLoading={setLoading}
                />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
