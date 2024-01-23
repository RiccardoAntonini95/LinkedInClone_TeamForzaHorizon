import PostBar from "./PostBar";
import LeftSide from "./LeftSide";
import { Row, Col } from "react-bootstrap";

const Home = () => {
    return(
        <Row>
            <Col xs={3}><LeftSide/></Col>
            <Col xs={6}><PostBar/></Col>
        </Row>
    )
}

export default Home