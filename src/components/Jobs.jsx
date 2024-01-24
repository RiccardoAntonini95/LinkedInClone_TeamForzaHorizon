import { Row, Col, ListGroup, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import JobList from "./JobList";
import { FaBookmark, FaList, FaArrowRight } from "react-icons/fa6";
import { TbClipboardCheck } from "react-icons/tb";
import { BsFillPlayBtnFill, BsPencilSquare } from "react-icons/bs";
import { RiSettings4Fill } from "react-icons/ri";
import HomeFooter from "./HomeFooter";

const Jobs = () => {
  const [defaultJobs, setDefaultJobs] = useState(null)

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try{
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?category=writing&limit=10")
      if(response.ok){
          const data = await response.json()
          console.log(data)
          setDefaultJobs(data)
      } else {
          console.log("Errore del fetch")
      }
  } catch(err){
      console.log("Errore:", err)
  }
  };


  return(
    <Row className="d-flex justify-content-evenly mt-3 mx-3">
      <Col className="col-3 border rounded text-center fw-bold"> {/* MENU A SINISTRA POSITION FIXED*/}
      <ListGroup>
        <ListGroup.Item><FaBookmark /> My job offers</ListGroup.Item>
        <ListGroup.Item><FaList /> Preferences</ListGroup.Item>
        <ListGroup.Item><TbClipboardCheck /> Skill ratings</ListGroup.Item>
        <ListGroup.Item><BsFillPlayBtnFill /> Information for those looking for work</ListGroup.Item>
        <ListGroup.Item><RiSettings4Fill /> Application settings</ListGroup.Item>
      </ListGroup>
      <Button className="mt-2" variant="outline-primary"><BsPencilSquare /> Post a free job offer</Button>
      </Col>
      <Col className="col-5 border rounded bg-white"> {/* LISTA LAVORI FETCH */}
      {defaultJobs && (
        defaultJobs.data.map((job, i) => (
            <JobList key={i} list={job} />          
          ))
      )}
      </Col>
      <Col className="col-4 border rounded"> {/* DISPONIBILE A LAVORARE + FOOTER */}
       <ListGroup>
        <ListGroup.Item>
          <p className="fw-bold m-0">Disponibile a lavorare</p>
          <p className="text-secondary m-0">Consigliato in base alle tue attività</p>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex">
          <div>
            <p className="fw-bold">Mostra ai recruiter che sei disponibile per nuove opportunità di lavoro</p>
          </div>
          <div>
            immagine profilo 
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>Ricevi segnalazioni di offerte di lavoro più mirate con la cornice #OpenToWork: controlli tu chi la vede.</p>
        </ListGroup.Item>
        <ListGroup.Item>
          Inizia <FaArrowRight />
        </ListGroup.Item>
       </ListGroup>
       <HomeFooter />
      </Col>
    </Row>
  )
}

export default Jobs