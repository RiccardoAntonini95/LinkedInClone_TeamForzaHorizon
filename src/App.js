import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavBar from "./components/MyNavbar";

function App() {
  return (
    <>
      <BrowserRouter>
      {/* La navbar va qua */}
      <MyNavBar />
      <Routes>
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
