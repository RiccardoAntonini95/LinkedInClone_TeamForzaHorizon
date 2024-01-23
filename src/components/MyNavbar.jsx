//commento esistente
import Container from "react-bootstrap";
import { Navbar, Nav, NavDropdown, NavbarBrand, } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { HouseDoorFill, PeopleFill, BriefcaseFill, ChatDotsFill, BellFill, PersonCircle } from "react-bootstrap-icons";
import { Grid3x3GapFill } from "react-bootstrap-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import logo from '../assets/img/logo.png';
import '../assets/css/MyNavbar.css';



const MyNavBar = () => {
    return (
        <Navbar bg="white" variant="white" expand="lg">
            <Navbar.Brand href="#home" className="d-flex align-items-center">
                <img src={logo} width={40} alt="logo" className="me-2" />
                {/* <FaLinkedin size={45} className="me-2"/> */}
                <div className='input-wrapper'>
                    <FaSearch id="search-icon" size={15}/>
                    <input
                        placeholder='Cerca'
                    />
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home" className="d-flex flex-column text-center px-4"><HouseDoorFill size={24} className="m-auto" /> Home</Nav.Link>
                    <Nav.Link href="#rete" className="d-flex flex-column text-center px-4"><PeopleFill size={24} className="m-auto" />Rete</Nav.Link>
                    <Nav.Link href="lavoro" className="d-flex flex-column text-center px-4"><BriefcaseFill size={24} className="m-auto" />Lavoro</Nav.Link>
                    <Nav.Link href="#contatti" className="d-flex flex-column text-center px-4"><ChatDotsFill size={24} className="m-auto" />Contatti</Nav.Link>
                    <Nav.Link href="#notifiche" className="d-flex flex-column text-center px-4"><BellFill size={24} className="m-auto" />Notifiche</Nav.Link>
                    <Nav.Link href="#tu" className="d-flex flex-column text-center px-4">
                        <PersonCircle size={24} className="m-auto" />
                        <NavDropdown id="basic-nav-dropdown" title="Tu">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#perleaziende" className="d-flex flex-column text-center px-4">
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