import { Row, Col } from "react-bootstrap"

const JobList = ({list}) => {
    return (
        <Row className="row d-flex justify-content-between">
        <Col className="col-2">logo</Col>
        <Col className="col-7 d-flex flex-column overflow-auto">
          <p>{list.title}</p>
          <p>{list.company_name}</p>
          <p>{list.candidate_required_location}</p>
        </Col>
        <Col className="col-2 text-end">✖️</Col>
        </Row>
    )
}

export default JobList