import { useState, useEffect } from "react";
import { LOADING_TIME } from "../assets/js/matteoVariables";
import { MATTEO_AUTH_TOKEN } from "../assets/js/matteoVariables";
import { url } from "../assets/js/matteoVariables";

const userId = '65b02ccc004b880018fef5d1'   //  Temporary userId for testing


export const AddExperienceModal = ({ setIsActiveProp, getExperience, setLoading/* , userId */ }) => {

  const validEndDate = new Date();
  const [area, setArea] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [role, setRole] = useState('');


  const [options, setOptions] = useState({});

  // If esc is pressed with modal open, the modal unmounts
  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      setIsActiveProp();
    }
  };

  const checkDate = () => {
    const startDateTime = new Date(startDate).getTime();
    const endDateTime = new Date(endDate).getTime();
    if (endDateTime < startDateTime) {
      alert('You cannot pick this as End date');
      return false;
    }
    return true;
  }

  useEffect(() => {
    console.log('Start date is: ', new Date(startDate));
    console.log('End date is: ', new Date(endDate));
    console.log("End date element value is: ", document.getElementById('endDate').value)
  }, [startDate, endDate])

  // On submit, trigger a few events
  const handleSubmit = (e) => {
    e.preventDefault();
    if(new Date(startDate).getTime() < new Date(endDate).getTime()){
      postExperience();
      setIsActiveProp();
      setLoading();
      setTimeout(getExperience, LOADING_TIME);
    } else {
      alert('Please pick a end date after the start date');
    }
  }

  // The browser listens for keys down
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
  }, [])

  // Options for POST fetch
  useEffect(() => {
    setOptions({
      method: 'POST',
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


  // Function for adding job experience through a POST
  const postExperience = async () => {
    try {
      const res = await fetch(`${url}/${userId}/experiences`, options);
      if (!res.ok) {
        throw new Error('Post was not successful');
      }
      const responseData = await res.json();
      console.log('Post request successful for: ', responseData)
    } catch (err) {
      console.error('Error', err);
    }
  };

  return (
    <div className="add-experience-modal-container">
      <div className="add-experience-modal">
        <div className="d-flex top-modal justify-content-between align-items-center mb-0 pb-0">
          <h4 className="notes add-experience-header">Add experience</h4>
          <button className="close-modal-btn" type="button" onClick={setIsActiveProp}>
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
        <form className="post-experience-form" onSubmit={handleSubmit}>
          <div className="input-field">
            <h6>Title*</h6>
            <input type="text" name="role" required placeholder="Ex. Retail Sales Manager" onChange={(e) => {
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
            <input type="text" name="company" required placeholder="Ex. Microsoft" onChange={(e) => {
              setCompany(e.target.value);
            }} />
          </div>
          <div className="input-field">
            <h6>Location*</h6>
            <input required type="text" name="area" placeholder="Ex. London, United Kingdom" onChange={(e) => {
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
                <input
                  required
                  type="date"
                  name="startDate"
                  id="startDate"
                  onChange={(e) => {
                    setStartDate(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="input-field">
              <h6>End date*</h6>
              <div className="d-flex employment-dates">
                <input
                  required
                  type="date"
                  name="endDate"
                  id="endDate"
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="input-field">
            <h6>Description*</h6>
            <textarea
              required
              name="description"
              id="description"
              cols="100"
              rows="5"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="d-flex justify-content-end sub-btn-container">
            <button
              variant="primary"
              type="submit"
              className="submit-post-experience"
            >
              <span>Save</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
