import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/css/home.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import MyNavbar from "./components/MyNavbar";
import Jobs from "./components/Jobs";
import JobSearch from "./components/JobSearch";
import { Container } from "react-bootstrap";
import ProfilePageSearch from "./components/ProfilePageSearch";
import ProfilePageGeneralSearch from "./components/ProfilePageGeneralSearch";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:query" element={<JobSearch />} />
            <Route path="/profile/:profileId" element={<ProfilePageSearch />} />
            <Route
              path="/profile/search/:profileName"
              element={<ProfilePageGeneralSearch />}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
