import PostBar from "./PostBar";
import LeftSide from "./LeftSide";
import { Row, Col } from "react-bootstrap";
import PostList from "./PostList";
import { setProfileAction } from "../redux/actions/ProfilePage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { STRIVE_KEY_MERLINO, STRIVE_KEY_COMMENTS} from "../assets/js/auth_keys";


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
 const profileData = useSelector((state) => state.profile.actualProfile)
  const dispatch = useDispatch();
  const [posts, setPosts] = useState(null)
  const [comments, setComments] = useState(null)
/*   const [arrayComb, setArrayComb] = useState(null) */

  /* const combinaArray = (newestData) => {
    const arrayCombinato = []
    for (let i = 0; i < posts.length; i++) {
      let post = newestData[i];
      let commentArr = [];
      for (let j = i; j < comments.length; j++) {
        if (posts._id === comments._id) {
          commentArr.push(comments[j]);
        }
      }
      arrayCombinato.push({
        ...post,
        comments: commentArr,
      });
    }
  
    setArrayComb(arrayCombinato)
    console.log(arrayCombinato, "array risultato")
  
  }
 */

  useEffect(() => {
    getProfileData();
    handleGetComments();
    getPosts();
    
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

  const getPosts = async () => {
    try{
      const res = await fetch("https://striveschool-api.herokuapp.com/api/posts/", 
      options
      );
      if (!res.ok) throw new Error("Cannot fetch data")
      const data = await res.json()
      const newestData = data.reverse().slice(0,15)
      /* combinaArray(newestData) */
      console.log(newestData, "risultato fetch post")
      setPosts(newestData)
    } catch (err) {
      console.log(err, "error")
    }
  }

  const handleGetComments = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            Authorization: `Bearer ${STRIVE_KEY_COMMENTS}`,
          },
        }
      );
      if (!res.ok) throw new Error("Error fetching comments");
      const data = await res.json();
      const newestData = data.reverse().slice(0, 3);
      console.log(newestData, "risultato fetch commenti");
      setComments(newestData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row>
      <Col xs={3}>
        {profileData && (
          <LeftSide currentProfile={profileData} />
        )}
      </Col>
      <Col xs={6}>
        <PostBar />
        {posts && comments && (
          posts.map((post, i) => (
          <PostList key={i} posts={post} comments={comments}/>
        ))
        )}
      </Col>
    </Row>
  );
};

export default Home;
