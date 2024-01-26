import { useEffect, useState } from "react";
import PostBar from "./PostBar";
import LeftSide from "./LeftSide";
import PostList from "./PostList";
import HomeFooter from "./HomeFooter";
import Error from "./Error";
import Loader from "./Loader";
import { Row, Col } from "react-bootstrap";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { setProfileAction } from "../redux/actions/ProfilePage";
import {
  STRIVE_KEY_MERLINO,
  STRIVE_KEY_COMMENTS,
} from "../assets/js/auth_keys";
import { useDispatch, useSelector } from "react-redux";

const options = {
  mode: "cors",
  method: "GET",
  headers: {
    Authorization: `Bearer ${STRIVE_KEY_MERLINO}`,
  },
};

const Home = () => {
  const profileData = useSelector((state) => state.profile.actualProfile);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getProfileData();
    handleGetComments();
    getPosts();
  }, []);

  /* FETCH FUNCTIONS */

  const getProfileData = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        options
      );
      if (!res.ok) throw new Error("Cannot fetch data");
      const data = await res.json();
      dispatch(setProfileAction(data));
    } catch (err) {
      console.log(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const getPosts = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        options
      );

      if (!res.ok) throw new Error("Cannot fetch data");
      const data = await res.json();
      const newestData = data.reverse().slice(0, 15);
      setPosts(newestData);
    } catch (err) {
      console.log(err, "error");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetComments = async () => {
    setIsError(false);
    setIsLoading(true);
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
      setComments(newestData);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Row>
      {/* LEFT CONTAINER */}
      <Col xs={3}>
        {isLoading && <Loader />}
        {isError && <Error message={"Cannot get profile data..."} />}
        {profileData && <LeftSide currentProfile={profileData} />}
      </Col>
      <Col xs={6}>
        {/* POST FORM + POSTS LIST */}
        <PostBar />
        {isLoading && <Loader />}
        {isError && <Error message={"Cannot get posts..."} />}
        {posts &&
          comments &&
          posts.map((post, i) => (
            <PostList key={i} posts={post} comments={comments} />
          ))}
      </Col>
      <Col xs={3} className="my-4">
        {/* NEWS + FOOTER */}
        <Row className="rounded">
          <div className="rounded bg-white pt-3">
            <Row>
              <Col>
                <p className="fw-bold mb-1">LinkedIn News</p>
              </Col>
              <Col className="text-end">
                <p>
                  <BsFillInfoSquareFill />
                </p>
              </Col>
            </Row>
            <ul>
              <li>
                <p className="fw-bold m-0">
                  Scientists Discover That Coffee is the Real Source of
                  Renewable Energy!
                </p>
                <p className="text-secondary mb-1">
                  Main news &middot; 331 readers
                </p>
              </li>
              <li>
                <p className="fw-bold m-0">
                  Local Cat Declares War on Vacuum Cleaner: Demands Peace Talks
                </p>
                <p className="text-secondary mb-1">1 day ago</p>
              </li>
              <li>
                <p className="fw-bold m-0">
                  Breaking News: World's Slowest Snail Sets New Speed Record
                </p>
                <p className="text-secondary mb-1">4 days ago</p>
              </li>
              <li>
                <p className="fw-bold m-0">
                  Aliens Abduct Entire Pizza Delivery Fleet - Demands Earth's
                  Best Recipes
                </p>
                <p className="text-secondary mb-1">19 hours ago</p>
              </li>
              <li>
                <p className="fw-bold m-0">
                  Exclusive Interview with Sock: 'Where Do All the Missing Pairs
                  Go?
                </p>
                <p className="text-secondary mb-1">2 days ago</p>
              </li>
            </ul>
            <p className="text-secondary">
              Show more <IoIosArrowDown />
            </p>
          </div>
          <img
            src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            alt="See who's hiring on Linkedin"
            className="ad-image my-3 p-0"
          />
          <HomeFooter />
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
