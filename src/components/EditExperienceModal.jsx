import '../assets/css/experienceStyle.css'
import { useState, useEffect } from "react";
import { LOADING_TIME } from '../assets/js/matteoVariables';
import { MATTEO_AUTH_TOKEN } from '../assets/js/matteoVariables';
import { url } from '../assets/js/matteoVariables';


export const EditExperienceModal = ({ setIsEditProp, experience, getExperience, setLoading, setEndDateProp }) => {

    const [area, setArea] = useState(experience.area);
    const [company, setCompany] = useState(experience.company);
    const [description, setDescription] = useState(experience.description);
    const [endDate, setEndDate] = useState(experience.endDate.slice(0, 10));
    const [startDate, setStartDate] = useState(experience.startDate.slice(0, 10));
    const [role, setRole] = useState(experience.role);
    const [userId, setUserId] = useState(experience.user);
    const [experienceId, setExperienceId] = useState(experience._id);


    const [optionsPut, setOptionsPut] = useState({
        method: 'PUT',
        body: JSON.stringify({
            role: role,
            company: company,
            startDate: startDate,
            endDate: endDate,
            description: description,
            area: area
        }),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${MATTEO_AUTH_TOKEN}`,
        }
    });


    const optionsDelete = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${MATTEO_AUTH_TOKEN}`,
        },
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Escape') {
            setIsEditProp();
        }
    };

    const handleDelete = () => {
        deleteExperience(userId, experienceId);
        setIsEditProp();
        setLoading();
        setTimeout(() => {
            getExperience();
        }, LOADING_TIME);
    }

    const handlePut = (e) => {
        e.preventDefault();
        if(new Date(startDate).getTime() < new Date(endDate).getTime()){
            putExperience(userId, experienceId)
            setIsEditProp();
            setLoading();
            setTimeout(() => {
                getExperience();
            }, LOADING_TIME);
        } else {
            alert('Please pick a end date after the start date');
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress)
    }, [])


    useEffect(() => {
        setOptionsPut({
            method: 'PUT',
            body: JSON.stringify({
                role: role,
                company: company,
                startDate: startDate,
                endDate: endDate,
                description: description,
                area: area
            }),
            headers: {
                Authorization: `Bearer ${MATTEO_AUTH_TOKEN}`,
                'Content-Type': 'application/json'
            },
        })

    }, [area, company, description, endDate, startDate, role])

    const deleteExperience = async (_userId, _experienceId) => {
        try {
            const res = await fetch(`${url}/${_userId}/experiences/${_experienceId}`, optionsDelete)
            if (!res.ok) {
                throw new Error('Delete request was not successful');
            }
            console.log('Delete request successful for: ', experienceId);
        } catch (err) {
            console.error('Error: ', err)
        }
    }


    const putExperience = async (_userId, _experienceId) => {
        try {
            const res = await fetch(`${url}/${_userId}/experiences/${_experienceId}`, optionsPut);
            if (!res.ok) {
                throw new Error('Put request was not successful');
            }
            const responseData = await res.json();
            console.log('Put request successful for: ', responseData)
        } catch (err) {
            console.error('Error', err);
        }
    }




    return (
        <div className="add-experience-modal-container">
            <div className="add-experience-modal">
                <div className="d-flex top-modal justify-content-between align-items-center mb-0 pb-0">
                    <h4 className="notes add-experience-header">Edit experience</h4>
                    <button className="close-modal-btn" type="button" onClick={setIsEditProp}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" classname="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                            </svg>
                        </div>
                    </button>
                </div>
                <div className="notify-network">
                    <h5 className="notes">Notify network</h5>
                    <p className="notes">Turn on to notify your network of key profile changes (such as new job) and work anniversaries. Updates can take up to 2 hours. Learn more about <strong>sharing profile changes.</strong></p>
                </div>
                <p className="notes">* Indicates required</p>
                <form className="post-experience-form" onSubmit={handlePut}>
                    <div className="input-field">
                        <h6>Title*</h6>
                        <input type="text" name="role" required placeholder="Ex. Retail Sales Manager" value={role} onChange={(e) => {
                            setRole(e.target.value);
                        }} />
                    </div>
                    {<div className="input-field">
                        <h6>Employment type</h6>
                        <select>
                            <option value="">Please select</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Self-employed">Self-employed</option>
                            <option value="Freelance">Freelance</option>
                            <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option>
                            <option value="Apprenticeship">Apprenticeship</option>
                            <option value="Temporary">Temporary</option>
                        </select>
                        <p>Learn more about <strong>employment types.</strong></p>
                    </div>}
                    <div className="input-field">
                        <h6>Company name*</h6>
                        <input type="text" name="company" required placeholder="Ex. Microsoft" value={company} onChange={(e) => {
                            setCompany(e.target.value);
                        }} />
                    </div>
                    <div className="input-field">
                        <h6>Location*</h6>
                        <input required type="text" name="area" placeholder="Ex. London, United Kingdom" value={area} onChange={(e) => {
                            setArea(e.target.value)
                        }} />
                    </div>
                    {<div className="input-field">
                        <h6>Location type</h6>
                        <select>
                            <option value="">Please select</option>
                            <option value="On-site">On-site</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Remote">Remote</option>
                        </select>
                        <p>Pick a location type (ex: remote)</p>
                    </div>}
                    <div className="d-flex justify-content-between align-items-center date-input-field">
                        {/* <div className="d-flex checkbox-field">
                            <input type="checkbox" />
                            <p>I am currently working in this role</p>
                        </div> */}
                        <div className="input-field">
                            <h6>Start date*</h6>
                            <div className="d-flex employment-dates">
                                <input type="date" name="startDate" id="startDate" value={startDate} onChange={(e) => {
                                    setStartDate(e.target.value);
                                }} />
                            </div>
                        </div>
                        <div className="input-field">
                            <h6>End date*</h6>
                            <div className="d-flex employment-dates">
                                <input type="date" name="endDate" id="endDate" value={endDate} onChange={(e) => {
                                    setEndDate(e.target.value);
                                    setEndDateProp(e.target.value);
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className="input-field">
                        <h6>Description*</h6>
                        <textarea required
                            name="description"
                            id="description"
                            cols="100"
                            rows="5"
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}>

                        </textarea>
                    </div>
                    <div className="d-flex justify-content-between sub-btn-container">
                        <button
                            variant="primary"
                            type="button"
                            className="delete-experience-btn"
                            onClick={handleDelete}
                        ><span>Delete experience</span>
                        </button>
                        <button
                            variant="primary"
                            type="submit"
                            className="submit-post-experience"
                        ><span>Save</span></button>
                    </div>
                </form>
            </div>
        </div>
    )
}