import "../assets/css/experienceStyle.css";
import "../assets/css/ProfilePageModifyButton.css";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { STRIVE_KEY_MERLINO } from "../assets/js/auth_keys";
import { useDispatch } from "react-redux";
import { setProfileAction } from "../redux/actions/ProfilePage";

const options = {
  method: "PUT",
  headers: {
    Authorization: `Bearer ${STRIVE_KEY_MERLINO}`,
    "Content-Type": "Application/json",
  },
  body: {},
};

const ProfilePageModifyButton = ({ profileData }) => {
  const [show, setShow] = useState(false);
  const [queryName, setQueryName] = useState(null);
  const [querySurname, setQuerySurname] = useState(null);
  const [queryBio, setQueryBio] = useState(null);
  const [queryTitle, setQueryTitle] = useState(null);
  const [queryLocation, setQueryLocation] = useState(null);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleCloseSaveBtn = () => {
    updateProfileInfo();
    setTimeout(() => {
      setShow(false);
    }, 300);
  };
  const handleShow = () => setShow(true);

  const handleNameOnChange = (e) => setQueryName(e.target.value);
  const handleSurnameOnChange = (e) => setQuerySurname(e.target.value);
  const handleBioOnChange = (e) => setQueryBio(e.target.value);
  const handleTitleOnChange = (e) => setQueryTitle(e.target.value);
  const handleLocationOnChange = (e) => setQueryLocation(e.target.value);

  const updateProfileInfo = async () => {
    if (queryName || querySurname || queryBio || queryTitle || queryLocation) {
      if (queryName) options.body = { ...options.body, name: queryName };
      if (querySurname)
        options.body = { ...options.body, surname: querySurname };
      if (queryBio) options.body = { ...options.body, bio: queryBio };
      if (queryTitle) options.body = { ...options.body, title: queryTitle };
      if (queryLocation)
        options.body = { ...options.body, area: queryLocation };
      options.body = JSON.stringify(options.body);
      console.log("body per la fetch stringato", options.body);

      try {
        const res = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/",
          options
        );

        if (!res.ok) throw new Error("Cannot fetch data");

        const data = await res.json();
        console.log("update worked!: ", data);
        dispatch(setProfileAction(data));
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
  };
  return (
    <>
      <button className="edit-experience-btn d-block" onClick={handleShow}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil"
            id="pencil"
            viewBox="0 0 16 16"
          >
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
          </svg>
        </div>
      </button>

      <Modal id="profile-modal-edit-info" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify Presentation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={profileData.name}
                value={queryName}
                onChange={handleNameOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-5">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder={profileData.surname}
                value={querySurname}
                onChange={handleSurnameOnChange}
              />
            </Form.Group>

            <h3>Bio</h3>
            <Form.Group className="mb-3">
              <Form.Label>Tell us something about you</Form.Label>
              <Form.Control
                type="text"
                placeholder={profileData.bio}
                value={queryBio}
                onChange={handleBioOnChange}
              />
            </Form.Group>

            <h3>Working Position</h3>
            <Form.Group className="mb-3">
              <Form.Label>Your actual job title</Form.Label>
              <Form.Control
                type="text"
                placeholder={profileData.title || "developer"}
                value={queryTitle}
                onChange={handleTitleOnChange}
              />
            </Form.Group>

            <h3>Location</h3>
            <Form.Group className="mb-3">
              <Form.Label>Country/ Geographical Area</Form.Label>
              <Form.Control
                type="text"
                placeholder={profileData.area}
                value={queryLocation}
                onChange={handleLocationOnChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="button" onClick={handleCloseSaveBtn}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfilePageModifyButton;
