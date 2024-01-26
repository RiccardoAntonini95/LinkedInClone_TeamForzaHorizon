import { useEffect, useState } from "react";
import HomeFooter from "./HomeFooter";
import JobList from "./JobList";
import { Row, Col, ListGroup, Button, Image } from "react-bootstrap";
import { FaBookmark, FaList, FaArrowRight } from "react-icons/fa6";
import { TbClipboardCheck } from "react-icons/tb";
import { BsFillPlayBtnFill, BsPencilSquare } from "react-icons/bs";
import { RiSettings4Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

const Jobs = () => {
  const [defaultJobs, setDefaultJobs] = useState(null);
  const profileData = useSelector((state) => state.profile.actualProfile);

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?category=writing&limit=10"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setDefaultJobs(data);
      } else {
        console.log("Errore del fetch");
      }
    } catch (err) {
      console.log("Errore:", err);
    }
  };

  return (
    <Row className="d-flex justify-content-evenly mt-3 mx-3">
      <Col className="col-3 border rounded text-center fw-bold">
        {" "}
        {/*LEFT MENU'*/}
        <ListGroup>
          <ListGroup.Item>
            <FaBookmark /> My job offers
          </ListGroup.Item>
          <ListGroup.Item>
            <FaList /> Preferences
          </ListGroup.Item>
          <ListGroup.Item>
            <TbClipboardCheck /> Skill ratings
          </ListGroup.Item>
          <ListGroup.Item>
            <BsFillPlayBtnFill /> Information for those looking for work
          </ListGroup.Item>
          <ListGroup.Item>
            <RiSettings4Fill /> Application settings
          </ListGroup.Item>
        </ListGroup>
        <Button className="mt-2" variant="outline-primary">
          <BsPencilSquare /> Post a free job offer
        </Button>
      </Col>
      <Col className="col-5 border rounded bg-white">
        {" "}
        {/* JOBS LIST */}
        {defaultJobs &&
          defaultJobs.data.map((job, i) => <JobList key={i} list={job} />)}
      </Col>
      <Col className="col-4 border rounded">
        {" "}
        {/* RIGHT DIV + FOOTER */}
        <ListGroup>
          <ListGroup.Item>
            <p className="fw-bold m-0">Open to work</p>
            <p className="text-secondary m-0">
              Recommended based on your activities
            </p>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex">
            <div>
              <p className="fw-bold">
                Show recruiters that you are available for new job opportunities
              </p>
            </div>
            <div>
              <Image
                src={profileData.image}
                width={45}
                height={45}
                className="rounded-circle"
              />
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>
              Receive more targeted job alerts with the frame #OpenToWork: you
              control who sees it.
            </p>
          </ListGroup.Item>
          <ListGroup.Item>
            Start <FaArrowRight />
          </ListGroup.Item>
        </ListGroup>
        <HomeFooter />
      </Col>
    </Row>
  );
};

export default Jobs;
