// QUESTO COMPONENT ANDRA' ELIMINATO

import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProvaReducer = () => {
  const provaReducerProfilo = useSelector(
    (state) => state.profile.actualProfile
  );

  useEffect(() => {}, [provaReducerProfilo]);
  return (
    <>
      <h1>COMPONENTE PROVA PER REDUCER</h1>
      <div className="mt-5">
        {provaReducerProfilo && (
          <div>
            <p>{provaReducerProfilo.name}</p>
            <p>{provaReducerProfilo.surname}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProvaReducer;

// esempio footer unico
/* const Footer = ({ isProfilePage }) => {
  return (
    <>
      {/* ternario: bool ? opzione vero : opzione falso}




      {isProfilePage ? (
        <div>{/* tutti pezzi per pagina profile }</div>
      ) : (
        <div>{/* tutti pezzi per footer delle altre pagine}</div>
      )}
    </>
  );
}; */
