import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* La navbar va qua */}
        <Routes>{/*  qua dentro i vari route */}</Routes>
      </BrowserRouter>
      <Footer />
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
