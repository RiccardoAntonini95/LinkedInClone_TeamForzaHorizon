import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Experience } from "./components/Experience";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* La navbar va qua */}
        <Routes>
          {/*  qua dentro i vari route */}
          <Route path="/" element={<Experience />} />
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
