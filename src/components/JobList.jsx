import { Row, Col, Image } from "react-bootstrap"
import logo from "../assets/img/logo.png"
import { GiRadarSweep } from "react-icons/gi";
import "../assets/css/jobList.css"

const JobList = ({list}) => {
    return (
        <Row className="row d-flex justify-content-between job-hover">
        <Col className="col-2">
          <Image className="img-fluid" src={logo} alt="logo" />
        </Col>
        <Col className="col-7 d-flex flex-column">
          <p className="fw-bold fs-5 m-0 text-primary">{list.title}</p>
          <p className="m-0">{list.company_name}</p>
          <p className="text-secondary">{list.candidate_required_location}</p>
          <p className="text-secondary m-0"><GiRadarSweep className="text-success"/> Active Hiring</p>
          <p className="text-secondary">Viewed</p>
        </Col>
        <Col className="col-2 text-end">✖️</Col>
        </Row>
    )
}

export default JobList