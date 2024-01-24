import PostBar from "./PostBar";
import LeftSide from "./LeftSide";
import { Row, Col } from "react-bootstrap";
import PostList from "./PostList";
import { setProfileAction } from "../redux/actions/ProfilePage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { STRIVE_KEY_MERLINO } from "../assets/js/auth_keys";

const provaPost = [
  {
    text: "Questo è un nuovo post", // L'unica proprietà richiesta!
    username: "mario88", // SERVER GENERATED
    createdAt: "2023-10-01T19:44:04.496Z", // SERVER GENERATED
    updatedAt: "2023-10-01T19:44:04.496Z", // SERVER GENERATED
    __v: 0, // SERVER GENERATED
    _id: "5d93ac84b86e220017e76ae1", // SERVER GENERATED
  },
  {
    text: "BRO", // L'unica proprietà richiesta!
    username: "Chicco", // SERVER GENERATED
    createdAt: "2023-10-03T19:44:04.496Z", // SERVER GENERATED
    updatedAt: "2023-10-03T19:44:04.496Z", // SERVER GENERATED
    __v: 0, // SERVER GENERATED
    _id: "5d93ac84b86e2200317e76ae1", // SERVER GENERATED
  },
  {
    text: "Questo un nuovo post", // L'unica proprietà richiesta!
    username: "Biondo", // SERVER GENERATED
    createdAt: "2023-10-06T19:44:04.496Z", // SERVER GENERATED
    updatedAt: "2023-10-06T19:44:04.496Z", // SERVER GENERATED
    __v: 0, // SERVER GENERATED
    _id: "5d93ac84b86e2200137e76ae1", // SERVER GENERATED
  },
];

// IN CASO DI API MALFUNZIONANTE
const PROFILE_FETCHED = {
  area: "Terre di Avalon",
  bio: "Che dire... amo la magia!",
  createdAt: "2024-01-23T18:18:23.184Z",
  email: "hocuspocus@magic.com",
  image:
    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
  name: "Merlino",
  surname: "Mago",
  title: "Mago",
  updatedAt: "2024-01-23T18:18:23.184Z",
  username: "hocuspocus@magic.com",
  __v: 0,
  _id: "65b002efa04cb80018ad94d3",
};

const options = {
  mode: "cors",
  method: "GET",
  headers: {
    Authorization: `Bearer ${STRIVE_KEY_MERLINO}`,
  },
};

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        options
      );

      if (!res.ok) throw new Error("Cannot fetch data");

      const data = await res.json();

      dispatch(setProfileAction(data));
      console.log("getProfileData data: ", data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Row>
      <Col xs={3}>
        <LeftSide />
      </Col>
      <Col xs={6}>
        <PostBar />
        {provaPost.map((post, i) => (
          <PostList key={i} posts={post} />
        ))}
      </Col>
    </Row>
  );
};

export default Home;
