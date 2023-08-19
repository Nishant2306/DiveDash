import { useCallback, useState, useEffect } from "react";
import logo from "../images/logo.png";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import React, { useContext, useRef } from "react";
import { AuthContext } from "../Auth";
import firebaseConfig from "../config.js";
import "./Otp.css";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../config";
import "firebase/compat/auth";
import { Toaster, toast } from "react-hot-toast";
// import "react-toastify/dist/ReactToastify.css";

const Otp1 = () => {
  const [loading, setLoading] = useState(true);
  const [otp, setOtp] = useState("");
  const { currentUser } = useContext(AuthContext);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const navigate = useNavigate();

  function onCaptchVerify() {
        if (!window.RecaptchaVerifier) {
          window.recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {
              size: "invisible",
              callback: (response) => {
                onSignup();
              },
              "expired-callback": () => {},
            },
            auth
          );
        }
}

          function Exit() {
    console.log("Hi1");
    firebaseConfig.auth().signOut();
    console.log("Hi2");
  }

  const onSignup = () => {
        // setLoading(true);
        onCaptchVerify();
    
        const appVerifier = window.recaptchaVerifier;
        // const phoneNumber = "+919100442486";
        const phoneNumber = "+917231949627";
        const result = signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    
        result
          .then((confirmationResult) => {
            setConfirmationResult(confirmationResult);
            // setLoading(false);
            toast.success("OTP sent successfully!");
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
            // setLoading(false);
          });
        setLoading(false);
      };
      const onOTPVerify = (event) => {
        // setLoading(true);
        event.preventDefault();
        console.log("Hi1");
        // setOtp(otpRef.current.value);
        console.log(otp);
        console.log("Hi2");
        // var credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, code);
        // firebase.auth().signInWithCredential(credential);
        // console.log(credential);
        //   firebase.auth().signInWithPhoneNumber("+xxxxxxxx", window.recaptchaVerifier)
        // .then((confirmationResult) => {
        //   // At this point SMS is sent. Ask user for code.
        //   let code = otp;
        //   return confirmationResult.confirm(code);
        // })
        // .then(() => {
        //   // User is now signed in and accessible via result.user
        //   return <Navigate to={"/Dashboard"}/>
        // })
        // .catch((error) => {
        //   console.log(error);
        // });
        // console.log(confirmationResult);
        confirmationResult
          .confirm(otp)
          .then((result) => {
            console.log("Test1");
            const user = result.user;
            console.log(user);
            console.log(result);
            console.log("Test2");
            return navigate("/CandidateSearchIn");
            // return <Navigate to="/Dashboard"></Navigate>;
            // setLoading(false);
          })
          .catch((err) => {
            console.log("Test3");
            console.log(err);
            // setLoading(false);
          });
    
      };
  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Toaster ToastOptions={{ duration: 4000 }} />
      <div id="recaptcha-container"></div>
      {/* OTP Page
      <button onClick={onSignup}>Send OTP</button>
      <label htmlFor="otp">Enter your OTP</label>
      <button onClick={onOTPVerify}>Verify</button> */}
      <div className="all">
        <div className="col all">
          <div className="row">
            <img src={logo} alt="" className="logo"></img>
          </div>

          <div className="row">
            {loading ? (
              <div>
                <div className="formtext">
                  An OTP will be sent to the number *******981
                </div>
                <div className="formarea">
                  <button
                    className="formbtn1"
                    type="submit"
                    onClick={onSignup}
                  >
                    Continue
                  </button>
                  <button className="formbtn2" type="submit" onClick={Exit}>
                    Return to Home
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <form className="formarea" onSubmit={onOTPVerify}>
                  <div className="formtext">
                    OTP sent successfully to *******981
                  </div>
                  <input
                    className="formfill1"
                    type="text"
                    name="Otp"
                    placeholder="OTP"
                    value={otp}
                    onInput={(event) => {
                      setOtp(event.target.value);
                    }}
                  />
                  <button className="formbtn" type="submit">
                    Verify
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp1;

// Working code****************

//   const auth = getAuth();
//   // const { loading, setLoading } = useState(false);
//   const [otp, setOtp] = useState("");
//   const otpRef = useRef();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { currentUser } = useContext(AuthContext);
//   const [email, setEmail] = useState([]);

//   useEffect(() => {
//     const db = getFirestore();
//     if(currentUser){
//     const fetchData = async () =>{
//       const querySnapshot = await getDocs(collection(db, "AuthenticatedUsers"));
//       querySnapshot.forEach((doc) => {
//         console.log("Hi");
//         console.log(`${doc.id} =>`, doc.data().emailId);
//         // setName(doc.data().name)
//         setEmail(doc.data().emailId);
//         console.log("Hi1");
//         console.log(email);
//       });
//       setLoading(false);
//     }
//     fetchData();
//     }
//     console.log(currentUser);
//     console.log(AuthContext);
//   }, [currentUser]);

//   function onCaptchVerify() {
//     if (!window.RecaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(
//         "recaptcha-container",
//         {
//           size: "invisible",
//           callback: (response) => {
//             // onSignup();
//           },
//           "expired-callback": () => {},
//         },
//         auth
//       );
//     }
//   }
//   const onSignup = () => {
//     // setLoading(true);
//     onCaptchVerify();

//     const appVerifier = window.recaptchaVerifier;
//     // const phoneNumber = "+919100442486";
//     const phoneNumber = "+917231949627";
//     const result = signInWithPhoneNumber(auth, phoneNumber, appVerifier);

//     result
//       .then((confirmationResult) => {
//         setConfirmationResult(confirmationResult);
//         // setLoading(false);
//         toast.success("OTP sent successfully!");
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(error);
//         // setLoading(false);
//       });
//     setLoading(false);
//   };


//   // confirmationResult.confirm(code).then((result) => {
//   //     // User signed in successfully.
//   //     const user = result.user;
//   //     // ...
//   //   })
//   //   .catch((error) => {
//   //     // User couldn't sign in (bad verification code?)
//   //     // ...
//   //   });
//   const code = otp;
//   console.log(code);
//   if (!currentUser) {
//     console.log("Hi3");
//     return <Navigate to="/" />;
//   }
//   function Exit() {
//     console.log("Hi1");
//     firebaseConfig.auth().signOut();
//     console.log("Hi2");
//   }
//   return (
//       <div>
//         <Toaster ToastOptions={{ duration: 4000 }} />
//         <div id="recaptcha-container"></div>
//         {/* OTP Page
//         <button onClick={onSignup}>Send OTP</button>
//         <label htmlFor="otp">Enter your OTP</label>
//         <button onClick={onOTPVerify}>Verify</button> */}
//         <div className="all">
//           <div className="col all">
//             <div className="row">
//               <img src={logo} alt="" className="logo"></img>
//             </div>

//             <div className="row">
//               {loading ? (
//                 <div>
//                   <div className="formtext">
//                     An OTP will be sent to the number *******981
//                   </div>
//                   <div className="formarea">
//                     <button className="formbtn1" type="submit" onClick={onSignup}>
//                       Continue
//                     </button>
//                     <button className="formbtn2" type="submit" onClick={Exit}>
//                       Return to Home
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div>
//                   <form className="formarea" onSubmit={onOTPVerify}>
//                     <div className="formtext">
//                       OTP sent successfully to *******981
//                     </div>
//                     <input
//                       className="formfill1"
//                       type="text"
//                       name="Otp"
//                       placeholder="OTP"
//                       value={otp}
//                       onInput={(event) => {
//                         setOtp(event.target.value);
//                       }}
//                     />
//                     <button className="formbtn" type="submit">
//                       Verify
//                     </button>
//                   </form>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default Otp;
