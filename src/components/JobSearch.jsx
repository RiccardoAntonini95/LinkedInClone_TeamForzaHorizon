import { useState, useEffect } from "react";
import { useParams } from "react-router";
import JobList from "./JobList";
import { Row, Col } from "react-bootstrap";

const JobSearch = () => {
  const params = useParams();
  const [queryJobs, setQueryJobs] = useState(null);
  const [detailJobs, setDetailJobs] = useState(null);
  const date = new Date("2021-08-29T17:53:08.000Z");

 const day = date.getDate();
 const month = date.getMonth() + 1;
 const year = date.getFullYear();

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?search=${params.query}&limit=10`
      );
      if (response.ok) {
        const data = await response.json();
        setQueryJobs(data);
      } else {
        console.log("Errore del fetch");
      }
    } catch (err) {
      console.log("Errore:", err);
    }
  };

  const handleDetailJobs = (job) => {
    setDetailJobs(job)
  }

  return (
    <>
      <Row className="d-flex justify-content-center bg-white mx-3">
        {" "}
        {/* CONTAINER */}
        {queryJobs && (
          <>
            <Col
              className="col-4 justify-content-between overflow-auto"
              style={{ height: "90vh" }}
            >
              {/* JOBS LIST */}
              {queryJobs.data.map((job, i) => (
                <JobList key={i} list={job} cambiaStato={handleDetailJobs}/>
              ))}
            </Col>
            <Col className="col-5 overflow-auto" style={{ height: "90vh" }}>
              {/* JOBS DETAIL */}
              {detailJobs && (
                <>
                <p className="fs-4 fw-bold">{detailJobs.title}</p>
              <p>
                {detailJobs.company_name} .{" "}
                <span className="text-secondary">
                  Published: {day}-{month}-{year} .{" "}
                </span>
              </p>
              <div
                dangerouslySetInnerHTML={{
                  __html: detailJobs.description,
                }}
              ></div>
                </>
              )}  
            </Col>
          </>
        )}
      </Row>
    </>
  );
};

export default JobSearch;