import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HomeFooter from "./components/HomeFooter";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* La navbar va qua */}
        <Routes>{/*  qua dentro i vari route */}</Routes>
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
