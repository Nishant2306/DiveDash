import "./CandidateSearchIn.css";
import Pic3 from "../images/pic3.png";
import Pic4 from "../images/pic4.png";
import Arrow2 from "../images/Arrow2.png";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import firebaseConfig from "../config.js";
import back from "../images/back.png";
import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Auth";
const CandidateSearchIn = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <div className="back">
        <button className="dedBtn" onClick={()=> firebaseConfig.auth().signOut()}>
          <img src={back} alt="" className="backimg"></img>
        </button>
      </div>

      <div className="side1">
        <img src={Pic3} alt="" className="image3"></img>
        {/* <Button className="button1" name="Login for Hiring Managers"></Button> */}
        <button
          className="Nostyle Viewtext"
        >
          View applicants
        </button>
      </div>
      
      <div className="col allAbove">
        <div className="row text2">Candidate Search</div>
        <div className="row imgDiv">
          <img src={logo} className="midImg"></img>
        </div>
      </div>

        <div>
          <div className="side2">
            <form className="formall">
              <input
                className="formInput"
                type="JobID"
                name="JobID"
                placeholder="Enter Job ID"
              />
              <Link className="submitbtn" to={"/CandidateSearch"}>
                Submit
              </Link>
            </form>
          </div>
        </div>
    </div>
  );
};

export default CandidateSearchIn;
