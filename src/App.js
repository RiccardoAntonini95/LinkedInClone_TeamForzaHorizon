import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostBar from "./components/PostBar";
import LeftSide from "./components/LeftSide";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Row>
            <Col xs={3}><LeftSide/></Col>
            <Col xs={6}><PostBar/></Col>
          </Row>
        </Container>
      {/* La navbar va qua */}
      <Routes>
        <Route/>
       {/*  qua dentro i vari route */}
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


/* Bootstrap: SI
React-Bootstrap: SI
Typescript: NO
Classi: Come quelle di Bootstrap // es.(allineamento-bello)
Id: CamelCase // es.(belloStoIdentificatore)
Redux: Dati fetch dei profili, value della ricerca
Componenti: TUTTI functional
Lingua: INGLESE */
