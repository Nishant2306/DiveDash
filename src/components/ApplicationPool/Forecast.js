import logo from "../images/logo.png";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import back from "../images/back.png";
import { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import user from "../images/user.png";
import "./Forecast.css";
import target from "../images/target.png";
import SliderComponent from "./SliderComponent";
import MultiLineChart1 from "./graph1"
const Forecast = () => {
  const [date, setDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
          <div className="col-md-auto stage-2">Technology</div>
          <div className="col-md-auto stage-3">Suppliers</div>
          <div className="col-md-auto stage-3">Management</div>
          <div className="col language">BUs</div>
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
                <a className="Stage">Team1</a>
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
          <div className="col bottom-Section">
            <div className="col-md-auto BSLeft">
              <div className="row-md-auto BSLeft-top">
                <div className="TargetImgText">
                  <img src={target}></img>{" "}
                  <span className="Targets">Targets</span>
                </div>
                <div className="AllSliders">
                  <div className="row-md-auto AllTotalMember">
                    <div className="TotalMembers">Total Members : 25</div>
                    <span className="slideComp">
                      <SliderComponent percent="72"></SliderComponent>
                    </span>
                    <div className="Status">Status : Not met, short by 7</div>
                  </div>
                  <div className="row-md-auto AllTotalMember">
                    <div className="TotalMembers">Sex Ratio : 2</div>
                    <span className="slideComp">
                      <SliderComponent percent="85"></SliderComponent>
                    </span>
                    <div className="Status">Status : Not met, short by 2</div>
                  </div>
                  <div className="row-md-auto AllTotalMember">
                    <div className="TotalMembers">Total Members : 25</div>
                    <span className="slideComp">
                      <SliderComponent percent="72"></SliderComponent>
                    </span>
                    <div className="Status">Status : Not met, short by 7</div>
                  </div>
                  <div className="row-md-auto AllTotalMember">
                    <div className="TotalMembers">Budget : $100K</div>
                    <span className="slideComp">
                      <SliderComponent percent="91"></SliderComponent>
                    </span>
                    <div className="Status">Status : Not met, short by $9K</div>
                  </div>
                  <div className="row-md-auto AllTotalMember">
                    <div className="TotalMembers">Female Members : 5</div>
                    <span className="slideComp">
                      <SliderComponent percent="60"></SliderComponent>
                    </span>
                    <div className="Status">Status : Not met, short by 2</div>
                  </div>
                  <div className="row-md-auto AllTotalMember">
                    <div className="TotalMembers">New Interns : 4</div>
                    <span className="slideComp">
                      <SliderComponent percent="75"></SliderComponent>
                    </span>
                    <div className="Status">Status : Not met, short by 1</div>
                  </div>
                </div>
              </div>
              <div className="row-md-auto BSLeft-bottom">
                <div className="Predictions">Predictions</div>
                <div className="Estimate">Estimated Team size in coming months</div>
                <div className="Graph1"><MultiLineChart1></MultiLineChart1></div>
                <div className="row-md-auto buttonsPred">
                    <div className="PredbtnText">View Predictions for : </div>
                    <div className="predBtn">Sex Ratio</div>
                    <div className="predBtn">Budget</div>
                    <div className="predBtn">Tech Stacks</div>
                </div>
              </div>
            </div>
            <div className="col-md-auto BSRightAll">
            <div className="predDropDiv">
      <select className="predDrop" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Sex Ratio</option>
        <option value="option1">Sex Ratio</option>
        <option value="option2">Budget</option>
        <option value="option3">Tech Stack</option>
      </select>
    </div>
            <div className="col-md-auto BSRight">
                <div className="row-md-auto BSRightBox">
                    <div className="BoxHead">Staff Engineers</div>
                    <div className="Boxbody">2.3 : Good</div>
                </div>
                <div className="row-md-auto BSRightBox">
                    <div className="BoxHead">Senior Staff Engineers</div>
                    <div className="Boxbody">2.3 : Good</div>
                </div>
                <div className="row-md-auto BSRightBox">
                    <div className="BoxHead">Chief Architects</div>
                    <div className="Boxbody">1 : Good</div>
                </div>
                <div className="row-md-auto BSRightBox">
                    <div className="BoxHead">Engineering Lead</div>
                    <div className="Boxbody">8 : Average</div>
                </div>
                <div className="row-md-auto BSRightBox">
                    <div className="BoxHead">CTO</div>
                    <div className="Boxbody">10 : Average</div>
                </div>

            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
