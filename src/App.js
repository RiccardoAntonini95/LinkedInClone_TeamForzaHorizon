import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage"
import MyNavbar from "./components/MyNavbar";
import Jobs from "./components/Jobs";
import Home from "./components/Home";
import Footer from "./components/Footer";
import HomeFooter from "./components/HomeFooter";

function App() {
  return (
    <>
      <BrowserRouter>
      <MyNavbar />
      <Routes>
       <Route path="/" element = {<Home />} />
       <Route path="/profile" element = {<ProfilePage />} />
       <Route path="/jobs" element = {<Jobs />} />
      </Routes>
      </BrowserRouter>
      <Footer />
      <HomeFooter />
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
