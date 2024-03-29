import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import {
  HouseDoorFill,
  PeopleFill,
  BriefcaseFill,
  ChatDotsFill,
  BellFill,
} from "react-bootstrap-icons";
import { Grid3x3GapFill } from "react-bootstrap-icons";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/img/logo.png";
import "../assets/css/MyNavbar.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { STRIVE_KEY_MERLINO } from "../assets/js/auth_keys";
import setAllProfilesAction from "../redux/actions/MyNavbar";

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${STRIVE_KEY_MERLINO}`,
  },
};

const MyNavBar = () => {
  const [query, setQuery] = useState("");
  const [isProfilePage, setIsProfilePage] = useState(false);
  const [allProfiles, setAllProfiles] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log("isProfilePage ", isProfilePage);
  }, [isProfilePage]);

  const profileData = useSelector((state) => state.profile.actualProfile);

  const handleInputChange = (query) => {
    setQuery(query);
  };

  const handleInputFilter = (value) => {
    const filter = allProfiles.filter((profile) =>
      profile.name.toLowerCase().includes(value)
    );
    console.log("filter ", filter);
    setFilteredData(filter);
  };

  useEffect(() => {
    getAllProfiles();
  }, []);

  const getAllProfiles = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        options
      );

      if (!res.ok) throw new Error("Cannot fetch data");

      const data = await res.json();
      // console.log("All profiles ", data);
      setAllProfiles(data);
      dispatch(setAllProfilesAction(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container fluid className="bg-white">
      <Container
        fluid
        id="navbar-container"
        className="d-flex justify-content-center bg-white"
      >
        <Navbar bg="white" variant="white" expand="lg" id="navbar">
          <Navbar.Brand className="d-flex align-items-center">
            <img src={logo} width={40} alt="logo" className="me-2" />
            <div className="input-wrapper">
              <FaSearch
                id="search-icon"
                size={15}
                onClick={() => {
                  if (!isProfilePage) {
                    navigate(`/jobs/${query}`);
                    setQuery("");
                    setIsProfilePage(false);
                  } else {
                    navigate(`/profile/search/${query}`);
                    setQuery("");
                    setIsProfilePage(true);
                  }
                }}
                style={{ cursor: "pointer" }}
              />
              <input
                placeholder={
                  isProfilePage
                    ? "Search Profiles and press Enter"
                    : "Search jobs and press Enter"
                }
                onChange={(e) => {
                  handleInputChange(e.target.value);
                  if (isProfilePage) {
                    handleInputFilter(e.target.value);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (!isProfilePage) {
                      navigate(`/jobs/${query}`);

                      setIsProfilePage(false);
                    } else {
                      navigate(`/profile/search/${query}`);

                      setIsProfilePage(true);
                    }

                    setQuery("");
                    e.target.value = "";
                  }
                }}
              />
              {isProfilePage && query != "" && filteredData.length > 0 && (
                <div className="search-result-wrapper">
                  <div className="search-result">
                    {filteredData &&
                      filteredData.map((profile, i) => {
                        return (
                          <div
                            key={i}
                            onClick={() => {
                              navigate(`/profile/${profile._id}`);
                              setQuery("");
                              setIsProfilePage(true);
                            }}
                          >
                            {profile.name} {profile.surname}
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto border-end">
              <div className="nav-link-animated">
                <Link
                  to={"/"}
                  className="d-flex flex-column text-center px-4 nav-link"
                  onClick={() => {
                    setQuery("");
                    setIsProfilePage(false);
                  }}
                >
                  <HouseDoorFill size={24} className="m-auto" /> Home
                </Link>
              </div>
              <div className="nav-link-animated">
                <Nav.Link className="d-flex flex-column text-center px-4">
                  <PeopleFill size={24} className="m-auto" />
                  Network
                </Nav.Link>
              </div>
              <div className="nav-link-animated">
                <Link
                  to={"/jobs"}
                  className="nav-link d-flex flex-column text-center px-4"
                  onClick={() => {
                    setIsProfilePage(false);
                    setQuery("");
                  }}
                >
                  <BriefcaseFill size={24} className="m-auto" />
                  Jobs
                </Link>
              </div>
              <div className="nav-link-animated">
                <Nav.Link className="d-flex flex-column text-center px-4">
                  <ChatDotsFill size={24} className="m-auto" />
                  Contacts
                </Nav.Link>
              </div>
              <div className="nav-link-animated">
                <Nav.Link className="d-flex flex-column text-center px-4">
                  <BellFill size={24} className="m-auto" />
                  Notifications
                </Nav.Link>
              </div>
              <Nav.Link className="d-flex flex-column text-center px-4 not-bb">
                <Image
                  width={24}
                  height={24}
                  className="m-auto rounded-circle object-fit-cover"
                  src={profileData.image}
                />

                <NavDropdown id="basic-nav-dropdown" title="You">
                  <NavDropdown.Item>
                    <Image
                      width={50}
                      height={50}
                      className="me-2 rounded-circle object-fit-cover border-bottom-none"
                      src={profileData.image}
                    />
                    {profileData.name} {profileData.surname}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      to="/profile"
                      className="btn btn-primary"
                      onClick={() => {
                        setIsProfilePage(true);
                        setQuery("");
                      }}
                    >
                      Go to profile
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <h5>Account</h5>
                  <NavDropdown.Item className="mb-2 text-muted">
                    Privacy and Settings
                  </NavDropdown.Item>
                  <NavDropdown.Item className="mb-2 text-muted">
                    Guide
                  </NavDropdown.Item>
                  <NavDropdown.Item className=" text-muted">
                    Language
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <h5>Manage</h5>
                  <NavDropdown.Item className="mb-2 text-muted">
                    Post and Activities
                  </NavDropdown.Item>
                  <NavDropdown.Item className="mb-2 text-muted">
                    Account for posting job offers
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className=" text-muted">
                    Exit
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Link>
            </Nav>
            <Nav id="right-nav">
              <Nav.Link className="d-flex flex-column text-center px-4 not-bb">
                <Grid3x3GapFill size={24} className="m-auto" />
                <NavDropdown id="basic-nav-dropdown" title="For companies">
                  <Modal.Header closeButton className="mb-4">
                    <Modal.Title>For companies</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Container className="border rounded px-0">
                      <div className="p-3 fw-medium">
                        Discover other LinkedIn products
                      </div>
                      <div className="d-flex flex-wrap border-top py-3 linkedin-products">
                        <div className="li-product d-flex flex-column text-center mb-3 mx-2">
                          <li-icon
                            aria-hidden="true"
                            type="app-learning"
                            class=""
                            size="large"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 40 40"
                              data-supported-dps="40x40"
                              width="40"
                              height="40"
                              focusable="false"
                              class="border"
                            >
                              <defs>
                                <linearGradient
                                  id="app-learning-@1-a"
                                  x1="7.18"
                                  y1="6.98"
                                  x2="13.8"
                                  y2="20.22"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#33aada"></stop>
                                  <stop offset="1" stop-color="#0091ca"></stop>
                                </linearGradient>
                                <linearGradient
                                  id="app-learning-@1-b"
                                  x1="12.96"
                                  y1="-17.55"
                                  x2="27.9"
                                  y2="24.33"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#665ed0"></stop>
                                  <stop offset="1" stop-color="#0073b1"></stop>
                                </linearGradient>
                              </defs>
                              <path
                                d="M20 30H8a1 1 0 01-1-1V11a1 1 0 011-1h12v20z"
                                fill="url(#app-learning-@1-a)"
                              ></path>
                              <path
                                d="M20 10h12a1 1 0 011 1v18a1 1 0 01-1 1H20V10z"
                                fill="url(#app-learning-@1-b)"
                              ></path>
                              <path
                                fill="#33aada"
                                d="M9 19h8v2H9zM9 23h8v2H9zM9 15h8v2H9z"
                              ></path>
                              <path
                                fill="#006097"
                                d="M23 19h8v2h-8zM23 23h8v2h-8zM23 15h8v2h-8z"
                              ></path>
                              <path
                                d="M17.41 15.25l7.46 4.52a.27.27 0 010 .46l-7.46 4.52a.27.27 0 01-.41-.23v-9a.27.27 0 01.41-.27z"
                                fill="#fff"
                              ></path>
                            </svg>
                          </li-icon>
                          <span className="text-muted">Learning</span>
                        </div>
                        <div className="li-product d-flex flex-column text-center mb-3 mx-2">
                          <li-icon
                            aria-hidden="true"
                            type="app-talent-insights"
                            class=" "
                            size="large"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 40 40"
                              data-supported-dps="40x40"
                              width="40"
                              height="40"
                              focusable="false"
                              class="border"
                            >
                              <defs>
                                <linearGradient
                                  id="app-talent-insights-medium-a"
                                  x1="34.05"
                                  y1="44.47"
                                  x2="13.67"
                                  y2="19.5"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#665ed0"></stop>
                                  <stop offset="1" stop-color="#0073b1"></stop>
                                </linearGradient>
                              </defs>
                              <path
                                d="M25 6H10a1 1 0 00-1 1v25a1 1 0 001 1h20a1 1 0 001-1V12z"
                                fill="#caedff"
                              ></path>
                              <path fill="#65c3e8" d="M25 6v6h6l-6-6z"></path>
                              <path
                                d="M20 19a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v12h6zm8 11v-8h-5v9h4a1 1 0 001-1zm-17-5H9v5a1 1 0 001 1h4z"
                                fill="url(#app-talent-insights-medium-a)"
                              ></path>
                            </svg>
                          </li-icon>
                          <span className="text-muted">Talent Insights</span>
                        </div>
                        <div className="li-product d-flex flex-column text-center mb-3 mx-2">
                          <li-icon
                            aria-hidden="true"
                            type="app-jobs-posting"
                            class=" "
                            size="large"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 40 40"
                              data-supported-dps="40x40"
                              width="40"
                              height="40"
                              focusable="false"
                              class="border"
                            >
                              <defs>
                                <linearGradient
                                  id="app-jobs-posting-@1-a"
                                  x1="-6.68"
                                  y1="-1"
                                  x2="25.05"
                                  y2="26.36"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#665ed0"></stop>
                                  <stop offset="1" stop-color="#0073b1"></stop>
                                </linearGradient>
                              </defs>
                              <path
                                fill="none"
                                stroke="#caedff"
                                stroke-miterlimit="10"
                                stroke-width="2"
                                d="M20 8.67l-4 6.66M20 8.67l4 6.66"
                              ></path>
                              <rect
                                x="8"
                                y="14"
                                width="24"
                                height="16"
                                rx="1"
                                ry="1"
                                fill="url(#app-jobs-posting-@1-a)"
                              ></rect>
                              <path fill="#65c3e8" d="M12 18h16v3H12z"></path>
                              <path fill="#33aada" d="M15 23h10v3H15z"></path>
                              <circle
                                cx="20"
                                cy="9"
                                r="2"
                                fill="#65c3e8"
                              ></circle>
                            </svg>
                          </li-icon>
                          <span className="text-muted">Post a job</span>
                        </div>
                        <div className="li-product d-flex flex-column text-center mb-3 mx-2">
                          <li-icon
                            aria-hidden="true"
                            type="app-ads"
                            class=" "
                            size="large"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 40 40"
                              data-supported-dps="40x40"
                              width="40"
                              height="40"
                              focusable="false"
                              class="border"
                            >
                              <defs>
                                <linearGradient
                                  id="app-ads-@1-a"
                                  x1="34.78"
                                  y1="3.84"
                                  x2="14.66"
                                  y2="25.84"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#665ed0"></stop>
                                  <stop offset="1" stop-color="#0073b1"></stop>
                                </linearGradient>
                              </defs>
                              <g fill="url(#app-ads-@1-a)">
                                <path d="M20 11.88A8.13 8.13 0 1111.88 20 8.13 8.13 0 0120 11.88M20 9a11 11 0 1011 11A11 11 0 0020 9z"></path>
                                <circle cx="20" cy="20" r="4"></circle>
                              </g>
                              <circle
                                cx="20"
                                cy="20"
                                r="2"
                                transform="rotate(-45 20.002 19.995)"
                                fill="#33aada"
                              ></circle>
                              <path
                                fill="#33aada"
                                d="M24.246 12.932l2.829 2.828-5.657 5.657-2.828-2.829z"
                              ></path>
                              <path
                                fill="#33aada"
                                d="M29.19 16.46l-4.95-.7-.7-4.95 4.94-4.95L29 11l5.14.52-4.95 4.94z"
                              ></path>
                            </svg>
                          </li-icon>
                          <span className="text-muted">Advertise</span>
                        </div>
                        <div className="li-product d-flex flex-column text-center mb-3 mx-2">
                          <li-icon
                            aria-hidden="true"
                            type="app-sales-navigator"
                            class=" "
                            size="large"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 40 40"
                              data-supported-dps="40x40"
                              width="40"
                              height="40"
                              focusable="false"
                              class="border"
                            >
                              <defs>
                                <linearGradient
                                  id="app-sales-navigator-@1-a"
                                  x1="40.53"
                                  y1="-53.4"
                                  x2="20.23"
                                  y2="19.17"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#665ed0"></stop>
                                  <stop offset="1" stop-color="#0073b1"></stop>
                                </linearGradient>
                              </defs>
                              <circle
                                cx="20"
                                cy="20"
                                r="14"
                                fill="url(#app-sales-navigator-@1-a)"
                              ></circle>
                              <path
                                d="M17.17 17.17L27.42 12a.4.4 0 01.18 0 .39.39 0 01.4.39.42.42 0 010 .19l-5.17 10.25z"
                                fill="#fff"
                              ></path>
                              <path
                                d="M17.17 17.17L12 27.42a.42.42 0 000 .19.39.39 0 00.37.38.45.45 0 00.21 0l10.25-5.12z"
                                fill="#98d8f4"
                              ></path>
                              <circle
                                cx="20"
                                cy="20"
                                r="4"
                                fill="#fff"
                              ></circle>
                              <circle
                                cx="20"
                                cy="20"
                                r="2"
                                fill="#0073b1"
                              ></circle>
                            </svg>
                          </li-icon>
                          <span className="text-muted">Sell</span>
                        </div>
                        <div className="li-product d-flex flex-column text-center mb-3 mx-2">
                          <li-icon
                            aria-hidden="true"
                            type="app-groups"
                            class=" "
                            size="large"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 40 40"
                              data-supported-dps="40x40"
                              width="40"
                              height="40"
                              focusable="false"
                              class="border"
                            >
                              <defs>
                                <linearGradient
                                  id="app-groups-@1-b"
                                  x1="1.84"
                                  y1="-24.59"
                                  x2="20.66"
                                  y2="25.05"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#665ed0"></stop>
                                  <stop offset="1" stop-color="#0073b1"></stop>
                                </linearGradient>
                                <clipPath id="app-groups-@1-a">
                                  <path
                                    d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                                    fill="none"
                                  ></path>
                                </clipPath>
                              </defs>
                              <path
                                d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                                fill="#caedff"
                              ></path>
                              <circle
                                cx="29"
                                cy="16"
                                r="3"
                                fill="#0091ca"
                              ></circle>
                              <circle
                                cx="11"
                                cy="16"
                                r="3"
                                fill="#0091ca"
                              ></circle>
                              <g clip-path="url(#app-groups-@1-a)">
                                <path
                                  d="M20 18a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v16h6V20z"
                                  fill="url(#app-groups-@1-b)"
                                ></path>
                                <path
                                  fill="#0091ca"
                                  d="M26 21h6v14h-6zM8 21h6v14H8z"
                                ></path>
                              </g>
                            </svg>
                          </li-icon>
                          <span className="text-muted">Groups</span>
                        </div>
                        <div className="li-product d-flex flex-column text-center mb-3 mx-2">
                          <li-icon
                            aria-hidden="true"
                            type="app-profinder"
                            class=" "
                            size="large"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 40 40"
                              data-supported-dps="40x40"
                              width="40"
                              height="40"
                              focusable="false"
                              class="border"
                            >
                              <circle
                                cx="20"
                                cy="12"
                                r="4"
                                fill="#0073b1"
                              ></circle>
                              <path
                                d="M31.88 13.46L16.17 29.17 18 31a1.37 1.37 0 002 0l14.71-14.71a1.13 1.13 0 00.29-.8.89.89 0 00-.29-.61l-1.41-1.42a1 1 0 00-1.42 0z"
                                fill="#0091ca"
                              ></path>
                              <path
                                d="M21.83 29.17L20 31a1.35 1.35 0 01-1 .4 1.36 1.36 0 01-1-.4l-8.71-8.71a1 1 0 010-1.41l1.41-1.41a1.07 1.07 0 01.76-.29.94.94 0 01.65.29z"
                                fill="#33aada"
                                opacity=".8"
                              ></path>
                              <path
                                fill="#0073b1"
                                d="M19 26.34l4-4V18h-6v6.34l2 2z"
                              ></path>
                            </svg>
                          </li-icon>
                          <span className="text-muted">
                            Services Marketplace
                          </span>
                        </div>
                      </div>
                    </Container>

                    <Container className="border rounded px-0 ex-business">
                      <div className="p-3 fw-medium">
                        Explore more for business
                      </div>
                      <div className="li-business d-flex flex-column border-top border-bottom py-3">
                        <a href="#" className="mb-2 px-3">
                          <h6 className="mb-0">Hire on LinkedIn</h6>
                          <span className="text-muted">
                            Find, attract and recruit talent
                          </span>
                        </a>
                        <a href="#" className="mb-2 px-3">
                          <h6 className="mb-0">Sell with LinkedIn</h6>
                          <span className="text-muted">
                            Unlock sales opportunities
                          </span>
                        </a>
                        <a href="#" className="mb-2 px-3">
                          <h6 className="mb-0">Post a job for free</h6>
                          <span className="text-muted">
                            Get qualified applicants quickly
                          </span>
                        </a>
                        <a href="#" className="mb-2 px-3">
                          <h6 className="mb-0">Advertise on LinkedIn</h6>
                          <span className="text-muted">
                            Acquire customers and grow your business
                          </span>
                        </a>
                        <a href="#" className="mb-2 px-3">
                          <h6 className="mb-0">Learn with LinkedIn</h6>
                          <span className="text-muted">
                            Courses to develop your employees
                          </span>
                        </a>
                        <a href="#" className="mb-2 px-3">
                          <h6 className="mb-0">Admin Center</h6>
                          <span className="text-muted">
                            Manage billing and account details
                          </span>
                        </a>
                      </div>
                      <div className="p-3 fw-medium">
                        <a href="#">Create a company page</a>
                      </div>
                    </Container>

                    <Container className="border rounded px-0">
                      <div className="p-3 fw-medium">
                        Discover other LinkedIn products
                      </div>
                      <div className="d-flex flex-wrap border-top py-3 linkedin-products">
                        <div className="li-product d-flex flex-column text-center mb-3 mx-2">
                          <li-icon
                            aria-hidden="true"
                            type="app-learning"
                            class=""
                            size="large"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 40 40"
                              data-supported-dps="40x40"
                              width="40"
                              height="40"
                              focusable="false"
                              class="border"
                            >
                              <defs>
                                <linearGradient
                                  id="app-learning-@1-a"
                                  x1="7.18"
                                  y1="6.98"
                                  x2="13.8"
                                  y2="20.22"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#33aada"></stop>
                                  <stop offset="1" stop-color="#0091ca"></stop>
                                </linearGradient>
                                <linearGradient
                                  id="app-learning-@1-b"
                                  x1="12.96"
                                  y1="-17.55"
                                  x2="27.9"
                                  y2="24.33"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#665ed0"></stop>
                                  <stop offset="1" stop-color="#0073b1"></stop>
                                </linearGradient>
                              </defs>
                              <path
                                d="M20 30H8a1 1 0 01-1-1V11a1 1 0 011-1h12v20z"
                                fill="url(#app-learning-@1-a)"
                              ></path>
                              <path
                                d="M20 10h12a1 1 0 011 1v18a1 1 0 01-1 1H20V10z"
                                fill="url(#app-learning-@1-b)"
                              ></path>
                              <path
                                fill="#33aada"
                                d="M9 19h8v2H9zM9 23h8v2H9zM9 15h8v2H9z"
                              ></path>
                              <path
                                fill="#006097"
                                d="M23 19h8v2h-8zM23 23h8v2h-8zM23 15h8v2h-8z"
                              ></path>
                              <path
                                d="M17.41 15.25l7.46 4.52a.27.27 0 010 .46l-7.46 4.52a.27.27 0 01-.41-.23v-9a.27.27 0 01.41-.27z"
                                fill="#fff"
                              ></path>
                            </svg>
                          </li-icon>
                          <span className="text-muted">Learning</span>
                        </div>
                        <div className="li-product d-flex flex-column text-center mb-3 mx-2">
                          <li-icon
                            aria-hidden="true"
                            type="app-talent-insights"
                            class=" "
                            size="large"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 40 40"
                              data-supported-dps="40x40"
                              width="40"
                              height="40"
                              focusable="false"
                              class="border"
                            >
                              <defs>
                                <linearGradient
                                  id="app-talent-insights-medium-a"
                                  x1="34.05"
                                  y1="44.47"
                                  x2="13.67"
                                  y2="19.5"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#665ed0"></stop>
                                  <stop offset="1" stop-color="#0073b1"></stop>
                                </linearGradient>
                              </defs>
                              <path
                                d="M25 6H10a1 1 0 00-1 1v25a1 1 0 001 1h20a1 1 0 001-1V12z"
                                fill="#caedff"
                              ></path>
                              <path fill="#65c3e8" d="M25 6v6h6l-6-6z"></path>
                              <path
                                d="M20 19a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v12h6zm8 11v-8h-5v9h4a1 1 0 001-1zm-17-5H9v5a1 1 0 001 1h4z"
                                fill="url(#app-talent-insights-medium-a)"
                              ></path>
                            </svg>
                          </li-icon>
                          <span className="text-muted">Talent Insights</span>
                        </div>
                        <div className="li-product d-flex flex-column text-center mb-3 mx-2">
                          <li-icon
                            aria-hidden="true"
                            type="app-jobs-posting"
                            class=" "
                            size="large"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 40 40"
                              data-supported-dps="40x40"
                              width="40"
                              height="40"
                              focusable="false"
                              class="border"
                            >
                              <defs>
                                <linearGradient
                                  id="app-jobs-posting-@1-a"
                                  x1="-6.68"
                                  y1="-1"
                                  x2="25.05"
                                  y2="26.36"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#665ed0"></stop>
                                  <stop offset="1" stop-color="#0073b1"></stop>
                                </linearGradient>
                              </defs>
                              <path
                                fill="none"
                                stroke="#caedff"
                                stroke-miterlimit="10"
                                stroke-width="2"
                                d="M20 8.67l-4 6.66M20 8.67l4 6.66"
                              ></path>
                              <rect
                                x="8"
                                y="14"
                                width="24"
                                height="16"
                                rx="1"
                                ry="1"
                                fill="url(#app-jobs-posting-@1-a)"
                              ></rect>
                              <path fill="#65c3e8" d="M12 18h16v3H12z"></path>
                              <path fill="#33aada" d="M15 23h10v3H15z"></path>
                              <circle
                                cx="20"
                                cy="9"
                                r="2"
                                fill="#65c3e8"
                              ></circle>
                            </svg>
                          </li-icon>
                          <span className="text-muted">Post a job</span>
                        </div>
                        <div className="li-product d-flex flex-column text-center mb-3 mx-2">
                          <li-icon
                            aria-hidden="true"
                            type="app-ads"
                            class=" "
                            size="large"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 40 40"
                              data-supported-dps="40x40"
                              width="40"
                              height="40"
                              focusable="false"
                              class="border"
                            >
                              <defs>
                                <linearGradient
                                  id="app-ads-@1-a"
                                  x1="34.78"
                                  y1="3.84"
                                  x2="14.66"
                                  y2="25.84"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#665ed0"></stop>
                                  <stop offset="1" stop-color="#0073b1"></stop>
                                </linearGradient>
                              </defs>
                              <g fill="url(#app-ads-@1-a)">
                                <path d="M20 11.88A8.13 8.13 0 1111.88 20 8.13 8.13 0 0120 11.88M20 9a11 11 0 1011 11A11 11 0 0020 9z"></path>
                                <circle cx="20" cy="20" r="4"></circle>
                              </g>
                              <circle
                                cx="20"
                                cy="20"
                                r="2"
                                transform="rotate(-45 20.002 19.995)"
                                fill="#33aada"
                              ></circle>
                              <path
                                fill="#33aada"
                                d="M24.246 12.932l2.829 2.828-5.657 5.657-2.828-2.829z"
                              ></path>
                              <path
                                fill="#33aada"
                                d="M29.19 16.46l-4.95-.7-.7-4.95 4.94-4.95L29 11l5.14.52-4.95 4.94z"
                              ></path>
                            </svg>
                          </li-icon>
                          <span className="text-muted">Advertise</span>
                        </div>
                        <div className="li-product d-flex flex-column text-center mb-3 mx-2">
                          <li-icon
                            aria-hidden="true"
                            type="app-sales-navigator"
                            class=" "
                            size="large"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 40 40"
                              data-supported-dps="40x40"
                              width="40"
                              height="40"
                              focusable="false"
                              class="border"
                            >
                              <defs>
                                <linearGradient
                                  id="app-sales-navigator-@1-a"
                                  x1="40.53"
                                  y1="-53.4"
                                  x2="20.23"
                                  y2="19.17"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#665ed0"></stop>
                                  <stop offset="1" stop-color="#0073b1"></stop>
                                </linearGradient>
                              </defs>
                              <circle
                                cx="20"
                                cy="20"
                                r="14"
                                fill="url(#app-sales-navigator-@1-a)"
                              ></circle>
                              <path
                                d="M17.17 17.17L27.42 12a.4.4 0 01.18 0 .39.39 0 01.4.39.42.42 0 010 .19l-5.17 10.25z"
                                fill="#fff"
                              ></path>
                              <path
                                d="M17.17 17.17L12 27.42a.42.42 0 000 .19.39.39 0 00.37.38.45.45 0 00.21 0l10.25-5.12z"
                                fill="#98d8f4"
                              ></path>
                              <circle
                                cx="20"
                                cy="20"
                                r="4"
                                fill="#fff"
                              ></circle>
                              <circle
                                cx="20"
                                cy="20"
                                r="2"
                                fill="#0073b1"
                              ></circle>
                            </svg>
                          </li-icon>
                          <span className="text-muted">Sell</span>
                        </div>
                        <div className="li-product d-flex flex-column text-center mb-3 mx-2">
                          <li-icon
                            aria-hidden="true"
                            type="app-groups"
                            class=" "
                            size="large"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 40 40"
                              data-supported-dps="40x40"
                              width="40"
                              height="40"
                              focusable="false"
                              class="border"
                            >
                              <defs>
                                <linearGradient
                                  id="app-groups-@1-b"
                                  x1="1.84"
                                  y1="-24.59"
                                  x2="20.66"
                                  y2="25.05"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#665ed0"></stop>
                                  <stop offset="1" stop-color="#0073b1"></stop>
                                </linearGradient>
                                <clipPath id="app-groups-@1-a">
                                  <path
                                    d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                                    fill="none"
                                  ></path>
                                </clipPath>
                              </defs>
                              <path
                                d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                                fill="#caedff"
                              ></path>
                              <circle
                                cx="29"
                                cy="16"
                                r="3"
                                fill="#0091ca"
                              ></circle>
                              <circle
                                cx="11"
                                cy="16"
                                r="3"
                                fill="#0091ca"
                              ></circle>
                              <g clip-path="url(#app-groups-@1-a)">
                                <path
                                  d="M20 18a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v16h6V20z"
                                  fill="url(#app-groups-@1-b)"
                                ></path>
                                <path
                                  fill="#0091ca"
                                  d="M26 21h6v14h-6zM8 21h6v14H8z"
                                ></path>
                              </g>
                            </svg>
                          </li-icon>
                          <span className="text-muted">Groups</span>
                        </div>
                        <div className="li-product d-flex flex-column text-center mb-3 mx-2">
                          <li-icon
                            aria-hidden="true"
                            type="app-profinder"
                            class=" "
                            size="large"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 40 40"
                              data-supported-dps="40x40"
                              width="40"
                              height="40"
                              focusable="false"
                              class="border"
                            >
                              <circle
                                cx="20"
                                cy="12"
                                r="4"
                                fill="#0073b1"
                              ></circle>
                              <path
                                d="M31.88 13.46L16.17 29.17 18 31a1.37 1.37 0 002 0l14.71-14.71a1.13 1.13 0 00.29-.8.89.89 0 00-.29-.61l-1.41-1.42a1 1 0 00-1.42 0z"
                                fill="#0091ca"
                              ></path>
                              <path
                                d="M21.83 29.17L20 31a1.35 1.35 0 01-1 .4 1.36 1.36 0 01-1-.4l-8.71-8.71a1 1 0 010-1.41l1.41-1.41a1.07 1.07 0 01.76-.29.94.94 0 01.65.29z"
                                fill="#33aada"
                                opacity=".8"
                              ></path>
                              <path
                                fill="#0073b1"
                                d="M19 26.34l4-4V18h-6v6.34l2 2z"
                              ></path>
                            </svg>
                          </li-icon>
                          <span className="text-muted">
                            Services Marketplace
                          </span>
                        </div>
                      </div>
                    </Container>
                    <Container className="border rounded px-0 ex-business">
                      <div className="p-3 fw-medium">
                        Explore more for business
                      </div>
                      <div className="li-business d-flex flex-column border-top border-bottom py-3">
                        <a href="#" className="mb-2 px-3">
                          <h6 className="mb-0">Hire on LinkedIn</h6>
                          <span className="text-muted">
                            Find, attract and recruit talent
                          </span>
                        </a>
                        <a href="#" className="mb-2 px-3">
                          <h6 className="mb-0">Sell with LinkedIn</h6>
                          <span className="text-muted">
                            Unlock sales opportunities
                          </span>
                        </a>
                        <a href="#" className="mb-2 px-3">
                          <h6 className="mb-0">Post a job for free</h6>
                          <span className="text-muted">
                            Get qualified applicants quickly
                          </span>
                        </a>
                        <a href="#" className="mb-2 px-3">
                          <h6 className="mb-0">Advertise on LinkedIn</h6>
                          <span className="text-muted">
                            Acquire customers and grow your business
                          </span>
                        </a>
                        <a href="#" className="mb-2 px-3">
                          <h6 className="mb-0">Learn with LinkedIn</h6>
                          <span className="text-muted">
                            Courses to develop your employees
                          </span>
                        </a>
                        <a href="#" className="mb-2 px-3">
                          <h6 className="mb-0">Admin Center</h6>
                          <span className="text-muted">
                            Manage billing and account details
                          </span>
                        </a>
                      </div>
                      <div className="p-3 fw-medium">
                        <a href="#">Create a company page</a>
                      </div>
                    </Container>
                  </Modal.Body>
                </NavDropdown>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  );
};

export default MyNavBar;
