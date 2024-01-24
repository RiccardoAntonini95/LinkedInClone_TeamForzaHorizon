import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import {
  HouseDoorFill,
  PeopleFill,
  BriefcaseFill,
  ChatDotsFill,
  BellFill,
  PersonCircle,
} from "react-bootstrap-icons";
import { Grid3x3GapFill } from "react-bootstrap-icons";
import { FaSearch } from "react-icons/fa";
import logo from '../assets/img/logo.png';
import '../assets/css/MyNavbar.css';
import { useState } from "react";
import { useNavigate } from "react-router";


const MyNavBar = () => {
    const [query, setQuery] = useState()
    const navigate = useNavigate()

    const handleInputChange = (query) => {
        setQuery(query)
    }

    return (
        <Navbar bg="white" variant="white" expand="lg">
            <Navbar.Brand href="#home" className="d-flex align-items-center">
                <img src={logo} width={40} alt="logo" className="me-2" />
                <div className='input-wrapper'>
                    <FaSearch id="search-icon" size={15} onClick={() => navigate(`/jobs/${query}`)}/>
                    <input
                        placeholder='Cerca' onChange={(e) => {handleInputChange(e.target.value)}} 
                    />
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto border-end">
                    <Link to={"/"} className="d-flex flex-column text-center px-4 nav-link"><HouseDoorFill size={24} className="m-auto" /> Home</Link>
                    <Nav.Link href="#rete" className="d-flex flex-column text-center px-4"><PeopleFill size={24} className="m-auto" />Rete</Nav.Link>
                    <Nav.Link href="lavoro" className="d-flex flex-column text-center px-4"><BriefcaseFill size={24} className="m-auto" />Lavoro</Nav.Link>
                    <Nav.Link href="#contatti" className="d-flex flex-column text-center px-4"><ChatDotsFill size={24} className="m-auto" />Contatti</Nav.Link>
                    <Nav.Link href="#notifiche" className="d-flex flex-column text-center px-4"><BellFill size={24} className="m-auto" />Notifiche</Nav.Link>
                    <Nav.Link href="#tu" className="d-flex flex-column text-center px-4 not-bb">
                        <PersonCircle size={24} className="m-auto" />
                        <NavDropdown id="basic-nav-dropdown" title="Tu">
                            <NavDropdown.Item href="#action/1.1"><PersonCircle size={50} className="me-2"/>Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.2"><Link to="/profile">Go to profile</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <h5>Account</h5>
                            <NavDropdown.Item href="#action/2.2" className="mb-2 text-muted">Impostazioni e privacy</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.3" className="mb-2 text-muted">Guida</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.3" className=" text-muted">Lingua</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <h5>Gestisci</h5>
                            <NavDropdown.Item href="#action/3.2" className="mb-2 text-muted">Post e attività</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" className="mb-2 text-muted">Account per la pubblicazione di offerte di lavoro</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/4.1" className=" text-muted">Esci</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#perleaziende" className="d-flex flex-column text-center px-4 not-bb">
                        <Grid3x3GapFill size={24} className="m-auto" />
                        <NavDropdown id="basic-nav-dropdown" title="Per le aziende">
                            <Modal.Header closeButton>
                                <Modal.Title>Per le aziende</Modal.Title>
                            </Modal.Header>
                        </NavDropdown>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default MyNavBar;
