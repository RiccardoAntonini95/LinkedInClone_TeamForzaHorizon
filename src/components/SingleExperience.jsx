import { useState, useEffect } from "react";
import JobExeperienceIcon from "../assets/img/JobExperienceIcon.png";
import { convertTime } from "../assets/js";

export const SingleExperience = ({ experience }) => {
  const { day, month, year } = convertTime(experience.startDate);

  let endDay, endMonth, endYear;
  if (experience.endDate) {
    const { day, month, year } = convertTime(experience.endDate);
    endDay = day;
    endMonth = month;
    endYear = year;
  }
  return (
    <div className="d-flex single-experience">
      <img src={JobExeperienceIcon} alt="Icona" />
      <div className="experience-details">
        <h3>{experience.role}</h3>
        <p>{experience.area}</p>
        <p>{experience.company}</p>
        <p>
          {/*    {experience.startDate} - {experience.endDate} - How long */}
          {day}/{month}/{year}{" "}
          {experience.endDate && `- ${endDay}/${endMonth}/${endYear}`}
        </p>
        <p>{experience.description}</p>
      </div>
    </div>
  );
};
