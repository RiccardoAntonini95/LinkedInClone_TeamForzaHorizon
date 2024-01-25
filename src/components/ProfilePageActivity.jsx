import "../assets/css/ProfilePage.css";
import { useEffect, useState } from "react";
import { Row, Button } from "react-bootstrap";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { STRIVE_KEY_MERLINO } from "../assets/js/auth_keys";
import { convertTime } from "../assets/js";

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${STRIVE_KEY_MERLINO}`,
  },
};

const ProfilePageActivity = ({ profileData }) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        options
      );

      if (!res.ok) throw new Error("Cannot fetch data");

      const data = await res.json();
      console.log("ProfilePageActivity ", data);
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="containerActivity">
      <div class="card-body">
        <Row className="p-3">
          <div className="d-flex icons-flex ">
            <h4>Activity</h4>
            <div>
              <Button variant="outline-primary" className="borderButton border">
                Create a Post
              </Button>
              <button type="button">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil"
                    id="pencil"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </Row>
        <div>
          <Button className="btn btn-success border mx-2 borderButton">
            Post
          </Button>
          <Button
            variant="outline-secondary"
            className="border mx-2 borderButton"
          >
            Comments
          </Button>
        </div>

        {posts &&
          posts
            .filter((post) => post.user._id === profileData._id)
            .map((post, i) => {
              const { day, month, year } = convertTime(post.createdAt);

              return (
                <Row key={i}>
                  <div className="mx-3 border-bottom borderProfile">
                    <div>
                      <h4 className="profileText">
                        {profileData.name} {profileData.surname}
                      </h4>
                      <p className="profileText2">
                        posted this {`${day}/${month}/${year}`}
                        <BsFillPeopleFill />
                      </p>
                    </div>
                    <p>{post.text}</p>
                  </div>
                </Row>
              );
            })}
        {/*  <Row>
          <div className="mx-3 border-bottom borderProfile">
            {" "}
            <h4 className="profileText">Charles Manson</h4>{" "}
            <p className="profileText2">
              posted this 15h <BsFillPeopleFill />
            </p>
          </div>
        </Row>
        <Row>
          <div className="mx-3 border-bottom borderProfile">
            {" "}
            <h4 className="profileText">Charles Manson</h4>{" "}
            <p className="profileText2">
              posted this 15h <BsFillPeopleFill />
            </p>
          </div>
        </Row>
        <Row>
          <div className="mx-3 border-bottom borderProfile">
            {" "}
            <h4 className="profileText ">Charles Manson</h4>{" "}
            <p className="profileText2">
              posted this 15h <BsFillPeopleFill />
            </p>
          </div>
          <hr />
        </Row> */}
        <div className="showPost2">
          {" "}
          <a href="#" className="showPost">
            Show all posts <FaArrowRight />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageActivity;
