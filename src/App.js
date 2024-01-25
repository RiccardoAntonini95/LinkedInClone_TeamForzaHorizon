import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/css/home.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage"
import MyNavbar from "./components/MyNavbar";
import Jobs from "./components/Jobs";
import JobSearch from "./components/JobSearch";
import Home from "./components/Home";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
      <MyNavbar />
      <Container>
        <Routes>
         <Route path="/" element = {<Home />} />
         <Route path="/profile" element = {<ProfilePage />} />
         <Route path="/jobs" element = {<Jobs />} />
         <Route path="/jobs/:query" element = {<JobSearch />} />
        </Routes>
      </Container>
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
