import { useState, useEffect } from "react";
import JobExeperienceIcon from "../assets/img/JobExperienceIcon.png";
import { convertTime } from "../assets/js";
import { EditExperienceModal } from "./EditExperienceModal"
import { MONTHS } from "../assets/js/matteoVariables";
import '../assets/css/experienceStyle.css'
import { STRIVE_KEY_MERLINO } from "../assets/js/auth_keys";
import { url } from "../assets/js/matteoVariables";

export const SingleExperience = ({ experience, getExperience, setLoading }) => {

    // Set date format to output
    const { day, month, year } = convertTime(experience.startDate);
    let endDay, endMonth, endYear;
    if (experience.endDate) {
        const { day, month, year } = convertTime(experience.endDate);
        endDay = day;
        endMonth = month;
        endYear = year;
    }

    // State that says wether modal is open. By default it is closed
    const [isEdit, setIsEdit] = useState(false);
    const [experienceImage, setExperienceImage] = useState(experience.image ? experience.image : null);

    // State to pass as prop
    const setIsEditProp = () => {
        setIsEdit(false);
    }



    // Disables scrolling and clicking in the background when modal is open
    useEffect(() => {
        if (isEdit) {
            document.body.classList.add('overflow-disabled')
        } else {
            document.body.classList.remove('overflow-disabled')
        }
    }, [isEdit])

    return (
        <div className="d-flex single-experience">
            {experienceImage === null ? (
                <img src={JobExeperienceIcon} alt="Default job icon" className="job-image"/>
            ) : (
                <img src={experienceImage} className="job-image" />
            )}
            <div className="experience-details">
                <div className="d-flex justify-content-between align-items-center">
                    <h3>{experience.role}</h3>
                    <button className="edit-experience-btn" type="button" onClick={() => {
                        setIsEdit(true);
                    }}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                            </svg>
                        </div>
                    </button>
                </div>

                <p>{experience.area}</p>
                <p>{experience.company}</p>
                <p>
                    {MONTHS[month]} {year}{" "}
                    {(new Date().getTime() > new Date(experience.endDate).getTime()) ?
                        (`- ${MONTHS[endMonth]} ${endYear}`) : ('- Present')
                    }
                </p>
                <p>{experience.description}</p>
            </div>
            {isEdit && (
                <>
                    <EditExperienceModal
                        setIsEditProp={setIsEditProp}
                        experience={experience}
                        getExperience={getExperience}
                        setLoading={setLoading}
                    />
                </>
            )}
        </div>
    );
};

