import { Alert } from "react-bootstrap";

const Error = ({ message }) => (
  <Alert variant="danger">
    {message ? `ERROR: ${message}` : "ERROR: FATAL ERROR"}
  </Alert>
);

export default Error;
