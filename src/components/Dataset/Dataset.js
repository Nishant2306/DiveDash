import { Navigate } from "react-router-dom";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import back from "../images/back.png";
import user from "../images/user.png";
import star from "../images/star.png";
import DataElements from "./DataElements";
import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { AuthContext } from "../Auth";
import "./Dataset.css";
import Papa from 'papaparse';
import firebase from 'firebase/compat/app';
import 'firebase/database';
import firebaseConfig from "../config";

// import json2csv from 'json2csv';
import jsonexport from "jsonexport/dist";
const Dataset = () => {
  const { currentUser } = useContext(AuthContext);
  const [Alldata, setAlldata] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    state: "",
    degree: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any desired operations with the form data
    console.log(formData);
  };
  const setData = async (event) => {
    event.preventDefault();
    try {
      const doc = collection(db, "AllEmployees");
      const docRef = await addDoc(doc, {
        name: formData.name,
        age: formData.age,
        gender: formData.gender,
        region: formData.state,
        degree: formData.degree,
      });
      console.log("Document written with ID: ", docRef.id);
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
    }
    // console.log(currentUser);
    // console.log(AuthContext);
  }, [currentUser]);

  function convertToCSV(jsonData) {
    jsonexport(jsonData, function (err, csvData) {
      if (err) {
        console.error(err);
        return;
      }

      const blob = new Blob([csvData], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "data.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

    const handleFileUpload = async (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = async (e) => {
        const csvData = e.target.result;
        const jsonData = await convertCSVtoJSON(csvData);
  
        // Upload JSON data to Firebase
        uploadToFirestore(jsonData);
      };
  
      reader.readAsText(file);
    };

    const convertCSVtoJSON = (csvData) => {
      return new Promise((resolve, reject) => {
        Papa.parse(csvData, {
          header: true,
          complete: (results) => {
            resolve(results.data);
          },
          error: (error) => {
            reject(error);
          },
        });
      });
    };

    const uploadToFirestore = async (jsonData) => {
    
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

      console.log(jsonData);

      try {
        for (let i of (jsonData)) {
          const docRef = await addDoc(collection(db, "AllEmployees"), {
            name: i.name,
            age: i.age,
            gender: i.gender,
            region: i.region,
            degree: i.degree,
          });
          console.log("Document written with ID: ", docRef.id);
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    
      // Create a collection called "data" and add the JSON data as a document
      // collection(db,"AllEmployees")
      //   .addDoc(jsonData)
      //   .then(() => {
      //     console.log("Data uploaded successfully");
      //   })
      //   .catch((error) => {
      //     console.error("Error uploading data:", error);
      //   });
    };

  const Download = () => {
    convertToCSV(Alldata);
  };

  let boxes;

  console.log(Alldata[0]);
  Alldata.sort(function (x, y) {
    return x.age - y.age;
  });

  boxes = Alldata.map((box) => (
    <DataElements
      name={box.name}
      age={box.age}
      gender={box.gender}
      region={box.region}
      degree={box.degree}
    />
  ));

  return (
    <div>
      <div className="col">
        <div className="row left-side">
          <div className="col-md-auto upper-Img">
            <img className="upper-Image" src={logo}></img>
          </div>
          <div className="col-md-auto upload">
            <div>Upload</div>
            <div>
              <label className="uploadInputLabel" for="Uploadinput">
                Upload File
                </label>
                <input
                  className="UploadInput"
                  id="Uploadinput"
                  type="file"
                  accept=".csv"
                  onChange={handleFileUpload}
                />
            </div>
          </div>
          <div className="col-md-auto vendor">
            <div>Download</div>
            <div>
              <button className="DownloadBtn" onClick={Download}>
                Download
              </button>
            </div>
          </div>
          <div className="col language">Language</div>
        </div>
        <div className="row right-side">
          <div className="col-md-auto top-Section">
            <div className="row top-All">
              <div className="back-btn">
                <Link className="clearAll" to="/DatasetIn">
                  <img src={back} alt="" className="back-img"></img>
                </Link>
              </div>
              <div className="topLevel-Heading">
                <a className="Dataset">Dataset -</a>
                <a className="DatasetNum">11345</a>
              </div>
            </div>
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
          {/* <div className="star1">
            <img className="starImg" src={star}></img>
          </div> */}
          <div className="col botSection">
            <div className="col-md-auto botSection-Top">
              <div className="col-md-auto bstTop">
                <div className="row bstTop-top">
                  <div className="col-md-auto TopDiv">Name</div>
                  <div className="col-md-auto TopDiv">Age</div>
                  <div className="col-md-auto TopDiv">Gender</div>
                  <div className="col-md-auto TopDiv">State</div>
                  <div className="col-md-auto TopDiv">Degree</div>
                </div>
                <div className="col-md-auto AllElements">{boxes}</div>
              </div>
            </div>
            <div className="col-md-auto botSection-Bottom">
              <div className="col-md-auto bsb-Left">
                <div className="addData">
                  <div className="AddHeading">Add candidate information</div>
                  <div className="row addDataBottom">
                    <div className="col-md-auto addDataLeft">
                      <form className="row-md-auto AllDataForm">
                        <div className="row FormParts">
                          <label
                            className="col-md-auto DataLabelText"
                            htmlFor="name"
                          >
                            Name:
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="col-md-auto DataInput"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter Name"
                          />
                        </div>

                        <div className="row FormParts">
                          <label
                            className="col-md-auto DataLabelText"
                            htmlFor="age"
                          >
                            Age:
                          </label>
                          <input
                            type="text"
                            id="age"
                            name="age"
                            className="col-md-auto DataInput"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="Enter Age"
                          />
                        </div>

                        <div className="row FormParts">
                          <label
                            className="col-md-auto DataLabelText"
                            htmlFor="gender"
                          >
                            Gender:
                          </label>
                          <select
                            id="gender"
                            name="gender"
                            className="col-md-auto DataInput"
                            value={formData.gender}
                            onChange={handleChange}
                            placeholder="Enter"
                          >
                            <option value="">Select Gender</option>
                            <option value="M">M</option>
                            <option value="F">F</option>
                          </select>
                        </div>

                        <div className="row FormParts">
                          <label
                            className="col-md-auto DataLabelText"
                            htmlFor="state"
                          >
                            State:
                          </label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            className="col-md-auto DataInput"
                            value={formData.state}
                            onChange={handleChange}
                            placeholder="Enter State"
                          />
                        </div>

                        <div className="row FormParts">
                          <label
                            className="col-md-auto DataLabelText"
                            htmlFor="degree"
                          >
                            Degree:
                          </label>
                          <input
                            type="text"
                            id="degree"
                            name="degree"
                            className="col-md-auto DataInput"
                            value={formData.degree}
                            onChange={handleChange}
                            placeholder="Enter Degree"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col addDataRight">
                      <button className="BadaButton" onClick={setData}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dataset;
