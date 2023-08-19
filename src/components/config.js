import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getDatabase } from "firebase/database";

// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";



const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBuMTxskV4VnnCDyAX0JYC7nWURGEROYzA",
  authDomain: "test1-b11f0.firebaseapp.com",
  databaseURL: "https://test1-b11f0-default-rtdb.firebaseio.com",
  projectId: "test1-b11f0",
  storageBucket: "test1-b11f0.appspot.com",
  messagingSenderId: "920351567873",
  appId: "1:920351567873:web:dfecf117cb337d3839d000",
  measurementId: "G-28G3PR0SZF",
  sitekey: '6LdYFgUnAAAAANthbauU-p82zzsOHV9UDHd_SLUh',
});

// // Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// // key is the counterpart to the secret key you set in the Firebase console.
// const appCheck = initializeAppCheck(firebaseConfig, {
//   provider: new ReCaptchaV3Provider("6LcL-gQnAAAAAHfqSAQBFJWHivRCbEMd-RHI96jQ"),

//   // Optional argument. If true, the SDK automatically refreshes App Check
//   // tokens as needed.
//   isTokenAutoRefreshEnabled: true,
// });

export default firebaseConfig;

export const auth = getAuth(firebaseConfig);
export const db = getDatabase(firebaseConfig);