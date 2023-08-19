// // import React, { useContext } from "react";
// // import { Navigate } from "react-router-dom";
// // import firebaseConfig from "../config";
// // import { AuthContext } from "../Auth";

// // const Login1 = () => {
// //     //   const [currentUser, setCurrentUser] = useState(null);
// //       const handleSubmit = (e) => {
// //         e.preventDefault();
// //         const { email, password } = e.target.elements;
// //         // try {
// //         //   firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
// //         // } catch (error) {
// //         //     console.log("Hi1")
// //         //     if(error){
// //         //         console.log("Hi2")
// //         //         return <Navigate to="/Error" />;
// //         //       }
// //         // }
// //         firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value)
// //           .then(() => {
// //             // Authentication successful, redirect to a new page
// //             setRedirectToError(false); // Reset the redirect state
// //             // Perform any other actions upon successful login
// //           })
// //           .catch((error) => {
// //             // Handle authentication error
// //             console.error(error);
// //             setRedirectToError(true); // Set the redirect state to true
// //             setError(error.message); // Set the error message state
// //           });
// //       };

// //       if (redirectToError) {
// //         return <Navigate to="/Error" />;
// //       }

// //   return (
// //     <div>
// //       <div className="col">
// //         <div className="row">
// //           <img src={logo} alt="" className="logo"></img>
// //         </div>
// //         <div className="row">
// //           <form onSubmit={handleSubmit}>
// //             <label for="email">Email</label>
// //             <input type="email" name="email" placeholder="Email" />
// //             <label for="password">Password</label>
// //             <input type="password" name="password" placeholder="Password" />
// //             <button type="submit">Submit</button>
// //           </form>
// //         </div>
// //         <div className="row">ok</div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login1;
// import logo from "../images/logo.png";
// import "./Login1.css";
// import { useState, useContext, useRef, useMemo, useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import firebaseConfig from "../config";
// import { AuthContext } from "../Auth";
// import { auth } from "../config";
// import {
//   getAuth,
//   getMultiFactorResolver,
//   PhoneAuthProvider,
//   PhoneMultiFactorGenerator,
//   RecaptchaVerifier,
//   signInWithEmailAndPassword,
//   signInWithPhoneNumber,
// } from "firebase/auth";
// import {ReCaptchaV3Provider} from 'firebase/app-check'
// import { Toaster, toast } from "react-hot-toast";
// // import ReCAPTCHA from "react-google-recaptcha";


// const Login1 = () => {
  //   const [resolver, setResolver] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [otp, setOtp] = useState("");
  //   const [verificationId, setVerificationId] = useState(null);
  //   const [confirmationResult, setConfirmationResult] = useState(null);
  
  //   const recaptchRef = useRef();
  //   // const auth = getAuth();
  //   // RecaptchaVerifier.render()
  //   //   .then(function (recaptchRef) {
    //   //       window.recaptchaWidgetId = recaptchRef;
    //   //   });
    
    
    //   const { currentUser } = useContext(AuthContext);
    
    //   function onCaptchaVerify(callback) {
      //     if (!window.RecaptchaVerifier) {
      //       window.recaptchaVerifier = new RecaptchaVerifier(
        //         recaptchRef,
        //         {
          //           size: "invisible",
          //           callback: (response) => {
            //             // handleSubmit();
            //           },
            //           "expired-callback": () => {},
            //         },
            //         auth
            //       );
            //       window.recaptchaVerifier.render();
//     }
//   }
  
//   // const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container-id', undefined, auth);


//   const appVerifier = window.recaptchaVerifier;

//   const onOTPVerify = (e) => {
  //     // e.preventDefault();
  
  //     // onCaptchaVerify(() => {
    //       const cred = PhoneAuthProvider.credential(verificationId, otp);
    //       console.log(cred);
    //       const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);
    //       console.log(multiFactorAssertion);
    //       resolver.resolveSignIn(multiFactorAssertion).then((r) => {
      //         console.log(r);
      //       // });
      //     });
      //   };
      
      //   const handleSubmit = (e) => {
        //     setLoading(false);
  //     // e.preventDefault();
  //     const { email, password } = e.target.elements;
  
  //     firebaseConfig
  //       .auth()
  //       .signInWithEmailAndPassword(email.value, password.value)
  //       .then((userCredential) => {
  //         setRedirectToError(false);
//         console.log(email.value);
//       })
//       .catch((error) => {
  //         // Handle authentication error
  //         if (error.code === "auth/multi-factor-auth-required") {
    //           const _resolver = getMultiFactorResolver(auth, error);
    //           console.log("set resolver", _resolver);
    //           setResolver(_resolver);
    //           onCaptchaVerify();
    
    //           const phoneInfoOptions = {
      //             multiFactorHint: _resolver.hints[0],
      //             session: _resolver.session,
      //           };
      //           console.log("Hi1");
      //           console.log(phoneInfoOptions);
      //           console.log("Hi2");
      
      //             const phoneAuthProvider = new PhoneAuthProvider(auth);
      //             // onCaptchaVerify(() => {
        //               console.log("Recaptcha callback");
        //             phoneAuthProvider
//               .verifyPhoneNumber(phoneInfoOptions, {verify: window.recaptchaVerifier})
//               .then(function (verificationId) {
  //                 console.log("verificationID", verificationId);
  //                 setVerificationId(verificationId);
  //               });
  //           // });
  
  //           // onOTPVerify();
  //           // Set the error message state
  //         } else if (error.code === "auth/wrong-password") {
    //           console.error(error);
    //           setRedirectToError(true); // Set the redirect state to true
    //           setError(error.message);
    //         }
    //       });
    //   };
    
    //   if (redirectToError) {
      //     return <Navigate to="/error" />;
      //   }
      //   if (currentUser) {
        //     return <Navigate to="/Otp" />;
        //   }
        
        //   return (
          //     <div className="all">
          //       <div id="recaptcha-container" ref={recaptchRef}></div>
          
          //       {loading ? (
            //         <div className="col all">
    //           <div className="row">
    //             <img src={logo} alt="" className="logo"></img>
    //           </div>
    //           <div className="row">
    //             <form className="formarea" onSubmit={handleSubmit}>
    //               <input
    //                 className="formfill1"
    //                 type="email"
    //                 name="email"
    //                 placeholder="Login ID"
    //               />
    //               <input
    //                 className="formfill2"
    //                 type="password"
    //                 name="password"
    //                 placeholder="Password"
    //               />
    //               <div className="formtext">
//                 *Contact management in case of forgotten password
//               </div>
//               <button className="formbtn">Submit</button>
//             </form>
//           </div>
//         </div>
//       ) : (
  //         <div>
  //           <div id="recaptcha-container" ref={recaptchRef}></div>
  //           <form className="formarea" onSubmit={onOTPVerify}>
  //             <div className="formtext">OTP sent successfully</div>
  //             <input
  //               className="formfill1"
  //               type="text"
  //               name="Otp"
  //               placeholder="OTP"
  //               value={otp}
  //               onInput={(event) => {
    //                 setOtp(event.target.value);
  //               }}
  //             />
  //             <button className="formbtn">Verify</button>
  //           </form>
  //         </div>
  //       )}
  //     </div>
  //   );
  // };
  
  // export default Login1;
  
  // import "./Login1.css";
  // import React, { useState } from "react";
  // import { Navigate } from "react-router-dom";
  // import firebaseConfig from "../config";
  // import { AuthContext } from "../Auth";
  
  // const Login1 = () => {
    //   //   const [currentUser, setCurrentUser] = useState(null);
    //   const [error, setError] = useState(null);
    //     const [redirectToError, setRedirectToError] = useState(false);
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

// export default Login1;

import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import firebaseConfig from "../config";
import { AuthContext } from "../Auth";
import logo from "../images/logo.png";

const Login1 = () => {
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
    return <Navigate to="/Otp1" />;
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

export default Login1;

