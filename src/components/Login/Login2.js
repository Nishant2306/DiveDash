import logo from "../images/logo.png";
import "./Login2.css";
// import React, { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import firebaseConfig from "../config";
// import { AuthContext } from "../Auth";

// const Login2 = () => {
//     //   const [currentUser, setCurrentUser] = useState(null);
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         const { email, password } = e.target.elements;
//         // try {
//         //   firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
//         // } catch (error) {
//         //     console.log("Hi1")
//         //     if(error){
//         //         console.log("Hi2")
//         //         return <Navigate to="/Error" />;
//         //       }
//         // }
//         firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value)
//           .then(() => {
//             // Authentication successful, redirect to a new page
//             setRedirectToError(false); // Reset the redirect state
//             // Perform any other actions upon successful login
//           })
//           .catch((error) => {
//             // Handle authentication error
//             console.error(error);
//             setRedirectToError(true); // Set the redirect state to true
//             setError(error.message); // Set the error message state
//           });
//       };
    
//       if (redirectToError) {
//         return <Navigate to="/Error" />;
//       }

//   return (
//     <div>
//       <div className="col">
//         <div className="row">
//           <img src={logo} alt="" className="logo"></img>
//         </div>
//         <div className="row">
//           <form onSubmit={handleSubmit}>
//             <label for="email">Email</label>
//             <input type="email" name="email" placeholder="Email" />
//             <label for="password">Password</label>
//             <input type="password" name="password" placeholder="Password" />
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//         <div className="row">ok</div>
//       </div>
//     </div>
//   );
// };

// export default Login2;

import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import firebaseConfig from "../config";
import { AuthContext } from "../Auth";

const Login2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [redirectToError, setRedirectToError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Authentication successful, redirect to a new page
        setRedirectToError(false);
        // return <Navigate to="/Otp" /> 
        console.log(email.value);
        // userCredential.user.sendEmailVerification();
      })
      .catch((error) => {
        // Handle authentication error
        console.error(error);
        setRedirectToError(true); // Set the redirect state to true
        setError(error.message); // Set the error message state
      });
  };
  const { currentUser } = useContext(AuthContext);
  if (redirectToError) {
    return <Navigate to="/error" />;
  }
  if (currentUser) {
    return <Navigate to="/Otp" />;
  }


  return (
    <div className="all">
      <div className="col all">
        <div className="row">
          <img src={logo} alt="" className="logo"></img>
        </div>
        <div className="row">
          <form className="formarea"onSubmit={handleSubmit}>
            <input className="formfill1" type="email" name="email" placeholder="Login ID" />
            <input className="formfill2" type="password" name="password" placeholder="Password" />
            <div className="formtext">*Contact management in case of forgotten password</div>
            <button className="formbtn"type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login2;
