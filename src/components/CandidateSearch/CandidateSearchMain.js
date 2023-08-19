import "./CandidateSearchMain.css";
import logo from "../images/logo.png";
import back from "../images/back.png";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import FilterForm from "./FilterForm";
import Box from "./Box";
import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { AuthContext } from "../Auth";
import { BsSearch } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

const CandidateSearchMain = () => {
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  // const [dataElements, setDataElements] = useState({});
  const [Alldata, setAlldata] = useState([]);
  let [dropdown1Value, setDropdown1Value] = useState("All");
  let [dropdown2Value, setDropdown2Value] = useState("All");
  let [dropdown3Value, setDropdown3Value] = useState("All");
  let [dropdown4Value, setDropdown4Value] = useState("All");

  useEffect(() => {
    const db = getFirestore();
    const tempArray = [];
    if (currentUser) {
      const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, "AllEmployees"));
        querySnapshot.forEach((doc) => {
          // console.log("Hi");
          // console.log(`${doc.id} =>`, doc.data());
          // setDataElements(doc.data());
          tempArray.push(doc.data());
        });
        setLoading(false);
      };
      fetchData();
      setAlldata(tempArray);
      setFilteredData(tempArray);
    }
    // console.log(currentUser);
    // console.log(AuthContext);
  }, [currentUser]);
  // console.log("ye h 1 1 data");
  // // console.log(dataElements);
  // console.log("ye tha 1 1 data");
  console.log(Alldata);


  const handleDropdown1Change = (event) => {
    const test = event.target.value;
    console.log(test);
    console.log("Hi1");
    // console.log(event.target.value);
    setDropdown1Value(test);
    dropdown1Value = test;
    console.log("Hi2");
    console.log(dropdown1Value);
  };

  const handleDropdown2Change = (event) => {
    // dropdown2Value = event.target.value;
    setDropdown2Value(event.target.value);
    console.log(dropdown2Value);
  };

  const handleDropdown3Change = (event) => {
    // dropdown3Value = event.target.value;
    setDropdown3Value(event.target.value);
  };

  const handleSearch = () => {
    console.log("oki");
    console.log(dropdown1Value);
    console.log(dropdown2Value);
    console.log(dropdown3Value);
    const filteredResults = Alldata.filter((item) => {
      const genderMatch =
        dropdown1Value === "All" || item.gender === dropdown1Value;
      const ageMatch =
        dropdown2Value === "All" || item.age.toString() === dropdown2Value;
      const regionMatch =
        dropdown3Value === "All" || item.region === dropdown3Value;

      console.log(genderMatch);
      console.log(ageMatch);
      console.log(regionMatch);
      return genderMatch && ageMatch && regionMatch;
    });
    console.log(filteredResults);
    setFilteredData(filteredResults);
    console.log(filteredData);
  };

  const handleCancel = () => {
    // Clear the dropdown values
    // setDropdown1Value("");
    // setDropdown2Value("");
    // setDropdown3Value("");
    // setDropdown4Value("");
    dropdown1Value = "All";
    dropdown2Value = "All";
    dropdown3Value = "All";
    dropdown4Value = "All";
    window.location.reload();
  };

  let boxes;

  // console.log(boxes);

  console.log(filteredData);
  boxes = filteredData.map((box) => (
    <Box name={box.name} age={box.age} region={box.region} />
  ));


  // console.log("Print ho ja bhai");
  // console.log(Alldata);

  return (
    <div>
      <div className="col">
        <div className="row leftSide">
          <div className="col-md-auto upperImg">
            <img className="upperImage" src={logo}></img>
          </div>
          <div className="col-md-auto midText">Dashboard</div>
          <div className="col bottomText">More gateways</div>
        </div>
        <div className="row rightSide">
          <div className="col-md-auto topSection">
            <div className="row">
              <div className="backbtn">
                <Link className="clear" to="/CandidateSearchIn">
                  <img src={back} alt="" className="backimg"></img>
                </Link>
              </div>
              <div className="topHeading">
                Candidates - Referrals{" "}
                <a className="num">({filteredData.length})</a>
              </div>
            </div>
            <div className="topRight">
              <div className="row credentials">
                <div className="nameRight">Nishant</div>
                <div className="idRight">2@1517</div>
              </div>
              <div className="profilePic">
                <img className="userPic" src={user}></img>
              </div>
            </div>
          </div>
          <div className="col-md-auto filterSection">
            <div className="midHeading">FILTERS</div>
            <div>
              <div className="filter-form">
                <select
                  className="filter-dropdown"
                  value={dropdown1Value}
                  onChange={handleDropdown1Change}
                >
                  <option value="All">Gender</option>
                  <option value="F">Female</option>
                  <option value="M">Male</option>
                </select>
                <select
                  className="filter-dropdown"
                  value={dropdown2Value}
                  onChange={handleDropdown2Change}
                >
                  <option value="All">Age</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                </select>
                <select
                  className="filter-dropdown"
                  value={dropdown3Value}
                  onChange={handleDropdown3Change}
                >
                  <option value="All">Region</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
                {/* <select
                  className="filter-dropdown"
                  value={dropdown4Value}
                  onChange={handleDropdown4Change}
                >
                  <option value="All">Language</option>
                  <option value="option1">Hindi</option>
                  <option value="option1">Marathi</option>
                  <option value="option1">Telugu</option>
                  <option value="option1">Tamil</option>
                  <option value="option1">Bengali</option>
                  <option value="option1">Urdu</option>
                  <option value="option1">Kannada</option>
                  <option value="option1">Gujarati</option>
                  <option value="option1">Odia</option>
                  {/* Add more options as needed */}
                {/* </select> */}
                <div className="filter-buttons">
                  <button className="searchBtn" onClick={handleSearch}>
                    <BsSearch />
                  </button>
                  <button className="cancelBtn" onClick={handleCancel}>
                    <MdOutlineCancel /> 
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col bottomSection">{boxes}</div>
        </div>
      </div>
    </div>
  );
};

export default CandidateSearchMain;
