import PostBar from "./PostBar";
import LeftSide from "./LeftSide";
import { Row, Col } from "react-bootstrap";
import PostList from "./PostList";

const provaPost = [{
    "text": "Questo è un nuovo post", // L'unica proprietà richiesta!
    "username": "mario88", // SERVER GENERATED
    "createdAt": "2023-10-01T19:44:04.496Z", // SERVER GENERATED
    "updatedAt": "2023-10-01T19:44:04.496Z", // SERVER GENERATED
    "__v": 0, // SERVER GENERATED
    "_id": "5d93ac84b86e220017e76ae1", // SERVER GENERATED
  },
  {
    "text": "BRO", // L'unica proprietà richiesta!
    "username": "Chicco", // SERVER GENERATED
    "createdAt": "2023-10-03T19:44:04.496Z", // SERVER GENERATED
    "updatedAt": "2023-10-03T19:44:04.496Z", // SERVER GENERATED
    "__v": 0, // SERVER GENERATED
    "_id": "5d93ac84b86e2200317e76ae1", // SERVER GENERATED
  },
  {
    "text": "Questo un nuovo post", // L'unica proprietà richiesta!
    "username": "Biondo", // SERVER GENERATED
    "createdAt": "2023-10-06T19:44:04.496Z", // SERVER GENERATED
    "updatedAt": "2023-10-06T19:44:04.496Z", // SERVER GENERATED
    "__v": 0, // SERVER GENERATED
    "_id": "5d93ac84b86e2200137e76ae1", // SERVER GENERATED
  }]

const Home = () => {
    return(
        <Row>
            <Col xs={3}><LeftSide/></Col>
            <Col xs={6}>
                <PostBar/>
                {provaPost.map((post, i) => (
                    <PostList key={i} posts={post} />
                ))}
            </Col>
        </Row>
    )
}

export default Home