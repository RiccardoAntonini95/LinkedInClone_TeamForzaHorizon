import '../assets/css/experienceStyle.css'
import { STRIVE_KEY_MERLINO } from '../assets/js/auth_keys';
import { useState, useEffect } from "react";
import { LOADING_TIME } from '../assets/js/matteoVariables';
import { MATTEO_AUTH_TOKEN } from '../assets/js/matteoVariables';
import { url } from '../assets/js/matteoVariables';


export const EditExperienceModal = ({
    setIsEditProp,
    experience,
    getExperience,
    setLoading,
}) => {

    const [area, setArea] = useState(experience.area);
    const [company, setCompany] = useState(experience.company);
    const [description, setDescription] = useState(experience.description);
    const [startDate, setStartDate] = useState(experience.startDate.slice(0, 10));
    const [endDate, setEndDate] = useState(experience.endDate.slice(0, 10));
    const [startMonth, setStartMonth] = useState(experience.startDate.slice(5, 7));
    const [startYear, setStartYear] = useState(experience.startDate.slice(0, 4));
    const [endMonth, setEndMonth] = useState(experience.endDate.slice(5, 7));
    const [endYear, setEndYear] = useState(experience.endDate.slice(0, 4));
    const [role, setRole] = useState(experience.role);
    const [userId, setUserId] = useState(experience.user);
    const [experienceId, setExperienceId] = useState(experience._id);
    const [datePassCheck, setDatePassCheck] = useState(true);



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
            Authorization: `Bearer ${STRIVE_KEY_MERLINO}`,
        }
    });


    const optionsDelete = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${STRIVE_KEY_MERLINO}`,
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
        if (new Date(startDate).getTime() < new Date(endDate).getTime()) {
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
        setStartDate(`${startYear}-${startMonth}-01`)
        setEndDate(`${endYear}-${endMonth}-02`)
    }, [startMonth, startYear, endMonth, endYear])


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
                Authorization: `Bearer ${STRIVE_KEY_MERLINO}`,
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
                            <option value="default">Please select</option>
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
                            <option value="default">Please select</option>
                            <option value="On-site">On-site</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Remote">Remote</option>
                        </select>
                        <p>Pick a location type (ex: remote)</p>
                    </div>}
                    <div className="date-input-field">
                        <div className="input-field experience-dates">
                            <div className='d-flex justify-content-between experience-date-field'>
                                <div className='start-month'>
                                    <p>Start month*</p>
                                    <select
                                        required
                                        name="startDateMonth"
                                        id="startDateMonth"
                                        value={startMonth}
                                        onChange={(e) => {
                                            setStartMonth(e.target.value);
                                        }}>
                                        <option value="">Please select</option>
                                        <option value="01">January</option>
                                        <option value="02">February</option>
                                        <option value="03">March</option>
                                        <option value="04">April</option>
                                        <option value="05">May</option>
                                        <option value="06">June</option>
                                        <option value="07">July</option>
                                        <option value="08">August</option>
                                        <option value="09">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
                                </div>
                                <div className='start-year'>
                                    <p>Start year*</p>
                                    <select
                                        required
                                        name="startDateYear"
                                        id="startDateYear"
                                        value={startYear}
                                        onChange={(e) => {
                                            setStartYear(e.target.value);
                                        }}>
                                        <option value="default">Please select</option>
                                        <option value="2024">2024</option>
                                        <option value="2023">2023</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>
                                        <option value="2009">2009</option>
                                        <option value="2008">2008</option>
                                        <option value="2007">2007</option>
                                        <option value="2006">2006</option>
                                        <option value="2005">2005</option>
                                        <option value="2004">2004</option>
                                        <option value="2003">2003</option>
                                        <option value="2002">2002</option>
                                        <option value="2001">2001</option>
                                        <option value="2000">2000</option>
                                        <option value="1999">1999</option>
                                        <option value="1998">1998</option>
                                        <option value="1997">1997</option>
                                        <option value="1996">1996</option>
                                        <option value="1995">1995</option>
                                        <option value="1994">1994</option>
                                        <option value="1993">1993</option>
                                        <option value="1992">1992</option>
                                        <option value="1991">1991</option>
                                        <option value="1990">1990</option>
                                        <option value="1989">1989</option>
                                        <option value="1988">1988</option>
                                        <option value="1987">1987</option>
                                        <option value="1986">1986</option>
                                        <option value="1985">1985</option>
                                        <option value="1984">1984</option>
                                        <option value="1983">1983</option>
                                        <option value="1982">1982</option>
                                        <option value="1981">1981</option>
                                        <option value="1980">1980</option>
                                        <option value="1979">1979</option>
                                        <option value="1978">1978</option>
                                        <option value="1977">1977</option>
                                        <option value="1976">1976</option>
                                        <option value="1975">1975</option>
                                        <option value="1974">1974</option>
                                        <option value="1973">1973</option>
                                        <option value="1972">1972</option>
                                        <option value="1971">1971</option>
                                        <option value="1970">1970</option>
                                        <option value="1969">1969</option>
                                        <option value="1968">1968</option>
                                        <option value="1967">1967</option>
                                        <option value="1966">1966</option>
                                        <option value="1965">1965</option>
                                        <option value="1964">1964</option>
                                        <option value="1963">1963</option>
                                        <option value="1962">1962</option>
                                        <option value="1961">1961</option>
                                        <option value="1960">1960</option>
                                        <option value="1959">1959</option>
                                        <option value="1958">1958</option>
                                        <option value="1957">1957</option>
                                        <option value="1956">1956</option>
                                        <option value="1955">1955</option>
                                        <option value="1954">1954</option>
                                        <option value="1953">1953</option>
                                        <option value="1952">1952</option>
                                        <option value="1951">1951</option>
                                        <option value="1950">1950</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="input-field experience-dates">
                            <div className='d-flex justify-content-between experience-date-field'>
                                <div className='end-month'>
                                    <p className='mb-1'>End month*</p>
                                    <select required
                                        name="endDateMonth"
                                        id="endDateMonth"
                                        value={endMonth}
                                        onChange={(e) => {
                                            setEndMonth(e.target.value);
                                        }}>
                                        <option value="">Please select</option>
                                        <option value="01">January</option>
                                        <option value="02">February</option>
                                        <option value="03">March</option>
                                        <option value="04">April</option>
                                        <option value="05">May</option>
                                        <option value="06">June</option>
                                        <option value="07">July</option>
                                        <option value="08">August</option>
                                        <option value="09">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
                                </div>
                                <div className='end-year'>
                                    <p className='mb-1'>End year*</p>
                                    <select required
                                        name="endDateYear"
                                        id="endDateYear"
                                        value={endYear}
                                        onChange={(e) => {
                                            setEndYear(e.target.value);
                                        }}>
                                        <option value="">Please select</option>
                                        <option value="2024">2024</option>
                                        <option value="2023">2023</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>
                                        <option value="2009">2009</option>
                                        <option value="2008">2008</option>
                                        <option value="2007">2007</option>
                                        <option value="2006">2006</option>
                                        <option value="2005">2005</option>
                                        <option value="2004">2004</option>
                                        <option value="2003">2003</option>
                                        <option value="2002">2002</option>
                                        <option value="2001">2001</option>
                                        <option value="2000">2000</option>
                                        <option value="1999">1999</option>
                                        <option value="1998">1998</option>
                                        <option value="1997">1997</option>
                                        <option value="1996">1996</option>
                                        <option value="1995">1995</option>
                                        <option value="1994">1994</option>
                                        <option value="1993">1993</option>
                                        <option value="1992">1992</option>
                                        <option value="1991">1991</option>
                                        <option value="1990">1990</option>
                                        <option value="1989">1989</option>
                                        <option value="1988">1988</option>
                                        <option value="1987">1987</option>
                                        <option value="1986">1986</option>
                                        <option value="1985">1985</option>
                                        <option value="1984">1984</option>
                                        <option value="1983">1983</option>
                                        <option value="1982">1982</option>
                                        <option value="1981">1981</option>
                                        <option value="1980">1980</option>
                                        <option value="1979">1979</option>
                                        <option value="1978">1978</option>
                                        <option value="1977">1977</option>
                                        <option value="1976">1976</option>
                                        <option value="1975">1975</option>
                                        <option value="1974">1974</option>
                                        <option value="1973">1973</option>
                                        <option value="1972">1972</option>
                                        <option value="1971">1971</option>
                                        <option value="1970">1970</option>
                                        <option value="1969">1969</option>
                                        <option value="1968">1968</option>
                                        <option value="1967">1967</option>
                                        <option value="1966">1966</option>
                                        <option value="1965">1965</option>
                                        <option value="1964">1964</option>
                                        <option value="1963">1963</option>
                                        <option value="1962">1962</option>
                                        <option value="1961">1961</option>
                                        <option value="1960">1960</option>
                                        <option value="1959">1959</option>
                                        <option value="1958">1958</option>
                                        <option value="1957">1957</option>
                                        <option value="1956">1956</option>
                                        <option value="1955">1955</option>
                                        <option value="1954">1954</option>
                                        <option value="1953">1953</option>
                                        <option value="1952">1952</option>
                                        <option value="1951">1951</option>
                                        <option value="1950">1950</option>
                                    </select>
                                </div>
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