import user from "../assets/img/user.png"
import {Row, Col, Button, Container} from "react-bootstrap";
import { Image } from "react-bootstrap";
import { IoPeople } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { AiTwotoneLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa6";
import { useState } from "react";
import { useSelector } from "react-redux";
import { STRIVE_KEY_MERLINO } from "../assets/js/auth_keys";
/* DELETE https://striveschool-api.herokuapp.com/api/posts/{postId}  Cancella uno specifico postModello del POST: */

const optionsDelete = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${STRIVE_KEY_MERLINO}`,
    },
  };

  const PostList = ({posts}) => {
    const [isClicked, setIsClicked] = useState(false)//per il like 
    const profileData = useSelector((state) => state.profile.actualProfile)

    const handleDeletePost = async () => {
        try{
            const res = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${posts._id}`, 
            optionsDelete
            );
            if (!res.ok) throw new Error("Cannot fetch data")
            const data = await res.json()
        console.log(data, "sono dentro DELETE")
          } catch (err) {
            console.log("error", err)
        }
    }

    const handleLike = () => {
        if(isClicked){
            setIsClicked(false)
        } else {
            setIsClicked(true)
        }
    }
    const date = new Date(`${posts.createdAt}`)

    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return(
        <Container className="my-2 border rounded-3 bg-white">
            <Row className="d-flex bg-white justify-content-between p-3 my-3">
                <Col className="col-1 me-2">
                    <Image className="rounded-circle" width={45} height={45} src={posts.user.image? posts.user.image : user}/>
                </Col>
                <Col className="col-9 me-auto ps-2">
                    <p className="fs-5 fw-bold">{posts.username}</p>
                    <p className="text-secondary">{day}/{month}/{year} . <IoPeople /></p>
                </Col>
                <Col className="col-1 p-0">
                    <BsThreeDots />
                    <button onClick={() => handleDeletePost()}>✖️</button>                
                </Col>
                <Row>
                    <p>{posts.text}</p>
                </Row>
                <Row className="text-center text-secondary p-0">
                    <Col className="fs-5 py-4 px-5" onClick={() => handleLike()} style={{color: isClicked? "blue" : ""}}>
                        <AiTwotoneLike className="mx-3" /><span style={{fontSize: "0.8em"}}>Recommend</span>
                    </Col>
                    <Col className="fs-5 py-4 px-5">
                        <FaRegCommentDots className="mx-3" /><span style={{fontSize: "0.8em"}}>Comment</span>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="col-1 p-0">
                      <Image className="rounded-circle" width={40} height={40} src={profileData.image}/>
                    </Col>
                    <Col className="col-11 p-0 position-relative">
                        <input type="text" className="border border-secondary rounded-pill w-100 p-2" placeholder="Write a comment.."></input>
                        <FaRegSmile className="position-absolute text-secondary" style={{right: "70px", bottom: "13px"}} />
                        <FaRegImage className="position-absolute text-secondary" style={{right: "20px", bottom: "13px"}} />
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col className="col-1"></Col>
                    <Col className="col-11 p-0">
                        <Button variant="primary" className="rounded-pill px-3">
                            Post
                        </Button>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
  }

  export default PostList