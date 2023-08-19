import "./D&I.css";
import logo from "../images/logo.png";
import team from "../images/team.png";
import eye from "../images/visibility.png";
import { Navigate, Link } from "react-router-dom";
import React, { Component, useEffect, useState, useContext } from "react";
import back from "../images/back.png";
import user from "../images/user.png";
import { AiOutlineReload } from "react-icons/ai";
import MultiLineChart from "./graph";
import star from "../images/star.png";
import Grid from "./Grid";
import SliderComponent from "./SliderComponent";
import Comment from "./comment";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { AuthContext } from "../Auth";
import { getDocs } from "firebase/firestore";

const DandI = () => {
  const [date, setDate] = useState(new Date());
  const { currentUser } = useContext(AuthContext);
  const [CommentInput, setCommentInput] = useState("");
  const [AllComments, setAllComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timestamp, setTimestamp] = useState("");
  const db = getFirestore();
  const userId = "AllComments";

  const data = {
    emp1: ["Nishant", date.toLocaleString(), CommentInput],
  };

  const Alldata = [
    { name: "Nishant", time: date.toLocaleString(), comment: CommentInput },
    { name: "Nishant", time: date.toLocaleString(), comment: CommentInput },
    { name: "Nishant", time: date.toLocaleString(), comment: CommentInput },
  ];

  function handleChange(event) {
    console.log(CommentInput);
    setCommentInput(event.target.value);
    event.preventDefault();
  }

  const setData = async (event) => {
    event.preventDefault();
    try {
      for (let i of Object.values(data)) {
        const doc = collection(db, "AllComments");
        const docRef = await addDoc(doc, {
          name: i[0],
          time: i[1],
          comment: i[2],
          id: timestamp,
        });
        console.log("Document written with ID: ", docRef.id);
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    console.log("sucessfully submitted");
    window.location.reload();
  };

  useEffect(() => {
    const db = getFirestore();
    const tempArray = [];
    if (currentUser) {
      const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, "AllComments"));
        querySnapshot.forEach((doc) => {
          // console.log("Hi");
          // console.log(`${doc.id} =>`, doc.data());
          // setDataElements(doc.data());
          tempArray.push(doc.data());
        });
        setLoading(false);
      };
      const currentTimestamp = Math.floor(new Date().getTime() / 1000);
      setTimestamp(currentTimestamp);
      fetchData();
      setAllComments(tempArray);
    }
    // console.log(currentUser);
    // console.log(AuthContext);
  }, [currentUser]);
  console.log(AllComments);
  AllComments.sort(function (x, y) {
    return x.id - y.id;
  });
  // setDate(new Date().toLocaleString());
  const comments = AllComments.map((comments) => (
    <Comment
      name={comments.name}
      time={comments.time.toLocaleString()}
      commentContent={comments.comment}
    />
    // <Comment name={comments.name} time={comments.time} comm/>
  ));
  console.log("Hi");
  console.log(comments);

  const Refresh = () => {
    setDate(new Date());
    window.location.reload();
  };
  return (
    <div>
      <div className="col">
        <div className="row left-side">
          <div className="col-md-auto upper-Img">
            <img className="upper-Image" src={logo}></img>
          </div>
          <div className="col-md-auto stage-2">Stage 2</div>
          <div className="col-md-auto stage-3">Stage 3</div>
          <div className="col-md-auto campus"> 
            <div>Campuses</div>
            <div>
              <form
                className="recForm"
                onSubmit={() => {
                  <Navigate to={"/D&I"} />;
                }}
              >
                {/* <label>Recommended</label> */}
                <input
                  className="campusInput"
                  type="text"
                  placeholder="Recommended"
                ></input>
              </form>
            </div>
          </div>
          <div className="col-md-auto vendor">
            <div>Vendors</div>
            <div>
              <form
                className="recForm"
                onSubmit={() => {
                  <Navigate to={"/D&I"} />;
                }}
              >
                <input
                  className="campusInput"
                  type="text"
                  placeholder="Recommended"
                ></input>
              </form>
            </div>
            <div>
              <form
                className="recForm"
                onSubmit={() => {
                  <Navigate to={"/D&I"} />;
                }}
              >
                <input
                  className="campusInput"
                  type="text"
                  placeholder="Enter ID"
                ></input>
              </form>
            </div>
          </div>
          <div className="col language">Language</div>
        </div>
        <div className="row right-side">
          <div className="col-md-auto top-Section">
            <div className="row top-All">
              <div className="back-btn">
                <Link className="clearAll" to="/CandidateSearchIn">
                  <img src={back} alt="" className="back-img"></img>
                </Link>
              </div>
              <div className="top-Heading">
                <a className="Overview">Overview -</a>
                <a className="Stage">Stage 1</a>
                <a className="curDate">
                  Last updated : {date.toLocaleString()}{" "}
                </a>
              </div>
            </div>
            <button className="refresh-btn" onClick={Refresh}>
              <AiOutlineReload />
            </button>
            <div className="top-Right">
              <div className="row creds">
                <div className="name-Right">Nishant</div>
                <div className="id-Right">2@1517</div>
              </div>
              <div className="profile-Pic">
                <img className="user-Pic" src={user}></img>
              </div>
            </div>
          </div>
          <div className="star">
            <img className="starImg" src={star}></img>
          </div>
          <div className="col bottom-Section">
            <div className="col-md-auto mid-Left">
              <div className="row-md-auto top-left">
                <div className="col allTopLeft">
                  <div className="row-md-auto topLeft-Top">
                    <div className="topLeft-TopLeft">
                      <div className="topLeft-TopLeft-Top">
                        <div>
                          <img src={team}></img>
                        </div>
                        <div className="Applicants">Applicants</div>
                      </div>
                      <div className="topLeft-TopLeft-Bottom">
                        <div className="topLeft-TopLeft-BottomLeft">
                          1.2
                          <a className="topLeft-TopLeft-BottomLeft-Right">K</a>
                        </div>
                        <div className="topLeft-TopLeft-BottomRight">
                          ▲ 5.3 %
                        </div>
                      </div>
                    </div>
                    <div className="topLeft-TopRight">
                      <div className="topLeft-TopLeft-Top">
                        <div>
                          <img src={eye}></img>
                        </div>
                        <div className="Impressions">Impressions</div>
                      </div>
                      <div className="topLeft-TopLeft-Bottom">
                        <div className="topLeft-TopLeft-BottomLeft">
                          55{" "}
                          <a className="topLeft-TopLeft-BottomLeft-Right">K</a>
                        </div>
                        <div className="topLeft-TopLeft-BottomRight">
                          ▲ 1.2 %
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-md-auto topLeft-Mid">
                    <div className="topLeft-MidLeft">
                      Applications Distribution
                    </div>
                    <div className="topLeft-MidRight">
                      1st January - 19th February 2023
                    </div>
                  </div>
                  <div className="row topLeft-Bottom">
                    <Grid />
                  </div>
                </div>
              </div>
              <div className="row-md-auto bottom-left">
                <div className="bottom-leftTop">Sex Ratio in last 7 days</div>
                <div className="bottom-leftBottom">
                  <MultiLineChart />
                </div>
              </div>
            </div>
            <div className="col mid-Right">
              <div className="row-md-auto top-right">
                <div className="row-md-auto top-right-top">
                  <div className="SdBox">Sex distribution</div>
                  <div className="slide">
                    <SliderComponent percent="70" />
                  </div>
                  <div className="row AllArrow">
                    <div className="col MaleArrow">
                      <div className="row arrowDown">▼</div>
                      <div className="row arrowText">M: 988</div>
                    </div>
                    <div className="col FemaleArrow">
                      <div className="row arrowDown">▼</div>
                      <div className="row arrowText">F: 212</div>
                    </div>
                  </div>
                  <div className="TotalText">Total: 1200</div>
                </div>
                <div className="row-md-auto top-right-middle">
                  <div className="Demographics">Demographics</div>
                  <div className="col AllSlide">
                    <div className="row slideText">Cities</div>
                    <div className="row slideDown">
                      <SliderComponent percent="55" />
                    </div>
                  </div>
                  <div className="row MidAllArrow">
                    <div className="col arrowTextUp">0</div>
                    <div className="col midArrow">
                      <div className="row arrowDown">▼</div>
                      <div className="row arrowText">55</div>
                    </div>
                    <div className="col arrowTextUp">100</div>
                  </div>
                  <div className="col AllSlide2">
                    <div className="row slideText">States</div>
                    <div className="row slideDown">
                      <SliderComponent percent="32" />
                    </div>
                  </div>
                  <div className="row AllArrow">
                    <div className="col arrowTextDown">0</div>
                    <div className="col DownarrowText">
                      <div className="row arrowDown">▼</div>
                      <div className="row arrowText">32</div>
                    </div>
                    <div className="col arrowTextDown">100</div>
                  </div>
                </div>
                <div className="row-md-auto top-right-bottom">
                  <div className="col trbLeft">Languages</div>
                  <div className="col trbRight">19</div>
                </div>
              </div>
              <div className="row-md-auto bottom-right">
                <div className="comments">Comments</div>
                <div className="comment-box">
                  <div className="commentList">{comments}</div>
                  {/* <div className="comment">Sample Comment 1</div>
                    <div className="comment">Sample Comment 2</div>
                    <div className="comment">Sample Comment 3</div> */}
                </div>
                {/* <div className="commentBox">
                  <div className="commentList">
                    <div className="comment-Box">
                      <Comment name="Nishant" />
                    </div>
                    <div className="comment-Box">
                      <Comment name="Nishant" />
                    </div>
                    <div className="comment-Box">
                      <Comment name="Nishant" />
                    </div>
                  </div>
                </div> */}
                <div>
                  <form className="commentForm" onSubmit={setData}>
                    <input
                      className="commentInput"
                      type="text"
                      value={CommentInput}
                      placeholder="Post a comment"
                      onChange={handleChange}
                    ></input>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DandI;
