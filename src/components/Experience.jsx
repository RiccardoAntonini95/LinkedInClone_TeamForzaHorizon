import { Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react"
import '../assets/css/experienceStyle.css'
import { Spinner } from "react-bootstrap"
import { SingleExperience } from "./SingleExperience"
import { AddExperienceModal } from "./AddExperienceModal"
import { STRIVE_KEY_MERLINO } from "../assets/js/auth_keys";
import { useSelector } from "react-redux";
import { MATTEO_AUTH_TOKEN } from "../assets/js/matteoVariables"
import { url } from "../assets/js/matteoVariables"

const userId = '65b02ccc004b880018fef5d1'

const options = {
    method: 'GET',
    headers: {
        Authorization: `Bearer ${MATTEO_AUTH_TOKEN}`,
        'Content-Type': 'application/json'
    }
}

/* const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${STRIVE_KEY_MERLINO}`,
      "Content-Type": "application/json",
    },
  }; */

export const Experience = ({ /* userId */ }) => {

    //const userId = useSelector(state => state.profile.actualProfile._id)
    const [experience, setExperience] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isActive, setIsActive] = useState(false)

    const setIsActiveProp = () => {
        setIsActive(false);
    }

    const setLoading = () => {
        setIsLoading(true);
    }

    useEffect(() => {
        if (isActive) {
            document.body.classList.add('overflow-disabled')
        } else {
            document.body.classList.remove('overflow-disabled')
        }
    }, [isActive])

    useEffect(() => {
        getExperience();
        // console.log(experience)
    }, [])

    useEffect(() => {
        // console.log(experience)
        setIsLoading(false);
    }, [experience])
    useEffect(() => {
        console.log('Is loading: ', isLoading)
    }, [isLoading])

    const getExperience = async () => {
        try {
            const res = await fetch(`${url}/${userId}/experiences`, options);
            if (!res.ok) {
                throw new Error('Network connection not ok');
            }
            const data = await res.json();
            // console.log(data);
            setExperience(data);
        } catch (error) {
            console.error('Error: ', error);
        }
    }

    return (
        <div className="experience">
            <div className="d-flex justify-content-between experience-header">
                <h2>Experience</h2>
                <div className="d-flex icons-flex">
                    <button type="button" onClick={() => setIsActive(true)}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                            </svg>
                        </div>
                    </button>
                    {/*                     <button type="button" onClick={() => console.log('edit experience')}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                            </svg>
                        </div>
                    </button> */}
                </div>
            </div>
            {isLoading && (
                <Container >
                    <Row className="justify-content-center">
                        <Spinner
                            variant="danger"
                            className="big-spinner"
                        />
                    </Row>
                </Container>
            )}
            {experience.length === 0 && (
                <>
                    <p className="no-experience">Click the icon in the corner to add your first experience</p>
                </>
            )}
            {!isLoading && (experience.length > 0) && (
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
                                    experience={element}
                                    getExperience={getExperience}
                                    setLoading={setLoading}
                                />
                            </div>
                        )
                    })}
                </>
            )}
        </div>
    )
}