import { useState, useEffect } from "react"
import JobExeperienceIcon from '../assets/img/JobExperienceIcon.png'

export const SingleExperience = ({ experience }) => {
    return (
        <div className="d-flex single-experience">
            <img src={JobExeperienceIcon} alt="Icona" />
            <div className="experience-details">
                <h3>{experience.role}</h3>
                <p>{experience.area}</p>
                <p>{experience.company}</p>
                <p>{experience.startDate.slice(0, 10)} - {experience.endDate.slice(0, 10)} - How long</p>
                <p>{experience.description}</p>
            </div>
        </div>
    )
}