import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import ProfilePage from "./components/ProfilePage"
import Jobs from "./components/Jobs";
import JobSearch from "./components/JobSearch";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/css/home.css"


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

