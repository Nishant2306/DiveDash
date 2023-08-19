import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Auth";
import firebaseConfig from "../config.js";
import "./Dashboard.css";
import user from "../images/user.png";
import back from "../images/back.png";
import MainBtn from "./MainBtn";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
const Dashboard = () => {
 
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    const db = getFirestore();
    if(currentUser){
    const fetchData = async () =>{
      const querySnapshot = await getDocs(collection(db, "AuthenticatedUsers"));
      querySnapshot.forEach((doc) => {
        console.log("Hi");
        console.log(`${doc.id} =>`, doc.data().name);
        setName(doc.data().name)
      });
      setLoading(false);
    }
    fetchData();
    }
    console.log(currentUser);
    console.log(AuthContext);
  }, [currentUser]); 
  
  // const[loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getDataFromFirebase = [];
  //   const subscriber = db.collection("AuthenticatedUsers").onSnapshot((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       getDataFromFirebase.push(
  //         {...doc.data(), key:doc.id,}
  //       );
  //     });
  //     setData(getDataFromFirebase);
  //   setLoading(false);
  //   })
  //   return () => subscriber();
  // }, [loading]);

  if (!currentUser) {
    return <Navigate to="/" />;
  }
  // if(loading){
  //   <div>Loading...</div>
  // }
  return (
    <div className="allDashboard">
      <div className="col1">
        <div className="row1">
          <img src={user} alt="" className="img1"></img>
          <div className="text">
            <div className="name">Nishant</div>
            <div className="ID">ID : 2@1517</div>
          </div>
        </div>

        <div className="row2">
          <button
            className="btn1"
            onClick={() => firebaseConfig.auth().signOut()}
          >
            Log out
          </button>
        </div>
      </div>
      <div className="col2">
        <div className="row3">
          <div className="backbtn">
            <button
              className="clearbtn"
              onClick={() => firebaseConfig.auth().signOut()}
            >
              <img src={back} alt="" className="backimg"></img>
            </button>
          </div>
          <div className="headtext">DIVEDASH</div>
        </div>
        <div className="row4">
          <div className="col">
            <div className="row threeRows">
              <div className="col"><MainBtn text="Application Pool" onClick="/ApplicationPool"></MainBtn></div>
              <div className="col"><MainBtn text="Employees" onClick="/ApplicationPool"></MainBtn></div>
            </div>
            <div className="row threeRows">
              <div className="col"><MainBtn text="Retention" onClick="/ApplicationPool"></MainBtn></div>
              <div className="col"><MainBtn text="ERG Participation" onClick="/ApplicationPool"></MainBtn></div>
            </div>
            <div className="row threeRows">
              <div className="col"><MainBtn text="Leadership " onClick="/ApplicationPool"></MainBtn></div>
              <div className="col"><MainBtn text="Datasets" onClick="/DatasetIn"></MainBtn></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

/* <h1>Welcome</h1>
      <p>This is the dashboard, if you can see this you're logged in.</p>
      <button onClick={() => firebaseConfig.auth().signOut()}>Log out</button> */
