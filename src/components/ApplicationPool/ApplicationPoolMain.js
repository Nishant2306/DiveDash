import "./ApplicationPoolMain.css";
import Pic3 from "../images/pic3.png";
import Pic4 from "../images/pic4.png";
import Arrow2 from "../images/Arrow2.png";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import firebaseConfig from "../config.js";
import back from "../images/back.png";
import { useState } from "react";
const ApplicantPoolMain = () => {
  var [DI, setDI] = useState(false);
  var [Forecast, setForecast] = useState(false); 
  return (
    <div>
      {((Forecast) || (DI)) ? (<div className="back">
        <button className= "imgbtn"onClick={() => {(setForecast(false)) || (setDI(false))}}>
          <img src={back} alt="" className="backimg"></img>
        </button>
      </div>) : (<div className="back">
        <Link to={"/Dashboard"}>
          <img src={back} alt="" className="backimg"></img>
        </Link>
      </div>)}

      {DI ? (<div>
          <div className="side2">
            <form className="formall">
              <input
                className="formInput"
                type="JobID"
                name="JobID"
                placeholder="Enter Job ID"
              />
              <button className="submitbtn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>) : (<div className="side1">
        <img src={Pic3} alt="" className="image3"></img>
        {/* <Button className="button1" name="Login for Hiring Managers"></Button> */}
        <button
          className="Nostyle DandItext"
          onClick={() => {
            setForecast(true);
          }}
        >
          D&I Metrics <a className="Arrow2">→</a>
        </button>
      </div>)}
      
      <div className="col allAbove">
        <div className="row text2">Application Pool</div>
        <div className="row imgDiv">
          <img src={logo} className="midImg"></img>
        </div>
      </div>

      {Forecast ? (
        <div>
          <div className="side2">
            <form className="formall">
              <input
                className="formInput"
                type="JobID"
                name="JobID"
                placeholder="Enter Job ID"
              />
              <Link className="submitbtn" to={"/DandI"}>
                Submit
              </Link>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <div className="side2">
            <img src={Pic4} alt="" className="image4"></img>
            {/* <Button className="button2" name="Login for BUs and HRAs "></Button> */}
            <button
              className="Nostyle ForcastText"
              onClick={() => {
                setDI(true);
                console.log("fuk1");
              }}
            >
              <a className="Arrow1">←</a> Forecast
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicantPoolMain;
